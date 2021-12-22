var nBar = document.getElementById('navBar');
var nIcon = document.getElementById('navIcon');
var fCDiv = document.getElementById('fourthDiv');

nIcon.addEventListener('click', () => {


        nBar.classList.toggle('d-none');
        nIcon.classList.toggle('changeColor');
    })
    /*
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 578) {

            nBar.classList.toggle("navbarDropdown");


        }
    })*/