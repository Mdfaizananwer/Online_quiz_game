const quizData = [
    {
        question: "Which planet is known as the Red Planet?",
        a: "Jupiter",
        b: "Mercury",
        c: "Mars",
        d: "Venus",
        correct: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Bill Gates",
        b: "Elon Musk",
        c: "Steve Jobs",
        d: "Jeff Bezos",
        correct: "b"
    },
    {
        question: "The iPhone was created by which company?",
        a: "Amazon",
        b: "Intel",
        c: "Apple",
        d: "Microsoft",
        correct: "c"
    },
    {
        question: "What has a face and two hands, but no arms or legs?",
        a: "A table",
        b: "A clock",
        c: "A chair",
        d: "A building",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const choices = document.querySelectorAll('.choice');
const submitBtn = document.getElementById('submit');
const scoreContainer = document.getElementById('score-container');
const scoreEl = document.getElementById('score');

let currentQuiz = 0;
let score = 0;
let selectedAnswer = null;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    choices.forEach(choice => {
        const choiceId = choice.id;
        choice.innerText = currentQuizData[choiceId];
        choice.addEventListener('click', selectAnswer);
    });
}

function deselectAnswers() {
    choices.forEach(choice => {
        choice.classList.remove('selected');
    });
}

function selectAnswer(e) {
    deselectAnswers();
    e.target.classList.add('selected');
    selectedAnswer = e.target.id;
}

submitBtn.addEventListener('click', () => {
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.classList.add('hidden');
            scoreContainer.classList.remove('hidden');
            scoreEl.innerText = score;
        }
    } else {
        alert('Please select an answer!');
    }
});