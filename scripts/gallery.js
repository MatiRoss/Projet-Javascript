$(document).ready(function () {

        function removeElementById(id) {
            let remove = document.getElementById(id);
            remove.innerHTML = '';
        }

        let rowDisplay = true
        let gallery = [
            "https://numero.twic.pics/2020-10/hayao-miyazaki-tapisseries-aubusson-studio-ghibli-voyage-de-chihiro-princesse-mononoke-numero-magazine1.png",
            "https://i.pinimg.com/originals/77/e8/c3/77e8c3a0d31b3cf2bafb001b2d856de7.png",
            "http://www.spotern.com/fr/blog/wp-content/uploads/2017/09/ghibli_miyazaki-1.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCw1JfUR96QCd-AWVcP7W7Z_22Cz4HZdgvwg&usqp=CAU",
            "https://media2.woopic.com/api/v1/images/219%2Fwebedia-articles%2Fdaf%2F5b6%2F6cac99e8e8069c69260e1e9c1b%2F1513867-l-album-un-cow-boy-dans-le-coton-aux-e-orig-1.png?format=822x700&quality=85"
        ]

        function addImages() {
            gallery.forEach((e, index) => {
                let image = document.createElement('img')
                image.setAttribute("src", e)
                if (rowDisplay === true) {
                    let galleryRow = document.querySelector('#galleryRow')
                    galleryRow.appendChild(image)
                } else {
                    let galleryColumn = document.querySelector('#galleryColumn')
                    galleryColumn.appendChild(image)
                }
            })
        }

        $('#row').click(event => {
            removeElementById('galleryRow')
            removeElementById('galleryColumn')
            rowDisplay = true
            addImages()
        })

        $('#column').click(event => {
            removeElementById('galleryRow')
            removeElementById('galleryColumn')
            rowDisplay = false
            addImages()
        })

        addImages()


        function addImageUrl() {
            const urlImage = document.querySelector('#url').value
            gallery.unshift(urlImage)
        }

        $('#addPic').click(event => {
            addImageUrl()
            removeElementById('galleryRow')
            removeElementById('galleryColumn')
            addImages()
        })

        /*
            function displayRow() {
                const containerRow = document.querySelector('#galleryRow')
                gallery.forEach((e, index) => {
                    let image = document.createElement('img')
                    image.setAttribute("src", e)
                    containerRow.appendChild(image)
                })

            }

            $('#row').on("click", displayRow)

            function displayColumn() {
                const containerColumn = document.querySelector('#galleryColumn')
                gallery.forEach((e, index) => {
                    let image = document.createElement('img')
                    image.setAttribute("src", e)
                    containerColumn.appendChild(image)
                })
            }

            $('#column').on("click", displayColumn)

        */

    }
)