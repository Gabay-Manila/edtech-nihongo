// =========================================================================
// JFT究極・サバイバル対策 A1判定特化版 【第8課：位置と方向の指示・誘導】
// テーマ：具体的な位置（となり・うしろ）と、移動の方向（右・左・まっすぐ）
// 仕様：マザー金型(index.html)へそのまま100%合流可能な軽量JSON構造
// =========================================================================

var jftQuizData = {
  lessonTitle: "第8課：【位置と方向】移動と誘導のサバイバルことば 🦽🗺️",
  questions: [
    {
      id: 1,
      type: "audio-vocabulary",
      speechText: "みぎにまがります",
      options: ["Liko sa kaliwa (左に曲がります)", "Liko sa kanan (右に曲がります)", "Derecho lang (まっすぐ行きます)"],
      optionsJa: ["ひだりにまがります", "みぎにまがります", "まっすぐいきます"],
      questionText: {
        tl: "Pakinggan ang audio. Ano ang ibig sabihin nito kapag nagtutulak ng wheelchair?",
        en: "Listen to the audio. What does it mean when pushing a wheelchair?",
        ja: "おんせいをきいてください。車椅子（くるまいす）を押しているとき、どちらに進みますか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ang narinig mo ay 'Migi ni magarimasu' (Liko sa kanan). Napakahalagang sabihin ito bago lumiko para hindi magulat ang pasyente sa wheelchair!",
        en: "You heard 'Migi ni magarimasu' (Turn right). It is essential to say this out loud before turning so the resident feels safe!",
        ja: "「みぎにまがります」と言っています。車椅子を動かすとき、急に曲がると利用者が怖がってしまいます。曲がる前の声かけ（誘導）として必須のフレーズです。"
      }
    },
    {
      id: 2,
      type: "audio-vocabulary",
      speechText: "まっすぐいきます",
      options: ["Huminto rito (ここで止まります)", "Liko sa kanan (右に曲がります)", "Derecho lang (まっすぐ行きます)"],
      optionsJa: ["ここでとまります", "みぎにまがります", "まっすぐいきます"],
      questionText: {
        tl: "Pakinggan ang audio. Anong direksyon ang tinutukoy nito?",
        en: "Listen to the audio. Which direction does this refer to?",
        ja: "おんせいをきいてください。どの方向に進みますか。"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ito ay 'Massugu ikimasu' (Derecho lang / Go straight). Ginagamit ito kapag naglalakad kasama ang pasyente o kapag nagbibigay ng direksyon.",
        en: "This is 'Massugu ikimasu' (Go straight). Used frequently when walking together with residents or giving clear directions.",
        ja: "「まっすぐいきます」と言っています。歩行介助や車椅子を押して直進するときの基本的な声かけです。"
      }
    },
    {
      id: 3,
      type: "character-match",
      speechText: "ひだり",
      options: ["Kanan (右 / Migi)", "Kaliwa (左 / Hidari)", "Likod (後ろ / Ushiro)"],
      optionsJa: ["みぎ", "ひだり", "うしろ"],
      questionText: {
        tl: "Basahin ang salitang Hapon: 「ひだり」. Ano ang tamang direksyon nito?",
        en: "Read the Japanese word: 「ひだり」. What is the correct direction?",
        ja: "文字を読んでください：「ひだり」。どちらの方向ですか。"
      },
      correctIndex: 1,
      explanation: {
        tl: "Ito ay 'Hidari' (Kaliwa). Kabaligtaran nito ang 'Migi' (Kanan). Siguraduhing kabisado ang dalawang ito para sa JFT exam!",
        en: "This is 'Hidari' (Left). The opposite of 'Migi' (Right). Make sure you know both terms perfectly for the JFT exam!",
        ja: "「ひだり（左）」のことです。「みぎ（右）」と混同しやすいので、文字と方向のイメージを完全に一致させておきましょう。"
      }
    },
    {
      id: 4,
      type: "reading-context",
      speechText: "ベッドのとなり",
      options: ["Sa tabi ng kama (ベッドのとなり)", "Sa ilalim ng kama (ベッドのした)", "Sa likod ng wheelchair (くるまいすのうしろ)"],
      optionsJa: ["ベッドのとなり", "ベッドのした", "くるまいすのうしろ"],
      questionText: {
        tl: "Saan mo ilalagay ang tsinelas o gamit ng pasyente ayon sa pariralang ito: 「ベッドのとなり」?",
        en: "Where should you place the resident's slippers or items based on this phrase: 「ベッドのとなり」?",
        ja: "利用者の靴（くつ）や荷物をどこに置きますか：「ベッドのとなり」"
      },
      correctIndex: 0,
      explanation: {
        tl: "Ito ay 'Beddo no tonari' (Sa tabi ng kama / Next to the bed). Ang 'Tonari' ay ginagamit para sa mga bagay na magkatabi o magkasunod.",
        en: "This is 'Beddo no tonari' (Next to the bed). 'Tonari' is a key vocabulary word for describing positions in a multi-bed room.",
        ja: "「ベッドのとなり（隣）」という意味です。相部屋（４人部屋など）で「となりのベッドの利用者さん」と言ったり、物を置く場所を指定するときによく使います。"
      }
    },
    {
      id: 5,
      type: "reading-context",
      speechText: "くるまいすのうしろ",
      options: ["Sa harap ng lamesa (つくえのまえ)", "Sa tabi ng kama (ベッドのとなり)", "Sa likod ng wheelchair (くるまいすのうしろ)"],
      optionsJa: ["つくえのまえ", "ベッドのとなり", "くるまいすのうしろ"],
      questionText: {
        tl: "Suriin ang posisyon sa pariralang ito: 「くるまいすのうしろ」",
        en: "Check the position indicated in this phrase: 「くるまいすのうしろ」",
        ja: "位置を確認してください：「くるまいすのうしろ」"
      },
      correctIndex: 2,
      explanation: {
        tl: "Ito ay 'Kurumaisu no ushiro' (Sa likod ng wheelchair / Behind the wheelchair). Ito ang tamang posisyon ng caregiver kapag tinutulak ang wheelchair!",
        en: "This is 'Kurumaisu no ushiro' (Behind the wheelchair). This is where you stand as a caregiver when preparing to assist the resident!",
        ja: "「くるまいすのうしろ（車椅子の後ろ）」という意味です。介助者が立つ位置や、車椅子のポケットにある荷物を指すときによく使われるサバイバル表現です。"
      }
    }
  ]
};