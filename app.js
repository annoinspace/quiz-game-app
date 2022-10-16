const startButton = document.getElementById("start-btn")
startButton.addEventListener("click", startGame)
const questionContainer = document.getElementById("questionContainer")

function startGame() {
  startButton.classList.add("hide")
  questionContainer.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {}

function selectAnswer() {}
