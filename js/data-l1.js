// =========================================================================
// JFT究極・サバイバル対策版 【第1課：ひらがな完全制覇部屋】
// 仕様：全問題に「speechText」を完全配管。どのボタンを押しても綺麗に発音します。
// =========================================================================

var jftQuizData = {
  lessonTitle: "第1課：ひらがな学習（あ行〜ん）",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "あ",
      options: ["A", "I", "U"],
      optionsJa: ["あ", "い", "う"],
      questionText: {
        tl: "Pakinggan ang audio. Aling Hiragana ito?",
        en: "Listen to the audio. Which Hiragana is it?",
        ja: "おんせいをきいてください。どのひらがなですか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang narinig mong tunog ay 'A'. Ito ang unang letra sa Hiragana (あ).",
        en: "The sound you heard is 'A'. This is the first character in Hiragana (あ).",
        ja: "きこえた音は「あ」です。ひらがなの最初の文字です。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "い",
      options: ["O", "E", "I"],
      optionsJa: ["お", "え", "い"],
      questionText: {
        tl: "Pakinggan ang audio. Aling Hiragana ito?",
        en: "Listen to the audio. Which Hiragana is it?",
        ja: "おんせいをきいてください。どのひらがなですか。"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ang narinig mong tunog ay 'I'. Ito ay isinusulat bilang (い).",
        en: "The sound you heard is 'I'. It is written as (い).",
        ja: "きこえた音は「い」です。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "あき", // 👈 補修：これで「あき」と喋ります！
      options: ["あさ (Asa)", "いか (Ika)", "あき (Aki)"],
      optionsJa: ["あさ", "いか", "あき"],
      questionText: {
        tl: "Basahin ang salita: 「あき」. Ano ang tamang pagbasa nito?",
        en: "Read the word: 「あき」. What is the correct reading?",
        ja: "ことばを読んでください：「あき」"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ito ay binabasang 'Aki' (Autumn/Taglagas). Binubuo ito ng 'あ' at 'き'.",
        en: "This is read as 'Aki' (Autumn). It combines 'あ' and 'き'.",
        ja: "季節の「秋（あき）」のことです。「あ」と「き」を合わせました。"
      }
    },
    {
      id: 4,
      type: "character-match",
      speechText: "かお", // 👈 補修：これで「かお」と喋ります！
      options: ["かお (Kao)", "きく (Kiku)", "ここ (Koko)"],
      optionsJa: ["かお", "きく", "ここ"],
      questionText: {
        tl: "Paano isulat sa Hiragana ang 'Kao' (Face/Mukha)?",
        en: "How do you write 'Kao' (Face) in Hiragana?",
        ja: "「かお（Face）」をひらがなで書くとどれですか？"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'Kao' ay isinusulat gamit ang 'か' (ka) at 'お' (o).",
        en: "'Kao' is written using 'か' (ka) and 'お' (o).",
        ja: "顔（かお）のことです。「か」と「お」の組み合わせです。"
      }
    },
    {
      id: 5,
      type: "audio-vocabulary",
      speechText: "すし",
      options: ["Sashi", "Sushi", "Susu"],
      optionsJa: ["さし", "すし", "すす"],
      questionText: {
        tl: "Pakinggan ang pagkain. Aling salita ito?",
        en: "Listen to the food name. Which word is it?",
        ja: "おんせいをきいてください。どのことばですか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'Sushi' (すし), ang sikat na pagkain sa Hapon.",
        en: "You heard 'Sushi' (すし), the famous Japanese food.",
        ja: "日本の有名な食べ物「すし」と言っています。"
      }
    },
    {
      id: 6,
      type: "audio-vocabulary",
      speechText: "てんき",
      options: ["Denki", "Tenki", "Genki"],
      optionsJa: ["でんき", "てんき", "げんき"],
      questionText: {
        tl: "Pakinggan ang audio. Aling salita ito?",
        en: "Listen to the audio. Which word is it?",
        ja: "おんせいをきいてください。どのことばですか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'Tenki' (てんき), na ibig sabihin ay panahon (Weather).",
        en: "You heard 'Tenki' (てんき), which means weather.",
        ja: "「てんき（天気）」と言っています。"
      }
    },
    {
      id: 7,
      type: "character-match",
      speechText: "さけ", // 👈 補修：これで「さけ」と喋ります！
      options: ["さけ (Sake)", "たこ (Tako)", "いか (Ika)"],
      optionsJa: ["さけ", "たこ", "いか"],
      questionText: {
        tl: "Basahin ang salita at piliin ang tamang Hiragana: 「さけ」",
        en: "Read the word and choose the correct Hiragana: 「さけ」",
        ja: "ことばを読んでください：「さけ」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ay 'Sake' (Alak sa Hapon / Isda). Binubuo ito ng 'さ' at 'け'.",
        en: "This is 'Sake' (Japanese wine / Salmon). It combines 'さ' and 'け'.",
        ja: "お酒、または魚の鮭（さけ）のことです。「さ」と「け」を合わせました。"
      }
    },
    {
      id: 8,
      type: "character-match",
      speechText: "あさ", // 👈 補修：これで「あさ」と喋ります！
      options: ["よる (Yoru)", "ひる (Hiru)", "あさ (Asa)"],
      optionsJa: ["よる", "ひる", "あさ"],
      questionText: {
        tl: "Ano ang Hiragana para sa 'Umaga' (Morning)?",
        en: "What is the Hiragana for 'Morning'?",
        ja: "「あさ（Morning）」のひらがなはどれですか？"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ang 'Umaga' sa Hapon ay 'Asa' (あさ).",
        en: "'Morning' in Japanese is 'Asa' (あさ).",
        ja: "朝（あさ）のことです。「あ」と「さ」の組み合わせです。"
      }
    }
  ]
};
