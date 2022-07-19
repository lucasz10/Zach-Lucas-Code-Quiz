var timeLeft = null; // Tracks time left for guessing, value is applied in function codeQuiz
var score = 0; // Tracks User Score
var time; // Value for time

var startGameButton = document.querySelector("#startGame") // Selects button to start game
var highscoreButton = document.querySelector("#scoreBoardButton");
var leaveScoreButton = document.querySelector("#leaveScores");

var questions = ["Question 1" , "Question 2" , "Question 3"]; //Questions to be asked in quiz
var answers1 = ["Right" , "Wrong" , "Wrong" , "Wrong"];
var answers2 = ["Right" , "Wrong" , "Wrong" , "Wrong"]; //answers to respective questions
var answers3 = ["Right" , "Wrong" , "Wrong" , "Wrong"];

// Functions and coding for scoreboard

function goToScores() {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('scoreboard').style.display = 'flex';
};

function leaveScores() {
    document.getElementById('startPage').style.display = 'flex';
    document.getElementById('scoreboard').style.display = 'none';
};

highscoreButton.addEventListener("click", function() { // When the start game button is clicked, begins the function to ask questions
    goToScores();
});

leaveScoreButton.addEventListener("click", function() { // Accesses Scoreboard page
    leaveScores();
});


startGameButton.addEventListener("click", function() { // Leave Scoreboard page and returns to start page 
    codeQuiz();
});

// Function for timer

function timerStart() {
    time = 60;
    timeLeft = setInterval(function() {
        document.getElementById('timer').innerHTML = time + ' seconds remaining'
        time--;
    }, 1000);
};

// Functions regarding the quiz


function codeQuiz() {

    gameState = false;
    timerStart();
    score = 0;
    document.getElementById('quizArea').style.display = 'flex';
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('scoreboard').style.display = 'none';
    q1();

    if(time < 0.5){
        gameEnd();
    };

};

function q1() {
    document.getElementById("question").innerHTML = questions[0];

    document.getElementById("a1").innerHTML = answers1[0];
    document.getElementById("a2").innerHTML = answers1[1];
    document.getElementById("a3").innerHTML = answers1[2];
    document.getElementById("a4").innerHTML = answers1[3];

    document.getElementById("a1").onclick = correct;
    document.getElementById("a2").onclick = incorrect;
    document.getElementById("a3").onclick = incorrect;
    document.getElementById("a4").onclick = incorrect;

    gameEnd();

}

function correct() {
    document.getElementById('choiceResponse').innerHTML = "Correct!";
};

function incorrect() {
      document.getElementById('choiceResponse').innerHTML = "Incorrect!";
      time = time - 5;
};

function gameEnd() {

    clearInterval(timeLeft);
    document.getElementById('choiceResponse').innerHTML = '';
    document.getElementById('quizArea').style.display = 'none';
    score += time;
    var playerName = prompt('Please enter your name:');
    var playerList = document.createElement('li');
    playerList.innerHTML = '${playerName} Score: ${time}';
    document.getElementById('scoreList').appendChild(playerList);
    document.getElementById('startPage').style.display = 'flex';

}