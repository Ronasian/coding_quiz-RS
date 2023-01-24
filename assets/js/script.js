// elements needed
var greeting = document.querySelector('#quiz-greeting');
var startBtn = document.querySelector('#start-button');
var quizContent = document.querySelector('#quiz-content');
var timerEl = document.querySelector('#quiz-timer');
var question = document.querySelector('#question');
var optA = document.querySelector('#a');
var optB = document.querySelector('#b');
var optC = document.querySelector('#c');
var optD = document.querySelector('#d');
var scoreSubmission = document.querySelector('#quiz-score');
var score = document.querySelector('#score');
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit-button');

// variables for score, current question set index, timer, etc
var score = 0;
var currentSet = 0;
var timer = 3;

// quiz content array of objects
var questionSets = [
  {
    question: "Who?",
    a: "Me",
    b: "You",
    c: "Him",
    d: "Her",
    correct: "a"
  },
  {
    question: "What?",
    a: "This",
    b: "That",
    c: "Those",
    d: "Nothing",
    correct: "b"
  },
  {
    question: "Where?",
    a: "Here",
    b: "There",
    c: "Nowhere",
    d: "Everywhere",
    correct: "c"
  },
  {
    question: "Why?",
    a: "Because",
    b: "IDK",
    c: "Cause",
    d: "Yes",
    correct: "d"
  },
  {
    question: "How?",
    a: "bloop",
    b: "bleep",
    c: "skrraa",
    d: "weinerschnizel",
    correct: "a"
  },
]

// startQuiz function
function startQuiz() {
  console.log('Game Started');
  greeting.classList.remove('visible');
  greeting.classList.add('hidden');
  quizContent.classList.remove('hidden');
  quizContent.classList.add('visible');

  setTimer();
}

function setQuestion() {
  
}

// selectAnswer function

// scoreInput function
function endQuiz() {
  quizContent.classList.remove('visible');
  quizContent.classList.add('hidden');
  scoreSubmission.classList.remove('hidden');
  scoreSubmission.classList.add('visible');
}

// setTimer function
function setTimer() {
    var timerInterval = setInterval(function() {
    timer--;
    timerEl.textContent = "Timer: " + timer;
    if(timer === 0) {
      // Stop execution of action at setInterval function
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// event listeners for start button and answers
startBtn.addEventListener('click', startQuiz);