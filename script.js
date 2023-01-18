const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

let box1 = document.querySelector("#box1");

box1.firstElementChild.classList.remove("inner");
box1.firstElementChild.classList.add("inner2");

let  interval = setInterval(function() { box1.getBoundingClientRect().top <= 0 ? changeClass() : null}, 1000/60);

function changeClass() {
    box1.firstElementChild.classList.remove("inner2");
    box1.firstElementChild.classList.add("inner");
    clearInterval(interval);
}


