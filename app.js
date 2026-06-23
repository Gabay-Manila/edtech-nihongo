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
function loadProgress(){
  try{ return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveProgress(blockId, score, total, weakIds){
  const p = loadProgress();
  const prev = p[blockId] || {bestScore:0, bestTotal:total, attempts:0};
  p[blockId] = {
    bestScore: Math.max(prev.bestScore||0, score),
    bestTotal: total,
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
function speakQuestion(q){
  cancelSpeech(); // stop anything left over from the previous question first
  try{
    if(!window.speechSynthesis) return;
    speakUtterance(q.prompt);
    q.choices.forEach((c,i)=> speakUtterance(`${COUNT_JP[i] || (i+1)}、${c.jp}`));
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
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}

/* ---------- state ---------- */
let state = {
  screen:"home",
  blockId:null,
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
  const progress = loadProgress();
  const islands = BLOCKS.map(b=>{
    const p = progress[b.id];
    const bestLine = p ? `Best: ${p.bestScore}/${p.bestTotal}` : "Not started yet";
    return `
      <button class="island" data-block="${b.id}">
        <span class="lvl">${b.level}</span>
        <h2 class="jp">${b.jp}</h2>
        <div class="jp-label">${b.title}</div>
        <div style="font-size:13px;color:var(--ink-soft)">${b.blurb}</div>
        <div class="meta">
          <span>${b.questions.length} questions</span>
          <span class="${p?'best':''}">${bestLine}</span>
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
    </div>
    <div class="islands">${islands}</div>
    <footer>
      Yoshida EdTech Works / EdTech Gabay — built for Filipino learners of survival Japanese.<br>
      Progress is saved on this device only. No personal data is sent to any server.
    </footer>
  `;

  app.querySelectorAll(".island").forEach(el=>{
    el.addEventListener("click", ()=> startBlock(el.dataset.block));
  });
}

function startBlock(blockId, reviewIds){
  const block = getBlock(blockId);
  let pool = block.questions;
  if(reviewIds && reviewIds.length){
    pool = block.questions.filter(q=> reviewIds.includes(q.id));
    state.reviewMode = true;
  } else {
    state.reviewMode = false;
  }
  state.screen = "quiz";
  state.blockId = blockId;
  state.queue = shuffle(pool);
  state.index = 0;
  state.score = 0;
  state.wrong = [];
  state.answered = false;
  state.hintOpen = false;

  track("block_start", {block_id: blockId, review_mode: state.reviewMode, question_count: pool.length});
  renderQuiz();
}

function renderQuiz(){
  const block = getBlock(state.blockId);
  const q = state.queue[state.index];
  const pct = Math.round((state.index/state.queue.length)*100);

  const choicesHtml = q.choices.map((c,i)=>`
    <button class="choice" data-idx="${i}">${c.jp}<span class="tag"></span></button>
  `).join("");

  app.innerHTML = `
    <div class="quiz-top">
      <button class="back-link" id="backBtn">&larr; ${block.title}</button>
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
  speakQuestion(q);

  document.getElementById("backBtn").addEventListener("click", ()=>{ cancelSpeech(); state.screen="home"; renderHome(); });

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
      const picked = q.choices[idx];
      choiceButtons.forEach((b,i)=>{
        b.disabled = true;
        if(q.choices[i].correct){
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
  const total = state.queue.length;
  saveProgress(state.blockId, state.score, total, state.wrong.map(w=>w.id));

  track("quiz_complete", {
    block_id: state.blockId,
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
      <button class="back-link" id="backBtn">&larr; ${block.title}</button>
      <div class="tonefreq">437Hz</div>
    </div>
    ${waveSvg()}
    <div class="score-card">
      <div class="big">${state.score} / ${total}</div>
      <div class="small">${block.jp} · ${block.level}${state.reviewMode ? " · review run" : ""}</div>
    </div>
    ${weakHtml}
    <div class="result-actions">
      ${showRetryWeak ? `<button class="btn-primary" id="retryWeakBtn">Redo weak points now (with AI Support)</button>` : ""}
      <button class="btn-secondary" id="retryAllBtn">Retry full ${block.title} set</button>
      <button class="btn-secondary" id="homeBtn">Back to islands</button>
    </div>
  `;

  document.getElementById("backBtn").addEventListener("click", ()=>{ cancelSpeech(); state.screen="home"; renderHome(); });
  document.getElementById("homeBtn").addEventListener("click", ()=>{ cancelSpeech(); state.screen="home"; renderHome(); });
  document.getElementById("retryAllBtn").addEventListener("click", ()=> startBlock(state.blockId));
  if(showRetryWeak){
    document.getElementById("retryWeakBtn").addEventListener("click", ()=>{
      track("weak_point_retry", {block_id: state.blockId, count: state.wrong.length});
      startBlock(state.blockId, state.wrong.map(w=>w.id));
    });
  }
}

/* ---------- boot ---------- */
renderHome();
