import homeLoad from "./homeLoad.js";
import menuLoad from "./menuLoad.js";
import contactLoad from "./contactLoad.js";

//Cache DOM
let content = document.querySelector("#content");
let body = document.querySelector("body");


//Create and append background images
let background = new Image(); //Background image
background.src = "imgs/restaurant.jpg";
background.id = "background";
background.classList.add("background");
background.style.opacity = 1;

const food = new Image();
food.src = "imgs/food.jpeg";
food.id = "food";
food.classList.add("background");

//Create Header elements
const header = document.createElement("header"); //Header div
header.classList.add("header");

const navHolder = document.createElement("div"); //Div to hold navBar
navHolder.classList.add("navHolder");

const navBar = document.createElement("nav"); //Nav element
navBar.classList.add("navBar");

//Creates the elements to fill the navBar
let home = document.createElement("button");
home.id = "home";
let homeText = document.createElement("p");
homeText.textContent = "Home";
home.appendChild(homeText);
homeText.classList.add("navText")
let menu = document.createElement("button");
menu.id = "menu";
let menuText = document.createElement("p");
menuText.textContent = "Menu";
menu.appendChild(menuText);
menuText.classList.add("navText")
let contact = document.createElement("button");
contact.id = "contact";
let contactText = document.createElement("p");
contactText.textContent = "Contact";
contact.appendChild(contactText);
contactText.classList.add("navText")

//Append all elements to header/navHolder/navBar
navBar.appendChild(home);
navBar.appendChild(menu);
navBar.appendChild(contact);
navHolder.appendChild(navBar);
header.appendChild(navHolder);

body.appendChild(background);
body.appendChild(food);
body.appendChild(header);


homeLoad();

menu.addEventListener("click", showMenu);
menu.addEventListener("click", toggleBackground);
contact.addEventListener("click", showContact);
contact.addEventListener("click", toggleBackground);
home.addEventListener("click", showHome);
home.addEventListener("click", toggleBackground);

//Function to set everything in the DOM to hidden (for switching tabs)
function showHome() {
    if (content.classList.item(0) != "homeContent")
    {
        content.classList.remove(content.classList.item(0));
        content.classList.add("homeContent");
        content.style.visibility = "hidden";
        removeAllChildNodes(content);
        homeLoad();
        content.style.transition = "visibility 0s, opacity .5s linear";
        content.style.visibility = "visible";
        toggleBackground();
    }
}

function showMenu() {
    if (content.classList.item(0) != "menuContent")
    {
        content.classList.remove(content.classList.item(0));
        content.style.visibility = "";
        content.classList.add("menuContent");
        content.style.visibility = "hidden";
        window.setTimeout(removeAllChildNodes(content), 500);
        menuLoad();
        content.style.transition = "visibility 0s, opacity .5s linear";
        content.style.visibility = "visible";
        toggleBackground();
    }
}

function showContact() {
    if (content.classList.item(0) != "contactContent")
    {
        content.classList.remove(content.classList.item(0));
        content.classList.add("contactContent");
        content.style.visibility = "hidden";
        removeAllChildNodes(content);
        contactLoad();
        content.style.transition = "visibility 0s, opacity .5s linear";
        content.style.visibility = "visible";
        toggleBackground();
    }
}

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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}