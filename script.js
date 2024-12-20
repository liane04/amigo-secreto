const questions = [
    {
        question: "O teu amigo secreto é...",
        options: { A: "Fantástico como uma estrela de cinema", B: "Maravilhosa e sempre cheia de surpresas" },
        correct: "B",
        background: "#FF4C4C", // Vermelho natalício
        image: "img/harry4.png", // Caminho para a imagem
    },
    {
        question: "A tua amiga secreta pertence...",
        options: { A: "A uma organização secreta chamada ROPE", B: "A um clube misterioso 'Clínicas NM' com superpoderes" },
        correct: "B",
        background: "#FF4C4C", // Vermelho natalício
        image: "img/1.png", // Caminho para a imagem
    },
    {
        question: "Qual é o meu animal preferido...",
        options: { A: "Um pinguim estiloso e positive", B: "Um gato que acha que é o dono da casa" },
        correct: "B",
        background: "#FF4C4C", // Vermelho natalício
        image: "img/formula2.png", // Caminho para a imagem
    },
    {
        question: "O meu cabelo é...",
        options: { A: "Castanho e encaracolado", B: "Castanho e liso" },
        correct: "A",
        background: "#FF4C4C", // Vermelho natalício
        image: "img/luffy1.png", // Caminho para a imagem
    },
    {
        question: "Eu e tu temos em comum...",
        options: { A: "Um cérebro brilhante mas com pouco juízo", B: "Já termos enfrentado a temida missão de depilação a laser no cu (porque coragem não nos falta)" },
        correct: "B",
        background: "#FF4C4C", // Vermelho natalício
        image: "img/levi.png", // Caminho para a imagem
    },
    {
        question: "Qual destas atividades já fizemos juntas...",
        options: { A: "Trocar videos e umas boas gargalhadas", B: "Discutir se o laser também podia polir o teu carro" },
        correct: "A",
        background: "#FF4C4C", // Vermelho natalício
        image: "img/annie.png", // Caminho para a imagem
    },
    {
        question: "Já sabes quem sou eu?",
        options: { A: "Beatriz Duarte (a lendária amiga secreta)", B: "Outra pessoa que gostaria de ser tão fixe quanto eu" },
        correct: "A",
        background: "#FF4C4C", // Vermelho natalício
        image: "img/blur.JPEG", // Caminho para a imagem
    },
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const imageContainer = document.getElementById("image-container");
    const question = questions[currentQuestionIndex];

    // Atualizar o fundo
    document.body.style.backgroundColor = question.background;

    // Mostrar a pergunta
    questionElement.textContent = question.question;

    // Limpar opções e imagem anteriores
    optionsContainer.innerHTML = "";
    imageContainer.innerHTML = "";

    // Criar botões para as opções
    for (const [key, value] of Object.entries(question.options)) {
        const button = document.createElement("button");
        button.textContent = `${key}. ${value}`;
        button.onclick = () => checkAnswer(key);
        optionsContainer.appendChild(button);
    }

    // Mostrar imagem se existir
    if (question.image) {
        const img = document.createElement("img");
        img.src = question.image;
        img.alt = "Imagem associada à pergunta";
        img.style.width = "250px"; // Define a largura
        img.style.height = "auto"; // Mantém a proporção
        img.style.marginTop = "20px"; // Espaçamento superior
         // Adicionar borda apenas para a imagem "blur.JPEG"
        
        if (question.image === "img/blur.JPEG" || question.image === "img/irma.jpg") {
        img.style.borderRadius = "10px"; // Borda arredondada
        }
        if (question.image === "img/harry4.png") {
            img.style.width = "300px"; // Largura maior para o Harry
            img.style.height = "auto"; // Mantém a proporção
        }
        imageContainer.appendChild(img);
    }
}


function checkAnswer(selected) {
    const question = questions[currentQuestionIndex];
    const message = document.getElementById("message");
    const imageContainer = document.getElementById("image-container");
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options");

    // Verificar se a resposta está correta
    if (selected === question.correct) {
        // Tocar o som ao acertar
        const audio = new Audio("som/1.mp4");
        audio.play();

        message.textContent = "Resposta certa! 🎉";
        message.style.color = "green";

        // Avançar para a próxima pergunta após 1 segundo
        setTimeout(() => {
            currentQuestionIndex++; // Incrementa o índice da pergunta
            if (currentQuestionIndex < questions.length) {
                displayQuestion(); // Mostra a próxima pergunta
            } else {
                // Exibir mensagem final e imagem
                message.textContent = "Conseguiste! Descobriste quem sou!!!";
                message.style.color = "#FFD700"; // Cor dourada

                // Limpar o conteúdo anterior
                questionContainer.innerHTML = "";
                optionsContainer.innerHTML = "";

                // Mostrar a imagem final
                const finalImage = document.createElement("img");
                finalImage.src = "img/irma.jpg"; // Caminho da imagem final
                finalImage.alt = "Foto final";
                finalImage.style.width = "300px"; // Tamanho da imagem
                finalImage.style.height = "auto";
                finalImage.style.marginTop = "20px";

                imageContainer.innerHTML = ""; // Limpa imagens anteriores
                imageContainer.appendChild(finalImage);

                // Tocar a música feliz ao final
                const finalMusic = new Audio("som/joanaa.mp3");
                finalMusic.play();
            }
        }, 1000); // Aguarda 1 segundo antes de avançar
    } else {
        message.textContent = "Resposta errada. Tenta novamente!";
        message.style.color = "red";
    }
}








// Inicializar o jogo
displayQuestion();
