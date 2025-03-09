const quizData = [
    { question: "WHAT IS THE FIRST SDG?", options: ["Life below water", "Life on land", "No poverty", "Zero hunger"], answer: 2 },
    { question: "BELOW ARE THE EFFECTS OF POVERTY, EXCEPT ONE.", options: ["Mental Health Issues", "Physical Health Issues", "Poor Quality of Education", "Easy access to healthcare facilities"], answer: 3 },
    { question: "BELOW ARE THE CAUSES OF POVERTY, EXCEPT ONE", options: ["Lack of Education", "Financial stability", "Unemployment", "Corruption"], answer: 1 },
    { question: "WHICH OF THESE CAN BE A PREVENTION TO POVERTY?", options: ["Play cellphone all day", "Badmouth people", "Increase access to education", "Teenage pregnancy"], answer: 2 },
    { question: "IN POVERTY, THERE IS?", options: ["Power", "Fantasy", "Magic", "Poorness"], answer: 0},
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function dQuestion () {
    document.getElementById("nextButton").disabled = true;
    document.getElementById("prevButton").disabled = currentQuestion === 0;

    const q = quizData[currentQuestion];
    document.getElementById("question").textContent = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    answered = false;

    q.options.forEach(function (opt, index) {
        let btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = function () {
            if (!answered) {
                checkAnswer(index, btn);
            }
        };
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(index, button) {
    if (answered) return;

    let correctIndex = quizData[currentQuestion].answer;
    if (index === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }

    answered = true;
    document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        dQuestion();
    } else {
        document.getElementById("score").textContent = `YOUR SCORE: ${score}/${quizData.length}`;
        document.getElementById("question").textContent = "Congrats for completing the quiz! Always remember that in poverty, there is power!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("prevButton").style.display = "none";
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        dQuestion();
    }
}

dQuestion();
