import homeLoad from "./homeLoad.js";
import menuLoad from "./menuLoad.js";
import contactLoad from "./contactLoad.js";
import createBackground from "./createBackground.js";
import createHeader from "./createHeader.js";

//Cache DOM
let content = document.querySelector("#content");

//Extra imported functions for creating static elements
createBackground();
createHeader();


homeLoad();

menu.addEventListener("click", showMenu);
menu.addEventListener("click", toggleBackground);
contact.addEventListener("click", showContact);
contact.addEventListener("click", toggleBackground);
home.addEventListener("click", showHome);
home.addEventListener("click", toggleBackground);

//Function to set everything in the DOM to0(for switching tabs)
function showHome() {
    if (content.classList.item(0) != "homeContent")
    {
        content.classList.remove(content.classList.item(0));
        content.classList.add("homeContent");
        content.style.opacity = 0;
        setTimeout(waitHome, 500);
    }
}

function showMenu() {
    if (content.classList.item(0) != "menuContent")
    {
        content.classList.remove(content.classList.item(0));
        content.classList.add("menuContent");
        content.style.opacity = 0;
        setTimeout(waitMenu, 500);
    }
}

function showContact() {
    if (content.classList.item(0) != "contactContent")
    {
        content.classList.remove(content.classList.item(0));
        content.classList.add("contactContent");
        content.style.opacity = 0;
        setTimeout(waitContact, 500);
    }
}

//Function to switch between the two backgrounds overlayed on each other
function toggleBackground() {
    if (content.classList.item(0) == "menuContent")
    {
        background.style.opacity = 0;
    }
    else
    {
        background.style.opacity = 1;
    }
}

//Function to clear the content div
function removeAllChildNodes() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}


//These functions wrap together other functions so that the fade out effect can take
//place (via setTimeout) before the old elements are removed
function waitHome() {
    removeAllChildNodes();
    homeLoad();
    content.style.opacity = 1;
    toggleBackground();
}

function waitMenu() {
    removeAllChildNodes();
    menuLoad();
    content.style.opacity = 1;
    toggleBackground();
}

function waitContact() {
    removeAllChildNodes();
    contactLoad();
    content.style.opacity = 1;
    toggleBackground();
}