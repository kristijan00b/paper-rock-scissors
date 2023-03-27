const game = () => {
    let pScore = 0;
    let cScore = 0;

    const playMatch = () => {
        const options = document.querySelectorAll(".options button")
        const playerHand = document.querySelector(".playerHand")
        const computerHand = document.querySelector(".computerHand")
        const hands = document.querySelectorAll(".hands img")

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        const computerOptions = ["paper", "rock", "scissors"]

        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    playerHand.src = `./assets/${this.textContent}.png`
                    computerHand.src = `./assets/${computerChoice}.png`
                }, 1000);
                playerHand.style.animation = "shakePlayer 1s ease";
                computerHand.style.animation = "shakeComputer 1s ease";
            })
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector(".player p");
        const computerScore = document.querySelector(".computer p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner")

        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie"
            return
        } else if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "You win"
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = "Computer wins"
                cScore++
                updateScore()
                return
            }
        } else if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer wins"
                cScore++
                updateScore()
                return
            } else {
                winner.textContent = "You win"
                pScore++
                updateScore()
                return
            }
        } else if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "You win"
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = "Computer wins"
                cScore++
                updateScore()
                return
            }
        }

    }

    playMatch()
}
game()