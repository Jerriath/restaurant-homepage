export default function() {
    
    //Cache DOM
    let menuContent = document.querySelector("#menuContent");

    //Create menu elements
    let drinksDiv = document.createElement("div");
    let drinksTitle = document.createElement("h1");
    let foodDiv = document.createElement("div");
    let foodTitle = document.createElement("h1");
    let drinkItems = document.createElement("div");
    let foodItems = document.createElement("div");

    //Adding css classes
    drinksDiv.classList.add("menuDiv");
    foodDiv.classList.add("menuDiv");
    drinksTitle.classList.add("menuTitle");
    foodTitle.classList.add("menuTitle");
    drinkItems.classList.add("menuItems");
    foodItems.classList.add("menuItems");

    //Adding text Content
    drinksTitle.textContent = "Drinks";
    foodTitle.textContent = "Food";
    
    //Creating menu image elements
    let beer = new Image();
    let mead = new Image();
    let fries = new Image();
    let tators = new Image();
    let burger = new Image();
    let chicken = new Image();

    //Adding image sources
    beer.src = "imgs/beer.jpeg";
    mead.src = "imgs/mead.jpg";
    fries.src = "imgs/fries.jpg";
    tators.src = "imgs/tators.jpg"
    burger.src = "imgs/burger.jpg";
    chicken.src = "imgs/chicken.jpg";

    //Create image divs
    let beerDiv = document.createElement("div");
    let meadDiv = document.createElement("div");
    let friesDiv = document.createElement("div");
    let tatorsDiv = document.createElement("div");
    let burgerDiv = document.createElement("div");
    let chickenDiv = document.createElement("div");

    //Append images
    beerDiv.appendChild(beer);
    meadDiv.appendChild(mead);
    friesDiv.appendChild(fries);
    tatorsDiv.appendChild(tators);
    burgerDiv.appendChild(burger);
    chickenDiv.appendChild(chicken);

    //Appending to menuContent
    drinksDiv.appendChild(drinksTitle);
    foodDiv.appendChild(foodTitle);
    menuContent.appendChild(drinksDiv);
    menuContent.appendChild(foodDiv);

    //Append each menu item to its appropriate div
    drinkItems.appendChild(beerDiv);
    drinkItems.appendChild(meadDiv);
    foodItems.appendChild(burgerDiv);
    foodItems.appendChild(chickenDiv);
    foodItems.appendChild(friesDiv);
    foodItems.appendChild(tatorsDiv);

    drinksDiv.appendChild(drinkItems);
    foodDiv.appendChild(foodItems);
}