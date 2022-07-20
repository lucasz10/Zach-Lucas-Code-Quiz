var timeLeft = null; // Tracks time left for guessing, value is applied in function codeQuiz
var score = 0; // Tracks User Score
var time; // Value for time
var questionCount = 0; // Question tracker

var startGameButton = document.querySelector("#startGame") // Selects button to start game
var highscoreButton = document.querySelector("#scoreBoardButton");
var leaveScoreButton = document.querySelector("#leaveScores");



var questions = [
    {
        prompt: "What is the first color in a rainbow?",
        responses: [
            "Red", "Green", "Purple", "Yellow"
        ],
        correctResponse: "Red"

    },
    {
        prompt: "What is the second color in a rainbow?",
        responses: [
            "Red", "Green", "Purple", "Yellow"
        ],
        correctResponse: "Red"

    },
    {
        prompt: "What is the third color in a rainbow?",
        responses: [
            "Red", "Green", "Purple", "Yellow"
        ],
        correctResponse: "Red"

    },
    {
        prompt: "What is the fourth color in a rainbow?",
        responses: [
            "Red", "Green", "Purple", "Yellow"
        ],
        correctResponse: "Red"

    },
    
]; //Questions to be asked in quiz


function nextQuestion() {
    document.getElementById('question').innerHTML = questions[questionCount].prompt
    for(i = 0; i < questions[questionCount].responses.length ; i++) {
        var newBtn = `
        <li> <button class = 'response-btn'>${questions[questionCount].responses[i]}</button></li>
        `
        document.getElementById('responseList').innerHTML += newBtn;
    }
    var elements = document.querySelector(".response-btn")

    for(i = 0 ; i < elements.length ; i++){

        elements[i].addEventListener("click", function (e) {
            var userResponse = e.target.innerText();
           
        })
    };
};

// Functions and coding for scoreboard

function goToScores() {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('scoreboard').style.display = 'flex';
};

function leaveScores() {
    document.getElementById('startPage').style.display = 'flex';
    document.getElementById('scoreboard').style.display = 'none';
};

highscoreButton.addEventListener("click", function () { // Accesses Scoreboard page
    goToScores();
});

leaveScoreButton.addEventListener("click", function () { // Leave Scoreboard page and returns to start page 
    leaveScores();
});


startGameButton.addEventListener("click", function () { // When the start game button is clicked, begins the function to ask questions
    codeQuiz();
    
});


// Function for timer

function timerStart() {
    time = 60;
    timeLeft = setInterval(function () {
        document.getElementById('timer').innerHTML = time + ' seconds remaining'
        time--;
        if (time = 0) {
            gameEnd();
        }
    }, 1000);
};

// Functions regarding the quiz


function codeQuiz() {

    nextQuestion();
    timerStart();
    score = 0;

    document.getElementById('quizArea').style.display = 'flex';
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('scoreboard').style.display = 'none';
    document.getElementById('scoreBoardButton').style.display = 'none';

    if (nextQuestion == 0) {
        q1();
    } else if (nextQuestion == 1) {
        q2();
    } else if (time < 0.5 || nextQuestion == 2) {
        gameEnd();
    }

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


};


function correct() {
    document.getElementById('choiceResponse').innerHTML = "Correct!";
    nextQuestion = nextQuestion + 1;
};

function incorrect() {
    document.getElementById('choiceResponse').innerHTML = "Incorrect!";
    time = time - 5;
    nextQuestion = nextQuestion + 1;
};

function gameEnd() {

    clearInterval(timeLeft);
    document.getElementById('choiceResponse').innerHTML = '';
    document.getElementById('quizArea').style.display = 'none';
    score += time;
    var playerName = prompt('Please enter your name:');
    var playerList = document.createElement('li');
    playerList.innerHTML = playerName + " Score: " + time;
    document.getElementById('scoreList').appendChild(playerList);
    document.getElementById('startPage').style.display = 'flex';
    document.getElementById('scoreBoardButton').style.display = 'flex';

};

