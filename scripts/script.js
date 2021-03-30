$(document).ready(function () {

    // Gestion du menu dropdown
    function displayMenu() {
        document.getElementById('myDropdown').classList.toggle('show');
    }

    $('#menu').on("click", displayMenu)


    const feed = document.getElementById('feed')
    const header1 = document.createElement('div')
    header1.setAttribute('class', 'header1')
    const logo = document.createElement('img')
    logo.src = 'images/logo.png'
    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    feed.appendChild(container)
    header1.appendChild(logo)


    // Récupération des données de l'API et affichage du feed
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => {
            if (!response.ok) {
                throw new Error("La requête n'a pas aboutie")
            }
            return response.json()
        })
        .then((data) => {
            data.forEach((movie) => {
                const movielist = document.getElementById('movielist')
                const list = document.createElement('option')
                list.text = movie.title
                movielist.appendChild(list)

                const card = document.createElement('div')
                card.setAttribute('id', 'card')
                const h1 = document.createElement('h1')
                h1.textContent = movie.title
                const p = document.createElement('p')
                movie.description = movie.description.substring(0, 300)
                p.textContent = `${movie.description}...`

                function leaveComment() {
                    const name = document.getElementById('form1')
                    const com = document.getElementById('form2')
                    const nametext = document.createElement('p')
                    const comtext = document.createElement('p')
                    nametext.textContent = `Auteur : ${name.value}`
                    comtext.textContent = `Commentaires : ${com.value}`
                    card['id'] = list.text
                    console.log(card['id'])
                    if (list.text === card['id']) {
                        card.appendChild(comtext)
                        card.appendChild(nametext)
                    }
                }
      /*   document.querySelectorAll('#post')             Selecteur jQuery */

                container.appendChild(card)
                card.appendChild(h1)
                card.appendChild(p)

                $('#post').on("click", leaveComment)
            })

                .catch(error => {
                    console.error("Erreur:", error)
                })

        })


    // Fonction pour vider le feed
    function clearFeed() {
        let element = document.getElementById('feed')
        element.remove();
    }

    $('#clear').on("click", clearFeed)


    /* $('#form1').on("submit", e => {
            e.preventDefault();
            displayFeed()
        })
        */

})

