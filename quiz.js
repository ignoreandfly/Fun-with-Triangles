var formQuiz = document.querySelector(".quiz")
var submitBtn = document.querySelector("#score-btn")
var outputbox = document.querySelector("#output-box")

var correctAnswer = ["45°", "Equilateral", "180","Equal","60"]

function scoreHandler() {
    score = 0;
    index = 0;
    var formResults = new FormData(formQuiz);

    for (let value of formResults.values()) {
        if (value === correctAnswer[index]) {

            score = score + 1;
        }

        index = index + 1;

    }
    outputbox.innerText = "Your final score is " + score;
}

submitBtn.addEventListener("click", scoreHandler)