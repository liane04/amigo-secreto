const questions = [
    {
        question: "O teu amigo secreto é...",
        options: { A: "Fantástico como uma estrela de cinema", B: "Maravilhosa e sempre cheia de surpresas" },
        correct: "B",
        part: "genero",
        image: "genero.png",
    },
    {
        question: "A tua amiga secreta pertence...",
        options: { A: "A uma organização secreta chamada ROPE", B: "A um clube misterioso 'Clínicas NM' com superpoderes" },
        correct: "B",
        part: "grupo",
        image: "grupo.png",
    },
    {
        question: "Qual é o meu animal preferido...",
        options: { A: "Um pinguim estiloso e positive", B: "Um gato que acha que é o dono da casa" },
        correct: "B",
        part: "animal",
        image: "gato.png",
    },
    {
        question: "O meu cabelo é...",
        options: { A: "Castanho e liso", B: "Castanho e encaracolado" },
        correct: "B",
        part: "cabelo",
        image: "cabelo.png",
    },
    {
        question: "Eu e tu temos em comum...",
        options: { A: "Um cérebro brilhante mas com pouco juízo", B: "Já termos enfrentado a temida missão de depilação a laser no cu (porque coragem não nos falta)" },
        correct: "B",
        part: "ligacao",
        image: "laser.png",
    },
    {
        question: "Qual destas atividades já fizemos juntas...",
        options: { A: "Depilação a laser enquanto reclamamos da dor", B: "Discutir se o laser também podia polir o teu carro" },
        correct: "A",
        part: "atividade",
        image: "atividade.png",
    },
    {
        question: "Já sabes quem sou eu?",
        options: { A: "Beatriz Duarte (a lendária amiga secreta)", B: "Outra pessoa que gostaria de ser tão fixe quanto eu" },
        correct: "A",
        part: "identidade",
        image: "beatriz.png",
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

