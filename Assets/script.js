
var startButton = document.querySelector(".start");
var highScores = document.querySelector(".high-score");
var timer = document.querySelector(".timer");

startButton.addEventListener("click", startGame);
// highScores.addEventListener("click", scoreBoard);

// creates start game function
function startGame() {
    // makes timer appear when start button is pushed
    timer.setAttribute("style","display:block");
    // makes start button dissapear after it's pushed
    startButton.setAttribute("style","display:none");
    // calls countdown function
    countdown();
    quiz();
}

// creates countdown function from 60 seconds
function countdown() {
    var secondsLeft = 60;

    var timeInterval = setInterval(function() {
        if (secondsLeft>=1) {
            secondsLeft--;
            timer.textContent = secondsLeft;
        }

        else {
            timer.textContent = "time up!";
        }
    }
,1000);
}

var quizContent = {

    question1: ["Commonly used data types do NOT include _____:"],
    answers: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
    correctAnswer: ["3.alerts"],

    question2: ["The condition in an if/else statement is enclosed within _____."],
    answers: ["1.quotes", "2.curly brackets", "3.parenthesis", "4.square brackets"],
    correctAnswer: ["2.curly brackets"],

    question3: ["Commonly used data types do NOT include _____:"],
    answers: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
    correctAnswer: ["3.alerts"]

};

console.log(quizContent.question2[0]);

function quiz() {
    
}

function endGame() {
    timeInterval = clearInterval;
}