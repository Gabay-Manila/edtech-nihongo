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
      }
    ]
  }
];
