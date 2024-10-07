/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar messageBox = document.querySelector('.ui');\nvar userName = 'Unknown'; // Заглушка для имени пользователя\n\nvar messagesStorage = JSON.parse(localStorage.getItem('chatMessages')) || [];\nvar loadMessages = function loadMessages() {\n  messageBox.innerHTML = '';\n  var part = document.createDocumentFragment();\n  messagesStorage.forEach(function (messageData) {\n    var elemnt_part = makeElement(messageData);\n    part.appendChild(elemnt_part);\n  });\n  messageBox.appendChild(part);\n};\nvar handleSubmit = function handleSubmit(event) {\n  event.preventDefault();\n  var messageText = input.value.trim();\n  var messageTime = new Date().toLocaleString();\n  if (!messageText) {\n    return;\n  }\n  var messageData = {\n    sender: userName,\n    text: messageText,\n    time: messageTime\n  };\n  messagesStorage.push(messageData);\n  localStorage.setItem('chatMessages', JSON.stringify(messagesStorage));\n  var elemnt_part = makeElement(messageData);\n  messageBox.appendChild(elemnt_part);\n  input.value = '';\n  input.focus();\n  messageBox.scrollTop = messageBox.scrollHeight;\n};\nvar handleKeyPress = function handleKeyPress(event) {\n  if (event.key === 'Enter') {\n    event.preventDefault();\n    handleSubmit(event);\n  }\n};\nvar makeElement = function makeElement(messageData) {\n  var elemnt_part = document.createElement('li');\n  elemnt_part.classList.add('message');\n  var messageHeader = document.createElement('div');\n  messageHeader.classList.add('message-header');\n  messageHeader.textContent = messageData.sender;\n  var messageBody = document.createElement('div');\n  messageBody.classList.add('message-body');\n  messageBody.textContent = messageData.text;\n  var messageFooter = document.createElement('div');\n  messageFooter.classList.add('message-footer');\n  messageFooter.textContent = \"\".concat(messageData.time);\n  elemnt_part.appendChild(messageHeader);\n  elemnt_part.appendChild(messageBody);\n  elemnt_part.appendChild(messageFooter);\n  return elemnt_part;\n};\nform.addEventListener('submit', handleSubmit);\nform.addEventListener('keydown', handleKeyPress);\n\n// Загрузка при открытии\nloadMessages();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });