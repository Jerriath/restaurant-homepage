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


(0,_homeLoad_js__WEBPACK_IMPORTED_MODULE_0__.default)();

//Cache DOM
let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let contact = document.querySelector("#contact");

let homeContent = document.querySelector("#homeContent");
let background = document.querySelector("#background");

menu.addEventListener("click", hideHome);
contact.addEventListener("click", hideHome);
home.addEventListener("click", showHome);

//Function to set everything in the DOM to hidden (for switching tabs)
function hideHome() {
    if (window.getComputedStyle(homeContent).visibility == "visible")
    {
        homeContent.style.visibility = "hidden";
        homeContent.style.opacity = "0";
        homeContent.style.transition = "visibility 0s .5s, opacity .5s linear";
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2hvbWVMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esb0RBQW9EO0FBQ3BEOztBQUVBLG9EQUFvRDtBQUNwRDs7QUFFQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7O1VDbkhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTnFDOztBQUVyQyxxREFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcblxuICAgIC8vQ2FjaGUgRE9NXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVDb250ZW50XCIpO1xuXG4gICAgLy9DcmVhdGUgaG9tZXBhZ2UgRE9NIGVsZW1lbnRzXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpOyAvL0JhY2tncm91bmQgaW1hZ2VcbiAgICBiYWNrZ3JvdW5kLnNyYyA9IFwiaW1ncy9yZXN0YXVyYW50LmpwZ1wiO1xuICAgIGJhY2tncm91bmQuaWQgPSBcImJhY2tncm91bmRcIjtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kXCIpO1xuXG4gICAgY29uc3QgZm9vZCA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2Quc3JjID0gXCJpbWdzL2Zvb2QuanBlZ1wiO1xuICAgIGZvb2QuaWQgPSBcImZvb2RcIjtcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgIGZvb2Quc3R5bGUuekluZGV4ID0gXCItMVwiO1xuICAgIGZvb2Quc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGZvb2QuY2xhc3NMaXN0LmFkZChcIm9wYXF1ZVwiKTtcblxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTsgLy9IZWFkZXIgZGl2XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBuYXZIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL0RpdiB0byBob2xkIG5hdkJhclxuICAgIG5hdkhvbGRlci5jbGFzc0xpc3QuYWRkKFwibmF2SG9sZGVyXCIpO1xuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTsgLy9OYXYgZWxlbWVudFxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2QmFyXCIpO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZURpdi5pZCA9IFwidGl0bGVcIjtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XG4gICAgaG91cnMuaWQgPSBcImhvdXJzXCI7XG5cbiAgICAvL0NyZWF0ZXMgdGhlIGVsZW1lbnRzIHRvIGZpbGwgdGhlIG5hdkJhclxuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lLmlkID0gXCJob21lXCI7XG4gICAgbGV0IGhvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaG9tZVRleHQudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVUZXh0KTtcbiAgICBob21lVGV4dC5jbGFzc0xpc3QuYWRkKFwibmF2VGV4dFwiKVxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51LmlkID0gXCJtZW51XCI7XG4gICAgbGV0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudVRleHQudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVUZXh0KTtcbiAgICBtZW51VGV4dC5jbGFzc0xpc3QuYWRkKFwibmF2VGV4dFwiKVxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0XCI7XG4gICAgbGV0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29udGFjdFRleHQudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0KTtcbiAgICBjb250YWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwibmF2VGV4dFwiKVxuXG4gICAgLy9BcHBlbmQgYWxsIGVsZW1lbnRzIHRvIGhlYWRlci9uYXZIb2xkZXIvbmF2QmFyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgbmF2SG9sZGVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkhvbGRlcik7XG5cbiAgICAvL0NyZWF0ZSBlbGVtZW50cyBmb3IgdGhlIGNvbnRlbnQgZGl2XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxldCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBsaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG5cbiAgICAvL0ZpbGwgdGV4dCBjb250ZW50IGZvciBjb250ZW50IGVsZW1lbnRzXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSBOZXcgU2Fsb29uXCI7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiVGhlIG1vZGVybiBoYW5nb3V0IHNwb3QgZm9yIGV2ZXJ5b25lIVwiO1xuXG4gICAgLy9BcHBlbmQgZWxlbWVudHMgdG8gdGl0bGVEaXZcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQobGluZUJyZWFrKTtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblxuICAgIC8vQXBwZW5kIHRpdGxlRGl2IHRvIGNvbnRlbnRcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICAvL0NyZWF0ZSBlbGVtZW50cyBmb3IgdGhlIHJlc3RhdXJhbnQgb3BlcmF0aW9uIGhvdXJzXG4gICAgbGV0IHN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBtb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgdHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCB3ZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgdGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgZnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHNhdHVyZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBzdW5kYXkudGV4dENvbnRlbnQgPSBcIlN1bmRheTogICAxMnBtIC0gMTFhbVwiO1xuICAgIG1vbmRheS50ZXh0Q29udGVudCA9IFwiTW9uZGF5OiAgIDEycG0gLSAxMGFtXCI7XG4gICAgdHVlc2RheS50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogMTJwbSAtIDEwYW1cIjtcbiAgICB3ZWRuZXNkYXkudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheTogMTJwbSAtIDEwYW1cIjtcbiAgICB0aHVyc2RheS50ZXh0Q29udGVudCA9IFwiVGh1cnNkYXk6ICAgMTJwbSAtIDEwYW1cIjtcbiAgICBmcmlkYXkudGV4dENvbnRlbnQgPSBcIkZyaWRheTogICAxMnBtIC0gMTJhbVwiO1xuICAgIHNhdHVyZGF5LnRleHRDb250ZW50ID0gXCJTYXR1cmRheTogICAxMnBtIC0gMTJhbVwiO1xuXG4gICAgLy9BcHBlbmQgdGltZXMgdG8gaG91cnMgZGl2XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoc3VuZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChtb25kYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHR1ZXNkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHdlZG5lc2RheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQodGh1cnNkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGZyaWRheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoc2F0dXJkYXkpO1xuXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vZCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZUxvYWQgZnJvbSBcIi4vaG9tZUxvYWQuanNcIjtcblxuaG9tZUxvYWQoKTtcblxuLy9DYWNoZSBET01cbmxldCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5sZXQgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcblxubGV0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lQ29udGVudFwiKTtcbmxldCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWNrZ3JvdW5kXCIpO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlSG9tZSk7XG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlSG9tZSk7XG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SG9tZSk7XG5cbi8vRnVuY3Rpb24gdG8gc2V0IGV2ZXJ5dGhpbmcgaW4gdGhlIERPTSB0byBoaWRkZW4gKGZvciBzd2l0Y2hpbmcgdGFicylcbmZ1bmN0aW9uIGhpZGVIb21lKCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShob21lQ29udGVudCkudmlzaWJpbGl0eSA9PSBcInZpc2libGVcIilcbiAgICB7XG4gICAgICAgIGhvbWVDb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBob21lQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIGhvbWVDb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInZpc2liaWxpdHkgMHMgLjVzLCBvcGFjaXR5IC41cyBsaW5lYXJcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dIb21lKCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShob21lQ29udGVudCkudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiKVxuICAgIHtcbiAgICAgICAgaG9tZUNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICBob21lQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIGhvbWVDb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInZpc2liaWxpdHkgMHMsIG9wYWNpdHkgLjVzIGxpbmVhclwiO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9