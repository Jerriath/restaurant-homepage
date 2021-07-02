import pageLoad from "./pageLoad.js";

pageLoad();

//Cache DOM
let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let contact = document.querySelector("contact");



//Function to set everything in the DOM to hidden (for switching tabs)
function hideAll() {
    hours.style.visibility = "hidden";
    title.style.visibility = "hidden";
}