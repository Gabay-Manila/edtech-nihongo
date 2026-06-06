/**
 * app.js
 * ─────────────────────────────────────────────────────────────
 * EdTech Gabay - NIHONGO サバイバル
 * アプリケーション本体ロジック
 *
 * ✅ index.html にロジックはゼロ
 * ✅ レッスン追加時は lesson-registry.js だけを編集
 * ✅ data-lXX.js はロードされたタイミングで自動認識
 * ─────────────────────────────────────────────────────────────
 */

'use strict';

// ── 状態管理 ───────────────────────────────────────────────────
const AppState = {
  currentLessonId:      parseInt(localStorage.getItem('gabay_current_lesson'), 10) || 2,
  currentLang:          localStorage.getItem('gabay_lang') || 'ja',
  currentQuestionIndex: 0,

  save() {
    localStorage.setItem('gabay_current_lesson', this.currentLessonId);
    localStorage.setItem('gabay_lang',           this.currentLang);
  }
};

// ── DOM ヘルパー ───────────────────────────────────────────────
const $ = id => document.getElementById(id);

function showEl(id)  { $(id)?.classList.remove('hidden'); }
function hideEl(id)  { $(id)?.classList.add('hidden'); }

// ── レッスンデータ動的ロード ───────────────────────────────────
/**
 * data-lXX.js を動的に <script> タグで読み込む。
 * 読み込み完了後に callback を呼ぶ。
 * 課が増えても index.html / app.js を変更する必要はない。
 */
function loadLessonData(lessonId, callback) {
  const oldScript = document.getElementById('lesson-data-script');
  if (oldScript) oldScript.remove();

  // グローバル変数を明示的にリセット
  window.jftQuizData = undefined;

  const script = document.createElement('script');
  script.id    = 'lesson-data-script';
  script.src   = `js/data-l${lessonId}.js`;
  script.onload  = () => callback(true);
  script.onerror = () => callback(false);   // ファイルが存在しない課も安全に処理
  document.head.appendChild(script);
}

// ── ピッカー構築（lesson-registry.js から自動生成）───────────
function buildLessonPicker() {
  const picker = $('lesson-picker');
  picker.innerHTML = '';

  // LESSON_REGISTRY は lesson-registry.js で定義されている
  if (typeof LESSON_REGISTRY === 'undefined') {
    console.error('[Gabay] lesson-registry.js が読み込まれていません');
    return;
  }

  LESSON_REGISTRY.forEach(({ id, title }) => {
    const opt = document.createElement('option');
    opt.value     = id;
    opt.textContent = title;
    picker.appendChild(opt);
  });

  picker.value = AppState.currentLessonId;
}

// ── 言語切替 ───────────────────────────────────────────────────
function switchLanguage(langCode) {
  AppState.currentLang = langCode;
  AppState.save();
  renderCurrentQuestion();
}

// ── 課切替 ────────────────────────────────────────────────────
function changeLesson(val) {
  AppState.currentLessonId      = parseInt(val, 10);
  AppState.currentQuestionIndex = 0;
  AppState.save();

  hideEl('congrats-room');
  showEl('quiz-room');
  resetOptionStyles();
  loadAndRender(AppState.currentLessonId);
}

// ── ロード → レンダリングのメインパイプライン ──────────────────
function loadAndRender(lessonId) {
  const lesson = (typeof LESSON_REGISTRY !== 'undefined')
    ? LESSON_REGISTRY.find(l => l.id === lessonId)
    : null;

  // 第1課：ひらがなモード
  if (lesson?.type === 'kana') {
    hideEl('quiz-room');
    showEl('hiragana-board');
    updateLangButtons();
    return;
  }

  // それ以外：クイズモード
  hideEl('hiragana-board');
  showEl('quiz-room');

  loadLessonData(lessonId, success => {
    if (!success) {
      $('question-text-box').textContent = '⚠️ データファイルが見つかりません (data-l' + lessonId + '.js)';
      return;
    }
    renderCurrentQuestion();
  });
}

