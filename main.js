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
    let content = document.querySelector("#content");

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
    content.appendChild(contactDiv);

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
    let content = document.querySelector("#content");
    content.classList.add("homeContent");


    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.id = "title";

    const hours = document.createElement("div");
    hours.classList.add("hours");
    hours.id = "hours";


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
    content.appendChild(titleDiv);

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

    content.appendChild(hours);


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


(0,_homeLoad_js__WEBPACK_IMPORTED_MODULE_0__.default)();

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
        (0,_homeLoad_js__WEBPACK_IMPORTED_MODULE_0__.default)();
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
        (0,_menuLoad_js__WEBPACK_IMPORTED_MODULE_1__.default)();
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
        (0,_contactLoad_js__WEBPACK_IMPORTED_MODULE_2__.default)();
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbnRhY3RMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaG9tZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9tZW51TG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUFlLHNDQUFXOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7Ozs7O0FDbkNlOztBQUVmO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxDOzs7Ozs7Ozs7Ozs7OztBQzlEQSw2QkFBZSxzQ0FBVzs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7O1VDM0dBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDQTtBQUNNOztBQUUzQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBLGdEQUFnRDtBQUNoRDs7QUFFQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EscURBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgLy9DYWNoZSBET01cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIC8vQ3JlYXRlIGNvbnRhY3QgZWxlbWVudHNcbiAgICBsZXQgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdERpdlwiKTtcbiAgICBsZXQgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEl0ZW1zXCIpO1xuICAgIGxldCBtYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hcERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEl0ZW1zXCIpO1xuICAgIGxldCBtYXBJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXBJbWcuc3JjID0gXCJpbWdzL21hcC5wbmdcIlxuICAgIG1hcEltZy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEltZ1wiKTtcblxuICAgIC8vQ3JlYXRlIGFuZCBhcHBlbmQgdGV4dCBlbGVtZW50cyB0byB0aGUgdGV4dERpdlxuICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBudW1iZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RUZXh0XCIpO1xuICAgIG51bWJlci50ZXh0Q29udGVudCA9IFwiUGhvbmUgTnVtYmVyOiA4MDA4MTExMTM1XCJcbiAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RUZXh0XCIpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkFkZHJlc3M6IDEwMTIgTlktMjQsIEZsYW5kZXJzLCBOWSAxMTkwMVwiXG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0VGV4dFwiKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJDaGVjayB1cyBvdXQgb24gR29vZ2xlIFN0cmVldHZpZXchISFcIjtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKG51bWJlcik7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgbWFwRGl2LmFwcGVuZENoaWxkKG1hcEltZyk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKG1hcERpdik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuXG4gICAgLy9DYWNoZSBET01cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lQ29udGVudFwiKTtcblxuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZURpdi5pZCA9IFwidGl0bGVcIjtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XG4gICAgaG91cnMuaWQgPSBcImhvdXJzXCI7XG5cblxuICAgIC8vQ3JlYXRlIGVsZW1lbnRzIGZvciB0aGUgY29udGVudCBkaXZcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICAgIC8vRmlsbCB0ZXh0IGNvbnRlbnQgZm9yIGNvbnRlbnQgZWxlbWVudHNcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIE5ldyBTYWxvb25cIjtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJUaGUgbW9kZXJuIGhhbmdvdXQgc3BvdCBmb3IgZXZlcnlvbmUhXCI7XG5cbiAgICAvL0FwcGVuZCBlbGVtZW50cyB0byB0aXRsZURpdlxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWspO1xuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgLy9BcHBlbmQgdGl0bGVEaXYgdG8gY29udGVudFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgLy9DcmVhdGUgZWxlbWVudHMgZm9yIHRoZSByZXN0YXVyYW50IG9wZXJhdGlvbiBob3Vyc1xuICAgIGxldCBzdW5kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgbW9uZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHR1ZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgd2VkbmVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHRodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBzYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgc3VuZGF5LnRleHRDb250ZW50ID0gXCJTdW5kYXk6ICAgMTJwbSAtIDExYW1cIjtcbiAgICBtb25kYXkudGV4dENvbnRlbnQgPSBcIk1vbmRheTogICAxMnBtIC0gMTBhbVwiO1xuICAgIHR1ZXNkYXkudGV4dENvbnRlbnQgPSBcIlR1ZXNkYXk6IDEycG0gLSAxMGFtXCI7XG4gICAgd2VkbmVzZGF5LnRleHRDb250ZW50ID0gXCJXZWRuZXNkYXk6IDEycG0gLSAxMGFtXCI7XG4gICAgdGh1cnNkYXkudGV4dENvbnRlbnQgPSBcIlRodXJzZGF5OiAgIDEycG0gLSAxMGFtXCI7XG4gICAgZnJpZGF5LnRleHRDb250ZW50ID0gXCJGcmlkYXk6ICAgMTJwbSAtIDEyYW1cIjtcbiAgICBzYXR1cmRheS50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXk6ICAgMTJwbSAtIDEyYW1cIjtcblxuICAgIC8vQXBwZW5kIHRpbWVzIHRvIGhvdXJzIGRpdlxuICAgIGhvdXJzLmFwcGVuZENoaWxkKHN1bmRheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQobW9uZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZCh0dWVzZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZCh3ZWRuZXNkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHRodXJzZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChmcmlkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHNhdHVyZGF5KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvL0NhY2hlIERPTVxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgLy9DcmVhdGUgbWVudSBlbGVtZW50c1xuICAgIGxldCBkcmlua3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBkcmlua3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBsZXQgZm9vZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGZvb2RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBsZXQgZHJpbmtJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGZvb2RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvL0FkZGluZyBjc3MgY2xhc3Nlc1xuICAgIGRyaW5rc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudURpdlwiKTtcbiAgICBmb29kRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51RGl2XCIpO1xuICAgIGRyaW5rc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51VGl0bGVcIik7XG4gICAgZm9vZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51VGl0bGVcIik7XG4gICAgZHJpbmtJdGVtcy5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1zXCIpO1xuICAgIGZvb2RJdGVtcy5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1zXCIpO1xuXG4gICAgLy9BZGRpbmcgdGV4dCBDb250ZW50XG4gICAgZHJpbmtzVGl0bGUudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuICAgIGZvb2RUaXRsZS50ZXh0Q29udGVudCA9IFwiRm9vZFwiO1xuICAgIFxuICAgIC8vQ3JlYXRpbmcgbWVudSBpbWFnZSBlbGVtZW50c1xuICAgIGxldCBiZWVyID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IG1lYWQgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgZnJpZXMgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgdGF0b3JzID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGJ1cmdlciA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBjaGlja2VuID0gbmV3IEltYWdlKCk7XG5cbiAgICAvL0FkZGluZyBpbWFnZSBzb3VyY2VzXG4gICAgYmVlci5zcmMgPSBcImltZ3MvYmVlci5qcGVnXCI7XG4gICAgbWVhZC5zcmMgPSBcImltZ3MvbWVhZC5qcGdcIjtcbiAgICBmcmllcy5zcmMgPSBcImltZ3MvZnJpZXMuanBnXCI7XG4gICAgdGF0b3JzLnNyYyA9IFwiaW1ncy90YXRvcnMuanBnXCJcbiAgICBidXJnZXIuc3JjID0gXCJpbWdzL2J1cmdlci5qcGdcIjtcbiAgICBjaGlja2VuLnNyYyA9IFwiaW1ncy9jaGlja2VuLmpwZ1wiO1xuXG4gICAgLy9DcmVhdGUgaW1hZ2UgZGl2c1xuICAgIGxldCBiZWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbWVhZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGZyaWVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdGF0b3JzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYnVyZ2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY2hpY2tlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmVlckRpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VEaXZcIik7XG4gICAgbWVhZERpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VEaXZcIik7XG4gICAgZnJpZXNEaXYuY2xhc3NMaXN0LmFkZChcImltYWdlRGl2XCIpO1xuICAgIHRhdG9yc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VEaXZcIik7XG4gICAgYnVyZ2VyRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZURpdlwiKTtcbiAgICBjaGlja2VuRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZURpdlwiKTtcblxuICAgIC8vQXBwZW5kIGltYWdlc1xuICAgIGJlZXJEaXYuYXBwZW5kQ2hpbGQoYmVlcik7XG4gICAgbWVhZERpdi5hcHBlbmRDaGlsZChtZWFkKTtcbiAgICBmcmllc0Rpdi5hcHBlbmRDaGlsZChmcmllcyk7XG4gICAgdGF0b3JzRGl2LmFwcGVuZENoaWxkKHRhdG9ycyk7XG4gICAgYnVyZ2VyRGl2LmFwcGVuZENoaWxkKGJ1cmdlcik7XG4gICAgY2hpY2tlbkRpdi5hcHBlbmRDaGlsZChjaGlja2VuKTtcblxuICAgIC8vQ3JlYXRlIGZvb2QgdGV4dCBlbGVtZW50c1xuICAgIGxldCBiZWVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBtZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBmcmllc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgdGF0b3JzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBidXJnZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGNoaWNrZW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmVlclRleHQudGV4dENvbnRlbnQgPSBcIkJlZXJcIjtcbiAgICBtZWFkVGV4dC50ZXh0Q29udGVudCA9IFwiTWVhZFwiO1xuICAgIGZyaWVzVGV4dC50ZXh0Q29udGVudCA9IFwiRnJpZXNcIjtcbiAgICB0YXRvcnNUZXh0LnRleHRDb250ZW50ID0gXCJUYXRvciBUb3RzXCI7XG4gICAgYnVyZ2VyVGV4dC50ZXh0Q29udGVudCA9IFwiQnVyZ2VyXCI7XG4gICAgY2hpY2tlblRleHQudGV4dENvbnRlbnQgPSBcIkNoaWNrZW4gU2FuZHdpY2hcIjtcbiAgICBiZWVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG4gICAgbWVhZFRleHQuY2xhc3NMaXN0LmFkZChcImZvb2RUZXh0XCIpO1xuICAgIGZyaWVzVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG4gICAgdGF0b3JzVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG4gICAgYnVyZ2VyVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG4gICAgY2hpY2tlblRleHQuY2xhc3NMaXN0LmFkZChcImZvb2RUZXh0XCIpO1xuXG4gICAgLy9BcHBlbmQgZm9vZCBUZXh0XG4gICAgYmVlckRpdi5hcHBlbmRDaGlsZChiZWVyVGV4dCk7XG4gICAgbWVhZERpdi5hcHBlbmRDaGlsZChtZWFkVGV4dCk7XG4gICAgZnJpZXNEaXYuYXBwZW5kQ2hpbGQoZnJpZXNUZXh0KTtcbiAgICB0YXRvcnNEaXYuYXBwZW5kQ2hpbGQodGF0b3JzVGV4dCk7XG4gICAgYnVyZ2VyRGl2LmFwcGVuZENoaWxkKGJ1cmdlclRleHQpO1xuICAgIGNoaWNrZW5EaXYuYXBwZW5kQ2hpbGQoY2hpY2tlblRleHQpO1xuXG4gICAgLy9BcHBlbmRpbmcgdG8gY29udGVudFxuICAgIGRyaW5rc0Rpdi5hcHBlbmRDaGlsZChkcmlua3NUaXRsZSk7XG4gICAgZm9vZERpdi5hcHBlbmRDaGlsZChmb29kVGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2REaXYpO1xuXG4gICAgLy9BcHBlbmQgZWFjaCBtZW51IGl0ZW0gdG8gaXRzIGFwcHJvcHJpYXRlIGRpdlxuICAgIGRyaW5rSXRlbXMuYXBwZW5kQ2hpbGQoYmVlckRpdik7XG4gICAgZHJpbmtJdGVtcy5hcHBlbmRDaGlsZChtZWFkRGl2KTtcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQoYnVyZ2VyRGl2KTtcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQoY2hpY2tlbkRpdik7XG4gICAgZm9vZEl0ZW1zLmFwcGVuZENoaWxkKGZyaWVzRGl2KTtcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQodGF0b3JzRGl2KTtcblxuICAgIGRyaW5rc0Rpdi5hcHBlbmRDaGlsZChkcmlua0l0ZW1zKTtcbiAgICBmb29kRGl2LmFwcGVuZENoaWxkKGZvb2RJdGVtcyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZUxvYWQgZnJvbSBcIi4vaG9tZUxvYWQuanNcIjtcbmltcG9ydCBtZW51TG9hZCBmcm9tIFwiLi9tZW51TG9hZC5qc1wiO1xuaW1wb3J0IGNvbnRhY3RMb2FkIGZyb20gXCIuL2NvbnRhY3RMb2FkLmpzXCI7XG5cbi8vQ2FjaGUgRE9NXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cblxuLy9DcmVhdGUgYW5kIGFwcGVuZCBiYWNrZ3JvdW5kIGltYWdlc1xubGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTsgLy9CYWNrZ3JvdW5kIGltYWdlXG5iYWNrZ3JvdW5kLnNyYyA9IFwiaW1ncy9yZXN0YXVyYW50LmpwZ1wiO1xuYmFja2dyb3VuZC5pZCA9IFwiYmFja2dyb3VuZFwiO1xuYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiKTtcbmJhY2tncm91bmQuc3R5bGUub3BhY2l0eSA9IDE7XG5cbmNvbnN0IGZvb2QgPSBuZXcgSW1hZ2UoKTtcbmZvb2Quc3JjID0gXCJpbWdzL2Zvb2QuanBlZ1wiO1xuZm9vZC5pZCA9IFwiZm9vZFwiO1xuZm9vZC5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiKTtcblxuLy9DcmVhdGUgSGVhZGVyIGVsZW1lbnRzXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpOyAvL0hlYWRlciBkaXZcbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG5jb25zdCBuYXZIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL0RpdiB0byBob2xkIG5hdkJhclxubmF2SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZIb2xkZXJcIik7XG5cbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7IC8vTmF2IGVsZW1lbnRcbm5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2QmFyXCIpO1xuXG4vL0NyZWF0ZXMgdGhlIGVsZW1lbnRzIHRvIGZpbGwgdGhlIG5hdkJhclxubGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuaG9tZS5pZCA9IFwiaG9tZVwiO1xubGV0IGhvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5ob21lVGV4dC50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuaG9tZS5hcHBlbmRDaGlsZChob21lVGV4dCk7XG5ob21lVGV4dC5jbGFzc0xpc3QuYWRkKFwibmF2VGV4dFwiKVxubGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubWVudS5pZCA9IFwibWVudVwiO1xubGV0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5tZW51VGV4dC50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xubWVudS5hcHBlbmRDaGlsZChtZW51VGV4dCk7XG5tZW51VGV4dC5jbGFzc0xpc3QuYWRkKFwibmF2VGV4dFwiKVxubGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29udGFjdC5pZCA9IFwiY29udGFjdFwiO1xubGV0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb250YWN0VGV4dC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VGV4dCk7XG5jb250YWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwibmF2VGV4dFwiKVxuXG4vL0FwcGVuZCBhbGwgZWxlbWVudHMgdG8gaGVhZGVyL25hdkhvbGRlci9uYXZCYXJcbm5hdkJhci5hcHBlbmRDaGlsZChob21lKTtcbm5hdkJhci5hcHBlbmRDaGlsZChtZW51KTtcbm5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0KTtcbm5hdkhvbGRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuaGVhZGVyLmFwcGVuZENoaWxkKG5hdkhvbGRlcik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG5ib2R5LmFwcGVuZENoaWxkKGZvb2QpO1xuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5cbmhvbWVMb2FkKCk7XG5cbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNZW51KTtcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUJhY2tncm91bmQpO1xuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0NvbnRhY3QpO1xuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQmFja2dyb3VuZCk7XG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SG9tZSk7XG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVCYWNrZ3JvdW5kKTtcblxuLy9GdW5jdGlvbiB0byBzZXQgZXZlcnl0aGluZyBpbiB0aGUgRE9NIHRvIGhpZGRlbiAoZm9yIHN3aXRjaGluZyB0YWJzKVxuZnVuY3Rpb24gc2hvd0hvbWUoKSB7XG4gICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0Lml0ZW0oMCkgIT0gXCJob21lQ29udGVudFwiKVxuICAgIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKGNvbnRlbnQuY2xhc3NMaXN0Lml0ZW0oMCkpO1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lQ29udGVudFwiKTtcbiAgICAgICAgY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcbiAgICAgICAgaG9tZUxvYWQoKTtcbiAgICAgICAgY29udGVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJ2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IC41cyBsaW5lYXJcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIHRvZ2dsZUJhY2tncm91bmQoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dNZW51KCkge1xuICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5pdGVtKDApICE9IFwibWVudUNvbnRlbnRcIilcbiAgICB7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShjb250ZW50LmNsYXNzTGlzdC5pdGVtKDApKTtcbiAgICAgICAgY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRlbnRcIik7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCksIDUwMCk7XG4gICAgICAgIG1lbnVMb2FkKCk7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwidmlzaWJpbGl0eSAwcywgb3BhY2l0eSAuNXMgbGluZWFyXCI7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICB0b2dnbGVCYWNrZ3JvdW5kKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q29udGFjdCgpIHtcbiAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuaXRlbSgwKSAhPSBcImNvbnRhY3RDb250ZW50XCIpXG4gICAge1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoY29udGVudC5jbGFzc0xpc3QuaXRlbSgwKSk7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RDb250ZW50XCIpO1xuICAgICAgICBjb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpO1xuICAgICAgICBjb250YWN0TG9hZCgpO1xuICAgICAgICBjb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInZpc2liaWxpdHkgMHMsIG9wYWNpdHkgLjVzIGxpbmVhclwiO1xuICAgICAgICBjb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgdG9nZ2xlQmFja2dyb3VuZCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQmFja2dyb3VuZCgpIHtcbiAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuaXRlbSgwKSA9PSBcIm1lbnVDb250ZW50XCIpXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==