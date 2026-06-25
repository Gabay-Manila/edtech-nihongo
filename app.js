/* =========================================================
   app.js — edtech-nihongo engine
   Reads BLOCKS from questions.js (loaded first in index.html).
   GA4 events fire via the global gtag() defined in index.html.
   ========================================================= */

/* ---------- GA4 helper (safe no-op if gtag isn't loaded) ---------- */
function track(eventName, params){
  try{
    if(typeof gtag === "function") gtag("event", eventName, params || {});
  }catch(e){ /* never let analytics break the app */ }
}

/* ---------- storage ---------- */
const STORE_KEY = "edtechnihongo_progress_v2";
function progressKey(blockId, setId){ return `${blockId}::${setId}`; }
function loadProgress(){
  try{ return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch(e){ return {}; }
}
function getSetProgress(blockId, setId){
  const p = loadProgress();
  return p[progressKey(blockId, setId)] || null;
}
function saveProgress(blockId, setId, score, total, weakIds, reviewMode){
  const p = loadProgress();
  const key = progressKey(blockId, setId);
  const prev = p[key] || {bestScore:0, bestTotal:0, attempts:0};
  // Best score/total are only updated together, from full (non-review) runs,
  // and only when this run's ratio is at least as good as the stored best.
  // This avoids mixing a full-run score with a smaller review-run total.
  let bestScore = prev.bestScore || 0;
  let bestTotal = prev.bestTotal || 0;
  if(bestTotal > 0 && bestScore > bestTotal){
    // Corrupted record from an earlier bug (e.g. "5/3") — reset before comparing.
    bestScore = 0; bestTotal = 0;
  }
  if(!reviewMode){
    const prevRatio = bestTotal > 0 ? (bestScore / bestTotal) : -1;
    const newRatio = total > 0 ? (score / total) : 0;
    if(newRatio >= prevRatio){
      bestScore = score;
      bestTotal = total;
    }
  }
  p[key] = {
    bestScore: bestScore,
    bestTotal: bestTotal,
    attempts: (prev.attempts||0) + 1,
    lastWeakIds: weakIds,
    lastAt: new Date().toISOString()
  };
  try{ localStorage.setItem(STORE_KEY, JSON.stringify(p)); }catch(e){}
}

/* ---------- audio (437Hz brand tone) ---------- */
let audioCtx = null;
function tone(freq, ms, type){
  try{
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.16, audioCtx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + ms/1000);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + ms/1000 + 0.02);
  }catch(e){ /* silent fail on unsupported browsers */ }
}
function playCorrect(){ tone(437, 220, "sine"); }
function playIncorrect(){ tone(218.5, 260, "sine"); }

/* ---------- auto-read question audio (Speech Synthesis API) ---------- */
function cancelSpeech(){
  try{ window.speechSynthesis && window.speechSynthesis.cancel(); }catch(e){ /* unsupported */ }
}
function speakUtterance(text){
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ja-JP";
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}
// Auto-plays prompt → いち → に → さん → よん, queued back-to-back, no buttons.
const COUNT_JP = ["いち","に","さん","よん"];
function speakQuestion(q, choicesOverride){
  cancelSpeech(); // stop anything left over from the previous question first
  try{
    if(!window.speechSynthesis) return;
    const choices = choicesOverride || q.choices;
    speakUtterance(q.prompt);
    choices.forEach((c,i)=> speakUtterance(`${COUNT_JP[i] || (i+1)}、${c.jp}`));
  }catch(e){ /* speech synthesis unsupported or blocked — fail silently */ }
}

/* ---------- helpers ---------- */
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
function getBlock(id){ return BLOCKS.find(b=>b.id===id); }
function getSet(block, setId){ return block.sets.find(s=>s.id===setId); }
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}

/* ---------- state ---------- */
let state = {
  screen:"home",
  blockId:null,
  setId:null,
  queue:[],
  index:0,
  score:0,
  wrong:[],          // question objects answered wrong this run
  reviewMode:false,
  answered:false,
  hintOpen:false
};

/* ---------- rendering ---------- */
const app = document.getElementById("app");

function waveSvg(){
  return '<svg class="wave" viewBox="0 0 600 18" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">'+
    '<path d="M0 9 Q 25 0 50 9 T 100 9 T 150 9 T 200 9 T 250 9 T 300 9 T 350 9 T 400 9 T 450 9 T 500 9 T 550 9 T 600 9" '+
    'fill="none" stroke="#2f4858" stroke-width="1.4" stroke-opacity="0.35"/></svg>';
}

