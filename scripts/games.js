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

    let divTitle = document.querySelector('#titleMemory')
    let title = document.createElement('h3')
    let option = document.createElement('option')
    let difficulty = document.querySelector('#menuMemory')
    let divGame = document.querySelector('#displayGame')


    fetch('https://api.mocki.io/v1/f0b3f83b')
        .then(response => {
            if (!response.ok) {
                throw new Error("La requête n'a pas aboutie")
            }
            return response.json()
        })
        .then((data) => {

            title.textContent = data.title
            divTitle.appendChild(title)
            option.innerHTML = data.niveau
            difficulty.appendChild(option)


            data.images.forEach((link) => {
                    let array = [0, 1, 2, 3, 4]
                    let result = array[Math.floor(Math.random() * array.length)]
                    link = data.images[result]
                    let divPic = document.createElement('div')
                    let divImage = document.createElement('div')
                    let image = document.createElement('img')
                    image.setAttribute('class', 'hidden')
                    let picture = document.createElement('img')
                    picture.setAttribute('class', 'hidden')

                    divGame.appendChild(divPic)
                    divGame.appendChild(divImage)
                    picture.setAttribute("src", link)
                    image.setAttribute("src", link)
                    divImage.appendChild(image)
                    divPic.appendChild(picture)

                }
            )


        })
        .catch(error => {
            console.error("Erreur:", error)
        })


})