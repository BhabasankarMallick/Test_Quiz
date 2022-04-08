let questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    numb: 2,
    question: "The fundamental principle is that Article 14 forbids class legislation but permits reasonable classification for the purpose of legislation which classification must satisfy the twin tests of classification being founded on an intelligible differentia which distinguishes persons or things that are grouped together from those that are left out of the group and that differentia must have a rational nexus to the object sought to be achieved by the Statute in question. The thrust of Article 14 is that the citizen is entitled to equality before law and equal protection of laws. In the very nature of things the society being composed of unequals a welfare State will have to strive by both executive and legislative action to help the less fortunate in society to ameliorate their condition so that the social and economic inequality in the society may be bridged. This would necessitate a legislative ",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 6,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    numb: 7,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    numb: 8,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    numb: 9,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    numb: 10,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 11,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    numb: 12,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    numb: 13,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    numb: 14,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    numb: 15,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
];

const opts = ["A", "B", "C", "D"];
class QuesStats {
  constructor() {
    this.total = questions.length;
    this._correct = 0;
    this._incorrect = 0;
    this.answeredQuestions = new Set();
  }

  get answered() {
    return this.answeredQuestions.size;
  }

  get notAnswered() {
    return this.total - this.answeredQuestions.size;
  }

  get correct() {
    return this._correct;
  }

  get incorrect() {
    return this._incorrect;
  }

  answer(id) {
    const [_, sl] = id.split("-");
    if (this.answeredQuestions.has(sl)) {
      return;
    }
    const el = document.getElementById(id);

    const selectedAnswer = el.getElementsByTagName("span")[1].innerHTML;
    const rightAnswer = questions[sl - 1].answer;
    const rightAnswerIndex = questions[sl - 1].options.indexOf(rightAnswer);

    if (selectedAnswer === rightAnswer) {
      el.classList.add("correct");
      this._correct += 1;
    } else {
      document
        .getElementById(`opt-${sl}-${opts[rightAnswerIndex]}`)
        .classList.add("correct");
      el.classList.add("incorrect");
      this._incorrect += 1;
    }

    this.answeredQuestions.add(sl);
    this.loadPreview();
  }

  statsPreview() {
    return `<span class="bg-sky-500 chip"><span class="chip-text">Total</span><span class="chip-num">${this.total}</span></span>
    <span class="bg-green-500 chip"><span class="chip-text">Correct</span><span class="chip-num">${this.correct}</span></span>
    <span class="bg-rose-500 chip"><span class="chip-text">Incorrect</span><span class="chip-num">${this.incorrect}</span></span>
    <span class="bg-slate-500 chip"><span class="chip-text">Not answered</span><span class="chip-num">${this.notAnswered}</span></span>`;
  }

  loadPreview() {
    document.getElementById("stats").innerHTML = this.statsPreview();
  }

  loadQuestions() {
    const ques = questions.map((q) => {
      const question = `<div class="box-1"><span class="question-num">${q.numb}</span><div class="question">${q.question}</div></div>`;
      const options = q.options.map((option, _i) => {
        const id = "opt-" + q.numb + "-" + opts[_i];
        return `<div class="option" id="${id}" onclick="xd.answer('${id}')"><span class="option-prefix">${opts[_i]}.</span><span>${option}</span></div>`;
      });
      return `<section class="q-section">
      ${question}
      ${options.join("\n")}
      </section>`;
    });

    document.getElementById("questions").innerHTML = ques.join("\n");
  }

  updateStats;
}

const xd = new QuesStats();

window.addEventListener("load", () => {
  xd.loadPreview();
  xd.loadQuestions();
});