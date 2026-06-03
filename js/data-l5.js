// =========================================================================
// JFT究極・サバイバル対策 A1判定特化版 【第5課】
// テーマ：いまなんじですか（時間・曜日・場所編）
// 仕様：全問題に「speechText」完備。ローカル環境で100%音声が連動します。
// =========================================================================

var jftQuizData = {
  lessonTitle: "第5課：いまなんじですか（時間・曜日・場所）",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "しちじ",
      options: ["4:00 (よじ)", "7:00 (しちじ)", "9:00 (くじ)"],
      optionsJa: ["よじ", "しちじ", "くじ"],
      questionText: {
        tl: "Pakinggan ang audio kung anong oras ito. Tandaan ang kakaibang pagbasa sa bilang na ito.",
        en: "Listen to the audio and identify the time. Note the unique reading for this number.",
        ja: "おんせいをきいてください。何時（なんじ）ですか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'Shichiji' (7:00). Sa oras, ang 7 ay binabasang 'Shichi' at hindi 'Nana'. Ito ay madalas lumabas sa exam!",
        en: "You heard 'Shichiji' (7:00). For telling time, 7 is read as 'Shichi', not 'Nana'. This frequently appears on exams!",
        ja: "「しちじ（7時）」と言っています。時間の「7時」は「ななじ」ではなく「しちじ」と読むため、試験でも狙われやすいポイントです。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "げつようび",
      options: ["Monday (げつようび)", "Wednesday (すいようび)", "Friday (きんようび)"],
      optionsJa: ["げつようび", "すいようび", "きんようび"],
      questionText: {
        tl: "Pakinggan ang araw sa isang linggo. Aling araw ito?",
        en: "Listen to the day of the week. Which day is it?",
        ja: "おんせいをきいてください。何曜日（なんようび）ですか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang narinig mo ay 'Getsuyoubi' (Monday / Lunes). Mahalaga ito para sa pag-check ng iyong work shift (shifuto).",
        en: "You heard 'Getsuyoubi' (Monday). This is vital for checking your care facility work shifts.",
        ja: "「げつようび（月曜日）」と言っています。シフト管理に必須の曜日単語です。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "トイレはどこですか",
      options: ["Where is the entrance? (いりぐちはどこですか)", "Where is the restroom? (トイレはどこですか)", "Where is the room? (へやはどこですか)"],
      optionsJa: ["いりぐちはどこですか", "トイレはどこですか", "へやはどこですか"],
      questionText: {
        tl: "Basahin ang pangungusap: 「トイレはどこですか」. Ano ang ibig sabihin nito?",
        en: "Read the sentence: 「トイレはどこですか」. What does it mean?",
        ja: "ことばを読んでください：「トイレはどこですか」"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ito ay 'Toilet wa doko desu ka?' (Where is the restroom?). Ang pinakamahalagang survival sentence sa kahit anong lugar.",
        en: "This is 'Toilet wa doko desu ka?' (Where is the restroom?). The ultimate survival sentence in any location.",
        ja: "「トイレはどこですか」と言っています。最初の日に絶対に使う超重要サバイバル文です。"
      }
    },
    {
      id: 4,
      type: "character-match",
      speechText: "にじはん",
      options: ["1:30 (いちじはん)", "2:00 (にじ)", "2:30 (にじはん)"],
      optionsJa: ["いちじはん", "にじ", "にじはん"],
      questionText: {
        tl: "Paano isulat sa Hiragana ang '2:30' (Two-thirty / Half past two)?",
        en: "How do you write '2:30' (Two-thirty) in Hiragana?",
        ja: "「2時半（2:30）」をひらがなで書くとどれですか？"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ang '2:30' ay isinusulat bilang 'Niji han' (にじはん). Ang 'はん' (han) ay nangangahulugang kalahati o 30 minuto.",
        en: "'2:30' is written as 'Niji han' (にじはん). 'Han' means half past the hour.",
        ja: "「にじはん（2時半）」のことです。「はん」が30分（半分）を意味します。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "なんじからですか",
      options: ["What time does it end? (なんじまでですか)", "What time is it now? (いまなんじですか)", "What time does it start? (なんじからですか)"],
      optionsJa: ["なんじまでですか", "いまなんじですか", "なんじからですか"],
      questionText: {
        tl: "Kapag tinatanong mo ang simula ng iyong seminar o shift: 'Meeting wa, なんじからですか'?",
        en: "When asking about the start time of your meeting or shift: 'Meeting wa, なんじからですか'?",
        ja: "会議やシフトの開始時間を尋ねる「なんじからですか」の意味はどれですか？"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ang 'Kara' ay ibig sabihin ay 'mula' (from). Kaya ang 'Nanji kara desu ka?' ay 'Mula anong oras?' o 'What time does it start?'.",
        en: "'Kara' means 'from'. Therefore, 'Nanji kara desu ka?' translates to 'From what time?' or 'What time does it start?'.",
        ja: "「〜から（From）」を使って、開始時間を尋ねる「何時からですか？」という表現です。"
      }
    }
  ]
};