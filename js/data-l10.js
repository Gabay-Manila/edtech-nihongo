// =========================================================================
// JFT究極・サバイバル対策 A1判定特化版 【第10課：服装と着替えの介助】
// テーマ：着替えのときの手順の声かけ、サイズや着心地の確認サバイバル表現
// 仕様：マザー金型(index.html)へそのまま100%合流可能な軽量JSON構造
// =========================================================================

var jftQuizData = {
  lessonTitle: "第10課：【服装と着替え】介助と身だしなみのことば 👕👖",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "ズボンをはきますよ",
      options: ["Isusuot ang baro (シャツを着ますよ)", "Isuot ang sapatos (靴を履きますよ)", "Isusuot ang pantalon (ズボンをはきますよ)"],
      optionsJa: ["シャツをきますよ", "くつをはきますよ", "ズボンをはきますよ"],
      questionText: {
        tl: "Pakinggan ang audio. Ano ang isusuot ng pasyente ayon sa pangungusap?",
        en: "Listen to the audio. What is the resident going to wear according to the sentence?",
        ja: "おんせいをきいてください。利用者に何をはいてもらいますか。"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ang narinig mo ay 'Zubon wo hakimasu yo' (Isusuot ang pantalon). Ang 'hakimasu' ay ginagamit para sa mga damit na isinusuot mula sa ibaba (pantalon, medyas, sapatos).",
        en: "You heard 'Zubon wo hakimasu yo' (Let's put on your pants). The verb 'hakimasu' is used for clothing worn on the lower body.",
        ja: "「ズボンをはきますよ」と言っています。下半身に身に付けるもの（ズボン、靴下、靴など）には「はきます」を使います。介助の動作に入る前の大切な声かけです。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "きつくないですか",
      options: ["Masakit ba? (痛いですか)", "Masikip ba? (きつくないですか)", "Maluwag ba? (ゆるくないですか)"],
      optionsJa: ["いたいですか", "きつくないですか", "ゆるくないですか"],
      questionText: {
        tl: "Pakinggan ang audio. Ano ang itinatanong ng caregiver matapos isuot ang damit?",
        en: "Listen to the audio. What is the caregiver checking after helping the resident get dressed?",
        ja: "おんせいをきいてください。服や靴を身に付けたあと、何を確認していますか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ito ay 'Kitsukunai desu ka?' (Masikip ba? / Is it too tight?). Napakahalagang itanong ito para masiguradong kumportable ang pasyente at hindi mapresur ang kanilang balat.",
        en: "This is 'Kitsukunai desu ka?' (Is it too tight?). A crucial check to ensure the clothing or shoes are comfortable and not restricting blood flow.",
        ja: "「きつくないですか（窮屈ではないですか）」と聞いています。服のボタンを留めたあとや、靴・靴下をはかせたあとに、締め付けがきつすぎて利用者が苦しくないかを確認する優しさのフレーズです。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "上着を脱ぎます",
      options: ["Hubarin ang jacket/outerwear (上着を脱ぎます)", "Isuot ang shirt (シャツを着ます)", "Isuot ang medyas (靴下をはきます)"],
      optionsJa: ["うわぎをぬぎます", "シャツをきます", "くつしたをはきます"],
      questionText: {
        tl: "Basahin ang parirala: 「上着を脱ぎます」. Ano ang ibig sabihin nito bago maligo o matulog?",
        en: "Read the phrase: 「上着を脱ぎます」. What action does this indicate before bathing or sleeping?",
        ja: "文字を読んでください：「上着を脱ぎます（うわぎをぬぎます）」。どのような動作ですか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ay 'Uwagi wo nugimasu' (Hubarin ang jacket o panlabas na damit). Ang 'Uwagi' ay jacket/jacket-like top, at ang 'nugimasu' ay hubarin (take off).",
        en: "This is 'Uwagi wo nugimasu' (Take off your jacket/outerwear). 'Uwagi' means jacket or coat, and 'nugimasu' means to take off clothes.",
        ja: "「上着を脱ぎます（うわぎをぬぎます）」という意味です。お風呂（入浴介助）の前や、室温が高くて暑いときなどに、上着を脱ぐお手伝いをする際の声かけです。"
      }
    },
    {
      id: 4,
      type: "reading-context",
      speechText: "袖に手を通してください",
      options: ["Pakisara ang button (ボタンを留めてください)", "Paki-pasok ang kamay sa manggas (袖に手を通してください)", "Paki-taas ang iyong paa (足を上げてください)"],
      optionsJa: ["ボタンをとめてください", "そでに手をとおしてください", "あしをあげてください"],
      questionText: {
        tl: "Ano ang sasabihin mo sa pasyente kapag isusuot ang manggas ng damit: 「袖に手を通してください」?",
        en: "What should you say to guide the resident when putting their arm through a sleeve: 「袖に手を通してください」?",
        ja: "シャツや上着を着るとき、利用者の腕（うで）をどこに入れてもらいますか：「袖に手を通してください」"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ito ay 'Sode ni te wo tooshite kudasai' (Paki-pasok ang kamay sa manggas / Please put your arm through the sleeve). Madalas itong gamitin sa pagpapalit ng damit araw-araw.",
        en: "This is 'Sode ni te wo tooshite kudasai' (Please put your arm through the sleeve). A very practical instruction used during morning and evening changing.",
        ja: "「袖（そで）に手を通してください」という意味です。寝たきりの方や片麻痺のある方の着替えをサポートするとき、利用者に協力してもらうための定番の声かけです。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "パジャマに着替えましょう",
      options: ["Magpalit na tayo ng pajama (パジャマに着替えましょう)", "Ihanda ang wheelchair (車椅子を用意しましょう)", "Maghugas tayo ng kamay (手を洗いましょう)"],
      optionsJa: ["パジャマにきがえましょう", "くるまいすをよういしましょう", "てをあらいましょう"],
      questionText: {
        tl: "Anong oras karaniwang sinasabi ang pariralang ito: 「パジャマに着替えましょう」?",
        en: "What time or situation is this phrase usually spoken: 「パジャマに着替えましょう」?",
        ja: "夜、寝る前に利用者にかける言葉を選んでください：「パジャマに着替えましょう」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ay 'Pajama ni kigaemashou' (Magpalit na tayo ng pajama / Let's change into pajamas). Ginagamit ito sa gabi bago matulog para ihanda ang pasyente sa pahinga.",
        en: "This is 'Pajama ni kigaemashou' (Let's change into your pajamas). Spoken in the evening to help the resident prepare for bed and switch to sleeping mode.",
        ja: "「パジャマに着替えましょう（きがえましょう）」という意味です。生活のリズムを整えるため、朝は普段着に、夜はパジャマに着替えてもらう際の声かけです。"
      }
    }
  ]
};