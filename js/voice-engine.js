// =========================================================================
// 🕵️ EdTech Gabay 共通音響工具：最高級外出し音声エンジン（js/voice-engine.js）
// 仕様：名探偵ゲームのTTS仕様を100%継承。括弧内のト書きを自動で引き算（消去）します。
// 特色：読み込むだけで index.html 側の古い音声関数を自動で最新配管へ繋ぎ直します。
// =========================================================================

const VoiceEngine = (() => {
  let _on    = true;   
  let _voice = null;   

  // ── 1. 初期化：OSに一番馴染んでいる日本語ネイティブボイスを自動キャッシュ ──
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

  // ── 2. 徹底引き算の読み上げ（丸括弧・角括弧を100%自動消去） ──
  function speak(text) {
    if (!_on || !window.speechSynthesis) return;

    // ★神機能：丸括弧も角括弧も、ト書きの翻訳補足テキストをすべて自動で綺麗にカンナがけ！
    const cleaned = text
      .replace(/（[^）]*）/g, '')   // 全角括弧を消去
      .replace(/\([^)]*\)/g, '')    // 半角括弧を消去
      .replace(/[\n\r]+/g, '。')    // 改行を読点に変換
      .trim();

    if (!cleaned) return;

    // 前の音声をブチッと切って次の発声へ移る優しい設計
    speechSynthesis.cancel();

    const u = new SpeechSynthesisUtterance(cleaned);
    u.lang  = 'ja-JP';
    u.rate  = 0.85;  // 棟梁仕様：現場の女の子たちが一番聞き取りやすい優しいスピード
    u.pitch = 1.05;  // 少し明るく聞き取り取りやすいトーン
    if (_voice) u.voice = _voice;

    speechSynthesis.speak(u);
  }

  return { init, speak };
})();

// ── ⚙️ 自動溶接配管（フック） ──
// DOMが立ち上がった瞬間に、音声エンジンを起動し、
// index.html側が元々持っていた古い「speakJapaneseText」の回路をこの新エンジンへ直結します。
document.addEventListener('DOMContentLoaded', () => {
  VoiceEngine.init();
  
  // マザー金型側の古い関数を上書きハイジャック！
  window.speakJapaneseText = function(text) {
    VoiceEngine.speak(text);
  };
  
  console.log('[voice-engine.js] 最高級音声エンジンの外付け直結工事が完了しやしたぜ！');
});
