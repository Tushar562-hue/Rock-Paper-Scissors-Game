let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {       // Arrow Function
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if(userWin) {       // userWin == true
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }   else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if(userChoice == compChoice) {
        // Draw game
        drawGame();
    }   else {
        let userWin = true;
        if(userChoice == "rock") {
            // scissor, paper
            userWin = compChoice == "paper" ? false : true;
        }   else if(userChoice == "paper") {
            // rock, scissors
            userWin = compChoice == "scissor" ? false : true;
        }   else {
            // rock, paper
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})