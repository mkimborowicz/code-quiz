
var scoreDisplay = document.querySelector(".leaderboard");

var userScore = JSON.parse(localStorage.getItem("userScore"));

scoreDisplay.children[0].append(userScore.userName + " - " + userScore.score);

