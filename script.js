const questions = [
    {
        question: "De que cor é o meu cabelo?",
        options: { A: "Castanho", B: "Loiro", C: "Ruivo" },
        correct: "A",
        part: "cabelo",
        image: "cabelo_castanho.png",
    },
    {
        question: "De que cor são os meus olhos?",
        options: { A: "Azuis", B: "Verdes", C: "Castanhos" },
        correct: "C",
        part: "olhos",
        image: "olhos_castanhos.png",
    },
    {
        question: "Qual é a minha altura?",
        options: { A: "1.59m", B: "1.70m", C: "1.80m" },
        correct: "A",
        part: "altura",
        image: "corpo.png",
    },
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const question = questions[currentQuestionIndex];

    questionElement.textContent = question.question;
    optionsContainer.innerHTML = ""; // Limpar opções anteriores

    for (const [key, value] of Object.entries(question.options)) {
        const button = document.createElement("button");
        button.textContent = `${key}. ${value}`;
        button.onclick = () => checkAnswer(key);
        optionsContainer.appendChild(button);
    }
}

function checkAnswer(selected) {
    const question = questions[currentQuestionIndex];
    const message = document.getElementById("message");

    if (selected === question.correct) {
        addCharacterPart(question.part, question.image);
        message.textContent = "Resposta certa! 🎉";
        message.style.color = "green";

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                message.textContent = "";
                displayQuestion();
            }, 1000);
        } else {
            message.textContent = "Parabéns! Terminaste o jogo!";
        }
    } else {
        message.textContent = "Resposta errada. Tenta novamente!";
        message.style.color = "red";
    }
}

function addCharacterPart(part, image) {
    const characterContainer = document.getElementById("character");
    const partElement = document.createElement("div");
    partElement.classList.add("character-part");
    partElement.style.backgroundImage = `url(${image})`;
    characterContainer.appendChild(partElement);
}

// Inicializar o jogo
displayQuestion();
