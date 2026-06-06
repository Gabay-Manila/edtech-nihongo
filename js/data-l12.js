// =========================================================================
// JFT究極・サバイバル対策 A1/A2判定特化版 【第12課：仕事の連絡と相談】
// 🛠️ 完全指差し検修：三言語の配列インデックスを完全統一、手戻り完全消滅版
// =========================================================================

var jftQuizData = {
  lessonTitle: "第12課：【仕事の連絡】遅刻・欠勤と休みをもらうことば 📞🏢",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "風邪をひいたので今日休ませてください",
      options: [
        "Papasukin ako mamaya (少し遅れます)",
        "Paki-usap, payagan mo akong lumiban ngayon dahil may lagnat/trangkaso ako (風邪をひいたので今日休ませてください)",
        "Gusto kong magbakasyon sa susunod na buwan (来月休みが欲しいです)"
      ],
      optionsJa: [
        "すこしおくれます",
        "かぜをひいたのできょうやすませてください",
        "らいげつやすみがほしいです"
      ],
      optionsEn: [
        "I will be a bit late (少し遅れます)",
        "Please let me take today off because I caught a cold (風邪をひいたので今日休ませてください)",
        "I want a vacation next month (来月休みが欲しいです)"
      ],
      correctIndex: 1, // 2番目が正解
      questionText: {
        tl: "Pakinggan ang audio. Ano ang dahilan kung bakit gustong lumiban ng empleyado?",
        en: "Listen to the audio. Why does the employee want to take the day off?",
        ja: "おんせいをきいてください。どうして今日休むと言っていますか。"
      },
      explanation: {
        tl: "Ang narinig mo ay 'Kaze wo hiita node kyou yasumasete kudasai' (Dahil may trangkaso ako, paki-usap payagan mo akong lumiban ngayon).",
        en: "You heard 'Kaze wo hiita node kyou yasumasete kudasai' (I caught a cold, so please let me take today off).",
        ja: "「風邪（かぜ）をひいたので今日休ませてください」と言っています。体調不良で欠勤するときの基本表現です。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "電車の遅延で３０分ほど遅れます",
      options: [
        "Male-late ako ng mga 30 minuto dahil delayed ang tren (電車の遅延で30分ほど遅れます)",
        "Hindi ako makakarating ngayon dahil sira ang tren (電車が止まったので今日は行けません)",
        "Nakarating na ako sa istasyon (駅に到着しました)"
      ],
      optionsJa: [
        "でんしゃのちえんで30ぷんほどおくれます",
        "でんしゃがとまったのできょうはいけません",
        "えきにとうちゃくしました"
      ],
      optionsEn: [
        "I will be about 30 minutes late due to a train delay (電車の遅延で30分ほど遅れます)",
        "I cannot come today because the train stopped (電車が止まったので今日は行けません)",
        "I have arrived at the station (駅に到着しました)"
      ],
      correctIndex: 0, // 1番目が正解
      questionText: {
        tl: "Pakinggan ang audio. Gaano katagal male-late ang staff?",
        en: "Listen to the audio. How long will the staff be late?",
        ja: "おんせいをきいてください。どのくらい遅れると言っていますか。"
      },
      explanation: {
        tl: "Ang narinig mo ay 'Densha no chien de sanjuu-pun hodo okuremasu' (Delayed ang tren kaya mga 30 mins akong male-late).",
        en: "You heard 'Densha no chien de sanjuu-pun hodo okuremasu' (I'll be about 30 minutes late due to a train delay).",
        ja: "「電車の遅延（ちえん）で30分（さんじゅっぷん）ほど遅れます」と言っています。日本の遅刻連絡の定番マナーです。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "来週の月曜日に有給休暇をいただけますか",
      options: [
        "Maaari ko bang makuha ang aking sahod sa Lunes? (月曜日に給料をもらえますか)",
        "Maaari ba akong mag-overtime sa susunod na Lunes? (来週の月曜日に残業できますか)",
        "Maaari ba akong kumuha od magka-paid leave sa susunod na Lunes? (来週の月曜日に有給休暇をいただけますか)"
      ],
      optionsJa: [
        "げつようびにきゅうりょうをもらえますか",
        "らいしゅうのげつようびにざんぎょうできますか",
        "らいしゅうのげつようびにゆうきゅうきゅうかをいただけますか"
      ],
      optionsEn: [
        "Can I get my salary on Monday? (月曜日に給料をもらえますか)",
        "Can I work overtime next Monday? (来週の月曜日に残業できますか)",
        "Could I take a paid leave next Monday? (来週の月曜日に有給休暇をいただけますか)"
      ],
      correctIndex: 2, // 3番目が正解
      questionText: {
        tl: "Basahin ang pangungusap: 「来週の月曜日に有給休暇をいただけますか」. Ano ang hinihingi ng staff?",
        en: "Read the sentence: 「来週の月曜日に有給休暇をいただけますか」. What is the staff requesting?",
        ja: "文字を読んでください：「来週の月曜日に有給休暇をいただけますか」。上司に何を申請していますか。"
      },
      explanation: {
        tl: "Ito ay 'Raishuu no getsuyoubi ni yuukyuu kyuuka wo itadakemasu ka' (Maaari ba akong mag-paid leave sa susunod na Lunes?). Ang Yuukyuu kyuuka ay paid leave.",
        en: "This is 'Raishuu no getsuyoubi ni yuukyuu kyuuka wo itadakemasu ka' (Could I take a paid leave next Monday?).",
        ja: "「有給休暇（ゆうきゅうきゅうか＝休んでも給料が出る休み）」を申請する、超重要かつ丁寧なサバイバル相談表現です。"
      }
    },
    {
      id: 4,
      type: "reading-context",
      speechText: "体調管理に気をつけてくださいね",
      options: [
        "Paki-ingatan ang iyong kalusugan / physical condition (体調管理に気をつけてくださいね)",
        "Paki-sara ang pinto pagka-alis mo (出発の時はドアを閉めてくださいね)",
        "Paki-basa ang manual na ito (このマニュアルを読んでくださいね)"
      ],
      optionsJa: [
        "たいちょうかんりにきをつけてくださいね",
        "しゅっぱつのときはドアをしめてくださいね",
        "このマニュアルをよんでくださいね"
      ],
      optionsEn: [
        "Please take care of your health / physical condition (体調管理に気をつけてくださいね)",
        "Please close the door when you leave (出発の時はドアを閉めてくださいね)",
        "Please read this manual (このマニュアルを読んでくださいね)"
      ],
      correctIndex: 0, // 1番目が正解
      questionText: {
        tl: "Ano ang ibig sabihin ng pangungusap ng boss: 「体調管理に気をつけてくださいね」?",
        en: "What does the boss mean by saying: 「体調管理に気をつけてくださいね」?",
        ja: "欠勤の電話の最後に、上司（じょうし）からかけられる優しい言葉の意味を選んでください：「体調管理に気をつけてくださいね」"
      },
      explanation: {
        tl: "Ito ay 'Taichou kanri ni ki wo tsukete kudasai ne' (Alagaan ang iyong kalusugan / physical condition).",
        en: "This is 'Taichou kanri ni ki wo tsukete kudasai ne' (Please take care of your health / physical condition).",
        ja: "「体調管理（たいちょうかんり＝体の健康を維持すること）に気をつけてください」という意味です。お大事に、という意味が含まれます。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "了解しました。お大事に",
      options: [
        "Pasensya na, busy ako (すみません、忙しいです)",
        "Naintindihan ko. Pagaling ka (了解しました。お大事に)",
        "Salamat sa iyong tulong (手伝ってくれてありがとう)"
      ],
      optionsJa: [
        "すみません、いそがしいです",
        "りょうかいしました。おだいじに",
        "てつだってくれてありがとう"
      ],
      optionsEn: [
        "I am sorry, I am busy (すみません、忙しいです)",
        "Understood. Take care of yourself (了解しました。お大事に)",
        "Thank you for your help (手伝ってくれてありがとう)"
      ],
      correctIndex: 1, // 2番目が正解
      questionText: {
        tl: "Ano ang tamang sagot kapag may nag-text na may sakit ang kasamahan mo?",
        en: "What is the appropriate reply when a coworker texts you that they are sick?",
        ja: "同僚（どうりょう）から「今日、熱があって休みます」と連絡が来ました。なんと返事しますか。"
      },
      explanation: {
        tl: "Ang tamang sagot ay 'Ryoukai shimashita. Odaiji ni' (Naintindihan ko. Pagaling ka). Ang 'Odaiji ni' ay ginagamit para sa taong may sakit.",
        en: "The correct choice is 'Ryoukai shimashita. Odaiji ni' (Understood. Take care of yourself). 'Odaiji ni' is a kind phrase for sick people.",
        ja: "「了解（りょうかい）しました。お大事（だいじ）に」を選びます。病気やケガをした相手を労る定番サバイバル表現です。"
      }
    }
  ]
};