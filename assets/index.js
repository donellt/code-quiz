const startbtn = document.getElementById('start-btn')
const initialScreen = document.getElementById('initial-screen')
const quizQuestions = document.getElementById('questions-container')
const time = document.getElementById('timer')
const singleQuestion = document.getElementById('question')
const answerA = document.getElementById('a')
const answerB = document.getElementById('b')
const answerC = document.getElementById('c')
const answerD = document.getElementById('d')
const answerResult = document.getElementById('explanation')
const finishContainer = document.getElementById('finished-container')
const finalScoreText = document.getElementById('final-score')
const submitScore = document.getElementById('submit')
const scoresContainer = document.getElementById("scores-container")
const initials = document.getElementById("initials")
const scoreBoxText = document.getElementById('score-box')

i = 0

startbtn.addEventListener("click", gameStart);


function gameStart() {
    console.log("Coding Quiz has begun.");
    initialScreen.classList.add("hide");
    quizQuestions.classList.remove('hide');
    //This function declaration below updates the question
    startQuestion();
    startTimer();
};

var javaQuestions = [
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
            a: "alert('Hello World)');",
            b: "msg('Hello World)');",
            c: "msgBox('Hello World)');",
            d: "alertBox('Hello World)');"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you define a variable in JavaScript?",
        answers: {
            a: "variable name = 'text'",
            b: "vari name = 'text'",
            c: "var name = 'text'",
            d: "v name = 'text'"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the file extension name for a Javascript file?",
        answers: {
            a: ".javascript",
            b: ".code",
            c: ".script",
            d: ".js"
        },
        correctAnswer: "d"
    },
    {
        question: "How do you format a JavaScript comment?",
        answers: {
            a: "--comment--",
            b: "**comment**",
            c: "<--comment-->",
            d: "//comment"
        },
        correctAnswer: "d"
    },
    {
        question: "What does 'console.log()' do?",
        answers: {
            a: "Outputs a variable",
            b: "Prints to the console",
            c: "Purchases a new Xbox",
            d: "Executes a named function"
        },
        correctAnswer: "b"
    },
]

var timeLeft = 75;

function startTimer() {
    var downloadTimer = setInterval(function () {
        if (timeLeft <= 0 || i == 5) {
            finishedQuiz();
            return;
        } else {
            time.innerHTML = timeLeft;
        }
        timeLeft -= 1;
    }, 1000);
}

function startQuestion() {

    answerA.blur();
    answerB.blur();
    answerC.blur();
    answerD.blur();

    chosenAnswer = ""
    console.log(javaQuestions[i].correctAnswer);

    answerResult.innerHTML = "";
    answerResult.classList.add('hide');

    currentQuestion = javaQuestions[i].question;
    singleQuestion.innerHTML = currentQuestion;

    currentAnswerA = javaQuestions[i].answers.a;
    answerA.innerHTML = currentAnswerA;
    currentAnswerB = javaQuestions[i].answers.b;
    answerB.innerHTML = currentAnswerB;
    currentAnswerC = javaQuestions[i].answers.c;
    answerC.innerHTML = currentAnswerC;
    currentAnswerD = javaQuestions[i].answers.d;
    answerD.innerHTML = currentAnswerD;
}

answerA.addEventListener("click", functionA);
answerB.addEventListener("click", functionB);
answerC.addEventListener("click", functionC);
answerD.addEventListener("click", functionD);

function functionA() {
    chosenAnswer = "a";
    console.log(chosenAnswer);
    answerVerification();
}

function functionB() {
    chosenAnswer = "b";
    console.log(chosenAnswer);
    answerVerification();
}

function functionC() {
    chosenAnswer = "c";
    console.log(chosenAnswer);
    answerVerification();
}

function functionD() {
    chosenAnswer = "d"
    console.log(chosenAnswer);
    answerVerification();
};

function answerVerification() {
    if (chosenAnswer == javaQuestions[i].correctAnswer) {
        answerResult.innerHTML = "Correct!";
        answerResult.classList.remove('hide');
        i++;
        setTimeout(() => { startQuestion(); }, 1000);
    } else {
        answerResult.innerHTML = "Incorrect!";
        answerResult.classList.remove('hide');
        i++
        timeLeft = timeLeft - 10;
        setTimeout(() => { startQuestion(); }, 1000);
    };
};




function finishedQuiz() {
    quizQuestions.classList.add('hide');
    finishContainer.classList.remove('hide');
    const finalScore = timeLeft;
    time.innerHTML = finalScore;
    finalScoreText.innerHTML = finalScore;
}

submitScore.addEventListener("click", saveHighscore);


function saveHighscore() {
    finishContainer.classList.add('hide');
    userScore = (initials.value + ' - ' + timeLeft);
    scoreBoxText.innerHTML = userScore;
    scoresContainer.classList.remove('hide');

    localStorage.setItem('score', userScore);
    console.log(userScore);
}

const clearStorage = document.getElementById('clear-btn')

clearStorage.addEventListener('click', clearStore)

function clearStore() {
    clearStorage();
}





    //localStorage.setItem('name', '')

