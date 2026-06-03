// =========================================================================
// JFT究極・サバイバル対策 A1判定特化版 【第8課：職場のコミュニケーション・完全修正版】
// 不具合修正：英語選択時にタガログ語が漏れるバグを「optionsEn」の増設で100%駆逐！
// 仕様：マザー金型へそのまま合流可能。途中で切り替えても学習過程を引き継ぎます。
// =========================================================================

var jftQuizData = {
  lessonTitle: "第8課：【職場のコミュニケーション】指示と確認のことば 🗣️📋",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "わかりました",
      options: ["Hindi ko alam (わかりません)", "Naintindihan ko (わかりました)", "Sandali lang (ちょっと待ってください)"],
      optionsJa: ["わかりません", "わかりました", "ちょっとまってください"],
      optionsEn: ["I don't understand (わかりません)", "I understood (わかりました)", "Please wait a moment (ちょっと待ってください)"],
      correctIndex: 1,
      questionText: {
        tl: "Pakinggan ang audio. Ano ang tamang isasagot kapag naintindihan mo ang utos ng iyong senior?",
        en: "Listen to the audio. What is the correct response when you understand your senior's instruction?",
        ja: "おんせいをきいてください。先輩の指示を正しく理解したとき、何と言って返事をしますか。"
      },
      explanation: {
        tl: "Ang narinig mo ay 'Wakarimashita' (Naintindihan ko). Ito ang pinakamahalagang tugon sa trabaho para magbigay ng kapanatagan sa iyong kasamahan.",
        en: "You heard 'Wakarimashita' (I understood). This is the most fundamental response in a Japanese workplace to show you are ready.",
        ja: "「わかりました」と言っています。指示を受けた際、大きな声でこれを言うだけで現場の信頼関係がグッと引き締まる、サバイバル必須の返事です。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "もう一度お願いします",
      options: ["Paki-sulat po dito (ここに書いてください)", "Salamat po (ありがとうございます)", "Paki-ulit po muli (もう一度お願いします)"],
      optionsJa: ["ここにかいてください", "ありがとうございます", "もういちどおねがいします"],
      optionsEn: ["Please write it down here (ここに書いてください)", "Thank you very much (ありがとうございます)", "Please say it once more (もう一度お願いします)"],
      correctIndex: 2,
      questionText: {
        tl: "Pakinggan ang audio. Ano ang sasabihin mo kapag hindi mo narinig nang maayos ang sinabi?",
        en: "Listen to the audio. What should you say when you couldn't hear or understand what was said?",
        ja: "おんせいをきいてください。相手の言葉が聞き取れなかったとき、丁寧に聞き返す言葉はどれですか。"
      },
      explanation: {
        tl: "Ito ay 'Mou ichido onegai shimasu' (Paki-ulit po muli). Huwag mahihiyang sabihin ito kapag hindi sigurado upang maiwasan ang pagkakamali sa pag-aalaga!",
        en: "This is 'Mou ichido onegai shimasu' (One more time, please). Never hesitate to use this phrase to avoid mistakes in caregiving!",
        ja: "「もういちどおねがいします（もう一度お願いします）」と言っています。わからないまま返事をして間違えるのが一番危ないですから、現場で堂々と聞き返すための命綱ことばです。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "ちょっと待ってください",
      options: ["Sandali lang po (ちょっと待ってください)", "Puwede na pong umalis (もう帰ってもいいです)", "Mag-ingat po kayo (気をつけてください)"],
      optionsJa: ["ちょっとまってください", "もうかってもいいです", "気をつけてください"],
      optionsEn: ["Please wait a moment (ちょっと待ってください)", "You may go home now (もう帰ってもいいです)", "Please be careful (気をつけてください)"],
      questionText: {
        tl: "Basahin ang parirala: 「ちょっと待ってください」. Kailan ito ginagamit?",
        en: "Read the phrase: 「ちょっと待ってください」. When is this phrase used?",
        ja: "文字を読んでください：「ちょっと待ってください」。どのようなときに使う言葉ですか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ay 'Chotto matte kudasai' (Sandali lang po / Please wait a moment). Ginagamit ito kapag may tinatapos kang ibang gawain at kailangan mong pakiusapan ang pasyente o kasamahan.",
        en: "This is 'Chotto matte kudasai' (Please wait a moment). Used when you are in the middle of a task and need a senior or resident to hold on for a second.",
        ja: "「ちょっと待ってください」という意味です。ナースコールが重なったときや、他の利用者の介助中で動けないときなどに、少しだけ待ってもらうための実戦クッション表現です。"
      }
    },
    {
      id: 4,
      type: "reading-context",
      speechText: "確認します",
      options: ["Tatanong ako (聞きます)", "Iche-tsuri ko / Ibe-verify ko (確認します)", "Isusulat ko (書きます)"],
      optionsJa: ["ききます", "かくにんします", "かきます"],
      optionsEn: ["I will ask (聞きます)", "I will check / verify (確認します)", "I will write down (書きます)"],
      correctIndex: 1,
      questionText: {
        tl: "Ano ang sasabihin mo bago mo i-double check ang gamot o pangalan ng pasyente: 「確認します」?",
        en: "What should you say before double-checking a resident's medicine or name: 「確認します」?",
        ja: "利用者の名前や薬をダブルチェックするとき、声に出して宣言する言葉はどれですか：「確認します」"
      },
      explanation: {
        tl: "Ito ay 'Kakunin shimasu' (Ibe-verify ko / I will check). Napakahalaga ng salitang ito sa介護 (caregiving) upang maiwasan ang anumang aksidente.",
        en: "This is 'Kakunin shimasu' (I will check/confirm). A vital safety phrase used constantly in Japanese caregiving to prevent mistakes.",
        ja: "「確認します（かくにんします）」という意味です。事故（誤薬など）を防ぐために、指差し呼称（ゆびさしこしょう）をしながら、トリプルチェックする際の基本動作ことばです。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "手伝ってください",
      options: ["Paki-tulungan po ako (手伝ってください)", "Paki-turuan po ako (教えてください)", "Kaya ko na po ito (自分でできます)"],
      optionsJa: ["てつだってください", "おしえてください", "じぶんでできます"],
      optionsEn: ["Please help me (手伝ってください)", "Please teach me (教えてください)", "I can do it myself (自分でできます)"],
      correctIndex: 0,
      questionText: {
        tl: "Ano ang hihilingin mo sa iyong kasamahan kapag mabigat ang pasyente at hindi mo kayang buhatin mag-isa: 「手伝ってください」",
        en: "What should you say to a colleague when a resident is too heavy to transfer by yourself: 「手伝ってください」",
        ja: "利用者の体を一人で支えるのが大変なとき、近くのスタッフに協力を頼む言葉はどれですか：「手伝ってください」"
      },
      explanation: {
        tl: "Ito ay 'Tetsudatte kudasai' (Paki-tulungan po ako / Please help me). Huwag pipilitin mag-isa upang maiwasan ang pagbagsak ng pasyente o pagsakit ng iyong likod!",
        en: "This is 'Tetsudatte kudasai' (Please help me). Essential teamwork phrase to prevent resident falls and caregiver back injuries!",
        ja: "「
