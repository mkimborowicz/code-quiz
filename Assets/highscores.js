
var scoreDisplay = document.querySelector(".score");
var nameDisplay = document.querySelector(".name");

var name = localStorage.getItem("name");
var score = localStorage.getItem("score");

scoreDisplay.textContent = score;
nameDisplay.textContent = userName;

