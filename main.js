/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactLoad.js":
/*!****************************!*\
  !*** ./src/contactLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

    //Cache DOM
    let contactContent = document.querySelector("#contactContent");

    //Create contact elements
    let contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv");
    let textDiv = document.createElement("div");
    textDiv.classList.add("contactItems");
    let mapDiv = document.createElement("div");
    mapDiv.classList.add("contactItems");
    let mapImg = new Image();
    mapImg.src = "imgs/map.png"
    mapImg.classList.add("contactImg");

    //Create and append text elements to the textDiv
    let number = document.createElement("p");
    number.classList.add("contactText");
    number.textContent = "Phone Number: 8008111135"
    let address = document.createElement("p");
    address.classList.add("contactText");
    address.textContent = "Address: 1012 NY-24, Flanders, NY 11901"
    let message = document.createElement("p");
    message.classList.add("contactText");
    message.textContent = "Check us out on Google Streetview!!!";
    textDiv.appendChild(number);
    textDiv.appendChild(address);
    textDiv.appendChild(message);

    mapDiv.appendChild(mapImg);
    contactDiv.appendChild(textDiv);
    contactDiv.appendChild(mapDiv);
    contactContent.appendChild(contactDiv);

}

/***/ }),

/***/ "./src/homeLoad.js":
/*!*************************!*\
  !*** ./src/homeLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad() {

    //Cache DOM
    let body = document.querySelector("body");
    let homeContent = document.querySelector("#homeContent");
    let menuContent = document.querySelector("#menuContent");
    let contactContent = document.querySelector("#contactContent");



    //Create homepage DOM elements
    const background = new Image(); //Background image
    background.src = "imgs/restaurant.jpg";
    background.id = "background";
    background.classList.add("background");
    background.style.opacity = 1;

    const food = new Image();
    food.src = "imgs/food.jpeg";
    food.id = "food";
    food.classList.add("background");


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

/***/ }),

/***/ "./src/menuLoad.js":
/*!*************************!*\
  !*** ./src/menuLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeLoad.js */ "./src/homeLoad.js");
/* harmony import */ var _menuLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuLoad.js */ "./src/menuLoad.js");
/* harmony import */ var _contactLoad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactLoad.js */ "./src/contactLoad.js");




(0,_homeLoad_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_menuLoad_js__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_contactLoad_js__WEBPACK_IMPORTED_MODULE_2__.default)();

//Cache DOM
let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let contact = document.querySelector("#contact");

