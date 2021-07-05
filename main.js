/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



(0,_homeLoad_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_menuLoad_js__WEBPACK_IMPORTED_MODULE_1__.default)();

//Cache DOM
let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let contact = document.querySelector("#contact");

let homeContent = document.querySelector("#homeContent");
let menuContent = document.querySelector("#menuContent");
let contactContent = document.querySelector("#contactContent");
let background = document.querySelector("#background");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2hvbWVMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvbWVudUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLG9EQUFvRDtBQUNwRDs7QUFFQSxvREFBb0Q7QUFDcEQ7O0FBRUEsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7Ozs7O0FDckhBLDZCQUFlLHNDQUFXOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7VUMzR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0E7O0FBRXJDLHFEQUFRO0FBQ1IscURBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuXG4gICAgLy9DYWNoZSBET01cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBob21lQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZUNvbnRlbnRcIik7XG4gICAgbGV0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51Q29udGVudFwiKTtcbiAgICBsZXQgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RDb250ZW50XCIpO1xuXG5cblxuICAgIC8vQ3JlYXRlIGhvbWVwYWdlIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTsgLy9CYWNrZ3JvdW5kIGltYWdlXG4gICAgYmFja2dyb3VuZC5zcmMgPSBcImltZ3MvcmVzdGF1cmFudC5qcGdcIjtcbiAgICBiYWNrZ3JvdW5kLmlkID0gXCJiYWNrZ3JvdW5kXCI7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiKTtcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gICAgY29uc3QgZm9vZCA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2Quc3JjID0gXCJpbWdzL2Zvb2QuanBlZ1wiO1xuICAgIGZvb2QuaWQgPSBcImZvb2RcIjtcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kXCIpO1xuXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpOyAvL0hlYWRlciBkaXZcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IG5hdkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vRGl2IHRvIGhvbGQgbmF2QmFyXG4gICAgbmF2SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZIb2xkZXJcIik7XG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpOyAvL05hdiBlbGVtZW50XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZCYXJcIik7XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlRGl2LmlkID0gXCJ0aXRsZVwiO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcbiAgICBob3Vycy5pZCA9IFwiaG91cnNcIjtcblxuICAgIC8vQ3JlYXRlcyB0aGUgZWxlbWVudHMgdG8gZmlsbCB0aGUgbmF2QmFyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhvbWUuaWQgPSBcImhvbWVcIjtcbiAgICBsZXQgaG9tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBob21lVGV4dC50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVRleHQpO1xuICAgIGhvbWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJuYXZUZXh0XCIpXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcbiAgICBsZXQgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51VGV4dC50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuICAgIG1lbnVUZXh0LmNsYXNzTGlzdC5hZGQoXCJuYXZUZXh0XCIpXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnRhY3QuaWQgPSBcImNvbnRhY3RcIjtcbiAgICBsZXQgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0VGV4dC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuICAgIGNvbnRhY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJuYXZUZXh0XCIpXG5cbiAgICAvL0FwcGVuZCBhbGwgZWxlbWVudHMgdG8gaGVhZGVyL25hdkhvbGRlci9uYXZCYXJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBuYXZIb2xkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2SG9sZGVyKTtcblxuICAgIC8vQ3JlYXRlIGVsZW1lbnRzIGZvciB0aGUgY29udGVudCBkaXZcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICAgIC8vRmlsbCB0ZXh0IGNvbnRlbnQgZm9yIGNvbnRlbnQgZWxlbWVudHNcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIE5ldyBTYWxvb25cIjtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJUaGUgbW9kZXJuIGhhbmdvdXQgc3BvdCBmb3IgZXZlcnlvbmUhXCI7XG5cbiAgICAvL0FwcGVuZCBlbGVtZW50cyB0byB0aXRsZURpdlxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWspO1xuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgLy9BcHBlbmQgdGl0bGVEaXYgdG8gY29udGVudFxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAgIC8vQ3JlYXRlIGVsZW1lbnRzIGZvciB0aGUgcmVzdGF1cmFudCBvcGVyYXRpb24gaG91cnNcbiAgICBsZXQgc3VuZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IG1vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCB0dWVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHdlZG5lc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCB0aHVyc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBmcmlkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgc2F0dXJkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHN1bmRheS50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiAgIDEycG0gLSAxMWFtXCI7XG4gICAgbW9uZGF5LnRleHRDb250ZW50ID0gXCJNb25kYXk6ICAgMTJwbSAtIDEwYW1cIjtcbiAgICB0dWVzZGF5LnRleHRDb250ZW50ID0gXCJUdWVzZGF5OiAxMnBtIC0gMTBhbVwiO1xuICAgIHdlZG5lc2RheS50ZXh0Q29udGVudCA9IFwiV2VkbmVzZGF5OiAxMnBtIC0gMTBhbVwiO1xuICAgIHRodXJzZGF5LnRleHRDb250ZW50ID0gXCJUaHVyc2RheTogICAxMnBtIC0gMTBhbVwiO1xuICAgIGZyaWRheS50ZXh0Q29udGVudCA9IFwiRnJpZGF5OiAgIDEycG0gLSAxMmFtXCI7XG4gICAgc2F0dXJkYXkudGV4dENvbnRlbnQgPSBcIlNhdHVyZGF5OiAgIDEycG0gLSAxMmFtXCI7XG5cbiAgICAvL0FwcGVuZCB0aW1lcyB0byBob3VycyBkaXZcbiAgICBob3Vycy5hcHBlbmRDaGlsZChzdW5kYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKG1vbmRheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQodHVlc2RheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQod2VkbmVzZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZCh0aHVyc2RheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoZnJpZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChzYXR1cmRheSk7XG5cbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XG5cblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb29kKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvL0NhY2hlIERPTVxuICAgIGxldCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudUNvbnRlbnRcIik7XG5cbiAgICAvL0NyZWF0ZSBtZW51IGVsZW1lbnRzXG4gICAgbGV0IGRyaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGRyaW5rc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxldCBmb29kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZm9vZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxldCBkcmlua0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZm9vZEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vQWRkaW5nIGNzcyBjbGFzc2VzXG4gICAgZHJpbmtzRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51RGl2XCIpO1xuICAgIGZvb2REaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVEaXZcIik7XG4gICAgZHJpbmtzVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnVUaXRsZVwiKTtcbiAgICBmb29kVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnVUaXRsZVwiKTtcbiAgICBkcmlua0l0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbXNcIik7XG4gICAgZm9vZEl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbXNcIik7XG5cbiAgICAvL0FkZGluZyB0ZXh0IENvbnRlbnRcbiAgICBkcmlua3NUaXRsZS50ZXh0Q29udGVudCA9IFwiRHJpbmtzXCI7XG4gICAgZm9vZFRpdGxlLnRleHRDb250ZW50ID0gXCJGb29kXCI7XG4gICAgXG4gICAgLy9DcmVhdGluZyBtZW51IGltYWdlIGVsZW1lbnRzXG4gICAgbGV0IGJlZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgbWVhZCA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBmcmllcyA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCB0YXRvcnMgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgYnVyZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGNoaWNrZW4gPSBuZXcgSW1hZ2UoKTtcblxuICAgIC8vQWRkaW5nIGltYWdlIHNvdXJjZXNcbiAgICBiZWVyLnNyYyA9IFwiaW1ncy9iZWVyLmpwZWdcIjtcbiAgICBtZWFkLnNyYyA9IFwiaW1ncy9tZWFkLmpwZ1wiO1xuICAgIGZyaWVzLnNyYyA9IFwiaW1ncy9mcmllcy5qcGdcIjtcbiAgICB0YXRvcnMuc3JjID0gXCJpbWdzL3RhdG9ycy5qcGdcIlxuICAgIGJ1cmdlci5zcmMgPSBcImltZ3MvYnVyZ2VyLmpwZ1wiO1xuICAgIGNoaWNrZW4uc3JjID0gXCJpbWdzL2NoaWNrZW4uanBnXCI7XG5cbiAgICAvL0NyZWF0ZSBpbWFnZSBkaXZzXG4gICAgbGV0IGJlZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBtZWFkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZnJpZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0YXRvcnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBidXJnZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBjaGlja2VuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiZWVyRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZURpdlwiKTtcbiAgICBtZWFkRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZURpdlwiKTtcbiAgICBmcmllc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VEaXZcIik7XG4gICAgdGF0b3JzRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZURpdlwiKTtcbiAgICBidXJnZXJEaXYuY2xhc3NMaXN0LmFkZChcImltYWdlRGl2XCIpO1xuICAgIGNoaWNrZW5EaXYuY2xhc3NMaXN0LmFkZChcImltYWdlRGl2XCIpO1xuXG4gICAgLy9BcHBlbmQgaW1hZ2VzXG4gICAgYmVlckRpdi5hcHBlbmRDaGlsZChiZWVyKTtcbiAgICBtZWFkRGl2LmFwcGVuZENoaWxkKG1lYWQpO1xuICAgIGZyaWVzRGl2LmFwcGVuZENoaWxkKGZyaWVzKTtcbiAgICB0YXRvcnNEaXYuYXBwZW5kQ2hpbGQodGF0b3JzKTtcbiAgICBidXJnZXJEaXYuYXBwZW5kQ2hpbGQoYnVyZ2VyKTtcbiAgICBjaGlja2VuRGl2LmFwcGVuZENoaWxkKGNoaWNrZW4pO1xuXG4gICAgLy9DcmVhdGUgZm9vZCB0ZXh0IGVsZW1lbnRzXG4gICAgbGV0IGJlZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IG1lYWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGZyaWVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCB0YXRvcnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGJ1cmdlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgY2hpY2tlblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBiZWVyVGV4dC50ZXh0Q29udGVudCA9IFwiQmVlclwiO1xuICAgIG1lYWRUZXh0LnRleHRDb250ZW50ID0gXCJNZWFkXCI7XG4gICAgZnJpZXNUZXh0LnRleHRDb250ZW50ID0gXCJGcmllc1wiO1xuICAgIHRhdG9yc1RleHQudGV4dENvbnRlbnQgPSBcIlRhdG9yIFRvdHNcIjtcbiAgICBidXJnZXJUZXh0LnRleHRDb250ZW50ID0gXCJCdXJnZXJcIjtcbiAgICBjaGlja2VuVGV4dC50ZXh0Q29udGVudCA9IFwiQ2hpY2tlbiBTYW5kd2ljaFwiO1xuICAgIGJlZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJmb29kVGV4dFwiKTtcbiAgICBtZWFkVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG4gICAgZnJpZXNUZXh0LmNsYXNzTGlzdC5hZGQoXCJmb29kVGV4dFwiKTtcbiAgICB0YXRvcnNUZXh0LmNsYXNzTGlzdC5hZGQoXCJmb29kVGV4dFwiKTtcbiAgICBidXJnZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJmb29kVGV4dFwiKTtcbiAgICBjaGlja2VuVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG5cbiAgICAvL0FwcGVuZCBmb29kIFRleHRcbiAgICBiZWVyRGl2LmFwcGVuZENoaWxkKGJlZXJUZXh0KTtcbiAgICBtZWFkRGl2LmFwcGVuZENoaWxkKG1lYWRUZXh0KTtcbiAgICBmcmllc0Rpdi5hcHBlbmRDaGlsZChmcmllc1RleHQpO1xuICAgIHRhdG9yc0Rpdi5hcHBlbmRDaGlsZCh0YXRvcnNUZXh0KTtcbiAgICBidXJnZXJEaXYuYXBwZW5kQ2hpbGQoYnVyZ2VyVGV4dCk7XG4gICAgY2hpY2tlbkRpdi5hcHBlbmRDaGlsZChjaGlja2VuVGV4dCk7XG5cbiAgICAvL0FwcGVuZGluZyB0byBtZW51Q29udGVudFxuICAgIGRyaW5rc0Rpdi5hcHBlbmRDaGlsZChkcmlua3NUaXRsZSk7XG4gICAgZm9vZERpdi5hcHBlbmRDaGlsZChmb29kVGl0bGUpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRyaW5rc0Rpdik7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZERpdik7XG5cbiAgICAvL0FwcGVuZCBlYWNoIG1lbnUgaXRlbSB0byBpdHMgYXBwcm9wcmlhdGUgZGl2XG4gICAgZHJpbmtJdGVtcy5hcHBlbmRDaGlsZChiZWVyRGl2KTtcbiAgICBkcmlua0l0ZW1zLmFwcGVuZENoaWxkKG1lYWREaXYpO1xuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChidXJnZXJEaXYpO1xuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChjaGlja2VuRGl2KTtcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQoZnJpZXNEaXYpO1xuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZCh0YXRvcnNEaXYpO1xuXG4gICAgZHJpbmtzRGl2LmFwcGVuZENoaWxkKGRyaW5rSXRlbXMpO1xuICAgIGZvb2REaXYuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1zKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBob21lTG9hZCBmcm9tIFwiLi9ob21lTG9hZC5qc1wiO1xuaW1wb3J0IG1lbnVMb2FkIGZyb20gXCIuL21lbnVMb2FkLmpzXCI7XG5cbmhvbWVMb2FkKCk7XG5tZW51TG9hZCgpO1xuXG4vL0NhY2hlIERPTVxubGV0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5sZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbmxldCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuXG5sZXQgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVDb250ZW50XCIpO1xubGV0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51Q29udGVudFwiKTtcbmxldCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdENvbnRlbnRcIik7XG5sZXQgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFja2dyb3VuZFwiKTtcblxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd01lbnUpO1xubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUhvbWUpO1xubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUNvbnRhY3QpO1xubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQmFja2dyb3VuZCk7XG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Q29udGFjdCk7XG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlSG9tZSk7XG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTWVudSk7XG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVCYWNrZ3JvdW5kKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dIb21lKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVNZW51KTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVDb250YWN0KTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUJhY2tncm91bmQpO1xuXG4vL0Z1bmN0aW9uIHRvIHNldCBldmVyeXRoaW5nIGluIHRoZSBET00gdG8gaGlkZGVuIChmb3Igc3dpdGNoaW5nIHRhYnMpXG5mdW5jdGlvbiBoaWRlSG9tZSgpIHtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoaG9tZUNvbnRlbnQpLnZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIpXG4gICAge1xuICAgICAgICBob21lQ29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgaG9tZUNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBob21lQ29udGVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJ2aXNpYmlsaXR5IDBzIC41cywgb3BhY2l0eSAuNXMgbGluZWFyXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoaWRlTWVudSgpIHtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudUNvbnRlbnQpLnZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIpXG4gICAge1xuICAgICAgICBtZW51Q29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBtZW51Q29udGVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJ2aXNpYmlsaXR5IDBzIC41cywgb3BhY2l0eSAuNXMgbGluZWFyXCI7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGhpZGVDb250YWN0KCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWN0Q29udGVudCkudmlzaWJpbGl0eSA9PSBcInZpc2libGVcIilcbiAgICB7XG4gICAgICAgIGNvbnRhY3RDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBjb250YWN0Q29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIGNvbnRhY3RDb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInZpc2liaWxpdHkgMHMgLjVzLCBvcGFjaXR5IC41cyBsaW5lYXJcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dIb21lKCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShob21lQ29udGVudCkudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiKVxuICAgIHtcbiAgICAgICAgaG9tZUNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICBob21lQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIGhvbWVDb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInZpc2liaWxpdHkgMHMsIG9wYWNpdHkgLjVzIGxpbmVhclwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1lbnVDb250ZW50KS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCIpXG4gICAge1xuICAgICAgICBtZW51Q29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIG1lbnVDb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwidmlzaWJpbGl0eSAwcywgb3BhY2l0eSAuNXMgbGluZWFyXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q29udGFjdCgpIHtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFjdENvbnRlbnQpLnZpc2liaWxpdHkgPT0gXCJoaWRkZW5cIilcbiAgICB7XG4gICAgICAgIGNvbnRhY3RDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgY29udGFjdENvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBjb250YWN0Q29udGVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJ2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IC41cyBsaW5lYXJcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJhY2tncm91bmQoKSB7XG4gICAgaWYgKGJhY2tncm91bmQuc3R5bGUub3BhY2l0eSA9PSAxICYmIGhvbWVDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPT0gXCJoaWRkZW5cIiAmJiBjb250YWN0Q29udGVudC5zdHlsZS52aXNpYmlsaXR5ICE9IFwidmlzaWJsZVwiKVxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID09IDAgJiYgbWVudUNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiICYmIGNvbnRhY3RDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPT0gXCJoaWRkZW5cIiB8fCBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPT0gMCAmJiBtZW51Q29udGVudC5zdHlsZS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCIgJiYgaG9tZUNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiKVxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==