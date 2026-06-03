// =========================================================================
// JFT究極・サバイバル対策版 【第3課：時間と数字サバイバル部屋】
// 準拠：国際交流基金『いろどり 生活の日本語（スターター A1）』第3課
// 仕様：言語切り替えで「質問・選択肢・解説」が完全一致。日本語は本番直撃仕様。
// =========================================================================

var jftQuizData = {
  lessonTitle: "第3課：すみません、いま何時ですか (Leksyon 3: Excuse me, anong oras na?)",
  questions: [
    // --- 音声聴解問題：時間の聞き取り ---
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "いま、3時半です。",
      options: ["1:30 (Alas-una y medya)", "3:30 (Alas-tres y medya)", "4:30 (Alas-kwatro y medya)"],
      optionsJa: ["1じはん", "3じはん", "4じはん"],
      questionText: {
        tl: "Pakinggan ang audio. Anong oras ang sinabi?",
        en: "Listen to the audio. What time was mentioned?",
        ja: "おんせいをきいてください。何時（なんじ）と言（い）っていますか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay '3じはん' (San-ji han), na ibig sabihin ay 3:30. Ang 'はん' (han) ay kalahating oras o kalahati.",
        en: "You heard '3じはん' (San-ji han), which means 3:30. 'はん' (han) means half past the hour.",
        ja: "「3じはん」と言っています。『はん』は30分のことです。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "しちじじゅうごふんです。",
      options: ["4:15 (Alas-kwatro katorse)", "7:15 (Alas-siyete kinse)", "9:15 (Alas-nwebe kinse)"],
      optionsJa: ["4じ15ふん", "7じ15ふん", "9じ15ふん"],
      questionText: {
        tl: "Pakinggan ang audio. Mag-ingat sa pagbigkas ng bilang 7. Anong oras ito?",
        en: "Listen to the audio. Pay attention to the number 7. What time is it?",
        ja: "おんせいをきいてください。何時（なんじ）ですか。「7じ」の読み方に注意しましょう。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'しちじ' (Shichi-ji) para sa alas-siyete. Ang bilang 7 ay binabasa bilang 'しち' kapag oras.",
        en: "You heard 'しちじ' (Shichi-ji) for 7 o'clock. The number 7 is pronounced as 'shichi' when telling time.",
        ja: "「しちじ 15ふん」と言っています。時間の『7時』は「ななじ」ではなく「しちじ」と読みます。"
      }
    },
    {
      id: 3,
      type: "audio-vocabulary",
      speechText: "くじです。",
      options: ["9:00 (Alas-nwebe)", "4:00 (Alas-kwatro)", "8:00 (Alas-otso)"],
      optionsJa: ["9じ", "4じ", "8じ"],
      questionText: {
        tl: "Pakinggan ang audio. Mag-ingat sa espesyal na pagbasa ng bilang 9 sa oras.",
        en: "Listen to the audio. Watch out for the special pronunciation of 9 o'clock.",
        ja: "おんせいをきいてください。何時（なんじ）ですか。「9じ」の読み方に注意しましょう。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 9 o'clock ay binabasa bilang 'くじ' (Ku-ji). Hindi ito binabasa bilang 'kyuu-ji'.",
        en: "9 o'clock is pronounced as 'くじ' (Ku-ji). It is never pronounced as 'kyuu-ji'.",
        ja: "「くじ」と言っています。『9時』は「きゅうじ」ではなく「くじ」と読みます。"
      }
    },

    // --- シチュエーション生活読解問題：現場での対話 ---
    {
      id: 4,
      type: "reading-context",
      options: ["いま、なんじですか？", "どこにいきますか？", "なんさいですか？"],
      optionsJa: ["いま、なんじですか？", "どこにいきますか？", "なんさいですか？"],
      questionText: {
        tl: "Gusto mong itanong sa iyong katrabaho kung anong oras na ngayon. Ano ang sasabihin mo?",
        en: "You want to ask your coworker what time it is now. What do you say?",
        ja: "となりの人に、いまの時間を 聞（き）きたいです。何（なに）と言（い）いますか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'いま、なんじですか' (Ima, nan-ji desu ka) ay ang karaniwang paraan ng pagtatanong ng oras (What time is it now?).",
        en: "'いま、なんじですか' (Ima, nan-ji desu ka) is the standard phrase to ask 'What time is it now?'.",
        ja: "時間を尋ねるフレーズなので「いま、なんじですか？」が正解です。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      options: ["7じから 5じまで", "とうきょうから まにらまで", "100えんから 500えんまで"],
      optionsJa: ["7じから 5じまで", "とうきょうから まにらまで", "100えんから 500えんまで"],
      questionText: {
        tl: "Tinanong ka ng iyong hapon na kasamahan tungkol sa oras ng iyong trabaho (Work hours). Alin ang tamang sagot para sa oras?",
        en: "Your Japanese colleague asked about your working hours. Which is the correct answer showing time?",
        ja: "仕事（しごと）の時間を 聞（き）かれました。時間（じかん）をこたえているのは どれですか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'から...まで' (kara... made) ay nangangahulugang 'mula... hanggang'. Ang '7じから 5じまで' ay mula 7:00 hanggang 5:00.",
        en: "'から...まで' (kara... made) means 'from... until'. '7じから 5じまで' means from 7 o'clock until 5 o'clock.",
        ja: "「7じ（時）から 5じ（時）まで」が時間を表しているので正解です。"
      }
    },

    // --- 文字・語彙直撃問題：数字のひらがな表記 ---
    {
      id: 6,
      type: "character-match",
      options: ["よんじ", "しじ", "よじ"],
      optionsJa: ["よんじ", "しじ", "よじ"],
      questionText: {
        tl: "Piliin ang tamang Hiragana para sa 4 o'clock (4:00):",
        en: "Choose the correct Hiragana for 4 o'clock (4:00):",
        ja: "「4時」のただしいひらがなは どれですか。"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ang 4 o'clock ay espesyal. Binabasa ito bilang 'よじ' (Yo-ji). Mali ang 'yon-ji' o 'shi-ji'.",
        en: "4 o'clock is a special case. It is pronounced as 'よじ' (Yo-ji). 'yon-ji' and 'shi-ji' are incorrect.",
        ja: "「よじ」が正解です。『4時』は「よんじ」や「しじ」とは言いません。"
      }
    },
    {
      id: 7,
      type: "character-match",
      options: ["ぷん / ぶん (fun / bun)", "じ (ji)", "えん (en)"],
      optionsJa: ["ふん / ぷん", "じ", "えん"],
      questionText: {
        tl: "Ano ang counter word na ginagamit para sa 'minuto' (minutes) sa wikang Hapon?",
        en: "What is the counter word used for 'minutes' in Japanese?",
        ja: "時間を表すとき、「分（minutes）」の読み方はどれですか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'ふん' (fun) o 'ぷん' (pun) ay ginagamit para sa minuto. Depende ito sa naunang bilang (hal. 5-fun, 1-pun).",
        en: "'ふん' (fun) or 'ぷん' (pun) is the counter for minutes. It changes depending on the number before it.",
        ja: "分を表すのは「ふん / ぷん」です。数字によって読み方が変わります（例：いっぷん、ごふん）。"
      }
    },
    {
      id: 8,
      type: "character-match",
      options: ["12:00 (Alas-dose)", "10:00 (Alas-dyes)", "2:00 (Alas-dos)"],
      optionsJa: ["12じ", "10じ", "2じ"],
      questionText: {
        tl: "Basahin ang salita at piliin ang tamang kahulugan: 「じゅうじ」",
        en: "Read the word and choose the correct meaning: 'じゅうじ'",
        ja: "「じゅうじ」のただしい意味（いみ）を選んでください。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang 'じゅうじ' (Juu-ji) ay pinagsamang 'じゅう' (10) at 'じ' (oras). Kaya ito ay 10 o'clock.",
        en: "'じゅうじ' (Juu-ji) is a combination of 'じゅう' (10) and 'じ' (hour). So it means 10 o'clock.",
        ja: "「10時」のことです。「じゅう（10）」と「じ（時）」の組み合わせです。"
      }
    }
  ]
};