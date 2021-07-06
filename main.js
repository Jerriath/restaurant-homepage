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

/***/ "./src/createBackground.js":
/*!*********************************!*\
  !*** ./src/createBackground.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBackgrounds)
/* harmony export */ });
function createBackgrounds() {
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

/***/ }),

/***/ "./src/createHeader.js":
/*!*****************************!*\
  !*** ./src/createHeader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    let body = document.querySelector("body");

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

    body.appendChild(header);
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

    //Adding textContent
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
/* harmony import */ var _createBackground_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBackground.js */ "./src/createBackground.js");
/* harmony import */ var _createHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createHeader.js */ "./src/createHeader.js");






//Cache DOM
let content = document.querySelector("#content");

//Extra imported functions for creating static elements
(0,_createBackground_js__WEBPACK_IMPORTED_MODULE_3__.default)();
(0,_createHeader_js__WEBPACK_IMPORTED_MODULE_4__.default)();


(0,_homeLoad_js__WEBPACK_IMPORTED_MODULE_0__.default)();

menu.addEventListener("click", showMenu);
menu.addEventListener("click", toggleBackground);
contact.addEventListener("click", showContact);
contact.addEventListener("click", toggleBackground);
home.addEventListener("click", showHome);
home.addEventListener("click", toggleBackground);

//Function to set everything in the DOM to0(for switching tabs)
function showHome() {
    if (content.classList.item(0) != "homeContent")
    {
        content.classList.remove(content.classList.item(0));
        content.classList.add("homeContent");
        content.style.opacity = 0;
        setTimeout(waitHome, 500);
    }
}

function showMenu() {
    if (content.classList.item(0) != "menuContent")
    {
        content.classList.remove(content.classList.item(0));
        content.classList.add("menuContent");
        content.style.opacity = 0;
        setTimeout(waitMenu, 500);
    }
}

function showContact() {
    if (content.classList.item(0) != "contactContent")
    {
        content.classList.remove(content.classList.item(0));
        content.classList.add("contactContent");
        content.style.opacity = 0;
        setTimeout(waitContact, 500);
    }
}

//Function to switch between the two backgrounds overlayed on each other
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

//Function to clear the content div
function removeAllChildNodes() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}


//These functions wrap together other functions so that the fade out effect can take
//place (via setTimeout) before the old elements are removed
function waitHome() {
    removeAllChildNodes();
    (0,_homeLoad_js__WEBPACK_IMPORTED_MODULE_0__.default)();
    content.style.opacity = 1;
    toggleBackground();
}

function waitMenu() {
    removeAllChildNodes();
    (0,_menuLoad_js__WEBPACK_IMPORTED_MODULE_1__.default)();
    content.style.opacity = 1;
    toggleBackground();
}

