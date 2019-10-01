document.addEventListener("DOMContentLoaded", init);

function init() {
    initHamburgerMenu();
    initKeyboardNavigation();
}

function initKeyboardNavigation() {
    document.querySelectorAll('.nav-item').forEach((navitem) => navitem.addEventListener('keydown', function(e) {
        if (e.key == 'Enter' || e.keyCode == 13) {
            let destination = e.target.getElementsByTagName('a')[0].click();
        }
    }));
}

function initHamburgerMenu() {
    let menuToggle = document.getElementById("js-menu-toggle");
    let menu = document.getElementById("js-nav-items");
    menuToggle.onclick = () => {
        menu.classList.toggle('is-active');
        menuToggle.setAttribute("aria-expanded", true);
    };
}