export default function pageLoad() {

    //Cache DOM
    let body = document.querySelector("body");
    let content = document.querySelector("#content");

    //Create initial DOM elements
    const background = new Image();
    background.src = "imgs/restaurant.jpg";
    background.classList.add("background");

    body.appendChild(background);

}