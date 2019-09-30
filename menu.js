document.addEventListener("DOMContentLoaded", init);

function init() {
    let menuToggle = document.getElementById("js-menu-toggle");
    let menu = document.getElementById("js-nav-items");

    menuToggle.onclick = () => {
        menu.classList.toggle('is-active');
        menuToggle.setAttribute("aria-expanded", true);
    }

}