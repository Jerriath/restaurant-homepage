/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad() {

    //Cache DOM
    let body = document.querySelector("body");
    let content = document.querySelector("#content");

    //Create homepage DOM elements
    const background = new Image(); //Background image
    background.src = "imgs/restaurant.jpg";
    background.classList.add("background");

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
    let home = document.createElement("div");
    home.id = "home";
    let homeText = document.createElement("p");
    homeText.textContent = "Home";
    home.appendChild(homeText);
    homeText.classList.add("navText")
    let menu = document.createElement("div");
    menu.id = "menu";
    let menuText = document.createElement("p");
    menuText.textContent = "Menu";
    menu.appendChild(menuText);
    menuText.classList.add("navText")
    let contact = document.createElement("div");
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


    body.appendChild(background);
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
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ "./src/pageLoad.js");


(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.default)();

//Cache DOM
let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let contact = document.querySelector("contact");



//Function to set everything in the DOM to hidden (for switching tabs)
function hideAll() {
    hours.style.visibility = "hidden";
    title.style.visibility = "hidden";
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUEsb0RBQW9EO0FBQ3BEOztBQUVBLG9EQUFvRDtBQUNwRDs7QUFFQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBLEM7Ozs7OztVQ3hHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckMscURBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuXG4gICAgLy9DYWNoZSBET01cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgLy9DcmVhdGUgaG9tZXBhZ2UgRE9NIGVsZW1lbnRzXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpOyAvL0JhY2tncm91bmQgaW1hZ2VcbiAgICBiYWNrZ3JvdW5kLnNyYyA9IFwiaW1ncy9yZXN0YXVyYW50LmpwZ1wiO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRcIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpOyAvL0hlYWRlciBkaXZcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IG5hdkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vRGl2IHRvIGhvbGQgbmF2QmFyXG4gICAgbmF2SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZIb2xkZXJcIik7XG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpOyAvL05hdiBlbGVtZW50XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZCYXJcIik7XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlRGl2LmlkID0gXCJ0aXRsZVwiO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcbiAgICBob3Vycy5pZCA9IFwiaG91cnNcIjtcblxuICAgIC8vQ3JlYXRlcyB0aGUgZWxlbWVudHMgdG8gZmlsbCB0aGUgbmF2QmFyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWUuaWQgPSBcImhvbWVcIjtcbiAgICBsZXQgaG9tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBob21lVGV4dC50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVRleHQpO1xuICAgIGhvbWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJuYXZUZXh0XCIpXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcbiAgICBsZXQgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51VGV4dC50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuICAgIG1lbnVUZXh0LmNsYXNzTGlzdC5hZGQoXCJuYXZUZXh0XCIpXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3QuaWQgPSBcImNvbnRhY3RcIjtcbiAgICBsZXQgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0VGV4dC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuICAgIGNvbnRhY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJuYXZUZXh0XCIpXG5cbiAgICAvL0FwcGVuZCBhbGwgZWxlbWVudHMgdG8gaGVhZGVyL25hdkhvbGRlci9uYXZCYXJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBuYXZIb2xkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2SG9sZGVyKTtcblxuICAgIC8vQ3JlYXRlIGVsZW1lbnRzIGZvciB0aGUgY29udGVudCBkaXZcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICAgIC8vRmlsbCB0ZXh0IGNvbnRlbnQgZm9yIGNvbnRlbnQgZWxlbWVudHNcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIE5ldyBTYWxvb25cIjtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJUaGUgbW9kZXJuIGhhbmdvdXQgc3BvdCBmb3IgZXZlcnlvbmUhXCI7XG5cbiAgICAvL0FwcGVuZCBlbGVtZW50cyB0byB0aXRsZURpdlxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWspO1xuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgLy9BcHBlbmQgdGl0bGVEaXYgdG8gY29udGVudFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgLy9DcmVhdGUgZWxlbWVudHMgZm9yIHRoZSByZXN0YXVyYW50IG9wZXJhdGlvbiBob3Vyc1xuICAgIGxldCBzdW5kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgbW9uZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHR1ZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgd2VkbmVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHRodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBzYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgc3VuZGF5LnRleHRDb250ZW50ID0gXCJTdW5kYXk6ICAgMTJwbSAtIDExYW1cIjtcbiAgICBtb25kYXkudGV4dENvbnRlbnQgPSBcIk1vbmRheTogICAxMnBtIC0gMTBhbVwiO1xuICAgIHR1ZXNkYXkudGV4dENvbnRlbnQgPSBcIlR1ZXNkYXk6IDEycG0gLSAxMGFtXCI7XG4gICAgd2VkbmVzZGF5LnRleHRDb250ZW50ID0gXCJXZWRuZXNkYXk6IDEycG0gLSAxMGFtXCI7XG4gICAgdGh1cnNkYXkudGV4dENvbnRlbnQgPSBcIlRodXJzZGF5OiAgIDEycG0gLSAxMGFtXCI7XG4gICAgZnJpZGF5LnRleHRDb250ZW50ID0gXCJGcmlkYXk6ICAgMTJwbSAtIDEyYW1cIjtcbiAgICBzYXR1cmRheS50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXk6ICAgMTJwbSAtIDEyYW1cIjtcblxuICAgIC8vQXBwZW5kIHRpbWVzIHRvIGhvdXJzIGRpdlxuICAgIGhvdXJzLmFwcGVuZENoaWxkKHN1bmRheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQobW9uZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZCh0dWVzZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZCh3ZWRuZXNkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHRodXJzZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChmcmlkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHNhdHVyZGF5KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL3BhZ2VMb2FkLmpzXCI7XG5cbnBhZ2VMb2FkKCk7XG5cbi8vQ2FjaGUgRE9NXG5sZXQgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbmxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xubGV0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY29udGFjdFwiKTtcblxuXG5cbi8vRnVuY3Rpb24gdG8gc2V0IGV2ZXJ5dGhpbmcgaW4gdGhlIERPTSB0byBoaWRkZW4gKGZvciBzd2l0Y2hpbmcgdGFicylcbmZ1bmN0aW9uIGhpZGVBbGwoKSB7XG4gICAgaG91cnMuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgdGl0bGUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==