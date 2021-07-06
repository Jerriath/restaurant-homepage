export default function createBackgrounds() {
    let body = document.querySelector("body");
    let background = new Image(); //Background image for home and contact
    background.src = "imgs/restaurant.jpg";
    background.id = "background";
    background.classList.add("background");
    background.style.opacity = 1;

    const food = new Image(); //Background image for menu
    food.src = "imgs/food.jpeg";
    food.id = "food";
    food.classList.add("background");

    //Images are overlayed and the "background" opacity is set to 0 to see "food"
    body.appendChild(background);
    body.appendChild(food);
}