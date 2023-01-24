// elements needed
var greeting = document.querySelector('#quiz-greeting');
var startBtn = document.querySelector('#start-button');
var quizContent = document.querySelector('#quiz-content');
var timerEl = document.querySelector('#quiz-timer');
var question = document.querySelector('#question');
var options = document.querySelectorAll('.option')
var optA = document.querySelector('#a');
var optB = document.querySelector('#b');
var optC = document.querySelector('#c');
var optD = document.querySelector('#d');
var scoreSubmission = document.querySelector('#quiz-score');
var results = document.querySelector('#results');
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit-button');

// variables for score, current question set index, timer, etc
var score = 0;
var currentSet = 0;
var timer = 30;
var questionIndex = 0;

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
  setQuestion();
  setTimer();
}

function setQuestion() {
  question.textContent = questionSets[currentSet].question;
  optA.textContent = questionSets[currentSet].a;
  optB.textContent = questionSets[currentSet].b;
  optC.textContent = questionSets[currentSet].c;
  optD.textContent = questionSets[currentSet].d;
}

// selectAnswer function
function selectAnswer(event) {
  var correctOpt = questionSets[currentSet].correct;
  var correctAnswer = questionSets[currentSet][correctOpt];
  if (event.srcElement.innerHTML === correctAnswer) {
    score += 20;
    currentSet++;
    console.log(currentSet);
  } else if (event.srcElement.innerHTML !== correctAnswer) {
    timer -= 5;
    currentSet++;
  }
  if (currentSet < questionSets.length) {
    setQuestion();
  } else {
    endQuiz();
  }
  
}

// scoreInput function
function endQuiz() {
  console.log("Final Score: " + score);
  quizContent.classList.remove('visible');
  quizContent.classList.add('hidden');
  scoreSubmission.classList.remove('hidden');
  scoreSubmission.classList.add('visible');
  results.textContent = "You got " + score + " points!";
}

// setTimer function
function setTimer() {
    var timerInterval = setInterval(function() {
    timer--;
    timerEl.textContent = "Timer: " + timer;
    if(timer <= 0) {
      // Stop execution of action at setInterval function
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// event listeners for start button and answers
startBtn.addEventListener('click', startQuiz);
optA.addEventListener('click', selectAnswer);
optB.addEventListener('click', selectAnswer);
optC.addEventListener('click', selectAnswer);
optD.addEventListener('click', selectAnswer);