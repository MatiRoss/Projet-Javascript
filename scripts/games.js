$(document).ready(function () {

    let divPlayer = document.querySelector('#playerChoice')
    let divResult = document.querySelector('#resultGame')
    let divComputer = document.querySelector('#computerChoice')

    let buttonRock = document.querySelector('#rock')
    let buttonPaper = document.querySelector('#paper')
    let buttonScissors = document.querySelector('#scissors')

    let playerP = document.createElement('p')
    let compP = document.createElement('p')
    let playerChoice
    let compChoice

    let win = document.createElement('p')
    let lose = document.createElement('p')
    let tied = document.createElement('p')

    win.textContent = 'Vous avez gagné!'
    lose.textContent = 'Vous avez perdu...'
    tied.textContent = 'Egalité!'

    const choices = [
        "Pierre",
        "Feuille",
        "Ciseaux"
    ]


    function getComputerChoice() {

        divComputer.innerHTML = ""
        let randomNumber = Math.floor(Math.random() * 3)

        switch (randomNumber) {
            case 0 :
                compChoice = choices[0]
                compP.textContent = compChoice
                divComputer.appendChild(compP)
                break;
            case 1 :
                compChoice = choices[1]
                compP.textContent = compChoice
                divComputer.appendChild(compP)
                break;
            case 2 :
                compChoice = choices[2]
                compP.textContent = compChoice
                divComputer.appendChild(compP)
                break;
        }
    }

    function findWinner() {

        divResult.innerHTML = ""

        if (playerChoice === compChoice) {
            divResult.appendChild(tied)
        } else if (playerChoice === choices[0]) {
            if (compChoice === choices[2]) {
                divResult.appendChild(win)
            } else {
                divResult.appendChild(lose)
            }
        } else if (playerChoice === choices[1]) {
            if (compChoice === choices[0]) {
                divResult.appendChild(win)
            } else {
                divResult.appendChild(lose)
            }
        } else if (playerChoice === choices[2]) {
            if (compChoice === choices[1]) {
                divResult.appendChild(win)
            } else {
                divResult.appendChild(lose)
            }
        }
    }

    buttonRock.addEventListener('click', function (evt) {
        divPlayer.innerHTML = ""
        playerChoice = choices[0]
        playerP.textContent = playerChoice
        divPlayer.appendChild(playerP)
        getComputerChoice()
        findWinner()

    })
    buttonPaper.addEventListener('click', function (evt) {
        divPlayer.innerHTML = ""
        playerChoice = choices[1]
        playerP.textContent = playerChoice
        divPlayer.appendChild(playerP)
        getComputerChoice()
        findWinner()

    })
    buttonScissors.addEventListener('click', function (evt) {
        divPlayer.innerHTML = ""
        playerChoice = choices[2]
        playerP.textContent = playerChoice
        divPlayer.appendChild(playerP)
        getComputerChoice()
        findWinner()

    })

})