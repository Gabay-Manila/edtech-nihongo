// =========================================================================
// JFT究極・サバイバル対策版 【第1課：ひらがな完全制覇部屋（あ行〜ん・全20問）】
// =========================================================================

// 🚨 const から var に変更して、ハコ換え時の衝突を防止！
var jftQuizData = {
  lessonTitle: "第1課：ひらがなサバイバル完全制覇（あ行〜ん）",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "あ",
      options: ["a", "i", "u"],
      optionsJa: ["あ", "い", "う"],
      questionText: {
        tl: "Piliin ang tamang tunog para sa Hiragana: 「あ」",
        en: "Choose the correct sound for the Hiragana: 'あ'",
        ja: "「あ」のただしい発音（はつおん）を選んでください。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ang 'a'. Ang unang letra sa Hiragana. Parang tunog ng 'A' sa Tagalog.",
        en: "This is 'a'. The very first letter in Hiragana. Pronounced like 'a' in 'father'.",
        ja: "「あ」です。ひらがなの最初の文字です。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "う",
      options: ["o", "e", "u"],
      optionsJa: ["お", "え", "う"],
      questionText: {
        tl: "Piliin ang tamang tunog para sa Hiragana: 「う」",
        en: "Choose the correct sound for the Hiragana: 'う'",
        ja: "「う」のただしい発音（はつおん）を選んでください。"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ito ang 'u'. Mas mahina ang pagbuka ng labi kumpara sa 'U' ng Tagalog.",
        en: "This is 'u'. Pronounced with less rounded lips than the English 'u'.",
        ja: "「う」です。口をあまりすぼめずに発音します。"
      }
    },
    {
      id: 3,
      type: "character-match",
      options: ["Asa (Umaga)", "Ika (Pusit)", "Aki (Taglagas)"],
      optionsJa: ["あさ", "いか", "あき"],
      questionText: {
        tl: "Basahin ang salita: 「あき」",
        en: "Read the word: 'あき'",
        ja: "ことばを読んでください：「あき」"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ang 'あき' (Aki) ay nangangahulugang 'Taglagas'. Pinagsamang 'あ' at 'き'.",
        en: "'あき' (Aki) means 'Autumn'. It is a combination of 'あ' and 'き'.",
        ja: "季節の「秋（あき）」のことです。「あ」と「き」を合わせました。"
      }
    },
    {
      id: 4,
      type: "character-match",
      options: ["Kao (Mukha)", "Kiku (Chrysanthemum)", "Koko (Dito)"],
      optionsJa: ["かお", "きく", "ここ"],
      questionText: {
        tl: "Ano ang tamang Hiragana para sa 'Mukha' (Kao)?",
        en: "What is the correct Hiragana for 'Face' (Kao)?",
        ja: "「かお（Face）」をひらがなで書くとどれですか？"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'Mukha' ay 'かお' (Kao) sa Hiragana. Pinagsamang 'か' at 'お'.",
        en: "'Face' is written as 'かお' (Kao) in Hiragana. Combination of 'か' and 'お'.",
        ja: "「かお」が正解です。「か」と「お」の組み合わせです。"
      }
    },
    {
      id: 5,
      type: "audio-vocabulary",
      speechText: "し",
      options: ["su", "si / shi", "se"],
      optionsJa: ["す", "し", "せ"],
      questionText: {
        tl: "Piliin ang tamang tunog para sa Hiragana: 「し」",
        en: "Choose the correct sound for the Hiragana: 'し'",
        ja: "「し」のただしい発音（はつおん）を選んでください。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ito ang 'shi'. Tandaan na hindi ito purong 'si', may tunog ito na parang 'sh' sa Ingles.",
        en: "This is 'shi'. Pronounced like 'she' in English, rather than a sharp 'si'.",
        ja: "「し」です。ローマ字では『shi』と書くことが多いです。"
      }
    },
    {
      id: 6,
      type: "audio-vocabulary",
      speechText: "ち",
      options: ["ti / chi", "te", "to"],
      optionsJa: ["ち", "て", "と"],
      questionText: {
        tl: "Piliin ang tamang tunog para sa Hiragana: 「ち」",
        en: "Choose the correct sound for the Hiragana: 'ち'",
        ja: "「ち」のただしい発音（はつおん）を選んでください。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ang 'chi'. Sa ta-行 (ta-row), ang tunog nito ay nagiging 'chi' sa halip na 'ti'.",
        en: "This is 'chi'. In the ta-row, it changes from 'ti' to a 'chi' sound.",
        ja: "「ち」です。た行の2番目の文字で、発音は『chi』になります。"
      }
    },
    {
      id: 7,
      type: "character-match",
      options: ["Sake (Alak)", "Sika (Usa)", "Soko (Doon)"],
      optionsJa: ["さけ", "しか", "そこ"],
      questionText: {
        tl: "Basahin ang salita: 「さけ」",
        en: "Read the word: 'さけ'",
        ja: "ことばを読んでください：「さけ」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'さけ' (Sake) ay nangangahulugang 'Alak' (Japanese Rice Wine) o Isda (Salmon).",
        en: "'さけ' (Sake) means 'Japanese rice wine' or 'Salmon'.",
        ja: "お酒（さけ）のことです。「さ」と「け」を合わせました。"
      }
    },
    {
      id: 8,
      type: "character-match",
      options: ["Kita (Hilaga)", "Kutsita (Kutsilyo)", "Tako (Pusit/Octopus)"],
      optionsJa: ["きた", "くつ", "たこ"],
      questionText: {
        tl: "Basahin ang salita: 「きた」",
        en: "Read the word: 'きた'",
        ja: "ことばを読んでください：「きた」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'きた' (Kita) ay nangangahulugang 'Hilaga' (North). Pinagsamang 'き' at 'た'.",
        en: "'きた' (Kita) means 'North'. It is a combination of 'き' and 'た'.",
        ja: "方角（ほうがく）の「北（きた）」のことです。「き」と「た」を合わせました。"
      }
    },
    {
      id: 9,
      type: "character-match",
      options: ["Inu (Aso)", "Neko (Pusa)", "Nani (Ano)"],
      optionsJa: ["いぬ", "ねこ", "なに"],
      questionText: {
        tl: "Ano ang tamang Hiragana para sa 'Aso' (Inu)?",
        en: "What is the correct Hiragana for 'Dog' (Inu)?",
        ja: "「いぬ（Dog）」をひらがなで書くとどれですか？"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'Aso' ay 'いぬ' (Inu) sa Hiragana. Pinagsamang 'い' at 'ぬ'.",
        en: "'Dog' is written as 'いぬ' (Inu) in Hiragana. Combination of 'い' and 'ぬ'.",
        ja: "「いぬ」が正解です。「い」と「ぬ」の組み合わせです。"
      }
    },
    {
      id: 10,
      type: "character-match",
      options: ["Natsu (Tag-init)", "Katsu (Hiwa)", "Kuto (Kuto)"],
      optionsJa: ["なつ", "かつ", "くつ"],
      questionText: {
        tl: "Basahin ang salita: 「なつ」",
        en: "Read the word: 'なつ'",
        ja: "ことばを読んでください：「なつ」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'なつ' (Natsu) ay nangangahulugang 'Tag-init' (Summer). Pinagsamang 'な' at 'つ'.",
        en: "'なつ' (Natsu) means 'Summer'. It is a combination of 'な' and 'つ'.",
        ja: "季節の「夏（なつ）」のことです。「な」と「つ」を合わせました。"
      }
    },
    {
      id: 11,
      type: "audio-vocabulary",
      speechText: "は",
      options: ["ha", "ho", "he"],
      optionsJa: ["は", "ほ", "he"],
      questionText: {
        tl: "Piliin ang tamang tunog para sa Hiragana: 「は」",
        en: "Choose the correct sound for the Hiragana: 'は'",
        ja: "「は」のただしい発音（はつおん）を選んでください。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ang 'ha'. Tandaan na kapag ginamit bilang particle sa pangungusap, binabasa ito bilang 'wa'.",
        en: "This is 'ha'. Note that when used as a topic particle in a sentence, it is pronounced as 'wa'.",
        ja: "「は」です。はがきの「は」ですが、助詞（じょし）の時は「わ」と読みます。"
      }
    },
    {
      id: 12,
      type: "audio-vocabulary",
      speechText: "む",
      options: ["ma", "me", "mu"],
      optionsJa: ["ま", "め", "む"],
      questionText: {
        tl: "Piliin ang tamang tunog para sa Hiragana: 「む」",
        en: "Choose the correct sound for the Hiragana: 'む'",
        ja: "「む」のただしい発音（はつおん）を選んでください。"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ito ang 'mu'. Mag-ingat na huwag itong mapagkamalan sa 'me' (め) o 'su' (す).",
        en: "This is 'mu'. Be careful not to confuse it with 'me' (め) or 'su' (す).",
        ja: "「む」です。「め」や「す」と形が似ているので注意しましょう。"
      }
    },
    {
      id: 13,
      type: "audio-vocabulary",
      speechText: "ゆ",
      options: ["ya", "yu", "yo"],
      optionsJa: ["や", "ゆ", "よ"],
      questionText: {
        tl: "Piliin ang tamang tunog para sa Hiragana: 「ゆ」",
        en: "Choose the correct sound for the Hiragana: 'ゆ'",
        ja: "「ゆ」のただしい発音（はつおん）を選んでください。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ito ang 'yu'. Bahagi ito ng ya-行 (ya-row) na may tatlong letra lang: ya (や), yu (ゆ), yo (よ).",
        en: "This is 'yu'. It is part of the ya-row, which only has three letters: ya, yu, yo.",
        ja: "「ゆ」です。や行は「や・ゆ・よ」の3文字しかありません。"
      }
    },
    {
      id: 14,
      type: "audio-vocabulary",
      speechText: "る",
      options: ["ro", "re", "ru"],
      optionsJa: ["ろ", "れ", "る"],
      questionText: {
        tl: "Piliin ang tamang tunog para sa Hiragana: 「る」",
        en: "Choose the correct sound for the Hiragana: 'る'",
        ja: "「る」のただしい発音（はつおん）を選んでください。"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ito ang 'ru'. May loop o ikot sa dulo. Ang 'ro' (ろ) ay walang ikot sa dulo.",
        en: "This is 'ru'. It has a loop at the end. 'ro' (ろ) looks similar but has no loop.",
        ja: "「る」です。最後を丸めます。丸めない「ろ」との違いに注意です。"
      }
    },
    {
      id: 15,
      type: "audio-vocabulary",
      speechText: "ん",
      options: ["n / m", "wa", "wo"],
      optionsJa: ["ん", "わ", "を"],
      questionText: {
        tl: "Piliin ang tamang tunog para sa Hiragana: 「ん」",
        en: "Choose the correct sound for the Hiragana: 'ん'",
        ja: "「ん」のただしい発音（はつおん）を選んでください。"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ang 'n'. Ang tanging katinig (consonant) na nakatayo nang mag-isa na walang patinig.",
        en: "This is 'n'. It is the only consonant in Hiragana that stands alone without a vowel.",
        ja: "「ん」です。ひらがなで唯一、母音（ぼいん）がない文字です。"
      }
    },
    {
      id: 16,
      type: "character-match",
      options: ["Hana (Bulaklak)", "Hoshi (Bituin)", "Hone (Buto)"],
      optionsJa: ["はな", "ほし", "ほね"],
      questionText: {
        tl: "Basahin ang salita: 「はな」",
        en: "Read the word: 'はな'",
        ja: "ことばを読んでください：「はな」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'はな' (Hana) ay nangangahulugang 'Bulaklak' (Flower) o 'Ilong' (Nose). Pinagsamang 'は' at 'な'.",
        en: "'はな' (Hana) means 'Flower' or 'Nose'. It is a combination of 'は' and 'な'.",
        ja: "「花（Flower）」や「鼻（Nose）」のことです。「は」と「な」の組み合わせです。"
      }
    },
    {
      id: 17,
      type: "character-match",
      options: ["Yumi (Panatala)", "Yama (Bundok)", "Yuki (Yelo/Snow)"],
      optionsJa: ["ゆみ", "やま", "ゆき"],
      questionText: {
        tl: "Basahin ang salita: 「やま」",
        en: "Read the word: 'やま'",
        ja: "ことばを読んでください：「やま」"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang 'やま' (Yama) ay nangangahulugang 'Bundok' (Mountain). Pinagsamang 'や' at 'ま'.",
        en: "'やま' (Yama) means 'Mountain'. It is a combination of 'や' and 'ま'.",
        ja: "自然の「山（Mountain）」のことです。「や」と「ま」を合わせました。"
      }
    },
    {
      id: 18,
      type: "character-match",
      options: ["Sora (Langit)", "Sakura (Cherry Blossom)", "Kuruma (Kotse)"],
      optionsJa: ["そら", "さくら", "くるま"],
      questionText: {
        tl: "Ano ang tamang Hiragana para sa 'Cherry Blossom' (Sakura)?",
        en: "What is the correct Hiragana for 'Cherry Blossom' (Sakura)?",
        ja: "「さくら（Cherry Blossom）」をひらがなで書くとどれですか？"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang 'Sakura' ay 'さくら' sa Hiragana. Pinagsamang 'さ', 'く', at 'ら'.",
        en: "'Cherry Blossom' is written as 'さくら' in Hiragana. Combination of 'さ', 'く', and 'ら'.",
        ja: "日本の有名な花「さくら」です。「さ」「く」「ら」を合わせました。"
      }
    },
    {
      id: 19,
      type: "character-match",
      options: ["Kawa (Ilog)", "Watashi (Ako)", "Wani (Buwaya)"],
      optionsJa: ["かわ", "わたし", "わに"],
      questionText: {
        tl: "Basahin ang salita: 「かわ」",
        en: "Read the word: 'かわ'",
        ja: "ことばを読んでください：「かわ」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'かわ' (Kawa) ay nangangahulugang 'Ilog' (River). Pinagsamang 'わ' at 'か' na binaligtad.",
        en: "'かわ' (Kawa) means 'River'. It is a combination of 'か' and 'わ'.",
        ja: "水が流れる「川（River）」のことです。「か」と「わ」の組み合わせです。"
      }
    },
    {
      id: 20,
      type: "character-match",
      options: ["Hon (Libro)", "Han (Hati)", "Pen (Panulat)"],
      optionsJa: ["ほん", "はん", "ぺん"],
      questionText: {
        tl: "Ano ang tamang Hiragana para sa 'Libro' (Hon)?",
        en: "What is the correct Hiragana for 'Book' (Hon)?",
        ja: "「ほん（Book）」をひらがなで書くとどれですか？"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ang 'Libro' ay 'ほん' (Hon) sa Hiragana. Pinagsamang 'ほ' at 'ん'.",
        en: "'Book' is written as 'ほん' (Hon) in Hiragana. Combination of 'ほ' and 'ん'.",
        ja: "「ほん」が正解です。「ほ」と「ん」の組み合わせです。"
      }
    }
  ]
};
