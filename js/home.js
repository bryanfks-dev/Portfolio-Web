// This is preload codes
let desc = document.querySelector("#desc")

const content ="I'm Bryan, I'm a ";

// Declare pointer and typing deceleration (timeout)
let i = 0;
const decelaration = 170;

// Define typewriter function
function type() {
    // Make a span as node element
    const span = document.createElement("span");
    span.setAttribute('id', 'desc-in');
    span.classList.add("text-3xl");

    // Append span into container
    desc.appendChild(span);

    // Typing content
    // Define content inside variable to type
    new Typed("#desc-in", {
        strings: [
            "Person.",
            "Student.",
            "Coder.",
            "Dreamer."
        ],
        loop: true,
        typeSpeed: 200,
        backSpeed: 200,
        backDelay: 3000
    });
}

function typeWrite() {
    // This is the writting animation
    if (i < content.length) {
        // Add every char one by one from content into preload content InnerHTML
        desc.innerHTML += content.charAt(i);
        // Add 1 i value
        i++;

        // Check if typing is done
        if (i === content.length) {
            type();
        }
    }

    // Set timeout or delay on this function
    setTimeout(typeWrite, decelaration);
}

// Check if this page is visited
// Declare HTML elements that needed to animated
const h1 = document.querySelector("h1");
const line = document.querySelector("#line");
const descContainer = document.querySelector("#desc-container");
const img = document.querySelector("img");

// Get key(s) from browser session storage
let home_isVisited = sessionStorage.getItem('home-isVisited');

if (home_isVisited === null) {
    h1.style.animation = "showBar 2s linear";
    h1.style.setProperty("--block-animation", "cursorBlocking 1s linear");
    if (matchMedia('(min-device-width: 1024px)').matches) {
        line.style.animation = "renderLine_1024px 2s linear";
        descContainer.style.animation = "renderDesc_1024px 1s linear";
    }
    else {
        line.style.animation = "renderLine 2s linear";
        descContainer.style.animation = "renderDesc 1s linear";
    }
    img.style.animation = "fadeIn 1.5s ease-in";
    sessionStorage.setItem("home-isVisited", "true");
}
else {
    h1.style.removeProperty("animation");
    h1.style.removeProperty("--block-animation")
    line.style.removeProperty("animation");
    desc.innerHTML = content;
    type();
    img.style.removeProperty("animation");
}

// Set left margin for main section
// Get elements
let section = document.querySelector("section");

// Define set section's left margin function
function setLeftMargin() {
    section.style.marginLeft = nav.getBoundingClientRect().width + "px";
}