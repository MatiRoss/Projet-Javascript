$(document).ready(function () {


    const feed = document.querySelector('#feed')
    const header1 = document.createElement('div')
    header1.setAttribute('class', 'header1')
    const logo = document.createElement('img')
    logo.src = 'images/logo.png'
    const container = document.createElement('div')
    container.setAttribute('id', 'container')
    const movielist = document.querySelector('#movielist')
    feed.appendChild(container)
    header1.appendChild(logo)

    function leaveComment() {
        const name = document.querySelector('#form1')
        const com = document.querySelector('#form2')
        const nametext = document.createElement('p')
        const comtext = document.createElement('p')

        nametext.textContent = `Auteur : ${name.value}`
        comtext.textContent = `Commentaires : ${com.value}`
        const film = movielist.value
        let card = document.getElementById(film)

        let buttonRemove = document.createElement('button')
        buttonRemove.setAttribute('type', 'button')
        buttonRemove.setAttribute('class', 'removeBtn')
        buttonRemove.textContent = 'Effacer le commentaire'

        card.appendChild(comtext)
        card.appendChild(nametext)
        card.appendChild(buttonRemove)

        buttonRemove.addEventListener('click', function (evt) {

            card.removeChild(comtext)
            card.removeChild(nametext)
            card.removeChild(buttonRemove)

        })
    }

    $('#post').on("click", leaveComment)

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

                const card = document.createElement('div')
                card.setAttribute('id', movie.id)
                card.setAttribute('class', 'card')
                let option = document.createElement('option')
                option.setAttribute('value', movie.id)
                option.innerHTML = movie.title
                const h1 = document.createElement('h1')
                h1.textContent = movie.title
                const p = document.createElement('p')
                movie.description = movie.description.substring(0, 300)
                p.textContent = `${movie.description}...`

                container.appendChild(card)
                movielist.appendChild(option)
                card.appendChild(h1)
                card.appendChild(p)

            })

        })
        .catch(error => {
            console.error("Erreur:", error)
        })

    // Fonction pour vider le feed
    /*  function clearFeed() {
          let element = document.getElementById('feed')
          element.remove();
      }

      $('#clear').on("click", clearFeed)


// Pour empêcher le fonctionnement par défaut de submit
       $('#form1').on("submit", e => {
              e.preventDefault();
              displayFeed()
          })
          */

})
