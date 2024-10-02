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
/******/ 	return __webpack_require__(__webpack_require__.s = "./chatList.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ChatPlace/chatPlace.css":
/*!*********************************!*\
  !*** ./ChatPlace/chatPlace.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./ChatPlace/chatPlace.css?");

/***/ }),

/***/ "./ChatPlace/chatPlace.js":
/*!********************************!*\
  !*** ./ChatPlace/chatPlace.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatPlace_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatPlace.css */ \"./ChatPlace/chatPlace.css\");\n/* harmony import */ var _chatPlace_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chatPlace_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ChatPlace = function ChatPlace(_ref) {\n  var name = _ref.name,\n    time = _ref.time;\n  var chat = document.createElement('li');\n  chat.classList.add('chat-place');\n  var chatName = document.createElement('div');\n  chatName.classList.add('chat-name');\n  chatName.textContent = name;\n  var chatTime = document.createElement('div');\n  chatTime.classList.add('chat-time');\n  chatTime.textContent = time;\n  chat.appendChild(chatName);\n  chat.appendChild(chatTime);\n  return chat;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatPlace);\n\n//# sourceURL=webpack:///./ChatPlace/chatPlace.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _head_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head.css */ \"./Head/head.css\");\n/* harmony import */ var _head_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_head_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Head = function Head(isChatOpen, isChatList) {\n  var head = document.createElement('div');\n  head.classList.add('top-bar');\n  var menuIcon = document.createElement('span');\n  menuIcon.classList.add('material-icons', 'menu-icon');\n  menuIcon.textContent = isChatOpen ? 'arrow_back' : 'menu';\n  if (isChatOpen) {\n    menuIcon.addEventListener('click', isChatList);\n  }\n  var title = document.createElement('span');\n  title.classList.add('messenger');\n  title.textContent = isChatOpen ? 'Here will be username' : 'Messenger';\n  var searchIcon = document.createElement('span');\n  searchIcon.classList.add('material-icons', 'search-icon');\n  searchIcon.textContent = 'search';\n  head.appendChild(menuIcon);\n  head.appendChild(title);\n  head.appendChild(searchIcon);\n  return head;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\n//# sourceURL=webpack:///./Head/head.js?");

/***/ }),

/***/ "./chatList.css":
/*!**********************!*\
  !*** ./chatList.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chatList.css?");

/***/ }),

/***/ "./chatList.js":
/*!*********************!*\
  !*** ./chatList.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatList_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatList.css */ \"./chatList.css\");\n/* harmony import */ var _chatList_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chatList_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Head_head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head/head.js */ \"./Head/head.js\");\n/* harmony import */ var _ChatPlace_chatPlace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatPlace/chatPlace.js */ \"./ChatPlace/chatPlace.js\");\n\n\n\n// import {FloatingButton} from './FloatButton/floatButton'\n\nvar example_chats = [{\n  name: \"first chat\",\n  time: \"01:00\"\n}, {\n  name: \"second chat\",\n  time: \"10:00\"\n}];\nlocalStorage.setItem('chats', JSON.stringify(example_chats));\nvar chatList = document.querySelector('.ui');\nvar addChat = document.querySelector('.add-chat');\nvar chatBox = JSON.parse(localStorage.getItem('chats')) || [];\nvar topBar = Object(_Head_head_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\ndocument.querySelector('main').insertBefore(topBar, chatList);\nvar loadChats = function loadChats() {\n  chatList.innerHTML = '';\n  var fragment = document.createDocumentFragment();\n  chatBox.forEach(function (_ref) {\n    var name = _ref.name,\n      time = _ref.time;\n    var chat = Object(_ChatPlace_chatPlace_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      name: name,\n      time: time\n    });\n    fragment.appendChild(chat);\n  });\n  chatList.appendChild(fragment);\n};\nvar makeChat = function makeChat(chatData) {\n  var chatEl = document.createElement('li');\n  chatEl.classList.add('chat-place');\n  var chatName = document.createElement('div');\n  chatName.classList.add('chat-name');\n  chatName.textContent = chatData.name;\n\n  // Время последнего сообщения (если будет в будущем)\n  var chatTime = document.createElement('div');\n  chatTime.classList.add('chat-time');\n  chatTime.textContent = chatData.time;\n  chatEl.appendChild(chatName);\n  chatEl.appendChild(chatTime);\n  return chatEl;\n};\nvar handleAddChat = function handleAddChat() {\n  var newChatName = prompt(\"Введите название нового чата:\"); // Имитация ввода нового чата\n  if (!newChatName) return; // Не добавляем пустой чат\n\n  var chatTime = new Date().toLocaleString(); // Время создания чата\n  var newChat = {\n    name: newChatName,\n    time: chatTime\n  };\n  chatsStorage.push(newChat); // Добавляем новый чат в массив\n  localStorage.setItem('chats', JSON.stringify(chatsStorage)); // Обновляем LocalStorage\n\n  var newChatElement = makeChat(newChat); // Создаем элемент нового чата\n  chatList.appendChild(newChatElement); // Добавляем новый чат в DOM\n};\n\n// Добавляем обработчик на кнопку добавления чата\naddChat.addEventListener('click', handleAddChat);\n\n// Загрузка чатов при открытии страницы\nloadChats();\n\n//# sourceURL=webpack:///./chatList.js?");

/***/ })

/******/ });