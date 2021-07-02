export default function pageLoad() {

    //Cache DOM
    let body = document.querySelector("body");
    let homeContent = document.querySelector("#homeContent");

    //Create homepage DOM elements
    const background = new Image(); //Background image
    background.src = "imgs/restaurant.jpg";
    background.id = "background";
    background.classList.add("background");

    const food = new Image();
    food.src = "imgs/food.jpeg";
    food.id = "food";
    food.classList.add("background");
    food.style.zIndex = "-1";
    food.style.opacity = "0";
    food.classList.add("opaque");


    const header = document.createElement("header"); //Header div
    header.classList.add("header");

    const navHolder = document.createElement("div"); //Div to hold navBar
    navHolder.classList.add("navHolder");

    const navBar = document.createElement("nav"); //Nav element
    navBar.classList.add("navBar");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.id = "title";

    const hours = document.createElement("div");
    hours.classList.add("hours");
    hours.id = "hours";

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

    //Create elements for the content div
    let title = document.createElement("h1");
    let message = document.createElement("h2");
    let lineBreak = document.createElement("br");

    //Fill text content for content elements
    title.textContent = "The New Saloon";
    message.textContent = "The modern hangout spot for everyone!";

    //Append elements to titleDiv
    titleDiv.appendChild(title);
    titleDiv.appendChild(lineBreak);
    titleDiv.appendChild(message);

    //Append titleDiv to content
    homeContent.appendChild(titleDiv);

    //Create elements for the restaurant operation hours
    let sunday = document.createElement("p");
    let monday = document.createElement("p");
    let tuesday = document.createElement("p");
    let wednesday = document.createElement("p");
    let thursday = document.createElement("p");
    let friday = document.createElement("p");
    let saturday = document.createElement("p");

    sunday.textContent = "Sunday:   12pm - 11am";
    monday.textContent = "Monday:   12pm - 10am";
    tuesday.textContent = "Tuesday: 12pm - 10am";
    wednesday.textContent = "Wednesday: 12pm - 10am";
    thursday.textContent = "Thursday:   12pm - 10am";
    friday.textContent = "Friday:   12pm - 12am";
    saturday.textContent = "Saturday:   12pm - 12am";

    //Append times to hours div
    hours.appendChild(sunday);
    hours.appendChild(monday);
    hours.appendChild(tuesday);
    hours.appendChild(wednesday);
    hours.appendChild(thursday);
    hours.appendChild(friday);
    hours.appendChild(saturday);

    homeContent.appendChild(hours);


    body.appendChild(background);
    body.appendChild(food);
    body.appendChild(header);

}