
var startButton = document.querySelector(".start");
var timer = document.querySelector(".timer");
var quizContent = document.querySelector(".quiz-content");
var questionTitle = document.querySelector("#questionTitle");
var quizChoices = document.querySelector("#quizChoices");
var gameOver = document.querySelector(".end-game");
var endMessage = document.querySelector("#end-message");
var submitBtn = document.querySelector(".submit");
var index = 0;
var secondsLeft = 60;
var timeInterval;

// declares questions, choices, and correct answers
var questions = [{

    question: "Commonly used data types do NOT include _____",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts"
},
{
    question: "The condition in an if/else statement is enclosed within _____",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis"
},
{
    question: "Arrays in Javascript can be used to store _____",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
},
{
    question: "String values must be enclosed within _____ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes"
},
{
    question: "A very useful tool during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
    correctAnswer: "console log"
}];



// creates start game function
function startGame() {
    // makes timer appear when start button is pushed
    timer.setAttribute("style", "display:block");
    // makes start button dissapear after it's pushed
    startButton.setAttribute("style", "display:none");
    // makes questions appear when start button is pushed
    quizContent.setAttribute("style", "display:block");
    // calls countdown function
    countdown();
    timer.textContent = secondsLeft;
    nextQuestion();
}

// creates countdown function from 60 seconds
function countdown() {

    timeInterval = setInterval(function () {
        if (secondsLeft >= 1) {
            secondsLeft--;
            timer.textContent = secondsLeft;
        }

        else {
            endGame();
        }
    }
        , 1000);
}

// function when user clicks an answer, determines if it is correct or not
function answerQuestion() {
    // docks 5 seconds for incorrect answer
    if (this.value !== questions[index].correctAnswer) {
        secondsLeft -= 10
    }

    index++;
// if it is the last question, ends game
    if (index === questions.length) {
        endGame()
    }
    else {
        nextQuestion();
    }

}

function nextQuestion() {
    questionTitle.textContent = questions[index].question
// clears previous button choices
    quizChoices.innerHTML = '';
// adds buttons and classes to buttons
    for (let i = 0; i < questions[index].choices.length; i++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'choice-button')
        choiceBtn.setAttribute('value', questions[index].choices[i])
// changes text content of buttons
        choiceBtn.textContent = questions[index].choices[i];

        choiceBtn.onclick = answerQuestion;

        quizChoices.append(choiceBtn)
    }
}

function endGame() {
    clearInterval(timeInterval)
    quizContent.innerHTML = '';
    // displays end of game page
    gameOver.setAttribute("style", "display: block");
    // hides timer
    timer.setAttribute("style", "display:none");
    // displays end of game message and final score
    endMessage.textContent = "All done! Your final score is " + secondsLeft + "!";
}

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
// creates array so name and score will be stores in local storage as a string
var userScore = {
    userName: document.querySelector("#name-input").value,
    score: secondsLeft
}

localStorage.setItem("userScore", JSON.stringify(userScore));
})

startButton.addEventListener("click", startGame);