// =========================================================================
// 🕵️ EdTech Gabay 共通音響工具：完全自立・防壁型音声エンジン（js/voice-engine.js）
// 仕様：index.htmlは完全固定・無傷キープ。外付けの読み込みだけで裏の音声回路を最新化。
// 不具合修正：金型側の関数との喧嘩を完全遮断し、フライング逆流を100%防御。
// =========================================================================

const VoiceEngine = (() => {
  let _on    = true;   
  let _voice = null;   

  // ── 1. 初期化：OS最優先の日本語ネイティブボイスを自動キャッシュ ──
  function init() {
    if (!window.speechSynthesis) { _on = false; return; }

    function _findVoice() {
      const all = speechSynthesis.getVoices();
      _voice =
        all.find(v => v.lang === 'ja-JP' && v.localService) ||
        all.find(v => v.lang === 'ja-JP') ||
        all.find(v => v.lang.startsWith('ja'));
    }

    _findVoice();
    if (typeof speechSynthesis.onvoiceschanged !== 'undefined') {
      speechSynthesis.onvoiceschanged = _findVoice;
    }
  }

  // ── 2. カンナがけ読み上げ（丸括弧・角括弧のト書きを100%自動消去） ──
  function speak(text) {
    if (!_on || !window.speechSynthesis || !text) return;

    // カッコ書きの翻訳補足やルビ用の文字を自動で綺麗に引き算！
    const cleaned = text
      .toString()
      .replace(/（[^）]*）/g, '')   // 全角カッコ消去
      .replace(/\([^)]*\)/g, '')    // 半角カッコ消去
      .replace(/[\n\r]+/g, '。')    // 改行を読点に
      .trim();

    if (!cleaned) return;

    window.speechSynthesis.cancel();

    const u = new SpeechSynthesisUtterance(cleaned);
    u.lang  = 'ja-JP';
    u.rate  = 0.85;  // 棟梁指定：聞き取りやすい優しい速度
    u.pitch = 1.05;  // 明るいトーン
    if (_voice) u.voice = _voice;

    window.speechSynthesis.speak(u);
  }

  return { init, speak };
})();

// =========================================================================
// 🔌 【金型完全固定：裏口自動マウント配管】
// index.html側の一番底にある古い speakJapaneseText を外側から優しく包み込み、
// どこからどんなゴミデータが逆流してきても、問題の「speechText」だけを100%狙い撃ちします。
// =========================================================================
(() => {
  VoiceEngine.init();

  const injectHijack = () => {
    // 金型側の関数が立ち上がったのを見計らって、外側から回路を乗っ取ります
    window.speakJapaneseText = function(rawText) {
      
      // 🛡️ 防壁：スピーカーボタンが押されたとき、渡されてくる引数は一切信用せず、
      // 今画面に読み込まれているクイズデータ（jftQuizData）の speechText を直接金庫から引き抜く！
      if (typeof jftQuizData !== 'undefined' && jftQuizData.questions) {
        var currentIndex = typeof currentQuestionIndex !== 'undefined' ? currentQuestionIndex : 0;
        var currentQ = jftQuizData.questions[currentIndex];
        
        // クイズデータの部屋に正しく音声用テキストがあれば、それを200%最優先！
        if (currentQ && currentQ.speechText) {
          rawText = currentQ.speechText;
        }
      }
      
      // ひらがな表の単発タップ（jftQuizDataに属さない「あ」など）は、そのままその文字を発声
      VoiceEngine.speak(rawText);
    };
    console.log('[voice-engine.js] 金型を無傷のまま、逆流防御つき音声エンジンの外付け直結に成功しやした。');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHijack);
  } else {
    injectHijack();
  }
})();
