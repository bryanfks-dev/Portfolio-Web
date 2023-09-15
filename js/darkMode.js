// Get elements
const toggle = document.querySelector("#toggle");
let mode = document.querySelector("#mode");
const body = document.querySelector("body");

// Get key(s) from browser local storage
let darkMode = localStorage.getItem('dark');

// Define dark mode functions
const enableDarkMode = () => {
    // Change the icon from sun into moon
    mode.className = mode.className.replace("bxs-sun", "bxs-moon");

    // Add 'dark' into html objects class name list
    body.classList.add('dark');
}

const disableDarkMode = () => {
    // Change the icon from moon into sun
    mode.className = mode.className.replace("bxs-moon", "bxs-sun");
    
    // Remove 'dark' from html objects class name list
    body.classList.remove('dark');
}

const changeToDark = () => {
    // Change mode to dark mode
    localStorage.setItem('dark', 'true');
    enableDarkMode();
}

const changeToLight = () => {
    // Change mode to light mode
    localStorage.setItem('dark', 'false');
    disableDarkMode();
}

// Enable dark mode if dark mode is enable or current client's device mode is in dark mode
// `darkMode === null` assume client visit the website for the first time
if (darkMode === "true" || (darkMode === null 
    && matchMedia('(prefers-color-scheme: dark)').matches)) enableDarkMode();
else  disableDarkMode();

// Listen to "onclick" toggle event
toggle.addEventListener("click", () => {
    // Assume dark mode is disabled or check if local storage hasn't been made and client's device mode is currently in light mode 
    if (localStorage.getItem('dark') === "false" || (localStorage.getItem('dark') === null 
        && matchMedia('(prefers-color-scheme: light)').matches)) changeToDark();
    else changeToLight();
});

// Listen to client's device mode (light mode or night mode) changes
matchMedia('(prefers-color-scheme: dark)').addEventListener("change", event => {
    // Check if key hasn't been made yet
    if (localStorage.getItem('dark') === null) {
        // Match dark mode from client's device
        if (!event.matches) disableDarkMode();
        else enableDarkMode();
    }
});