// ── 問題レンダリング ───────────────────────────────────────────
function renderCurrentQuestion() {
  updateLangButtons();

  if (typeof jftQuizData === 'undefined' || !jftQuizData?.questions) return;

  const q = jftQuizData.questions[AppState.currentQuestionIndex];
  if (!q) return;

  const lang = AppState.currentLang;
  const qText = q.questionText?.[lang] ?? q.questionText?.ja ?? '';
  $('question-text-box').textContent = `Q${AppState.currentQuestionIndex + 1}. ${qText}`;

  const opts = getOptions(q, lang);

  for (let i = 0; i < 3; i++) {
    const btn = $(`option-btn-${i}`);
    if (!btn) continue;
    if (opts?.[i] != null) {
      btn.textContent = opts[i];
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  }
}

function getOptions(q, lang) {
  if (lang === 'ja')   return q.optionsJa;
  if (lang === 'en')   return q.optionsEn ?? q.options;
  return q.options; // tl
}

function updateLangButtons() {
  ['ja', 'en', 'tl'].forEach(l => {
    $(`btn-lang-${l}`)?.classList.toggle('active', l === AppState.currentLang);
  });
}

// ── 音声再生 ───────────────────────────────────────────────────
function playQuestionSpeech() {
  if (typeof jftQuizData === 'undefined') return;
  const q = jftQuizData.questions?.[AppState.currentQuestionIndex];
  if (q?.speechText) VoiceEngine.speak(q.speechText);
}

// ── 回答チェック ───────────────────────────────────────────────
function checkAnswer(idx) {
  if (typeof jftQuizData === 'undefined') return;
  const q = jftQuizData.questions[AppState.currentQuestionIndex];

  // 全ボタンをロック
  for (let i = 0; i < 3; i++) {
    $(`option-btn-${i}`).style.pointerEvents = 'none';
  }

  const btn = $(`option-btn-${idx}`);

  if (idx === q.correctIndex) {
    // ✅ 正解
    btn.style.backgroundColor = '#22c55e';
    btn.style.borderColor     = '#16a34a';
    btn.style.color           = '#ffffff';

    setTimeout(() => {
      AppState.currentQuestionIndex++;

      if (AppState.currentQuestionIndex >= jftQuizData.questions.length) {
        // 🏁 全問クリア
        AppState.currentQuestionIndex = 0;
        hideEl('quiz-room');
        showEl('congrats-room');

        setTimeout(() => {
          hideEl('congrats-room');
          showEl('quiz-room');
          resetOptionStyles();
          renderCurrentQuestion();
        }, 3000);
      } else {
        resetOptionStyles();
        renderCurrentQuestion();
      }
    }, 1000);

  } else {
    // ❌ 不正解
    btn.style.backgroundColor = '#fee2e2';
    btn.style.borderColor     = '#ef4444';
    btn.style.color           = '#b91c1c';

    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        const b = $(`option-btn-${i}`);
        if (b?.style.backgroundColor !== 'rgb(254, 226, 226)') {
          b.style.pointerEvents = 'auto';
        }
      }
    }, 300);
  }
}

// ── ボタンスタイルリセット ─────────────────────────────────────
function resetOptionStyles() {
  for (let i = 0; i < 3; i++) {
    const btn = $(`option-btn-${i}`);
    if (!btn) continue;
    btn.style.backgroundColor = '#ffffff';
    btn.style.borderColor     = '#cbd5e1';
    btn.style.color           = '#1e293b';
    btn.style.pointerEvents   = 'auto';
  }
}

// ── ひらがなグリッド構築 ───────────────────────────────────────
function buildHiraganaGrid() {
  const box = $('kana-grid-box');
  if (!box) return;
  box.innerHTML = '';

  VoiceEngine.getHiraganaList().forEach(kana => {
    const btn = document.createElement('button');
    btn.className   = 'kana-btn';
    btn.textContent = kana;
    btn.onclick     = () => VoiceEngine.speak(kana);
    box.appendChild(btn);
  });
}

// ── 起動 ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildLessonPicker();
  buildHiraganaGrid();
  loadAndRender(AppState.currentLessonId);
});
