// =========================================================================
// JFT究極・サバイバル対策 A1/A2判定特化版 【第11課：体調の悪いときの表現】
// テーマ：病院の受付でのやり取り、具体的な症状（熱・痛み）のサバイバル伝達
// 仕様：マザー金型(index.html)へそのまま100%合流可能な軽量JSON構造（optionsEn標準装備）
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
      optionsEn: ["Please show your insurance card (保険証を見せてください)", "Please write your name (名前を書いてください)", "Please wait on the chair (椅子で待ってください)"],
      correctIndex: 0,
      questionText: {
        tl: "Pakinggan ang audio. Ano ang hinihingi ng receptionist sa ospital?",
        en: "Listen to the audio. What is the hospital receptionist asking for?",
        ja: "おんせいをきいてください。病院の受付（うけつけ）で何を出すように言われていますか。"
      },
      explanation: {
        tl: "Ang narinig mo ay 'Hokenshou wo misete kudasai' (Paki-pakita ang insurance card). Sa Japan, napakahalagang dalhin ang Hokenshou sa ospital upang mabawasan ang babayaran.",
        en: "You heard 'Hokenshou wo misete kudasai' (Please show your health insurance card). This is the standard phrase spoken at any Japanese hospital clinic reception.",
        ja: "「保険証（ほけんしょう）を見せてください」と言っています。日本の病院を受診する際、最初に必ず受付で提出を求められる超重要サバイバル表現です。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "熱が三十八度あります",
      options: ["May masakit sa akin (体が痛いです)", "Nahihilo po ako (めまいがします)", "May lagnat akong 38 degrees (熱が38度あります)"],
      optionsJa: ["からだがいたいです", "めまいがします", "ねつが38どあります"],
      optionsEn: ["I have a fever of 38 degrees (熱が38度あります)", "My body hurts (体が痛いです)", "I feel dizzy (めまいがします)"],
      correctIndex: 0,
      questionText: {
        tl: "Pakinggan ang audio. Ano ang eksaktong temperatura ng pasyente?",
        en: "Listen to the audio. What is the exact temperature of the patient?",
        ja: "おんせいをきいてください。利用者は熱が何度あると言っていますか。"
      },
      explanation: {
        tl: "Ang narinig mo ay 'Netsu ga sanjuu-hachi do arimasu' (May lagnat akong 38 degrees). Ang 'Do' (度) ay ginagamit para sa temperatura ng katawan.",
        en: "You heard 'Netsu ga sanjuu-hachi do arimasu' (I have a fever of 38 degrees). 'Do' is the counter for degrees Celsius.",
        ja: "「熱が38度（さんじゅうはちど）あります」と言っています。お医者さんや看護師さんに自分の症状、または利用者の状態を正確に数値で伝えるための必須フレーズです。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "お腹が痛いです",
      options: ["Masakit ang tiyan ko (お腹が痛いです)", "Masakit ang ulo ko (頭が痛いです)", "Masakit ang ngipin ko (歯が痛いです)"],
      optionsJa: ["おなかがいたいです", "あたまがいたいです", "はがいたいです"],
      optionsEn: ["My stomach hurts (お腹が痛いです)", "I have a headache (頭が痛いです)", "I have a toothache (歯が痛いです)"],
      correctIndex: 0,
      questionText: {
        tl: "Basahin ang pangungusap: 「お腹が痛いです」. Aling bahagi ng katawan ang masakit?",
        en: "Read the sentence: 「お腹が痛いです」. Which part of the body is hurting?",
        ja: "文字を読んでください：「お腹が痛いです（おなかがいたいです）」。どこが痛いときの表現ですか。"
      },
      explanation: {
        tl: "Ito ay 'Onaka ga itai desu' (Masakit ang tiyan ko). Ang 'Onaka' ay tiyan, at ang 'itai' ay masakit. Madalas itong gamitin kapag sumasakit ang tiyan pagkatapos kumain.",
        en: "This is 'Onaka ga itai desu' (My stomach hurts). 'Onaka' means stomach, and 'itai' means painful or hurting.",
        ja: "「お腹が痛いです」という意味です。介護現場でも、利用者がお腹を押さえながら訴えることが多いトラブル表現ですので、即座に察知する必要があります。"
      }
    },
    {
      id: 4,
      type: "reading-context",
      speechText: "昨日から下痢をしています",
      options: ["May ubo ako mula kahapon (昨日から咳が出ます)", "May Lagnat ako mula kahapon (昨日から熱があります)", "May diarya ako mula kahapon (昨日から下痢をしています)"],
      optionsJa: ["きのうからせきがでます", "きのうからねつがあります", "きのうからげりをしています"],
      optionsEn: ["I have had diarrhea since yesterday (昨日から下痢をしています)", "I have had a cough since yesterday (昨日から咳が出ます)", "I have had a fever since yesterday (昨日から熱があります)"],
      correctIndex: 0,
      explanation: {
        tl: "Ito ay 'Kinou kara geri wo shite imasu' (May diarya ako mula kahapon). Ang 'Geri' (下痢) ay diarya, isang mahalagang sintomas na dapat i-ulat agad sa nurse.",
        en: "This is 'Kinou kara geri wo shite imasu' (I have had diarrhea since yesterday). 'Geri' means diarrhea, a critical condition to report immediately in caregiving.",
        ja: "「昨日（きのう）から下痢（げり）をしています」という意味です。いつから症状が出ているか（昨日から）を伝えることで、お医者さんが正しい薬を処方しやすくなります。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "お薬をお出ししますね",
      options: ["Magre-reseta ako ng gamot (お薬をお出ししますね)", "Kukunin ko ang iyong timbang (体重を測りますね)", "Uuwi na tayo sa bahay (家に帰りましょうね)"],
      optionsJa: ["おくすりをおだししますね", "たいじゅうをはかりますね", "いえにかえりましょうね"],
      optionsEn: ["We will prescribe your medicine (お薬をお出ししますね)", "We will check your weight (体重を測りますね)", "Let's go back home (家に帰りましょうね)"],
      correctIndex: 0,
      questionText: {
        tl: "Ano ang sasabihin ng doktor o pharmacist sa dulo ng pagkonsulta: 「お薬をお出ししますね」?",
        en: "What does the doctor or pharmacist say at the end of the consultation: 「お薬をお出ししますね」?",
        ja: "診察（しんさつ）が終わったあと、お医者さんや薬局の人が言う言葉を選んでください：「お薬をお出ししますね」"
      },
      explanation: {
        tl: "Ito ay 'Okusuri wo odashi shimasu ne' (Magre-reseta / Magbibigay kami ng gamot). Pagkatapos nito, pupunta ka sa parmasya para kunin ang gamot.",
        en: "This is 'Okusuri wo odashi shimasu ne' (We will dispense/prescribe your medicine). A standard closing phrase at a clinic.",
        ja: "「お薬をお出ししますね（おくすりをおだししますね）」と言っています。日本の病院やクリニックで、診察の最後に先生からかけられる定番の安心フレーズです。"
      }
    }
  ]
};