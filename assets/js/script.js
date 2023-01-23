var greetingEl = document.querySelector('#quiz-greeting');
var startButton = document.querySelector('#start-button');
var quizEl = document.querySelector('#quiz-content');
var quizQuestion = document.querySelector('#question');
var quizAnswers = document.querySelector('#answers');
var timerEl = document.querySelector('#quiz-timer');

var quizContent = [
  {
    question: 'Who is',
    answers: [
      {text: 'right', correct: true},
      {text: 'wrong', correct: false},
      {text: 'wrong', correct: false},
      {text: 'wrong', correct: false}
    ]
  },
  {
    question: 'What is',
    answers: [
      {text: 'wrong', correct: true},
      {text: 'right', correct: false},
      {text: 'wrong', correct: false},
      {text: 'wrong', correct: false}
    ]
  },
  {
    question: 'Why is',
    answers: [
      {text: 'wrong', correct: true},
      {text: 'wrong', correct: false},
      {text: 'right', correct: false},
      {text: 'wrong', correct: false}
    ]
  },
  {
    question: 'Where is',
    answers: [
      {text: 'wrong', correct: true},
      {text: 'wrong', correct: false},
      {text: 'wrong', correct: false},
      {text: 'right', correct: false}
    ]
  },
  {
    question: 'How is',
    answers: [
      {text: 'right', correct: true},
      {text: 'wrong', correct: false},
      {text: 'wrong', correct: false},
      {text: 'wrong', correct: false}
    ]
  }
]

function startQuiz() {
  console.log('Game Started');
  greetingEl.classList.remove('visible');
  greetingEl.classList.add('hidden');
  quizEl.classList.remove('hidden');
  quizEl.classList.add('visible');
  setQuestions();
  setTimer(30);
}

function setQuestions () {
  quizEl.classList.remove('hidden');
  quizEl.classList.add('visible');
  var currentIndex = Math.floor(Math.random() * quizContent.length);
  quizQuestion.textContent = quizContent[currentIndex].question;
  for (var i = 0; i < quizContent[currentIndex].answers.length; i++) {
    var quizOption = document.createElement("button");
    quizOption.classList.add('option');
    quizOption.textContent = quizContent[currentIndex].answers[i].text;
    quizAnswers.appendChild(quizOption);
  }
}

function setTimer(seconds) {
  // create variable for setInterval function
  var timerInterval = setInterval(function() {
    seconds--;
    timerEl.textContent = "Timer: " + seconds;
    if(seconds === 0) {
      // Stop execution of action at setInterval function
      clearInterval(timerInterval);
    }
  }, 1000);
}

startButton.addEventListener('click', startQuiz);
quizOption.addEventListener('click', )