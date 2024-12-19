const questions = [
    {
        question: "O teu amigo secreto é...",
        options: { A: "Fantástico como uma estrela de cinema", B: "Maravilhosa e sempre cheia de surpresas" },
        correct: "B",
        background: "img/harry1.jpg", // Define a imagem de fundo
    },
    {
        question: "A tua amiga secreta pertence...",
        options: { A: "A uma organização secreta chamada ROPE", B: "A um clube misterioso 'Clínicas NM' com superpoderes" },
        correct: "B",
        background: "url('imagem2.jpg')",
    },
    {
        question: "Qual é o meu animal preferido...",
        options: { A: "Um pinguim estiloso e positive", B: "Um gato que acha que é o dono da casa" },
        correct: "B",
        background: "url('imagem3.jpg')",
    },
    {
        question: "O meu cabelo é...",
        options: { A: "Castanho e liso", B: "Castanho e encaracolado" },
        correct: "B",
    },
    {
        question: "Eu e tu temos em comum...",
        options: { A: "Um cérebro brilhante mas com pouco juízo", B: "Já termos enfrentado a temida missão de depilação a laser no cu (porque coragem não nos falta)" },
        correct: "B",
    },
    {
        question: "Qual destas atividades já fizemos juntas...",
        options: { A: "Depilação a laser enquanto reclamamos da dor", B: "Discutir se o laser também podia polir o teu carro" },
        correct: "A",
    },
    {
        question: "Já sabes quem sou eu?",
        options: { A: "Beatriz Duarte (a lendária amiga secreta)", B: "Outra pessoa que gostaria de ser tão fixe quanto eu" },
        correct: "A",
    },
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const question = questions[currentQuestionIndex];

    // Atualizar a imagem de fundo
    document.body.style.backgroundImage = question.background;

    // Mostrar a pergunta
    questionElement.textContent = question.question;

    // Limpar opções anteriores
    optionsContainer.innerHTML = "";

    // Criar botões para as opções
    for (const [key, value] of Object.entries(question.options)) {
        const button = document.createElement("button");
        button.textContent = `${key}. ${value}`;
        button.onclick = () => checkAnswer(key); // Verificar a resposta ao clicar
        optionsContainer.appendChild(button);
    }
}

function checkAnswer(selected) {
    const question = questions[currentQuestionIndex];
    const message = document.getElementById("message");

    // Verificar se a resposta está correta
    if (selected === question.correct) {
        message.textContent = "Resposta certa! 🎉";
        message.style.color = "green";

        // Avançar para a próxima pergunta
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                message.textContent = "";
                displayQuestion(); // Mostrar a próxima pergunta
            }, 1000);
        } else {
            message.textContent = "Parabéns! Terminaste o jogo!";
        }
    } else {
        message.textContent = "Resposta errada. Tenta novamente!";
        message.style.color = "red";
    }
}

// Inicializar o jogo
displayQuestion();