function renderHome(){
  track("view_home", {});
  const islands = BLOCKS.map(b=>{
    const totalQ = b.sets.reduce((sum,s)=> sum + s.questions.length, 0);
    const setCount = b.sets.length;
    return `
      <button class="island" data-block="${b.id}">
        <span class="lvl">${b.level}</span>
        <h2 class="jp">${b.jp}</h2>
        <div class="jp-label">${b.title}</div>
        <div style="font-size:13px;color:var(--ink-soft)">${b.blurb}</div>
        <div class="meta">
          <span>${setCount} set${setCount>1?'s':''} · ${totalQ} questions</span>
          <span></span>
        </div>
      </button>`;
  }).join("");

  app.innerHTML = `
    <div class="topbar">
      <div class="brand"><b>edtech-nihongo</b> · adaptive survival japanese</div>
      <div class="tonefreq">437Hz</div>
    </div>
    ${waveSvg()}
    <div class="hero">
      <h1>Pick an island. Learn by situation, not by chapter.</h1>
      <p>Every quiz shows the English context first. Tap <b>AI Support</b> any time you need the situation, vocabulary, or grammar explained in plain English before you choose.</p>
      <div style="margin-top:2px;">
        <button id="howToToggle" style="background:none;border:none;color:var(--sun);font-size:13px;font-weight:600;text-decoration:underline;cursor:pointer;padding:0;">📖 How to use this app / 使い方</button>
      </div>
      <div id="howToPanel" style="display:none;margin-top:12px;background:var(--sun-soft);border:1px solid #e3b89c;border-radius:12px;padding:14px 16px;font-size:13.5px;line-height:1.6;">
        <div style="font-weight:700;color:#7a3216;margin-bottom:8px;">🎯 Goal: clear all 180 questions to pass the JFT-Basic exam.<br><span style="font-weight:500;font-size:12.5px;">目標：全180問クリアでJFT-Basic合格を目指す。</span></div>
        <div style="margin-bottom:8px;">🔊 <b>Listen first.</b> Tap choices and train your ear — don't just read.<br><span style="color:#5e4030;font-size:12.5px;">まず「耳」で聴く。読むだけでなく音とリズムを覚える。</span></div>
        <div style="margin-bottom:8px;">💡 <b>Stuck? Tap AI Support</b> for an instant plain-English explanation.<br><span style="color:#5e4030;font-size:12.5px;">迷ったらAI Supportを即タップ。</span></div>
        <div style="margin-bottom:8px;">🔀 <b>Choices shuffle every time</b> — match the situation, not the button position.<br><span style="color:#5e4030;font-size:12.5px;">選択肢は毎回シャッフル。位置の暗記は通用しない。</span></div>
        <div>⏱️ <b>5 minutes a day.</b> Finish 1 island (3 sets, 45 questions), then stop.<br><span style="color:#5e4030;font-size:12.5px;">1日5分。1島(3セット・45問)で店じまい。</span></div>
      </div>
    </div>
    <div class="islands">${islands}</div>
    <footer>
      Yoshida EdTech Works / EdTech Gabay — built for Filipino learners of survival Japanese.<br>
      Progress is saved on this device only. No personal data is sent to any server.
      <div style="margin-top:10px;">
        <button id="complianceToggle" style="background:none;border:none;color:var(--ink-soft);font-size:11.5px;text-decoration:underline;cursor:pointer;padding:0;">Compliance &amp; Info</button>
      </div>
      <div id="compliancePanel" style="display:none;text-align:left;max-width:560px;margin:10px auto 0;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px 16px;font-size:11.5px;color:var(--ink-soft);line-height:1.6;">
        Operator: Yoshida EdTech Works / Contact: edtechgabay@gmail.com<br><br>
        This app has no features that collect personal information such as your name or email address (no account registration or login). We use Google Analytics (GA4) for access analysis, which anonymously collects usage data such as browsing behavior, approximate location, and device type. Collected data is used only to improve this app and is never sold to third parties. For questions about data handling or deletion requests, please contact us at the email address above.<br><br>
        Last updated: June 24, 2026 / Yoshida EdTech Works / Manila &amp; Japan
      </div>
    </footer>
  `;

  document.getElementById("howToToggle").addEventListener("click", ()=>{
    const panel = document.getElementById("howToPanel");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
    track("how_to_use_opened", {});
  });

  document.getElementById("complianceToggle").addEventListener("click", ()=>{
    const panel = document.getElementById("compliancePanel");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  });

  app.querySelectorAll(".island").forEach(el=>{
    el.addEventListener("click", ()=> renderSets(el.dataset.block));
  });
}

