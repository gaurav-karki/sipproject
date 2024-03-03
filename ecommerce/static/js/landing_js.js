// Include Ionicons library
const ioniconsScript = document.createElement('script');
ioniconsScript.src = 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js';
document.head.appendChild(ioniconsScript);

// Your JavaScript code
const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");

close.addEventListener("click", () => {
    menu.style.visibility = "hidden";
});

open.addEventListener("click", () => {
    menu.style.visibility = "visible";
});