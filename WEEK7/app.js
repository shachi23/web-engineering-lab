function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Quiz Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "/3</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("In which year of First World War Germany declared war on Russia and France? ", ["1914", "1915","1916", "1917"], "1914"),
    new Question("India has largest deposits of ____ in the world.", ["gold", "copper", "mica", "iron"], "mica"),
    new Question("How many Lok Sabha seats belong to Rajasthan?", ["32", "25","17", "19"], "25"),
 
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
