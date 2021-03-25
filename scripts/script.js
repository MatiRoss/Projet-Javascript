$(document).ready(function () {

    const app = document.getElementById('feed')
    const logo = document.createElement('img')
    logo.src = 'images/logo.png'
    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    app.appendChild(logo)
    app.appendChild(container)

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
                    card.setAttribute('class', 'card')
                    const h1 = document.createElement('h1')
                    h1.textContent = movie.title
                    const p = document.createElement('p')
                    movie.description = movie.description.substring(0, 300)
                    p.textContent = `${movie.description}...`
                    container.appendChild(card)
                    card.appendChild(h1)
                    card.appendChild(p)
                })
            }
        )
        .catch(error => {
            console.error("Erreur:", error)
        });
})


/*  let request = new XMLHttpRequest()

  request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
  request.onload = function () {
      let data = JSON.parse(this.response)
      if (request.status >= 200 && request.status < 400) {
          data.forEach((movie) => {
              const card = document.createElement('div')
              card.setAttribute('class', 'card')
              const h1 = document.createElement('h1')
              h1.textContent = movie.title
              const p = document.createElement('p')
              movie.description = movie.description.substring(0, 300)
              p.textContent = `${movie.description}...`
              container.appendChild(card)
              card.appendChild(h1)
              card.appendChild(p)
          })
      } else {
          console.log('error')
      }
  }

  request.send()
})
*/