function renderSets(blockId){
  track("view_sets", {block_id: blockId});
  const block = getBlock(blockId);
  state.screen = "sets";
  state.blockId = blockId;

  const setCards = block.sets.map(s=>{
    const p = getSetProgress(blockId, s.id);
    const hasBest = p && p.bestTotal > 0 && p.bestScore <= p.bestTotal;
    const bestLine = hasBest ? `Best: ${p.bestScore}/${p.bestTotal}` : "Not started yet";
    return `
      <button class="island" data-set="${s.id}" style="text-align:left;">
        <span class="lvl">${block.level}</span>
        <h2 style="font-size:18px;margin:0 0 4px;">${s.label}</h2>
        <div class="meta">
          <span>${s.questions.length} questions</span>
          <span class="${hasBest?'best':''}">${bestLine}</span>
        </div>
      </button>`;
  }).join("");

  app.innerHTML = `
    <div class="quiz-top">
      <button class="back-link" id="backBtn">&larr; Islands</button>
      <div class="tonefreq">437Hz</div>
    </div>
    ${waveSvg()}
    <div class="hero">
      <h1 class="jp" style="font-size:22px;">${block.jp}</h1>
      <p>${block.title} · ${block.level} — choose a set to start.</p>
    </div>
    <div class="islands">${setCards}</div>
  `;

  document.getElementById("backBtn").addEventListener("click", ()=>{ state.screen="home"; renderHome(); });
  app.querySelectorAll(".island").forEach(el=>{
    el.addEventListener("click", ()=> startBlock(blockId, el.dataset.set));
  });
}

function startBlock(blockId, setId, reviewIds){
  const block = getBlock(blockId);
  const set = getSet(block, setId);
  let pool = set.questions;
  if(reviewIds && reviewIds.length){
    pool = set.questions.filter(q=> reviewIds.includes(q.id));
    state.reviewMode = true;
  } else {
    state.reviewMode = false;
  }
  state.screen = "quiz";
  state.blockId = blockId;
  state.setId = setId;
  state.queue = shuffle(pool);
  state.index = 0;
  state.score = 0;
  state.wrong = [];
  state.answered = false;
  state.hintOpen = false;

  track("block_start", {block_id: blockId, set_id: setId, review_mode: state.reviewMode, question_count: pool.length});
  renderQuiz();
}

function renderQuiz(){
  const block = getBlock(state.blockId);
  const set = getSet(block, state.setId);
  const q = state.queue[state.index];
  const pct = Math.round((state.index/state.queue.length)*100);

  // Shuffle a COPY of the choices for display — the correct:true flag travels
  // with each choice object, so scoring stays accurate regardless of order.
  const choices = shuffle(q.choices);

  const choicesHtml = choices.map((c,i)=>`
    <button class="choice" data-idx="${i}">${c.jp}<span class="tag"></span></button>
  `).join("");

  app.innerHTML = `
    <div class="quiz-top">
      <button class="back-link" id="backBtn">&larr; ${block.title} · ${set.label}</button>
      <div class="tonefreq">${state.index+1} / ${state.queue.length}</div>
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    ${state.reviewMode ? `<div class="review-banner">Weak-point review: redoing the questions you missed last time, with AI Support handy.</div>` : ""}
    <div class="situation-en"><b>Situation:</b> ${escapeHtml(q.situation)}</div>
    <p class="prompt-jp jp">${q.prompt}</p>
    <div class="choices">${choicesHtml}</div>

    <button class="ai-btn" id="aiBtn"><span class="bolt">💡</span> AI Support (Hint)</button>
    <div class="ai-panel" id="aiPanel">
      <h4>Situation</h4>
      <p>${escapeHtml(q.ai.situation)}</p>
      <h4>Key vocabulary</h4>
      ${q.ai.vocab.map(v=>`<div class="vocab-row"><span class="vocab-jp jp">${v.jp}</span><span class="vocab-en">${escapeHtml(v.en)}</span></div>`).join("")}
      <div class="grammar-box">
        <h4>Grammar point</h4>
        <p style="margin:0;">${escapeHtml(q.ai.grammar)}</p>
      </div>
    </div>

    <button class="next-btn" id="nextBtn" disabled>Next</button>
  `;

  // Auto-fire the moment this screen is drawn — no tap required.
  speakQuestion(q, choices);

  document.getElementById("backBtn").addEventListener("click", ()=>{ cancelSpeech(); renderSets(state.blockId); });
  const aiBtn = document.getElementById("aiBtn");
  const aiPanel = document.getElementById("aiPanel");
  let aiOpenedLogged = false;
  aiBtn.addEventListener("click", ()=>{
    aiPanel.classList.toggle("open");
    if(aiPanel.classList.contains("open") && !aiOpenedLogged){
      aiOpenedLogged = true;
      track("ai_support_opened", {block_id: state.blockId, question_id: q.id});
    }
  });

  const choiceButtons = app.querySelectorAll(".choice");
  choiceButtons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      if(state.answered) return;
      cancelSpeech();
      state.answered = true;
      const idx = Number(btn.dataset.idx);
      const picked = choices[idx];
      choiceButtons.forEach((b,i)=>{
        b.disabled = true;
        if(choices[i].correct){
          b.classList.add("correct");
          b.querySelector(".tag").textContent = "CORRECT";
        }
      });
      if(picked.correct){
        state.score++;
        playCorrect();
      } else {
        btn.classList.add("incorrect");
        btn.querySelector(".tag").textContent = "YOUR ANSWER";
        playIncorrect();
        if(!state.wrong.find(w=>w.id===q.id)) state.wrong.push(q);
      }
      track("answer_submitted", {
        block_id: state.blockId,
        set_id: state.setId,
        question_id: q.id,
        correct: !!picked.correct,
        review_mode: state.reviewMode
      });
      document.getElementById("nextBtn").disabled = false;
    });
  });

  document.getElementById("nextBtn").addEventListener("click", ()=>{
    cancelSpeech();
    state.index++;
    state.answered = false;
    if(state.index >= state.queue.length){
      renderResult();
    } else {
      renderQuiz();
    }
  });
}

