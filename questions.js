/* =========================================================
   questions.js — edtech-nihongo content data
   Structure: island (BLOCKS) -> set -> questions.
   Each island has one or more sets of 15 questions. Add a new
   set object (with a unique id, e.g. 'set4') to a block's
   `sets` array to add more content — no other file needs
   to change. Keep exactly one correct:true per question.
   ========================================================= */
const BLOCKS = [
  {
    "id": "starter",
    "title": "Starter",
    "jp": "スターター",
    "level": "A1",
    "blurb": "Greetings, self-introduction, food & basic shopping.",
    "sets": [
      {
        "id": "set1",
        "label": "Set 1",
        "questions": [
          {
            "id": "st1",
            "situation": "It's morning. You greet a neighbor in the hallway.",
            "prompt": "あなたは　なんと　いいますか？",
            "choices": [
              {
                "jp": "おはようございます",
                "correct": true
              },
              {
                "jp": "こんばんは",
                "correct": false
              },
              {
                "jp": "さようなら",
                "correct": false
              },
              {
                "jp": "すみません",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Japanese greetings change with the time of day. Morning greetings are short, frequent, and expected even with people you barely know — like coworkers in a hallway.",
              "vocab": [
                {
                  "jp": "おはようございます",
                  "en": "Good morning (polite)"
                },
                {
                  "jp": "こんばんは",
                  "en": "Good evening"
                },
                {
                  "jp": "さようなら",
                  "en": "Goodbye"
                },
                {
                  "jp": "すみません",
                  "en": "Excuse me / Sorry"
                }
              ],
              "grammar": "Greetings are fixed phrases tied to time of day. おはようございます covers early morning through late morning."
            }
          },
          {
            "id": "st2",
            "situation": "Someone asks where you're from. You are from the Philippines.",
            "prompt": "Q：おくには　どちらですか？",
            "choices": [
              {
                "jp": "フィリピンから　きました",
                "correct": true
              },
              {
                "jp": "にほんごが　すきです",
                "correct": false
              },
              {
                "jp": "ありがとうございます",
                "correct": false
              },
              {
                "jp": "はじめまして",
                "correct": false
              }
            ],
            "ai": {
              "situation": "おくに is a polite way to ask someone's home country. It's one of the very first questions asked in self-introductions in Japan.",
              "vocab": [
                {
                  "jp": "おくに",
                  "en": "country (polite)"
                },
                {
                  "jp": "どちら",
                  "en": "where / which way"
                },
                {
                  "jp": "〜から きました",
                  "en": "came from 〜"
                },
                {
                  "jp": "フィリピン",
                  "en": "Philippines"
                }
              ],
              "grammar": "Country/place name + から きました means 'I came from 〜'. This is the standard pattern for stating origin."
            }
          },
          {
            "id": "st3",
            "situation": "Someone asks if you like udon. You do.",
            "prompt": "Q：うどんが　すきですか？",
            "choices": [
              {
                "jp": "はい、すきです",
                "correct": true
              },
              {
                "jp": "いいえ、げんきです",
                "correct": false
              },
              {
                "jp": "すみません、わかりません",
                "correct": false
              },
              {
                "jp": "はじめまして",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about food preferences is one of the most common small-talk topics in Japan, especially when getting to know coworkers.",
              "vocab": [
                {
                  "jp": "すき",
                  "en": "like / fond of"
                },
                {
                  "jp": "はい / いいえ",
                  "en": "yes / no"
                }
              ],
              "grammar": "〜が すきです means 'I like 〜'. が marks the thing being liked — it is not the doer of an action."
            }
          },
          {
            "id": "st4",
            "situation": "A fast-food staff member asks what you'd like to order. You want a cheeseburger.",
            "prompt": "Q：ご注文は？",
            "choices": [
              {
                "jp": "チーズバーガーを　ください",
                "correct": true
              },
              {
                "jp": "チーズバーガーが　あります",
                "correct": false
              },
              {
                "jp": "チーズバーガーじゃ　ありません",
                "correct": false
              },
              {
                "jp": "チーズバーガーでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "〜を ください is the single most useful phrase for ordering food or buying something — it works in restaurants, convenience stores, and markets alike.",
              "vocab": [
                {
                  "jp": "〜を ください",
                  "en": "please give me 〜"
                },
                {
                  "jp": "ちゅうもん（注文）",
                  "en": "order"
                }
              ],
              "grammar": "Noun + を ください is the simplest polite way to request or order something."
            }
          },
          {
            "id": "st5",
            "situation": "You didn't catch what someone said and need to admit you don't understand.",
            "prompt": "Q：あなたは　にほんごが　わかりませんでした。なんと　いいますか？",
            "choices": [
              {
                "jp": "すみません、わかりません",
                "correct": true
              },
              {
                "jp": "どうも　ありがとう",
                "correct": false
              },
              {
                "jp": "おやすみなさい",
                "correct": false
              },
              {
                "jp": "おねがいします",
                "correct": false
              }
            ],
            "ai": {
              "situation": "It's completely normal and accepted for beginners to say this — it's far better than guessing or staying silent.",
              "vocab": [
                {
                  "jp": "わかりません",
                  "en": "I don't understand / don't know"
                },
                {
                  "jp": "すみません",
                  "en": "excuse me / sorry"
                }
              ],
              "grammar": "すみません softens almost any statement, including admitting you didn't understand something."
            }
          },
          {
            "id": "st6",
            "situation": "You want to ask the price of an item in a shop.",
            "prompt": "Q：これは　いくらですか？",
            "choices": [
              {
                "jp": "ごひゃくえんです",
                "correct": true
              },
              {
                "jp": "おいしいです",
                "correct": false
              },
              {
                "jp": "げんきです",
                "correct": false
              },
              {
                "jp": "どういたしまして",
                "correct": false
              }
            ],
            "ai": {
              "situation": "いくらですか is the question; the answer is simply a number plus えん (yen).",
              "vocab": [
                {
                  "jp": "いくら",
                  "en": "how much"
                },
                {
                  "jp": "〜えん",
                  "en": "〜 yen"
                }
              ],
              "grammar": "いくらですか？ asks the price. Number + えん gives the answer, e.g. ごひゃくえん = 500 yen."
            }
          },
          {
            "id": "st7",
            "situation": "It's late at night and you're leaving work before your coworkers.",
            "prompt": "Q：よる　おそく　かいしゃを　でます。なんと　いいますか？",
            "choices": [
              {
                "jp": "おさきに　しつれいします",
                "correct": true
              },
              {
                "jp": "おはようございます",
                "correct": false
              },
              {
                "jp": "いただきます",
                "correct": false
              },
              {
                "jp": "ごちそうさまでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "お先に失礼します is said almost automatically when leaving a Japanese workplace before others — even close coworkers expect to hear it.",
              "vocab": [
                {
                  "jp": "おさきに しつれいします",
                  "en": "\"Excuse me for leaving first\" (fixed workplace phrase)"
                }
              ],
              "grammar": "This is a set phrase — memorize it as one chunk rather than analyzing its grammar piece by piece."
            }
          },
          {
            "id": "st8",
            "situation": "Someone helped you with something. You want to thank them politely.",
            "prompt": "Q：てつだって　もらいました。なんと　いいますか？",
            "choices": [
              {
                "jp": "ありがとうございます",
                "correct": true
              },
              {
                "jp": "すみません",
                "correct": false
              },
              {
                "jp": "さようなら",
                "correct": false
              },
              {
                "jp": "いいえ",
                "correct": false
              }
            ],
            "ai": {
              "situation": "ありがとうございます is appropriate in nearly every formal or service situation in Japan, from a shop clerk to a supervisor.",
              "vocab": [
                {
                  "jp": "てつだう",
                  "en": "to help"
                },
                {
                  "jp": "ありがとうございます",
                  "en": "thank you (polite)"
                }
              ],
              "grammar": "This is the standard polite thank-you — safe to use in almost any context."
            }
          },
          {
            "id": "st9",
            "situation": "You need to find the restroom in an office building.",
            "prompt": "Q：すみません、トイレは　どこですか？",
            "choices": [
              {
                "jp": "あそこです",
                "correct": true
              },
              {
                "jp": "あしたです",
                "correct": false
              },
              {
                "jp": "げんきです",
                "correct": false
              },
              {
                "jp": "さようなら",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Finding the restroom is one of the first practical questions any visitor or new employee needs to ask.",
              "vocab": [
                {
                  "jp": "トイレ",
                  "en": "restroom / toilet"
                },
                {
                  "jp": "どこ",
                  "en": "where"
                },
                {
                  "jp": "あそこ",
                  "en": "over there"
                }
              ],
              "grammar": "〜は どこですか asks 'where is 〜?'. Answer with a place word like あそこ (over there) or こちら (this way)."
            }
          },
          {
            "id": "st10",
            "situation": "You want to borrow a pen from a coworker.",
            "prompt": "Q：ペンを　かりたいです。なんと　いいますか？",
            "choices": [
              {
                "jp": "ペンを　かして　ください",
                "correct": true
              },
              {
                "jp": "ペンを　かりて　ください",
                "correct": false
              },
              {
                "jp": "ペンです",
                "correct": false
              },
              {
                "jp": "ペンを　あげます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "This recycles a very common beginner mix-up: you ask someone to かす (lend) it to you, not かりる (borrow) — those are two different verbs for two different people in the exchange.",
              "vocab": [
                {
                  "jp": "かす",
                  "en": "to lend"
                },
                {
                  "jp": "ペン",
                  "en": "pen"
                }
              ],
              "grammar": "かして ください = 'please lend (it to) me'. The asker always uses かす, never かりる, in this request."
            }
          },
          {
            "id": "st11",
            "situation": "A friend asks if you like Japanese dramas. You do.",
            "prompt": "Q：にほんの　ドラマが　すきですか？",
            "choices": [
              {
                "jp": "はい、すきです",
                "correct": true
              },
              {
                "jp": "いいえ、げんきです",
                "correct": false
              },
              {
                "jp": "ありがとう",
                "correct": false
              },
              {
                "jp": "すみません",
                "correct": false
              }
            ],
            "ai": {
              "situation": "This reuses the すき pattern with a new topic — Japanese TV dramas — a common conversation starter.",
              "vocab": [
                {
                  "jp": "ドラマ",
                  "en": "(TV) drama"
                },
                {
                  "jp": "すき",
                  "en": "like / fond of"
                }
              ],
              "grammar": "〜が すきです works with any noun you like — swap in food, hobbies, shows, anything."
            }
          },
          {
            "id": "st12",
            "situation": "You're lost and want to ask where the train station is.",
            "prompt": "Q：すみません、えきは　どこですか？",
            "choices": [
              {
                "jp": "えきは　あそこです",
                "correct": true
              },
              {
                "jp": "えきは　げんきです",
                "correct": false
              },
              {
                "jp": "えきは　おいしいです",
                "correct": false
              },
              {
                "jp": "えきは　あしたです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking for directions to the nearest station is essential for getting around any Japanese city.",
              "vocab": [
                {
                  "jp": "えき",
                  "en": "(train) station"
                },
                {
                  "jp": "あそこ",
                  "en": "over there"
                }
              ],
              "grammar": "Reuses 〜は どこですか — once you know this pattern, you can ask about any place by swapping the noun."
            }
          },
          {
            "id": "st13",
            "situation": "You see something in a shop and want to say you'd like to buy it.",
            "prompt": "Q：これが　ほしいです。なんと　いいますか？",
            "choices": [
              {
                "jp": "これを　ください",
                "correct": true
              },
              {
                "jp": "これが　あります",
                "correct": false
              },
              {
                "jp": "これは　たかいです",
                "correct": false
              },
              {
                "jp": "これでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "ほしい (want) describes your feeling; ください is what you actually say out loud to the shop staff to get the item.",
              "vocab": [
                {
                  "jp": "ほしい",
                  "en": "want (a thing)"
                },
                {
                  "jp": "これ",
                  "en": "this"
                }
              ],
              "grammar": "〜を ください is the action phrase for 'please give me this' — the simplest way to buy something."
            }
          },
          {
            "id": "st14",
            "situation": "A friend asks if you want to go to Tokyo for the holidays. You do.",
            "prompt": "Q：やすみに　とうきょうに　いきたいですか？",
            "choices": [
              {
                "jp": "はい、いきたいです",
                "correct": true
              },
              {
                "jp": "はい、いきました",
                "correct": false
              },
              {
                "jp": "はい、いきます",
                "correct": false
              },
              {
                "jp": "いいえ、おいしいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "This checks that you can answer a 'want to' question in the same form it was asked, instead of switching to a plain statement of fact.",
              "vocab": [
                {
                  "jp": "やすみ",
                  "en": "holiday / day off"
                },
                {
                  "jp": "〜たいです",
                  "en": "want to 〜"
                }
              ],
              "grammar": "Verb stem + たいです expresses a wish: いきたいです = 'want to go'. Match the question's grammar in your answer."
            }
          },
          {
            "id": "st15",
            "situation": "You're meeting someone for the first time and want to politely ask their name.",
            "prompt": "Q：はじめて　あいました。なんと　ききますか？",
            "choices": [
              {
                "jp": "おなまえは？",
                "correct": true
              },
              {
                "jp": "おげんきですか",
                "correct": false
              },
              {
                "jp": "ありがとうございます",
                "correct": false
              },
              {
                "jp": "すみません",
                "correct": false
              }
            ],
            "ai": {
              "situation": "おなまえは？ is a short, polite way to ask someone's name right after はじめまして (nice to meet you) in a first introduction.",
              "vocab": [
                {
                  "jp": "おなまえ",
                  "en": "name (polite)"
                },
                {
                  "jp": "はじめて",
                  "en": "for the first time"
                }
              ],
              "grammar": "Adding は after a topic and trailing off (おなまえは？) is a natural, slightly soft way to ask a question in conversation."
            }
          }
        ]
      },
      {
        "id": "set2",
        "label": "Set 2",
        "questions": [
          {
            "id": "st2-01",
            "situation": "It's midday and you greet a shop clerk you don't know well.",
            "prompt": "Q：ひるま、しらない人に　あいさつします。なんと　いいますか？",
            "choices": [
              {
                "jp": "こんにちは",
                "correct": true
              },
              {
                "jp": "おはようございます",
                "correct": false
              },
              {
                "jp": "こんばんは",
                "correct": false
              },
              {
                "jp": "おやすみなさい",
                "correct": false
              }
            ],
            "ai": {
              "situation": "こんにちは covers daytime greetings, roughly from late morning through evening — a different window than morning or night greetings.",
              "vocab": [
                {
                  "jp": "こんにちは",
                  "en": "hello / good afternoon"
                }
              ],
              "grammar": "Greetings are tied to time of day: おはよう (morning), こんにちは (daytime), こんばんは (evening/night)."
            }
          },
          {
            "id": "st2-02",
            "situation": "Someone asks if today's weather is hot. It is.",
            "prompt": "Q：きょうは　あついですか？",
            "choices": [
              {
                "jp": "はい、あついです",
                "correct": true
              },
              {
                "jp": "はい、さむいです",
                "correct": false
              },
              {
                "jp": "はい、げんきです",
                "correct": false
              },
              {
                "jp": "はい、たかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about the weather is universal small talk, just as common in Japan as anywhere else.",
              "vocab": [
                {
                  "jp": "あつい",
                  "en": "hot (weather)"
                },
                {
                  "jp": "さむい",
                  "en": "cold"
                }
              ],
              "grammar": "い-adjective + です directly states a simple quality, like describing the weather."
            }
          },
          {
            "id": "st2-03",
            "situation": "Someone asks how many people are in your family. There are four.",
            "prompt": "Q：かぞくは　なんにんですか？",
            "choices": [
              {
                "jp": "よにんです",
                "correct": true
              },
              {
                "jp": "よっつです",
                "correct": false
              },
              {
                "jp": "よじです",
                "correct": false
              },
              {
                "jp": "よかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about family size is common once conversations move past the basics of introductions.",
              "vocab": [
                {
                  "jp": "なんにん",
                  "en": "how many people"
                },
                {
                  "jp": "よにん",
                  "en": "four people"
                }
              ],
              "grammar": "にん is the counter for people — distinct from つ (objects), じ (time), and かい (floors)."
            }
          },
          {
            "id": "st2-04",
            "situation": "You're showing a photo and introducing your mother.",
            "prompt": "Q：これは　だれですか？",
            "choices": [
              {
                "jp": "わたしの　ははです",
                "correct": true
              },
              {
                "jp": "わたしの　なまえです",
                "correct": false
              },
              {
                "jp": "わたしの　くにです",
                "correct": false
              },
              {
                "jp": "わたしの　しごとです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Introducing family members by photo is a natural way friendships deepen beyond small talk.",
              "vocab": [
                {
                  "jp": "はは",
                  "en": "mother (your own, plain form)"
                },
                {
                  "jp": "だれ",
                  "en": "who"
                }
              ],
              "grammar": "はは refers to your own mother when speaking to others; おかあさん is used for someone else's mother, or to address your own directly."
            }
          },
          {
            "id": "st2-05",
            "situation": "You have a headache and want to tell your supervisor.",
            "prompt": "Q：あたまが　いたいです。じょうしに　なんと　いいますか？",
            "choices": [
              {
                "jp": "あたまが　いたいです",
                "correct": true
              },
              {
                "jp": "あたまが　いいです",
                "correct": false
              },
              {
                "jp": "あたまが　おおきいです",
                "correct": false
              },
              {
                "jp": "あたまが　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing simple physical discomfort is essential vocabulary for both work and daily life.",
              "vocab": [
                {
                  "jp": "あたま",
                  "en": "head"
                },
                {
                  "jp": "いたい",
                  "en": "painful / it hurts"
                }
              ],
              "grammar": "Body part + が いたいです describes pain: 'my 〜 hurts'."
            }
          },
          {
            "id": "st2-06",
            "situation": "Your bag is heavy and you want to ask a coworker for help carrying it.",
            "prompt": "Q：にもつが　おもいです。なんと　たのみますか？",
            "choices": [
              {
                "jp": "てつだって　ください",
                "correct": true
              },
              {
                "jp": "てつだいます",
                "correct": false
              },
              {
                "jp": "てつだいでした",
                "correct": false
              },
              {
                "jp": "てつだいません",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking for a hand with something heavy is a small but very practical everyday request.",
              "vocab": [
                {
                  "jp": "にもつ",
                  "en": "luggage / baggage"
                },
                {
                  "jp": "おもい",
                  "en": "heavy"
                },
                {
                  "jp": "てつだう",
                  "en": "to help"
                }
              ],
              "grammar": "てつだって ください = 'please help (me)' — the same 〜て ください request pattern applied to a new verb."
            }
          },
          {
            "id": "st2-07",
            "situation": "Someone asks where the post office is; you know it's to the right.",
            "prompt": "Q：すみません、ゆうびんきょくは　どこですか？と　きかれました。みぎに　あります。なんと　こたえますか？",
            "choices": [
              {
                "jp": "みぎです",
                "correct": true
              },
              {
                "jp": "ひだりです",
                "correct": false
              },
              {
                "jp": "まえです",
                "correct": false
              },
              {
                "jp": "うしろです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Simple one-word direction answers are often all you need when pointing someone the right way.",
              "vocab": [
                {
                  "jp": "みぎ",
                  "en": "right"
                },
                {
                  "jp": "ひだり",
                  "en": "left"
                },
                {
                  "jp": "ゆうびんきょく",
                  "en": "post office"
                }
              ],
              "grammar": "Direction words like みぎ/ひだり work as short, complete answers to 'where is it?' questions."
            }
          },
          {
            "id": "st2-08",
            "situation": "At a café, the staff asks what you'd like to drink. You want water.",
            "prompt": "Q：おのみものは？",
            "choices": [
              {
                "jp": "おみずを　ください",
                "correct": true
              },
              {
                "jp": "おみずが　あります",
                "correct": false
              },
              {
                "jp": "おみずでした",
                "correct": false
              },
              {
                "jp": "おみずは　たかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Ordering drinks uses exactly the same pattern as ordering food.",
              "vocab": [
                {
                  "jp": "おみず",
                  "en": "water (polite)"
                },
                {
                  "jp": "おのみもの",
                  "en": "drink / beverage"
                }
              ],
              "grammar": "Reinforces 〜を ください — the same ordering phrase works for drinks as well as food."
            }
          },
          {
            "id": "st2-09",
            "situation": "You just tasted a dish and want to say it's delicious.",
            "prompt": "Q：この　りょうりは　どうですか？",
            "choices": [
              {
                "jp": "おいしいです",
                "correct": true
              },
              {
                "jp": "たかいです",
                "correct": false
              },
              {
                "jp": "おもいです",
                "correct": false
              },
              {
                "jp": "いたいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Complimenting food is one of the easiest and most appreciated things you can say at a meal.",
              "vocab": [
                {
                  "jp": "りょうり",
                  "en": "dish / cooking"
                },
                {
                  "jp": "おいしい",
                  "en": "delicious"
                }
              ],
              "grammar": "どうですか asks for a simple opinion or impression; answer with a plain い-adjective."
            }
          },
          {
            "id": "st2-10",
            "situation": "You're making small talk and want to ask what job someone has.",
            "prompt": "Q：しごとは　なんですか？",
            "choices": [
              {
                "jp": "かいしゃいんです",
                "correct": true
              },
              {
                "jp": "かいしゃに　います",
                "correct": false
              },
              {
                "jp": "かいしゃでした",
                "correct": false
              },
              {
                "jp": "かいしゃが　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking what someone does for work is a standard question once introductions move past names.",
              "vocab": [
                {
                  "jp": "かいしゃいん",
                  "en": "company employee"
                },
                {
                  "jp": "しごと",
                  "en": "job / work"
                }
              ],
              "grammar": "なんですか asks a simple 'what is it?' — common for jobs, names, and other basic facts."
            }
          },
          {
            "id": "st2-11",
            "situation": "You just finished eating a meal someone prepared for you.",
            "prompt": "Q：ごはんを　たべおわりました。なんと　いいますか？",
            "choices": [
              {
                "jp": "ごちそうさまでした",
                "correct": true
              },
              {
                "jp": "いただきます",
                "correct": false
              },
              {
                "jp": "いただきました",
                "correct": false
              },
              {
                "jp": "ごちそうさまです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "These two meal phrases are said almost automatically by everyone in Japan, at home or in restaurants.",
              "vocab": [
                {
                  "jp": "ごちそうさまでした",
                  "en": "thank you for the meal (said after eating)"
                },
                {
                  "jp": "いただきます",
                  "en": "said before eating"
                }
              ],
              "grammar": "いただきます (before) and ごちそうさまでした (after) are a fixed pair — don't mix up the timing."
            }
          },
          {
            "id": "st2-12",
            "situation": "It's your coworker's birthday today.",
            "prompt": "Q：きょうは　たんじょうびです。なんと　いいますか？",
            "choices": [
              {
                "jp": "おたんじょうび　おめでとうございます",
                "correct": true
              },
              {
                "jp": "おめでとう　ございました",
                "correct": false
              },
              {
                "jp": "たんじょうびでした",
                "correct": false
              },
              {
                "jp": "たんじょうびに　いきます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Congratulating coworkers on small occasions like birthdays helps build warm relationships.",
              "vocab": [
                {
                  "jp": "たんじょうび",
                  "en": "birthday"
                },
                {
                  "jp": "おめでとうございます",
                  "en": "congratulations"
                }
              ],
              "grammar": "おめでとうございます is the standard congratulatory phrase — used for birthdays, achievements, and celebrations alike."
            }
          },
          {
            "id": "st2-13",
            "situation": "After a long day of work, a friend asks how today was. You're tired.",
            "prompt": "Q：きょうは　どうでしたか？",
            "choices": [
              {
                "jp": "つかれました",
                "correct": true
              },
              {
                "jp": "つかれます",
                "correct": false
              },
              {
                "jp": "つかれが　すきです",
                "correct": false
              },
              {
                "jp": "つかれません",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about how your day went, and how tired you are, is everyday conversation after work.",
              "vocab": [
                {
                  "jp": "つかれる",
                  "en": "to get tired"
                },
                {
                  "jp": "つかれました",
                  "en": "got tired (past)"
                }
              ],
              "grammar": "Use the plain past つかれました to describe a state you've already fallen into, like today's tiredness — not the non-past つかれます."
            }
          },
          {
            "id": "st2-14",
            "situation": "A friend asks what you'll do tomorrow. You're going to rest at home.",
            "prompt": "Q：あした　なにを　しますか？",
            "choices": [
              {
                "jp": "いえで　ゆっくり　します",
                "correct": true
              },
              {
                "jp": "いえで　ゆっくり　でした",
                "correct": false
              },
              {
                "jp": "いえに　ゆっくり　あります",
                "correct": false
              },
              {
                "jp": "いえが　ゆっくり　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about relaxed plans, like a quiet day at home, is common before or after a busy week.",
              "vocab": [
                {
                  "jp": "ゆっくりする",
                  "en": "to relax / take it easy"
                },
                {
                  "jp": "いえ",
                  "en": "home"
                }
              ],
              "grammar": "なにを しますか asks about plans; ゆっくりします is a common way to say 'I'll relax / take it easy'."
            }
          },
          {
            "id": "st2-15",
            "situation": "Someone asks what day of the week it is today. It's Monday.",
            "prompt": "Q：きょうは　なんようびですか？",
            "choices": [
              {
                "jp": "げつようびです",
                "correct": true
              },
              {
                "jp": "いちじです",
                "correct": false
              },
              {
                "jp": "いちにちです",
                "correct": false
              },
              {
                "jp": "いちがつです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Knowing the days of the week is essential for scheduling work shifts, appointments, and plans.",
              "vocab": [
                {
                  "jp": "なんようび",
                  "en": "what day of the week"
                },
                {
                  "jp": "げつようび",
                  "en": "Monday"
                }
              ],
              "grammar": "ようび asks about days of the week — distinct from じ (time), にち (date/day count), and がつ (month)."
            }
          }
        ]
      },
      {
        "id": "set3",
        "label": "Set 3",
        "questions": [
          {
            "id": "st3-01",
            "situation": "Someone asks what time it is now. It's 3 o'clock.",
            "prompt": "Q：いま、なんじですか？",
            "choices": [
              {
                "jp": "さんじです",
                "correct": true
              },
              {
                "jp": "さんがつです",
                "correct": false
              },
              {
                "jp": "さんにんです",
                "correct": false
              },
              {
                "jp": "さんかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Telling the time is one of the most frequently needed everyday phrases.",
              "vocab": [
                {
                  "jp": "いま",
                  "en": "now"
                },
                {
                  "jp": "なんじ",
                  "en": "what time"
                }
              ],
              "grammar": "なんじですか asks the time; answer with number + じ, e.g. さんじ = 3 o'clock."
            }
          },
          {
            "id": "st3-02",
            "situation": "You want to say you don't like spicy food.",
            "prompt": "Q：からい　たべものは　すきですか？",
            "choices": [
              {
                "jp": "いいえ、すきじゃないです",
                "correct": true
              },
              {
                "jp": "はい、すきです",
                "correct": false
              },
              {
                "jp": "いいえ、おいしいです",
                "correct": false
              },
              {
                "jp": "はい、たかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Being able to politely say you don't like something is just as useful as saying you do.",
              "vocab": [
                {
                  "jp": "からい",
                  "en": "spicy"
                },
                {
                  "jp": "すきじゃないです",
                  "en": "don't like"
                }
              ],
              "grammar": "すきじゃないです (or すきではないです) is the negative form of すきです: 'don't like'."
            }
          },
          {
            "id": "st3-03",
            "situation": "You're shopping for a shirt and want to know if they have it in blue.",
            "prompt": "Q：あおい　シャツは　ありますか？",
            "choices": [
              {
                "jp": "はい、あります",
                "correct": true
              },
              {
                "jp": "はい、います",
                "correct": false
              },
              {
                "jp": "はい、すきです",
                "correct": false
              },
              {
                "jp": "はい、いきます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking if an item comes in a certain color is a very practical shopping phrase.",
              "vocab": [
                {
                  "jp": "あおい",
                  "en": "blue"
                },
                {
                  "jp": "シャツ",
                  "en": "shirt"
                }
              ],
              "grammar": "Color + noun + は ありますか asks if a particular colored item is available."
            }
          },
          {
            "id": "st3-04",
            "situation": "It's snowing outside and a friend points it out to you.",
            "prompt": "Q：そとを　みて、なんと　いいますか？",
            "choices": [
              {
                "jp": "ゆきですね",
                "correct": true
              },
              {
                "jp": "あめですよ",
                "correct": false
              },
              {
                "jp": "はれですね",
                "correct": false
              },
              {
                "jp": "かぜですね",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Commenting on the weather you can both see together is natural, easy small talk.",
              "vocab": [
                {
                  "jp": "ゆき",
                  "en": "snow"
                },
                {
                  "jp": "あめ",
                  "en": "rain"
                },
                {
                  "jp": "はれ",
                  "en": "clear weather"
                },
                {
                  "jp": "かぜ",
                  "en": "wind"
                }
              ],
              "grammar": "Noun + ですね comments on something you both can see, inviting agreement."
            }
          },
          {
            "id": "st3-05",
            "situation": "Someone asks your job. You're a nurse.",
            "prompt": "Q：しごとは　なんですか？",
            "choices": [
              {
                "jp": "かんごしです",
                "correct": true
              },
              {
                "jp": "かんごしに　います",
                "correct": false
              },
              {
                "jp": "かんごしでした",
                "correct": false
              },
              {
                "jp": "かんごしが　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Stating your job clearly comes up constantly in introductions and small talk.",
              "vocab": [
                {
                  "jp": "かんごし",
                  "en": "nurse"
                }
              ],
              "grammar": "Reinforces なんですか for jobs — simply state the job name + です."
            }
          },
          {
            "id": "st3-06",
            "situation": "A friend asks about your hobby. You like reading books.",
            "prompt": "Q：しゅみは　なんですか？",
            "choices": [
              {
                "jp": "ほんを　よむのが　すきです",
                "correct": true
              },
              {
                "jp": "ほんを　かいました",
                "correct": false
              },
              {
                "jp": "ほんでした",
                "correct": false
              },
              {
                "jp": "ほんが　あります",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about hobbies is one of the easiest ways to bond with new acquaintances.",
              "vocab": [
                {
                  "jp": "しゅみ",
                  "en": "hobby"
                },
                {
                  "jp": "ほんを よむ",
                  "en": "to read a book"
                }
              ],
              "grammar": "Verb + のが すきです expresses liking an activity: 'I like reading (books)'."
            }
          },
          {
            "id": "st3-07",
            "situation": "You're taking a taxi and want to ask roughly how much the fare to the airport is.",
            "prompt": "Q：くうこうまで　タクシーで　いくらですか？",
            "choices": [
              {
                "jp": "さんせんえんぐらいです",
                "correct": true
              },
              {
                "jp": "さんじかんぐらいです",
                "correct": false
              },
              {
                "jp": "さんにんぐらいです",
                "correct": false
              },
              {
                "jp": "さんかいぐらいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking for an approximate fare or price is realistic — exact numbers aren't always known in advance.",
              "vocab": [
                {
                  "jp": "〜ぐらい",
                  "en": "about / approximately"
                },
                {
                  "jp": "タクシー",
                  "en": "taxi"
                }
              ],
              "grammar": "〜ぐらい softens a number to mean 'about/approximately' — useful when an exact answer isn't needed."
            }
          },
          {
            "id": "st3-08",
            "situation": "You want to buy 3 apples at a fruit stand.",
            "prompt": "Q：りんごを　みっつ　かいたいです。なんと　いいますか？",
            "choices": [
              {
                "jp": "りんごを　みっつ　ください",
                "correct": true
              },
              {
                "jp": "りんごが　みっつ　あります",
                "correct": false
              },
              {
                "jp": "りんごは　みっつでした",
                "correct": false
              },
              {
                "jp": "りんごを　みっつ　あげます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Buying a specific quantity of fruit or small items is everyday market shopping.",
              "vocab": [
                {
                  "jp": "りんご",
                  "en": "apple"
                },
                {
                  "jp": "みっつ",
                  "en": "three (general counter)"
                }
              ],
              "grammar": "Reinforces the つ counters with a new item — みっつ for three general objects, like apples."
            }
          },
          {
            "id": "st3-09",
            "situation": "You're running late and want to apologize for arriving late to a meeting.",
            "prompt": "Q：かいぎに　ちこくしました。なんと　いいますか？",
            "choices": [
              {
                "jp": "すみません、おくれました",
                "correct": true
              },
              {
                "jp": "すみません、はやいです",
                "correct": false
              },
              {
                "jp": "すみません、げんきです",
                "correct": false
              },
              {
                "jp": "すみません、いそがしいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Apologizing for lateness politely and quickly is an important workplace habit.",
              "vocab": [
                {
                  "jp": "ちこく",
                  "en": "being late"
                },
                {
                  "jp": "おくれる",
                  "en": "to be late / delayed"
                }
              ],
              "grammar": "すみません、おくれました is the standard apology for arriving late."
            }
          },
          {
            "id": "st3-10",
            "situation": "A coworker invites you to eat lunch together. You happily accept.",
            "prompt": "Q：いっしょに　ひるごはんを　たべませんか？",
            "choices": [
              {
                "jp": "いいですね、たべましょう",
                "correct": true
              },
              {
                "jp": "いいえ、たべました",
                "correct": false
              },
              {
                "jp": "たべません",
                "correct": false
              },
              {
                "jp": "ひるごはんでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Lunch invitations from coworkers are a normal part of workplace bonding.",
              "vocab": [
                {
                  "jp": "ひるごはん",
                  "en": "lunch"
                }
              ],
              "grammar": "Reuses the 〜ませんか invitation pattern with a new verb, たべる (to eat), answered with 〜ましょう."
            }
          },
          {
            "id": "st3-11",
            "situation": "At the end of the day, you say goodbye to a friend, planning to meet again tomorrow.",
            "prompt": "Q：また　あした　あいます。なんと　いいますか？",
            "choices": [
              {
                "jp": "また　あした",
                "correct": true
              },
              {
                "jp": "はじめまして",
                "correct": false
              },
              {
                "jp": "ごちそうさまでした",
                "correct": false
              },
              {
                "jp": "おねがいします",
                "correct": false
              }
            ],
            "ai": {
              "situation": "また あした is one of the most common casual goodbyes among friends and coworkers.",
              "vocab": [
                {
                  "jp": "また　あした",
                  "en": "see you tomorrow"
                }
              ],
              "grammar": "また + time word is a simple, casual way to say 'see you 〜' — また あした = 'see you tomorrow'."
            }
          },
          {
            "id": "st3-12",
            "situation": "Someone asks what your favorite season is. You like summer.",
            "prompt": "Q：すきな　きせつは　なんですか？",
            "choices": [
              {
                "jp": "なつが　すきです",
                "correct": true
              },
              {
                "jp": "なつでした",
                "correct": false
              },
              {
                "jp": "なつに　いきます",
                "correct": false
              },
              {
                "jp": "なつを　あげます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about favorite seasons is light, easy small talk that comes up often.",
              "vocab": [
                {
                  "jp": "きせつ",
                  "en": "season"
                },
                {
                  "jp": "なつ",
                  "en": "summer"
                }
              ],
              "grammar": "Reinforces 〜が すきです with a new topic — seasons."
            }
          },
          {
            "id": "st3-13",
            "situation": "You're very busy this week and want to say you have no free time.",
            "prompt": "Q：こんしゅうは　じかんが　ありますか？",
            "choices": [
              {
                "jp": "いいえ、じかんが　ありません",
                "correct": true
              },
              {
                "jp": "いいえ、じかんに　います",
                "correct": false
              },
              {
                "jp": "はい、じかんでした",
                "correct": false
              },
              {
                "jp": "いいえ、じかんが　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Saying you don't have free time is a common, polite way to explain you're busy.",
              "vocab": [
                {
                  "jp": "じかんが ありません",
                  "en": "have no time"
                },
                {
                  "jp": "こんしゅう",
                  "en": "this week"
                }
              ],
              "grammar": "ありません is the negative of あります — used to say something (like free time) doesn't exist."
            }
          },
          {
            "id": "st3-14",
            "situation": "You're describing a bag as small.",
            "prompt": "Q：その　かばんは　どうですか？",
            "choices": [
              {
                "jp": "ちいさいです",
                "correct": true
              },
              {
                "jp": "おおきいです",
                "correct": false
              },
              {
                "jp": "たかいです",
                "correct": false
              },
              {
                "jp": "やすいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing the size of everyday objects is basic, frequently used vocabulary.",
              "vocab": [
                {
                  "jp": "かばん",
                  "en": "bag"
                },
                {
                  "jp": "ちいさい",
                  "en": "small"
                },
                {
                  "jp": "おおきい",
                  "en": "big"
                }
              ],
              "grammar": "Simple い-adjective answers describe size or appearance directly."
            }
          },
          {
            "id": "st3-15",
            "situation": "Someone politely asks your age. You are 20.",
            "prompt": "Q：おいくつですか？",
            "choices": [
              {
                "jp": "にじゅっさいです",
                "correct": true
              },
              {
                "jp": "にじゅっぷんです",
                "correct": false
              },
              {
                "jp": "にじゅうにちです",
                "correct": false
              },
              {
                "jp": "にじゅっかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "おいくつですか is the polite way to ask someone's age, common in early conversations.",
              "vocab": [
                {
                  "jp": "おいくつですか",
                  "en": "how old are you (polite)"
                },
                {
                  "jp": "にじゅっさい",
                  "en": "20 years old"
                }
              ],
              "grammar": "さい is the counter for age — distinct from ぷん (minutes), にち (days), and かい (floors/times)."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "elem1",
    "title": "Elementary 1",
    "jp": "初級１",
    "level": "A2.1",
    "blurb": "Workplace requests, home, daily schedules.",
    "sets": [
      {
        "id": "set1",
        "label": "Set 1",
        "questions": [
          {
            "id": "e1_1",
            "situation": "Your coworker Yamada is not at his desk. Someone asks where he is. He's in the meeting room.",
            "prompt": "Q：やまださんは　どこですか？",
            "choices": [
              {
                "jp": "やまださんは　かいぎしつに　います",
                "correct": true
              },
              {
                "jp": "やまださんは　げんきです",
                "correct": false
              },
              {
                "jp": "やまださんは　にほんじんです",
                "correct": false
              },
              {
                "jp": "やまださんは　いきました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Saying where a colleague currently is, is a very common workplace exchange — especially when answering a phone call or a visitor's question.",
              "vocab": [
                {
                  "jp": "かいぎしつ",
                  "en": "meeting room"
                },
                {
                  "jp": "〜に います",
                  "en": "is at / in 〜 (for people, animals)"
                }
              ],
              "grammar": "〜は〜に います states where a living thing is located. います is for people/animals; あります is for objects and places."
            }
          },
          {
            "id": "e1_2",
            "situation": "You need to borrow a stapler from a coworker's desk.",
            "prompt": "Q：ホッチキスを　かりたいです。なんと　いいますか？",
            "choices": [
              {
                "jp": "ホッチキスを　かして　ください",
                "correct": true
              },
              {
                "jp": "ホッチキスを　かりて　ください",
                "correct": false
              },
              {
                "jp": "ホッチキスです",
                "correct": false
              },
              {
                "jp": "ホッチキスを　あげます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "This question tests a classic beginner mix-up: かす (to lend) vs かりる (to borrow). You ask someone else to かす (lend) it to you.",
              "vocab": [
                {
                  "jp": "かす",
                  "en": "to lend"
                },
                {
                  "jp": "かりる",
                  "en": "to borrow"
                },
                {
                  "jp": "〜て ください",
                  "en": "please do 〜"
                }
              ],
              "grammar": "〜て ください is the basic polite request form. かして ください = 'please lend (it to) me' — the verb is かす, not かりる."
            }
          },
          {
            "id": "e1_3",
            "situation": "Someone asks how many rooms your apartment has. You have four.",
            "prompt": "Q：アパートに　へやが　いくつ　ありますか？",
            "choices": [
              {
                "jp": "へやが　よっつ　あります",
                "correct": true
              },
              {
                "jp": "へやが　よにん　います",
                "correct": false
              },
              {
                "jp": "へやが　よじです",
                "correct": false
              },
              {
                "jp": "へやは　おおきいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Japanese uses special counting words depending on what's being counted — rooms use a different counter than people or hours.",
              "vocab": [
                {
                  "jp": "へや",
                  "en": "room"
                },
                {
                  "jp": "よっつ",
                  "en": "four (general object counter)"
                },
                {
                  "jp": "あります",
                  "en": "to exist / have (for things)"
                }
              ],
              "grammar": "よっつ is the counter for four general objects. Use あります (not います) because rooms aren't living things."
            }
          },
          {
            "id": "e1_4",
            "situation": "A new employee asks what time lunch break is. It runs from 12:00 to 13:00.",
            "prompt": "Q：ひるやすみは　なんじから　なんじまでですか？",
            "choices": [
              {
                "jp": "じゅうにじから　いちじまでです",
                "correct": true
              },
              {
                "jp": "いちじから　じゅうにじまでです",
                "correct": false
              },
              {
                "jp": "げつようびから　きんようびまでです",
                "correct": false
              },
              {
                "jp": "じゅうにじはんです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Stating work hours and break times accurately is an everyday workplace necessity.",
              "vocab": [
                {
                  "jp": "ひるやすみ",
                  "en": "lunch break"
                },
                {
                  "jp": "〜から〜まで",
                  "en": "from 〜 to 〜"
                }
              ],
              "grammar": "〜から〜まで marks a range: 'starting point から, ending point まで'. Works for both time and place."
            }
          },
          {
            "id": "e1_5",
            "situation": "You're asked your work schedule today and need to say you finish at 6pm.",
            "prompt": "Q：きょうは　なんじまで　しごとですか？",
            "choices": [
              {
                "jp": "ろくじまでです",
                "correct": true
              },
              {
                "jp": "ろくじかんです",
                "correct": false
              },
              {
                "jp": "ろくがつです",
                "correct": false
              },
              {
                "jp": "ろくにんです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "This question targets a classic listening trap: similar-sounding counters with very different meanings.",
              "vocab": [
                {
                  "jp": "〜じ",
                  "en": "〜 o'clock (a point in time)"
                },
                {
                  "jp": "〜じかん",
                  "en": "〜 hours (a duration)"
                },
                {
                  "jp": "〜がつ",
                  "en": "month of the year"
                }
              ],
              "grammar": "じ (point in time), じかん (duration), and がつ (calendar month) sound alike but mean very different things — listen carefully."
            }
          },
          {
            "id": "e1_6",
            "situation": "You're shopping and need batteries. They're on the 2nd floor.",
            "prompt": "Q：でんちは　どこに　ありますか？",
            "choices": [
              {
                "jp": "にかいに　あります",
                "correct": true
              },
              {
                "jp": "にかいに　います",
                "correct": false
              },
              {
                "jp": "にかいです、げんきです",
                "correct": false
              },
              {
                "jp": "でんちは　たかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking and answering where an item is sold is common when shopping in larger Japanese stores with multiple floors.",
              "vocab": [
                {
                  "jp": "でんち",
                  "en": "battery"
                },
                {
                  "jp": "にかい",
                  "en": "2nd floor"
                }
              ],
              "grammar": "あります confirms location for objects, not います — batteries are things, not living beings."
            }
          },
          {
            "id": "e1_7",
            "situation": "You want to ask the price of a jacket. It's 3,000 yen.",
            "prompt": "Q：この　ジャケットは　いくらですか？",
            "choices": [
              {
                "jp": "さんぜんえんです",
                "correct": true
              },
              {
                "jp": "さんがつです",
                "correct": false
              },
              {
                "jp": "さんにんです",
                "correct": false
              },
              {
                "jp": "さんじかんです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Recognizing number + counter combinations quickly is essential for everyday shopping.",
              "vocab": [
                {
                  "jp": "〜えん",
                  "en": "〜 yen"
                },
                {
                  "jp": "ジャケット",
                  "en": "jacket"
                }
              ],
              "grammar": "Large numbers + えん express prices, e.g. さんぜん = 3,000."
            }
          },
          {
            "id": "e1_8",
            "situation": "Your manager asks you to make copies. You accept the instruction politely.",
            "prompt": "Q：じょうしに「コピーを　とって　ください」と　いわれました。なんと　へんじしますか？",
            "choices": [
              {
                "jp": "はい、わかりました",
                "correct": true
              },
              {
                "jp": "いいえ、けっこうです",
                "correct": false
              },
              {
                "jp": "ごちそうさまでした",
                "correct": false
              },
              {
                "jp": "おさきに　しつれいします",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Responding clearly when given an instruction from a superior is an important workplace habit in Japan.",
              "vocab": [
                {
                  "jp": "わかりました",
                  "en": "understood / got it"
                },
                {
                  "jp": "けっこうです",
                  "en": "no thank you / that's fine (declining)"
                }
              ],
              "grammar": "はい、わかりました is the standard polite response when accepting an instruction."
            }
          },
          {
            "id": "e1_9",
            "situation": "You want to ask a coworker to wait a moment while you finish something.",
            "prompt": "Q：ちょっと　まって　ほしいです。なんと　いいますか？",
            "choices": [
              {
                "jp": "ちょっと　まって　ください",
                "correct": true
              },
              {
                "jp": "ちょっと　まって　います",
                "correct": false
              },
              {
                "jp": "ちょっと　まちました",
                "correct": false
              },
              {
                "jp": "ちょっと　まちます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking someone to wait briefly comes up constantly in offices, shops, and phone calls.",
              "vocab": [
                {
                  "jp": "まつ",
                  "en": "to wait"
                },
                {
                  "jp": "〜て ください",
                  "en": "please do 〜"
                }
              ],
              "grammar": "〜て ください reused here: まって ください = 'please wait a moment'."
            }
          },
          {
            "id": "e1_10",
            "situation": "You're not feeling well and need to call in sick to your workplace.",
            "prompt": "Q：からだの　ぐあいが　わるいです。かいしゃに　なんと　いいますか？",
            "choices": [
              {
                "jp": "すみません、きょうは　やすませて　ください",
                "correct": true
              },
              {
                "jp": "すみません、きょうは　いそがしいです",
                "correct": false
              },
              {
                "jp": "すみません、きょうは　げんきです",
                "correct": false
              },
              {
                "jp": "すみません、きょうは　たのしいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Calling in sick politely is an essential phrase every working person needs early on.",
              "vocab": [
                {
                  "jp": "ぐあいが わるい",
                  "en": "feeling unwell"
                },
                {
                  "jp": "やすませて ください",
                  "en": "please let me rest / take the day off"
                }
              ],
              "grammar": "やすませて ください is a causative-request pattern: 'please let me 〜' — common phrasing when calling in sick."
            }
          },
          {
            "id": "e1_11",
            "situation": "Someone asks if your room has a bed. Yes, it does.",
            "prompt": "Q：へやに　ベッドが　ありますか？",
            "choices": [
              {
                "jp": "はい、あります",
                "correct": true
              },
              {
                "jp": "はい、います",
                "correct": false
              },
              {
                "jp": "はい、です",
                "correct": false
              },
              {
                "jp": "はい、あげます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Confirming what furniture or items a room has comes up when describing your home or apartment-hunting.",
              "vocab": [
                {
                  "jp": "ベッド",
                  "en": "bed"
                }
              ],
              "grammar": "Simple confirmation with あります for an object's presence — reusing the あります/います distinction."
            }
          },
          {
            "id": "e1_12",
            "situation": "You need to transfer to the Yamanote line and are told it's platform 2.",
            "prompt": "Q：やまのてせんは　なんばんせんですか？",
            "choices": [
              {
                "jp": "にばんせんです",
                "correct": true
              },
              {
                "jp": "にじかんです",
                "correct": false
              },
              {
                "jp": "にかいです",
                "correct": false
              },
              {
                "jp": "にがつです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking and understanding platform numbers is essential for navigating Japanese train stations.",
              "vocab": [
                {
                  "jp": "のりかえる",
                  "en": "to transfer (trains)"
                },
                {
                  "jp": "〜ばんせん",
                  "en": "platform number 〜"
                }
              ],
              "grammar": "ばんせん is specifically the counter for platform numbers — distinct from かい (floor), じ (time), and がつ (month)."
            }
          },
          {
            "id": "e1_13",
            "situation": "At a restaurant, the waiter asks what you'll have. You want the lunch set.",
            "prompt": "Q：なにに　しますか？",
            "choices": [
              {
                "jp": "ランチセットに　します",
                "correct": true
              },
              {
                "jp": "ランチセットが　あります",
                "correct": false
              },
              {
                "jp": "ランチセットでした",
                "correct": false
              },
              {
                "jp": "ランチセットを　あげます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "〜に します is the natural way to state a choice when ordering or selecting from options, slightly different in nuance from 〜を ください.",
              "vocab": [
                {
                  "jp": "〜に します",
                  "en": "I'll have / decide on 〜"
                },
                {
                  "jp": "ランチセット",
                  "en": "lunch set"
                }
              ],
              "grammar": "Noun + に します states your choice or decision — common at restaurants and shops with multiple options."
            }
          },
          {
            "id": "e1_14",
            "situation": "Someone asks how much your monthly rent is. It's 50,000 yen.",
            "prompt": "Q：やちんは　いくらですか？",
            "choices": [
              {
                "jp": "ごまんえんです",
                "correct": true
              },
              {
                "jp": "ごじかんです",
                "correct": false
              },
              {
                "jp": "ごかいです",
                "correct": false
              },
              {
                "jp": "ごにんです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about rent and household costs is practical daily-life vocabulary for anyone living independently.",
              "vocab": [
                {
                  "jp": "やちん",
                  "en": "rent"
                },
                {
                  "jp": "〜まんえん",
                  "en": "〜 ten-thousand yen"
                }
              ],
              "grammar": "Reinforces 〜えん for prices, contrasted again with the similar-sounding じかん/かい/にん counters."
            }
          },
          {
            "id": "e1_15",
            "situation": "You borrowed an umbrella from a coworker yesterday and are returning it today.",
            "prompt": "Q：きのう　かりた　かさを　かえします。なんと　いいますか？",
            "choices": [
              {
                "jp": "これ、ありがとうございました",
                "correct": true
              },
              {
                "jp": "これ、かして　ください",
                "correct": false
              },
              {
                "jp": "これ、かりたいです",
                "correct": false
              },
              {
                "jp": "これ、あげます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Returning a borrowed item politely is a small but important everyday courtesy.",
              "vocab": [
                {
                  "jp": "かさ",
                  "en": "umbrella"
                },
                {
                  "jp": "かえす",
                  "en": "to return (something borrowed)"
                }
              ],
              "grammar": "Handing something back with これ、ありがとうございました is natural and polite — you don't need a separate 'return' verb in casual speech."
            }
          }
        ]
      },
      {
        "id": "set2",
        "label": "Set 2",
        "questions": [
          {
            "id": "e1-s2-01",
            "situation": "The meeting room is already booked at 2pm; you ask if you can move the meeting to 3pm.",
            "prompt": "Q：かいぎを　さんじに　うつしたいです。なんと　たのみますか？",
            "choices": [
              {
                "jp": "かいぎを　さんじに　うつしても　いいですか",
                "correct": true
              },
              {
                "jp": "かいぎは　さんじです",
                "correct": false
              },
              {
                "jp": "かいぎを　さんじに　うつしました",
                "correct": false
              },
              {
                "jp": "かいぎが　さんじに　あります",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking permission to reschedule something is a common, polite way to handle schedule conflicts at work.",
              "vocab": [
                {
                  "jp": "うつす",
                  "en": "to move / change (a schedule)"
                },
                {
                  "jp": "〜てもいいですか",
                  "en": "may I 〜?"
                }
              ],
              "grammar": "〜てもいいですか asks for permission to change something, like a meeting time."
            }
          },
          {
            "id": "e1-s2-02",
            "situation": "The photocopier is broken and you want to report it to your supervisor.",
            "prompt": "Q：コピーきが　こわれています。じょうしに　なんと　いいますか？",
            "choices": [
              {
                "jp": "コピーきが　こわれています",
                "correct": true
              },
              {
                "jp": "コピーきを　つかいます",
                "correct": false
              },
              {
                "jp": "コピーきが　あります",
                "correct": false
              },
              {
                "jp": "コピーきは　たかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Reporting broken equipment quickly and clearly keeps the workplace running smoothly.",
              "vocab": [
                {
                  "jp": "コピーき",
                  "en": "photocopier"
                },
                {
                  "jp": "こわれている",
                  "en": "is broken (ongoing state)"
                }
              ],
              "grammar": "こわれている (て-form + いる) describes an ongoing broken state, not just the one-time act of breaking."
            }
          },
          {
            "id": "e1-s2-03",
            "situation": "Someone asks what your main duty at work is. You handle customer service.",
            "prompt": "Q：おもな　しごとは　なんですか？",
            "choices": [
              {
                "jp": "せっきゃくです",
                "correct": true
              },
              {
                "jp": "せっきゃくでした",
                "correct": false
              },
              {
                "jp": "せっきゃくに　いきます",
                "correct": false
              },
              {
                "jp": "せっきゃくが　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Being able to clearly describe your main work duty is useful in interviews and introductions alike.",
              "vocab": [
                {
                  "jp": "せっきゃく",
                  "en": "customer service"
                },
                {
                  "jp": "おもな",
                  "en": "main"
                }
              ],
              "grammar": "Stating your main job duty is as simple as noun + です."
            }
          },
          {
            "id": "e1-s2-04",
            "situation": "You ask a coworker if there's overtime today. There isn't.",
            "prompt": "Q：きょう、ざんぎょうが　ありますか？",
            "choices": [
              {
                "jp": "いいえ、ありません",
                "correct": true
              },
              {
                "jp": "いいえ、いません",
                "correct": false
              },
              {
                "jp": "はい、します",
                "correct": false
              },
              {
                "jp": "はい、しました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking about overtime is a normal part of planning your evening or commute.",
              "vocab": [
                {
                  "jp": "ざんぎょう",
                  "en": "overtime"
                }
              ],
              "grammar": "あります/ありません tests for the existence of overtime work — あります is used since 残業 isn't a living thing."
            }
          },
          {
            "id": "e1-s2-05",
            "situation": "Someone asks what day you have off this week. Wednesday.",
            "prompt": "Q：こんしゅう、やすみは　いつですか？",
            "choices": [
              {
                "jp": "すいようびです",
                "correct": true
              },
              {
                "jp": "すいぶんです",
                "correct": false
              },
              {
                "jp": "すいじです",
                "correct": false
              },
              {
                "jp": "すいかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Coordinating days off with coworkers requires being able to clearly state which day you mean.",
              "vocab": [
                {
                  "jp": "いつ",
                  "en": "when"
                },
                {
                  "jp": "すいようび",
                  "en": "Wednesday"
                }
              ],
              "grammar": "いつですか asks 'when'; days of the week answer directly."
            }
          },
          {
            "id": "e1-s2-06",
            "situation": "Someone asks how you commute to work. By bicycle.",
            "prompt": "Q：かいしゃまで　なにで　きますか？",
            "choices": [
              {
                "jp": "じてんしゃで　きます",
                "correct": true
              },
              {
                "jp": "じてんしゃが　あります",
                "correct": false
              },
              {
                "jp": "じてんしゃでした",
                "correct": false
              },
              {
                "jp": "じてんしゃを　ください",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about your commute method is common small talk among coworkers.",
              "vocab": [
                {
                  "jp": "じてんしゃ",
                  "en": "bicycle"
                },
                {
                  "jp": "なにで",
                  "en": "by what (means)"
                }
              ],
              "grammar": "なにで asks the means of transportation; method + で + verb answers it."
            }
          },
          {
            "id": "e1-s2-07",
            "situation": "You want to ask permission to use the office phone for a personal call.",
            "prompt": "Q：でんわを　つかいたいです。なんと　たのみますか？",
            "choices": [
              {
                "jp": "でんわを　つかっても　いいですか",
                "correct": true
              },
              {
                "jp": "でんわを　つかいます",
                "correct": false
              },
              {
                "jp": "でんわを　つかいました",
                "correct": false
              },
              {
                "jp": "でんわが　あります",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking before using shared office equipment for personal reasons is a basic workplace courtesy.",
              "vocab": [
                {
                  "jp": "でんわ",
                  "en": "telephone"
                },
                {
                  "jp": "つかう",
                  "en": "to use"
                }
              ],
              "grammar": "Reinforces 〜てもいいですか for permission, now with つかう (to use)."
            }
          },
          {
            "id": "e1-s2-08",
            "situation": "You need more printer paper and ask a coworker where it's kept.",
            "prompt": "Q：コピーようしは　どこに　ありますか？",
            "choices": [
              {
                "jp": "あの　ロッカーに　あります",
                "correct": true
              },
              {
                "jp": "あの　ロッカーに　います",
                "correct": false
              },
              {
                "jp": "あの　ロッカーでした",
                "correct": false
              },
              {
                "jp": "あの　ロッカーが　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Knowing where supplies are kept is part of settling into any new workplace.",
              "vocab": [
                {
                  "jp": "コピーようし",
                  "en": "printer / copy paper"
                },
                {
                  "jp": "ロッカー",
                  "en": "locker / cabinet"
                }
              ],
              "grammar": "Reinforces あります for object location, this time with ロッカー as the place."
            }
          },
          {
            "id": "e1-s2-09",
            "situation": "It's a new employee's first day, and you greet them.",
            "prompt": "Q：あたらしい　社員が　きました。なんと　いいますか？",
            "choices": [
              {
                "jp": "よろしく　おねがいします",
                "correct": true
              },
              {
                "jp": "おさきに　しつれいします",
                "correct": false
              },
              {
                "jp": "ごちそうさまでした",
                "correct": false
              },
              {
                "jp": "おめでとうございます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "よろしくお願いします is said constantly in Japanese workplaces — when meeting someone, starting a task together, or asking for ongoing cooperation.",
              "vocab": [
                {
                  "jp": "よろしく おねがいします",
                  "en": "nice to meet you / please treat me well (fixed greeting)"
                }
              ],
              "grammar": "This is a flexible, essential phrase — memorize it as one chunk rather than translating it literally."
            }
          },
          {
            "id": "e1-s2-10",
            "situation": "A coworker taught you how to use a new machine, and you thank them specifically for teaching you.",
            "prompt": "Q：おしえて　もらいました。なんと　いいますか？",
            "choices": [
              {
                "jp": "おしえて　くれて　ありがとうございます",
                "correct": true
              },
              {
                "jp": "おしえて　あげました",
                "correct": false
              },
              {
                "jp": "おしえて　もらいます",
                "correct": false
              },
              {
                "jp": "おしえました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Thanking someone specifically for an action they did for you sounds warmer than a generic thank-you.",
              "vocab": [
                {
                  "jp": "おしえる",
                  "en": "to teach"
                },
                {
                  "jp": "〜て くれて ありがとう",
                  "en": "thank you for doing 〜 for me"
                }
              ],
              "grammar": "〜て くれて ありがとうございます thanks someone specifically for doing something for your benefit."
            }
          },
          {
            "id": "e1-s2-11",
            "situation": "You're negotiating a slightly lower price for a bulk work-supplies order, and the seller agrees.",
            "prompt": "Q：もうすこし　やすく　なりませんか？",
            "choices": [
              {
                "jp": "わかりました、すこし　やすく　します",
                "correct": true
              },
              {
                "jp": "わかりました、たかく　します",
                "correct": false
              },
              {
                "jp": "わかりません、やすいです",
                "correct": false
              },
              {
                "jp": "わかりました、たかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Gently negotiating price is common when ordering supplies in bulk for a workplace.",
              "vocab": [
                {
                  "jp": "やすく なりませんか",
                  "en": "can it become cheaper? (negotiating)"
                }
              ],
              "grammar": "〜く なりませんか asks if something can change to a different state — here, becoming cheaper."
            }
          },
          {
            "id": "e1-s2-12",
            "situation": "You want to confirm the meeting room was already booked for your team.",
            "prompt": "Q：かいぎしつは　よやく　しましたか？",
            "choices": [
              {
                "jp": "はい、しました",
                "correct": true
              },
              {
                "jp": "はい、します",
                "correct": false
              },
              {
                "jp": "はい、ありました",
                "correct": false
              },
              {
                "jp": "はい、います",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Confirming whether a booking or reservation was already completed avoids double-booking mistakes.",
              "vocab": [
                {
                  "jp": "よやく する",
                  "en": "to book / reserve"
                }
              ],
              "grammar": "Past-tense しました confirms a completed action, like a reservation already made."
            }
          },
          {
            "id": "e1-s2-13",
            "situation": "It's raining heavily, and your train commute might be affected.",
            "prompt": "Q：あめが　つよいので、どうしますか？",
            "choices": [
              {
                "jp": "でんしゃが　おくれるかもしれません",
                "correct": true
              },
              {
                "jp": "でんしゃが　はやいです",
                "correct": false
              },
              {
                "jp": "でんしゃは　やすいです",
                "correct": false
              },
              {
                "jp": "でんしゃが　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about possible delays due to weather is practical, everyday workplace conversation.",
              "vocab": [
                {
                  "jp": "〜かもしれません",
                  "en": "might 〜 (possibility)"
                },
                {
                  "jp": "おくれる",
                  "en": "to be late / delayed"
                }
              ],
              "grammar": "〜かもしれません expresses a possibility: 'might 〜' — useful for talking about uncertain outcomes like delays."
            }
          },
          {
            "id": "e1-s2-14",
            "situation": "You finished all your work for the day and feel relieved.",
            "prompt": "Q：きょうの　しごとが　おわりました。きもちは　どうですか？",
            "choices": [
              {
                "jp": "ほっとしました",
                "correct": true
              },
              {
                "jp": "こまりました",
                "correct": false
              },
              {
                "jp": "おどろきました",
                "correct": false
              },
              {
                "jp": "つまらなかったです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Expressing relief after a demanding task is natural and very relatable.",
              "vocab": [
                {
                  "jp": "ほっとする",
                  "en": "to feel relieved"
                }
              ],
              "grammar": "ほっとしました expresses relief after finishing something stressful or demanding."
            }
          },
          {
            "id": "e1-s2-15",
            "situation": "Someone asks if you can work this Saturday. You can't, you already have plans.",
            "prompt": "Q：どようびに　しごとが　できますか？",
            "choices": [
              {
                "jp": "すみません、よていが　あります",
                "correct": true
              },
              {
                "jp": "はい、できます",
                "correct": false
              },
              {
                "jp": "いいえ、げんきです",
                "correct": false
              },
              {
                "jp": "はい、すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Declining a request by mentioning existing plans is a natural, non-confrontational way to say no.",
              "vocab": [
                {
                  "jp": "よてい",
                  "en": "plans"
                },
                {
                  "jp": "どようび",
                  "en": "Saturday"
                }
              ],
              "grammar": "Politely declining with すみません、よていが あります avoids a blunt 'no' while still being clear."
            }
          }
        ]
      },
      {
        "id": "set3",
        "label": "Set 3",
        "questions": [
          {
            "id": "e1-s3-01",
            "situation": "You need to leave 30 minutes early today and ask your supervisor.",
            "prompt": "Q：きょう、さんじゅっぷん　はやく　かえりたいです。なんと　たのみますか？",
            "choices": [
              {
                "jp": "さんじゅっぷん　はやく　かえっても　いいですか",
                "correct": true
              },
              {
                "jp": "さんじゅっぷん　はやく　かえりました",
                "correct": false
              },
              {
                "jp": "さんじゅっぷん　はやく　かえります",
                "correct": false
              },
              {
                "jp": "さんじゅっぷん　はやく　かえるでしょう",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking to leave a little early is a routine request in most workplaces.",
              "vocab": [
                {
                  "jp": "はやく かえる",
                  "en": "to go home early"
                }
              ],
              "grammar": "Reinforces 〜てもいいですか for asking permission — this time to leave early."
            }
          },
          {
            "id": "e1-s3-02",
            "situation": "You're new and don't know how to use the fax machine yet.",
            "prompt": "Q：ファックスの　つかいかたが　わかりません。なんと　いいますか？",
            "choices": [
              {
                "jp": "すみません、まだ　わかりません",
                "correct": true
              },
              {
                "jp": "すみません、もう　わかります",
                "correct": false
              },
              {
                "jp": "すみません、わかりました",
                "correct": false
              },
              {
                "jp": "すみません、わかります",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Admitting you're still learning something is completely normal, especially in your first weeks at a job.",
              "vocab": [
                {
                  "jp": "まだ〜ません",
                  "en": "not yet"
                },
                {
                  "jp": "つかいかた",
                  "en": "how to use (something)"
                }
              ],
              "grammar": "まだ〜ません expresses 'not yet' — useful when you're still learning something new."
            }
          },
          {
            "id": "e1-s3-03",
            "situation": "You ask if next Monday is a national holiday. It is.",
            "prompt": "Q：らいしゅうの　げつようびは　しゅくじつですか？",
            "choices": [
              {
                "jp": "はい、しゅくじつです",
                "correct": true
              },
              {
                "jp": "はい、しごとです",
                "correct": false
              },
              {
                "jp": "はい、げつようびでした",
                "correct": false
              },
              {
                "jp": "はい、やすみが　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Checking whether a date is a national holiday matters for planning work schedules.",
              "vocab": [
                {
                  "jp": "しゅくじつ",
                  "en": "national holiday"
                }
              ],
              "grammar": "A simple yes/no confirmation about whether a date is a holiday."
            }
          },
          {
            "id": "e1-s3-04",
            "situation": "Your supervisor asks if you finished the report by today's deadline. You did.",
            "prompt": "Q：レポートは　きょうまでに　できましたか？",
            "choices": [
              {
                "jp": "はい、できました",
                "correct": true
              },
              {
                "jp": "はい、します",
                "correct": false
              },
              {
                "jp": "はい、できます",
                "correct": false
              },
              {
                "jp": "はい、しました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Confirming you met a deadline is one of the most common workplace check-ins.",
              "vocab": [
                {
                  "jp": "〜までに",
                  "en": "by 〜 (a deadline)"
                },
                {
                  "jp": "できる",
                  "en": "to be able to / get done"
                }
              ],
              "grammar": "〜までに marks a deadline: 'by 〜'. できました confirms the task was completed in time."
            }
          },
          {
            "id": "e1-s3-05",
            "situation": "You want to ask a coworker for their phone extension number.",
            "prompt": "Q：ないせんばんごうを　ききたいです。なんと　ききますか？",
            "choices": [
              {
                "jp": "ないせんばんごうは　なんばんですか",
                "correct": true
              },
              {
                "jp": "ないせんばんごうは　どこですか",
                "correct": false
              },
              {
                "jp": "ないせんばんごうは　いつですか",
                "correct": false
              },
              {
                "jp": "ないせんばんごうは　だれですか",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking for an internal phone extension is common when you need to reach a colleague directly.",
              "vocab": [
                {
                  "jp": "ないせんばんごう",
                  "en": "extension number"
                },
                {
                  "jp": "なんばん",
                  "en": "what number"
                }
              ],
              "grammar": "なんばんですか asks for a number, like a phone extension."
            }
          },
          {
            "id": "e1-s3-06",
            "situation": "Someone asks where your desk is. It's near the window.",
            "prompt": "Q：せきは　どこですか？",
            "choices": [
              {
                "jp": "まどの　ちかくです",
                "correct": true
              },
              {
                "jp": "まどの　まえでした",
                "correct": false
              },
              {
                "jp": "まどが　すきです",
                "correct": false
              },
              {
                "jp": "まどに　いきます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing where your desk is helps visitors or new coworkers find you.",
              "vocab": [
                {
                  "jp": "せき",
                  "en": "seat / desk"
                },
                {
                  "jp": "ちかく",
                  "en": "near"
                }
              ],
              "grammar": "Place + の ちかくです describes a location as 'near 〜'."
            }
          },
          {
            "id": "e1-s3-07",
            "situation": "You made a small mistake on a form and want to apologize to your supervisor.",
            "prompt": "Q：しょるいを　まちがえました。なんと　いいますか？",
            "choices": [
              {
                "jp": "すみません、まちがえました",
                "correct": true
              },
              {
                "jp": "すみません、つくりました",
                "correct": false
              },
              {
                "jp": "すみません、おくれました",
                "correct": false
              },
              {
                "jp": "すみません、わすれました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Owning up to small mistakes quickly and clearly is valued in any workplace.",
              "vocab": [
                {
                  "jp": "まちがえる",
                  "en": "to make a mistake"
                }
              ],
              "grammar": "すみません、まちがえました is the direct, simple way to apologize for an error."
            }
          },
          {
            "id": "e1-s3-08",
            "situation": "You want to ask permission to take a photo of the whiteboard notes before they're erased.",
            "prompt": "Q：ホワイトボードを　しゃしんに　とりたいです。なんと　たのみますか？",
            "choices": [
              {
                "jp": "しゃしんを　とっても　いいですか",
                "correct": true
              },
              {
                "jp": "しゃしんを　とりました",
                "correct": false
              },
              {
                "jp": "しゃしんを　とります",
                "correct": false
              },
              {
                "jp": "しゃしんが　あります",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking before taking photos at work, especially of shared materials, is a simple courtesy.",
              "vocab": [
                {
                  "jp": "しゃしんを とる",
                  "en": "to take a photo"
                }
              ],
              "grammar": "Reinforces 〜てもいいですか with a new verb, とる (to take)."
            }
          },
          {
            "id": "e1-s3-09",
            "situation": "Your monitor is too small, and you ask if you can get a bigger one.",
            "prompt": "Q：もっと　おおきい　モニターが　ほしいです。なんと　たのみますか？",
            "choices": [
              {
                "jp": "もっと　おおきい　モニターは　ありますか",
                "correct": true
              },
              {
                "jp": "もっと　おおきい　モニターでした",
                "correct": false
              },
              {
                "jp": "もっと　おおきい　モニターを　あげます",
                "correct": false
              },
              {
                "jp": "もっと　おおきい　モニターが　すきでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Requesting better equipment is a normal, practical workplace conversation.",
              "vocab": [
                {
                  "jp": "もっと",
                  "en": "more"
                },
                {
                  "jp": "モニター",
                  "en": "monitor"
                }
              ],
              "grammar": "もっと + adjective + ありますか asks if a 'more 〜' version is available — stronger than もうすこし."
            }
          },
          {
            "id": "e1-s3-10",
            "situation": "Someone asks how long your probation period is. Three months.",
            "prompt": "Q：しけんきかんは　どのくらいですか？",
            "choices": [
              {
                "jp": "さんかげつです",
                "correct": true
              },
              {
                "jp": "さんじかんです",
                "correct": false
              },
              {
                "jp": "さんかいです",
                "correct": false
              },
              {
                "jp": "さんにんです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Knowing how to state your probation length is useful when discussing your employment status.",
              "vocab": [
                {
                  "jp": "しけんきかん",
                  "en": "probation period"
                },
                {
                  "jp": "〜かげつ",
                  "en": "〜 months (duration)"
                }
              ],
              "grammar": "かげつ is the counter for counting months as a duration — different from がつ, the calendar month name."
            }
          },
          {
            "id": "e1-s3-11",
            "situation": "Your supervisor asks if you can do overtime today if it's needed. You agree.",
            "prompt": "Q：もし　ひつようなら、ざんぎょう　できますか？",
            "choices": [
              {
                "jp": "はい、できます",
                "correct": true
              },
              {
                "jp": "はい、します",
                "correct": false
              },
              {
                "jp": "はい、しました",
                "correct": false
              },
              {
                "jp": "はい、ほしいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Agreeing to flexible overtime, conditionally, is common when discussing your availability.",
              "vocab": [
                {
                  "jp": "もし〜なら",
                  "en": "if 〜 (conditional)"
                },
                {
                  "jp": "ひつよう",
                  "en": "necessary"
                }
              ],
              "grammar": "もし〜なら sets a conditional — 'if it's necessary' — common when agreeing to flexible requests."
            }
          },
          {
            "id": "e1-s3-12",
            "situation": "You're going on leave tomorrow and want to hand your tasks over to your coworker, Tanaka.",
            "prompt": "Q：あしたから　やすみです。しごとを　どうしますか？",
            "choices": [
              {
                "jp": "たなかさんに　ひきつぎます",
                "correct": true
              },
              {
                "jp": "たなかさんを　たすけます",
                "correct": false
              },
              {
                "jp": "たなかさんに　あげます",
                "correct": false
              },
              {
                "jp": "たなかさんが　します",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Handing over tasks clearly before time off keeps the team running smoothly while you're away.",
              "vocab": [
                {
                  "jp": "ひきつぐ",
                  "en": "to hand over (work/duties)"
                }
              ],
              "grammar": "ひきつぎます describes formally handing off work responsibilities before being away."
            }
          },
          {
            "id": "e1-s3-13",
            "situation": "You ask if there's a dress code for the office. Yes, a suit is required.",
            "prompt": "Q：ふくそうの　きまりは　ありますか？",
            "choices": [
              {
                "jp": "はい、スーツを　きて　ください",
                "correct": true
              },
              {
                "jp": "はい、スーツが　すきです",
                "correct": false
              },
              {
                "jp": "はい、スーツでした",
                "correct": false
              },
              {
                "jp": "はい、スーツを　ください",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking about dress code is a sensible question when starting a new workplace.",
              "vocab": [
                {
                  "jp": "ふくそう",
                  "en": "attire / clothing"
                },
                {
                  "jp": "きまり",
                  "en": "rule"
                }
              ],
              "grammar": "Asking about ふくそうの きまり (dress code) is useful early on at any new job."
            }
          },
          {
            "id": "e1-s3-14",
            "situation": "You're writing a short work email and need a simple, standard polite opening.",
            "prompt": "Q：メールの　さいしょに　なんと　かきますか？",
            "choices": [
              {
                "jp": "おせわになっております",
                "correct": true
              },
              {
                "jp": "さようなら",
                "correct": false
              },
              {
                "jp": "ごちそうさまでした",
                "correct": false
              },
              {
                "jp": "おやすみなさい",
                "correct": false
              }
            ],
            "ai": {
              "situation": "This phrase opens an enormous number of Japanese business emails, almost regardless of context.",
              "vocab": [
                {
                  "jp": "おせわになっております",
                  "en": "standard polite business-email opening phrase"
                }
              ],
              "grammar": "おせわになっております is a fixed business phrase, roughly 'thank you for your continued support' — used to open many work emails."
            }
          },
          {
            "id": "e1-s3-15",
            "situation": "You need to ask for leave suddenly because of a family emergency.",
            "prompt": "Q：かぞくに　きゅうな　ことが　ありました。かいしゃに　なんと　れんらくしますか？",
            "choices": [
              {
                "jp": "すみません、きゅうに　やすみたいです",
                "correct": true
              },
              {
                "jp": "すみません、きょうは　いそがしいです",
                "correct": false
              },
              {
                "jp": "すみません、ちこくします",
                "correct": false
              },
              {
                "jp": "すみません、おくれました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Being able to clearly explain an urgent, unplanned need for leave is important, even with limited Japanese.",
              "vocab": [
                {
                  "jp": "きゅうな こと",
                  "en": "sudden matter / emergency"
                },
                {
                  "jp": "きゅうに",
                  "en": "suddenly"
                }
              ],
              "grammar": "きゅうに やすみたいです clearly and politely explains an urgent need for unplanned leave."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "elem2",
    "title": "Elementary 2",
    "jp": "初級２",
    "level": "A2.2",
    "blurb": "Getting around town, shopping, invitations, hobbies.",
    "sets": [
      {
        "id": "set1",
        "label": "Set 1",
        "questions": [
          {
            "id": "e2_1",
            "situation": "You're on a bus and want to confirm it goes to the airport.",
            "prompt": "Q：このバスは　くうこうに　いきますか？",
            "choices": [
              {
                "jp": "はい、いきます",
                "correct": true
              },
              {
                "jp": "はい、います",
                "correct": false
              },
              {
                "jp": "いいえ、たかいです",
                "correct": false
              },
              {
                "jp": "いいえ、おいしいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Double-checking a bus or train's destination before boarding is a very practical survival skill.",
              "vocab": [
                {
                  "jp": "くうこう",
                  "en": "airport"
                },
                {
                  "jp": "いきます",
                  "en": "goes / will go"
                }
              ],
              "grammar": "〜は〜に いきますか confirms a destination — a common pattern when checking transportation routes."
            }
          },
          {
            "id": "e2_2",
            "situation": "You're commenting on how large a building looks, inviting agreement.",
            "prompt": "Q：あの　たてものを　みて、なんと　いいますか？",
            "choices": [
              {
                "jp": "おおきい　たてものですね",
                "correct": true
              },
              {
                "jp": "たてものが　ありません",
                "correct": false
              },
              {
                "jp": "たてものに　いきました",
                "correct": false
              },
              {
                "jp": "たてものは　ちいさいですよ",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Casual observations shared with a companion while walking around town are very natural small talk.",
              "vocab": [
                {
                  "jp": "たてもの",
                  "en": "building"
                },
                {
                  "jp": "〜ですね",
                  "en": "isn't it 〜? (seeking agreement)"
                }
              ],
              "grammar": "〜ですね adds a soft 'isn't it?' tone — very natural when making a casual observation out loud."
            }
          },
          {
            "id": "e2_3",
            "situation": "A friend asks what kind of manga you like. You like action manga.",
            "prompt": "Q：どんな　マンガが　すきですか？",
            "choices": [
              {
                "jp": "アクションマンガが　すきです",
                "correct": true
              },
              {
                "jp": "マンガを　かいました",
                "correct": false
              },
              {
                "jp": "マンガでした",
                "correct": false
              },
              {
                "jp": "マンガが　あります",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about hobbies and entertainment preferences helps build friendships and casual conversation skills.",
              "vocab": [
                {
                  "jp": "どんな〜",
                  "en": "what kind of 〜"
                },
                {
                  "jp": "アクション",
                  "en": "action (genre)"
                }
              ],
              "grammar": "どんな + noun + が すきですか asks for a category or type of preference, not just a yes/no."
            }
          },
          {
            "id": "e2_4",
            "situation": "A coworker invites you for a drink after work. You happily accept.",
            "prompt": "Q：しごとの　あとで、いっしょに　のみに　いきませんか？",
            "choices": [
              {
                "jp": "いいですね、いきましょう",
                "correct": true
              },
              {
                "jp": "いいえ、けっこうです",
                "correct": false
              },
              {
                "jp": "いきません",
                "correct": false
              },
              {
                "jp": "のみました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "After-work social drinks (飲み会) are an important bonding ritual in many Japanese workplaces.",
              "vocab": [
                {
                  "jp": "〜ませんか",
                  "en": "won't you 〜? (soft invitation)"
                },
                {
                  "jp": "〜ましょう",
                  "en": "let's 〜"
                }
              ],
              "grammar": "〜ませんか is a gentle way to invite someone. A happy acceptance pairs naturally with 〜ましょう ('let's')."
            }
          },
          {
            "id": "e2_5",
            "situation": "In a clothing shop, you want a slightly bigger size than what's shown.",
            "prompt": "Q：もうすこし　おおきい　サイズが　ほしいです。なんと　ききますか？",
            "choices": [
              {
                "jp": "もうすこし　おおきいのは　ありますか",
                "correct": true
              },
              {
                "jp": "もうすこし　ちいさく　しました",
                "correct": false
              },
              {
                "jp": "おおきい　サイズは　すきです",
                "correct": false
              },
              {
                "jp": "サイズが　わかりません",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking for a different size or color is one of the most useful shopping phrases for everyday life.",
              "vocab": [
                {
                  "jp": "もうすこし",
                  "en": "a little more"
                },
                {
                  "jp": "サイズ",
                  "en": "size"
                }
              ],
              "grammar": "もうすこし + adjective + のは ありますか asks if a slightly different version is available."
            }
          },
          {
            "id": "e2_6",
            "situation": "A friend asks about your day off. You went to see a movie.",
            "prompt": "Q：やすみの　ひ、なにを　しましたか？",
            "choices": [
              {
                "jp": "えいがを　みに　いきました",
                "correct": true
              },
              {
                "jp": "えいがを　みます",
                "correct": false
              },
              {
                "jp": "えいがが　すきです",
                "correct": false
              },
              {
                "jp": "えいがでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing a recent outing is common small talk after weekends or holidays.",
              "vocab": [
                {
                  "jp": "〜に いきました",
                  "en": "went to (do) 〜"
                },
                {
                  "jp": "みる",
                  "en": "to watch / see"
                }
              ],
              "grammar": "Verb stem + に いきました describes 'went to (do) 〜' — a purpose-of-movement pattern for past trips."
            }
          },
          {
            "id": "e2_7",
            "situation": "You're tired and want to say you'd like to go to a hot spring.",
            "prompt": "Q：つかれました。どこに　いきたいですか？",
            "choices": [
              {
                "jp": "おんせんに　いきたいです",
                "correct": true
              },
              {
                "jp": "おんせんに　いきました",
                "correct": false
              },
              {
                "jp": "おんせんが　あります",
                "correct": false
              },
              {
                "jp": "おんせんは　あついです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Hot springs (温泉) are a beloved way to relax in Japan, and expressing a wish to go is everyday conversational Japanese.",
              "vocab": [
                {
                  "jp": "つかれる",
                  "en": "to get tired"
                },
                {
                  "jp": "〜たいです",
                  "en": "want to 〜"
                }
              ],
              "grammar": "Verb stem + たいです expresses a desire: いきたいです = 'want to go'."
            }
          },
          {
            "id": "e2_8",
            "situation": "A coworker asks about your weekend plans. You're going shopping.",
            "prompt": "Q：しゅうまつ　なにを　しますか？",
            "choices": [
              {
                "jp": "かいものに　いきます",
                "correct": true
              },
              {
                "jp": "かいものでした",
                "correct": false
              },
              {
                "jp": "かいものが　すきでした",
                "correct": false
              },
              {
                "jp": "かいものは　たかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about upcoming plans is one of the most common forms of casual workplace chat.",
              "vocab": [
                {
                  "jp": "しゅうまつ",
                  "en": "weekend"
                },
                {
                  "jp": "かいもの",
                  "en": "shopping"
                }
              ],
              "grammar": "なにを しますか asks about future/intended actions, answered with verb + ます (non-past)."
            }
          },
          {
            "id": "e2_9",
            "situation": "You want to ask permission to take tomorrow off work.",
            "prompt": "Q：あした　やすみを　とりたいです。なんと　たのみますか？",
            "choices": [
              {
                "jp": "あした　やすみを　とっても　いいですか",
                "correct": true
              },
              {
                "jp": "あした　やすみでした",
                "correct": false
              },
              {
                "jp": "あした　やすみは　だめです",
                "correct": false
              },
              {
                "jp": "あした　やすみを　とりました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking permission politely before taking time off is an important workplace skill.",
              "vocab": [
                {
                  "jp": "〜てもいいですか",
                  "en": "may I 〜? (asking permission)"
                },
                {
                  "jp": "やすみを とる",
                  "en": "to take a day off"
                }
              ],
              "grammar": "〜てもいいですか asks for permission: 'may I 〜?'. Useful for requesting time off or anything needing approval."
            }
          },
          {
            "id": "e2_10",
            "situation": "A coworker asks if there's a good restaurant in town. You recommend a ramen shop.",
            "prompt": "Q：このまちで　おすすめの　レストランは　ありますか？",
            "choices": [
              {
                "jp": "はい、いいラーメンやが　あります",
                "correct": true
              },
              {
                "jp": "はい、レストランです",
                "correct": false
              },
              {
                "jp": "いいえ、たかいです",
                "correct": false
              },
              {
                "jp": "はい、たべました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "おすすめ (recommendation) is one of the most useful words for asking locals what's good — food, places, anything.",
              "vocab": [
                {
                  "jp": "おすすめ",
                  "en": "recommendation"
                },
                {
                  "jp": "ラーメンや",
                  "en": "ramen shop"
                }
              ],
              "grammar": "おすすめの + noun + は ありますか asks if there's a recommended option for that category."
            }
          },
          {
            "id": "e2_11",
            "situation": "Someone asks how long your commute to work takes. About 30 minutes by train.",
            "prompt": "Q：かいしゃまで　どのくらい　かかりますか？",
            "choices": [
              {
                "jp": "でんしゃで　さんじゅっぷん　かかります",
                "correct": true
              },
              {
                "jp": "でんしゃが　さんじゅっぷんです",
                "correct": false
              },
              {
                "jp": "でんしゃで　いきました",
                "correct": false
              },
              {
                "jp": "でんしゃは　たかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing how long a commute or trip takes is common small talk and useful for scheduling.",
              "vocab": [
                {
                  "jp": "どのくらい",
                  "en": "how long / how much"
                },
                {
                  "jp": "かかる",
                  "en": "to take (time)"
                }
              ],
              "grammar": "Method + で + duration + かかります describes how long something takes by a given means of transport."
            }
          },
          {
            "id": "e2_12",
            "situation": "A friend asks what you'll do if it rains tomorrow. You'll stay home.",
            "prompt": "Q：あした　あめなら、どうしますか？",
            "choices": [
              {
                "jp": "あめなら、いえに　います",
                "correct": true
              },
              {
                "jp": "あめでも、いえに　います",
                "correct": false
              },
              {
                "jp": "あめが　すきです",
                "correct": false
              },
              {
                "jp": "あめでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "〜なら is a light, very common way to talk about 'if' situations in casual daily conversation.",
              "vocab": [
                {
                  "jp": "〜なら",
                  "en": "if 〜 (casual conditional)"
                },
                {
                  "jp": "いえ",
                  "en": "home"
                }
              ],
              "grammar": "〜なら is simpler and more casual than ば/たら — note the contrast with 〜でも ('even if'), which would give a different meaning."
            }
          },
          {
            "id": "e2_13",
            "situation": "Your phone is broken and you want to ask a repair shop if they can fix it.",
            "prompt": "Q：スマホが　こわれました。しゅうりできますか？",
            "choices": [
              {
                "jp": "はい、できます",
                "correct": true
              },
              {
                "jp": "はい、します",
                "correct": false
              },
              {
                "jp": "はい、しました",
                "correct": false
              },
              {
                "jp": "はい、こわれました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking whether a service is possible is essential when dealing with repairs, deliveries, or any request to a shop.",
              "vocab": [
                {
                  "jp": "こわれる",
                  "en": "to break (intransitive)"
                },
                {
                  "jp": "しゅうりする",
                  "en": "to repair"
                }
              ],
              "grammar": "できますか asks about ability/possibility: 'can you do 〜?'. A direct, simple way to request a service."
            }
          },
          {
            "id": "e2_14",
            "situation": "A friend asks if you have any siblings. You have a younger brother and a younger sister.",
            "prompt": "Q：きょうだいは　いますか？",
            "choices": [
              {
                "jp": "おとうとと　いもうとが　います",
                "correct": true
              },
              {
                "jp": "おとうとと　いもうとが　あります",
                "correct": false
              },
              {
                "jp": "おとうとと　いもうとでした",
                "correct": false
              },
              {
                "jp": "おとうとと　いもうとを　ください",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about family is a natural step once small talk moves past hobbies and food.",
              "vocab": [
                {
                  "jp": "きょうだい",
                  "en": "siblings"
                },
                {
                  "jp": "おとうと",
                  "en": "younger brother"
                },
                {
                  "jp": "いもうと",
                  "en": "younger sister"
                }
              ],
              "grammar": "います is always used for people/family members — あります would be incorrect here since family are living things."
            }
          },
          {
            "id": "e2_15",
            "situation": "Your hotel room is a little cold and you want to politely ask staff to turn off the air conditioning.",
            "prompt": "Q：へやが　ちょっと　さむいです。なんと　いいますか？",
            "choices": [
              {
                "jp": "すみません、れいぼうを　とめてもらえますか",
                "correct": true
              },
              {
                "jp": "れいぼうが　すきです",
                "correct": false
              },
              {
                "jp": "れいぼうを　つけました",
                "correct": false
              },
              {
                "jp": "さむいから　げんきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Politely asking staff to adjust something for your comfort is a very practical service phrase.",
              "vocab": [
                {
                  "jp": "れいぼう",
                  "en": "air conditioning"
                },
                {
                  "jp": "〜てもらえますか",
                  "en": "could you do 〜 for me? (polite request)"
                }
              ],
              "grammar": "〜てもらえますか is a soft, polite way to ask someone to do something for your benefit — gentler than a direct command."
            }
          }
        ]
      },
      {
        "id": "set2",
        "label": "Set 2",
        "questions": [
          {
            "id": "e2-s2-01",
            "situation": "You boarded the wrong train and need to ask how to get back to Shinjuku station.",
            "prompt": "Q：しんじゅくえきに　もどりたいです。なんと　ききますか？",
            "choices": [
              {
                "jp": "しんじゅくえきに　もどりたいです。どう　いきますか",
                "correct": true
              },
              {
                "jp": "しんじゅくえきが　すきです",
                "correct": false
              },
              {
                "jp": "しんじゅくえきでした",
                "correct": false
              },
              {
                "jp": "しんじゅくえきを　あげます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Boarding the wrong train happens to everyone — knowing how to recover politely is a real survival skill.",
              "vocab": [
                {
                  "jp": "もどる",
                  "en": "to go back"
                },
                {
                  "jp": "まちがえる",
                  "en": "to make a mistake"
                }
              ],
              "grammar": "もどりたいです + どう いきますか combines 'I want to go back' with asking how — a useful recovery phrase when lost."
            }
          },
          {
            "id": "e2-s2-02",
            "situation": "You left your umbrella at a station and want to ask station staff if it's been found.",
            "prompt": "Q：かさを　わすれました。えきいんに　なんと　いいますか？",
            "choices": [
              {
                "jp": "かさを　わすれました。ありますか",
                "correct": true
              },
              {
                "jp": "かさを　かりました",
                "correct": false
              },
              {
                "jp": "かさを　かいました",
                "correct": false
              },
              {
                "jp": "かさが　あります",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Lost items happen often, and station staff are used to handling these requests.",
              "vocab": [
                {
                  "jp": "わすれる",
                  "en": "to forget / leave behind"
                },
                {
                  "jp": "えきいん",
                  "en": "station staff"
                }
              ],
              "grammar": "Stating what you lost, then asking ありますか, is the simplest way to report a lost item."
            }
          },
          {
            "id": "e2-s2-03",
            "situation": "Someone compliments your Japanese, saying it's skillful. You respond modestly.",
            "prompt": "Q：にほんごが　じょうずですね、と　いわれました。なんと　こたえますか？",
            "choices": [
              {
                "jp": "いいえ、まだまだです",
                "correct": true
              },
              {
                "jp": "はい、じょうずです",
                "correct": false
              },
              {
                "jp": "ありがとう、じょうずですね",
                "correct": false
              },
              {
                "jp": "いいえ、すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Accepting a compliment too directly can sound boastful in Japanese — modesty is expected.",
              "vocab": [
                {
                  "jp": "じょうず",
                  "en": "skilled"
                },
                {
                  "jp": "まだまだ",
                  "en": "not yet / still a long way to go"
                }
              ],
              "grammar": "いいえ、まだまだです is the standard modest reply to a compliment in Japanese."
            }
          },
          {
            "id": "e2-s2-04",
            "situation": "A friend invites you to a local festival this weekend. You're interested.",
            "prompt": "Q：しゅうまつ、まつりに　いきませんか？",
            "choices": [
              {
                "jp": "いいですね、ぜひ　いきたいです",
                "correct": true
              },
              {
                "jp": "いいえ、まつりです",
                "correct": false
              },
              {
                "jp": "まつりでした",
                "correct": false
              },
              {
                "jp": "まつりが　あります",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Festivals are a fun, common social activity, and accepting enthusiastically is natural.",
              "vocab": [
                {
                  "jp": "まつり",
                  "en": "festival"
                },
                {
                  "jp": "ぜひ",
                  "en": "by all means / definitely"
                }
              ],
              "grammar": "ぜひ adds enthusiasm to accepting an invitation: 'I'd definitely like to'."
            }
          },
          {
            "id": "e2-s2-05",
            "situation": "A coworker asks how your recent trip was. It was fun.",
            "prompt": "Q：りょこうは　どうでしたか？",
            "choices": [
              {
                "jp": "たのしかったです",
                "correct": true
              },
              {
                "jp": "たのしいです",
                "correct": false
              },
              {
                "jp": "たのしみです",
                "correct": false
              },
              {
                "jp": "たのしくないです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Recapping a recent trip is common small talk right after a holiday.",
              "vocab": [
                {
                  "jp": "たのしかった",
                  "en": "was fun (past)"
                },
                {
                  "jp": "りょこう",
                  "en": "trip"
                }
              ],
              "grammar": "Past-tense い-adjective (たのしかった) describes how something was, distinct from the non-past たのしい."
            }
          },
          {
            "id": "e2-s2-06",
            "situation": "At a shop, you ask if there's a discount coupon available, and the clerk offers you one.",
            "prompt": "Q：クーポンは　ありますか？",
            "choices": [
              {
                "jp": "はい、これを　どうぞ",
                "correct": true
              },
              {
                "jp": "はい、たかいです",
                "correct": false
              },
              {
                "jp": "はい、すきです",
                "correct": false
              },
              {
                "jp": "はい、かいました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking about coupons or discounts is a normal part of everyday shopping.",
              "vocab": [
                {
                  "jp": "クーポン",
                  "en": "coupon"
                },
                {
                  "jp": "どうぞ",
                  "en": "here you go / please"
                }
              ],
              "grammar": "どうぞ is used when offering or handing something to someone, like a coupon."
            }
          },
          {
            "id": "e2-s2-07",
            "situation": "You're surprised that something cost more than you expected.",
            "prompt": "Q：おもったより　たかかったです。なんと　いいますか？",
            "choices": [
              {
                "jp": "えっ、たかいですね",
                "correct": true
              },
              {
                "jp": "いいえ、やすいです",
                "correct": false
              },
              {
                "jp": "はい、すきです",
                "correct": false
              },
              {
                "jp": "ありがとうございます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "A small exclamation of surprise is a very natural, human reaction to an unexpected price.",
              "vocab": [
                {
                  "jp": "おもったより",
                  "en": "more than expected"
                },
                {
                  "jp": "えっ",
                  "en": "oh! / huh (surprise)"
                }
              ],
              "grammar": "えっ + comment is a natural way to express mild surprise out loud."
            }
          },
          {
            "id": "e2-s2-08",
            "situation": "You're stuck in heavy traffic and might be late as a result.",
            "prompt": "Q：どうろが　こんでいます。どうなりますか？",
            "choices": [
              {
                "jp": "ちこくするかもしれません",
                "correct": true
              },
              {
                "jp": "はやく　つきます",
                "correct": false
              },
              {
                "jp": "やすいです",
                "correct": false
              },
              {
                "jp": "たのしいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Traffic delays are a universal frustration, and explaining the likely outcome is useful.",
              "vocab": [
                {
                  "jp": "どうろが こんでいる",
                  "en": "the road is congested"
                },
                {
                  "jp": "ちこくする",
                  "en": "to be late"
                }
              ],
              "grammar": "Reinforces 〜かもしれません (might 〜) for talking about possible lateness due to traffic."
            }
          },
          {
            "id": "e2-s2-09",
            "situation": "You want to ask a café if pets are allowed inside. They are.",
            "prompt": "Q：ペットと　いっしょに　はいっても　いいですか？",
            "choices": [
              {
                "jp": "はい、だいじょうぶです",
                "correct": true
              },
              {
                "jp": "はい、ペットです",
                "correct": false
              },
              {
                "jp": "はい、ペットでした",
                "correct": false
              },
              {
                "jp": "はい、ペットを　ください",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Checking pet policies before entering a café or shop avoids an awkward turn-away at the door.",
              "vocab": [
                {
                  "jp": "ペット",
                  "en": "pet"
                },
                {
                  "jp": "だいじょうぶ",
                  "en": "alright / fine"
                }
              ],
              "grammar": "だいじょうぶです is a flexible way to confirm something is fine or permitted."
            }
          },
          {
            "id": "e2-s2-10",
            "situation": "A friend asks about your hobby club. You practice calligraphy every weekend.",
            "prompt": "Q：しゅうまつ、なにを　して　いますか？",
            "choices": [
              {
                "jp": "しょどうを　れんしゅうして　います",
                "correct": true
              },
              {
                "jp": "しょどうを　れんしゅうしました",
                "correct": false
              },
              {
                "jp": "しょどうが　すきでした",
                "correct": false
              },
              {
                "jp": "しょどうを　しました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about a regular weekend hobby is a relaxed, easy conversation topic.",
              "vocab": [
                {
                  "jp": "しょどう",
                  "en": "calligraphy"
                },
                {
                  "jp": "れんしゅうする",
                  "en": "to practice"
                }
              ],
              "grammar": "〜て います describes an ongoing habit or regular activity, like a weekend hobby."
            }
          },
          {
            "id": "e2-s2-11",
            "situation": "A friend invites you out for drinks, but you're too tired tonight and politely decline.",
            "prompt": "Q：のみに　いきませんか？と　さそわれました。つかれて　います。なんと　こたえますか？",
            "choices": [
              {
                "jp": "ありがとうございます、でも　きょうは　つかれて　います",
                "correct": true
              },
              {
                "jp": "いいですね、いきましょう",
                "correct": false
              },
              {
                "jp": "いきません",
                "correct": false
              },
              {
                "jp": "のみました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Thanking someone before declining keeps the relationship warm, even when you have to say no.",
              "vocab": [
                {
                  "jp": "でも",
                  "en": "but"
                },
                {
                  "jp": "つかれている",
                  "en": "is tired"
                }
              ],
              "grammar": "Thanking someone first with ありがとうございます、でも〜 softens a decline, even when tired."
            }
          },
          {
            "id": "e2-s2-12",
            "situation": "Someone asks about your part-time job schedule. You work three times a week.",
            "prompt": "Q：バイトは　しゅうに　なんかい　ありますか？",
            "choices": [
              {
                "jp": "しゅうに　みっかい　あります",
                "correct": true
              },
              {
                "jp": "しゅうに　みっつ　あります",
                "correct": false
              },
              {
                "jp": "しゅうに　みっかげつ　あります",
                "correct": false
              },
              {
                "jp": "しゅうに　みっかん　あります",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing how often you work part-time is useful when discussing your weekly schedule.",
              "vocab": [
                {
                  "jp": "バイト",
                  "en": "part-time job"
                },
                {
                  "jp": "しゅうに〜かい",
                  "en": "〜 times per week"
                }
              ],
              "grammar": "かい is the counter for occurrences/times — しゅうに みっかい = 'three times a week'."
            }
          },
          {
            "id": "e2-s2-13",
            "situation": "You ask a restaurant if they can deliver food to your hotel.",
            "prompt": "Q：ホテルまで　はいたつできますか？",
            "choices": [
              {
                "jp": "はい、できます",
                "correct": true
              },
              {
                "jp": "はい、します",
                "correct": false
              },
              {
                "jp": "はい、しました",
                "correct": false
              },
              {
                "jp": "はい、ほしいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking about delivery options is common when staying somewhere without easy access to restaurants.",
              "vocab": [
                {
                  "jp": "はいたつ",
                  "en": "delivery"
                }
              ],
              "grammar": "Reinforces できますか for asking about a service's availability."
            }
          },
          {
            "id": "e2-s2-14",
            "situation": "Comparing two train types, you say the express is faster than the local.",
            "prompt": "Q：きゅうこうと　ふつう、どちらが　はやいですか？",
            "choices": [
              {
                "jp": "きゅうこうのほうが　はやいです",
                "correct": true
              },
              {
                "jp": "ふつうのほうが　はやいです",
                "correct": false
              },
              {
                "jp": "どちらも　おそいです",
                "correct": false
              },
              {
                "jp": "きゅうこうは　たかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Choosing between express and local trains is a daily decision for many commuters in Japan.",
              "vocab": [
                {
                  "jp": "きゅうこう",
                  "en": "express train"
                },
                {
                  "jp": "ふつう",
                  "en": "local / ordinary train"
                }
              ],
              "grammar": "Reinforces 〜のほうが〜 comparisons, now applied to transportation choices."
            }
          },
          {
            "id": "e2-s2-15",
            "situation": "Someone asks if the seat next to you is taken. It's free.",
            "prompt": "Q：この　せきは　あいていますか？",
            "choices": [
              {
                "jp": "はい、どうぞ",
                "correct": true
              },
              {
                "jp": "はい、すきです",
                "correct": false
              },
              {
                "jp": "はい、たかいです",
                "correct": false
              },
              {
                "jp": "はい、つかれました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Checking if a seat is free is a small, everyday courtesy on trains, buses, and in cafés.",
              "vocab": [
                {
                  "jp": "あいている",
                  "en": "is empty / available"
                },
                {
                  "jp": "どうぞ",
                  "en": "please / go ahead"
                }
              ],
              "grammar": "あいていますか asks if a seat is free; どうぞ politely invites someone to take it."
            }
          }
        ]
      },
      {
        "id": "set3",
        "label": "Set 3",
        "questions": [
          {
            "id": "e2-s3-01",
            "situation": "Your train IC card balance is low and you need to top it up.",
            "prompt": "Q：ICカードの　チャージを　したいです。なんと　いいますか？",
            "choices": [
              {
                "jp": "チャージを　おねがいします",
                "correct": true
              },
              {
                "jp": "チャージを　しました",
                "correct": false
              },
              {
                "jp": "チャージが　あります",
                "correct": false
              },
              {
                "jp": "チャージでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Topping up a transit IC card is a routine task for daily commuting.",
              "vocab": [
                {
                  "jp": "チャージする",
                  "en": "to top up / recharge"
                },
                {
                  "jp": "ICカード",
                  "en": "IC transit card"
                }
              ],
              "grammar": "〜を おねがいします is a simple, polite way to request a service, like a top-up."
            }
          },
          {
            "id": "e2-s3-02",
            "situation": "You have a slight fever and want to tell your supervisor.",
            "prompt": "Q：ねつが　あります。じょうしに　なんと　いいますか？",
            "choices": [
              {
                "jp": "すみません、ねつが　あります",
                "correct": true
              },
              {
                "jp": "すみません、ねつが　すきです",
                "correct": false
              },
              {
                "jp": "すみません、ねつでした",
                "correct": false
              },
              {
                "jp": "すみません、ねつを　あげます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Reporting a fever clearly and early helps your workplace plan around your absence.",
              "vocab": [
                {
                  "jp": "ねつ",
                  "en": "fever"
                }
              ],
              "grammar": "Symptom + が あります reports a physical condition simply, the same pattern as あたまが いたいです."
            }
          },
          {
            "id": "e2-s3-03",
            "situation": "At a restaurant, you ask if they can prepare a dish without meat.",
            "prompt": "Q：にくが　はいって　いない　りょうりは　ありますか？",
            "choices": [
              {
                "jp": "はい、やさいりょうりが　あります",
                "correct": true
              },
              {
                "jp": "はい、にくが　すきです",
                "correct": false
              },
              {
                "jp": "はい、にくでした",
                "correct": false
              },
              {
                "jp": "はい、にくを　ください",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking about dietary options is increasingly common and well understood at restaurants.",
              "vocab": [
                {
                  "jp": "にくが はいっていない",
                  "en": "doesn't contain meat"
                },
                {
                  "jp": "やさいりょうり",
                  "en": "vegetable dish"
                }
              ],
              "grammar": "〜が はいっていない describes an ingredient's absence — useful for dietary requests."
            }
          },
          {
            "id": "e2-s3-04",
            "situation": "You're saving money for a trip to Japan next year.",
            "prompt": "Q：なんの　ために　おかねを　ちょきんして　いますか？",
            "choices": [
              {
                "jp": "にほん　りょこうの　ためです",
                "correct": true
              },
              {
                "jp": "にほん　りょこうでした",
                "correct": false
              },
              {
                "jp": "にほん　りょこうが　あります",
                "correct": false
              },
              {
                "jp": "にほん　りょこうを　しました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about savings goals is common when discussing future plans with friends or family.",
              "vocab": [
                {
                  "jp": "ちょきんする",
                  "en": "to save money"
                },
                {
                  "jp": "〜の ために",
                  "en": "for the purpose of 〜"
                }
              ],
              "grammar": "〜の ために states a purpose or goal: 'for the sake of 〜' — here, saving for a trip."
            }
          },
          {
            "id": "e2-s3-05",
            "situation": "You're apartment hunting and want one close to the station.",
            "prompt": "Q：どんな　アパートが　ほしいですか？",
            "choices": [
              {
                "jp": "えきに　ちかい　アパートが　いいです",
                "correct": true
              },
              {
                "jp": "えきに　ちかい　アパートでした",
                "correct": false
              },
              {
                "jp": "えきに　ちかい　アパートを　あげます",
                "correct": false
              },
              {
                "jp": "えきに　ちかい　アパートが　あります",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Stating your priorities clearly helps a real estate agent find the right place faster.",
              "vocab": [
                {
                  "jp": "ちかい",
                  "en": "close / near"
                },
                {
                  "jp": "アパート",
                  "en": "apartment"
                }
              ],
              "grammar": "〜が いいです expresses a preference: 'I'd prefer 〜' — softer than 〜が ほしいです."
            }
          },
          {
            "id": "e2-s3-06",
            "situation": "A coworker was just promoted, and you congratulate them.",
            "prompt": "Q：どうりょうが　しょうしんしました。なんと　いいますか？",
            "choices": [
              {
                "jp": "おめでとうございます",
                "correct": true
              },
              {
                "jp": "おつかれさまでした",
                "correct": false
              },
              {
                "jp": "ごめんなさい",
                "correct": false
              },
              {
                "jp": "いただきます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Congratulating a coworker on career milestones is a small but meaningful workplace gesture.",
              "vocab": [
                {
                  "jp": "しょうしん",
                  "en": "promotion"
                }
              ],
              "grammar": "おめでとうございます reused for a workplace achievement, like a promotion."
            }
          },
          {
            "id": "e2-s3-07",
            "situation": "You're not sure how to sort your trash and ask your neighbor for guidance.",
            "prompt": "Q：ごみの　すてかたが　わかりません。なんと　ききますか？",
            "choices": [
              {
                "jp": "ごみは　どう　わければ　いいですか",
                "correct": true
              },
              {
                "jp": "ごみは　どこに　いますか",
                "correct": false
              },
              {
                "jp": "ごみは　なんじですか",
                "correct": false
              },
              {
                "jp": "ごみが　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Trash-sorting rules vary a lot by area in Japan, so asking a neighbor is completely normal.",
              "vocab": [
                {
                  "jp": "ごみ",
                  "en": "trash"
                },
                {
                  "jp": "わける",
                  "en": "to sort / separate"
                }
              ],
              "grammar": "どう〜たら いいですか asks 'how should I 〜?' — a flexible pattern for asking for guidance."
            }
          },
          {
            "id": "e2-s3-08",
            "situation": "Someone asks about tomorrow's weather forecast. It's expected to be sunny.",
            "prompt": "Q：あしたの　てんきは　どうですか？",
            "choices": [
              {
                "jp": "はれるそうです",
                "correct": true
              },
              {
                "jp": "はれました",
                "correct": false
              },
              {
                "jp": "はれが　すきです",
                "correct": false
              },
              {
                "jp": "はれを　ください",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Sharing forecast information (which you heard or read, not witnessed yourself) uses a special reporting grammar.",
              "vocab": [
                {
                  "jp": "〜そうです",
                  "en": "I heard that 〜 / it seems that 〜 (from a source)"
                },
                {
                  "jp": "はれる",
                  "en": "to become sunny / clear"
                }
              ],
              "grammar": "〜そうです reports information you heard or read, like a weather forecast — 'it seems it'll be sunny'."
            }
          },
          {
            "id": "e2-s3-09",
            "situation": "You call a restaurant to reserve a table for 4 people tonight.",
            "prompt": "Q：こんばん、よにんで　よやく　したいです。なんと　いいますか？",
            "choices": [
              {
                "jp": "よにんで　よやく　おねがいします",
                "correct": true
              },
              {
                "jp": "よにんが　いました",
                "correct": false
              },
              {
                "jp": "よにんを　ください",
                "correct": false
              },
              {
                "jp": "よにんでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Making a restaurant reservation by phone is a common practical task while living or traveling in Japan.",
              "vocab": [
                {
                  "jp": "よやく",
                  "en": "reservation"
                }
              ],
              "grammar": "Reinforces 〜おねがいします for making a reservation request."
            }
          },
          {
            "id": "e2-s3-10",
            "situation": "You're running late and want to message that you'll arrive in 10 minutes.",
            "prompt": "Q：じゅっぷん　おくれます。なんと　れんらくしますか？",
            "choices": [
              {
                "jp": "すみません、じゅっぷん　おくれます",
                "correct": true
              },
              {
                "jp": "すみません、じゅっぷん　はやいです",
                "correct": false
              },
              {
                "jp": "すみません、じゅっぷん　かかりました",
                "correct": false
              },
              {
                "jp": "すみません、じゅっぷん　いました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Giving an exact number of minutes is clearer and more considerate than a vague apology for being late.",
              "vocab": [
                {
                  "jp": "おくれる",
                  "en": "to be late"
                },
                {
                  "jp": "れんらくする",
                  "en": "to contact"
                }
              ],
              "grammar": "Stating the exact number of minutes you'll be late is clearer and more considerate than a vague apology."
            }
          },
          {
            "id": "e2-s3-11",
            "situation": "Someone is speaking too fast for you to follow, and you ask them to slow down.",
            "prompt": "Q：はやくて　わかりません。なんと　たのみますか？",
            "choices": [
              {
                "jp": "もう　すこし　ゆっくり　おねがいします",
                "correct": true
              },
              {
                "jp": "もう　いちど　おねがいします",
                "correct": false
              },
              {
                "jp": "もっと　はやく　おねがいします",
                "correct": false
              },
              {
                "jp": "もっと　おおきく　おねがいします",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking someone to slow down (rather than repeat) is a distinct, very useful listening-comprehension request.",
              "vocab": [
                {
                  "jp": "ゆっくり",
                  "en": "slowly"
                },
                {
                  "jp": "もう すこし",
                  "en": "a little more"
                }
              ],
              "grammar": "もう すこし ゆっくり おねがいします politely asks someone to slow down — useful for listening comprehension."
            }
          },
          {
            "id": "e2-s3-12",
            "situation": "Someone asks about your exercise habit. You jog every morning.",
            "prompt": "Q：うんどうは　して　いますか？",
            "choices": [
              {
                "jp": "まいあさ　ジョギングして　います",
                "correct": true
              },
              {
                "jp": "まいあさ　ジョギングでした",
                "correct": false
              },
              {
                "jp": "まいあさ　ジョギングを　しました",
                "correct": false
              },
              {
                "jp": "まいあさ　ジョギングが　すきでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about daily exercise habits is common, easy small talk about health and routine.",
              "vocab": [
                {
                  "jp": "うんどう",
                  "en": "exercise"
                },
                {
                  "jp": "ジョギング",
                  "en": "jogging"
                },
                {
                  "jp": "まいあさ",
                  "en": "every morning"
                }
              ],
              "grammar": "〜て います again describes a regular ongoing habit, like a daily exercise routine."
            }
          },
          {
            "id": "e2-s3-13",
            "situation": "There's a power outage in your building, and you ask a neighbor if their room is affected too.",
            "prompt": "Q：ていでんしました。となりの　へやも　ですか？",
            "choices": [
              {
                "jp": "はい、うちも　ていでんしています",
                "correct": true
              },
              {
                "jp": "はい、うちは　げんきです",
                "correct": false
              },
              {
                "jp": "はい、うちは　あついです",
                "correct": false
              },
              {
                "jp": "はい、うちは　たかいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Confirming whether a problem like a power outage is shared helps figure out if it's building-wide.",
              "vocab": [
                {
                  "jp": "ていでん",
                  "en": "power outage"
                }
              ],
              "grammar": "Confirming a shared problem (like a power outage) with も is a natural way to check if others are affected too."
            }
          },
          {
            "id": "e2-s3-14",
            "situation": "You're not sure if a bottle counts as burnable or non-burnable trash.",
            "prompt": "Q：この　びんは　もえる　ごみですか、もえない　ごみですか？",
            "choices": [
              {
                "jp": "もえない　ごみです",
                "correct": true
              },
              {
                "jp": "もえる　ごみです",
                "correct": false
              },
              {
                "jp": "ごみじゃないです",
                "correct": false
              },
              {
                "jp": "ごみが　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Correctly sorting burnable and non-burnable trash is an important, sometimes strictly enforced, rule in Japan.",
              "vocab": [
                {
                  "jp": "もえる ごみ",
                  "en": "burnable trash"
                },
                {
                  "jp": "もえない ごみ",
                  "en": "non-burnable trash"
                }
              ],
              "grammar": "もえる/もえない + ごみ distinguishes trash categories — an important distinction to know."
            }
          },
          {
            "id": "e2-s3-15",
            "situation": "You're at a café and want to ask for the wifi password.",
            "prompt": "Q：Wi-Fiの　パスワードを　ききたいです。なんと　いいますか？",
            "choices": [
              {
                "jp": "すみません、パスワードを　おしえて　ください",
                "correct": true
              },
              {
                "jp": "すみません、パスワードを　あげます",
                "correct": false
              },
              {
                "jp": "すみません、パスワードでした",
                "correct": false
              },
              {
                "jp": "すみません、パスワードが　すきです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking for the wifi password is one of the most common requests at any café today.",
              "vocab": [
                {
                  "jp": "パスワード",
                  "en": "password"
                },
                {
                  "jp": "おしえる",
                  "en": "to tell / teach"
                }
              ],
              "grammar": "おしえて ください reused here for asking someone to tell you information, like a password."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "prein",
    "title": "Pre-Intermediate",
    "jp": "初中級",
    "level": "A2/B1",
    "blurb": "Reasons, experience, opinions, polite requests, advice.",
    "sets": [
      {
        "id": "set1",
        "label": "Set 1",
        "questions": [
          {
            "id": "pi1",
            "situation": "Explaining why you're not going out: it's raining.",
            "prompt": "Q：なぜ　でかけませんか？",
            "choices": [
              {
                "jp": "あめが　ふっているから、でかけません",
                "correct": true
              },
              {
                "jp": "あめが　ふったり、でかけません",
                "correct": false
              },
              {
                "jp": "あめが　ふって、でかけました",
                "correct": false
              },
              {
                "jp": "あめが　ふるなら、でかけます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Giving a simple cause-and-effect reason is one of the most frequent things you'll need to say in daily conversation.",
              "vocab": [
                {
                  "jp": "ふる",
                  "en": "to fall (of rain/snow)"
                },
                {
                  "jp": "〜から",
                  "en": "because 〜"
                }
              ],
              "grammar": "Clause + から + result gives a reason: 'Because X, Y'. から attaches directly after a plain-form clause."
            }
          },
          {
            "id": "pi2",
            "situation": "Someone asks if you've ever been to Japan. You have.",
            "prompt": "Q：にほんに　いったことが　ありますか？",
            "choices": [
              {
                "jp": "はい、いったことが　あります",
                "correct": true
              },
              {
                "jp": "はい、いきます",
                "correct": false
              },
              {
                "jp": "はい、いっています",
                "correct": false
              },
              {
                "jp": "はい、いきましたね",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about past experiences — travel, food tried, things you've done — comes up constantly once conversations move past the basics.",
              "vocab": [
                {
                  "jp": "〜たことが あります",
                  "en": "have done 〜 before (experience)"
                }
              ],
              "grammar": "Past-tense (た form) verb + ことが あります expresses past experience: 'have done 〜 before'."
            }
          },
          {
            "id": "pi3",
            "situation": "A teacher asks for your opinion on studying Japanese. It's fun but difficult.",
            "prompt": "Q：にほんごの　べんきょうは　どうですか？",
            "choices": [
              {
                "jp": "たのしいですが、むずかしいです",
                "correct": true
              },
              {
                "jp": "たのしいでした",
                "correct": false
              },
              {
                "jp": "たのしいに　なります",
                "correct": false
              },
              {
                "jp": "たのしいと　いいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Giving a balanced opinion — one good point and one challenge — sounds much more natural than a flat yes/no answer.",
              "vocab": [
                {
                  "jp": "〜が",
                  "en": "but 〜 (contrast)"
                },
                {
                  "jp": "たのしい",
                  "en": "fun / enjoyable"
                },
                {
                  "jp": "むずかしい",
                  "en": "difficult"
                }
              ],
              "grammar": "Adjective + が + contrasting adjective links two opposing ideas: 'fun, but difficult'."
            }
          },
          {
            "id": "pi4",
            "situation": "You politely ask a customer or superior to open the window.",
            "prompt": "Q：まどを　あけて　もらいたいです。ていねいに　たのみます。",
            "choices": [
              {
                "jp": "まどを　あけて　いただけますか",
                "correct": true
              },
              {
                "jp": "まどを　あけて　くださいね",
                "correct": false
              },
              {
                "jp": "まどが　あいています",
                "correct": false
              },
              {
                "jp": "まどを　あけます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "This is the level of politeness you'd use with a customer, client, or someone above you — more formal than a request to a friend.",
              "vocab": [
                {
                  "jp": "〜て いただけますか",
                  "en": "could you possibly 〜? (very polite request)"
                }
              ],
              "grammar": "〜て いただけますか is more formal than 〜て ください — appropriate for requests to superiors or customers."
            }
          },
          {
            "id": "pi5",
            "situation": "Comparing English and Japanese — you find English easier.",
            "prompt": "Q：にほんごと　えいご、どちらが　やさしいですか？",
            "choices": [
              {
                "jp": "えいごのほうが　やさしいです",
                "correct": true
              },
              {
                "jp": "にほんごのほうが　やさしいです",
                "correct": false
              },
              {
                "jp": "えいごは　やさしくないです",
                "correct": false
              },
              {
                "jp": "どちらも　やさしいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Comparing two things directly is a step up from simple description — useful for opinions and decisions alike.",
              "vocab": [
                {
                  "jp": "〜のほうが〜",
                  "en": "〜 is more 〜 (comparative)"
                },
                {
                  "jp": "どちら",
                  "en": "which (of two)"
                }
              ],
              "grammar": "A と B、どちらが〜 asks for a comparison; answer with 'X のほうが〜です' ('X is more 〜')."
            }
          },
          {
            "id": "pi6",
            "situation": "Proposing a plan that depends on having free time later.",
            "prompt": "Q：じかんが　あったら、なにを　しましょうか？",
            "choices": [
              {
                "jp": "もし　じかんが　あれば、いっしょに　いきましょう",
                "correct": true
              },
              {
                "jp": "じかんが　あるから、いきません",
                "correct": false
              },
              {
                "jp": "じかんが　あっても、いきません",
                "correct": false
              },
              {
                "jp": "じかんが　ないので、いきましょう",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Hypothetical plans ('if this happens, then let's do that') are common when scheduling with coworkers or friends.",
              "vocab": [
                {
                  "jp": "もし〜ば",
                  "en": "if 〜 (conditional)"
                },
                {
                  "jp": "いっしょに",
                  "en": "together"
                }
              ],
              "grammar": "もし + verb/adjective ば-form sets up a hypothetical condition: 'if 〜, then 〜'."
            }
          },
          {
            "id": "pi7",
            "situation": "Giving friendly advice: someone should sleep early before a busy day.",
            "prompt": "Q：あした　はやいので、アドバイスを　ください。",
            "choices": [
              {
                "jp": "はやく　ねた　ほうが　いいです",
                "correct": true
              },
              {
                "jp": "はやく　ねて　いいです",
                "correct": false
              },
              {
                "jp": "はやく　ねないと　いけませんね",
                "correct": false
              },
              {
                "jp": "はやく　ねるなら、いいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "This is one of the most common ways to give friendly, casual advice in Japanese — gentler than a direct command.",
              "vocab": [
                {
                  "jp": "〜たほうがいいです",
                  "en": "you should 〜 (advice)"
                },
                {
                  "jp": "はやく",
                  "en": "early"
                }
              ],
              "grammar": "Past-tense (た form) + ほうが いいです gives advice: 'you should do 〜'."
            }
          },
          {
            "id": "pi8",
            "situation": "Explaining a work obligation: you must go to work even though it's a holiday.",
            "prompt": "Q：きょうは　やすみですが、しごとに　いきますか？",
            "choices": [
              {
                "jp": "はい、いかなければ　なりません",
                "correct": true
              },
              {
                "jp": "はい、いっても　いいです",
                "correct": false
              },
              {
                "jp": "はい、いかないでください",
                "correct": false
              },
              {
                "jp": "はい、いきたくないです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Expressing obligation — things you must do whether you want to or not — is essential for talking about work and rules.",
              "vocab": [
                {
                  "jp": "〜なければ なりません",
                  "en": "must do 〜 (obligation)"
                }
              ],
              "grammar": "Verb negative (ない form) + なければ なりません expresses obligation: 'must do 〜 / have to 〜'."
            }
          },
          {
            "id": "pi9",
            "situation": "Describing your morning routine: you eat breakfast, then go to work.",
            "prompt": "Q：あさ、なにを　してから　しごとに　いきますか？",
            "choices": [
              {
                "jp": "あさごはんを　たべてから、いきます",
                "correct": true
              },
              {
                "jp": "あさごはんを　たべるから、いきます",
                "correct": false
              },
              {
                "jp": "あさごはんを　たべるなら、いきます",
                "correct": false
              },
              {
                "jp": "あさごはんを　たべても、いきます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing the order you do things in is essential for talking about daily routines and instructions.",
              "vocab": [
                {
                  "jp": "〜てから",
                  "en": "after doing 〜, then 〜"
                },
                {
                  "jp": "あさごはん",
                  "en": "breakfast"
                }
              ],
              "grammar": "Verb て-form + から describes a clear sequence: 'after doing X, then Y' — different from から meaning 'because'."
            }
          },
          {
            "id": "pi10",
            "situation": "Your friend did you a favor by lending you money. You want to describe this using くれる (someone did something for me).",
            "prompt": "Q：ともだちが　おかねを　かして＿＿＿。",
            "choices": [
              {
                "jp": "くれました",
                "correct": true
              },
              {
                "jp": "あげました",
                "correct": false
              },
              {
                "jp": "もらいました",
                "correct": false
              },
              {
                "jp": "ください",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Japanese has three different 'give/receive' verbs depending on who benefits — this is a classic point of confusion for learners.",
              "vocab": [
                {
                  "jp": "〜て くれる",
                  "en": "someone does something for me/us"
                },
                {
                  "jp": "あげる",
                  "en": "to give (to others)"
                },
                {
                  "jp": "もらう",
                  "en": "to receive"
                }
              ],
              "grammar": "〜て くれました expresses that someone did you a favor. あげる is for giving to others, もらう for receiving — they are not interchangeable."
            }
          },
          {
            "id": "pi11",
            "situation": "Reporting what your boss told you earlier: the meeting starts at 10.",
            "prompt": "Q：じょうしは　なんと　いっていましたか？",
            "choices": [
              {
                "jp": "かいぎは　じゅうじからだと　いっていました",
                "correct": true
              },
              {
                "jp": "かいぎは　じゅうじです",
                "correct": false
              },
              {
                "jp": "かいぎは　じゅうじでした",
                "correct": false
              },
              {
                "jp": "かいぎは　じゅうじに　いきました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Relaying information someone else said is common when passing on instructions or messages at work.",
              "vocab": [
                {
                  "jp": "〜と いっていました",
                  "en": "said that 〜 (reported speech)"
                },
                {
                  "jp": "かいぎ",
                  "en": "meeting"
                }
              ],
              "grammar": "Plain-form clause + だ + と いっていました reports what someone else said, rather than stating it as your own fact."
            }
          },
          {
            "id": "pi12",
            "situation": "You want to suggest going out together with a friend.",
            "prompt": "Q：ともだちと　いっしょに　でかけたいです。なんと　さそいますか？",
            "choices": [
              {
                "jp": "いっしょに　いきましょうか",
                "correct": true
              },
              {
                "jp": "いっしょに　いきますか",
                "correct": false
              },
              {
                "jp": "いっしょに　いきたいですか",
                "correct": false
              },
              {
                "jp": "いっしょに　いきましたか",
                "correct": false
              }
            ],
            "ai": {
              "situation": "〜ましょうか is a warm, inviting way to propose doing something together, softer than a plain yes/no question.",
              "vocab": [
                {
                  "jp": "〜ましょうか",
                  "en": "shall we 〜?"
                },
                {
                  "jp": "さそう",
                  "en": "to invite"
                }
              ],
              "grammar": "〜ましょうか offers or suggests a joint action — more inviting in tone than 〜ますか."
            }
          },
          {
            "id": "pi13",
            "situation": "Describing how the weather has changed recently: it has gotten colder.",
            "prompt": "Q：さいきん　てんきは　どう　かわりましたか？",
            "choices": [
              {
                "jp": "さむく　なりました",
                "correct": true
              },
              {
                "jp": "さむいに　なりました",
                "correct": false
              },
              {
                "jp": "さむいでした",
                "correct": false
              },
              {
                "jp": "さむく　します",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about gradual change — weather, prices, feelings — comes up constantly in everyday conversation.",
              "vocab": [
                {
                  "jp": "〜く なりました",
                  "en": "became 〜 (change of state)"
                }
              ],
              "grammar": "i-adjective stem + く なりました expresses a change of state: 'became 〜'. Note さむい drops い and adds く."
            }
          },
          {
            "id": "pi14",
            "situation": "Someone asks if you can speak Japanese now. You can, a little.",
            "prompt": "Q：にほんごが　はなせますか？",
            "choices": [
              {
                "jp": "はい、ちょっと　はなせます",
                "correct": true
              },
              {
                "jp": "はい、ちょっと　はなします",
                "correct": false
              },
              {
                "jp": "はい、ちょっと　はなしました",
                "correct": false
              },
              {
                "jp": "はい、ちょっと　はなしたいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about what you're able to do is a milestone moment for learners — it shows real progress.",
              "vocab": [
                {
                  "jp": "はなせる",
                  "en": "can speak (potential form of はなす)"
                }
              ],
              "grammar": "The potential form (e.g. はなせる from はなす) expresses ability: 'can do 〜', distinct from the plain non-past form."
            }
          },
          {
            "id": "pi15",
            "situation": "A coworker invites you for drinks tonight, but you already have plans. You decline politely without sounding blunt.",
            "prompt": "Q：今日　いっしょに　のみに　いきませんか？と　さそわれました。よていが　あります。なんと　こたえますか？",
            "choices": [
              {
                "jp": "すみません、今日は　ちょっと　よていが　あって…",
                "correct": true
              },
              {
                "jp": "いいですね、いきましょう",
                "correct": false
              },
              {
                "jp": "いきません",
                "correct": false
              },
              {
                "jp": "のみました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Trailing off softly instead of saying a flat 'no' is a very natural, commonly used way to decline in Japanese without sounding rude.",
              "vocab": [
                {
                  "jp": "よてい",
                  "en": "plans / schedule"
                },
                {
                  "jp": "ちょっと〜あって…",
                  "en": "trailing off to soften a refusal"
                }
              ],
              "grammar": "Leaving a sentence unfinished after ちょっと〜あって… politely implies 'I can't' without directly refusing."
            }
          }
        ]
      },
      {
        "id": "set2",
        "label": "Set 2",
        "questions": [
          {
            "id": "pi-s2-01",
            "situation": "You're preparing documents in advance for tomorrow's meeting.",
            "prompt": "Q：あしたの　かいぎの　ために、いま　なにを　しますか？",
            "choices": [
              {
                "jp": "しょるいを　じゅんびして　おきます",
                "correct": true
              },
              {
                "jp": "しょるいを　じゅんびします",
                "correct": false
              },
              {
                "jp": "しょるいを　じゅんびしました",
                "correct": false
              },
              {
                "jp": "しょるいを　じゅんびして　います",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Preparing things in advance for a future need is a common, practical workplace habit.",
              "vocab": [
                {
                  "jp": "〜て おく",
                  "en": "to do something in advance / for later"
                },
                {
                  "jp": "じゅんびする",
                  "en": "to prepare"
                }
              ],
              "grammar": "〜て おきます describes doing something now in preparation for later — different from simply doing the action."
            }
          },
          {
            "id": "pi-s2-02",
            "situation": "You like listening to music while working.",
            "prompt": "Q：しごとちゅう、おんがくを　ききますか？",
            "choices": [
              {
                "jp": "はい、ききながら　しごとを　します",
                "correct": true
              },
              {
                "jp": "はい、ききました、しごとです",
                "correct": false
              },
              {
                "jp": "はい、きいて、しごとでした",
                "correct": false
              },
              {
                "jp": "はい、きくとき、しごとです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Doing two things at once, like listening to music while working, is a daily reality for many people.",
              "vocab": [
                {
                  "jp": "〜ながら",
                  "en": "while doing 〜 (simultaneous actions)"
                }
              ],
              "grammar": "Verb stem + ながら + another verb describes two actions happening at the same time by the same person."
            }
          },
          {
            "id": "pi-s2-03",
            "situation": "You studied hard, but you still failed the test — an unexpected, disappointing contrast.",
            "prompt": "Q：べんきょうしましたが、テストは　どうでしたか？",
            "choices": [
              {
                "jp": "べんきょうしたのに、おちました",
                "correct": true
              },
              {
                "jp": "べんきょうしたから、おちました",
                "correct": false
              },
              {
                "jp": "べんきょうしたら、おちました",
                "correct": false
              },
              {
                "jp": "べんきょうしても、うかりました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Expressing disappointment over an unexpected outcome is a very human, relatable thing to say.",
              "vocab": [
                {
                  "jp": "〜のに",
                  "en": "even though 〜 (unexpected contrast)"
                },
                {
                  "jp": "おちる",
                  "en": "to fail (a test)"
                }
              ],
              "grammar": "〜のに expresses an unexpected or disappointing contrast: 'even though X, Y happened' — a different nuance from が."
            }
          },
          {
            "id": "pi-s2-04",
            "situation": "You tasted a dish and it's far too spicy.",
            "prompt": "Q：この　りょうりは　どうですか？",
            "choices": [
              {
                "jp": "からすぎます",
                "correct": true
              },
              {
                "jp": "からいです",
                "correct": false
              },
              {
                "jp": "からくないです",
                "correct": false
              },
              {
                "jp": "からそうです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Saying something is 'too much' of a quality is common when food, prices, or anything else goes to an extreme.",
              "vocab": [
                {
                  "jp": "〜すぎる",
                  "en": "too much 〜"
                },
                {
                  "jp": "からい",
                  "en": "spicy"
                }
              ],
              "grammar": "い-adjective stem + すぎる expresses excess: 'too 〜'. からすぎます = 'too spicy'."
            }
          },
          {
            "id": "pi-s2-05",
            "situation": "You're eager to be the one to explain your idea in the meeting, and ask to be allowed to.",
            "prompt": "Q：かいぎで　アイデアを　せつめいしたいです。なんと　たのみますか？",
            "choices": [
              {
                "jp": "せつめいさせて　ください",
                "correct": true
              },
              {
                "jp": "せつめいして　ください",
                "correct": false
              },
              {
                "jp": "せつめいさせます",
                "correct": false
              },
              {
                "jp": "せつめいさせられます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Asking to be allowed to take initiative on something sounds more proactive than a neutral permission request.",
              "vocab": [
                {
                  "jp": "〜させて ください",
                  "en": "please let me do 〜"
                },
                {
                  "jp": "せつめいする",
                  "en": "to explain"
                }
              ],
              "grammar": "〜させて ください asks for permission to do something yourself, often when you want to take the initiative."
            }
          },
          {
            "id": "pi-s2-06",
            "situation": "You're telling a friend about a city they may not know — Kyoto.",
            "prompt": "Q：しらない　まちの　なまえを　いう　とき、なんと　いいますか？",
            "choices": [
              {
                "jp": "きょうとという　まちに　いきました",
                "correct": true
              },
              {
                "jp": "きょうとの　まちに　いきました",
                "correct": false
              },
              {
                "jp": "きょうとを　まちに　いきました",
                "correct": false
              },
              {
                "jp": "きょうとが　まちに　いきました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Introducing an unfamiliar place, thing, or person by name is common when the listener may not know it.",
              "vocab": [
                {
                  "jp": "〜という",
                  "en": "called 〜 / named 〜"
                }
              ],
              "grammar": "Noun + という + noun introduces something by name, especially when the listener might not know it."
            }
          },
          {
            "id": "pi-s2-07",
            "situation": "Someone calls right as you've just arrived home.",
            "prompt": "Q：いえに　ついた　とき、でんわが　かかってきました。なんと　いいますか？",
            "choices": [
              {
                "jp": "いま、いえに　ついた　ところです",
                "correct": true
              },
              {
                "jp": "いま、いえに　つく　ところです",
                "correct": false
              },
              {
                "jp": "いま、いえに　ついて　います",
                "correct": false
              },
              {
                "jp": "いま、いえに　つきます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Saying something just happened, moments ago, is useful for explaining your current situation.",
              "vocab": [
                {
                  "jp": "〜たところです",
                  "en": "just did 〜 (very recent completion)"
                }
              ],
              "grammar": "Verb past (た form) + ところです emphasizes that something just happened, very recently."
            }
          },
          {
            "id": "pi-s2-08",
            "situation": "Based on the schedule, your colleague should already be home.",
            "prompt": "Q：どうりょうは　もう　いえに　いますか？",
            "choices": [
              {
                "jp": "はい、もう　いえに　いる　はずです",
                "correct": true
              },
              {
                "jp": "はい、もう　いえに　いきました",
                "correct": false
              },
              {
                "jp": "はい、もう　いえに　いきます",
                "correct": false
              },
              {
                "jp": "はい、もう　いえに　いて　ください",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Stating a confident expectation, based on known facts like a schedule, is more precise than guessing.",
              "vocab": [
                {
                  "jp": "〜はずです",
                  "en": "should be 〜 / is expected to be 〜"
                }
              ],
              "grammar": "〜はずです expresses a confident expectation based on reasoning or known information — not a random guess."
            }
          },
          {
            "id": "pi-s2-09",
            "situation": "You want to make sure you arrive on time from now on.",
            "prompt": "Q：これから　どうしますか？",
            "choices": [
              {
                "jp": "じかんに　まにあうように　します",
                "correct": true
              },
              {
                "jp": "じかんに　まにあったら　します",
                "correct": false
              },
              {
                "jp": "じかんに　まにあうかもしれません",
                "correct": false
              },
              {
                "jp": "じかんに　まにあう　ところです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing a conscious effort to improve a habit, like punctuality, is common in workplace conversations.",
              "vocab": [
                {
                  "jp": "〜ように します",
                  "en": "try to make sure that 〜"
                },
                {
                  "jp": "まにあう",
                  "en": "to be on time / make it in time"
                }
              ],
              "grammar": "〜ように します expresses a conscious effort to make something happen: 'I'll try to make sure that 〜'."
            }
          },
          {
            "id": "pi-s2-10",
            "situation": "It has been decided, by the company, that you'll be transferred to Osaka next month.",
            "prompt": "Q：らいげつから　どこで　はたらきますか？",
            "choices": [
              {
                "jp": "おおさかで　はたらく　ことに　なりました",
                "correct": true
              },
              {
                "jp": "おおさかで　はたらきたいです",
                "correct": false
              },
              {
                "jp": "おおさかで　はたらく　はずです",
                "correct": false
              },
              {
                "jp": "おおさかで　はたらいて　みます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing decisions made by your company or circumstances, rather than by you personally, comes up often at work.",
              "vocab": [
                {
                  "jp": "〜ことに なりました",
                  "en": "it has been decided that 〜 (often externally decided)"
                }
              ],
              "grammar": "〜ことに なりました describes a decision made by circumstances or others — contrast with 〜ことに しました, a decision you made yourself."
            }
          },
          {
            "id": "pi-s2-11",
            "situation": "You just ate, so you're full and want to decline a bit more food.",
            "prompt": "Q：もっと　たべませんか？",
            "choices": [
              {
                "jp": "いいえ、たべた　ばかりです",
                "correct": true
              },
              {
                "jp": "いいえ、たべて　います",
                "correct": false
              },
              {
                "jp": "いいえ、たべる　ところです",
                "correct": false
              },
              {
                "jp": "いいえ、たべる　はずです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Politely explaining you just ate is a natural way to decline more food without seeming rude.",
              "vocab": [
                {
                  "jp": "〜たばかり",
                  "en": "just did 〜 (very recent action)"
                }
              ],
              "grammar": "〜た ばかりです emphasizes that very little time has passed since the action: 'just did 〜'."
            }
          },
          {
            "id": "pi-s2-12",
            "situation": "Your boss says you'll talk about next month's project.",
            "prompt": "Q：じょうしが「らいげつの　プロジェクトに　ついて　はなしましょう」と　いいました。なにを　はなしますか？",
            "choices": [
              {
                "jp": "らいげつの　プロジェクトの　ことです",
                "correct": true
              },
              {
                "jp": "らいげつの　プロジェクトに　いきます",
                "correct": false
              },
              {
                "jp": "らいげつの　プロジェクトを　あげます",
                "correct": false
              },
              {
                "jp": "らいげつの　プロジェクトでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Understanding what topic a conversation will cover helps you prepare your thoughts in advance.",
              "vocab": [
                {
                  "jp": "〜について",
                  "en": "about / regarding 〜"
                }
              ],
              "grammar": "〜について marks the topic being discussed: 'about/regarding 〜'."
            }
          },
          {
            "id": "pi-s2-13",
            "situation": "Your boss praised you in front of the team — describe this from your own point of view.",
            "prompt": "Q：じょうしが　あなたを　ほめました。あなたの　たちばで　いうと？",
            "choices": [
              {
                "jp": "じょうしに　ほめられました",
                "correct": true
              },
              {
                "jp": "じょうしを　ほめました",
                "correct": false
              },
              {
                "jp": "じょうしが　ほめます",
                "correct": false
              },
              {
                "jp": "じょうしに　ほめます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about something done to you, like being praised, often uses a different verb form than describing the doer's action.",
              "vocab": [
                {
                  "jp": "ほめる",
                  "en": "to praise"
                },
                {
                  "jp": "ほめられる",
                  "en": "to be praised (passive)"
                }
              ],
              "grammar": "The passive form (e.g. ほめられる from ほめる) shifts focus onto the receiver of the action: 'I was praised (by my boss)'."
            }
          },
          {
            "id": "pi-s2-14",
            "situation": "Someone asks your opinion on whether it'll rain tomorrow. You think it will.",
            "prompt": "Q：あした、あめが　ふると　おもいますか？",
            "choices": [
              {
                "jp": "はい、ふると　おもいます",
                "correct": true
              },
              {
                "jp": "はい、ふって　います",
                "correct": false
              },
              {
                "jp": "はい、ふる　はずです",
                "correct": false
              },
              {
                "jp": "はい、ふった　ばかりです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Sharing your own opinion or belief, rather than a fact, is common when discussing uncertain things like weather.",
              "vocab": [
                {
                  "jp": "〜と おもいます",
                  "en": "I think that 〜"
                }
              ],
              "grammar": "〜と おもいます states a personal opinion or belief — answering with the same pattern keeps the tone consistent when asked this way."
            }
          },
          {
            "id": "pi-s2-15",
            "situation": "You heard from a coworker, secondhand, that the new manager is very strict.",
            "prompt": "Q：あたらしい　ぶちょうは　どんな　ひとですか？",
            "choices": [
              {
                "jp": "きびしい　ひとらしいです",
                "correct": true
              },
              {
                "jp": "きびしい　ひとと　おもいます",
                "correct": false
              },
              {
                "jp": "きびしい　ひとに　なりました",
                "correct": false
              },
              {
                "jp": "きびしい　ひとに　しました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Sharing information you heard from someone else, rather than your own opinion, uses a distinct grammar pattern.",
              "vocab": [
                {
                  "jp": "〜らしい",
                  "en": "seems like 〜 (based on what you've heard)"
                }
              ],
              "grammar": "〜らしい expresses a conclusion based on what you've heard or observed indirectly — distinct from と思います, your own opinion."
            }
          }
        ]
      },
      {
        "id": "set3",
        "label": "Set 3",
        "questions": [
          {
            "id": "pi-s3-01",
            "situation": "You believe that the more you practice Japanese, the better you'll get.",
            "prompt": "Q：にほんごの　れんしゅうについて、どう　おもいますか？",
            "choices": [
              {
                "jp": "れんしゅうすれば　するほど、じょうずに　なります",
                "correct": true
              },
              {
                "jp": "れんしゅうしたら、じょうずに　なりました",
                "correct": false
              },
              {
                "jp": "れんしゅうするなら、じょうずです",
                "correct": false
              },
              {
                "jp": "れんしゅうしても、じょうずに　なりません",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Expressing a proportional relationship — more effort, more result — is a natural way to talk about progress.",
              "vocab": [
                {
                  "jp": "〜ば〜ほど",
                  "en": "the more 〜, the more 〜"
                }
              ],
              "grammar": "〜ば〜ほど expresses a proportional relationship: 'the more you do X, the more Y happens'."
            }
          },
          {
            "id": "pi-s3-02",
            "situation": "Every time you visit Japan, you buy new stationery.",
            "prompt": "Q：にほんに　いくと、いつも　なにを　しますか？",
            "choices": [
              {
                "jp": "にほんに　いく　たびに、ぶんぐを　かいます",
                "correct": true
              },
              {
                "jp": "にほんに　いった　ところで、ぶんぐを　かいます",
                "correct": false
              },
              {
                "jp": "にほんに　いく　ばかり、ぶんぐを　かいます",
                "correct": false
              },
              {
                "jp": "にほんに　いく　まま、ぶんぐを　かいます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing a habit that repeats every single time a certain event happens is common in storytelling.",
              "vocab": [
                {
                  "jp": "〜たびに",
                  "en": "every time 〜"
                }
              ],
              "grammar": "〜たびに describes something that happens every single time a certain event occurs."
            }
          },
          {
            "id": "pi-s3-03",
            "situation": "You forgot to close the window, and it stayed open all night, unchanged.",
            "prompt": "Q：まどは　どう　なって　いましたか？",
            "choices": [
              {
                "jp": "まどは　あけた　ままでした",
                "correct": true
              },
              {
                "jp": "まどは　あけた　ばかりでした",
                "correct": false
              },
              {
                "jp": "まどは　あける　ところでした",
                "correct": false
              },
              {
                "jp": "まどは　あける　はずでした",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing something left unchanged since an earlier action — like a forgotten open window — is a useful, specific nuance.",
              "vocab": [
                {
                  "jp": "〜たまま",
                  "en": "left as is, unchanged (after doing something)"
                }
              ],
              "grammar": "〜たまま describes a state left unchanged since an action was completed — the window was left open without being closed again."
            }
          },
          {
            "id": "pi-s3-04",
            "situation": "You want to humbly ask your boss to let you take tomorrow off.",
            "prompt": "Q：じょうしに　ていねいに　たのみます。あした　やすみたいです。",
            "choices": [
              {
                "jp": "あした　やすませて　もらえますか",
                "correct": true
              },
              {
                "jp": "あした　やすんで　もらえますか",
                "correct": false
              },
              {
                "jp": "あした　やすませて　あげます",
                "correct": false
              },
              {
                "jp": "あした　やすみを　もらいます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "This very polite, humble request pattern is common when asking a superior for a favor like time off.",
              "vocab": [
                {
                  "jp": "〜させてもらえますか",
                  "en": "could you let me 〜? (humble causative request)"
                }
              ],
              "grammar": "〜させてもらえますか combines the causative (させる, 'let someone do') with もらう (receiving a favor) for a humble, polite request."
            }
          },
          {
            "id": "pi-s3-05",
            "situation": "After thinking it over, you personally decided to become a teacher.",
            "prompt": "Q：しょうらい、なにに　なりたいですか？けっていしました。",
            "choices": [
              {
                "jp": "せんせいに　なる　ことに　しました",
                "correct": true
              },
              {
                "jp": "せんせいに　なる　ことに　なりました",
                "correct": false
              },
              {
                "jp": "せんせいに　なる　はずです",
                "correct": false
              },
              {
                "jp": "せんせいに　なる　ばかりです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Talking about a personal decision you made yourself, like a career choice, comes up in many serious conversations.",
              "vocab": [
                {
                  "jp": "〜ことに しました",
                  "en": "I decided to 〜 (your own decision)"
                }
              ],
              "grammar": "〜ことに しました marks a decision you made yourself — contrast with 〜ことに なりました, often decided by circumstances or others."
            }
          },
          {
            "id": "pi-s3-06",
            "situation": "You forgot your umbrella on the train and feel annoyed about it.",
            "prompt": "Q：かさを　でんしゃに　わすれました。きもちは　どうですか？",
            "choices": [
              {
                "jp": "かさを　わすれて　しまいました",
                "correct": true
              },
              {
                "jp": "かさを　わすれて　います",
                "correct": false
              },
              {
                "jp": "かさを　わすれる　ところです",
                "correct": false
              },
              {
                "jp": "かさを　わすれる　はずです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Adding a sense of regret to a completed action — like forgetting something — makes your speech sound more natural.",
              "vocab": [
                {
                  "jp": "〜て しまう",
                  "en": "to end up doing 〜 (often with regret)"
                }
              ],
              "grammar": "〜て しまいました adds a nuance of regret or unintended consequence to a completed action."
            }
          },
          {
            "id": "pi-s3-07",
            "situation": "You always wash your hands before eating.",
            "prompt": "Q：いつ　てを　あらいますか？",
            "choices": [
              {
                "jp": "たべる　まえに　あらいます",
                "correct": true
              },
              {
                "jp": "たべた　あとで　あらいます",
                "correct": false
              },
              {
                "jp": "たべながら　あらいます",
                "correct": false
              },
              {
                "jp": "たべる　あいだに　あらいます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Sequencing two actions clearly — what happens before what — is essential for describing routines.",
              "vocab": [
                {
                  "jp": "〜まえに",
                  "en": "before doing 〜"
                }
              ],
              "grammar": "Verb (plain non-past) + まえに describes doing something before another action — the verb stays non-past even in past contexts."
            }
          },
          {
            "id": "pi-s3-08",
            "situation": "You'll check your email after the meeting ends.",
            "prompt": "Q：いつ　メールを　みますか？",
            "choices": [
              {
                "jp": "かいぎが　おわった　あとで　みます",
                "correct": true
              },
              {
                "jp": "かいぎが　おわる　まえに　みます",
                "correct": false
              },
              {
                "jp": "かいぎが　おわりながら　みます",
                "correct": false
              },
              {
                "jp": "かいぎが　おわる　あいだに　みます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "The counterpart to まえに, this pattern describes doing something only after another action has finished.",
              "vocab": [
                {
                  "jp": "〜たあとで",
                  "en": "after doing 〜"
                }
              ],
              "grammar": "Verb (past form) + あとで describes doing something after another action has finished."
            }
          },
          {
            "id": "pi-s3-09",
            "situation": "You're introducing yourself formally in a business setting.",
            "prompt": "Q：しごとで　じこしょうかいします。なんと　いいますか？",
            "choices": [
              {
                "jp": "たなかと　もうします",
                "correct": true
              },
              {
                "jp": "たなかと　いって　います",
                "correct": false
              },
              {
                "jp": "たなかと　いう",
                "correct": false
              },
              {
                "jp": "たなかと　もういます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Business self-introductions in Japan often use a more humble register than everyday conversation.",
              "vocab": [
                {
                  "jp": "〜と もうします",
                  "en": "humble form of 'I am called' / 'my name is'"
                }
              ],
              "grammar": "もうします is a humble (謙譲語) version of いいます, typically used in formal or business self-introductions."
            }
          },
          {
            "id": "pi-s3-10",
            "situation": "You're respectfully reporting what your teacher said in class.",
            "prompt": "Q：せんせいが　なんと　いいましたか？ていねいに　いって　ください。",
            "choices": [
              {
                "jp": "せんせいが　そう　おっしゃいました",
                "correct": true
              },
              {
                "jp": "せんせいが　そう　いいました",
                "correct": false
              },
              {
                "jp": "せんせいが　そう　もうしました",
                "correct": false
              },
              {
                "jp": "せんせいが　そう　いって　あげました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Using respectful language when talking about what a teacher or superior said shows appropriate deference.",
              "vocab": [
                {
                  "jp": "おっしゃる",
                  "en": "to say (respectful, used for others of higher status)"
                }
              ],
              "grammar": "おっしゃる is the respectful (尊敬語) version of 言う, used when talking about what a respected person said."
            }
          },
          {
            "id": "pi-s3-11",
            "situation": "Your supervisor tells you that you don't have to come in this Saturday.",
            "prompt": "Q：どようびは　しごとに　きますか？",
            "choices": [
              {
                "jp": "いいえ、こなくても　いいです",
                "correct": true
              },
              {
                "jp": "いいえ、こないで　ください",
                "correct": false
              },
              {
                "jp": "いいえ、こなければ　なりません",
                "correct": false
              },
              {
                "jp": "いいえ、きても　いいです",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Knowing you don't have to do something is just as important as knowing you must — both come up constantly at work.",
              "vocab": [
                {
                  "jp": "〜なくてもいいです",
                  "en": "don't have to 〜"
                }
              ],
              "grammar": "〜なくても いいです is the opposite of 〜なければ なりません: 'you don't have to 〜'."
            }
          },
          {
            "id": "pi-s3-12",
            "situation": "You speak slowly on purpose so that beginners can understand you.",
            "prompt": "Q：なぜ　ゆっくり　はなしますか？",
            "choices": [
              {
                "jp": "しょしんしゃが　わかるように、はなします",
                "correct": true
              },
              {
                "jp": "しょしんしゃが　わかったら、はなします",
                "correct": false
              },
              {
                "jp": "しょしんしゃが　わかれば、はなします",
                "correct": false
              },
              {
                "jp": "しょしんしゃが　わかっても、はなします",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Explaining the purpose behind a deliberate choice, like speaking slowly for beginners, shows thoughtful intent.",
              "vocab": [
                {
                  "jp": "〜ように",
                  "en": "so that 〜 (purpose)"
                },
                {
                  "jp": "しょしんしゃ",
                  "en": "beginner"
                }
              ],
              "grammar": "〜ように expresses a purpose: 'so that 〜 can happen' — here, speaking slowly so beginners can understand."
            }
          },
          {
            "id": "pi-s3-13",
            "situation": "You only need one copy of the document, not more.",
            "prompt": "Q：コピーは　なんまい　ひつようですか？",
            "choices": [
              {
                "jp": "いちまいだけで　いいです",
                "correct": true
              },
              {
                "jp": "いちまいだけが　あります",
                "correct": false
              },
              {
                "jp": "いちまいだけでした",
                "correct": false
              },
              {
                "jp": "いちまいだけを　あげます",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Limiting a request to exactly what you need avoids waste and is a practical, common workplace phrase.",
              "vocab": [
                {
                  "jp": "〜だけ",
                  "en": "only 〜"
                }
              ],
              "grammar": "〜だけ で いいです limits a request to exactly what's needed: 'just 〜 is fine'."
            }
          },
          {
            "id": "pi-s3-14",
            "situation": "You followed your supervisor's instructions exactly when filling out a form.",
            "prompt": "Q：しょるいは　どう　かきましたか？",
            "choices": [
              {
                "jp": "じょうしに　いわれた　とおりに　かきました",
                "correct": true
              },
              {
                "jp": "じょうしに　いわれる　まえに　かきました",
                "correct": false
              },
              {
                "jp": "じょうしに　いわれながら　かきました",
                "correct": false
              },
              {
                "jp": "じょうしに　いわれる　ように　かきました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Describing precise compliance with instructions is useful when confirming you did a task correctly.",
              "vocab": [
                {
                  "jp": "〜とおりに",
                  "en": "exactly as 〜 / just as instructed"
                }
              ],
              "grammar": "〜とおりに describes doing something exactly as instructed or shown."
            }
          },
          {
            "id": "pi-s3-15",
            "situation": "While you were out of the office, a client called.",
            "prompt": "Q：るすの　あいだ、なにが　ありましたか？",
            "choices": [
              {
                "jp": "るすの　あいだに、おきゃくさんから　でんわが　ありました",
                "correct": true
              },
              {
                "jp": "るすの　ときから、おきゃくさんから　でんわが　ありました",
                "correct": false
              },
              {
                "jp": "るすの　あとで、おきゃくさんから　でんわが　ありました",
                "correct": false
              },
              {
                "jp": "るすの　ばかり、おきゃくさんから　でんわが　ありました",
                "correct": false
              }
            ],
            "ai": {
              "situation": "Reporting something that happened during a window of time you were away is common after returning to the office.",
              "vocab": [
                {
                  "jp": "〜あいだに",
                  "en": "during 〜 / while 〜 (within a time window)"
                }
              ],
              "grammar": "〜あいだに marks something that happened at some point within a time window — often used when something occurs while you were away or busy."
            }
          }
        ]
      }
    ]
  }
];
