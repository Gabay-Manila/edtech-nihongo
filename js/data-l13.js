// =========================================================================
// JFT究極・サバイバル対策 A1判定特化版 【第13課：総合小テスト部屋】
// テーマ：第1回総合小テスト（第1課〜第3課の総まとめレビュー）
// 仕様：金型(index.html)の書き換えナシ！13号室をそのままテスト部屋に改造。
// =========================================================================

var jftQuizData = {
  lessonTitle: "第13課：【総合小テスト】第1課〜第3課まとめ 📝",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "はじめまして",
      options: ["Thank you (ありがとう)", "Nice to meet you (はじめまして)", "Excuse me (すみません)"],
      optionsJa: ["ありがとう", "はじめまして", "すみません"],
      questionText: {
        tl: "[Mula sa Lesson 1] Pakinggan ang bating ito. Kailan mo ito gagamitin?",
        en: "[From Lesson 1] Listen to this greeting. When do you use it?",
        ja: "【第1課の復習】おんせいをきいてください。どんな時に使う挨拶（あいさつ）ですか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'Hajimemashite' (Nice to meet you). Gagamitin mo ito sa unang pagkakataon na makatagpo mo ang mga Hapon sa trabaho!",
        en: "You heard 'Hajimemashite' (Nice to meet you). Essential for making a great first impression at your new workplace!",
        ja: "「はじめまして」と言っています。第1課でやった自己紹介の一番最初の挨拶です。試験でも初対面の会話文で必ず狙われます。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "３５０円",
      options: ["250 yen (250円)", "350 yen (350円)", "450 yen (450円)"],
      optionsJa: ["250えん", "350えん", "450えん"],
      questionText: {
        tl: "[Mula sa Lesson 3] Pakinggan ang presyo. Magkano ang halaga ng bagay na ito?",
        en: "[From Lesson 3] Listen to the price. How much is this item?",
        ja: "【第3課の復習】おんせいをきいてください。いくら（金額）ですか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'San-byaku go-juu en' (350 yen). Ang pakikinig sa tamang halaga ng pera ay laging lumalabas sa shopping problems sa JFT!",
        en: "You heard 'San-byaku go-juu en' (350 yen). Listening to numerical amounts is a permanent fixture in JFT shopping questions!",
        ja: "「さんびゃくごじゅうえん（350円）」と言っています。300の濁音（びゃく）と50の組み合わせは、A1の買い物問題の定番トラップです。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "ありがとう",
      options: ["Salamat sa Tagalog (ありがとう)", "Paumanhin sa Tagalog (すみません)", "Magandang umaga sa Tagalog (おはよう)"],
      optionsJa: ["ありがとう", "すみません", "おはよう"],
      questionText: {
        tl: "[Mula sa Lesson 1] Basahin ang salitang Hapon: 「ありがとう」. Ano ang ibig sabihin nito sa Tagalog?",
        en: "[From Lesson 1] Read the Japanese word: 「ありがとう」. What does it mean?",
        ja: "【第1課の復習】文字を読んでください：「ありがとう」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ay 'Arigatou' (Salamat / Thank you). Ang pinaka-pangunahing salita upang magpakita ng pasasalamat sa mga kasamahan sa nursing facility!",
        en: "This is 'Arigatou' (Thank you). The most fundamental word to express gratitude to your colleagues and residents!",
        ja: "「ありがとう」のことです。介護現場でも、これを気持ちを込めて言えるかどうかが、人間関係を作るサバイバルの基本です。"
      }
    },
    {
      id: 4,
      type: "character-match",
      speechText: "いくらですか",
      options: ["Ilan? / How many? (いくつですか)", "Sino? / Who? (だれですか)", "Magkano? / How much? (いくらですか)"],
      optionsJa: ["いくつですか", "だれですか", "いくらですか"],
      questionText: {
        tl: "[Mula sa Lesson 3] Aling parirala ang gagamitin mo kung gusto mong malaman ang presyo kapag bumibili ng gamit?",
        en: "[From Lesson 3] Which phrase do you use to ask for the price when shopping?",
        ja: "【第3課の復習】買い物をするとき、値段（ねだん）を聞くことばはどれですか？"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ang 'Ikura desu ka?' ay ginagamit para sa presyo (Magkano). Tandaan: Ang 'Ikutsu desu ka?' (na natutunan natin sa Lesson 6) ay para naman sa bilang!",
        en: "'Ikura desu ka?' is used for price (How much). Remember, 'Ikutsu desu ka?' (learned in Lesson 6) is for counting quantity!",
        ja: "値段を聞くときは「いくらですか」を使います。さっき第6課でやった「いくつですか（個数）」との区別が完璧についているか試すための抜き打ち問題です。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "お名前はなんですか",
      options: ["Anong pangalan mo? (お名前はなんですか)", "Ilang taon ka na? (おいくつですか)", "Saan ka nakatira? (どこに住んでいますか)"],
      optionsJa: ["おなまえはなんですか", "おいくつですか", "どこにすんでいますか"],
      questionText: {
        tl: "[Mula sa Lesson 2] Basahin ang tanong kapag may kinakausap na bagong tao: 「お名前はなんですか」",
        en: "[From Lesson 2] Read the question when talking to someone for the first time: 「お名前はなんですか」",
        ja: "【第2課の復習】初対面（しょたいめん）の会話です：「お名前はなんですか」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ay 'O-namae wa nan desu ka?' (Anong pangalan mo? / What is your name?). Isang mahalagang hakbang sa pakikipag-usap sa bagong pasyente o kaibigan.",
        en: "This is 'O-namae wa nan desu ka?' (What is your name?). A basic yet essential phrase for building rapport with residents and coworkers.",
        ja: "「お名前（なまえ）はなんですか」という意味です。第2課でやった自己紹介の基本セットを、忘れた頃にしっかり引き戻すための総括配管です。"
      }
    }
  ]
};