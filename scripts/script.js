$(document).ready(function () {

    function displayMenu() {
        document.getElementById('myDropdown').classList.toggle('show');
    }

    $('#menu').on("click", displayMenu)


    const app = document.getElementById('feed')
    const header1 = document.createElement('div')
    header1.setAttribute('class','header1')
    const logo = document.createElement('img')
    logo.src = 'images/logo.png'
    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    const h3 = document.getElementById('h3')
    app.append(h3)
    app.appendChild(container)
    header1.appendChild(logo)

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


});


  /*  $.ajax({
        //L'URL de la requête
        url: "https://ghibliapi.herokuapp.com/films",

        //La méthode d'envoi (type de requête)
        method: "GET",

        //Le format de réponse attendu
        dataType : "json",
    })
        //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
        /*On peut par exemple convertir cette réponse en chaine JSON et insérer
         * cette chaine dans un div id="res"*/
    /*    .done(function(response){
            let data = JSON.stringify(response);
                $("div#feed").append(data);
            })

        })

        //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
        //On peut afficher les informations relatives à la requête et à l'erreur
        .fail(function(error){
            alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        //Ce code sera exécuté que la requête soit un succès ou un échec
        .always(function(){
            alert("Requête effectuée");
        });
});


 let request = new XMLHttpRequest()

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