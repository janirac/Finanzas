/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_finanzas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/finanzas */ \"./src/scripts/finanzas.js\");\n\n// import \"./styles/main.scss\";\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // 1. find out how to write to the browser local storage or cookie\n  // 2. Check the browser local storage for the finanza app configuration file.\n  // 3. if there is a configuration file then pass it as a parameter to the app\n\n  const navigation = document.getElementById(\"navigation-bar\");\n  const app = new _scripts_finanzas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  app.start();\n  // app.addTransaction(\"revenue\", 100, \":) salary\", \"yearly\", \"12/31/2010\")\n  // app.addTransaction(\"revenue\", 200, \":) salary\", \"yearly\", \"12/31/2010\")\n  // app.addTransaction(\"revenue\", 300, \":) salary\", \"yearly\", \"12/31/2010\")\n  // app.showTransactions() \n  // Used lines 12 - 15 for testing purposes\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFDMUM7O0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRDtFQUNBO0VBQ0E7O0VBRUEsTUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM1RCxNQUFNQyxHQUFHLEdBQUcsSUFBSUwseURBQVEsRUFBRTtFQUMxQkssR0FBRyxDQUFDQyxLQUFLLEVBQUU7RUFDWDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYW56YXMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmluYW56YXMgZnJvbSBcIi4vc2NyaXB0cy9maW5hbnphc1wiOyBcbi8vIGltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gMS4gZmluZCBvdXQgaG93IHRvIHdyaXRlIHRvIHRoZSBicm93c2VyIGxvY2FsIHN0b3JhZ2Ugb3IgY29va2llXG4gICAgLy8gMi4gQ2hlY2sgdGhlIGJyb3dzZXIgbG9jYWwgc3RvcmFnZSBmb3IgdGhlIGZpbmFuemEgYXBwIGNvbmZpZ3VyYXRpb24gZmlsZS5cbiAgICAvLyAzLiBpZiB0aGVyZSBpcyBhIGNvbmZpZ3VyYXRpb24gZmlsZSB0aGVuIHBhc3MgaXQgYXMgYSBwYXJhbWV0ZXIgdG8gdGhlIGFwcFxuXG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2aWdhdGlvbi1iYXJcIilcbiAgICBjb25zdCBhcHAgPSBuZXcgRmluYW56YXMoKVxuICAgIGFwcC5zdGFydCgpXG4gICAgLy8gYXBwLmFkZFRyYW5zYWN0aW9uKFwicmV2ZW51ZVwiLCAxMDAsIFwiOikgc2FsYXJ5XCIsIFwieWVhcmx5XCIsIFwiMTIvMzEvMjAxMFwiKVxuICAgIC8vIGFwcC5hZGRUcmFuc2FjdGlvbihcInJldmVudWVcIiwgMjAwLCBcIjopIHNhbGFyeVwiLCBcInllYXJseVwiLCBcIjEyLzMxLzIwMTBcIilcbiAgICAvLyBhcHAuYWRkVHJhbnNhY3Rpb24oXCJyZXZlbnVlXCIsIDMwMCwgXCI6KSBzYWxhcnlcIiwgXCJ5ZWFybHlcIiwgXCIxMi8zMS8yMDEwXCIpXG4gICAgLy8gYXBwLnNob3dUcmFuc2FjdGlvbnMoKSBcbiAgICAvLyBVc2VkIGxpbmVzIDEyIC0gMTUgZm9yIHRlc3RpbmcgcHVycG9zZXNcbn0pIl0sIm5hbWVzIjpbIkZpbmFuemFzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibmF2aWdhdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiYXBwIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/finanzas.js":
/*!*********************************!*\
  !*** ./src/scripts/finanzas.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Finanzas {\n  constructor() {\n    this.name = \"\";\n    this.transactions = [];\n  }\n  start() {\n    this.promptUser();\n    this.updateTitle();\n  }\n  promptUser() {\n    let name = prompt(\"Please Enter Your Name\", \"Janira Crispin\");\n    this.name = name;\n  }\n  updateTitle() {\n    if (this.name != null) {\n      document.getElementById(\"main-header\").innerHTML = this.name + \" Finanzas\";\n    }\n  }\n  addTransaction(transactionType, amount, category, frequency, date) {\n    this.transactions.push({\n      transactionType,\n      amount,\n      category,\n      frequency,\n      date\n    });\n  }\n\n  // showTransactions(){\n  //     console.log(this.transactions)\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Finanzas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9maW5hbnphcy5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsUUFBUSxDQUFDO0VBQ1hDLFdBQVcsR0FBRTtJQUNULElBQUksQ0FBQ0MsSUFBSSxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNDLFlBQVksR0FBRyxFQUFFO0VBQzFCO0VBRUFDLEtBQUssR0FBRTtJQUNILElBQUksQ0FBQ0MsVUFBVSxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsV0FBVyxFQUFFO0VBQ3RCO0VBRUFELFVBQVUsR0FBRTtJQUNSLElBQUlILElBQUksR0FBR0ssTUFBTSxDQUFDLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDO0lBQzdELElBQUksQ0FBQ0wsSUFBSSxHQUFHQSxJQUFJO0VBQ3BCO0VBRUFJLFdBQVcsR0FBRTtJQUNULElBQUcsSUFBSSxDQUFDSixJQUFJLElBQUksSUFBSSxFQUFDO01BQ2pCTSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ0MsU0FBUyxHQUNoRCxJQUFJLENBQUNSLElBQUksR0FBRyxXQUFXO0lBQzNCO0VBQ0o7RUFFQVMsY0FBYyxDQUFDQyxlQUFlLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBQztJQUM5RCxJQUFJLENBQUNiLFlBQVksQ0FBQ2MsSUFBSSxDQUFDO01BQ25CTCxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsUUFBUTtNQUNSQyxTQUFTO01BQ1RDO0lBQ0osQ0FBQyxDQUFDO0VBQ047O0VBRUE7RUFDQTtFQUNBO0FBR0o7O0FBSUEsK0RBQWVoQixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYW56YXMvLi9zcmMvc2NyaXB0cy9maW5hbnphcy5qcz80ZmNjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZpbmFuemFzIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlwiXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gW11cbiAgICB9XG5cbiAgICBzdGFydCgpe1xuICAgICAgICB0aGlzLnByb21wdFVzZXIoKVxuICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlKClcbiAgICB9XG5cbiAgICBwcm9tcHRVc2VyKCl7XG4gICAgICAgIGxldCBuYW1lID0gcHJvbXB0KFwiUGxlYXNlIEVudGVyIFlvdXIgTmFtZVwiLCBcIkphbmlyYSBDcmlzcGluXCIpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHVwZGF0ZVRpdGxlKCl7XG4gICAgICAgIGlmKHRoaXMubmFtZSAhPSBudWxsKXtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1oZWFkZXJcIikuaW5uZXJIVE1MID0gXG4gICAgICAgICAgICB0aGlzLm5hbWUgKyBcIiBGaW5hbnphc1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvblR5cGUsIGFtb3VudCwgY2F0ZWdvcnksIGZyZXF1ZW5jeSwgZGF0ZSl7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlLFxuICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICBmcmVxdWVuY3ksXG4gICAgICAgICAgICBkYXRlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gc2hvd1RyYW5zYWN0aW9ucygpe1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnRyYW5zYWN0aW9ucylcbiAgICAvLyB9XG5cbiAgICBcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEZpbmFuemFzOyJdLCJuYW1lcyI6WyJGaW5hbnphcyIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRyYW5zYWN0aW9ucyIsInN0YXJ0IiwicHJvbXB0VXNlciIsInVwZGF0ZVRpdGxlIiwicHJvbXB0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImFkZFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25UeXBlIiwiYW1vdW50IiwiY2F0ZWdvcnkiLCJmcmVxdWVuY3kiLCJkYXRlIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/finanzas.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbnphcy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;