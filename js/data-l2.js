// =========================================================================
// JFT究極・サバイバル対策版 【第2課：挨拶（あいさつ）サバイバル部屋】
// =========================================================================

// 🚨 const から var に変更して、ハコ換え時の衝突を完全に根絶！
var jftQuizData = {
  lessonTitle: "第2課：挨拶と現場サバイバル (Leksyon 2: Pagbati sa Trabaho)",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "おはようございます",
      options: ["Magandang umaga (Good morning)", "Magandang hapon (Good afternoon)", "Magandang gabi (Good evening)"],
      optionsJa: ["おはようございます", "こんにちは", "こんばんは"],
      questionText: {
        tl: "Pakikinggan ang audio. Ano ang ibig sabihin ng pagbating ito?",
        en: "Listen to the audio. What does this greeting mean?",
        ja: "おんせいをきいてください。何（なに）と言（い）っていますか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang narinig mo ay 'おはようございます'. Ginagamit ito para sa pormal na pagbati sa umaga sa kumpanya.",
        en: "You heard 'おはようございます'. It is used for formal morning greetings in the workplace.",
        ja: "「おはようございます」と言っています。朝、会社の人などに使う丁寧な挨拶です。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "失礼します",
      options: ["Paumanhin po (Excuse me)", "Aalis na po ako / Goodbye (Excuse me for leaving)", "Salamat po (Thank you)"],
      optionsJa: ["すみません", "しつれいします", "ありがとうございます"],
      questionText: {
        tl: "Pakinggan ang audio. Ano ang sasabihin mo kapag papasok sa opisina ng iyong boss?",
        en: "Listen to the audio. What do you say when entering your boss's office?",
        ja: "おんせいをきいてください。社長（しゃちょう）の部屋（へや）に入（はい）るとき、何と言いますか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang 'しつれいします' (Shitsurei shimasu) ay ginagamit kapag papasok sa kwarto o kapag mauunang umuwi sa trabaho.",
        en: "'しつれいします' (Shitsurei shimasu) is used when entering a room or leaving the workplace before others.",
        ja: "「しつれいします」と言っています。部屋に入るときや、お先に帰るときに使います。"
      }
    },
    {
      id: 3,
      type: "audio-vocabulary",
      speechText: "お疲れ様でした",
      options: ["Salamat sa trabaho mo ngayong araw (Good job today)", "Magandang hapon (Good afternoon)", "Ikinagalak kong makilala ka (Nice to meet you)"],
      optionsJa: ["おつかれさまでした", "おやすみなさい", "はじめまして"],
      questionText: {
        tl: "Pakinggan ang audio. Ano ang sasabihin mo sa iyong kasamahan pagkatapos ng trabaho?",
        en: "Listen to the audio. What do you say to your colleague after finishing work?",
        ja: "おんせいをきいてください。仕事（しごと）が終（お）わったとき、仲間に何と言いますか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'おつかれさまでした' (Otsukaresama deshita) ay ang tamang parirala para sa pagtatapos ng trabaho araw-araw.",
        en: "'Otsukaresama deshita' is the standard phrase to thank colleagues for their hard work at the end of the day.",
        ja: "「おつかれさまでした」と言っています。一日の仕事が終わったとき、お互いの苦労をねぎらう言葉です。"
      }
    },
    {
      id: 4,
      type: "reading-context",
      options: ["こんばんは", "こんにちは", "おやすみなさい"],
      optionsJa: ["こんばんは", "こんにちは", "おやすみなさい"],
      questionText: {
        tl: "Nakatemu mo ang iyong katrabaho sa ganap na 1:00 PM. Ano ang sasabihin mo?",
        en: "You meet your coworker at 1:00 PM. What do you say?",
        ja: "ひるの 1じ（13:00）に 会社のひとに 会（あ）いました。何（なに）と言（い）いますか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang 'こんにちは' (Konnichiwa) ay ang pagbati para sa tanghali at hapon.",
        en: "'こんにちは' (Konnichiwa) is the daytime greeting used from noon onwards.",
        ja: "昼間の挨拶なので「こんにちは」が正解です。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      options: ["すみません", "ありがとうございます", "はじめまして"],
      optionsJa: ["すみません", "ありがとうございます", "はじめまして"],
      questionText: {
        tl: "May nabangga kang tao sa loob ng tren nang hindi sinasadya. Ano ang sasabihin mo?",
        en: "You accidentally bumped into someone inside the train. What do you say?",
        ja: "電車のなかで、となりの人に ぶつかってしまいました。何と言いますか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Gamitin ang 'すみません' (Sumimasen) para humingi ng paumanhin sa maliliit na pagkakamali sa pampublikong lugar.",
        en: "Use 'すみません' (Sumimasen) to apologize for minor accidents or to say excuse me.",
        ja: "人に謝るときの言葉なので「すみません」が正解です。"
      }
    },
    {
      id: 6,
      type: "reading-context",
      options: ["じゃ、また", "さようなら", "お先に失礼します"],
      optionsJa: ["じゃ、また", "さようなら", "おさきにしつれいします"],
      questionText: {
        tl: "Aalis ka na sa kumpanya habang ang iyong mga katrabaho ay nagtatrabaho pa. Ano ang pormal na sasabihin mo?",
        en: "You are leaving the office while your coworkers are still working. What is the formal expression to use?",
        ja: "あなただけ 先に 会社から 帰（かえ）ります。のこっている人に 何と言いますか。"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ang 'お先に失礼します' (Osaki ni shitsurei shimasu) ay nangangahulugang 'Excuse me for leaving before you'. Napakahalaga nito sa kulturang Hapon.",
        en: "'Osaki ni shitsurei shimasu' means 'Excuse me for leaving ahead of you'. It is a key phrase in Japanese business etiquette.",
        ja: "他の人より先に帰るときの決まり文句「お先に失礼します」が正解です。"
      }
    },
    {
      id: 7,
      type: "character-match",
      options: ["Arigatou gozaimasu", "Arigatou gozaimashita", "Arigatou gozaimasen"],
      optionsJa: ["ありがとうございます", "ありがとうございました", "ありがとうございません"],
      questionText: {
        tl: "Piliin ang tamang baybay ng Hiragana para sa 'Thank you very much' (pormal):",
        en: "Choose the correct Hiragana spelling for 'Thank you very much' (formal):",
        ja: "「Thank you very much」のただしいひらがなは どれですか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang tamang baybay ay 「ありがとうございます」. Huwag kalimutan ang 'う' pagkatapos ng 'と'.",
        en: "The correct spelling is 'ありがとうございます'. Watch out for the long vowel 'う'.",
        ja: "現在形での丁寧なお礼の言葉「ありがとうございます」が正解です。"
      }
    },
    {
      id: 8,
      type: "character-match",
      options: ["Mata ashita (Kita tayo bukas)", "Hajimemashite (Nice to meet you)", "Sumimasen (Excuse me)"],
      optionsJa: ["またあした", "はじめまして", "すみません"],
      questionText: {
        tl: "Ano ang kahulugan ng salitang ito? 「はじめまして」",
        en: "What is the meaning of this word? 'はじめまして'",
        ja: "「はじめまして」のただしい意味（いみ）を選んでください。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang 'はじめまして' (Hajimemashite) ay sinasabi sa pinakaunang pagkakataon na makatemu mo ang isang tao.",
        en: "'Hajimemashite' means 'Nice to meet you' and is used only when meeting someone for the first time.",
        ja: "初めて人と会ったときの挨拶「はじめまして」が正解です。"
      }
    }
  ]
};