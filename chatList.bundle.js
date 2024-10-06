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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatList_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatList.css */ \"./chatList.css\");\n/* harmony import */ var _chatList_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chatList_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Head_head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Head/head.js */ \"./components/Head/head.js\");\n/* harmony import */ var _components_ChatPlace_chatPlace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ChatPlace/chatPlace.js */ \"./components/ChatPlace/chatPlace.js\");\n\n\n\nvar EXAMPLE_CHATS = [{\n  // chat_id: 1,\n  avatar: '',\n  name: \"first chat\",\n  lastMessage: \"some text\",\n  time: \"01:00\",\n  isRead: true\n}, {\n  // chat_id: 2,\n  avatar: '',\n  name: \"second chat\",\n  lastMessage: \"some more text\",\n  time: \"10:00\",\n  isRead: false\n}];\nvar saveChats = function saveChats(chats) {\n  localStorage.setItem('chats', JSON.stringify(chats));\n};\nvar getChats = function getChats() {\n  return JSON.parse(localStorage.getItem('chats')) || [];\n};\nsaveChats(EXAMPLE_CHATS);\nvar chatList = document.querySelector('.ui');\nvar addChat = document.querySelector('.add-chat');\nvar goBack = document.querySelector('.go-back');\nvar chatBox = getChats();\nvar topBar = Object(_components_Head_head_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\ndocument.querySelector('main').insertBefore(topBar, chatList);\nvar loadChats = function loadChats(chats) {\n  chatList.innerHTML = '';\n  var fragment = document.createDocumentFragment();\n  chats.forEach(function (_ref) {\n    var avatar = _ref.avatar,\n      name = _ref.name,\n      lastMessage = _ref.lastMessage,\n      time = _ref.time,\n      isRead = _ref.isRead;\n    var chat = Object(_components_ChatPlace_chatPlace_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      avatar: avatar,\n      name: name,\n      lastMessage: lastMessage,\n      time: time,\n      isRead: isRead\n    });\n    fragment.appendChild(chat);\n  });\n  chatList.appendChild(fragment);\n};\nvar pushToStorage = function pushToStorage(chat) {\n  var chatBox = getChats();\n  chatBox.push(chat);\n  saveChats(chatBox);\n};\nvar placeNew = function placeNew(chat) {\n  var newChatElement = Object(_components_ChatPlace_chatPlace_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(chat);\n  chatList.appendChild(newChatElement);\n};\nvar makeNewChat = function makeNewChat(chat) {\n  pushToStorage(chat);\n  placeNew(chat);\n};\nvar handleAddChat = function handleAddChat() {\n  var newChatName = prompt(\"Введите название нового чата:\");\n  if (!newChatName) return;\n  var chatTime = new Date().toLocaleString();\n  var newChat = {\n    name: newChatName,\n    time: chatTime,\n    lastMessage: '',\n    isRead: false,\n    avatar: ''\n  };\n  makeNewChat(newChat);\n};\nvar handleGoback = function handleGoback() {\n  window.history.back();\n};\naddChat.addEventListener('click', handleAddChat);\ngoBack.addEventListener('click', handleGoback);\nloadChats(chatBox);\n\n//# sourceURL=webpack:///./chatList.js?");

/***/ }),

/***/ "./components/ChatPlace/chatPlace.css":
/*!********************************************!*\
  !*** ./components/ChatPlace/chatPlace.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/ChatPlace/chatPlace.css?");

/***/ }),

