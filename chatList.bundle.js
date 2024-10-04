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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatPlace_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatPlace.css */ \"./ChatPlace/chatPlace.css\");\n/* harmony import */ var _chatPlace_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chatPlace_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aaa_a_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aaa/a.png */ \"./aaa/a.png\");\n\n\nvar ChatPlace = function ChatPlace(_ref) {\n  var avatar = _ref.avatar,\n    name = _ref.name,\n    lastMessage = _ref.lastMessage,\n    time = _ref.time,\n    isRead = _ref.isRead;\n  var chat = document.createElement('li');\n  chat.classList.add('chat-place');\n  var chatImage = document.createElement('img');\n  chatImage.src = avatar || _aaa_a_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  chatImage.classList.add('chat-image');\n  var chatComponents = document.createElement('div');\n  chatComponents.classList.add('chat-components');\n  var chatName = document.createElement('div');\n  chatName.classList.add('chat-name');\n  chatName.textContent = name;\n  var chatLastSent = document.createElement('div');\n  chatLastSent.classList.add('last-sent');\n  chatLastSent.textContent = lastMessage;\n  var chatFooter = document.createElement('div');\n  chatFooter.classList.add('chat-footer');\n  var chatTime = document.createElement('div');\n  chatTime.classList.add('chat-time');\n  chatTime.textContent = time;\n  chat.appendChild(chatImage);\n  chat.appendChild(chatComponents);\n  chatFooter.appendChild(chatTime);\n  chatComponents.appendChild(chatName);\n  chatComponents.appendChild(chatLastSent);\n  if (isRead) {\n    var check = document.createElement('span');\n    check.classList.add('material-icons', 'read-status', 'read');\n    check.textContent = 'done_all';\n    chatFooter.appendChild(check);\n  }\n  chatComponents.appendChild(chatFooter);\n  return chat;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatPlace);\n\n//# sourceURL=webpack:///./ChatPlace/chatPlace.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatList_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatList.css */ \"./chatList.css\");\n/* harmony import */ var _chatList_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chatList_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Head_head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head/head.js */ \"./Head/head.js\");\n/* harmony import */ var _ChatPlace_chatPlace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatPlace/chatPlace.js */ \"./ChatPlace/chatPlace.js\");\n\n\n\n// import {FloatingButton} from './FloatButton/floatButton'\n\nvar exampleChats = [{\n  avatar: '',\n  name: \"first chat\",\n  lastMessage: \"some text\",\n  time: \"01:00\",\n  isRead: true\n}, {\n  avatar: '',\n  name: \"second chat\",\n  lastMessage: \"some more text\",\n  time: \"10:00\",\n  isRead: false\n}, {\n  avatar: '',\n  name: \"first cht\",\n  lastMessage: \"sometext\",\n  time: \"01:00\",\n  isRead: true\n}, {\n  avatar: '',\n  name: \"secod chat\",\n  lastMessage: \"sme more text\",\n  time: \"10:00\",\n  isRead: false\n}, {\n  avatar: '',\n  name: \"fi chat\",\n  lastMessage: \"some t\",\n  time: \"01:00\",\n  isRead: true\n}, {\n  avatar: '',\n  name: \"second chat\",\n  lastMessage: \"some more text\",\n  time: \"10:00\",\n  isRead: false\n}, {\n  avatar: '',\n  name: \"first cht\",\n  lastMessage: \"sometext\",\n  time: \"01:00\",\n  isRead: true\n}, {\n  avatar: '',\n  name: \"secod chat\",\n  lastMessage: \"sme more text\",\n  time: \"10:00\",\n  isRead: false\n}, {\n  avatar: '',\n  name: \"fi chat\",\n  lastMessage: \"some t\",\n  time: \"01:00\",\n  isRead: true\n}, {\n  avatar: '',\n  name: \"second chat\",\n  lastMessage: \"some more text\",\n  time: \"10:00\",\n  isRead: false\n}, {\n  avatar: '',\n  name: \"first cht\",\n  lastMessage: \"sometext\",\n  time: \"01:00\",\n  isRead: true\n}, {\n  avatar: '',\n  name: \"secod chat\",\n  lastMessage: \"sme more text\",\n  time: \"10:00\",\n  isRead: false\n}, {\n  avatar: '',\n  name: \"fi chat\",\n  lastMessage: \"some t\",\n  time: \"01:00\",\n  isRead: true\n}, {\n  avatar: '',\n  name: \"second chat\",\n  lastMessage: \"some more text\",\n  time: \"10:00\",\n  isRead: false\n}];\nlocalStorage.setItem('chats', JSON.stringify(exampleChats));\nvar chatList = document.querySelector('.ui');\nvar addChat = document.querySelector('.add-chat');\nvar goBack = document.querySelector('.go-back');\nvar chatBox = JSON.parse(localStorage.getItem('chats')) || [];\nvar topBar = Object(_Head_head_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\ndocument.querySelector('main').insertBefore(topBar, chatList);\nvar loadChats = function loadChats() {\n  chatList.innerHTML = '';\n  var fragment = document.createDocumentFragment();\n  chatBox.forEach(function (_ref) {\n    var avatar = _ref.avatar,\n      name = _ref.name,\n      lastMessage = _ref.lastMessage,\n      time = _ref.time,\n      isRead = _ref.isRead;\n    var chat = Object(_ChatPlace_chatPlace_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      avatar: avatar,\n      name: name,\n      lastMessage: lastMessage,\n      time: time,\n      isRead: isRead\n    });\n    fragment.appendChild(chat);\n  });\n  chatList.appendChild(fragment);\n};\nvar handleAddChat = function handleAddChat() {\n  var newChatName = prompt(\"Введите название нового чата:\");\n  if (!newChatName) return;\n  var chatTime = new Date().toLocaleString();\n  var newChat = {\n    name: newChatName,\n    time: chatTime,\n    lastMessage: '',\n    isRead: false,\n    avatar: ''\n  };\n  chatBox.push(newChat);\n  localStorage.setItem('chats', JSON.stringify(chatsStorage));\n  var newChatElement = Object(_ChatPlace_chatPlace_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newChat);\n  chatList.appendChild(newChatElement);\n};\nvar handleGoback = function handleGoback() {\n  window.history.back();\n};\naddChat.addEventListener('click', handleAddChat);\ngoBack.addEventListener('click', handleGoback);\nloadChats();\n\n//# sourceURL=webpack:///./chatList.js?");

/***/ })

/******/ });