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

/***/ "./Head/head.css":
/*!***********************!*\
  !*** ./Head/head.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./Head/head.css?");

/***/ }),

/***/ "./Head/head.js":
/*!**********************!*\
  !*** ./Head/head.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _head_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head.css */ \"./Head/head.css\");\n/* harmony import */ var _head_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_head_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aaa_a_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aaa/a.png */ \"./aaa/a.png\");\n\n\nvar Head = function Head(isChatOpen, isChatList, userPic) {\n  var userName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"Unknown\";\n  var head = document.createElement('div');\n  head.classList.add('top-bar');\n  var menuIcon = document.createElement('span');\n  menuIcon.classList.add('material-icons', 'menu-icon');\n  menuIcon.textContent = isChatOpen ? 'arrow_back' : 'menu';\n  var title = document.createElement('span');\n  title.classList.add('messenger');\n  title.textContent = isChatOpen ? userName : 'Messenger';\n  var searchIcon = document.createElement('span');\n  searchIcon.classList.add('material-icons', 'search-icon');\n  searchIcon.textContent = 'search';\n  head.appendChild(menuIcon);\n  if (isChatOpen) {\n    // const avatarImg = document.createElement('img');\n    // avatarImg.src = userPic || defaultAvatar;\n    // avatarImg.classList.add('chat-avatar'); \n    // head.appendChild(avatarImg);\n    // menuIcon.addEventListener('click', isChatList);\n    var userInfo = document.createElement('div');\n    userInfo.classList.add('user-info');\n    var avatarImg = document.createElement('img');\n    avatarImg.src = userPic || _aaa_a_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    avatarImg.classList.add('chat-avatar');\n    var _title = document.createElement('span');\n    _title.classList.add('messenger');\n    _title.textContent = userName;\n\n    // Вставляем аватарку и имя в обертку\n    userInfo.appendChild(avatarImg);\n    userInfo.appendChild(_title);\n    head.appendChild(userInfo);\n    menuIcon.addEventListener('click', isChatList);\n  }\n  // head.appendChild(title);\n  head.appendChild(searchIcon);\n  return head;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\n//# sourceURL=webpack:///./Head/head.js?");

/***/ }),

/***/ "./aaa/a.png":
/*!*******************!*\
  !*** ./aaa/a.png ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/a.png\");\n\n//# sourceURL=webpack:///./aaa/a.png?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Head_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head/head */ \"./Head/head.js\");\n/* harmony import */ var _makeMessage_makeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeMessage/makeMessage */ \"./makeMessage/makeMessage.js\");\n\n\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar messageBox = document.querySelector('.ui');\nvar userName = 'Test user'; // Заглушка для имени пользователя\nvar userPic = '';\nvar messagesStorage = JSON.parse(localStorage.getItem('chatMessages')) || [];\nvar goToChatList = function goToChatList() {\n  window.location.href = 'chatList.html'; // Перенаправление на страницу со списком чатов\n};\nvar topBar = Object(_Head_head__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true, goToChatList, userPic, userName);\ndocument.querySelector('main').insertBefore(topBar, messageBox);\nvar loadMessages = function loadMessages() {\n  messageBox.innerHTML = '';\n  var part = document.createDocumentFragment();\n  messagesStorage.forEach(function (_ref) {\n    var sender = _ref.sender,\n      text = _ref.text,\n      time = _ref.time;\n    var elemnt_part = Object(_makeMessage_makeMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      sender: sender,\n      text: text,\n      time: time\n    });\n    part.appendChild(elemnt_part);\n  });\n  messageBox.appendChild(part);\n};\nvar handleSubmit = function handleSubmit(event) {\n  event.preventDefault();\n  var messageText = input.value.trim();\n  var messageTime = new Date().toLocaleString();\n  if (!messageText) {\n    return;\n  }\n  var messageData = {\n    sender: userName,\n    text: messageText,\n    time: messageTime\n  };\n  messagesStorage.push(messageData);\n  localStorage.setItem('chatMessages', JSON.stringify(messagesStorage));\n  var elemnt_part = Object(_makeMessage_makeMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    sender: sender,\n    text: text,\n    time: time\n  });\n  messageBox.appendChild(elemnt_part);\n  input.value = '';\n  input.focus();\n  messageBox.scrollTop = messageBox.scrollHeight;\n};\nvar handleKeyPress = function handleKeyPress(event) {\n  if (event.key === 'Enter') {\n    event.preventDefault();\n    handleSubmit(event);\n  }\n};\nform.addEventListener('submit', handleSubmit);\nform.addEventListener('keydown', handleKeyPress);\n\n// Загрузка при открытии\nloadMessages();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./makeMessage/makeMessage.js":
/*!************************************!*\
  !*** ./makeMessage/makeMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar makeMessage = function makeMessage(_ref) {\n  var sender = _ref.sender,\n    text = _ref.text,\n    time = _ref.time;\n  var elemnt_part = document.createElement('li');\n  elemnt_part.classList.add('message');\n  var messageHeader = document.createElement('div');\n  messageHeader.classList.add('message-header');\n  messageHeader.textContent = sender;\n  var messageBody = document.createElement('div');\n  messageBody.classList.add('message-body');\n  messageBody.textContent = text;\n  var messageFooter = document.createElement('div');\n  messageFooter.classList.add('message-footer');\n  messageFooter.textContent = \"\".concat(time);\n  elemnt_part.appendChild(messageHeader);\n  elemnt_part.appendChild(messageBody);\n  elemnt_part.appendChild(messageFooter);\n  return elemnt_part;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeMessage);\n\n//# sourceURL=webpack:///./makeMessage/makeMessage.js?");

/***/ })

/******/ });