
// Quiz info
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerElems = document.querySelectorAll('.answer')
const questionElem = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuestion = 0
let score = 0


// Run
loadQuestion()


// Load quiz
function loadQuestion() {
    deselectAnswers()

    const currentQuestionData = quizData[currentQuestion]

    questionElem.innerText = currentQuestionData.question
    a_text.innerText = currentQuestionData.a
    b_text.innerText = currentQuestionData.b
    c_text.innerText = currentQuestionData.c
    d_text.innerText = currentQuestionData.d
}


// Clear inputs
function deselectAnswers() {
    answerElems.forEach(answerEl => answerEl.checked = false)
}


// Get selected answer
function getSelected() {
    let answer

    answerElems.forEach(answerEl => {
        if ( answerEl.checked ) {
            answer = answerEl.id
        }
    })

    return answer
}


// Listener - Submit button
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if ( answer )  {

        // Correct answer
        if ( answer === quizData[currentQuestion].correct ) {
            score++
        }

        // Next question
        currentQuestion++

        // Load next question
        if ( currentQuestion < quizData.length ) {
            loadQuestion()
        }
        // or show results
        else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Play again</button>
            `
        }
    }
})