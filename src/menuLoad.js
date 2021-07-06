export default function() {
    
    //Cache DOM
    let content = document.querySelector("#content");

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
    beerDiv.classList.add("imageDiv");
    meadDiv.classList.add("imageDiv");
    friesDiv.classList.add("imageDiv");
    tatorsDiv.classList.add("imageDiv");
    burgerDiv.classList.add("imageDiv");
    chickenDiv.classList.add("imageDiv");

    //Append images
    beerDiv.appendChild(beer);
    meadDiv.appendChild(mead);
    friesDiv.appendChild(fries);
    tatorsDiv.appendChild(tators);
    burgerDiv.appendChild(burger);
    chickenDiv.appendChild(chicken);

    //Create food text elements
    let beerText = document.createElement("p");
    let meadText = document.createElement("p");
    let friesText = document.createElement("p");
    let tatorsText = document.createElement("p");
    let burgerText = document.createElement("p");
    let chickenText = document.createElement("p");
    beerText.textContent = "Beer";
    meadText.textContent = "Mead";
    friesText.textContent = "Fries";
    tatorsText.textContent = "Tator Tots";
    burgerText.textContent = "Burger";
    chickenText.textContent = "Chicken Sandwich";
    beerText.classList.add("foodText");
    meadText.classList.add("foodText");
    friesText.classList.add("foodText");
    tatorsText.classList.add("foodText");
    burgerText.classList.add("foodText");
    chickenText.classList.add("foodText");

    //Append food Text
    beerDiv.appendChild(beerText);
    meadDiv.appendChild(meadText);
    friesDiv.appendChild(friesText);
    tatorsDiv.appendChild(tatorsText);
    burgerDiv.appendChild(burgerText);
    chickenDiv.appendChild(chickenText);

    //Appending to content
    drinksDiv.appendChild(drinksTitle);
    foodDiv.appendChild(foodTitle);
    content.appendChild(drinksDiv);
    content.appendChild(foodDiv);

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