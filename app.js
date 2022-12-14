const questions = [
  {
    question: "Who plays Jang Uk? ",
    answer_options: [
      { text: "Hwang Min-hyun", correct: false },
      { text: "Lee Jae-wook", correct: true },
      { text: "Shin Seung-ho", correct: false },
      { text: "Park Dang-gu", correct: false }
    ]
  },
  {
    question: "Is Naksu's soul in Mu-deok's body?",
    answer_options: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Why is Bu-yeon a powerful priestess?",
    correct_answer:
      "She is the decendant of the two most powerful mage lineages",
    answer_options: [
      { text: "She has the ice stone", correct: false },
      { text: "Because she is blind", correct: false },
      {
        text: "She is the decendant of the two most powerful mage lineages",
        correct: true
      },
      { text: "She is the heiress of Jinyowon", correct: false }
    ]
  },
  {
    question: "What is the Queen's secret?",
    answer_options: [
      {
        text: "She is Shaman Choi, living in the Queen's body",
        correct: true
      },
      { text: "She hates her son", correct: false },
      { text: "She has no magical ability", correct: false },
      { text: "Her daughter is Mu-deok", correct: false }
    ]
  },
  {
    question: "Is Jang-Gang Jang-Uk's real father?",
    answer_options: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Who unblocked Jang-Uk's energy gate?",
    answer_options: [
      { text: "Jin Mu", correct: false },
      { text: "Maidservant Kim", correct: false },
      { text: "Heo Yeom", correct: true },
      { text: "Park Jin", correct: false }
    ]
  }
]
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainer = document.getElementById("questionContainer")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  questionContainer.classList.remove("hide")
  setNextQuestion()
}
function setNextQuestion() {
  resetQuizBox()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answer_options.forEach((answer_options) => {
    const button = document.createElement("button")
    button.innerText = answer_options.text
    button.classList.add("btn")
    if (answer_options.correct) {
      button.dataset.correct = answer_options.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetQuizBox() {
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}
