/************************     הוראות חשובות      ***********************/

/**
 
 1.   במידה וזאת פעם ראשונה שלכם ממלאים תוכן בלומדה, קראו את **קובץ הוורד** המצורף בתקייה
 2.   בעמוד זה יש למלא את הפרטים לגבי כל המידע והתוכן המבוקש
 3.   [amountOfQuestions במשתנה] לשים לב שבכל נושא צריך לכתוב את *כמות השאלות המקסימלית* שתלקח ממנו
      **משתנה זה מתייחס רק לשאלות שיילקחו בשביל **המבחן
 */


/************************      הכנס כותרת ראשית שהיא שם הלומדה      ***********************/
const TITLE = "שם לדוגמה של לומדה";

/****     הכנס כמות כוללת מקסימלית של שאלות למבחן. יש לשים לב לכמות השאלות הקיימות מהבהד - שלא כמות שלא קיימת   *******/
// const AMOUNT_EXAM_QUESTIONS = 10;

/************************      הכנס כמות זמן התחלתית של המבחן      ***********************/
const TIME_FOR_EXAM = "7:00";

// אובייקט המכיל את כל המידע של הלומדה הכולל את התוכן, השאלות לכל נושא וכמות השאלות שיילקח מכל נושא למבחן
const DATA = { 
    // שם נושא
    "הכנס שם של נושא": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "multiple",
                question: "שאלה על חתולים",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "אל תלחצו! זה טעות",
                correctAns: "ans2"
            },
            {
                type: "binary",
                sentence: "עוד שאלה נכונה על חתולים",
                trueOrFalse: true
            }
        ],
        "amountOfQuestions": 2,
        "learningContent": {
            "תת נושא 1": {
                "תת תת נושא 11": [ 
                    {
                        cardType: "text",
                        content: "כאן ייכתב הרבה טקסט לפי השיעור או הקורס הנבחר. מומלץ לא לשים יותר מידי תוכן מיותר מאחר ויש הרבה כרטיסיות שצריך לזכור בסופו של דבר ולכן יש להיות תמציתיים! כאן ייכתב הרבה טקסט לפי השיעור או הקורס הנבחר. מומלץ לא לשים יותר מידי תוכן מיותר מאחר ויש הרבה כרטיסיות שצריך לזכור בסופו של דבר ולכן יש להיות תמציתיים! "
                    },
                    {
                        cardType: "textTwoParagraphs",
                        text1: "כאן ייכתב הרבה טקסט לפי השיעור או הקורס הנבחר. מומלץ לא לשים יותר מידי תוכן מיותר מאחר ויש הרבה כרטיסיות שצריך לזכור בסופו של דבר ולכן יש להיות תמציתיים! כאן ייכתב הרבה טקסט לפי השיעור או הקורס הנבחר. מומלץ לאיים! ",
                        text2: "כאן ייכתב הרבה טקסט לפי השיעור או הקורס הנבחר. מומלץ לא לשים יותר מידי תוכן מיותר מאחר ויש הרבה כרטיסיות שצריך לזכור בסופו של דבר ולכן יש להיות תמציתיים! כאן ייכתב הרבה טקסט לפי השיעור או הקורס הנבחר. מומלץ יות תמציתיים! "
                    },
                    {
                        cardType: "textThreeParagraphs",
                        text1: "כאן ייכתב הרבה טקסט לפי השיעור ן מהיות תמציתיים! ",
                        text2: "כאן ייכתב הרבה טקסט לפי השיעור או הקורס הנבחר. מומלץ לא לשים יותר מי הרבה כרטיסיות שצריך לזכור בסופו של דבר ולכן יש להיות תמציתיים! ",
                        text3: "כאן ייכתב הרבה טקסט לפי השיעור או הקורס הנבחר. מומלץ לא לשים יותר מידי תוכן מיותר מאחר ויש הרבה כרטיסיות שצריך לזכור בסופו של דבר ולכן יש להיות תמציתיים! כאן ייכתב הרבה טק להיות תמציתיים! "
                    },
                    {
                        cardType: "videoAndText",
                        video: "../assets/images/פתיח.mp4",
                        content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
                    }
                ],
                "תת תת נושא 2": [
                    {
                        cardType: "twoPics",
                        pic1: "../assets/images/pic.png",
                        content1: "דוגמה לכותרת לתמונה הראשונה",
                        pic2: "../assets/images/pic.png",
                        content2: "דוגמה לכותרת לתמונה השנייה"
                    }
                ],
                'תרופה לבה"ד 10': [
                    {
                        cardType: "pic_4titles_4text",
                        pic: "../assets/images/pic.png",
                        subTitle1: "מה הסכנות?",
                        content1: "סכנה גדולה מאוד",
                        subTitle2: "מה היתרונות?",
                        content2: "זה יכול להכיל מלא מלא יתרונות, במיוחד כאלה ארוכים במיוחד כדי להראות איך נכנס פה הרבה טקסט. מקווה שאהבתם את הלומדה תודה רבה שלום.",
                        subTitle3: "מי קהל היעד?",
                        content3: "אין קהל יעד. תרקדו",
                        subTitle4: "אין לי רעיון לעוד כותרת",
                        content4: "חבל מאוד אז סתם נזרוק פה תוכן שיראה כאילו יש פה תוכן אבל לא באמת...",
                    },
                    {
                        cardType: "_3titles_3text",
                        subTitle1: "מה הסכנות?",
                        content1: "סכנה גדולה מאוד",
                        subTitle2: "מה היתרונות?",
                        content2: "זה יכול להכיל מלא מלא יתרונות, במיוחד כאלה ארוכים במיוחד כדי להראות איך נכנס פה הרבה טקסט. מקווה שאהבתם את הלומדה תודה רבה שלום.",
                        subTitle3: "מי קהל היעד?",
                        content3: "אין קהל יעד. תרקדו",
                    },

                ],

            },
            "תת נושא 2": {
                "תת תת נושא 25": [
                    {
                        cardType: "videoAndText",
                        video: "../assets/images/פתיח.mp4",
                        content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
                    }
                ],
                "תת תת נושא 42": [
                    {
                        cardType: "text",
                        content: "מלא מילים של נושא ספיציפי, שנראה לי שייצא יפה אבל בואו נגלה יחדיו!"
                    }
                ]
            },
            "תת נושא 3": {
                "תת תת נושא 12": [
                    {
                        cardType: "videoAndText",
                        video: "../assets/images/פתיח.mp4",
                        content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
                    }
                ],
                // "תת תת נושא 23": [
                //     {
                //         cardType: "twoPics",
                //         pic1: "../assets/images/Artboard 1 copy 2@2x.png",
                //         content1: "זה דוגמה לתמונה מוצלחת ראשונה",
                //         // subTitle1: "זה דוגמה לתמונה מוצלחת ראשונה",
                //         pic2: "../assets/images/Artboard 1 copy 2@2x.png",
                //         content2: "זה דוגמה לתמונה מוצלחת שנייה"
                //         // subTitle2: "זה דוגמה לתמונה מוצלחת שנייה"
                //     }
                // ]
            },
            "תת נושא 4": {
                "תת תת נושא 12": [
                    {
                        cardType: "videoAndText",
                        video: "../assets/images/פתיח.mp4",
                        content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
                    }
                ],
                // "תת תת נושא 23": [
                //     {
                //         cardType: "twoPics",
                //         pic1: "../assets/images/Artboard 1 copy 2@2x.png",
                //         content1: "זה דוגמה לתמונה מוצלחת ראשונה",
                //         // subTitle1: "זה דוגמה לתמונה מוצלחת ראשונה",
                //         pic2: "../assets/images/Artboard 1 copy 2@2x.png",
                //         content2: "זה דוגמה לתמונה מוצלחת שנייה"
                //         // subTitle2: "זה דוגמה לתמונה מוצלחת שנייה"
                //     }
                // ]
            },
            "תת נושא 5": {
                "תת תת נושא 12": [
                    {
                        cardType: "videoAndText",
                        video: "../assets/images/פתיח.mp4",
                        content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
                    }
                ],
                // "תת תת נושא 23": [
                //     {
                //         cardType: "twoPics",
                //         pic1: "../assets/images/Artboard 1 copy 2@2x.png",
                //         content1: "זה דוגמה לתמונה מוצלחת ראשונה",
                //         // subTitle1: "זה דוגמה לתמונה מוצלחת ראשונה",
                //         pic2: "../assets/images/Artboard 1 copy 2@2x.png",
                //         content2: "זה דוגמה לתמונה מוצלחת שנייה"
                //         // subTitle2: "זה דוגמה לתמונה מוצלחת שנייה"
                //     }
                // ]
            }
        },
    },
    // שם נושא
    "2שם של נושא": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "multiple",
                question: "שאלהה שאלתית ששואלת מלא שאלות",
                ans1: "תשובה כלשהית  נכונה",
                ans2: "תשובה לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "אל תלחצו! זה טעות",
                correctAns: "ans1"
            },
            {
                type: "binary",
                sentence: "עוד שאלה לא נכונה על חתולים",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלה על מכוניות",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "תלחצו עליי אני תשובה נכונה",
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: "שאלה שאלתית על מכוניות וזה משפט ארוך",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה תשובה ממש נכונה!",
                ans4: "אל תלחצו עליי אני תשובה לא נכונה",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "עוד שאלה על מכוניות שנוסעות ממש ממש מהר והיא לא נכונה בכלל",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "היי זאת תשובה לא נכונה",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלהה שאלתית ששואלת מלא שאלות",
                ans1: "תשובה כלשהית  נכונה",
                ans2: "תשובה לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "אל תלחצו! זה טעות",
                correctAns: "ans1"
            },
            {
                type: "binary",
                sentence: "עוד שאלה לא נכונה על חתולים",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלה על מכוניות",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "תלחצו עליי אני תשובה נכונה",
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: "שאלה שאלתית על מכוניות וזה משפט ארוך",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה תשובה ממש נכונה!",
                ans4: "אל תלחצו עליי אני תשובה לא נכונה",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "עוד שאלה על מכוניות שנוסעות ממש ממש מהר והיא לא נכונה בכלל",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "היי זאת תשובה לא נכונה",
                trueOrFalse: false
            }
        ],
        "amountOfQuestions": 2,
        "learningContent": {
            // סוג הכרטיסייה
            "textAndPic": {

            }
        },
        
    },
    // שם נושא
    "3שם של נושא": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "multiple",
                question: "שאלהה שאלתית ששואלת מלא שאלות",
                ans1: "תשובה כלשהית  נכונה",
                ans2: "תשובה לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "אל תלחצו! זה טעות",
                correctAns: "ans1"
            },
            {
                type: "binary",
                sentence: "עוד שאלה לא נכונה על חתולים",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלה על מכוניות",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "תלחצו עליי אני תשובה נכונה",
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: "שאלה שאלתית על מכוניות וזה משפט ארוך",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה תשובה ממש נכונה!",
                ans4: "אל תלחצו עליי אני תשובה לא נכונה",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "עוד שאלה על מכוניות שנוסעות ממש ממש מהר והיא לא נכונה בכלל",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "היי זאת תשובה לא נכונה",
                trueOrFalse: false
            }
        ],
        "learningContent": {
            // סוג הכרטיסייה
            "textAndPic": {

            }
        },
        "amountOfQuestions": 0
    },
    "4שם של נושא": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "multiple",
                question: "שאלהה שאלתית ששואלת מלא שאלות",
                ans1: "תשובה כלשהית  נכונה",
                ans2: "תשובה לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "אל תלחצו! זה טעות",
                correctAns: "ans1"
            },
            {
                type: "binary",
                sentence: "עוד שאלה לא נכונה על חתולים",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלה על מכוניות",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "תלחצו עליי אני תשובה נכונה",
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: "שאלה שאלתית על מכוניות וזה משפט ארוך",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה תשובה ממש נכונה!",
                ans4: "אל תלחצו עליי אני תשובה לא נכונה",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "עוד שאלה על מכוניות שנוסעות ממש ממש מהר והיא לא נכונה בכלל",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "היי זאת תשובה לא נכונה",
                trueOrFalse: false
            }
        ],
        "learningContent": {
            // סוג הכרטיסייה
            "textAndPic": {

            }
        },
        "amountOfQuestions": 0
    },
    "5שם של נושא": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "multiple",
                question: "שאלהה שאלתית ששואלת מלא שאלות",
                ans1: "תשובה כלשהית  נכונה",
                ans2: "תשובה לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "אל תלחצו! זה טעות",
                correctAns: "ans1"
            },
            {
                type: "binary",
                sentence: "עוד שאלה לא נכונה על חתולים",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלה על מכוניות",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "תלחצו עליי אני תשובה נכונה",
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: "שאלה שאלתית על מכוניות וזה משפט ארוך",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה תשובה ממש נכונה!",
                ans4: "אל תלחצו עליי אני תשובה לא נכונה",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "עוד שאלה על מכוניות שנוסעות ממש ממש מהר והיא לא נכונה בכלל",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "היי זאת תשובה לא נכונה",
                trueOrFalse: false
            }
        ],
        "learningContent": {
            // סוג הכרטיסייה
            "textAndPic": {

            }
        },
        "amountOfQuestions": 0
    }
};



/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/
/*****  אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה  ********/

/**
 * @type {{[index: string]: {init: (card: HTMLElement, json: any) => void}}}
 */
let CARD_TYPES = {};

CARD_TYPES.text = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
    }
}

CARD_TYPES.textTwoParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
    }
}

CARD_TYPES.textThreeParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
        card.querySelector(".text3").innerHTML = json.text3;
    }
}

CARD_TYPES.picAndText = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.twoPics = {
    init(card, json) {
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".pic2").src = json.pic2;
        card.querySelector(".content2").innerHTML = json.content2;
    }
}
CARD_TYPES.video = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
    }
}
CARD_TYPES.videoAndText = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.pic_4titles_4text = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
        card.querySelector(".sub-title4").innerHTML = json.subTitle4;
        card.querySelector(".content4").innerHTML = json.content4;
    }
}
CARD_TYPES._3titles_3text = {
    init(card, json) {
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
    }
}