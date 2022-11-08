const startBtn = document.querySelector('.start-btn');
const nextBtn = document.querySelector('.next-btn');
const quizContainer = document.querySelector('.container');
const landingPage = document.querySelector('.landing-page');
const resultBox = document.querySelector('.result-box');
const questionsElm = document.querySelector('.questions');
const answerBtnsElm = document.querySelector('.answer-buttons');
let timerElm = document.querySelector('.timer');

let shuffledQuestions;
let currentQuestionIndex;

let timeRemaining = 61;
let score;
let timePenalty = 5;

// Start button and timer functionality. Start button hides landing Page and shows the quiz while initalizing the timer.
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', function () {
  currentQuestionIndex++;
  setNextQuestion();
});

// Array of questions used for the quiz
const questions = [
  {
    question: 'What does CLI stand for?',
    answers: [
      { text: 'Common Language Interface', correct: false },
      { text: 'Computer Language Intuition', correct: false },
      { text: 'Command Line Interface', correct: true },
      { text: 'Computer Listening Ideas', correct: false },
    ],
  },
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'Home Tool Markup Language', correct: false },
      { text: 'Hyper Text Markup Language', correct: true },
      { text: 'Hyperlink and Text Markup Language', correct: false },
      { text: 'None of the above', correct: false },
    ],
  },
  {
    question: 'What implements style to an application?',
    answers: [
      { text: 'HTML', correct: false },
      { text: 'JavaScript', correct: false },
      { text: 'AWS', correct: false },
      { text: 'CSS', correct: true },
    ],
  },
  {
    question: 'What symbol denotes an id?',
    answers: [
      { text: '#', correct: true },
      { text: '.', correct: false },
      { text: '/', correct: false },
      { text: '{', correct: false },
    ],
  },
];

// Clears previous answers when calling the next shuffled question stored in the questions index.
function setNextQuestion() {
  clearPreviousAnswers();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Starts the quiz function
function startQuiz() {
  landingPage.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  quizContainer.classList.add('show');

  // Sets a timer that counts down once the quiz starts
  let timerInterval = setInterval(function () {
    timeRemaining--;
    timerElm.textContent = 'Time remaining: ' + timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      timerElm.textContent = 'Time is up!';
    }
  }, 1000);

  // Shuffles the questions so each quiz has a unique order of questions
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
}

// Shows the next question and answer choices when the next button is clicked
function showQuestion(question) {
  questionsElm.textContent = question.question;
  question.answers.forEach((answer) => {
    const answerBtn = document.createElement('button');
    answerBtn.textContent = answer.text;
    answerBtn.classList.add('answer-btn');
    if (answer.correct) {
      answerBtn.dataset.correct = answer.correct;
    }
    answerBtn.addEventListener('click', selectAnswer);
    answerBtnsElm.appendChild(answerBtn);
  });
}

function clearPreviousAnswers() {
  while (answerBtnsElm.firstChild) {
    answerBtnsElm.removeChild(answerBtnsElm.firstChild);
  }
}

function selectAnswer(event) {
  const selectedBtn = event.target;
  const correct = selectedBtn.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerBtnsElm.children).forEach(answerBtn, function () {
    setStatusClass(answerBtn, answerBtn.dataset.correct);
  });
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.remove('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}