let homeContent = document.querySelector("#homeContent");
let menuContent = document.querySelector("#menuContent");
let contactContent = document.querySelector("#contactContent");
let background = document.querySelector("#background");
homeContent.style.visibility = "visible";
menuContent.style.visibility = "hidden";
contactContent.style.visibility = "hidden";

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbnRhY3RMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaG9tZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9tZW51TG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUFlLHNDQUFXOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7Ozs7O0FDbkNlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esb0RBQW9EO0FBQ3BEOztBQUVBLG9EQUFvRDtBQUNwRDs7QUFFQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7Ozs7QUNySEEsNkJBQWUsc0NBQVc7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7OztVQzNHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0E7QUFDTTs7QUFFM0MscURBQVE7QUFDUixxREFBUTtBQUNSLHdEQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICAgIC8vQ2FjaGUgRE9NXG4gICAgbGV0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0Q29udGVudFwiKTtcblxuICAgIC8vQ3JlYXRlIGNvbnRhY3QgZWxlbWVudHNcbiAgICBsZXQgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdERpdlwiKTtcbiAgICBsZXQgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEl0ZW1zXCIpO1xuICAgIGxldCBtYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hcERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEl0ZW1zXCIpO1xuICAgIGxldCBtYXBJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXBJbWcuc3JjID0gXCJpbWdzL21hcC5wbmdcIlxuICAgIG1hcEltZy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEltZ1wiKTtcblxuICAgIC8vQ3JlYXRlIGFuZCBhcHBlbmQgdGV4dCBlbGVtZW50cyB0byB0aGUgdGV4dERpdlxuICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBudW1iZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RUZXh0XCIpO1xuICAgIG51bWJlci50ZXh0Q29udGVudCA9IFwiUGhvbmUgTnVtYmVyOiA4MDA4MTExMTM1XCJcbiAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RUZXh0XCIpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkFkZHJlc3M6IDEwMTIgTlktMjQsIEZsYW5kZXJzLCBOWSAxMTkwMVwiXG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0VGV4dFwiKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJDaGVjayB1cyBvdXQgb24gR29vZ2xlIFN0cmVldHZpZXchISFcIjtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKG51bWJlcik7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgbWFwRGl2LmFwcGVuZENoaWxkKG1hcEltZyk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKG1hcERpdik7XG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcblxuICAgIC8vQ2FjaGUgRE9NXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVDb250ZW50XCIpO1xuICAgIGxldCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudUNvbnRlbnRcIik7XG4gICAgbGV0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0Q29udGVudFwiKTtcblxuXG5cbiAgICAvL0NyZWF0ZSBob21lcGFnZSBET00gZWxlbWVudHNcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7IC8vQmFja2dyb3VuZCBpbWFnZVxuICAgIGJhY2tncm91bmQuc3JjID0gXCJpbWdzL3Jlc3RhdXJhbnQuanBnXCI7XG4gICAgYmFja2dyb3VuZC5pZCA9IFwiYmFja2dyb3VuZFwiO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRcIik7XG4gICAgYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICAgIGNvbnN0IGZvb2QgPSBuZXcgSW1hZ2UoKTtcbiAgICBmb29kLnNyYyA9IFwiaW1ncy9mb29kLmpwZWdcIjtcbiAgICBmb29kLmlkID0gXCJmb29kXCI7XG4gICAgZm9vZC5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiKTtcblxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTsgLy9IZWFkZXIgZGl2XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBuYXZIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL0RpdiB0byBob2xkIG5hdkJhclxuICAgIG5hdkhvbGRlci5jbGFzc0xpc3QuYWRkKFwibmF2SG9sZGVyXCIpO1xuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTsgLy9OYXYgZWxlbWVudFxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2QmFyXCIpO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZURpdi5pZCA9IFwidGl0bGVcIjtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XG4gICAgaG91cnMuaWQgPSBcImhvdXJzXCI7XG5cbiAgICAvL0NyZWF0ZXMgdGhlIGVsZW1lbnRzIHRvIGZpbGwgdGhlIG5hdkJhclxuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lLmlkID0gXCJob21lXCI7XG4gICAgbGV0IGhvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaG9tZVRleHQudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVUZXh0KTtcbiAgICBob21lVGV4dC5jbGFzc0xpc3QuYWRkKFwibmF2VGV4dFwiKVxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51LmlkID0gXCJtZW51XCI7XG4gICAgbGV0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudVRleHQudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVUZXh0KTtcbiAgICBtZW51VGV4dC5jbGFzc0xpc3QuYWRkKFwibmF2VGV4dFwiKVxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0XCI7XG4gICAgbGV0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29udGFjdFRleHQudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0KTtcbiAgICBjb250YWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwibmF2VGV4dFwiKVxuXG4gICAgLy9BcHBlbmQgYWxsIGVsZW1lbnRzIHRvIGhlYWRlci9uYXZIb2xkZXIvbmF2QmFyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgbmF2SG9sZGVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkhvbGRlcik7XG5cbiAgICAvL0NyZWF0ZSBlbGVtZW50cyBmb3IgdGhlIGNvbnRlbnQgZGl2XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxldCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBsaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG5cbiAgICAvL0ZpbGwgdGV4dCBjb250ZW50IGZvciBjb250ZW50IGVsZW1lbnRzXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSBOZXcgU2Fsb29uXCI7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiVGhlIG1vZGVybiBoYW5nb3V0IHNwb3QgZm9yIGV2ZXJ5b25lIVwiO1xuXG4gICAgLy9BcHBlbmQgZWxlbWVudHMgdG8gdGl0bGVEaXZcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQobGluZUJyZWFrKTtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblxuICAgIC8vQXBwZW5kIHRpdGxlRGl2IHRvIGNvbnRlbnRcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICAvL0NyZWF0ZSBlbGVtZW50cyBmb3IgdGhlIHJlc3RhdXJhbnQgb3BlcmF0aW9uIGhvdXJzXG4gICAgbGV0IHN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBtb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgdHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCB3ZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgdGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgZnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHNhdHVyZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBzdW5kYXkudGV4dENvbnRlbnQgPSBcIlN1bmRheTogICAxMnBtIC0gMTFhbVwiO1xuICAgIG1vbmRheS50ZXh0Q29udGVudCA9IFwiTW9uZGF5OiAgIDEycG0gLSAxMGFtXCI7XG4gICAgdHVlc2RheS50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogMTJwbSAtIDEwYW1cIjtcbiAgICB3ZWRuZXNkYXkudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheTogMTJwbSAtIDEwYW1cIjtcbiAgICB0aHVyc2RheS50ZXh0Q29udGVudCA9IFwiVGh1cnNkYXk6ICAgMTJwbSAtIDEwYW1cIjtcbiAgICBmcmlkYXkudGV4dENvbnRlbnQgPSBcIkZyaWRheTogICAxMnBtIC0gMTJhbVwiO1xuICAgIHNhdHVyZGF5LnRleHRDb250ZW50ID0gXCJTYXR1cmRheTogICAxMnBtIC0gMTJhbVwiO1xuXG4gICAgLy9BcHBlbmQgdGltZXMgdG8gaG91cnMgZGl2XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoc3VuZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChtb25kYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHR1ZXNkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHdlZG5lc2RheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQodGh1cnNkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGZyaWRheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoc2F0dXJkYXkpO1xuXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vZCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgLy9DYWNoZSBET01cbiAgICBsZXQgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVDb250ZW50XCIpO1xuXG4gICAgLy9DcmVhdGUgbWVudSBlbGVtZW50c1xuICAgIGxldCBkcmlua3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBkcmlua3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBsZXQgZm9vZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGZvb2RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBsZXQgZHJpbmtJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGZvb2RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvL0FkZGluZyBjc3MgY2xhc3Nlc1xuICAgIGRyaW5rc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudURpdlwiKTtcbiAgICBmb29kRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51RGl2XCIpO1xuICAgIGRyaW5rc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51VGl0bGVcIik7XG4gICAgZm9vZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51VGl0bGVcIik7XG4gICAgZHJpbmtJdGVtcy5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1zXCIpO1xuICAgIGZvb2RJdGVtcy5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1zXCIpO1xuXG4gICAgLy9BZGRpbmcgdGV4dCBDb250ZW50XG4gICAgZHJpbmtzVGl0bGUudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuICAgIGZvb2RUaXRsZS50ZXh0Q29udGVudCA9IFwiRm9vZFwiO1xuICAgIFxuICAgIC8vQ3JlYXRpbmcgbWVudSBpbWFnZSBlbGVtZW50c1xuICAgIGxldCBiZWVyID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IG1lYWQgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgZnJpZXMgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgdGF0b3JzID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGJ1cmdlciA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBjaGlja2VuID0gbmV3IEltYWdlKCk7XG5cbiAgICAvL0FkZGluZyBpbWFnZSBzb3VyY2VzXG4gICAgYmVlci5zcmMgPSBcImltZ3MvYmVlci5qcGVnXCI7XG4gICAgbWVhZC5zcmMgPSBcImltZ3MvbWVhZC5qcGdcIjtcbiAgICBmcmllcy5zcmMgPSBcImltZ3MvZnJpZXMuanBnXCI7XG4gICAgdGF0b3JzLnNyYyA9IFwiaW1ncy90YXRvcnMuanBnXCJcbiAgICBidXJnZXIuc3JjID0gXCJpbWdzL2J1cmdlci5qcGdcIjtcbiAgICBjaGlja2VuLnNyYyA9IFwiaW1ncy9jaGlja2VuLmpwZ1wiO1xuXG4gICAgLy9DcmVhdGUgaW1hZ2UgZGl2c1xuICAgIGxldCBiZWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbWVhZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGZyaWVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdGF0b3JzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYnVyZ2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY2hpY2tlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmVlckRpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VEaXZcIik7XG4gICAgbWVhZERpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VEaXZcIik7XG4gICAgZnJpZXNEaXYuY2xhc3NMaXN0LmFkZChcImltYWdlRGl2XCIpO1xuICAgIHRhdG9yc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VEaXZcIik7XG4gICAgYnVyZ2VyRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZURpdlwiKTtcbiAgICBjaGlja2VuRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZURpdlwiKTtcblxuICAgIC8vQXBwZW5kIGltYWdlc1xuICAgIGJlZXJEaXYuYXBwZW5kQ2hpbGQoYmVlcik7XG4gICAgbWVhZERpdi5hcHBlbmRDaGlsZChtZWFkKTtcbiAgICBmcmllc0Rpdi5hcHBlbmRDaGlsZChmcmllcyk7XG4gICAgdGF0b3JzRGl2LmFwcGVuZENoaWxkKHRhdG9ycyk7XG4gICAgYnVyZ2VyRGl2LmFwcGVuZENoaWxkKGJ1cmdlcik7XG4gICAgY2hpY2tlbkRpdi5hcHBlbmRDaGlsZChjaGlja2VuKTtcblxuICAgIC8vQ3JlYXRlIGZvb2QgdGV4dCBlbGVtZW50c1xuICAgIGxldCBiZWVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBtZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBmcmllc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgdGF0b3JzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBidXJnZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGNoaWNrZW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmVlclRleHQudGV4dENvbnRlbnQgPSBcIkJlZXJcIjtcbiAgICBtZWFkVGV4dC50ZXh0Q29udGVudCA9IFwiTWVhZFwiO1xuICAgIGZyaWVzVGV4dC50ZXh0Q29udGVudCA9IFwiRnJpZXNcIjtcbiAgICB0YXRvcnNUZXh0LnRleHRDb250ZW50ID0gXCJUYXRvciBUb3RzXCI7XG4gICAgYnVyZ2VyVGV4dC50ZXh0Q29udGVudCA9IFwiQnVyZ2VyXCI7XG4gICAgY2hpY2tlblRleHQudGV4dENvbnRlbnQgPSBcIkNoaWNrZW4gU2FuZHdpY2hcIjtcbiAgICBiZWVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG4gICAgbWVhZFRleHQuY2xhc3NMaXN0LmFkZChcImZvb2RUZXh0XCIpO1xuICAgIGZyaWVzVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG4gICAgdGF0b3JzVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG4gICAgYnVyZ2VyVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG4gICAgY2hpY2tlblRleHQuY2xhc3NMaXN0LmFkZChcImZvb2RUZXh0XCIpO1xuXG4gICAgLy9BcHBlbmQgZm9vZCBUZXh0XG4gICAgYmVlckRpdi5hcHBlbmRDaGlsZChiZWVyVGV4dCk7XG4gICAgbWVhZERpdi5hcHBlbmRDaGlsZChtZWFkVGV4dCk7XG4gICAgZnJpZXNEaXYuYXBwZW5kQ2hpbGQoZnJpZXNUZXh0KTtcbiAgICB0YXRvcnNEaXYuYXBwZW5kQ2hpbGQodGF0b3JzVGV4dCk7XG4gICAgYnVyZ2VyRGl2LmFwcGVuZENoaWxkKGJ1cmdlclRleHQpO1xuICAgIGNoaWNrZW5EaXYuYXBwZW5kQ2hpbGQoY2hpY2tlblRleHQpO1xuXG4gICAgLy9BcHBlbmRpbmcgdG8gbWVudUNvbnRlbnRcbiAgICBkcmlua3NEaXYuYXBwZW5kQ2hpbGQoZHJpbmtzVGl0bGUpO1xuICAgIGZvb2REaXYuYXBwZW5kQ2hpbGQoZm9vZFRpdGxlKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChkcmlua3NEaXYpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGZvb2REaXYpO1xuXG4gICAgLy9BcHBlbmQgZWFjaCBtZW51IGl0ZW0gdG8gaXRzIGFwcHJvcHJpYXRlIGRpdlxuICAgIGRyaW5rSXRlbXMuYXBwZW5kQ2hpbGQoYmVlckRpdik7XG4gICAgZHJpbmtJdGVtcy5hcHBlbmRDaGlsZChtZWFkRGl2KTtcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQoYnVyZ2VyRGl2KTtcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQoY2hpY2tlbkRpdik7XG4gICAgZm9vZEl0ZW1zLmFwcGVuZENoaWxkKGZyaWVzRGl2KTtcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQodGF0b3JzRGl2KTtcblxuICAgIGRyaW5rc0Rpdi5hcHBlbmRDaGlsZChkcmlua0l0ZW1zKTtcbiAgICBmb29kRGl2LmFwcGVuZENoaWxkKGZvb2RJdGVtcyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZUxvYWQgZnJvbSBcIi4vaG9tZUxvYWQuanNcIjtcbmltcG9ydCBtZW51TG9hZCBmcm9tIFwiLi9tZW51TG9hZC5qc1wiO1xuaW1wb3J0IGNvbnRhY3RMb2FkIGZyb20gXCIuL2NvbnRhY3RMb2FkLmpzXCI7XG5cbmhvbWVMb2FkKCk7XG5tZW51TG9hZCgpO1xuY29udGFjdExvYWQoKTtcblxuLy9DYWNoZSBET01cbmxldCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5sZXQgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcblxubGV0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lQ29udGVudFwiKTtcbmxldCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudUNvbnRlbnRcIik7XG5sZXQgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RDb250ZW50XCIpO1xubGV0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhY2tncm91bmRcIik7XG5ob21lQ29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5tZW51Q29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbmNvbnRhY3RDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlSG9tZSk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlQ29udGFjdCk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVCYWNrZ3JvdW5kKTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dDb250YWN0KTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVIb21lKTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVNZW51KTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUJhY2tncm91bmQpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0hvbWUpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZU1lbnUpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUNvbnRhY3QpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQmFja2dyb3VuZCk7XG5cbi8vRnVuY3Rpb24gdG8gc2V0IGV2ZXJ5dGhpbmcgaW4gdGhlIERPTSB0byBoaWRkZW4gKGZvciBzd2l0Y2hpbmcgdGFicylcbmZ1bmN0aW9uIGhpZGVIb21lKCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShob21lQ29udGVudCkudmlzaWJpbGl0eSA9PSBcInZpc2libGVcIilcbiAgICB7XG4gICAgICAgIGhvbWVDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBob21lQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIGhvbWVDb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInZpc2liaWxpdHkgMHMgLjVzLCBvcGFjaXR5IC41cyBsaW5lYXJcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVNZW51KCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51Q29udGVudCkudmlzaWJpbGl0eSA9PSBcInZpc2libGVcIilcbiAgICB7XG4gICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBtZW51Q29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInZpc2liaWxpdHkgMHMgLjVzLCBvcGFjaXR5IC41cyBsaW5lYXJcIjtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gaGlkZUNvbnRhY3QoKSB7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhY3RDb250ZW50KS52aXNpYmlsaXR5ID09IFwidmlzaWJsZVwiKVxuICAgIHtcbiAgICAgICAgY29udGFjdENvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGNvbnRhY3RDb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgY29udGFjdENvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwidmlzaWJpbGl0eSAwcyAuNXMsIG9wYWNpdHkgLjVzIGxpbmVhclwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd0hvbWUoKSB7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGhvbWVDb250ZW50KS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCIpXG4gICAge1xuICAgICAgICBob21lQ29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIGhvbWVDb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgaG9tZUNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwidmlzaWJpbGl0eSAwcywgb3BhY2l0eSAuNXMgbGluZWFyXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudUNvbnRlbnQpLnZpc2liaWxpdHkgPT0gXCJoaWRkZW5cIilcbiAgICB7XG4gICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBtZW51Q29udGVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJ2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IC41cyBsaW5lYXJcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDb250YWN0KCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWN0Q29udGVudCkudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiKVxuICAgIHtcbiAgICAgICAgY29udGFjdENvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICBjb250YWN0Q29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIGNvbnRhY3RDb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInZpc2liaWxpdHkgMHMsIG9wYWNpdHkgLjVzIGxpbmVhclwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQmFja2dyb3VuZCgpIHtcbiAgICBpZiAoYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID09IDEgJiYgaG9tZUNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiICYmIGNvbnRhY3RDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgIT0gXCJ2aXNpYmxlXCIpXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgICBlbHNlIGlmIChiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPT0gMCAmJiBtZW51Q29udGVudC5zdHlsZS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCIgJiYgY29udGFjdENvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiIHx8IGJhY2tncm91bmQuc3R5bGUub3BhY2l0eSA9PSAwICYmIG1lbnVDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPT0gXCJoaWRkZW5cIiAmJiBob21lQ29udGVudC5zdHlsZS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCIpXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9