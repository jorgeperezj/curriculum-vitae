//
// Scripts de traducción
//

let data = {};

let callBack = function(datos){
    data = datos[0];
}

function translate() {
    document.getElementById("lastname").innerText = data.lastname;
    document.getElementById("rols").innerText = data.rols;
    document.getElementById("rol").innerText = data.rol;
    document.getElementById("descriptionQA").innerText = data.descriptionQA;
    document.getElementById("descriptionDev").innerText = data.descriptionDev;
    document.getElementById("function1").innerText = data.functions;
    document.getElementById("function2").innerText = data.functions;

    document.getElementById("aboutm").innerText = data.menu.about;
    document.getElementById("experiencem").innerText = data.menu.experience;
    document.getElementById("educationm").innerText = data.menu.education;
    document.getElementById("skillsm").innerText = data.menu.skills;
    document.getElementById("interestsm").innerText = data.menu.interests;
    document.getElementById("certificationm").innerText = data.menu.certification;

    document.getElementById("experiencet").innerText = data.menu.experience;
    document.getElementById("educationt").innerText = data.menu.education;
    document.getElementById("skillst").innerText = data.menu.skills;
    document.getElementById("interestst").innerText = data.menu.interests;
    document.getElementById("certificationt").innerText = data.menu.certification;

    document.getElementById("datesExpUnab").innerText = data.datesExp.unab.dates;
    document.getElementById("datesExpSynap").innerText = data.datesExp.synaptek.dates;
    document.getElementById("functionsUnab").innerText = data.datesExp.unab.functions;
    document.getElementById("functionsSynap").innerText = data.datesExp.synaptek.functions;

    document.getElementById("datesSena").innerText = data.datesEdu.sena.dates;
    document.getElementById("datesUis").innerText = data.datesEdu.uis.dates;
    document.getElementById("datesPlatzi").innerText = data.datesEdu.platzi.dates;
}

let button = document.getElementById("button");
button.addEventListener("click", translate);

//
// ##################### Eventos del DOM #####################
//

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});