function renderResult(){
  const block = getBlock(state.blockId);
  const set = getSet(block, state.setId);
  const total = state.queue.length;
  saveProgress(state.blockId, state.setId, state.score, total, state.wrong.map(w=>w.id), state.reviewMode);

  track("quiz_complete", {
    block_id: state.blockId,
    set_id: state.setId,
    score: state.score,
    total: total,
    review_mode: state.reviewMode,
    weak_count: state.wrong.length
  });

  let weakHtml = "";
  if(state.wrong.length === 0){
    weakHtml = `<div class="clean-msg">${state.reviewMode ? "Weak points cleared! Nice work." : "No weak points this round — full marks."}</div>`;
  } else {
    weakHtml = `
      <div class="weak-section">
        <h3>Weak points to review (in English)</h3>
        ${state.wrong.map(w=>`
          <div class="weak-item">
            <span class="sit">${escapeHtml(w.situation)}</span>
            <span class="vocabline">Key term: ${w.ai.vocab[0] ? escapeHtml(w.ai.vocab[0].jp + " — " + w.ai.vocab[0].en) : ""} · Grammar: ${escapeHtml(w.ai.grammar.split(".")[0])}.</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  const showRetryWeak = state.wrong.length > 0;

  app.innerHTML = `
    <div class="quiz-top">
      <button class="back-link" id="backBtn">&larr; ${block.title} · ${set.label}</button>
      <div class="tonefreq">437Hz</div>
    </div>
    ${waveSvg()}
    <div class="score-card">
      <div class="big">${state.score} / ${total}</div>
      <div class="small">${block.jp} · ${set.label} · ${block.level}${state.reviewMode ? " · review run" : ""}</div>
    </div>
    ${weakHtml}
    <div class="result-actions">
      ${showRetryWeak ? `<button class="btn-primary" id="retryWeakBtn">Redo weak points now (with AI Support)</button>` : ""}
      <button class="btn-secondary" id="retryAllBtn">Retry full ${set.label}</button>
      <button class="btn-secondary" id="setsBtn">Back to ${block.title} sets</button>
      <button class="btn-secondary" id="homeBtn">Back to islands</button>
    </div>
  `;

  document.getElementById("backBtn").addEventListener("click", ()=>{ cancelSpeech(); renderSets(state.blockId); });
  document.getElementById("setsBtn").addEventListener("click", ()=>{ cancelSpeech(); renderSets(state.blockId); });
  document.getElementById("homeBtn").addEventListener("click", ()=>{ cancelSpeech(); state.screen="home"; renderHome(); });
  document.getElementById("retryAllBtn").addEventListener("click", ()=> startBlock(state.blockId, state.setId));
  if(showRetryWeak){
    document.getElementById("retryWeakBtn").addEventListener("click", ()=>{
      track("weak_point_retry", {block_id: state.blockId, set_id: state.setId, count: state.wrong.length});
      startBlock(state.blockId, state.setId, state.wrong.map(w=>w.id));
    });
  }
}

/* ---------- boot ---------- */
renderHome();
