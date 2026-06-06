/**
 * voice-engine.js
 * ─────────────────────────────────────────────
 * Web Speech API ラッパー
 * 437Hz ブランド哲学：「言葉は音として体に届く」
 * ─────────────────────────────────────────────
 */

const VoiceEngine = (() => {
  const HIRAGANA = [
    "あ","い","う","え","お",
    "か","き","く","け","こ",
    "さ","し","す","せ","そ",
    "た","ち","つ","て","と",
    "な","に","ぬ","ね","の",
    "は","ひ","ふ","へ","ほ",
    "ま","み","む","め","も",
    "や","ゆ","よ",
    "ら","り","る","れ","ろ",
    "わ","を","ん"
  ];

  function speak(text, lang = 'ja-JP', rate = 0.85) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = rate;
    window.speechSynthesis.speak(u);
  }

  function getHiraganaList() {
    return HIRAGANA;
  }

  return { speak, getHiraganaList };
})();
