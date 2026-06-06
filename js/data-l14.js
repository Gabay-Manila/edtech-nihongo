// =========================================================================
// JFT究極・サバイバル対策 A1/A2判定特化版 【第14課：道や駅での尋ね方】
// 🛠️ 小テスト(l13)とのバッティング完全回避、三言語インデックス完全統一版
// =========================================================================

var jftQuizData = {
  lessonTitle: "第14課：【道案内と移動】駅やバス乗り場の場所をたずねることば 🗺️🚌",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "すみません、きっぷ売り場はどこですか",
      options: [
        "Excuse me, nasaan ang ticket office? (すみません、きっぷ売り場はどこですか)",
        "Excuse me, nasaan ang banyo? (すみません、トイレはどこですか)",
        "Excuse me, nasaan ang exit? (すみません、出口はどこですか)"
      ],
      optionsJa: [
        "すみません、きっぷうりばはどこですか",
        "すみません、トイレはどこですか",
        "すみません、でぐちはどこですか"
      ],
      optionsEn: [
        "Excuse me, where is the ticket office? (すみません、きっぷ売り場はどこですか)",
        "Excuse me, where is the restroom? (すみません、トイレはどこですか)",
        "Excuse me, where is the exit? (すみません、出口はどこですか)"
      ],
      correctIndex: 0, // すべての言語で1番目が100%正解！
      questionText: {
        tl: "Pakinggan ang audio. Ano ang hinahanap ng tao sa istasyon?",
        en: "Listen to the audio. What is the person looking for in the station?",
        ja: "おんせいをきいてください。利用者は駅のなかでどこを探していますか。"
      },
      explanation: {
        tl: "Ang narinig mo ay 'Sumimasen, kippu uriba wa doko desu ka' (Excuse me, nasaan ang ticket office?). Ang 'Kippu' ay ticket.",
        en: "You heard 'Sumimasen, kippu uriba wa doko desu ka' (Excuse me, where is the ticket office?). 'Kippu' means train ticket.",
        ja: "「すみません、きっぷ売り場（うりば）はどこですか」と言っています。電車に乗る前に切符を買う場所を尋ねるサバイバル表現です。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "まっすぐ行って二つ目の角を右に曲がってください",
      options: [
        "Dumiretso lang at lumiko sa kaliwa sa unang kanto (まっすぐ行って一つ目の角を左に曲がってください)",
        "Dumiretso lang at lumiko sa kanan sa pangalawang kanto (まっすぐ行って二つ目の角を右に曲がってください)",
        "Huminto ka sa tapat ng convenience store (コンビニの前で止まってください)"
      ],
      optionsJa: [
        "まっすぐいってひとつめのかどをひだりにまがってください",
        "まっすぐいってふたつめのかどをみぎにまがってください",
        "コンビニのまえでとまってください"
      ],
      optionsEn: [
        "Go straight and turn left at the first corner (まっすぐ行って一つ目の角を左に曲がってください)",
        "Go straight and turn right at the second corner (まっすぐ行って二つ目の角を右に曲がってください)",
        "Please stop in front of the convenience store (コンビニの前で止まってください)"
      ],
      correctIndex: 1, // すべての言語で2番目が100%正解！
      questionText: {
        tl: "Pakinggan ang audio. Aling direksyon ang tamang daan?",
        en: "Listen to the audio. Which direction is the correct path?",
        ja: "おんせいをきいてください。道案内（みちあんない）でどのように進むと言っていますか。"
      },
      explanation: {
        tl: "Ang narinig mo ay 'Massugu itte futatsu-me no kado wo migi ni magatte kudasai' (Dumiretso at lumiko sa kanan sa pangalawang kanto).",
        en: "You heard 'Massugu itte futatsu-me no kado wo migi ni magatte kudasai' (Go straight and turn right at the second corner).",
        ja: "「まっすぐ行って二つ目の角（かど）を右に曲が（まが）ってください」と言っています。道案内を聞き取る上での最難関ポイントです。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "市役所行きのバスはどこから出ますか",
      options: [
        "Saan sumasayay ng taxi papuntang City Hall? (市役所行きのタクシーはどこから乗りますか)",
        "Saan galing ang tren papuntang City Hall? (市役所行きの電車はどこから出ますか)",
        "Saan aalis ang bus papuntang City Hall? (市役所行きのバスはどこから出ますか)"
      ],
      optionsJa: [
        "しやくしょいきのタクシーはどこからのりますか",
        "しやくしょいきのでんしゃはどこからでますか",
        "しやくしょいきのバスはどこから出ますか"
      ],
      optionsEn: [
        "Where do I take a taxi to City Hall? (市役所行きのタクシーはどこから乗りますか)",
        "Where does the train to City Hall leave from? (市役所行きの電車はどこから出ますか)",
        "Where does the bus bound for City Hall leave from? (市役所行きのバスはどこから出ますか)"
      ],
      correctIndex: 2, // すべての言語で3番目が100%正解！
      questionText: {
        tl: "Basahin ang pangungusap: 「市役所行きのバスはどこから出ますか」. Aling sasakyan ang tinutukoy?",
        en: "Read the sentence: 「市役所行きのバスはどこから出ますか」. Which transportation is mentioned?",
        ja: "文字を読んでください：「市役所行きのバスはどこから出ますか」。何に乗りたいときの質問ですか。"
      },
      explanation: {
        tl: "Ito ay 'Shiyakusho iki no basu wa doko kara demasu ka' (Saan aalis ang bus papuntang City Hall?). Ang 'Shiyakusho' ay City Hall.",
        en: "This is 'Shiyakusho iki no basu wa doko kara demasu ka' (Where does the bus bound for City Hall leave from?).",
        ja: "「市役所（しやくしょ）行き（いき）のバスはどこから出ますか」という意味です。地方の現場で役所手続きに行く際の重要表現です。"
      }
    },
    {
      id: 4,
      type: "reading-context",
      speechText: "３番乗り場ですよ",
      options: [
        "Ito ay sa Platform No. 3 / Bus Stop No. 3 (3番乗り場ですよ)",
        "Ito ay sa Room No. 3 (3番の部屋ですよ)",
        "Dumating ang 3 tao (3人来ましたよ)"
      ],
      optionsJa: [
        "3ばんのりばですよ",
        "3ばんのへやですよ",
        "3にんきましたよ"
      ],
      optionsEn: [
        "It's at Bus Stop No. 3 / Platform No. 3 (3番乗り場ですよ)",
        "It's Room No. 3 (3番の部屋ですよ)",
        "3 people have arrived (3人来ましたよ)"
      ],
      correctIndex: 0, // すべての言語で1番目が100%正解！
      questionText: {
        tl: "Saan mo dapat hintayin ang bus kapag sinabi ng matanda: 「3番乗り場ですよ」?",
        en: "Where should you wait for the bus when an elderly person tells you: 「3番乗り場ですよ」?",
        ja: "道で場所をたずねたとき、親切な人が教えてくれました。どこへ行けばいいですか：「3番乗り場（さんばんのりば）ですよ」"
      },
      explanation: {
        tl: "Ito ay 'San-ban noriba desu yo' (Sa Bus Stop / Platform No. 3). Ang 'Noriba' ay ang tiyak na lugar kung saan sumasakay ng bus o tren.",
        en: "This is 'San-ban noriba desu yo' (It's at Platform / Bus Stop No. 3). 'Noriba' means the boarding location.",
        ja: "「3番（さんばん）乗り場（のりば）ですよ」という意味です。バスの電光掲示板や案内柱の数字を見つけて並びます。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "この電車は各駅停車ですか",
      options: [
        "Mabilis ba ang tren na ito? (この電車は快速ですか)",
        "Humihinto ba ang tren na ito sa bawat istasyon? (この電車は各駅停車ですか)",
        "Papuntang Shibuya ba ang tren na ito? (この電車は渋谷行きですか)"
      ],
      optionsJa: [
        "このでんしゃはかいそくですか",
        "このでんしゃはかくえきていしゃですか",
        "このでんしゃはしぶやいきですか"
      ],
      optionsEn: [
        "Is this train an express train? (この電車は快速ですか)",
        "Does this train stop at every station? (この電車は各駅停車ですか)",
        "Is this train bound for Shibuya? (この電車は渋谷行きですか)"
      ],
      correctIndex: 1, // すべての言語で2番目が100%正解！
      questionText: {
        tl: "Ano ang ibig sabihin kapag tinanong mo ang konduktor sa istasyon: 「この電車は各駅停車ですか」?",
        en: "What do you mean when you ask the station staff: 「この電車は各駅停車ですか」?",
        ja: "電車の種類を確かめたいです。なんと言って駅員（えきいん）さんに質問しますか：「この電車は各駅停車ですか」"
      },
      explanation: {
        tl: "Ito ay 'Kono densha wa kakueki teisha desu ka' (Humihinto ba ang tren na ito sa bawat istasyon?). Kapaki-pakinabang para hindi lumampas sa maliit na istasyon.",
        en: "This is 'Kono densha wa kakueki teisha desu ka' (Does this train stop at every station?). Useful for avoiding missing small stations.",
        ja: "「この電車は各駅停車（かくえきていしゃ＝すべての駅に停まる各停）ですか」という意味です。快速や急行に乗って目的の駅をすっ飛ばさないための防衛策です。"
      }
    }
  ]
};