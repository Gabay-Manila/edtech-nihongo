// =========================================================================
// JFT究極・サバイバル対策 A1判定特化版 【第4課】
// テーマ：これ、おねがいします（物・教室・指示編）
// 仕様：全問題に「speechText」完備。手元のテスト環境で100%音声が鳴ります。
// =========================================================================

var jftQuizData = {
  lessonTitle: "第4課：これ、おねがいします（物・教室・指示）",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "けしごむ",
      options: ["Pencil (えんぴつ)", "Eraser (けしごむ)", "Notebook (ノート)"],
      optionsJa: ["えんぴつ", "けしごむ", "ノート"],
      questionText: {
        tl: "Pakinggan ang audio. Aling gamit sa kuwarto ang sinasabi?",
        en: "Listen to the audio. Which classroom object is mentioned?",
        ja: "おんせいをきいてください。どの道具（どうぐ）ですか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'Keshigomu' (Eraser / Kesador). Galing ito sa salitang 'Kesu' (Burahin).",
        en: "You heard 'Keshigomu' (Eraser). It comes from the verb 'Kesu' (to erase).",
        ja: "「けしごむ（消しゴム）」と言っています。文字を消す道具です。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "ちょっとまってください",
      options: ["Excuse me (すみません)", "Please wait a moment (ちょっとまってください)", "Thank you (ありがとう)"],
      optionsJa: ["すみません", "ちょっとまってください", "ありがとう"],
      questionText: {
        tl: "Pakinggan ang napakahalagang parirala. Ano ang ibig sabihin nito?",
        en: "Listen to this crucial phrase. What does it mean?",
        ja: "おんせいをきいてください。どういう意味（いみ）ですか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'Chotto matte kudasai' (Sandali lang po / Wait a moment). Ito ang pinakamahalagang survival phrase kapag binigyan ka ng mabilis na utos.",
        en: "You heard 'Chotto matte kudasai' (Please wait a moment). This is the most vital survival phrase when given fast instructions.",
        ja: "「ちょっと待ってください」と言っています。指示をされた時に、少し時間が欲しい場合のサバイバル返答です。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "ノート",
      options: ["ノート (No-to)", "ペン (Pen)", "ほん (Hon)"],
      optionsJa: ["ノート", "ペン", "ほん"],
      questionText: {
        tl: "Basahin ang Katakana: 「ノート」. Ano ang tamang kahulugan nito?",
        en: "Read the Katakana: 「ノート」. What does it mean?",
        ja: "ことばを読んでください：「ノート」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ay binabasang 'No-to' (Notebook / Kuwaderno). Ang mahabang linya (ー) ay nagpapahaba ng tunog.",
        en: "This is read as 'No-to' (Notebook). The long dash (ー) extends the vowel sound.",
        ja: "「ノート（Notebook）」のことです。カタカナの伸ばす音（ー）に注意しましょう。"
      }
    },
    {
      id: 4,
      type: "character-match",
      speechText: "これ、おねがいします",
      options: ["Kore, arigatou (これ、ありがとう)", "Kore, onegaishimasu (これ、おねがいします)", "Sore, douzo (それ、どうぞ)"],
      optionsJa: ["これ、ありがとう", "これ、おねがいします", "それ、どうぞ"],
      questionText: {
        tl: "Paano isulat sa Hiragana kapag iniabot mo ang papel o gamit at sinabing: 'This, please'?",
        en: "How do you write in Hiragana when handing over an object and saying: 'This, please'?",
        ja: "書類（しょるい）や道具（どうぐ）を渡すときの「これ、おねがいします」はどれですか？"
      },
      correctIndex: 1,
      explanation: {
        tl: "Gagamitin ang 'Kore, onegaishimasu' kapag nag-aabot ka ng permit, dokumento, o gamit sa iyong hapon na boss.",
        en: "Use 'Kore, onegaishimasu' when handing over a document, permit, or tool to your Japanese supervisor.",
        ja: "相手に物や書類を差し出して頼むときの定番フレーズ「これ、おねがいします」です。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "ありますか",
      options: ["Is it here? (ここにありますか)", "Do you have it? / Is there? (ありますか)", "What is it? (なんですか)"],
      optionsJa: ["ここにありますか", "ありますか", "なんですか"],
      questionText: {
        tl: "Sa pangungusap na 'Pencil, ありますか', ano ang ibig sabihin ng 'ありますか'?",
        en: "In the sentence 'Pencil, ありますか', what does 'ありますか' mean?",
        ja: "現場で「消しゴム、ありますか？」と聞かれました。「ありますか」の意味はどれですか？"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang 'Arimasu ka?' ay ginagamit para magtanong kung mayroon bang stock o gamit na magagamit (Do you have / Is there?).",
        en: "'Arimasu ka?' is used to ask if an object or stock is available (Do you have it? / Is there?).",
        ja: "物があるかどうか、持っているかどうかを確認する「ありますか？」という表現です。"
      }
    }
  ]
};