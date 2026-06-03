// =========================================================================
// JFT究極・サバイバル対策 A1判定特化版 【第7課】
// テーマ：どこにありますか（位置・部屋・空間サバイバル）
// 仕様：全問題に「speechText」完備。施設内の位置関係を100%マスターします。
// =========================================================================

var jftQuizData = {
  lessonTitle: "第7課：どこにありますか（位置・部屋・空間）",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "トイレはどこですか",
      options: ["Where is the dining hall? (食堂はどこですか)", "Where is the restroom? (トイレはどこですか)", "Where is the office? (事務所はどこですか)"],
      optionsJa: ["しょくどうはどこですか", "トイレはどこですか", "じむしょはどこですか"],
      questionText: {
        tl: "Pakinggan ang audio. Anong lugar sa pasilidad ang hinahanap niya?",
        en: "Listen to the audio. Which location in the facility is this person looking for?",
        ja: "おんせいをきいてください。施設（しせつ）のどこを探（さが）していますか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'Toire wa doko desu ka?' (Where is the restroom? / Nasaan ang banyo?). Ito ang pinaka-importanteng survival question sa trabaho at biyahe!",
        en: "You heard 'Toire wa doko desu ka?' (Where is the restroom?). The single most crucial survival question for work and travel!",
        ja: "「トイレはどこですか」と言っています。介護現場でも日常サバイバルでも、一番最初に覚えるべき最重要フレーズです。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "机の上",
      options: ["Under the desk (机の下)", "On the desk (机の上)", "Inside the desk (机の中)"],
      optionsJa: ["つくえのした", "つくえのうえ", "つくえのなか"],
      questionText: {
        tl: "Pakinggan ang audio tungkol sa posisyon ng bagay. Nasaan ito?",
        en: "Listen to the audio regarding the item's position. Where is it located?",
        ja: "おんせいをきいてください。物の位置（いち）はどこですか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'Tsukue no ue' (On top of the desk / Sa ibabaw ng lamesa). Ang mga salitang 'Ue' (Ibabaw) at 'Shita' (Ilalim) ay madalas lumabas sa mga larawan sa JFT exam!",
        en: "You heard 'Tsukue no ue' (On top of the desk). Directional words like 'Ue' (Up/On) and 'Shita' (Down/Under) are frequently tested with images in the JFT!",
        ja: "「つくえのうえ（机の上）」と言っています。位置を表すことば（うえ、した、なか、となり）は、JFTのイラスト問題で頻出します。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "食堂は１階にあります",
      options: ["The dining hall is on the 1st floor. (食堂は1階にあります)", "The dining hall is on the 2nd floor. (食堂は2階にあります)", "The restroom is on the 1st floor. (トイレは1階にあります)"],
      optionsJa: ["しょくどうは1かいにあります", "しょくどうは2かいにあります", "トイレは1かいにあります"],
      questionText: {
        tl: "Basahin ang gabay sa pasilidad: 「食堂は１階にあります」. Ano ang ibig sabihin nito?",
        en: "Read the facility guide sentence: 「食堂は１階にあります」. What does it mean?",
        ja: "施設（しせつ）の案内を読んでください：「食堂は１階にあります」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ay 'Shokudou wa ikkai ni arimasu' (The dining hall is on the 1st floor / Ang kainan ay nasa unang palapag). Gagamitin mo ito para ituro ang daan sa mga pasyente!",
        en: "This is 'Shokudou wa ikkai ni arimasu' (The dining hall is on the 1st floor). You will use this structure to guide residents in the care facility!",
        ja: "「食堂（しょくどう）は1階（いっかい）にあります」のことです。「〜階（かい）にあります」という建物の案内表現をしっかり固定します。"
      }
    },
    {
      id: 4,
      type: "character-match",
      speechText: "車椅子の隣",
      options: ["In front of the wheelchair (車椅子の前)", "Behind the wheelchair (車椅子の後ろ)", "Next to the wheelchair (車椅子の隣)"],
      optionsJa: ["くるまいすのまえ", "くるまいすのうしろ", "くるまいすのとなり"],
      questionText: {
        tl: "Tukuyin ang tamang kahulugan ng lokasyon para sa caregiver: 「車椅子の隣（となり）」",
        en: "Identify the correct location meaning for caregivers: 「車椅子の隣（となり）」",
        ja: "介護現場で使う位置の説明です：「車椅子（くるまいす）の隣（となり）」の意味はどれ？"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ang 'Tonari' ay nangangahulugang 'Tabi' o 'Next to'. Ang 'Kuruma-isu no tonari' ay nangangahulugang nasa tabi ng wheelchair. Napakahalaga nito sa pag-aayos ng mga kagamitan!",
        en: "'Tonari' means 'Next to' or 'Beside'. 'Kuruma-isu no tonari' means right next to the wheelchair—essential for organizing care equipment!",
        ja: "「隣（となり）」のことです。「車椅子のとなり」は介護の実務でも、物の配置を指定するときに毎日使う超重要空間表現です。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "事務所の中にあります",
      options: ["It is inside the office. (事務所の中にあります)", "It is next to the office. (事務所の隣にあります)", "It is inside the room. (部屋の中にあります)"],
      optionsJa: ["じむしょのなかにあります", "じむしょのとなりにあります", "へやのなかにあります"],
      questionText: {
        tl: "Basahin ang sagot kapag may hinahanap na dokumento: 「事務所の中にあります」",
        en: "Read the answer when someone is looking for a document: 「事務所の中にあります」",
        ja: "探し物があるときの返答を読んでください：「事務所の中にあります」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ay 'Jimusho no naka ni arimasu' (It is inside the office / Nasa loob ng opisina). Ang 'Naka' (Loob) ay ginagamit para sa mga kwarto, kahon, o drawer.",
        en: "This is 'Jimusho no naka ni arimasu' (It is inside the office). 'Naka' (Inside) is used for rooms, boxes, or drawers.",
        ja: "「事務所（じむしょ）の中（なか）にあります」という意味です。重要ワード「事務所」と位置フレーズの合わせ技です。"
      }
    }
  ]
};