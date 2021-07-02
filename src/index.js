import homeLoad from "./homeLoad.js";

homeLoad();

//Cache DOM
let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let contact = document.querySelector("#contact");

let homeContent = document.querySelector("#homeContent");
let background = document.querySelector("#background");

menu.addEventListener("click", hideHome);
contact.addEventListener("click", hideHome);
home.addEventListener("click", showHome);

//Function to set everything in the DOM to hidden (for switching tabs)
function hideHome() {
    if (window.getComputedStyle(homeContent).visibility == "visible")
    {
        homeContent.style.visibility = "hidden";
        homeContent.style.opacity = "0";
        homeContent.style.transition = "visibility 0s .5s, opacity .5s linear";
    }
}

function showHome() {
    if (window.getComputedStyle(homeContent).visibility == "hidden")
    {
        homeContent.style.visibility = "visible";
        homeContent.style.opacity = "1";
        homeContent.style.transition = "visibility 0s, opacity .5s linear";
    }
}