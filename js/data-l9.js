// =========================================================================
// JFT究極・サバイバル対策 A1判定特化版 【第9課：体調と気分の確認・完全修正版】
// 不具合修正：英語選択時にタガログ語が漏れるバグを「optionsEn」の増設で100%駆逐！
// 仕様：マザー金型へそのまま合流可能。途中で切り替えても学習過程を引き継ぎます。
// =========================================================================

var jftQuizData = {
  lessonTitle: "第9課：【体調と気分】優しく気遣うサバイバルことば 🩺🛌",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "だいじょうぶですか",
      options: ["Masakit ba? (痛いですか)", "Ok ka lang ba? (大丈夫ですか)", "Gusto mo bang uminom ng tubig? (お水を飲みますか)"],
      optionsJa: ["いたいですか", "だいじょうぶですか", "おみずをのみますか"],
      optionsEn: ["Is it painful? (痛いですか)", "Are you okay? (大丈夫ですか)", "Would you like some water? (お水を飲みますか)"],
      correctIndex: 1,
      questionText: {
        tl: "Pakinggan ang audio. Ito ang pinakamahalagang tanong para sa pang-araw-araw na pag-aalaga.",
        en: "Listen to the audio. This is the most essential question for daily caregiving.",
        ja: "おんせいをきいてください。利用者の様子がいつもと違うとき、最初に声をかける言葉はどれですか。"
      },
      explanation: {
        tl: "Ang narinig mo ay 'Daijoubu desu ka?' (Ok ka lang ba?). Kapag nakita mong matamlay o nahihirapan ang pasyente, ito agad ang unang itatanong nang may ngiti.",
        en: "You heard 'Daijoubu desu ka?' (Are you okay?). When you notice a resident looking unwell, this is the very first phrase to use in a gentle voice.",
        ja: "「だいじょうぶですか」と言っています。体調が悪そうなときや、転びそうになったときなど、現場で1日100回は使う超重要サバイバル声かけです。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "さむけがします",
      options: ["Nilalagnat ako (熱があります)", "Nahihilo ako (めまいがします)", "Nanginginig ako sa ginaw (寒気がします)"],
      optionsJa: ["ねつがあります", "めまいにがします", "さむけがします"],
      optionsEn: ["I have a fever (熱があります)", "I feel dizzy (めまいがします)", "I feel a chill (寒気がします)"],
      correctIndex: 2,
      questionText: {
        tl: "Pakinggan ang audio. Ano ang nararamdaman ng pasyente kapag sinabi ito?",
        en: "Listen to the audio. What is the resident feeling when they say this?",
        ja: "おんせいをきいてください。利用者はどのような体調の訴え（うったえ）をしていますか。"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ito ay 'Samuke ga shimasu' (Nanginginig sa ginaw). Kapag sinabi ito ng pasyente, kailangang kumuha agad ng karagdagang kumot o futon!",
        en: "This is 'Samuke ga shimasu' (I feel a chill). When a resident says this, you should immediately provide a blanket and check their temperature!",
        ja: "「さむけがします（寒気がします）」と言っています。風邪の引き始めなどに利用者がよく言う言葉です。すぐに布団をかけて温かくし、体温を測る対応が必要です。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "いたいですか",
      options: ["Masakit ba? (痛いですか)", "Gusto mo bang matulog? (眠いですか)", "Gusto mo bang pumunta sa palikuran? (トイレに行きたいですか)"],
      optionsJa: ["いたいですか", "ねむいですか", "トイレにいきたいですか"],
      optionsEn: ["Does it hurt? (痛いですか)", "Are you sleepy? (眠いですか)", "Do you want to go to the restroom? (トイレに行きたいですか)"],
      questionText: {
        tl: "Basahin ang tanong: 「いたいですか」. Kailan ito ginagamit?",
        en: "Read the question: 「いたいですか」. When is this used?",
        ja: "文字を読んでください：「いたいですか」。どのようなときに確認する言葉ですか。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ay 'Itai desu ka?' (Masakit ba?). Madalas itong itatanong habang nagpapalit ng posisyon o kapag may hinahawakang bahagi ng katawan ng pasyente.",
        en: "This is 'Itai desu ka?' (Does it hurt?). Frequently asked during positioning or transfer assistance to ensure the resident's comfort.",
        ja: "「いたいですか（痛いですか）」という意味です。体の向きを変えるとき（体位変換）や、リハビリのときなどに、利用者に負担がかかっていないか優しく確認する言葉です。"
      }
    },
    {
      id: 4,
      type: "reading-context",
      speechText: "きぶんがわるいです",
      options: ["Mabuti ang pakiramdam ko (気分がいいです)", "Masama ang pakiramdam ko (気分が悪いです)", "Gusto ko nang kumain (ご飯が食べたいです)"],
      optionsJa: ["きぶんがいいです", "きぶんがわるいです", "ごはんがたべたいです"],
      optionsEn: ["I feel good (気分がいいです)", "I feel unwell / sick (気分が悪いです)", "I want to eat food (ご飯が食べたいです)"],
      questionText: {
        tl: "Ano ang ibig sabihin ng pasyente kapag hawak niya ang kanyang tiyan o ulo at sinabing: 「きぶんがわるいです」?",
        en: "What does the resident mean when they hold their stomach or head and say: 「きぶんがわるいです」?",
        ja: "利用者がお腹や頭を押さえながら「きぶんがわるいです」と言いました。どういう意味ですか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ito ay 'Kibun ga warui desu' (Masama ang pakiramdam ko). Kapag narinig ito, patigilin ang pasyente sa ginagawa at paupuin muna sila.",
        en: "This is 'Kibun ga warui desu' (I feel sick / unwell). When you hear this, assist the resident to rest immediately and inform the nurse.",
        ja: "「きぶんがわるいです（気分が悪いです）」という意味です。吐き気（はきけ）やめまいなど、体全体の調子が悪いことを伝える大切なサインです。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "ふとんをかけましょう",
      options: ["Magpalit tayo ng damit (着替えましょう)", "Uminom tayo ng gamot (薬を飲みましょう)", "Magkumot po tayo (布団をかけましょう)"],
      optionsJa: ["きがえましょう", "くすりをのみましょう", "ふとんをかけましょう"],
      optionsEn: ["Let's change clothes (着替えましょう)", "Let's take medicine (薬を飲みましょう)", "Let's put a blanket on you (布団をかけましょう)"],
      questionText: {
        tl: "Ano ang tamang tugon kapag ang pasyente ay nanginginig at nagsabing malamig: 「ふとんをかけましょう」",
        en: "What is the appropriate response when a resident is shivering and cold: 「ふとんをかけましょう」",
        ja: "利用者が寒がっているとき、介護スタッフがかける優しい声かけはどれですか：「ふとんをかけましょう」"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ito ay 'Futon wo kakemashou' (Magkumot po tayo). Isa itong napakabait na pagkilos para mapanatiling mainit ang pasyente.",
        en: "This is 'Futon wo kakemashou' (Let's put a blanket over you). A warm, reassuring phrase used to provide comfort to a shivering resident.",
        ja: "「ふとんをかけましょう（布団を掛けましょう）」と言っています。寒さを訴える利用者への、即座の優しい対応と声かけを表す必須フレーズです。"
      }
    }
  ]
};
