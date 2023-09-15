// Get nav bar elements
const nav = document.querySelector("nav");

// Get key(s) from browser session storage
let nav_isVisited = sessionStorage.getItem('nav-isVisited');

// This is nav bar session checker
if (nav_isVisited === null) {
    nav.style.animation = "screech .4s ease-in";
    sessionStorage.setItem('nav-isVisited', "true");
}
else nav.style.removeProperty("animation");