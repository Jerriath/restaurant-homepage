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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2hvbWVMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvbWVudUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLG9EQUFvRDtBQUNwRDs7QUFFQSxvREFBb0Q7QUFDcEQ7O0FBRUEsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7Ozs7O0FDckhBLDZCQUFlLHNDQUFXOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7VUN6RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0E7O0FBRXJDLHFEQUFRO0FBQ1IscURBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuXG4gICAgLy9DYWNoZSBET01cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBob21lQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZUNvbnRlbnRcIik7XG4gICAgbGV0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51Q29udGVudFwiKTtcbiAgICBsZXQgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RDb250ZW50XCIpO1xuXG5cblxuICAgIC8vQ3JlYXRlIGhvbWVwYWdlIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTsgLy9CYWNrZ3JvdW5kIGltYWdlXG4gICAgYmFja2dyb3VuZC5zcmMgPSBcImltZ3MvcmVzdGF1cmFudC5qcGdcIjtcbiAgICBiYWNrZ3JvdW5kLmlkID0gXCJiYWNrZ3JvdW5kXCI7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiKTtcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gICAgY29uc3QgZm9vZCA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2Quc3JjID0gXCJpbWdzL2Zvb2QuanBlZ1wiO1xuICAgIGZvb2QuaWQgPSBcImZvb2RcIjtcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kXCIpO1xuXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpOyAvL0hlYWRlciBkaXZcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IG5hdkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vRGl2IHRvIGhvbGQgbmF2QmFyXG4gICAgbmF2SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZIb2xkZXJcIik7XG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpOyAvL05hdiBlbGVtZW50XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZCYXJcIik7XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlRGl2LmlkID0gXCJ0aXRsZVwiO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcbiAgICBob3Vycy5pZCA9IFwiaG91cnNcIjtcblxuICAgIC8vQ3JlYXRlcyB0aGUgZWxlbWVudHMgdG8gZmlsbCB0aGUgbmF2QmFyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhvbWUuaWQgPSBcImhvbWVcIjtcbiAgICBsZXQgaG9tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBob21lVGV4dC50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVRleHQpO1xuICAgIGhvbWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJuYXZUZXh0XCIpXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcbiAgICBsZXQgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51VGV4dC50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuICAgIG1lbnVUZXh0LmNsYXNzTGlzdC5hZGQoXCJuYXZUZXh0XCIpXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnRhY3QuaWQgPSBcImNvbnRhY3RcIjtcbiAgICBsZXQgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0VGV4dC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuICAgIGNvbnRhY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJuYXZUZXh0XCIpXG5cbiAgICAvL0FwcGVuZCBhbGwgZWxlbWVudHMgdG8gaGVhZGVyL25hdkhvbGRlci9uYXZCYXJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBuYXZIb2xkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2SG9sZGVyKTtcblxuICAgIC8vQ3JlYXRlIGVsZW1lbnRzIGZvciB0aGUgY29udGVudCBkaXZcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICAgIC8vRmlsbCB0ZXh0IGNvbnRlbnQgZm9yIGNvbnRlbnQgZWxlbWVudHNcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIE5ldyBTYWxvb25cIjtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJUaGUgbW9kZXJuIGhhbmdvdXQgc3BvdCBmb3IgZXZlcnlvbmUhXCI7XG5cbiAgICAvL0FwcGVuZCBlbGVtZW50cyB0byB0aXRsZURpdlxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWspO1xuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgLy9BcHBlbmQgdGl0bGVEaXYgdG8gY29udGVudFxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAgIC8vQ3JlYXRlIGVsZW1lbnRzIGZvciB0aGUgcmVzdGF1cmFudCBvcGVyYXRpb24gaG91cnNcbiAgICBsZXQgc3VuZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IG1vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCB0dWVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHdlZG5lc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCB0aHVyc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBmcmlkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgc2F0dXJkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHN1bmRheS50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiAgIDEycG0gLSAxMWFtXCI7XG4gICAgbW9uZGF5LnRleHRDb250ZW50ID0gXCJNb25kYXk6ICAgMTJwbSAtIDEwYW1cIjtcbiAgICB0dWVzZGF5LnRleHRDb250ZW50ID0gXCJUdWVzZGF5OiAxMnBtIC0gMTBhbVwiO1xuICAgIHdlZG5lc2RheS50ZXh0Q29udGVudCA9IFwiV2VkbmVzZGF5OiAxMnBtIC0gMTBhbVwiO1xuICAgIHRodXJzZGF5LnRleHRDb250ZW50ID0gXCJUaHVyc2RheTogICAxMnBtIC0gMTBhbVwiO1xuICAgIGZyaWRheS50ZXh0Q29udGVudCA9IFwiRnJpZGF5OiAgIDEycG0gLSAxMmFtXCI7XG4gICAgc2F0dXJkYXkudGV4dENvbnRlbnQgPSBcIlNhdHVyZGF5OiAgIDEycG0gLSAxMmFtXCI7XG5cbiAgICAvL0FwcGVuZCB0aW1lcyB0byBob3VycyBkaXZcbiAgICBob3Vycy5hcHBlbmRDaGlsZChzdW5kYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKG1vbmRheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQodHVlc2RheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQod2VkbmVzZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZCh0aHVyc2RheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoZnJpZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChzYXR1cmRheSk7XG5cbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XG5cblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb29kKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvL0NhY2hlIERPTVxuICAgIGxldCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudUNvbnRlbnRcIik7XG5cbiAgICAvL0NyZWF0ZSBtZW51IGVsZW1lbnRzXG4gICAgbGV0IGRyaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGRyaW5rc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxldCBmb29kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZm9vZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxldCBkcmlua0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZm9vZEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vQWRkaW5nIGNzcyBjbGFzc2VzXG4gICAgZHJpbmtzRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51RGl2XCIpO1xuICAgIGZvb2REaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVEaXZcIik7XG4gICAgZHJpbmtzVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnVUaXRsZVwiKTtcbiAgICBmb29kVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnVUaXRsZVwiKTtcbiAgICBkcmlua0l0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbXNcIik7XG4gICAgZm9vZEl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbXNcIik7XG5cbiAgICAvL0FkZGluZyB0ZXh0IENvbnRlbnRcbiAgICBkcmlua3NUaXRsZS50ZXh0Q29udGVudCA9IFwiRHJpbmtzXCI7XG4gICAgZm9vZFRpdGxlLnRleHRDb250ZW50ID0gXCJGb29kXCI7XG4gICAgXG4gICAgLy9DcmVhdGluZyBtZW51IGltYWdlIGVsZW1lbnRzXG4gICAgbGV0IGJlZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgbWVhZCA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBmcmllcyA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCB0YXRvcnMgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgYnVyZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGNoaWNrZW4gPSBuZXcgSW1hZ2UoKTtcblxuICAgIC8vQWRkaW5nIGltYWdlIHNvdXJjZXNcbiAgICBiZWVyLnNyYyA9IFwiaW1ncy9iZWVyLmpwZWdcIjtcbiAgICBtZWFkLnNyYyA9IFwiaW1ncy9tZWFkLmpwZ1wiO1xuICAgIGZyaWVzLnNyYyA9IFwiaW1ncy9mcmllcy5qcGdcIjtcbiAgICB0YXRvcnMuc3JjID0gXCJpbWdzL3RhdG9ycy5qcGdcIlxuICAgIGJ1cmdlci5zcmMgPSBcImltZ3MvYnVyZ2VyLmpwZ1wiO1xuICAgIGNoaWNrZW4uc3JjID0gXCJpbWdzL2NoaWNrZW4uanBnXCI7XG5cbiAgICAvL0NyZWF0ZSBpbWFnZSBkaXZzXG4gICAgbGV0IGJlZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBtZWFkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZnJpZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0YXRvcnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBidXJnZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBjaGlja2VuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vQXBwZW5kIGltYWdlc1xuICAgIGJlZXJEaXYuYXBwZW5kQ2hpbGQoYmVlcik7XG4gICAgbWVhZERpdi5hcHBlbmRDaGlsZChtZWFkKTtcbiAgICBmcmllc0Rpdi5hcHBlbmRDaGlsZChmcmllcyk7XG4gICAgdGF0b3JzRGl2LmFwcGVuZENoaWxkKHRhdG9ycyk7XG4gICAgYnVyZ2VyRGl2LmFwcGVuZENoaWxkKGJ1cmdlcik7XG4gICAgY2hpY2tlbkRpdi5hcHBlbmRDaGlsZChjaGlja2VuKTtcblxuICAgIC8vQXBwZW5kaW5nIHRvIG1lbnVDb250ZW50XG4gICAgZHJpbmtzRGl2LmFwcGVuZENoaWxkKGRyaW5rc1RpdGxlKTtcbiAgICBmb29kRGl2LmFwcGVuZENoaWxkKGZvb2RUaXRsZSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2KTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChmb29kRGl2KTtcblxuICAgIC8vQXBwZW5kIGVhY2ggbWVudSBpdGVtIHRvIGl0cyBhcHByb3ByaWF0ZSBkaXZcbiAgICBkcmlua0l0ZW1zLmFwcGVuZENoaWxkKGJlZXJEaXYpO1xuICAgIGRyaW5rSXRlbXMuYXBwZW5kQ2hpbGQobWVhZERpdik7XG4gICAgZm9vZEl0ZW1zLmFwcGVuZENoaWxkKGJ1cmdlckRpdik7XG4gICAgZm9vZEl0ZW1zLmFwcGVuZENoaWxkKGNoaWNrZW5EaXYpO1xuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChmcmllc0Rpdik7XG4gICAgZm9vZEl0ZW1zLmFwcGVuZENoaWxkKHRhdG9yc0Rpdik7XG5cbiAgICBkcmlua3NEaXYuYXBwZW5kQ2hpbGQoZHJpbmtJdGVtcyk7XG4gICAgZm9vZERpdi5hcHBlbmRDaGlsZChmb29kSXRlbXMpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWVMb2FkIGZyb20gXCIuL2hvbWVMb2FkLmpzXCI7XG5pbXBvcnQgbWVudUxvYWQgZnJvbSBcIi4vbWVudUxvYWQuanNcIjtcblxuaG9tZUxvYWQoKTtcbm1lbnVMb2FkKCk7XG5cbi8vQ2FjaGUgRE9NXG5sZXQgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbmxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xubGV0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XG5cbmxldCBob21lQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZUNvbnRlbnRcIik7XG5sZXQgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVDb250ZW50XCIpO1xubGV0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0Q29udGVudFwiKTtcbmxldCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWNrZ3JvdW5kXCIpO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlSG9tZSk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlQ29udGFjdCk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVCYWNrZ3JvdW5kKTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dDb250YWN0KTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVIb21lKTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVNZW51KTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUJhY2tncm91bmQpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0hvbWUpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZU1lbnUpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUNvbnRhY3QpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQmFja2dyb3VuZCk7XG5cbi8vRnVuY3Rpb24gdG8gc2V0IGV2ZXJ5dGhpbmcgaW4gdGhlIERPTSB0byBoaWRkZW4gKGZvciBzd2l0Y2hpbmcgdGFicylcbmZ1bmN0aW9uIGhpZGVIb21lKCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShob21lQ29udGVudCkudmlzaWJpbGl0eSA9PSBcInZpc2libGVcIilcbiAgICB7XG4gICAgICAgIGhvbWVDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBob21lQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIGhvbWVDb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInZpc2liaWxpdHkgMHMgLjVzLCBvcGFjaXR5IC41cyBsaW5lYXJcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVNZW51KCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51Q29udGVudCkudmlzaWJpbGl0eSA9PSBcInZpc2libGVcIilcbiAgICB7XG4gICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBtZW51Q29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInZpc2liaWxpdHkgMHMgLjVzLCBvcGFjaXR5IC41cyBsaW5lYXJcIjtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gaGlkZUNvbnRhY3QoKSB7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhY3RDb250ZW50KS52aXNpYmlsaXR5ID09IFwidmlzaWJsZVwiKVxuICAgIHtcbiAgICAgICAgY29udGFjdENvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGNvbnRhY3RDb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgY29udGFjdENvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwidmlzaWJpbGl0eSAwcyAuNXMsIG9wYWNpdHkgLjVzIGxpbmVhclwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd0hvbWUoKSB7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGhvbWVDb250ZW50KS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCIpXG4gICAge1xuICAgICAgICBob21lQ29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIGhvbWVDb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgaG9tZUNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwidmlzaWJpbGl0eSAwcywgb3BhY2l0eSAuNXMgbGluZWFyXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudUNvbnRlbnQpLnZpc2liaWxpdHkgPT0gXCJoaWRkZW5cIilcbiAgICB7XG4gICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBtZW51Q29udGVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJ2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IC41cyBsaW5lYXJcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDb250YWN0KCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWN0Q29udGVudCkudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiKVxuICAgIHtcbiAgICAgICAgY29udGFjdENvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICBjb250YWN0Q29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIGNvbnRhY3RDb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInZpc2liaWxpdHkgMHMsIG9wYWNpdHkgLjVzIGxpbmVhclwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQmFja2dyb3VuZCgpIHtcbiAgICBpZiAoYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID09IDEgJiYgaG9tZUNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiICYmIGNvbnRhY3RDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgIT0gXCJ2aXNpYmxlXCIpXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgICBlbHNlIGlmIChiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPT0gMCAmJiBtZW51Q29udGVudC5zdHlsZS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCIgJiYgY29udGFjdENvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiIHx8IGJhY2tncm91bmQuc3R5bGUub3BhY2l0eSA9PSAwICYmIG1lbnVDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPT0gXCJoaWRkZW5cIiAmJiBob21lQ29udGVudC5zdHlsZS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCIpXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9