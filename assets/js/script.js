// grab essential elements
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
var inputMessage = document.querySelector('#input-message');
var submitBtn = document.querySelector('#submit-button');
var scoreboard = document.querySelector('#scoreboard');


// create variables in the global scope; values subject to change with functions
var score = 0;
var currentSet = 0;
var timer = 30;
var storedScores = [];

// create array of multiple choice question sets
var questionSets = [
  {
    question: "JavaScript objects are represented and created using",
    a: "curly brackets",
    b: "parentheses",
    c: "quotations",
    d: "square brackets",
    correct: "a"
  },
  {
    question: "Unassigned properties of an object are ___.",
    a: "defined",
    b: "undefined",
    c: "null",
    d: "empty",
    correct: "b"
  },
  {
    question: "Property accessors provide access to an object's properties by using the ___ notation or the ___ notation.",
    a: "dot; curly bracket",
    b: "dot; quotation",
    c: "dot; square bracket",
    d: "curly bracket; square bracket",
    correct: "c"
  },
  {
    question: "We pass ___ to a function at call-time.",
    a: "parameters",
    b: "variables",
    c: "callbacks",
    d: "arguments",
    correct: "d"
  },
  {
    question: "A(n) ___ function is a function that takes another function as an parameter or returns a function.",
    a: "high-order",
    b: "object",
    c: "array",
    d: "variable",
    correct: "a"
  },
];

// starts the quiz and timer when user clicks start
function startQuiz() {
  console.log('Game Started');
  // hide greeting elements
  greeting.classList.remove('visible');
  greeting.classList.add('hidden');
  // reveal quiz elements
  quizContent.classList.remove('hidden');
  quizContent.classList.add('visible');
  // call to functions to initiate quiz content
  setQuestion();
  setTimer();
};

// sets questions and answers from question set at the current index
function setQuestion() {
  console.log("Question #" + (currentSet + 1));
  // set question text content to be the value of question in the current set of question sets
  question.textContent = questionSets[currentSet].question;
  // set options text content to be the value of the letter options in the current set of question sets
  optA.textContent = questionSets[currentSet].a;
  optB.textContent = questionSets[currentSet].b;
  optC.textContent = questionSets[currentSet].c;
  optD.textContent = questionSets[currentSet].d;
};

// answers that are clicked are checked if correct
function selectAnswer(event) {
  // create variable for correct letter option at the current set of question sets
  var correctOpt = questionSets[currentSet].correct;
  // create variable for correct answer using correctOpt variable as object key
  var correctAnswer = questionSets[currentSet][correctOpt];
  // if clicked answer is correct,
  if (event.srcElement.innerHTML === correctAnswer) {
    console.log("Correct! (+20 pts)");
    // add 20 points to score
    score += 20;
    // change to next question by adding 1 to currentSet (value used as and index)
    currentSet++;
  } else {
    console.log("Incorrect! (-5 sec)");
    // subtract 5 from timer
    timer -= 5;
    // change to next question by adding 1 to currentSet (value used as and index)
    currentSet++;
  }
  // if currentSet is within length of the set
  if (currentSet < questionSets.length) {
    // set another question
    setQuestion();
  } else { // otherwise
    //end the quiz
    endQuiz();
  }
};

// end the quiz after time runs out or all questions are answered
function endQuiz() {
  console.log("Final Score: " + score);
  // hide quiz content
  quizContent.classList.remove('visible');
  quizContent.classList.add('hidden');
  // reveal score submission section
  scoreSubmission.classList.remove('hidden');
  scoreSubmission.classList.add('visible');
  // set result text to reveal score to user
  results.textContent = "You got " + score + " points!";
};

// initializes stored scores to the scores in the local storage
function initScores() {
  // get parsed version of scores
  var localScores = JSON.parse(localStorage.getItem("scores"));
  // set our array of scores to be equal to the scores in local storage if local storage exists
  if (localScores !== null) {
    storedScores = localScores;
  }
};

function renderScores() {
  // hide submission form and display scoreboard
  scoreSubmission.classList.remove('visible');
  scoreSubmission.classList.add('hidden');
  scoreboard.classList.remove('hidden');
  scoreboard.classList.add('visible');
  // Render a new li for each score
  for (var i = 0; i < storedScores.length; i++) {
    var li = document.createElement("li");
    li.textContent = storedScores[i];
    if (i % 2 === 0) {
      li.style.backgroundColor = "#af93d7"
    } else {
      li.style.backgroundColor = "light-grey"
    }
    scoreboard.appendChild(li);
  }
};

function storeScores() {
  // Stringify and set key in localStorage to storedScores array
  localStorage.setItem("scores", JSON.stringify(storedScores));
};

// Add click event to form
submitBtn.addEventListener("click", function(event) {

  var scoreText = initials.value.toUpperCase().trim() + " - " + score;

  // Give red error message and return from function early if submitted initials is invalid
  if (initials.value.toUpperCase().trim().length !== 2) {
    inputMessage.textContent = "Please enter a valid input (initials should be two letters)";
    inputMessage.style.color = "red";
    return;
  } else {
    // Add new score to storedScores array
    storedScores.push(scoreText);
  }
  // set and render scores
  storeScores();
  renderScores();
});

// setTimer function
function setTimer() {
    // create variable for interval
    var timerInterval = setInterval(function() {
    // timer goes down by one every 1000 ms
    timer--;
    // timer element updates in real time
    timerEl.textContent = "Timer: " + timer;
    // if the timer is less than or equal to zero AND the current set value is less than the legnth of questionSets
    if (timer <= 0 && currentSet < questionSets.length) {
      // Stop execution of action at setInterval function
      clearInterval(timerInterval);
      // end the quiz
      endQuiz();
    }
  }, 1000);
};

// event listener for start button
startBtn.addEventListener('click', startQuiz);
// event listeners for answer selection
optA.addEventListener('click', selectAnswer);
optB.addEventListener('click', selectAnswer);
optC.addEventListener('click', selectAnswer);
optD.addEventListener('click', selectAnswer);
// call to function to initialize scores array when page loads
initScores();