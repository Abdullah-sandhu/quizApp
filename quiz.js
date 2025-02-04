const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        document.getElementById('question').textContent = questionData.question;

        const optionsList = document.getElementById('options');
        optionsList.innerHTML = "";
        questionData.options.forEach(option => {
            const li = document.createElement('li');
            li.innerHTML = `<input type="radio" name="option" value="${option}" /> ${option}`;
            optionsList.appendChild(li);
        });
    } else {
        showScore();
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Please select an option!");
    }
}

function showScore() {
    document.getElementById('quiz').style.display = 'none';
    const scoreElement = document.getElementById('score');
    scoreElement.style.display = 'block';
    scoreElement.textContent = `Your score is: ${score} out of ${questions.length}`;
}

loadQuestion();