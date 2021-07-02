import homeLoad from "./homeLoad.js";

homeLoad();

//Cache DOM
let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let contact = document.querySelector("#contact");

let homeContent = document.querySelector("#homeContent");
let menuContent = document.querySelector("#menuContent");
let contactContent = document.querySelector("#contactContent");
let background = document.querySelector("#background");

menu.addEventListener("click", showMenu);
menu.addEventListener("click", hideHome);
menu.addEventListener("click", hideContact);
menu.addEventListener("click", toggleBackground);
contact.addEventListener("click", showContact);
contact.addEventListener("click", hideHome);
contact.addEventListener("click", hideMenu);
contact.addEventListener("click", toggleBackground);
home.addEventListener("click", showHome);
home.addEventListener("click", hideMenu);
home.addEventListener("click", hideContact);
home.addEventListener("click", toggleBackground);

//Function to set everything in the DOM to hidden (for switching tabs)
function hideHome() {
    if (window.getComputedStyle(homeContent).visibility == "visible")
    {
        homeContent.style.visibility = "hidden";
        homeContent.style.opacity = "0";
        homeContent.style.transition = "visibility 0s .5s, opacity .5s linear";
    }
}

function hideMenu() {
    if (window.getComputedStyle(menuContent).visibility == "visible")
    {
        menuContent.style.visibility = "hidden";
        menuContent.style.opacity = "0";
        menuContent.style.transition = "visibility 0s .5s, opacity .5s linear";
    }
}


function hideContact() {
    if (window.getComputedStyle(contactContent).visibility == "visible")
    {
        contactContent.style.visibility = "hidden";
        contactContent.style.opacity = "0";
        contactContent.style.transition = "visibility 0s .5s, opacity .5s linear";
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

function showMenu() {
    if (window.getComputedStyle(menuContent).visibility == "hidden")
    {
        menuContent.style.visibility = "visible";
        menuContent.style.opacity = "1";
        menuContent.style.transition = "visibility 0s, opacity .5s linear";
    }
}

function showContact() {
    if (window.getComputedStyle(contactContent).visibility == "hidden")
    {
        contactContent.style.visibility = "visible";
        contactContent.style.opacity = "1";
        contactContent.style.transition = "visibility 0s, opacity .5s linear";
    }
}

function toggleBackground() {
    if (background.style.opacity == 1 && homeContent.style.visibility == "hidden" && contactContent.style.visibility != "visible")
    {
        background.style.opacity = 0;
    }
    else if (background.style.opacity == 0 && menuContent.style.visibility == "hidden" && contactContent.style.visibility == "hidden" || background.style.opacity == 0 && menuContent.style.visibility == "hidden" && homeContent.style.visibility == "hidden")
    {
        background.style.opacity = 1;
    }
}