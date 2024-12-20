const questions = [
    {
        question: "O teu amigo secreto é...",
        options: { A: "Fantástico como uma estrela de cinema", B: "Maravilhosa e sempre cheia de surpresas" },
        correct: "B",
        background: "#FF4C4C", // Vermelho natalício
        image: "img/arvore3.png", // Caminho para a imagem
    },
    {
        question: "A tua amiga secreta pertence...",
        options: { A: "A uma organização secreta chamada ROPE", B: "A um clube misterioso 'Clínicas NM' com superpoderes" },
        correct: "B",
        background: "#FF4C4C", // Vermelho natalício
    },
    {
        question: "Qual é o meu animal preferido...",
        options: { A: "Um pinguim estiloso e positive", B: "Um gato que acha que é o dono da casa" },
        correct: "B",
        background: "#FF4C4C", // Vermelho natalício
    },
    {
        question: "O meu cabelo é...",
        options: { A: "Castanho e liso", B: "Castanho e encaracolado" },
        correct: "B",
        background: "#FF4C4C", // Vermelho natalício
    },
    {
        question: "Eu e tu temos em comum...",
        options: { A: "Um cérebro brilhante mas com pouco juízo", B: "Já termos enfrentado a temida missão de depilação a laser no cu (porque coragem não nos falta)" },
        correct: "B",
        background: "#FF4C4C", // Vermelho natalício
    },
    {
        question: "Qual destas atividades já fizemos juntas...",
        options: { A: "Trocar videos e umas boas gargalhadas", B: "Discutir se o laser também podia polir o teu carro" },
        correct: "A",
        background: "#FF4C4C", // Vermelho natalício
    },
    {
        question: "Já sabes quem sou eu?",
        options: { A: "Beatriz Duarte (a lendária amiga secreta)", B: "Outra pessoa que gostaria de ser tão fixe quanto eu" },
        correct: "A",
        background: "#FF4C4C", // Vermelho natalício
    },
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const imageContainer = document.getElementById("image-container"); // Contêiner para imagem
    const question = questions[currentQuestionIndex];

    // Atualizar o fundo com a cor especificada
    document.body.style.backgroundColor = question.background;

    // Mostrar a pergunta
    questionElement.textContent = question.question;

    // Limpar opções e imagens anteriores
    optionsContainer.innerHTML = "";
    imageContainer.innerHTML = "";

    // Criar botões para as opções
    for (const [key, value] of Object.entries(question.options)) {
        const button = document.createElement("button");
        button.textContent = `${key}. ${value}`;
        button.onclick = () => checkAnswer(key);
        optionsContainer.appendChild(button);
    }

    // Mostrar imagem, se houver
    if (question.image) {
        const img = document.createElement("img");
        img.src = question.image;
        img.alt = "Imagem associada à pergunta";
        img.style.maxWidth = "300px"; // Tamanho da imagem
        img.style.marginTop = "20px";
        img.style.backgroundColor = "transparent"; // Força a transparência do fundo
        img.style.border = "none"; // Remove qualquer borda
        imageContainer.appendChild(img);
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