function waitContact() {
    removeAllChildNodes();
    (0,_contactLoad_js__WEBPACK_IMPORTED_MODULE_2__.default)();
    content.style.opacity = 1;
    toggleBackground();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbnRhY3RMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY3JlYXRlQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NyZWF0ZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2hvbWVMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvbWVudUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBZSxzQ0FBVzs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7OztBQ25DZTtBQUNmO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7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LEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgLy9DYWNoZSBET01cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIC8vQ3JlYXRlIGNvbnRhY3QgZWxlbWVudHNcbiAgICBsZXQgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdERpdlwiKTtcbiAgICBsZXQgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEl0ZW1zXCIpO1xuICAgIGxldCBtYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hcERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEl0ZW1zXCIpO1xuICAgIGxldCBtYXBJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXBJbWcuc3JjID0gXCJpbWdzL21hcC5wbmdcIlxuICAgIG1hcEltZy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEltZ1wiKTtcblxuICAgIC8vQ3JlYXRlIGFuZCBhcHBlbmQgdGV4dCBlbGVtZW50cyB0byB0aGUgdGV4dERpdlxuICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBudW1iZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RUZXh0XCIpO1xuICAgIG51bWJlci50ZXh0Q29udGVudCA9IFwiUGhvbmUgTnVtYmVyOiA4MDA4MTExMTM1XCJcbiAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RUZXh0XCIpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkFkZHJlc3M6IDEwMTIgTlktMjQsIEZsYW5kZXJzLCBOWSAxMTkwMVwiXG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0VGV4dFwiKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJDaGVjayB1cyBvdXQgb24gR29vZ2xlIFN0cmVldHZpZXchISFcIjtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKG51bWJlcik7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgbWFwRGl2LmFwcGVuZENoaWxkKG1hcEltZyk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKG1hcERpdik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmRzKCkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTsgLy9CYWNrZ3JvdW5kIGltYWdlIGZvciBob21lIGFuZCBjb250YWN0XG4gICAgYmFja2dyb3VuZC5zcmMgPSBcImltZ3MvcmVzdGF1cmFudC5qcGdcIjtcbiAgICBiYWNrZ3JvdW5kLmlkID0gXCJiYWNrZ3JvdW5kXCI7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiKTtcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gICAgY29uc3QgZm9vZCA9IG5ldyBJbWFnZSgpOyAvL0JhY2tncm91bmQgaW1hZ2UgZm9yIG1lbnVcbiAgICBmb29kLnNyYyA9IFwiaW1ncy9mb29kLmpwZWdcIjtcbiAgICBmb29kLmlkID0gXCJmb29kXCI7XG4gICAgZm9vZC5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiKTtcblxuICAgIC8vSW1hZ2VzIGFyZSBvdmVybGF5ZWQgYW5kIHRoZSBcImJhY2tncm91bmRcIiBvcGFjaXR5IGlzIHNldCB0byAwIHRvIHNlZSBcImZvb2RcIlxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb29kKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgLy9DcmVhdGUgSGVhZGVyIGVsZW1lbnRzXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTsgLy9IZWFkZXIgZGl2XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBuYXZIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL0RpdiB0byBob2xkIG5hdkJhclxuICAgIG5hdkhvbGRlci5jbGFzc0xpc3QuYWRkKFwibmF2SG9sZGVyXCIpO1xuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTsgLy9OYXYgZWxlbWVudFxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2QmFyXCIpO1xuXG4gICAgLy9DcmVhdGVzIHRoZSBlbGVtZW50cyB0byBmaWxsIHRoZSBuYXZCYXJcbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaG9tZS5pZCA9IFwiaG9tZVwiO1xuICAgIGxldCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGhvbWVUZXh0LnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lVGV4dCk7XG4gICAgaG9tZVRleHQuY2xhc3NMaXN0LmFkZChcIm5hdlRleHRcIilcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudS5pZCA9IFwibWVudVwiO1xuICAgIGxldCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVUZXh0LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51VGV4dCk7XG4gICAgbWVudVRleHQuY2xhc3NMaXN0LmFkZChcIm5hdlRleHRcIilcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29udGFjdC5pZCA9IFwiY29udGFjdFwiO1xuICAgIGxldCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnRhY3RUZXh0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VGV4dCk7XG4gICAgY29udGFjdFRleHQuY2xhc3NMaXN0LmFkZChcIm5hdlRleHRcIilcblxuICAgIC8vQXBwZW5kIGFsbCBlbGVtZW50cyB0byBoZWFkZXIvbmF2SG9sZGVyL25hdkJhclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIG5hdkhvbGRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZIb2xkZXIpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuXG4gICAgLy9DYWNoZSBET01cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lQ29udGVudFwiKTtcblxuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZURpdi5pZCA9IFwidGl0bGVcIjtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XG4gICAgaG91cnMuaWQgPSBcImhvdXJzXCI7XG5cblxuICAgIC8vQ3JlYXRlIGVsZW1lbnRzIGZvciB0aGUgY29udGVudCBkaXZcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICAgIC8vRmlsbCB0ZXh0IGNvbnRlbnQgZm9yIGNvbnRlbnQgZWxlbWVudHNcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIE5ldyBTYWxvb25cIjtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJUaGUgbW9kZXJuIGhhbmdvdXQgc3BvdCBmb3IgZXZlcnlvbmUhXCI7XG5cbiAgICAvL0FwcGVuZCBlbGVtZW50cyB0byB0aXRsZURpdlxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWspO1xuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgLy9BcHBlbmQgdGl0bGVEaXYgdG8gY29udGVudFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgLy9DcmVhdGUgZWxlbWVudHMgZm9yIHRoZSByZXN0YXVyYW50IG9wZXJhdGlvbiBob3Vyc1xuICAgIGxldCBzdW5kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgbW9uZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHR1ZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgd2VkbmVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHRodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBzYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgLy9BZGRpbmcgdGV4dENvbnRlbnRcbiAgICBzdW5kYXkudGV4dENvbnRlbnQgPSBcIlN1bmRheTogICAxMnBtIC0gMTFhbVwiO1xuICAgIG1vbmRheS50ZXh0Q29udGVudCA9IFwiTW9uZGF5OiAgIDEycG0gLSAxMGFtXCI7XG4gICAgdHVlc2RheS50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogMTJwbSAtIDEwYW1cIjtcbiAgICB3ZWRuZXNkYXkudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheTogMTJwbSAtIDEwYW1cIjtcbiAgICB0aHVyc2RheS50ZXh0Q29udGVudCA9IFwiVGh1cnNkYXk6ICAgMTJwbSAtIDEwYW1cIjtcbiAgICBmcmlkYXkudGV4dENvbnRlbnQgPSBcIkZyaWRheTogICAxMnBtIC0gMTJhbVwiO1xuICAgIHNhdHVyZGF5LnRleHRDb250ZW50ID0gXCJTYXR1cmRheTogICAxMnBtIC0gMTJhbVwiO1xuXG4gICAgLy9BcHBlbmQgdGltZXMgdG8gaG91cnMgZGl2XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoc3VuZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChtb25kYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHR1ZXNkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHdlZG5lc2RheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQodGh1cnNkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGZyaWRheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoc2F0dXJkYXkpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIC8vQ2FjaGUgRE9NXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICAvL0NyZWF0ZSBtZW51IGVsZW1lbnRzXG4gICAgbGV0IGRyaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGRyaW5rc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxldCBmb29kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZm9vZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxldCBkcmlua0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZm9vZEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vQWRkaW5nIGNzcyBjbGFzc2VzXG4gICAgZHJpbmtzRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51RGl2XCIpO1xuICAgIGZvb2REaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVEaXZcIik7XG4gICAgZHJpbmtzVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnVUaXRsZVwiKTtcbiAgICBmb29kVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnVUaXRsZVwiKTtcbiAgICBkcmlua0l0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbXNcIik7XG4gICAgZm9vZEl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbXNcIik7XG5cbiAgICAvL0FkZGluZyB0ZXh0IENvbnRlbnRcbiAgICBkcmlua3NUaXRsZS50ZXh0Q29udGVudCA9IFwiRHJpbmtzXCI7XG4gICAgZm9vZFRpdGxlLnRleHRDb250ZW50ID0gXCJGb29kXCI7XG4gICAgXG4gICAgLy9DcmVhdGluZyBtZW51IGltYWdlIGVsZW1lbnRzXG4gICAgbGV0IGJlZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgbWVhZCA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBmcmllcyA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCB0YXRvcnMgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgYnVyZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGNoaWNrZW4gPSBuZXcgSW1hZ2UoKTtcblxuICAgIC8vQWRkaW5nIGltYWdlIHNvdXJjZXNcbiAgICBiZWVyLnNyYyA9IFwiaW1ncy9iZWVyLmpwZWdcIjtcbiAgICBtZWFkLnNyYyA9IFwiaW1ncy9tZWFkLmpwZ1wiO1xuICAgIGZyaWVzLnNyYyA9IFwiaW1ncy9mcmllcy5qcGdcIjtcbiAgICB0YXRvcnMuc3JjID0gXCJpbWdzL3RhdG9ycy5qcGdcIlxuICAgIGJ1cmdlci5zcmMgPSBcImltZ3MvYnVyZ2VyLmpwZ1wiO1xuICAgIGNoaWNrZW4uc3JjID0gXCJpbWdzL2NoaWNrZW4uanBnXCI7XG5cbiAgICAvL0NyZWF0ZSBpbWFnZSBkaXZzXG4gICAgbGV0IGJlZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBtZWFkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZnJpZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0YXRvcnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBidXJnZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBjaGlja2VuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiZWVyRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZURpdlwiKTtcbiAgICBtZWFkRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZURpdlwiKTtcbiAgICBmcmllc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VEaXZcIik7XG4gICAgdGF0b3JzRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZURpdlwiKTtcbiAgICBidXJnZXJEaXYuY2xhc3NMaXN0LmFkZChcImltYWdlRGl2XCIpO1xuICAgIGNoaWNrZW5EaXYuY2xhc3NMaXN0LmFkZChcImltYWdlRGl2XCIpO1xuXG4gICAgLy9BcHBlbmQgaW1hZ2VzXG4gICAgYmVlckRpdi5hcHBlbmRDaGlsZChiZWVyKTtcbiAgICBtZWFkRGl2LmFwcGVuZENoaWxkKG1lYWQpO1xuICAgIGZyaWVzRGl2LmFwcGVuZENoaWxkKGZyaWVzKTtcbiAgICB0YXRvcnNEaXYuYXBwZW5kQ2hpbGQodGF0b3JzKTtcbiAgICBidXJnZXJEaXYuYXBwZW5kQ2hpbGQoYnVyZ2VyKTtcbiAgICBjaGlja2VuRGl2LmFwcGVuZENoaWxkKGNoaWNrZW4pO1xuXG4gICAgLy9DcmVhdGUgZm9vZCB0ZXh0IGVsZW1lbnRzXG4gICAgbGV0IGJlZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IG1lYWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGZyaWVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCB0YXRvcnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGJ1cmdlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgY2hpY2tlblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBiZWVyVGV4dC50ZXh0Q29udGVudCA9IFwiQmVlclwiO1xuICAgIG1lYWRUZXh0LnRleHRDb250ZW50ID0gXCJNZWFkXCI7XG4gICAgZnJpZXNUZXh0LnRleHRDb250ZW50ID0gXCJGcmllc1wiO1xuICAgIHRhdG9yc1RleHQudGV4dENvbnRlbnQgPSBcIlRhdG9yIFRvdHNcIjtcbiAgICBidXJnZXJUZXh0LnRleHRDb250ZW50ID0gXCJCdXJnZXJcIjtcbiAgICBjaGlja2VuVGV4dC50ZXh0Q29udGVudCA9IFwiQ2hpY2tlbiBTYW5kd2ljaFwiO1xuICAgIGJlZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJmb29kVGV4dFwiKTtcbiAgICBtZWFkVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG4gICAgZnJpZXNUZXh0LmNsYXNzTGlzdC5hZGQoXCJmb29kVGV4dFwiKTtcbiAgICB0YXRvcnNUZXh0LmNsYXNzTGlzdC5hZGQoXCJmb29kVGV4dFwiKTtcbiAgICBidXJnZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJmb29kVGV4dFwiKTtcbiAgICBjaGlja2VuVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vZFRleHRcIik7XG5cbiAgICAvL0FwcGVuZCBmb29kIFRleHRcbiAgICBiZWVyRGl2LmFwcGVuZENoaWxkKGJlZXJUZXh0KTtcbiAgICBtZWFkRGl2LmFwcGVuZENoaWxkKG1lYWRUZXh0KTtcbiAgICBmcmllc0Rpdi5hcHBlbmRDaGlsZChmcmllc1RleHQpO1xuICAgIHRhdG9yc0Rpdi5hcHBlbmRDaGlsZCh0YXRvcnNUZXh0KTtcbiAgICBidXJnZXJEaXYuYXBwZW5kQ2hpbGQoYnVyZ2VyVGV4dCk7XG4gICAgY2hpY2tlbkRpdi5hcHBlbmRDaGlsZChjaGlja2VuVGV4dCk7XG5cbiAgICAvL0FwcGVuZGluZyB0byBjb250ZW50XG4gICAgZHJpbmtzRGl2LmFwcGVuZENoaWxkKGRyaW5rc1RpdGxlKTtcbiAgICBmb29kRGl2LmFwcGVuZENoaWxkKGZvb2RUaXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkcmlua3NEaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZERpdik7XG5cbiAgICAvL0FwcGVuZCBlYWNoIG1lbnUgaXRlbSB0byBpdHMgYXBwcm9wcmlhdGUgZGl2XG4gICAgZHJpbmtJdGVtcy5hcHBlbmRDaGlsZChiZWVyRGl2KTtcbiAgICBkcmlua0l0ZW1zLmFwcGVuZENoaWxkKG1lYWREaXYpO1xuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChidXJnZXJEaXYpO1xuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChjaGlja2VuRGl2KTtcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQoZnJpZXNEaXYpO1xuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZCh0YXRvcnNEaXYpO1xuXG4gICAgZHJpbmtzRGl2LmFwcGVuZENoaWxkKGRyaW5rSXRlbXMpO1xuICAgIGZvb2REaXYuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1zKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBob21lTG9hZCBmcm9tIFwiLi9ob21lTG9hZC5qc1wiO1xuaW1wb3J0IG1lbnVMb2FkIGZyb20gXCIuL21lbnVMb2FkLmpzXCI7XG5pbXBvcnQgY29udGFjdExvYWQgZnJvbSBcIi4vY29udGFjdExvYWQuanNcIjtcbmltcG9ydCBjcmVhdGVCYWNrZ3JvdW5kIGZyb20gXCIuL2NyZWF0ZUJhY2tncm91bmQuanNcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vY3JlYXRlSGVhZGVyLmpzXCI7XG5cbi8vQ2FjaGUgRE9NXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuLy9FeHRyYSBpbXBvcnRlZCBmdW5jdGlvbnMgZm9yIGNyZWF0aW5nIHN0YXRpYyBlbGVtZW50c1xuY3JlYXRlQmFja2dyb3VuZCgpO1xuY3JlYXRlSGVhZGVyKCk7XG5cblxuaG9tZUxvYWQoKTtcblxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd01lbnUpO1xubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQmFja2dyb3VuZCk7XG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Q29udGFjdCk7XG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVCYWNrZ3JvdW5kKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dIb21lKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUJhY2tncm91bmQpO1xuXG4vL0Z1bmN0aW9uIHRvIHNldCBldmVyeXRoaW5nIGluIHRoZSBET00gdG8wKGZvciBzd2l0Y2hpbmcgdGFicylcbmZ1bmN0aW9uIHNob3dIb21lKCkge1xuICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5pdGVtKDApICE9IFwiaG9tZUNvbnRlbnRcIilcbiAgICB7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShjb250ZW50LmNsYXNzTGlzdC5pdGVtKDApKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZUNvbnRlbnRcIik7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHNldFRpbWVvdXQod2FpdEhvbWUsIDUwMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuaXRlbSgwKSAhPSBcIm1lbnVDb250ZW50XCIpXG4gICAge1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoY29udGVudC5jbGFzc0xpc3QuaXRlbSgwKSk7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVDb250ZW50XCIpO1xuICAgICAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBzZXRUaW1lb3V0KHdhaXRNZW51LCA1MDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd0NvbnRhY3QoKSB7XG4gICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0Lml0ZW0oMCkgIT0gXCJjb250YWN0Q29udGVudFwiKVxuICAgIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKGNvbnRlbnQuY2xhc3NMaXN0Lml0ZW0oMCkpO1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGVudFwiKTtcbiAgICAgICAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgc2V0VGltZW91dCh3YWl0Q29udGFjdCwgNTAwKTtcbiAgICB9XG59XG5cbi8vRnVuY3Rpb24gdG8gc3dpdGNoIGJldHdlZW4gdGhlIHR3byBiYWNrZ3JvdW5kcyBvdmVybGF5ZWQgb24gZWFjaCBvdGhlclxuZnVuY3Rpb24gdG9nZ2xlQmFja2dyb3VuZCgpIHtcbiAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuaXRlbSgwKSA9PSBcIm1lbnVDb250ZW50XCIpXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH1cbn1cblxuLy9GdW5jdGlvbiB0byBjbGVhciB0aGUgY29udGVudCBkaXZcbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMoKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5cbi8vVGhlc2UgZnVuY3Rpb25zIHdyYXAgdG9nZXRoZXIgb3RoZXIgZnVuY3Rpb25zIHNvIHRoYXQgdGhlIGZhZGUgb3V0IGVmZmVjdCBjYW4gdGFrZVxuLy9wbGFjZSAodmlhIHNldFRpbWVvdXQpIGJlZm9yZSB0aGUgb2xkIGVsZW1lbnRzIGFyZSByZW1vdmVkXG5mdW5jdGlvbiB3YWl0SG9tZSgpIHtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKCk7XG4gICAgaG9tZUxvYWQoKTtcbiAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHRvZ2dsZUJhY2tncm91bmQoKTtcbn1cblxuZnVuY3Rpb24gd2FpdE1lbnUoKSB7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpO1xuICAgIG1lbnVMb2FkKCk7XG4gICAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB0b2dnbGVCYWNrZ3JvdW5kKCk7XG59XG5cbmZ1bmN0aW9uIHdhaXRDb250YWN0KCkge1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKTtcbiAgICBjb250YWN0TG9hZCgpO1xuICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgdG9nZ2xlQmFja2dyb3VuZCgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=