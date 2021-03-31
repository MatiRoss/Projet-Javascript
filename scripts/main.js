$(document).ready(function () {

// Gestion du menu dropdown
    function displayMenu() {
        document.querySelector('#myDropdown').classList.toggle('show');
    }

    $('#menu').on("click", displayMenu)


})