let startBtn = document.querySelector('.start-btn');
let quizContainer = document.querySelector('.container');
let landingPage = document.querySelector('.landing-page');
let timerElm = document.querySelector('.timer');

let timeRemaining = 31;

// Start button and timer functionality. Start button hides landing Page and shows the quiz while initalizing the timer.

startBtn.addEventListener('click', function (event) {
  quizContainer.classList.remove('hidden');
  quizContainer.classList.add('show');
  landingPage.classList.add('hidden');

  let timerInterval = setInterval(function () {
    timeRemaining--;
    timerElm.textContent = 'Time remaining: ' + timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

// Quiz

const quiz = {
  questions: [
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
      question: 'What implements style to application?',
      answer: 'CSS',
      choices: ['HTML', 'JavaScript', 'AWS', 'CSS'],
    },
    {
      question: 'What symbol denotes an id?',
      answer: '#',
      choices: ['#', '.', '/', '{'],
    },
  ],
};
