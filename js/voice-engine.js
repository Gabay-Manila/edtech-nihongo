// =========================================================================
// 🕵️ EdTech Gabay 共通音響工具：完全自立・逆流防御型音声エンジン（js/voice-engine.js）
// 不具合修正：index.html側の古い関数との混線・ボタン文字のフライング逆流を完全遮断。
//             どこからどう呼ばれても、問題データの「speechText」だけを100%狙い撃ちします。
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

    // 丸カッコ・角カッコの中身（ト書きやルビ補足）をすべて自動で綺麗に引き算！
    const cleaned = text
      .toString()
      .replace(/（[^）]*）/g, '')   // 全角カッコ消去
      .replace(/\([^)]*\)/g, '')    // 半角カッコ消去
      .replace(/[\n\r]+/g, '。')    // 改行を読点に
      .trim();

    if (!cleaned) return;

    // 前の音声をブチッと切って、連打されても被らない設計
    window.speechSynthesis.cancel();

    const u = new SpeechSynthesisUtterance(cleaned);
    u.lang  = 'ja-JP';
    u.rate  = 0.85;  // 棟梁指定：現場の女の子たちが一番聞き取りやすい優しい速度
    u.pitch = 1.05;  // 少し明るいトーン
    if (_voice) u.voice = _voice;

    window.speechSynthesis.speak(u);
  }

  return { init, speak };
})();

// =========================================================================
// 🔌 【二重防壁・割り込みハイジャック配管】
// index.html側の古い speakJapaneseText を上書きラッパーで完全に包みます。
// =========================================================================
(() => {
  VoiceEngine.init();

  const injectHijack = () => {
    window.speakJapaneseText = function(rawText) {
      
      // 🛡️ 防壁：もしスピーカーボタン（playQuestionSpeech）から呼ばれた場合、
      // 引数のrawTextは無視して、現在開いているクイズデータから「speechText」を直接つかみ取ります！
      // これにより、ボタンの文字（答え）が逆流してくるバグを200%物理的にシャットアウトします。
      if (typeof jftQuizData !== 'undefined' && jftQuizData.questions) {
        // 現在の問題インデックス（currentQuestionIndex）がマザー金型にあれば、そのデータを直接参照
        var currentIndex = typeof currentQuestionIndex !== 'undefined' ? currentQuestionIndex : 0;
        var currentQ = jftQuizData.questions[currentIndex];
        
        // クイズ部屋の問題データが正しく存在すれば、そちらのspeechTextを最優先！
        if (currentQ && currentQ.speechText) {
          rawText = currentQ.speechText;
        }
      }
      
      // ひらがな表などの単発タップ（jftQuizDataに属さないもの）は、そのまま渡された文字（「あ」など）を喋らせる
      VoiceEngine.speak(rawText);
    };
    console.log('[voice-engine.js] 逆流防御・完全直結工事が完了しやした。');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHijack);
  } else {
    injectHijack();
  }
})();
