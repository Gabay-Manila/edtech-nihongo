// =========================================================================
// JFT究極・サバイバル対策 A1/A2判定特化版 【第11課：体調の悪いときの表現】
// 🛠️ 英語バグ完全駆逐：日本語・英語・タガログの「選択肢の並び順」を完全統一！
// =========================================================================

var jftQuizData = {
  lessonTitle: "第11課：【体調の悪いとき】病院の受付と症状のことば 🩺🏥",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "保険証を見せてください",
      options: ["Paki-sulat ang pangalan mo (名前を書いてください)", "Paki-pakita ang insurance card (保険証を見せてください)", "Paki-hintay sa upuan (椅子で待ってください)"],
      optionsJa: ["なまえをかいてください", "ほけんしょうをみせてください", "いすでまってください"],
      optionsEn: ["Please write your name (名前を書いてください)", "Please show your insurance card (保険証を見せてください)", "Please wait on the chair (椅子で待ってください)"],
      correctIndex: 1, // ✨ すべての言語で2番目が「ほけんしょう」に完全統一！
      questionText: {
        tl: "Pakinggan ang audio. Ano ang hinihingi ng receptionist sa ospital?",
        en: "Listen to the audio. What is the hospital receptionist asking for?",
        ja: "おんせいをきいてください。病院の受付（うけつけ）で何を出すように言われていますか。"
      },
      explanation: {
        tl: "Ang narinig mo ay 'Hokenshou wo misete kudasai' (Paki-pakita ang insurance card).",
        en: "You heard 'Hokenshou wo misete kudasai' (Please show your health insurance card).",
        ja: "「保険証（ほけんしょう）を見せてください」と言っています。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "熱が三十八度あります",
      options: ["May masakit sa akin (体が痛いです)", "Nahihilo po ako (めまいがします)", "May lagnat akong 38 degrees (熱が38度あります)"],
      optionsJa: ["からだがいたいです", "めまいがします", "ねつが38どあります"],
      optionsEn: ["My body hurts (体が痛いです)", "I feel dizzy (めまいがします)", "I have a fever of 38 degrees (熱が38度あります)"],
      correctIndex: 2, // ✨ すべての言語で3番目が「熱が38度」に完全統一！これで英語も100%緑になります！
      questionText: {
        tl: "Pakinggan ang audio. Ano ang eksaktong temperatura ng pasyente?",
        en: "Listen to the audio. What is the exact temperature of the patient?",
        ja: "おんせいをきいてください。利用者は熱が何度あると言っていますか。"
      },
      explanation: {
        tl: "Ang narinig mo ay 'Netsu ga sanjuu-hachi do arimasu' (May lagnat akong 38 degrees).",
        en: "You heard 'Netsu ga sanjuu-hachi do arimasu' (I have a fever of 38 degrees).",
        ja: "「熱が38度（さんじゅうはちど）あります」と言っています。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "お腹が痛いです",
      options: ["Masakit ang tiyan ko (お腹が痛いです)", "Masakit ang ulo ko (頭が痛いです)", "Masakit ang ngipin ko (歯が痛いです)"],
      optionsJa: ["おなかがいたいです", "あたまがいたいです", "はがいたいです"],
      optionsEn: ["My stomach hurts (お腹が痛いです)", "I have a headache (頭が痛いです)", "I have a toothache (歯が痛いです)"],
      correctIndex: 0, // ✨ すべての言語で1番目が「お腹が痛いです」に完全統一！
      questionText: {
        tl: "Basahin ang pangungusap: 「お腹が痛いです」. Aling bahagi ng katawan ang masakit?",
        en: "Read the sentence: 「お腹が痛いです」. Which part of the body is hurting?",
        ja: "文字を読んでください：「お腹が痛いです（おなかがいたいです）」。どこが痛いときの表現ですか。"
      },
      explanation: {
        tl: "Ito ay 'Onaka ga itai desu' (Masakit ang tiyan ko).",
        en: "This is 'Onaka ga itai desu' (My stomach hurts).",
        ja: "「お腹が痛いです」という意味です。"
      }
    },
    {
      id: 4,
      type: "reading-context",
      speechText: "昨日から下痢をしています",
      options: ["May ubo ako mula kahapon (昨日から咳が出ます)", "May Lagnat ako mula kahapon (昨日から熱があります)", "May diarya ako mula kahapon (昨日から下痢をしています)"],
      optionsJa: ["きのうからせきがでます", "きのうからねつがあります", "きのうからげりをしています"],
      optionsEn: ["I have a cough since yesterday (昨日から咳が出ます)", "I have a fever since yesterday (昨日から熱があります)", "I have had diarrhea since yesterday (昨日から下痢をしています)"],
      correctIndex: 2, // ✨ すべての言語で3番目が「下痢をしています」に完全統一！
      questionText: {
        tl: "Basahin ang pangungusap: 「昨日から下痢をしています」. Aling sakit ito?",
        en: "Read the sentence: 「昨日から下痢をしています」. What is the condition?",
        ja: "文字を読んでください：「昨日から下痢をしています」。どんな症状（しょうじょう）ですか。"
      },
      explanation: {
        tl: "Ito ay 'Kinou kara geri wo shite imasu' (May diarya ako mula kahapon).",
        en: "This is 'Kinou kara geri wo shite imasu' (I have had diarrhea since yesterday).",
        ja: "「昨日（きのう）から下痢（げり）をしています」という意味です。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "お薬をお出ししますね",
      options: ["Magre-reseta ako ng gamot (お薬をお出ししますね)", "Kukunin ko ang iyong timbang (体重を測りますね)", "Uuwi na tayo sa bahay (家に帰りましょうね)"],
      optionsJa: ["おくすりをおだししますね", "たいじゅうをはかりますね", "いえにかえりましょうね"],
      optionsEn: ["We will prescribe your medicine (お薬をお出ししますね)", "We will check your weight (体重を測りますね)", "Let's go back home (家に帰りましょうね)"],
      correctIndex: 0, // ✨ すべての言語で1番目が「お薬をお出ししますね」に完全統一！
      questionText: {
        tl: "Ano ang sasabihin ng doktor o pharmacist sa dulo ng pagkonsulta: 「お薬をお出ししますね」?",
        en: "What does the doctor or pharmacist say at the end of the consultation: 「お薬をお出ししますね」?",
        ja: "診察（しんさつ）が終わったあと、お医者さんや薬局の人が言う言葉を選んでください：「お薬をお出ししますね」"
      },
      explanation: {
        tl: "Ito ay 'Okusuri wo odashi shimasu ne' (Magre-reseta / Magbibigay kami ng gamot).",
        en: "This is 'Okusuri wo odashi shimasu ne' (We will dispense/prescribe your medicine).",
        ja: "「お薬をお出ししますね（おくすりをおだししますね）」と言っています。"
      }
    }
  ]
};
