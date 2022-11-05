let startBtn = document.querySelector('.start-btn');
let quizContainer = document.querySelector('.container');
let landingPage = document.querySelector('.landing-page');
let timerElm = document.querySelector('.timer');

let timeRemaining = 31;

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