/***/ "./components/ChatPlace/chatPlace.js":
/*!*******************************************!*\
  !*** ./components/ChatPlace/chatPlace.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatPlace_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatPlace.css */ \"./components/ChatPlace/chatPlace.css\");\n/* harmony import */ var _chatPlace_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chatPlace_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _temp_image_temp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../temp_image/temp.png */ \"./temp_image/temp.png\");\n\n\nvar ChatPlace = function ChatPlace(_ref) {\n  var chat_id = _ref.chat_id,\n    avatar = _ref.avatar,\n    name = _ref.name,\n    lastMessage = _ref.lastMessage,\n    time = _ref.time,\n    isRead = _ref.isRead;\n  var chat = document.createElement('li');\n  chat.classList.add('chat-place');\n  var chatImage = document.createElement('img');\n  chatImage.src = avatar || _temp_image_temp_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  chatImage.classList.add('chat-image');\n  var chatComponents = document.createElement('div');\n  chatComponents.classList.add('chat-components');\n  var chatName = document.createElement('div');\n  chatName.classList.add('chat-name');\n  chatName.textContent = name;\n  var chatLastSent = document.createElement('div');\n  chatLastSent.classList.add('last-sent');\n  chatLastSent.textContent = lastMessage;\n  var chatFooter = document.createElement('div');\n  chatFooter.classList.add('chat-footer');\n  var chatTime = document.createElement('div');\n  chatTime.classList.add('chat-time');\n  chatTime.textContent = time;\n  chat.appendChild(chatImage);\n  chat.appendChild(chatComponents);\n  chatFooter.appendChild(chatTime);\n  chatComponents.appendChild(chatName);\n  chatComponents.appendChild(chatLastSent);\n  if (isRead) {\n    var check = document.createElement('span');\n    check.classList.add('material-icons', 'read-status', 'read');\n    check.textContent = 'done_all';\n    chatFooter.appendChild(check);\n  }\n  chatComponents.appendChild(chatFooter);\n  return chat;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatPlace);\n\n//# sourceURL=webpack:///./components/ChatPlace/chatPlace.js?");

/***/ }),

/***/ "./components/Head/head.css":
/*!**********************************!*\
  !*** ./components/Head/head.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/Head/head.css?");

/***/ }),

/***/ "./components/Head/head.js":
/*!*********************************!*\
  !*** ./components/Head/head.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _head_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head.css */ \"./components/Head/head.css\");\n/* harmony import */ var _head_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_head_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _temp_image_temp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../temp_image/temp.png */ \"./temp_image/temp.png\");\n\n\nvar Head = function Head(isChatOpen, isChatList, userPic) {\n  var userName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"Unknown\";\n  var head = document.createElement('header');\n  head.classList.add('top-bar');\n  var menuIcon = document.createElement('span');\n  menuIcon.classList.add('material-icons', 'menu-icon');\n  menuIcon.textContent = isChatOpen ? 'arrow_back' : 'menu';\n  var title = document.createElement('span');\n  title.classList.add('messenger');\n  title.textContent = isChatOpen ? userName : 'Messenger';\n  var searchIcon = document.createElement('span');\n  searchIcon.classList.add('material-icons', 'search-icon');\n  searchIcon.textContent = 'search';\n  head.appendChild(menuIcon);\n  if (isChatOpen) {\n    var userInfo = document.createElement('div');\n    userInfo.classList.add('user-info');\n    var avatarImg = document.createElement('img');\n    avatarImg.src = userPic || _temp_image_temp_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    avatarImg.classList.add('chat-avatar');\n    var _title = document.createElement('span');\n    _title.classList.add('messenger');\n    _title.textContent = userName;\n\n    // Вставляем аватарку и имя в обертку\n    userInfo.appendChild(avatarImg);\n    userInfo.appendChild(_title);\n    head.appendChild(userInfo);\n    menuIcon.addEventListener('click', isChatList);\n  }\n  // head.appendChild(title);\n  head.appendChild(searchIcon);\n  return head;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\n//# sourceURL=webpack:///./components/Head/head.js?");

/***/ }),

/***/ "./temp_image/temp.png":
/*!*****************************!*\
  !*** ./temp_image/temp.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/temp.png\");\n\n//# sourceURL=webpack:///./temp_image/temp.png?");

/***/ })

/******/ });