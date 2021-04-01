$(document).ready(function () {

    let divPlayer = document.querySelector('#playerChoice')
    let divResult = document.querySelector('#resultGame')
    let divComputer = document.querySelector('#computerChoice')

    let player = document.querySelector('#playerChoice p')
    let comp = document.querySelector('#computerChoice p')
    let playerChoice = player.text
    let compChoice = comp.text

    let buttonRock = document.querySelector('#rock')
    let buttonPaper = document.querySelector('#paper')
    let buttonScissors = document.querySelector('#scissors')

    let win = document.createElement('p')
    let lose = document.createElement('p')
    let tied = document.createElement('p')
    win.textContent = 'Vous avez gagné!'
    lose.textContent = 'Vous avez perdu...'
    tied.textContent = 'Egalité!'

    let rock = document.createElement('p')
    rock.textContent = buttonRock.value
    let paper = document.createElement('p')
    paper.textContent = buttonPaper.value
    let scissors = document.createElement('p')
    scissors.textContent = buttonScissors.value


    let compChoices = [
        "Pierre",
        "Feuille",
        "Ciseaux"
    ]

    buttonRock.addEventListener('click', function (evt) {
        divPlayer.innerHTML = ""
        divPlayer.appendChild(rock)
        getComputerChoice()
        findWinner()
        console.log(playerChoice)
        console.log(compChoice)
    })
    buttonPaper.addEventListener('click', function (evt) {
        divPlayer.innerHTML = ""
        divPlayer.appendChild(paper)
        getComputerChoice()
        findWinner()
        console.log(player)
        console.log(compChoice)
    })
    buttonScissors.addEventListener('click', function (evt) {
        divPlayer.innerHTML = ""
        divPlayer.appendChild(scissors)
        getComputerChoice()
        findWinner()
        console.log(playerChoice)
        console.log(compChoice)
    })

    function getComputerChoice() {

        let rockComp = document.createElement('p')
        let paperComp = document.createElement('p')
        let scissorsComp = document.createElement('p')
        rockComp.textContent = compChoices[0]
        paperComp.textContent = compChoices[1]
        scissorsComp.textContent = compChoices[2]

        let numberChoice = Math.floor(Math.random() * 3);
        divComputer.innerHTML = ""
        switch (numberChoice) {
            case 0 :
                divComputer.appendChild(rockComp)
                break;
            case 1 :
                divComputer.appendChild(paperComp)
                break;
            case 2 :
                divComputer.appendChild(scissorsComp)
                break;
        }
    }

    function findWinner() {

        if (playerChoice === compChoice) {
            divResult.appendChild(tied)
        }
        if (playerChoice === rock.textContent) {
            if (compChoice === scissors.textContent) {
                divResult.appendChild(win)
            } else {
                divResult.appendChild(lose)
            }
        } else if (playerChoice === paper.textContent) {
            if (compChoice === rock.textContent) {
                divResult.appendChild(win)
            } else {
                divResult.appendChild(lose)
            }
        } else if (playerChoice === scissors.textContent) {
            if (compChoice === paper.textContent) {
                divResult.appendChild(win)
            } else {
                divResult.appendChild(lose)
            }
        }
    }

    /*

            function findWinner(playerChoice, computerChoice) {

                } else if (playerChoice === computerChoice) {
                    return "Tied : égalité";
                } else if (playerChoice === "rock") {
                    if (computerChoice === "scissors") {
                        return "Won : l'utilisateur a gagné";
                    } else {
                        return "Lost : l'utilisateur a perdu";
                    }
                } else if (playerChoice === "paper") {
                    if (computerChoice === "rock") {
                        return "Won : l'utilisateur a gagné";
                    } else {
                        return "Lost : l'utilisateur a perdu";
                    }
                } else if (playerChoice === "scissors") {
                    if (computerChoice === "paper") {
                        return "Won : l'utilisateur a gagné";
                    } else {
                        return "Lost : l'utilisateur a perdu";
                    }
                } else {
                    return "Oups, there is an issue, this case wouldn't happen";
                }
            }



            function playGame() {
                let uChoice = getPlayerChoice();
                let computerChoice = getComputerChoice();
                console.log("player : " + uChoice);
                console.log("computer : " + computerChoice);
                console.log(findWinner(uChoice, computerChoice));
            }



            playGame();
        */

})