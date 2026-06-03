// =========================================================================
// JFT究極・サバイバル対策 A1判定特化版 【第6課】
// テーマ：〜をください（食事・注文・個数編）
// 仕様：全問題に「speechText」完備。ローカル環境で100%音声が連動します。
// =========================================================================

var jftQuizData = {
  lessonTitle: "第6課：〜をください（食事・注文・個数）",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "お水をください",
      options: ["O-mizu wo kudasai (お水をください)", "O-cha wo kudasai (お茶をください)", "Gohan wo kudasai (ご飯をください)"],
      optionsJa: ["おみずをください", "おちゃをください", "ごはんをください"],
      questionText: {
        tl: "Pakinggan ang audio. Ano ang hinihingi niya sa restaurant o sa hapag-kainan?",
        en: "Listen to the audio. What is this person asking for at a restaurant or dining hall?",
        ja: "おんせいをきいてください。何を頼（たの）んでいますか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang narinig mo ay 'O-mizu wo kudasai' (Water, please / Paki-bigay ang tubig). Napakahalagang survival phrase para sa araw-araw!",
        en: "You heard 'O-mizu wo kudasai' (Water, please). A vital survival phrase for daily life and dining halls.",
        ja: "「おみずをください（お水をください）」と言っています。食堂やレストランで最初に使う超重要サバイバル表現です。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "ふたつ",
      options: ["1 counter (ひとつ)", "2 counters (ふたつ)", "3 counters (みっつ)"],
      optionsJa: ["ひとつ", "ふたつ", "みっつ"],
      questionText: {
        tl: "Pakinggan ang bilang ng mga bagay (objects). Ilan ang tinutukoy nito?",
        en: "Listen to the object counter. How many items does this specify?",
        ja: "おんせいをきいてください。いくつ（何個）のことですか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'Futatsu' (Two items / Dalawa). Ang pagbibilang ng mga bagay gamit ang 'Hitotsu, Futatsu, Mittu' ay laging lumalabas sa A1 exam!",
        en: "You heard 'Futatsu' (Two items). Counting objects with 'Hitotsu, Futatsu, Mittsu' is a mandatory topic for the A1 exam!",
        ja: "「ふたつ（2つ）」と言っています。物の数え方（ひとつ、ふたつ、みっつ…）は、A1判定試験で100%狙われる必須知識です。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "これをください",
      options: ["What is this? (これにしてください)", "Please give me this. (これをください)", "I will take that. (それをください)"],
      optionsJa: ["これにしてください", "これをください", "それをください"],
      questionText: {
        tl: "Basahin ang salita habang itinuturo ang menu: 「これをください」. Ano ang ibig sabihin nito?",
        en: "Read the phrase used when pointing at a menu: 「これをください」. What does it mean?",
        ja: "メニューを指さして言うことばです：「これをください」"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ito ay 'Kore wo kudasai' (Please give me this / Ito po paki-bigay). Kahit hindi mo alam ang pangalan ng pagkain, mabilis kang makakapag-order gamit ito!",
        en: "This is 'Kore wo kudasai' (Please give me this). Even if you don't know the food's name, you can order easily by pointing!",
        ja: "「これをください」のことです。単語の名前が分からなくても、メニューを指さしてこれが言えればサバイバル成功です。"
      }
    },
    {
      id: 4,
      type: "character-match",
      speechText: "いくつですか",
      options: ["What is it? (なんですか)", "How much is it? (いくらですか)", "How many items? (いくつですか)"],
      optionsJa: ["なんですか", "いくらですか", "いくつですか"],
      questionText: {
        tl: "Kapag tinatanong ka ng staff tungkol sa dami ng order mo: 「いくつですか」?",
        en: "When a staff member asks you about the quantity of your order: 「いくつですか」?",
        ja: "お店の人に注文の個数を尋ねられる「いくつですか」の意味はどれですか？"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ang 'Ikutsu desu ka?' ay nangangahulugang 'Ilan?' (How many?). Huwag itong ipagkamali sa 'Ikura desu ka?' (Magkano / How much) na natutunan natin sa Lesson 3!",
        en: "'Ikutsu desu ka?' means 'How many?'. Don't confuse it with 'Ikura desu ka?' (How much) which we learned in Lesson 3!",
        ja: "「いくつですか（何個ですか？）」という意味です。第3課でやった「いくらですか（金額）」との引っ掛け問題に注意してください。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "りんごをみっつください",
      options: ["Please give me 2 apples. (りんごをふたつください)", "Please give me 3 apples. (りんごをみっつください)", "Please give me 4 apples. (りんごをよっつください)"],
      optionsJa: ["りんごをふたつください", "りんごをみっつください", "りんごをよっつください"],
      questionText: {
        tl: "Basahin ang buong order: 'Ringo wo みっつ ください'. Ilang mansanas ang hinihingi niya?",
        en: "Read the full order: 'Ringo wo みっつ ください'. How many apples are being requested?",
        ja: "注文の文を読んでください：「りんごをみっつください」"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang 'Mittsu' ay nangangahulugang 3 items (Tatlo). Kaya ang buong pangungusap ay 'Three apples, please'.",
        en: "'Mittsu' means 3 items. Therefore, the whole sentence translates to 'Three apples, please'.",
        ja: "「みっつ（3つ）」のことです。文章題として「[名詞] + を + [個数] + ください」の綺麗な基本形を叩き込みます。"
      }
    }
  ]
};