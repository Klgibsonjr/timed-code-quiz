const startBtn = document.querySelector('.start-btn');
const nextBtn = document.querySelector('.next-btn');
const quizContainer = document.querySelector('.container');
const landingPage = document.querySelector('.landing-page');
const resultBox = document.querySelector('.result-box');
let timerElm = document.querySelector('.timer');
const questionsElm = document.querySelector('.questions');
const answerBtnElm = document.querySelector('.answer-btn');

let shuffledQuestions;
let currentQuestionIndex;

let timeRemaining = 60;

// Start button and timer functionality. Start button hides landing Page and shows the quiz while initalizing the timer.
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', function () {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  landingPage.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  quizContainer.classList.add('show');

  let timerInterval = setInterval(function () {
    timeRemaining--;
    timerElm.textContent = 'Time remaining: ' + timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionsElm.textContent = question.question;
  question.answer.forEach((answer) => {
    const answerBtn = document.createElement('button');
    answerBtn.textContent = answer.text;
    answerBtn.classList.add('answer-btn');
  });
}

// function selectAnswer() {}

// Quiz

const questions = [
  {
    question: 'What does CLI stand for?',
    answer: ' Command Line Interface',
    choices: ['Common Language Interface', 'Computer Language Intuition', 'Command Line Interface', 'Computer Listening Ideas'],
  },
  {
    question: 'What is HTML stans for?',
    answer: 'Hyper Text Markup Language',
    choices: ['Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyperlink and Text Markup Language', 'None of the above'],
  },
  {
    question: 'What implements style to an application?',
    answer: 'CSS',
    choices: ['HTML', 'JavaScript', 'AWS', 'CSS'],
  },
  {
    question: 'What symbol denotes an id?',
    answer: '#',
    choices: ['#', '.', '/', '{'],
  },
];

// let questionCount = 0;

// function showQuestions() {
//   const questionText =
// }
