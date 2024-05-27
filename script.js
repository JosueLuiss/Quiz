document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const quizQuestions = [
        {
            question: "Qual é a cor do céu?",
            answers: {
                a: "Azul",
                b: "Verde",
                c: "Vermelho"
            },
            correctAnswer: "a"
        },
        {
            question: "Qual é o maior planeta do nosso sistema solar?",
            answers: {
                a: "Terra",
                b: "Marte",
                c: "Júpiter"
            },
            correctAnswer: "c"
        },
        {
            question: "Qual é a capital da França?",
            answers: {
                a: "Berlim",
                b: "Madri",
                c: "Paris"
            },
            correctAnswer: "c"
        },
        {
            question: "Quem pintou a Mona Lisa?",
            answers: {
                a: "Vincent van Gogh",
                b: "Leonardo da Vinci",
                c: "Pablo Picasso"
            },
            correctAnswer: "b"
        },
        {
            question: "Qual é o elemento químico representado pelo símbolo O?",
            answers: {
                a: "Oxigênio",
                b: "Ouro",
                c: "Osmio"
            },
            correctAnswer: "a"
        },
        {
            question: "Qual é a capital do Brasil?",
            answers: {
                a: "Rio de Janeiro",
                b: "Brasília",
                c: "São Paulo"
            },
            correctAnswer: "b"
        },
        {
            question: "Qual é o idioma oficial da China?",
            answers: {
                a: "Mandarim",
                b: "Cantonês",
                c: "Japonês"
            },
            correctAnswer: "a"
        },
        {
            question: "Qual é o maior oceano do mundo?",
            answers: {
                a: "Atlântico",
                b: "Índico",
                c: "Pacífico"
            },
            correctAnswer: "c"
        },
        {
            question: "Quem escreveu 'Dom Quixote'?",
            answers: {
                a: "Miguel de Cervantes",
                b: "Gabriel García Márquez",
                c: "Jorge Luis Borges"
            },
            correctAnswer: "a"
        },
        {
            question: "Qual é o menor país do mundo?",
            answers: {
                a: "Mônaco",
                b: "Vaticano",
                c: "San Marino"
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz() {
        const output = [];
        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
                answerContainers[questionNumber].innerHTML += `<p class="correct-answer">Resposta correta: ${currentQuestion.correctAnswer} - ${currentQuestion.answers[currentQuestion.correctAnswer]}</p>`;
            }
        });

        resultsContainer.innerHTML = `Você acertou ${numCorrect} de ${quizQuestions.length} perguntas.`;
    }

    buildQuiz();
    submitButton.addEventListener('click', showResults);
});