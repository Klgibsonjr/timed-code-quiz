let startBtn = document.querySelector('.start-btn');
let quizContainer = document.querySelector('.container');
let landingPage = document.querySelector('.landing-page');

startBtn.addEventListener('click', function (event) {
  quizContainer.classList.remove('hidden');
  quizContainer.classList.add('show');
  landingPage.classList.add('hidden');
});

// Reference Code 1

let questionTextElm = document.querySelector('#question-text');
let previousBtn = document.querySelector('#question-text');
let nextBtn = document.querySelector('#question-text');
let answerChoiceList = document.querySelector('');

function displayQuestion(item) {
  questionTextElm.textContent = item.question;
}

function displayQuestion(item) {
  // Swap out the question in the header
  questionTextElm.textContent = item.question;

  // Clear out the old choices
  answerChoiceList.innerHTML = '';

  for (let i = 0; i < item.choices.length; i++) {
    // Create teh <li> tag
    let listItemElm = document.createElement('li');
    listItemElm.classList = 'list-group-item';
    // Append it to the list
    answerChoiceList.append(listItemElm);
  }
}

var questionIndex = 0;

previousBtn.addEventListener('click', function () {
  if (questionIndex > 0) {
    questionIndex--;
  }
});

nextBtn.addEventListener('click', function () {
  if (questionIndex < quiz.length - 1) {
    questionIndex++;
  }
});

//  Reference Code 2

var questionTextElm = document.querySelector('#question-text');
var previousButton = document.querySelector('#previous-button');
var nextButton = document.querySelector('#next-button');
var answerChoiceList = document.querySelector('#answer-choices');

var quiz = {
  questions: [
    {
      question: 'What is css?',
      answer: 'A markup language',
      choices: ['A programming language', 'A markup language', 'idk'],
    },
    {
      question: 'What is html?',
      answer: 'A markup language',
      choices: ['A programming language', 'A markup language', 'idk'],
    },
    {
      question: 'What is javascript?',
      answer: 'A markup language',
      choices: ['A programming language', 'A markup language', 'idk'],
    },
    {
      question: 'What is html?',
      answer: 'A markup language',
      choices: ['A programming language', 'A markup language', 'idk'],
    },
  ],
};

displayQuestion(quiz.questions[0]);
displayQuestion(quiz.questions[1]);
displayQuestion(quiz.questions[2]);
displayQuestion(quiz.questions[3]);

function displayQuestion(item) {
  // Swap out the question in the header
  questionTextElm.textContent = item.question;

  // Clear out the old choices
  answerChoiceList.innerHTML = '';

  // Create the question choices
  for (var i = 0; i < item.choices.length; i++) {
    // Create the <li> tag
    var listItemElm = document.createElement('li');
    listItemElm.classList = 'list-group-item';

    console.log('List item:');
    console.log(listItemElm);

    // Append it to the list
    answerChoiceList.append(listItemElm);

    // Create a container div
    var qContainerDiv = document.createElement('div');
    qContainerDiv.classList = 'input-group d-flex align-items-center';
    listItemElm.append(qContainerDiv);

    // Create input group prepend
    var inputPrepend = document.createElement('div');
    inputPrepend.classList = 'input-group-prepend';
    qContainerDiv.append(inputPrepend);

    // Create input group text
    var inputGroupText = document.createElement('div');
    inputGroupText.classList = 'input-group-text';
    qContainerDiv.append(inputGroupText);

    var radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'answer-choice';
    inputGroupText.append(radioInput);

    // Add the choice text
    var choiceText = document.createElement('label');
    choiceText.classList = 'm-0 ml-4';
    choiceText.textContent = item.choices[i];
    qContainerDiv.append(choiceText);
  }
}

var questionIndex = 0;
previousButton.addEventListener('click', function () {
  if (questionIndex > 0) {
    questionIndex--;
  }
  displayQuestion(quiz.questions[questionIndex]);
});

nextButton.addEventListener('click', function () {
  if (questionIndex < quiz.questions.length - 1) {
    questionIndex++;
  }
  displayQuestion(quiz.questions[questionIndex]);
});
