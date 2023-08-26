// Sample question data
const questions = [
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Mode", "Digital Output Management"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "variable"],
        correctAnswer: 2
    },
    {
        question: "What is the result of the following expression: 10 + '5'?",
        options: ["15", "105", "1050", "Error"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is not a data type in JavaScript?",
        options: ["String", "Boolean", "Number", "Character"],
        correctAnswer: 3
    },
    {
        question: "What is the correct way to comment out multiple lines in JavaScript?",
        options: ["// Comment", "/* Comment */", "<!-- Comment -->", "# Comment"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: ["It refers to the previous element in an array.", "It refers to the next element in an array.", "It refers to the current object.", "It refers to a global variable."],
        correctAnswer: 2
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        options: ["pop()", "shift()", "remove()", "deleteLast()"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is used to execute a function after a specified number of milliseconds?",
        options: ["setTimeout()", "setInterval()", "executeAfter()", "delay()"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the 'return' statement in a function?",
        options: ["It terminates the function.", "It sends a value back from the function.", "It defines a loop.", "It creates a new variable."],
        correctAnswer: 1
    },
    {
        question: "Which logical operator represents 'OR' in JavaScript?",
        options: ["&", "&&", "|", "||"],
        correctAnswer: 3
    }
    // Add more questions here
];

// Rest of your code

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const feedbackElement = document.getElementById("feedback");
const progressElement = document.getElementById("progress");

// Load question and options
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(optionButton);
    });
    
    updateProgress();
}

// Check user's answer and update score
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFeedback();
    }
}

// Show user's score and feedback
function showFeedback() {
    const percentage = (score / questions.length) * 100;
    let feedback = "";
    if (percentage >= 80) {
        feedback = "Excellent!";
    } else if (percentage >= 50) {
        feedback = "Good job!";
    } else {
        feedback = "Keep practicing.";
    }
    feedbackElement.textContent = `Your score: ${score}/${questions.length} - ${feedback}`;
    optionsElement.innerHTML = "";
    prevButton.disabled = true;
    nextButton.disabled = true;
}

// Update progress bar
function updateProgress() {
    const percentage = (currentQuestionIndex / questions.length) * 100;
    progressElement.style.width = `${percentage}%`;
}

// Previous question
prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Next question
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
});