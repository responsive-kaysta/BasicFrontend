(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/less/page-style-templates.ts
var ePageStyleTemplates;

(function (ePageStyleTemplates) {
  ePageStyleTemplates["light"] = "light";
  ePageStyleTemplates["transparent"] = "transparent";
  ePageStyleTemplates["green"] = "green";
  ePageStyleTemplates["purple"] = "purple";
  ePageStyleTemplates["gray"] = "gray";
})(ePageStyleTemplates || (ePageStyleTemplates = {}));
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/less/index.ts
/* concated harmony reexport ePageStyleTemplates */__webpack_require__.d(__webpack_exports__, "a", function() { return ePageStyleTemplates; });


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var PageHeader =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PageHeader, _React$Component);

  function PageHeader() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PageHeader);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PageHeader).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PageHeader, [{
    key: "render",
    value: function render() {
      var header = this.props.header;
      var paragraph = this.props.paragraph;
      var pageStyle = this.props.pageStyle;
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: pageStyle
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: "page-header"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h2", null, header)), paragraph && react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
        className: "lead"
      }, paragraph));
    }
  }]);

  return PageHeader;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PageHeader);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var SpanLinkElement =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SpanLinkElement, _React$Component);

  function SpanLinkElement() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SpanLinkElement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SpanLinkElement)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "openWindow", function (url) {
      window.open(url);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SpanLinkElement, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", {
        onClick: function onClick() {
          return _this2.openWindow(_this2.props.link);
        },
        className: this.props.showLinkIcon && "fas fa-link"
      }, this.props.showLinkIcon && " - ", this.props.text));
    }
  }]);

  return SpanLinkElement;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SpanLinkElement);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90);








var ListElement =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ListElement, _React$Component);

  function ListElement() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ListElement);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ListElement).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ListElement, [{
    key: "render",
    value: function render() {
      var listElement;

      switch (this.props.listElementType) {
        case _spec__WEBPACK_IMPORTED_MODULE_6__["eListElementTypes"].li:
          listElement = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("li", null, this.props.children);
          break;

        default:
          listElement = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("li", null, this.props.children);
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, listElement);
    }
  }]);

  return ListElement;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ListElement);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var Spacer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Spacer, _React$Component);

  function Spacer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Spacer);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Spacer).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Spacer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("br", null);
    }
  }]);

  return Spacer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Spacer);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _iTextElementProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _iTextElementProps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iTextElementProps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_iTextElementProps__WEBPACK_IMPORTED_MODULE_0__, "eTextStyles")) __webpack_require__.d(__webpack_exports__, "eTextStyles", function() { return _iTextElementProps__WEBPACK_IMPORTED_MODULE_0__["eTextStyles"]; });

/* harmony import */ var _eTextStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eTextStyles", function() { return _eTextStyles__WEBPACK_IMPORTED_MODULE_1__["a"]; });




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAGE_AUTHOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PAGE_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PAGE_TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PAGE_KEYWORDS; });
var PAGE_NAME = "Basic Frontend";
var PAGE_AUTHOR = "responsive IT";
var PAGE_DESCRIPTION = "mobile first!";
var PAGE_TOPIC = "finest reactive mobile web application";
var PAGE_KEYWORDS = "reactjs, css3, html5, responsive";

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var ColorContainer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ColorContainer, _React$Component);

  function ColorContainer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ColorContainer);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ColorContainer).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ColorContainer, [{
    key: "render",
    value: function render() {
      var pageStyle = this.props.padded ? "container " + this.props.pageStyle : this.props.pageStyle;
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: pageStyle
      }, this.props.children);
    }
  }]);

  return ColorContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ColorContainer);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _iSourcesState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _iSourcesState__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iSourcesState__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_iSourcesState__WEBPACK_IMPORTED_MODULE_0__, "ePictogram")) __webpack_require__.d(__webpack_exports__, "ePictogram", function() { return _iSourcesState__WEBPACK_IMPORTED_MODULE_0__["ePictogram"]; });

/* harmony import */ var _ePictogram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ePictogram", function() { return _ePictogram__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _iArticlesBySourceState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _iArticlesBySourceState__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iArticlesBySourceState__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var ParagraphElement =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ParagraphElement, _React$Component);

  function ParagraphElement() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ParagraphElement);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ParagraphElement).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ParagraphElement, [{
    key: "render",
    value: function render() {
      var cssClass = this.props.textStyles ? this.props.textStyles : "paragraph";
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
        className: cssClass,
        id: this.props.elementId
      }, this.props.children);
    }
  }]);

  return ParagraphElement;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ParagraphElement);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var ArticleContainer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ArticleContainer, _React$Component);

  function ArticleContainer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ArticleContainer);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ArticleContainer).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ArticleContainer, [{
    key: "render",
    value: function render() {
      var pageStyle = "special " + this.props.pageStyle;
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("article", {
        id: "main",
        className: pageStyle
      }, this.props.children));
    }
  }]);

  return ArticleContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ArticleContainer);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);


var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_1__["animateScroll"];

function handleClick(e) {
  e.preventDefault();
  scroll.scrollToTop();
}

function ToTopButton() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "totop-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    className: "totop",
    onClick: handleClick
  }, "\u2191"));
}

/* harmony default export */ __webpack_exports__["a"] = (ToTopButton);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _eSpotlightOrientation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eSpotlightOrientation", function() { return _eSpotlightOrientation__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _iSpotlightProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _iSpotlightProps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iSpotlightProps__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/spotlight/spotlight-right.tsx


function SpotlightRight(props) {
  return external_react_["createElement"]("section", {
    className: props.pageStyle
  }, external_react_["createElement"]("div", {
    className: "image"
  }, external_react_["createElement"]("img", {
    className: "wide",
    src: props.pictogram,
    alt: "Brains and engineering"
  })), external_react_["createElement"]("div", {
    className: "content"
  }, external_react_["createElement"]("h2", null, props.header), external_react_["createElement"]("p", null, props.paragraph)));
}

/* harmony default export */ var spotlight_right = (SpotlightRight);
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/spotlight/spotlight-left.tsx


function SpotlightLeft(props) {
  return external_react_["createElement"]("section", {
    className: props.pageStyle
  }, external_react_["createElement"]("div", {
    className: "image"
  }, external_react_["createElement"]("img", {
    className: "wide",
    src: props.pictogram,
    alt: "Brains and engineering"
  })), external_react_["createElement"]("div", {
    className: "content"
  }, external_react_["createElement"]("h2", null, props.header), external_react_["createElement"]("p", null, props.paragraph)));
}

/* harmony default export */ var spotlight_left = (SpotlightLeft);
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/spotlight/spotlight.tsx









var spotlight_Spotlight =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Spotlight, _React$Component);

  function Spotlight() {
    classCallCheck_default()(this, Spotlight);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Spotlight).apply(this, arguments));
  }

  createClass_default()(Spotlight, [{
    key: "render",
    value: function render() {
      var pageStyleLeft = "spotlight " + this.props.pageStyle + " spotlight-left";
      var pageStyleRight = "spotlight " + this.props.pageStyle + " spotlight-right";
      var pictogram = this.props.pictogram;
      var header = this.props.header;
      var paragraph = this.props.paragraph;
      return this.props.orientation === "right" ? external_react_["createElement"](spotlight_right, {
        header: header,
        paragraph: paragraph,
        pageStyle: pageStyleRight,
        pictogram: pictogram
      }) : external_react_["createElement"](spotlight_left, {
        header: header,
        paragraph: paragraph,
        pageStyle: pageStyleLeft,
        pictogram: pictogram
      });
    }
  }]);

  return Spotlight;
}(external_react_["Component"]);

/* harmony default export */ var spotlight = __webpack_exports__["a"] = (spotlight_Spotlight);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var ArticleBanner =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ArticleBanner, _React$Component);

  function ArticleBanner() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ArticleBanner);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ArticleBanner).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ArticleBanner, [{
    key: "render",
    value: function render() {
      var pageStyle = this.props.pageStyle;
      var header = this.props.header;
      var paragraph = this.props.paragraph;
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("header", {
        className: pageStyle,
        id: this.props.elementId
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h2", null, header), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", null, paragraph)));
    }
  }]);

  return ArticleBanner;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ArticleBanner);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var CallToAction =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CallToAction, _React$Component);

  function CallToAction() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CallToAction);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CallToAction).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CallToAction, [{
    key: "render",
    value: function render() {
      var header = this.props.header;
      var paragraph = this.props.paragraph;
      var linkText = this.props.linkText;
      var linkUrl = this.props.linkUrl;
      var specialText = this.props.specialText;
      var specialUrl = this.props.specialUrl;
      var pageStyle = this.props.pageStyle;
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("section", {
        id: "cta",
        className: pageStyle
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: "inner"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("header", null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h2", null, header), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", null, paragraph)), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", {
        className: "actions vertical"
      }, specialText && react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("a", {
        href: specialUrl,
        className: "button fit special"
      }, specialText)), linkText && react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("a", {
        href: linkUrl,
        className: "button fit"
      }, linkText)))));
    }
  }]);

  return CallToAction;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CallToAction);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(43);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(95);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(97);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(49);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(50);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(98);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(44);

var _helpers = __webpack_require__(99);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42)(module)))

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var EyeCatcher =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EyeCatcher, _React$Component);

  function EyeCatcher() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EyeCatcher);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EyeCatcher).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EyeCatcher, [{
    key: "render",
    value: function render() {
      var pageStyle = "special " + this.props.pageStyle;
      var header = this.props.header;
      var paragraph = this.props.paragraph;
      var elementId = this.props.elementId;
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("section", {
        className: pageStyle,
        id: elementId
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("header", {
        className: "major"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h2", null, header), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", null, paragraph))));
    }
  }]);

  return EyeCatcher;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (EyeCatcher);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var ImageElement =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ImageElement, _React$Component);

  function ImageElement() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ImageElement);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ImageElement).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ImageElement, [{
    key: "render",
    value: function render() {
      var imageElement = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
        src: this.props.imagePath,
        alt: this.props.imageAltText
      });
      var imageCaptionText = this.props.imageCaptionText && react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
        className: "caption"
      }, this.props.imageCaptionText);
      var wrapperClass = this.props.imagePadding ? "image img-padding" : "image";
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, this.props.imageWrapper ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("section", {
        className: wrapperClass
      }, imageElement, imageCaptionText) : react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, imageElement, imageCaptionText));
    }
  }]);

  return ImageElement;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ImageElement);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var DivElement =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DivElement, _React$Component);

  function DivElement() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DivElement);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DivElement).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DivElement, [{
    key: "render",
    value: function render() {
      var cssClass = this.props.textStyles ? this.props.textStyles : "paragraph";
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: cssClass,
        id: this.props.elementId
      }, this.props.children);
    }
  }]);

  return DivElement;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (DivElement);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _iListContainerProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _iListContainerProps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iListContainerProps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_iListContainerProps__WEBPACK_IMPORTED_MODULE_0__, "eListContainerTypes")) __webpack_require__.d(__webpack_exports__, "eListContainerTypes", function() { return _iListContainerProps__WEBPACK_IMPORTED_MODULE_0__["eListContainerTypes"]; });

/* harmony import */ var _eListContainerTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eListContainerTypes", function() { return _eListContainerTypes__WEBPACK_IMPORTED_MODULE_1__["a"]; });




/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);








var ListContainer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ListContainer, _React$Component);

  function ListContainer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ListContainer);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ListContainer).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ListContainer, [{
    key: "render",
    value: function render() {
      var listElements;

      switch (this.props.listContainerType) {
        case _spec__WEBPACK_IMPORTED_MODULE_6__["eListContainerTypes"].actions:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", {
            className: "actions"
          }, this.props.children);
          break;

        case _spec__WEBPACK_IMPORTED_MODULE_6__["eListContainerTypes"].actionsFit:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", {
            className: "actions small"
          }, this.props.children);
          break;

        case _spec__WEBPACK_IMPORTED_MODULE_6__["eListContainerTypes"].actionsFitSmall:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", {
            className: "actions vertical"
          }, this.props.children);
          break;

        case _spec__WEBPACK_IMPORTED_MODULE_6__["eListContainerTypes"].actionsSmall:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", {
            className: "actions vertical small"
          }, this.props.children);
          break;

        case _spec__WEBPACK_IMPORTED_MODULE_6__["eListContainerTypes"].actionsVertical:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", {
            className: "actions fit"
          }, this.props.children);
          break;

        case _spec__WEBPACK_IMPORTED_MODULE_6__["eListContainerTypes"].actionsVerticalSmall:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", {
            className: "actions fit small"
          }, this.props.children);
          break;

        case _spec__WEBPACK_IMPORTED_MODULE_6__["eListContainerTypes"].alt:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", {
            className: "alt"
          }, this.props.children);
          break;

        case _spec__WEBPACK_IMPORTED_MODULE_6__["eListContainerTypes"].icons:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", {
            className: "icons"
          }, this.props.children);
          break;

        case _spec__WEBPACK_IMPORTED_MODULE_6__["eListContainerTypes"].iconsMajor:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", {
            className: "icons major"
          }, this.props.children);
          break;

        default:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", null, this.props.children);
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, this.props.header && react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
        className: "paragraph"
      }, this.props.header), listElements);
    }
  }]);

  return ListContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ListContainer);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _eHeaderElementTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eHeaderElementTypes", function() { return _eHeaderElementTypes__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _iHeaderElementProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony import */ var _iHeaderElementProps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iHeaderElementProps__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);








var HeaderElements =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(HeaderElements, _React$Component);

  function HeaderElements() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HeaderElements);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(HeaderElements).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HeaderElements, [{
    key: "render",
    value: function render() {
      var listElements;

      switch (this.props.headerElementType) {
        case _spec__WEBPACK_IMPORTED_MODULE_6__["eHeaderElementTypes"]["abstract"]:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h2", {
            className: "abstract"
          }, this.props.children);
          break;

        case _spec__WEBPACK_IMPORTED_MODULE_6__["eHeaderElementTypes"].headLine:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h2", {
            className: "headline"
          }, this.props.children);
          break;

        case _spec__WEBPACK_IMPORTED_MODULE_6__["eHeaderElementTypes"].headLineCenter:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h2", {
            className: "headline align-center"
          }, this.props.children);
          break;

        default:
          listElements = react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h1", null, this.props.children);
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, listElements);
    }
  }]);

  return HeaderElements;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (HeaderElements);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(44);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(96)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://masterarchive.api.pub.responsive-kaysta.ch/"
}));

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(33);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(16);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/public/assets/css/fontawesome-all.css
var fontawesome_all = __webpack_require__(108);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/public/assets/css/styles.css
var styles = __webpack_require__(122);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/constants.ts
var constants = __webpack_require__(12);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/public/assets/images/logo.svg
var logo = __webpack_require__(87);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/elements/spinner/spinner.tsx








/* 
    credits to: https://auth0.com/docs/quickstart/spa/react/01-login#add-a-callback-component
*/
var spinner_Spinner =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Spinner, _React$Component);

  function Spinner() {
    classCallCheck_default()(this, Spinner);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Spinner).apply(this, arguments));
  }

  createClass_default()(Spinner, [{
    key: "render",
    value: function render() {
      return external_react_["createElement"](external_react_["Fragment"], null, this.props.loadingState && external_react_["createElement"]("img", {
        className: "spinner",
        src: logo_default.a,
        alt: "loading"
      }));
    }
  }]);

  return Spinner;
}(external_react_["Component"]);

/* harmony default export */ var spinner = (spinner_Spinner);
// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(32);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(36);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/page-includes/footer.tsx










var footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Footer, _React$Component);

  function Footer() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Footer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "openWindow", function (url) {
      window.open(url);
    });

    return _this;
  }

  createClass_default()(Footer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"]("footer", {
        id: "footer"
      }, external_react_["createElement"]("ul", {
        className: "icons"
      }, external_react_["createElement"]("li", null, external_react_["createElement"]("i", {
        className: "fab fa-xing",
        onClick: function onClick() {
          return _this2.openWindow("https://www.xing.com/profile/Kay_Stuckenschmidt/cv?sc_o=mxb_p");
        }
      })), external_react_["createElement"]("li", null, external_react_["createElement"]("i", {
        className: "fab fa-linkedin",
        onClick: function onClick() {
          return _this2.openWindow("https://www.linkedin.com/in/responsivekaysta/");
        }
      })), external_react_["createElement"]("li", null, external_react_["createElement"]("i", {
        className: "fab fa-github",
        onClick: function onClick() {
          return _this2.openWindow("https://github.com/responsive-kaysta");
        }
      })), external_react_["createElement"]("li", null, external_react_["createElement"]("i", {
        className: "fas fa-archive",
        onClick: function onClick() {
          return _this2.openWindow("https://www.nuget.org/profiles/kaysta");
        }
      }))), external_react_["createElement"]("div", {
        className: "copyright"
      }, external_react_["createElement"]("span", null, "\xA9 ", new Date().getFullYear().toString(), " - ", constants["a" /* PAGE_AUTHOR */], " -", " ", constants["b" /* PAGE_DESCRIPTION */]))));
    }
  }]);

  return Footer;
}(external_react_["Component"]);

/* harmony default export */ var footer = (footer_Footer);
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/page-includes/menu.tsx










var menu_Menu =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Menu, _React$Component);

  function Menu(props, state) {
    var _this;

    classCallCheck_default()(this, Menu);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Menu).call(this, props, state));

    defineProperty_default()(assertThisInitialized_default()(_this), "showRight", function () {
      _this.setState({
        isRight: !_this.state.isRight
      });
    });

    _this.state = {
      isRight: false
    };
    _this.showRight = _this.showRight.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Menu, [{
    key: "render",
    value: function render() {
      return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"]("span", {
        onClick: this.showRight,
        className: this.state.isRight ? "menuClose" : "menuToggle"
      }, external_react_["createElement"]("span", {
        className: !this.state.isRight ? "" : "displayNone"
      }, "menu")), external_react_["createElement"]("div", {
        className: this.state.isRight ? "menu displayBlock" : "displayNone",
        id: "menu"
      }, external_react_["createElement"]("ul", {
        onClick: this.showRight
      }, external_react_["createElement"]("li", null, external_react_["createElement"](router_["Link"], {
        to: "/"
      }, "Home")), external_react_["createElement"]("li", null, external_react_["createElement"](router_["Link"], {
        to: "/about"
      }, "\xDCber uns")), external_react_["createElement"]("li", null, external_react_["createElement"](router_["Link"], {
        to: "/technic"
      }, "Technik")), external_react_["createElement"]("li", null, external_react_["createElement"](router_["Link"], {
        to: "/projects"
      }, "Projekte")), external_react_["createElement"]("li", null, external_react_["createElement"](router_["Link"], {
        to: "/contact"
      }, "Kontakt")))));
    }
  }]);

  return Menu;
}(external_react_["Component"]);

/* harmony default export */ var menu = (menu_Menu);
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/page-includes/header.tsx










var header_Header =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Header, _React$Component);

  function Header() {
    classCallCheck_default()(this, Header);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Header).apply(this, arguments));
  }

  createClass_default()(Header, [{
    key: "render",
    value: function render() {
      return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"]("header", {
        id: "header"
      }, external_react_["createElement"]("h1", null, external_react_["createElement"](router_["Link"], {
        to: "/"
      }, constants["d" /* PAGE_NAME */])), external_react_["createElement"]("nav", {
        id: "nav"
      }, external_react_["createElement"](menu, {
        pageKey: "main-menu"
      }))));
    }
  }]);

  return Header;
}(external_react_["Component"]);

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/App.tsx








 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(["dynamic"]);

function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(external_react_static_["Head"], null, external_react_default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    href: "/icon.png"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/logo192.png"
  }), external_react_default.a.createElement("meta", {
    name: "page-topic",
    content: constants["e" /* PAGE_TOPIC */]
  }), external_react_default.a.createElement("meta", {
    name: "robots",
    content: "all"
  }), external_react_default.a.createElement("meta", {
    name: "revisit-after",
    content: "1 day"
  }), external_react_default.a.createElement("meta", {
    name: "audience",
    content: "all"
  }), external_react_default.a.createElement("meta", {
    "http-equiv": "expires",
    content: "1 day"
  }), external_react_default.a.createElement("meta", {
    "http-equiv": "cache-control",
    content: "no-cache"
  }), external_react_default.a.createElement("meta", {
    name: "msvalidate.01",
    content: "1D150EFBAA80F83F5DB962EEEC207A71"
  }), external_react_default.a.createElement("meta", {
    name: "description",
    content: "".concat(constants["d" /* PAGE_NAME */], " ").concat(constants["b" /* PAGE_DESCRIPTION */])
  }), external_react_default.a.createElement("meta", {
    name: "keywords",
    content: constants["c" /* PAGE_KEYWORDS */]
  }), external_react_default.a.createElement("meta", {
    name: "author",
    content: constants["a" /* PAGE_AUTHOR */]
  })), external_react_default.a.createElement(header, null), external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement(spinner, {
      loadingState: true
    })
  }, external_react_default.a.createElement(router_["Router"], null, external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))), external_react_default.a.createElement(footer, null));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(43);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(39);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/node_modules/react-static-plugin-typescript",
  plugins: [],
  hooks: {}
}, {
  location: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/node_modules/react-static/lib/browser");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);
































Object(_home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx */).then(__webpack_require__.bind(null, 55))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(55);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx";
  }
}), universalOptions);
t_0.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx';
var t_1 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/about.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/about.tsx */).then(__webpack_require__.bind(null, 56))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/about.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(56);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/about.tsx";
  }
}), universalOptions);
t_1.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/about.tsx';
var t_2 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/articles-by-source.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/articles-by-source.tsx */).then(__webpack_require__.bind(null, 81))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/articles-by-source.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(81);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/articles-by-source.tsx";
  }
}), universalOptions);
t_2.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/articles-by-source.tsx';
var t_3 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/contact.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/contact.tsx */).then(__webpack_require__.bind(null, 64))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/contact.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(64);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/contact.tsx";
  }
}), universalOptions);
t_3.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/contact.tsx';
var t_4 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/impressum.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/impressum.tsx */).then(__webpack_require__.bind(null, 65))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/impressum.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(65);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/impressum.tsx";
  }
}), universalOptions);
t_4.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/impressum.tsx';
var t_5 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx */).then(__webpack_require__.bind(null, 82))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(82);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx";
  }
}), universalOptions);
t_5.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx';
var t_6 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects.tsx */).then(__webpack_require__.bind(null, 83))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(83);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects.tsx";
  }
}), universalOptions);
t_6.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects.tsx';
var t_7 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-1.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-1.tsx */).then(__webpack_require__.bind(null, 72))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-1.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(72);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-1.tsx";
  }
}), universalOptions);
t_7.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-1.tsx';
var t_8 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-2.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-2.tsx */).then(__webpack_require__.bind(null, 73))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-2.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(73);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-2.tsx";
  }
}), universalOptions);
t_8.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-2.tsx';
var t_9 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-3.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-3.tsx */).then(__webpack_require__.bind(null, 74))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-3.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(74);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-3.tsx";
  }
}), universalOptions);
t_9.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-3.tsx';
var t_10 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-4.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-4.tsx */).then(__webpack_require__.bind(null, 77))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-4.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(77);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-4.tsx";
  }
}), universalOptions);
t_10.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-4.tsx';
var t_11 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-5.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-5.tsx */).then(__webpack_require__.bind(null, 78))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-5.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(78);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-5.tsx";
  }
}), universalOptions);
t_11.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-5.tsx';
var t_12 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-6.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-6.tsx */).then(__webpack_require__.bind(null, 79))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-6.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(79);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-6.tsx";
  }
}), universalOptions);
t_12.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-6.tsx';
var t_13 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/sources.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/sources.tsx */).then(__webpack_require__.bind(null, 84))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/sources.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(84);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/sources.tsx";
  }
}), universalOptions);
t_13.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/sources.tsx';
var t_14 = _home_kaysta_Dev_GitHub_BasicFrontend_frontend_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/technic.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/technic.tsx */).then(__webpack_require__.bind(null, 80))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/technic.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(80);
  },
  chunkName: function chunkName() {
    return "home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/technic.tsx";
  }
}), universalOptions);
t_14.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/technic.tsx'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx': t_0,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/about.tsx': t_1,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/articles-by-source.tsx': t_2,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/contact.tsx': t_3,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/impressum.tsx': t_4,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx': t_5,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects.tsx': t_6,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-1.tsx': t_7,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-2.tsx': t_8,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-3.tsx': t_9,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-4.tsx': t_10,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-5.tsx': t_11,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects/project-6.tsx': t_12,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/sources.tsx': t_13,
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/technic.tsx': t_14
}); // Not Found Template

var notFoundTemplate = "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5063b105c7646c8043d58c5289f02cca.eot";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c1a866ec0e04a5e1915b41fcf261457c.eot";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8e4a6dcc692b3887f9f542cd6894d6d4.eot";

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var _compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7);
/* harmony import */ var _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22);
/* harmony import */ var _compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(12);
/* harmony import */ var _elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10);
/* harmony import */ var _elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(17);
/* harmony import */ var _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11);
/* harmony import */ var _elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(21);
/* harmony import */ var _less__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1);
/* harmony import */ var _page_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14);






















var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_6__["animateScroll"];

var About =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(About, _React$Component);

  function About() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, About);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(About).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_static__WEBPACK_IMPORTED_MODULE_7__["Head"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("title", null, "\xDCber uns - ", _constants__WEBPACK_IMPORTED_MODULE_15__[/* PAGE_NAME */ "d"])), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        header: "\xDCber responsive IT",
        paragraph: "F\xFCr uns ist die Kreativit\xE4t des Ungeplanten von zentraler Bedeutung",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].transparent
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "Gestern, Heute, Morgen",
        paragraph: "Bereits seit 2002 bieten wir innovative Leistungen rund um Informatik an",
        pictogram: _page_types__WEBPACK_IMPORTED_MODULE_21__["ePictogram"].ai_1,
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light,
        orientation: _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_13__["eSpotlightOrientation"].left
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: "Erfahrung",
        paragraph: "Dank unserer Erfahrung d\xFCrfen wir bei Pionieren und Gr\xF6ssen der Branche lernen, wachsen und spannende Projekte umsetzen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__["eTextStyles"].lead
      }, "Deshalb kann responsive IT in allen Bereichen der Informationstechnologie beraten, realisieren und unterst\xFCtzen."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: "Beratung",
        paragraph: "Wir helfen aus dem \u201EDschungel\u201C und stehen partnerschaftlich zur Seite damit eine geeignete L\xF6sung gefunden wird.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: "Umsetzung",
        paragraph: "Interdisziplin\xE4res Arbeiten ist gleich Vernetzte Kreativit\xE4t. So k\xF6nnen wir durch langj\xE4hrige Erfahrung zum Projekterfolg beitragen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: "Engineering & Coding",
        paragraph: "Schnell, hochwertig, komplex, stabil \u2013 nur einige der Anforderungen die wir nicht nur an unseren Code stellen. Qualit\xE4t muss sein, hat aber auch ihren Preis.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        header: "Interaktiv",
        paragraph: "Nicht nur \xABsehende\xBB Ger\xE4te bedienen, einen Schritt weiter gehen.",
        linkText: "Impressum",
        linkUrl: "/impressum",
        specialText: "Projekte",
        specialUrl: "/projects"
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null))));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eSpotlightOrientation; });
var eSpotlightOrientation;

(function (eSpotlightOrientation) {
  eSpotlightOrientation["left"] = "left";
  eSpotlightOrientation["right"] = "right";
})(eSpotlightOrientation || (eSpotlightOrientation = {}));

/***/ }),
/* 58 */
/***/ (function(module, exports) {



/***/ }),
/* 59 */
/***/ (function(module, exports) {



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eTextStyles; });
var eTextStyles;

(function (eTextStyles) {
  eTextStyles["lead"] = "lead";
  eTextStyles["small"] = "small";
  eTextStyles["italic"] = "italic";
  eTextStyles["headline"] = "headline";
  eTextStyles["tagline"] = "tagline";
  eTextStyles["paragraph"] = "paragraph";
  eTextStyles["paragraph_2col"] = "paragraph-2col";
  eTextStyles["paragraph_3col"] = "paragraph-3col";
  eTextStyles["align_left"] = "align-left";
  eTextStyles["align_center"] = "align-center";
  eTextStyles["align_right"] = "align-right";
  eTextStyles["error"] = "error";
})(eTextStyles || (eTextStyles = {}));

/***/ }),
/* 61 */
/***/ (function(module, exports) {



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ePictogram; });
var ePictogram;

(function (ePictogram) {
  ePictogram["ai_1"] = "/assets/pictogram/ai_1.png";
  ePictogram["ai_2"] = "/assets/pictogram/ai_2.png";
  ePictogram["ai_3"] = "/assets/pictogram/ai_3.png";
  ePictogram["ai_4"] = "/assets/pictogram/ai_4.png";
  ePictogram["analysis"] = "/assets/pictogram/analysis.png";
  ePictogram["assembly"] = "/assets/pictogram/assembly.png";
  ePictogram["blocks"] = "/assets/pictogram/blocks.png";
  ePictogram["cloud"] = "/assets/pictogram/cloud.png";
  ePictogram["computer"] = "/assets/pictogram/computer.png";
  ePictogram["connection_1"] = "/assets/pictogram/connection_1.png";
  ePictogram["connection_2"] = "/assets/pictogram/connection_2.png";
  ePictogram["develop"] = "/assets/pictogram/develop.png";
  ePictogram["education"] = "/assets/pictogram/education.png";
  ePictogram["engineer"] = "/assets/pictogram/engineer.png";
  ePictogram["hosting"] = "/assets/pictogram/hosting.png";
  ePictogram["innovation"] = "/assets/pictogram/innovation.png";
  ePictogram["internet_1"] = "/assets/pictogram/internet_1.png";
  ePictogram["internet_2"] = "/assets/pictogram/internet_2.png";
  ePictogram["network"] = "/assets/pictogram/network.png";
  ePictogram["planning"] = "/assets/pictogram/planning.png";
  ePictogram["product"] = "/assets/pictogram/product.png";
  ePictogram["settings"] = "/assets/pictogram/settings.png";
  ePictogram["settings_gears"] = "/assets/pictogram/settings-gears.png";
  ePictogram["shape"] = "/assets/pictogram/shape.png";
  ePictogram["share"] = "/assets/pictogram/share.png";
  ePictogram["team"] = "/assets/pictogram/team.png";
  ePictogram["tools"] = "/assets/pictogram/tools.png";
  ePictogram["upload"] = "/assets/pictogram/upload.png";
  ePictogram["vector"] = "/assets/pictogram/vector.png";
  ePictogram["web_design"] = "/assets/pictogram/web-design.png";
  ePictogram["website"] = "/assets/pictogram/website.png";
})(ePictogram || (ePictogram = {}));

/***/ }),
/* 63 */
/***/ (function(module, exports) {



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_article_container_article_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _components_color_container_color_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);
/* harmony import */ var _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22);
/* harmony import */ var _compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12);
/* harmony import */ var _elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10);
/* harmony import */ var _elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29);
/* harmony import */ var _elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(17);
/* harmony import */ var _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11);
/* harmony import */ var _elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(21);
/* harmony import */ var _less__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1);
/* harmony import */ var _page_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14);






















var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_7__["animateScroll"];

var Contact =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Contact, _React$Component);

  function Contact() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Contact);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Contact).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Contact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_static__WEBPACK_IMPORTED_MODULE_8__["Head"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("title", null, "Kontakt - ", _constants__WEBPACK_IMPORTED_MODULE_14__[/* PAGE_NAME */ "d"])), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_article_container_article_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        header: "Kontakt",
        paragraph: "Kommunikation und Kreativit\xE4t - ein wunderbare Zusammenspiel",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].transparent
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Kommunikation",
        paragraph: "Das wichtigste bei Kommunikation ist 'Zuh\xF6ren'",
        pictogram: _page_types__WEBPACK_IMPORTED_MODULE_21__["ePictogram"].connection_2,
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light,
        orientation: _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_12__["eSpotlightOrientation"].left
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__["eTextStyles"].align_center,
        elementId: "one"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__["eTextStyles"].lead
      }, "responsive IT")), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__["eTextStyles"].align_center
      }, "Kay Stuckenschmidt"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__["eTextStyles"].align_center
      }, "IT & Software Architecture, Engineering & Consulting"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__["eTextStyles"].align_center
      }, "Gossauerstrasse 17"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__["eTextStyles"].align_center
      }, "9100 Herisau"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__["eTextStyles"].align_center
      }, "Handelsregisternummer: CHE-460.558.934"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: "emailform"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_iframe__WEBPACK_IMPORTED_MODULE_6___default.a, {
        url: "https://www.emailmeform.com/builder/form/Z9WCJqEPuf51bUzT",
        width: "640px",
        height: "767px",
        id: "emailmeform"
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31);
/* harmony import */ var _compositions_list_container_spec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30);
/* harmony import */ var _compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7);
/* harmony import */ var _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22);
/* harmony import */ var _compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(12);
/* harmony import */ var _elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8);
/* harmony import */ var _elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9);
/* harmony import */ var _elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(10);
/* harmony import */ var _elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(17);
/* harmony import */ var _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11);
/* harmony import */ var _elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(21);
/* harmony import */ var _less__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1);
/* harmony import */ var _page_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(14);

























var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_6__["animateScroll"];

var Impressum =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Impressum, _React$Component);

  function Impressum() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Impressum);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Impressum).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Impressum, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_static__WEBPACK_IMPORTED_MODULE_7__["Head"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("title", null, "Impressum - ", _constants__WEBPACK_IMPORTED_MODULE_16__[/* PAGE_NAME */ "d"])), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        header: "Impressum",
        paragraph: "Partnerschaft beginnt mit Kommunikation",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].transparent
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Kommunikation",
        paragraph: "Darauf haben wir uns nicht nur im technischen Sinne spezialisiert",
        pictogram: _page_types__WEBPACK_IMPORTED_MODULE_24__["ePictogram"].connection_1,
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light,
        orientation: _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_14__["eSpotlightOrientation"].left
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Die Gestaltung und Betreuung der Inhalte erfolgt durch",
        paragraph: "responsive IT",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_21__["eTextStyles"].italic
      }, "IT & Software Architecture, Engineering & Consulting"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_21__["eTextStyles"].italic
      }, "Kay Stuckenschmidt"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_21__["eTextStyles"].italic
      }, "Gossauerstrasse 17"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_21__["eTextStyles"].italic
      }, "9100 Herisau, Switzerland"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_21__["eTextStyles"].italic
      }, "Handelsregisternummer: CHE-460.558.934"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Credits",
        paragraph: "Unsere Arbeit w\xE4re ohne Open-Source und Hilfsbereitschaft nicht m\xF6glich \u2013 credits to",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_21__["eTextStyles"].lead
      }, "Das Projekt, der Hintergrund und weitere Informationen"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        listContainerType: _compositions_list_container_spec__WEBPACK_IMPORTED_MODULE_12__["eListContainerTypes"].alt
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "ServerTown",
        link: "https://servertown.ch/webhosting-hosting/impressum",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "Microsoft .NET",
        link: "https://dotnet.microsoft.com/",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "Microsoft ASP.NET MVC",
        link: "https://dotnet.microsoft.com/apps/aspnet/mvc",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "VisualStudio",
        link: "https://visualstudio.microsoft.com/",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "VisualStudio CODE",
        link: "https://code.visualstudio.com/",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "AZURE",
        link: "https://azure.microsoft.com/de-de/",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "Bootstrap",
        link: "https://getbootstrap.com/",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "Reactjs",
        link: "https://reactjs.org/",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "html5up",
        link: "https://html5up.net/",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "GitHub",
        link: "https://github.com/",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "Nuget",
        link: "https://www.nuget.org/",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        text: "StackOverflow",
        link: "https://stackoverflow.com/",
        showLinkIcon: true
      }))), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Skills",
        paragraph: "Mit diesen mehr oder weniger kreativen F\xE4higkeiten k\xF6nnen Sie rechnen",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_21__["eTextStyles"].align_center
      }, ".NET, Development, Entwicklung, Datenbank, Oracle, MSSQL, MYSQL, Mobile, CMS, Content, Management, System, Mobile, responsive, web, jquery, bootstrap, umbraco, frontend, basic, open source, asp.net, c#, java script, css, html, MVC, UML, modelinh, hardening, scrum, agile, adaptive, senior, architect, engineering, planing, dev-ops, azure, vsts"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null))));
    }
  }]);

  return Impressum;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Impressum);

/***/ }),
/* 66 */
/***/ (function(module, exports) {



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eListContainerTypes; });
var eListContainerTypes;

(function (eListContainerTypes) {
  eListContainerTypes[eListContainerTypes["alt"] = 0] = "alt";
  eListContainerTypes[eListContainerTypes["icons"] = 1] = "icons";
  eListContainerTypes[eListContainerTypes["iconsMajor"] = 2] = "iconsMajor";
  eListContainerTypes[eListContainerTypes["actions"] = 3] = "actions";
  eListContainerTypes[eListContainerTypes["actionsSmall"] = 4] = "actionsSmall";
  eListContainerTypes[eListContainerTypes["actionsVertical"] = 5] = "actionsVertical";
  eListContainerTypes[eListContainerTypes["actionsVerticalSmall"] = 6] = "actionsVerticalSmall";
  eListContainerTypes[eListContainerTypes["actionsFit"] = 7] = "actionsFit";
  eListContainerTypes[eListContainerTypes["actionsFitSmall"] = 8] = "actionsFitSmall";
})(eListContainerTypes || (eListContainerTypes = {}));

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eListElementTypes; });
var eListElementTypes;

(function (eListElementTypes) {
  eListElementTypes[eListElementTypes["li"] = 0] = "li";
})(eListElementTypes || (eListElementTypes = {}));

/***/ }),
/* 69 */
/***/ (function(module, exports) {



/***/ }),
/* 70 */
/***/ (function(module, exports) {



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eButtonStyles; });
var eButtonStyles;

(function (eButtonStyles) {
  eButtonStyles["button"] = "button";
  eButtonStyles["button_special"] = "button special";
  eButtonStyles["button_icon"] = "button icon";
  eButtonStyles["button_fit"] = "button fit";
  eButtonStyles["button_small"] = "button small";
  eButtonStyles["button_big"] = "button big";
  eButtonStyles["button_disabled"] = "button disabled";
})(eButtonStyles || (eButtonStyles = {}));

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var _compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27);
/* harmony import */ var _compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7);
/* harmony import */ var _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22);
/* harmony import */ var _compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23);
/* harmony import */ var _elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10);
/* harmony import */ var _elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(17);
/* harmony import */ var _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11);
/* harmony import */ var _elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(21);
/* harmony import */ var _less__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1);
/* harmony import */ var _page_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(12);























var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_6__["animateScroll"];

var ProjectOne =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProjectOne, _React$Component);

  function ProjectOne() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProjectOne);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ProjectOne).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProjectOne, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_static__WEBPACK_IMPORTED_MODULE_7__["Head"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("title", null, "Responsive | Accessible | Umbraco - ", _constants__WEBPACK_IMPORTED_MODULE_22__[/* PAGE_NAME */ "d"])), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        header: "Responsive | Accessible | Umbraco",
        paragraph: "Umbraco ist ein Open Source CMS dass sich grosser Beliebtheit erfreut",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].transparent
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Umbraco CMS",
        paragraph: "Das freundlichste CMS auf dem Planeten",
        pictogram: _page_types__WEBPACK_IMPORTED_MODULE_21__["ePictogram"].website,
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light,
        orientation: _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_14__["eSpotlightOrientation"].left
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Nicht nur Content Management",
        paragraph: "Wir sehen Umbraco CMS effektiv als Platform f\xFCr komplexe Web-Anwendungen die ein hohes Mass an Flexibilit\xE4t voraussetzen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_18__["eTextStyles"].paragraph
      }, "Nicht dass wir uns falsch verstehen, Umbraco CMS wird von uns \xABnur\xBB eingesetzt, nicht etwa entwickelt. Trotzdem, wir sind in der Community aktiv und pflegen Kontakte als auch Inhalte.")), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: "Responsive | Accessible | Umbraco",
        paragraph: "Zug\xE4nglichkeit der Inhalte auf allen Platformen",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].green
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Responsive",
        paragraph: "Wird aktiv umgesetzt, heisst, Umbraco ist explizit f\xFCr diesen Ansatz ausgelegt und beinhaltet viele hilfreiche Funktionen, modernste Anforderungen zielgerichtet umzusetzen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Accessible \u2013 Zug\xE4nglich",
        paragraph: "Unsere (Web)Projekte werden auf Zug\xE4nglichkeit getrimmt und werden dahingehend gepr\xFCft und optimiert. Ein Spagat ist jedoch oft notwendig...",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "MVC Pattern",
        paragraph: "DIE Wahl bei allen Projekten und Installationen den dieses System ist konzipiert, responsive Applikationen bereitzustellen. Das MVC Pattern \u2013 Model, View, Controller \u2013 dient als Grundlage, nur so werden Daten, Logik und Darstellung sauber getrennt.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: ".NET Features",
        paragraph: "Da das System mit .NET MVC aufgebaut wird sind keine Komplikationen seitens Microsoft \xABWelt\xBB zu erwarten bzw. k\xF6nnen komplett ausgeschlossen werden. Die Trennung der \xABWebschicht\xBB von der \xABDatenschicht\xBB erlaubt zudem flexibel und trotzdem einheitlich das System zu erweitern.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "BasicFrontend",
        paragraph: "Aus Einzelprojekten wurde eine Idee, daraus ein Prototyp, daraus ein Modul. Mit unserem BasicFrontend starten die meisten der eigenen Installationen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_20__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        header: "Referenzen - Vertraulich",
        paragraph: "Unsere Referenzen werden gesch\xFCtzt, wir zeigen unseren Stolz gerne bei einem pers\xF6nlichen Gespr\xE4ch.",
        linkText: "Kontakt",
        linkUrl: "/contact",
        specialText: "Projekte",
        specialUrl: "/projects"
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null))));
    }
  }]);

  return ProjectOne;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectOne);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var compositions_list_container_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_article_container_article_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _components_color_container_color_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);
/* harmony import */ var _compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25);
/* harmony import */ var _compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27);
/* harmony import */ var _compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31);
/* harmony import */ var _compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7);
/* harmony import */ var _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22);
/* harmony import */ var _compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23);
/* harmony import */ var _elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8);
/* harmony import */ var _elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9);
/* harmony import */ var _elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(10);
/* harmony import */ var _elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(17);
/* harmony import */ var _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(11);
/* harmony import */ var _elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(21);
/* harmony import */ var _less__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1);
/* harmony import */ var _page_types__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(12);



























var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_7__["animateScroll"];

var ProjectTwo =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProjectTwo, _React$Component);

  function ProjectTwo() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProjectTwo);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ProjectTwo).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProjectTwo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](react_static__WEBPACK_IMPORTED_MODULE_8__["Head"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("title", null, "sauber | sicher | schnell - ", _constants__WEBPACK_IMPORTED_MODULE_26__[/* PAGE_NAME */ "d"])), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_components_article_container_article_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        header: "sauber | sicher | schnell",
        paragraph: "Aus Kreativit\xE4t entstanden, als Prinzip im Einsatz",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_24__[/* ePageStyleTemplates */ "a"].transparent
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        header: "InMemoryLoader",
        paragraph: "Nicht nur als Nuget Package, auch als Idee in Form von Manpower in vielen Zeilen Code vorhanden",
        pictogram: _page_types__WEBPACK_IMPORTED_MODULE_25__["ePictogram"].ai_4,
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_24__[/* ePageStyleTemplates */ "a"].light,
        orientation: _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_16__["eSpotlightOrientation"].left
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_24__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Grundpfeiler",
        paragraph: "Als privates Projekt gestartet stellt diese .NET Bibliothek mittlerweile ein Grundpfeiler vieler Anwendungen dar.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_24__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Entscheidungen",
        paragraph: "Als Entscheider fragt man sich oft, ob die Investition in neue Technologie \u2013 Software, Hardware, Service \u2013 wirklich lohnt und Einsparungen gemacht, Wertstr\xF6me erzielt oder ob man neue Kunden gewinnen kann. Nur mit Technik? In aller Regel nicht!",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_24__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_22__["eTextStyles"].paragraph
      }, "Stellen Sie sich vor, Sie m\xFCssen als Dienstleister in der Informatikbranche viele Einzelprojekte mit immer der selben Technologie (.NET, ASP.NET, MVC) umsetzen und dabei immer wieder die selben Komponenten neu implementieren zu m\xFCssen. Bsp.: Login f\xFCr Shop, Formular f\xFCr Kontakt, etc."), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Effizient und spannend",
        paragraph: "Die InMemoryLoader Komponenten muss man sich als abstrakte Applikationsschicht vorstellen die es Ihnen erm\xF6glicht, Software Komponenten nach einem abstrakten Model zu implementieren so dass diese Komponente in der selben Form, immer und immer wieder verwendet werden k\xF6nnen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_24__[/* ePageStyleTemplates */ "a"].light
      })), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Sauber | sicher | schnell",
        paragraph: "InMemoryLoader Programme \xABfliegen\xBB",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_24__[/* ePageStyleTemplates */ "a"].green
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_24__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "RAM ist schnell",
        paragraph: "Die schnellste und effizienteste Speicher-Komponente in einem Rechner ist der Hauptspeicher \xABRAM\xBB. Dies wurde vom Erfinder wie auch der Gr\xFCnder dieser Firma erkannt.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_24__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Potenzial aussch\xF6pfen",
        paragraph: "Das Potenzial der Hardware wird optimal genutzt da Komponenten als auch die Daten im RAM Ihres Rechners \u2013 der die Anwendung betreibt \u2013 vorliegen und immer schnell, sicher und skalierbar zur Verf\xFCgung stehen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_24__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "Das Projekt, der Hintergrund, weitere Informationen",
        listContainerType: compositions_list_container_spec__WEBPACK_IMPORTED_MODULE_5__["eListContainerTypes"].alt
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        text: "Die Idee",
        link: "https://blog.responsive-kaysta.ch/post/inmemoryloader",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        text: "Das Repository",
        link: "https://github.com/inmemoryloader",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        text: "Weitere Ideen",
        link: "https://github.com/orgs/responsive-kaysta/projects/1",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        text: "Die Pakete",
        link: "https://www.nuget.org/profiles/kaysta",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        text: "The four myths of InMemory Computing",
        link: "https://www.gridgain.com/resources/blog/four-myths-of-in-memory-computing",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        text: "In-Memory Processing",
        link: "https://en.wikipedia.org/wiki/In-memory_processing",
        showLinkIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        text: "Late Binding",
        link: "https://en.wikipedia.org/wiki/Late_binding",
        showLinkIcon: true
      }))), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: "Referenzen - Vertraulich",
        paragraph: "Unsere Referenzen werden gesch\xFCtzt, wir zeigen unseren Stolz gerne bei einem pers\xF6nlichen Gespr\xE4ch.",
        linkText: "Kontakt",
        linkUrl: "/contact",
        specialText: "Projekte",
        specialUrl: "/projects"
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], null))));
    }
  }]);

  return ProjectTwo;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectTwo);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var _components_article_container_article_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _components_color_container_color_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);
/* harmony import */ var _compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25);
/* harmony import */ var _compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27);
/* harmony import */ var _compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31);
/* harmony import */ var _compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7);
/* harmony import */ var _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22);
/* harmony import */ var _compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23);
/* harmony import */ var _elements_header_elements_header_elements__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37);
/* harmony import */ var _elements_header_elements_spec__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(34);
/* harmony import */ var _elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(28);
/* harmony import */ var _elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9);
/* harmony import */ var _elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(10);
/* harmony import */ var _elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(29);
/* harmony import */ var _elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(17);
/* harmony import */ var _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11);
/* harmony import */ var _elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(21);
/* harmony import */ var _less__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1);
/* harmony import */ var _page_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(12);






























var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_6__["animateScroll"];

var ProjectThree =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProjectThree, _React$Component);

  function ProjectThree() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProjectThree);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ProjectThree).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProjectThree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_static__WEBPACK_IMPORTED_MODULE_7__["Head"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("title", null, "Industrie | Digitalisierung | Projekterfolg - ", _constants__WEBPACK_IMPORTED_MODULE_29__[/* PAGE_NAME */ "d"])), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_article_container_article_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        header: "Industrie | Digitalisierung | Projekterfolg",
        paragraph: "In 10 Monaten die Digitalisierung entwickelt, beschleunigt & verstanden",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].transparent
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        header: "Portall\xF6sungen in der Wolke",
        paragraph: "Diverse L\xF6sungen hochverf\xFCgbar, skallierbar & zug\xE4nglich \u2013 accessible",
        pictogram: _page_types__WEBPACK_IMPORTED_MODULE_28__["ePictogram"].computer,
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light,
        orientation: _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_16__["eSpotlightOrientation"].left
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Strategie, Prototyp, Produktion",
        paragraph: "Wir durften im Rahmen der Digitalisierungsstragie eines grossen Unternehmens in Baden-W\xFCrthemberg Ingenieursleistung in Form von Manpower, Wissen und Experimentierfreude zum Projekterfolg beitragen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__["eTextStyles"].paragraph
      }, "Im Auftrag der", " ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Solcom",
        link: "https://www.solcom.de/de/kontakt.aspx",
        showLinkIcon: true
      }), " ", "konnten wir \xFCber 10 Monate als Subunternehmen in einem 8 K\xF6pfigen Scrum-Team mitwirken und mitgestalten."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "Interessant war dieses Projekt aus verschiedenen Gr\xFCnden, zun\xE4chst die technischen Fakten."
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Microsoft Azure als Betriebsplatform"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, ".NET Core & Standard"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Azure DevOps & IaC (Infrastructure as Code)"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "WebApi"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "SAP Schnittstellen"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Diverse \u201EDatent\xF6pfe\u201C"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Authorisierung mit Auth0"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Dokumentenmanagement")), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Engineering & Architecture",
        paragraph: "Als Prototyp gestartet wurde im Unternehmen schnell erkannt dass die Idee - die Strategie, Prozesse online verf\xFCgbar zu machen eindeutig zum Gesch\xE4ftserfolg beitr\xE4gt. So wurde ein Team von 8 Spezialisten zusammengestellt dass ein Lieferantenportal neu aufbaut und dabei die modernsten Technologien einsetzen darf.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__["eTextStyles"].paragraph
      }, "Die Anforderungen an das Team waren hoch, nicht nur \u201Egute Programmierf\xE4higkeit\u201C sondern echtes Engineering war gefragt. Senior\u2018s vom Fach, effizient und flexibel die technischen Anforderungen beschreiben, umsetzen und anspruchsvolle Software agil entwickeln.")), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Industrie | Digitalisierung | Projekterfolg",
        paragraph: "Lieferanten & Monteure online bedienen, Daten im Hintergrund verarbeiten",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].green
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Responsive als wichtige Anforderung",
        paragraph: "Die Hauptanforderung aus fachlischer Sicht ist nat\xFCrlich, dass das Lieferantenportal verschiedene Funktionen wie Auftragsverwaltung, Materialbestellung, Gutschriften, Dokumente etc. online und responsive verf\xFCgbar macht.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__["eTextStyles"].paragraph
      }, "Responsive ist hier eine wichtige Anforderung da die Anwendung vom PC, Tablet als auch Handy benutzt wird und alle Inhalte auch auf der Baustelle verf\xFCgbar sein m\xFCssen. Sehr spannend, da die Umsetzung aus technischer Sicht alle m\xF6glichen Techniken kombiniert und die Anwendung dar\xFCber hinaus einen \u201Eechten Wert\u201C bringt."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-3-material-order_960.png",
        imageAltText: "Material Order Overview",
        imageCaptionText: "Materialbestellung - \xDCbersicht",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Prozesse im Hintergrund",
        paragraph: "Wenige Dinge werden in \u201Eechtzeit\u201C ausgef\xFChrt, die meistens Prozesse die Daten verarbeiten laufen als Azure Function im Hintergrund und protokollieren jeden Verarbeitungsschritt. Auftrags- oder Produkt-Mutationen werden in der Regel asynchron und parallel verarbeitet und stehen dem Lieferanten sp\xE4testens am n\xE4chsten Tag zur Verf\xFCgung.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__["eTextStyles"].paragraph
      }, "Nach \u201Egoing live\u201C wurde recht viel Arbeit in die Stabilisierung und H\xE4rtung der Services investiert und so kann eine sehr hohe Verf\xFCgbarkeit, Sicherheit und Qualit\xE4t sichergestellt werden. Laufender DevOps Betrieb sichert zudem zuk\xFCnftige Schwierigkeiten ab bzw. man hat die Systeme optimal im Griff!"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-3-devops_dashboard_po_960.png",
        imageAltText: "DevOps Dashboard",
        imageCaptionText: "DevOps Dashboard",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_header_elements_header_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        headerElementType: _elements_header_elements_spec__WEBPACK_IMPORTED_MODULE_19__["eHeaderElementTypes"].headLineCenter
      }, "Technologien, Methoden, Services"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__["eTextStyles"].align_center
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Scrum",
        link: "https://de.wikipedia.org/wiki/Scrum"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Agile",
        link: "https://de.wikipedia.org/wiki/Agile_Softwareentwicklung"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "VsTs",
        link: "https://visualstudio.microsoft.com/"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Azure",
        link: "https://azure.microsoft.com/"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "MVC",
        link: "https://de.wikipedia.org/wiki/Model_View_Controller"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Swagger",
        link: "https://de.wikipedia.org/wiki/Swagger_(Software)"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "CosmosDb",
        link: "https://azure.microsoft.com/de-de/services/cosmos-db/"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Microsoft SQL",
        link: "https://www.microsoft.com/en-us/sql-server/sql-server-2017"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Auth0",
        link: "https://auth0.com/"
      }), " ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: ".NET Core",
        link: "https://github.com/dotnet/core"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: ".NET Standard",
        link: "https://docs.microsoft.com/de-de/dotnet/standard/net-standard"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Application Insight",
        link: "https://docs.microsoft.com/en-us/azure/application-insights/app-insights-overview"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Asnychron",
        link: "https://de.wikipedia.org/wiki/Ajax_(Programmierung)"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: ".NET, Azure Functions",
        link: "https://www.microsoft.com/net"
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: "Referenzen - Vertraulich",
        paragraph: "Unsere Referenzen werden gesch\xFCtzt, wir zeigen unseren Stolz gerne bei einem pers\xF6nlichen Gespr\xE4ch.",
        linkText: "Kontakt",
        linkUrl: "/contact",
        specialText: "Projekte",
        specialUrl: "/projects"
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"], null))));
    }
  }]);

  return ProjectThree;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectThree);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eHeaderElementTypes; });
var eHeaderElementTypes;

(function (eHeaderElementTypes) {
  eHeaderElementTypes[eHeaderElementTypes["headLine"] = 0] = "headLine";
  eHeaderElementTypes[eHeaderElementTypes["headLineCenter"] = 1] = "headLineCenter";
  eHeaderElementTypes[eHeaderElementTypes["abstract"] = 2] = "abstract";
})(eHeaderElementTypes || (eHeaderElementTypes = {}));

/***/ }),
/* 76 */
/***/ (function(module, exports) {



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var _components_article_container_article_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _components_color_container_color_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);
/* harmony import */ var _compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25);
/* harmony import */ var _compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27);
/* harmony import */ var _compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31);
/* harmony import */ var _compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7);
/* harmony import */ var _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22);
/* harmony import */ var _compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23);
/* harmony import */ var _elements_header_elements_header_elements__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37);
/* harmony import */ var _elements_header_elements_spec__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(34);
/* harmony import */ var _elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(28);
/* harmony import */ var _elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9);
/* harmony import */ var _elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(10);
/* harmony import */ var _elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(29);
/* harmony import */ var _elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(17);
/* harmony import */ var _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11);
/* harmony import */ var _elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(21);
/* harmony import */ var _less__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1);
/* harmony import */ var _page_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(12);






























var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_6__["animateScroll"];

var ProjectFour =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProjectFour, _React$Component);

  function ProjectFour() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProjectFour);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ProjectFour).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProjectFour, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_static__WEBPACK_IMPORTED_MODULE_7__["Head"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("title", null, "Information | Zug\xE4nglich | Innovativ - ", _constants__WEBPACK_IMPORTED_MODULE_29__[/* PAGE_NAME */ "d"])), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_article_container_article_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        header: "Information | Zug\xE4nglich | Innovativ",
        paragraph: "Plattformgrenzen \xFCberwinden, Information ger\xE4teunabh\xE4ngig zug\xE4nglich machen",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].transparent
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        header: "Innovation, das Zugpferd von Fortschritt",
        paragraph: "Technische L\xF6sungen die unterst\xFCtzen und erleichtern \u2013 nat\xFCrlich zug\xE4nglich und responsive.",
        pictogram: _page_types__WEBPACK_IMPORTED_MODULE_28__["ePictogram"].analysis,
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light,
        orientation: _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_16__["eSpotlightOrientation"].left
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Auftr\xE4ge, Zuweisen, Reporting",
        paragraph: "Mit Unmengen von Messger\xE4ten im Einsatz z\xE4hlen die Energieversorger zu den IT-Supergr\xF6ssen welche dar\xFCber hinaus auch noch Versorgungssicherheit und Verf\xFCgbarkeit sicher stellen m\xFCssen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__["eTextStyles"].paragraph
      }, "Als Subunternehmen der", " ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Solcom",
        link: "https://www.solcom.de/de/kontakt.aspx",
        showLinkIcon: true
      }), " ", "durften wir diverse Verbesserungen und Erweiterungen umsetzen die die wachsenden Anforderungen ans das Ger\xE4temanagement stellen."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "Das Monteur-Portal wurde als Cloud-Applikation umgesetzt und kann von den Mitarbeitern bequem via Browser bedient werden."
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Microsoft Azure als Betriebsplatform"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, ".NET Core & Standard"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Azure DevOps & IaC (Infrastructure as Code)"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "WebApi"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "SAP Schnittstellen"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Diverse \u201EDatent\xF6pfe\u201C"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Authorisierung mit AZURE AD"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Serienbriefe"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Auftrags-Verwaltung")), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Beschleunigung & Verbesserung",
        paragraph: "Einerseits mussten wir diverse Performance-Issues finden und beheben, beim asynchronen verarbeiten der Auftragszuweisung kam es immer wieder zu time-outs und Abbr\xFCchen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__["eTextStyles"].paragraph
      }, "Datenbank-Operationen liefen aus dem Ruder und die AZURE-Functions mussten \xFCberarbeitet werden."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__["eTextStyles"].paragraph
      }, "Andererseits konnte mit Hilfe einer neuen Serienbrief-Funktion einiges an Mehraufwand beim Konfektionieren \u2013 durch senden an eine neue Druckstrasse \u2013 vermieden werden."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__["eTextStyles"].paragraph
      }, "Mitarbeiter k\xF6nnen neu ganze Auftragsgruppen zusammenfassen und geb\xFCndelt an die Druckstrasse gesendet werden.")), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Energie | Verf\xFCgbarkeit | Kosteneffizienz",
        paragraph: "Lieferanten & Monteure online bedienen, Daten im Hintergrund verarbeiten",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].green
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "AZURE Search im Hintergrund",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-4-search.png",
        imageAltText: "Order Dispatching Overview",
        imageCaptionText: "Auftrags-Dispatcher \u2013 Auftrags-Ausl\xF6ser \u2013 setzen verschiedene Parameter um die gew\xFCnschten Eintr\xE4ge anzuzeigen, die Resultate werden in echtzeit agregiert und angezeigt.",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Alle Details mit einem Klick",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-4-details.png",
        imageAltText: "Order Details Overview",
        imageCaptionText: "Modale laden alle notwendigen Daten und \xAB\xFCberlappen die Seite\xBB - der Kontext geht nicht verloren und die Seite wird nicht neu geladen. Modern und Responsive!",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_header_elements_header_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        headerElementType: _elements_header_elements_spec__WEBPACK_IMPORTED_MODULE_19__["eHeaderElementTypes"].headLineCenter
      }, "Technologien, Methoden, Services"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__["eTextStyles"].align_center
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Scrum",
        link: "https://de.wikipedia.org/wiki/Scrum"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Agile",
        link: "https://de.wikipedia.org/wiki/Agile_Softwareentwicklung"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "VsTs",
        link: "https://visualstudio.microsoft.com/"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Azure",
        link: "https://azure.microsoft.com/"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "MVC",
        link: "https://de.wikipedia.org/wiki/Model_View_Controller"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Swagger",
        link: "https://de.wikipedia.org/wiki/Swagger_(Software)"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "CosmosDb",
        link: "https://azure.microsoft.com/de-de/services/cosmos-db/"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Microsoft SQL",
        link: "https://www.microsoft.com/en-us/sql-server/sql-server-2017"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Auth0",
        link: "https://auth0.com/"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: ".NET Core",
        link: "https://github.com/dotnet/core"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: ".NET Standard",
        link: "https://docs.microsoft.com/de-de/dotnet/standard/net-standard"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Application Insight",
        link: "https://docs.microsoft.com/en-us/azure/application-insights/app-insights-overview"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: "Asnychron",
        link: "https://de.wikipedia.org/wiki/Ajax_(Programmierung)"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        text: ".NET, Azure Functions",
        link: "https://www.microsoft.com/net"
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: "Referenzen - Vertraulich",
        paragraph: "Unsere Referenzen werden gesch\xFCtzt, wir zeigen unseren Stolz gerne bei einem pers\xF6nlichen Gespr\xE4ch.",
        linkText: "Kontakt",
        linkUrl: "/contact",
        specialText: "Projekte",
        specialUrl: "/projects"
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"], null))));
    }
  }]);

  return ProjectFour;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectFour);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var _compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27);
/* harmony import */ var _compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31);
/* harmony import */ var _compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7);
/* harmony import */ var _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22);
/* harmony import */ var _compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12);
/* harmony import */ var _elements_header_elements_header_elements__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37);
/* harmony import */ var _elements_header_elements_spec__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(34);
/* harmony import */ var _elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(28);
/* harmony import */ var _elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8);
/* harmony import */ var _elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9);
/* harmony import */ var _elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(10);
/* harmony import */ var _elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(29);
/* harmony import */ var _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11);
/* harmony import */ var _elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(21);
/* harmony import */ var _less__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1);
/* harmony import */ var _page_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14);





























var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_6__["animateScroll"];

var ProjectFive =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProjectFive, _React$Component);

  function ProjectFive() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProjectFive);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ProjectFive).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProjectFive, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_static__WEBPACK_IMPORTED_MODULE_7__["Head"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("title", null, "CI | CD | CQ - ", _constants__WEBPACK_IMPORTED_MODULE_17__[/* PAGE_NAME */ "d"])), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        header: "CI | CD | CQ",
        paragraph: "Continuous Integration, Continuous Deployment, Continuous Quality",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].transparent
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        header: "Open Source Enterprise L\xF6sungen",
        paragraph: "Software mit \xFCberschaubarem Aufwand verwalten, verteilen und \xFCberpr\xFCfen \u2013 Open Source kreativ eingesetzt!",
        pictogram: _page_types__WEBPACK_IMPORTED_MODULE_28__["ePictogram"].engineer,
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light,
        orientation: _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_15__["eSpotlightOrientation"].left
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "Nicht nur Kosten sparen",
        paragraph: "Wir bauen unsere Projekte m\xF6glichst mit Open-Source Mitteln auf da wir nicht nur die Idee dahinter verstehen und unterst\xFCtzen sondern auch die finanziellen Vorteile \u2013 keine Lizenzkosten z.B.. Die von uns eingesetzten Tools sind in der Regel kostenfrei und enthalten alle Funktionen die wir ben\xF6tigen, dar\xFCber hinaus sehen wir es als Challenge da Open-Source noch immer als unprofessionell gilt oder Lizenzprobleme bef\xFCrchtet werden.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "Source-Code Verwaltung",
        paragraph: "AZURE DevOps (visualstudio.com) ist aus unserer Sicht ein grosser Wurf aus dem Hause Microsoft. Nicht nur Source-Code Verwaltung \u2013 GIT als auch TFS Repositories \u2013 werden angeboten, Team Foundation Services bietet diverse zus\xE4tzliche Features.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null, "Source-Code Verwaltung"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null, "Build- und Deploy-Management"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null, "UnitTests"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null, "Projekt-Vewaltung (Scrum, Agile, etc.)")), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "Gratis in der Basis-Version",
        paragraph: "Die beschriebenen Dienste k\xF6nnen in der Basis-Version gratis genutzt werden und setzen ausser einem Browser eigentlich nichts voraus. (Bei kommerziellen Projekten ist mit gewissem finanziellem Aufwand zu rechen)",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null, "AZURE DevOps (visualstudio.com)"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null, "Source-Code Verwaltung"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null, "Build - Source-Code \xABbauen\xBB"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null, "Deployment - \xABgebauter\xBB Code verteilen"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null, "Projekt-Management \u2013 Scrum, Agile, Wiki, etc."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null, "SonarQube oder SonarCloud (continuous code quality)"))), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: "verwalten | \xFCberpr\xFCfen | verteilen",
        paragraph: "Kontinuierlich und automatisiert Code Qualit\xE4t sicherstellen und integrieren",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].green
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        header: "Sicherheitsgr\xFCnde",
        paragraph: "Aus Sicherheitsgr\xFCnden k\xF6nnen wir hier nicht alle Details publizieren, wir zeigen Ihnen den vollen Projektumfang aber gerne bei einem pers\xF6nlichen Gespr\xE4ch.",
        linkText: "Technik",
        linkUrl: "/technic",
        specialText: "Kontakt",
        specialUrl: "/contact"
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "\xDCbersicht Sprint-Planung",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-5-sprint.png",
        imageAltText: "\xDCbersicht Sprint-Planung",
        imageCaptionText: "Aufgaben \u2013 Tasks & Bugs \u2013 via Browser einstellen und verwalten",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "\xDCbersicht Source-Code Verwaltung",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-5-source-code.png",
        imageAltText: "\xDCbersicht Source-Code Verwaltung",
        imageCaptionText: "Einsehen, kommentieren, verwalten, korrigieren",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "\xDCbersicht Build-Management",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-5-build.png",
        imageAltText: "\xDCbersicht Build-Management",
        imageCaptionText: "Code wird automatisch und kontinuierlich \xABgebaut\xBB, kontrolliert und verteilt",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "SonarQube Projektreport",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-5-sonaqube.png",
        imageAltText: "SonarQube Projektreport",
        imageCaptionText: "Alle Auff\xE4lligkeiten, Fehler und Tipps \xFCbersichtlich dargestellt",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "SonarQube Fehlerreport",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_27__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-5-sonarqube-report.png",
        imageAltText: "SonarQube Fehlerreport",
        imageCaptionText: "Nichts, wirklich nichts entgeht diesem \xABDienst\xBB \u2013 automatisch und \xFCbersichtlich",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_header_elements_header_elements__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        headerElementType: _elements_header_elements_spec__WEBPACK_IMPORTED_MODULE_19__["eHeaderElementTypes"].headLineCenter
      }, "Technologien, Methoden, Services"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_div_element__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_25__["eTextStyles"].align_center
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
        text: "AZURE DevOps",
        link: "https://azure.microsoft.com/en-us/solutions/devops/"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
        text: "VisualStudio",
        link: "https://visualstudio.microsoft.com/"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
        text: "C# .NET",
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
        text: "SonarQube",
        link: "https://www.sonarqube.org/"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
        text: "Scrum",
        link: "https://de.wikipedia.org/wiki/Scrum"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
        text: "Continous Integration",
        link: "https://de.wikipedia.org/wiki/Kontinuierliche_Integration"
      }), ", ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_link_elements_span_link_element__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
        text: "Continous Delivery/Deployment",
        link: "https://www.scrum.de/unterschiede-zwischen-continuous-integration-continuous-delivery-und-continuous-deployment/"
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        header: "Referenzen - Vertraulich",
        paragraph: "Unsere Referenzen werden gesch\xFCtzt, wir zeigen unseren Stolz gerne bei einem pers\xF6nlichen Gespr\xE4ch.",
        linkText: "Kontakt",
        linkUrl: "/contact",
        specialText: "Projekte",
        specialUrl: "/projects"
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"], null))));
    }
  }]);

  return ProjectFive;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectFive);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var _compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27);
/* harmony import */ var _compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31);
/* harmony import */ var _compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7);
/* harmony import */ var _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22);
/* harmony import */ var _compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12);
/* harmony import */ var _elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(28);
/* harmony import */ var _elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9);
/* harmony import */ var _elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(10);
/* harmony import */ var _elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(17);
/* harmony import */ var _elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(21);
/* harmony import */ var _less__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1);
/* harmony import */ var _page_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(14);

























var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_6__["animateScroll"];

var ProjectSix =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProjectSix, _React$Component);

  function ProjectSix() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProjectSix);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ProjectSix).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProjectSix, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_static__WEBPACK_IMPORTED_MODULE_7__["Head"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("title", null, "DGL | 4com | Novomind - ", _constants__WEBPACK_IMPORTED_MODULE_17__[/* PAGE_NAME */ "d"])), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        header: "DGL | 4com | Novomind",
        paragraph: "Digital Layer | Telefonie | Vorgangsverwaltung",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].transparent
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        header: "Innovation in der Konzernkommunikation",
        paragraph: "Kundenkommunikation durch Innovation und Technik vereinfachen, verbessern, verwalten",
        pictogram: _page_types__WEBPACK_IMPORTED_MODULE_24__["ePictogram"].ai_2,
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light,
        orientation: _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_15__["eSpotlightOrientation"].left
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "Konzernkommunikation im Griff",
        paragraph: "Im Auftrag Q-PERIOR durften wir der EnBW in Karlsruhe bei der Umsetzung eines Prototypen behilflich sein der die Kommunikation nicht nur modernisiert.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Als \xABArbeitsplatz der Zukunft\xBB wurden M\xF6glichkeiten erarbeitet, wie Fax-, Email-, Brief- und Telefon-Kommunikation vereinfacht und vereinheitlicht werden kann."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, "Die L\xF6sung: durch den Aufbau einer responsiven Web-Service-Architektur konnten die sogenannten Vorg\xE4nge in unterschiedlichen Systemen verwaltet und zugeteilt werden."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_list_container_list_container__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Unterschiedliche Systeme kommen dabei zum Einsatz"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null, "4com -> Telefon-Anlage und Multichannel-Marketing"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null, "Novomind -> Schriftliche Vorg\xE4nge bearbeiten"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null, "SAP CRM -> Kundenverwaltung"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_list_elements_list_elements__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], null, "Web-Services um die Informationen den Systemen zur Verf\xFCgung zu stellen"))), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: "Empfangen | Verteilen | Bearbeiten",
        paragraph: "Kommunikation \xFCber eine Anwendung verwalten und zuteilen",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].green
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        header: "Sicherheitsgr\xFCnde",
        paragraph: "Aus Sicherheitsgr\xFCnden k\xF6nnen wir hier nicht alle Details publizieren, wir zeigen Ihnen den vollen Projektumfang aber gerne bei einem pers\xF6nlichen Gespr\xE4ch.",
        linkText: "Technik",
        linkUrl: "/technic",
        specialText: "Kontakt",
        specialUrl: "/contact"
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "Damit Sie sich ein Bild machen k\xF6nnen, anbei die Systemlandschaft in einer high-level Ansicht",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-6-enbw_systemlandschaft.png",
        imageAltText: "Systemlandschaft",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "Routingplan \u2013 Kommunikation mit Hilfe der Taxonomie und eines Decision Trees im Griff",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-6-dgl_1.png",
        imageAltText: "Routingplan",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        header: "Eine Sequenz um Anrufe korrekt zuzuteilen",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_23__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_image_element_image_element__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        imagePath: "/assets/project-images/project-6-enbw_process_sequenz-sequenz-voice-detail.png",
        imageAltText: "Sequenz Diagramm",
        imageWrapper: true,
        imagePadding: true
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        header: "Referenzen - Vertraulich",
        paragraph: "Unsere Referenzen werden gesch\xFCtzt, wir zeigen unseren Stolz gerne bei einem pers\xF6nlichen Gespr\xE4ch.",
        linkText: "Kontakt",
        linkUrl: "/contact",
        specialText: "Projekte",
        specialUrl: "/projects"
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], null))));
    }
  }]);

  return ProjectSix;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectSix);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var _compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27);
/* harmony import */ var _compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7);
/* harmony import */ var _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22);
/* harmony import */ var _compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(12);
/* harmony import */ var _elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10);
/* harmony import */ var _elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(17);
/* harmony import */ var _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(11);
/* harmony import */ var _elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(21);
/* harmony import */ var _less__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1);
/* harmony import */ var _page_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(14);























var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_6__["animateScroll"];

var Technic =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Technic, _React$Component);

  function Technic() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Technic);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Technic).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Technic, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_static__WEBPACK_IMPORTED_MODULE_7__["Head"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("title", null, "Technik - ", _constants__WEBPACK_IMPORTED_MODULE_16__[/* PAGE_NAME */ "d"])), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_article_container_article_container__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_article_banner_article_banner__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        header: "Informationstechnologie",
        paragraph: "Kreativit\xE4t beeinflusst s\xE4mtliche Bereiche von Entwicklung und Kommunikation",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].transparent
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_spotlight_spotlight__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        header: "Warte, ich googel das mal...",
        paragraph: "Ein Satz, den man inzwischen \xFCberall h\xF6rt \u2013 egal ob unterwegs, im Office oder Privat",
        pictogram: _page_types__WEBPACK_IMPORTED_MODULE_22__["ePictogram"].ai_2,
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light,
        orientation: _compositions_spotlight_spec__WEBPACK_IMPORTED_MODULE_14__["eSpotlightOrientation"].left
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Ger\xE4teunabh\xE4ngig",
        paragraph: "Die Internetnutzung wird zunehmend mobil. Smartphone, Laptop, Tablet, Desktop-Computer - die Palette der auf dem Markt erh\xE4ltlichen, internetf\xE4higen Ger\xE4te erweitert sich stetig.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_text_elements_paragraph_element__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        textStyles: _elements_text_elements_spec__WEBPACK_IMPORTED_MODULE_19__["eTextStyles"].lead
      }, "Theoretisch m\xFCssen Sie damit rechnen, dass Ihre Applikation auf 200+ verschiedenen Ger\xE4ten benutzt wird."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Reaktiv",
        paragraph: "Moderne Probleme erfordern moderne L\xF6sungsans\xE4tze. Kluge K\xF6pfe haben das erkannt und das sogenannte \xABresponsive design\xBB entwickelt. \xABresponsive design\xBB beschreibt ein Vorgehen welches das abrufende Ger\xE4t reagieren l\xE4sst.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Sicher",
        paragraph: "Wir setzen sichere, erprobte und zuverl\xE4ssige Methoden, Komponenten und Anwendungen ein. Nichts desto trotz wird unsere Arbeit fortlaufend gepr\xFCft, verbessert und erweitert.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: ".NET & Mono",
        paragraph: ".NET vom Feinsten",
        elementId: "one",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].green
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Native .NET Anwendungen",
        paragraph: "Wir setzen haupts\xE4chlich native .NET Anwendungen um, die Open Source Implementierung Mono geh\xF6rt ebenso zu unseren Muttersprachen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Web-Anwendungen",
        paragraph: "ASP.NET oder MVC Web-Anwendungen, Web-API`s \u2013 synchron oder asynchron \u2013 die Palette eingesetzter .NET Technologien ist breit und lang.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Optimistic- und Testdriven-Development",
        paragraph: "Optimistisch am Werk und mit etablierten Technologien und Vorgehensweisen Projekterfolg messen und verbessern. Wobei \xABoptimistic driven development\xBB eine Erfindung ist und wohl eher unsere Grundhaltung beschreibt.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_eye_catcher_eye_catcher__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        header: "Cloud & Data",
        paragraph: "Transaction or not, we deal your Data",
        elementId: "one",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].green
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_color_container_color_container__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light,
        padded: true
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Datenbanken",
        paragraph: "Daten werden \xFCblicherweise in Datenbanken vorgehalten die wir seit Jahren beherrschen und praktisch t\xE4glich benutzen.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_page_header_page_header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        header: "Strukturiert oder unstrukturiert",
        paragraph: "MySql, Microsoft Sql oder Oracle, relational oder oder NoSql, Document Db \u2013 wir kriegen Ihre Daten gespeichert, auch die unstrukturierten.",
        pageStyle: _less__WEBPACK_IMPORTED_MODULE_21__[/* ePageStyleTemplates */ "a"].light
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_spacer_spacer__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_compositions_call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        header: "Professionell und ausgereift",
        paragraph: "Bei unserer Arbeit verwenden wir professionelle und ausgereifte Produkte, Services und Frameworks. Wir beraten Sie gerne, das Richtige wird sich finden.",
        specialText: "Kontakt",
        specialUrl: "/contact",
        linkText: "Projekte",
        linkUrl: "/projects"
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_elements_to_top_button_to_top_button__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], null))));
    }
  }]);

  return Technic;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Technic);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(35);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(38);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(32);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(36);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/modal-window/modal-window.tsx







// https://peteris.rocks/blog/modal-window-in-react-from-scratch/
var modal_window_ModalWindow =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ModalWindow, _React$Component);

  function ModalWindow() {
    classCallCheck_default()(this, ModalWindow);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(ModalWindow).apply(this, arguments));
  }

  createClass_default()(ModalWindow, [{
    key: "close",
    value: function close(e) {
      e.preventDefault();

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      if (this.props.isOpen === false) return null;
      return external_react_default.a.createElement("section", {
        className: "modal"
      }, external_react_default.a.createElement("div", {
        className: this.props.modalClassName
      }, this.props.children), external_react_default.a.createElement("div", {
        className: "backdrop",
        onClick: function onClick(e) {
          return _this.close(e);
        }
      }));
    }
  }]);

  return ModalWindow;
}(external_react_default.a.Component);

/* harmony default export */ var modal_window = (modal_window_ModalWindow);
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/elements/date-time/date-time.tsx







var date_time_DateTime =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(DateTime, _React$Component);

  function DateTime() {
    classCallCheck_default()(this, DateTime);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(DateTime).apply(this, arguments));
  }

  createClass_default()(DateTime, [{
    key: "render",
    value: function render() {
      var dateTime = new Date(this.props.dateTime);
      var dateTimeFormat;

      switch (this.props.dateTimeType) {
        case "Regular":
          dateTimeFormat = "".concat(dateTime.toLocaleDateString(), " ").concat(dateTime.toLocaleTimeString());
          break;

        case "DateOnly":
          dateTimeFormat = "".concat(dateTime.toLocaleDateString());
          break;
      }

      return dateTimeFormat;
    }
  }]);

  return DateTime;
}(external_react_default.a.Component);

/* harmony default export */ var date_time = (date_time_DateTime);
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/article-content-modal-box/article-content-modal-box.tsx











// https://peteris.rocks/blog/modal-window-in-react-from-scratch/
var article_content_modal_box_ArticleContentModalBox =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ArticleContentModalBox, _React$Component);

  function ArticleContentModalBox(props) {
    var _this;

    classCallCheck_default()(this, ArticleContentModalBox);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ArticleContentModalBox).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(_this), "openModal", function () {
      _this.setState({
        isModalOpen: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "closeModal", function () {
      _this.setState({
        isModalOpen: false
      });
    });

    _this.state = {
      isModalOpen: false
    };
    return _this;
  }

  createClass_default()(ArticleContentModalBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("p", {
        onClick: function onClick() {
          return _this2.openModal();
        },
        dangerouslySetInnerHTML: {
          __html: this.props.articleContent.ContentTitle
        }
      }), external_react_default.a.createElement(modal_window, {
        isOpen: this.state.isModalOpen,
        onClose: function onClose() {
          return _this2.closeModal();
        },
        modalClassName: "modal-box light"
      }, external_react_default.a.createElement("div", {
        className: "news-modal-header"
      }, external_react_default.a.createElement("h3", {
        dangerouslySetInnerHTML: {
          __html: this.props.articleContent.ContentTitle
        }
      })), external_react_default.a.createElement("div", {
        className: "news-modal-body",
        onClick: function onClick() {
          return _this2.closeModal();
        }
      }, external_react_default.a.createElement("p", {
        className: "lead",
        dangerouslySetInnerHTML: {
          __html: this.props.articleContent.ContentText
        }
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("i", {
        className: "fas fa-link"
      }), "\xA0", external_react_default.a.createElement("a", {
        href: this.props.articleContent.ContentLink,
        target: "_blank",
        rel: "noopener noreferrer"
      }, this.props.articleContent.SourceName)), external_react_default.a.createElement("div", {
        className: "row-bottom-padding"
      }, external_react_default.a.createElement("i", {
        className: "fas fa-clock"
      }), "\xA0", external_react_default.a.createElement("span", null, external_react_default.a.createElement(date_time, {
        dateTimeType: "DateOnly",
        dateTime: this.props.articleContent.OriginDate
      }))), external_react_default.a.createElement("p", {
        className: "small align-center"
      }, "Click somewhere to close the Window"))));
    }
  }]);

  return ArticleContentModalBox;
}(external_react_default.a.Component);

/* harmony default export */ var article_content_modal_box = (article_content_modal_box_ArticleContentModalBox);
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/archive-content-list/archive-content-list-item.tsx



function ArchiveContentListItem(props) {
  return external_react_["createElement"]("tr", {
    className: "clickable"
  }, external_react_["createElement"]("td", null, external_react_["createElement"](article_content_modal_box, {
    articleContent: props.archiveContent
  })));
}

/* harmony default export */ var archive_content_list_item = (ArchiveContentListItem);
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/archive-content-list/archive-content-list.tsx








var archive_content_list_ArchiveContentList =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ArchiveContentList, _React$Component);

  function ArchiveContentList() {
    classCallCheck_default()(this, ArchiveContentList);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(ArchiveContentList).apply(this, arguments));
  }

  createClass_default()(ArchiveContentList, [{
    key: "render",
    value: function render() {
      var pageStyle = this.props.pageStyle ? this.props.pageStyle + " table-wrapper" : "light table-wrapper";
      var mappedArticles = this.props.dataContainer.map(function (article) {
        return external_react_["createElement"](archive_content_list_item, {
          archiveContent: article,
          key: article.Id
        });
      });
      return this.ListContainer(mappedArticles, pageStyle);
    }
  }, {
    key: "ListContainer",
    value: function ListContainer(list, pageStyle) {
      return external_react_["createElement"]("div", {
        className: pageStyle
      }, external_react_["createElement"]("table", null, external_react_["createElement"]("tbody", null, list)));
    }
  }]);

  return ArchiveContentList;
}(external_react_["Component"]);

/* harmony default export */ var archive_content_list = (archive_content_list_ArchiveContentList);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(15);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/article-container/article-container.tsx
var article_container = __webpack_require__(20);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/color-container/color-container.tsx
var color_container = __webpack_require__(13);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/article-banner/article-banner.tsx
var article_banner = __webpack_require__(24);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/page-header/page-header.tsx
var page_header = __webpack_require__(7);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/spotlight/spec/index.ts
var spec = __webpack_require__(22);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/page-types/index.ts
var page_types = __webpack_require__(14);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/spotlight/spotlight.tsx + 2 modules
var spotlight = __webpack_require__(23);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/elements/to-top-button/to-top-button.tsx
var to_top_button = __webpack_require__(21);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/less/index.ts + 1 modules
var less = __webpack_require__(1);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/utils/axios.api.ts
var axios_api = __webpack_require__(40);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/utils/url.helper.ts
var getUrlParameter = function getUrlParameter(name) {
  name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(window.location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/articles-by-source.tsx





















var articles_by_source_scroll = external_react_scroll_["animateScroll"];

var articles_by_source_ArticlesBySource =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ArticlesBySource, _React$Component);

  function ArticlesBySource(props, state) {
    var _this;

    classCallCheck_default()(this, ArticlesBySource);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ArticlesBySource).call(this, props, state));
    _this.state = {
      loadingState: false,
      limit: 100,
      sourceId: 0,
      loadingUrl: "api/selectViewArchiveContentBySourceToList",
      storeContainer: []
    };
    return _this;
  }

  createClass_default()(ArticlesBySource, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(e) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return this.getArticles();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "getArticles",
    value: function () {
      var _getArticles = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        var _this2 = this;

        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  loadingState: true
                });
                data = new FormData();
                data.append("sourceId", getUrlParameter("sourceId"));
                data.append("limit", this.state.limit.toString());
                console.log(getUrlParameter("sourceId"));
                _context2.next = 7;
                return Object(axios_api["a" /* default */])({
                  method: "post",
                  url: "".concat(this.state.loadingUrl),
                  data: data,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then(function (res) {
                  var jsonData = res.data;

                  _this2.setState({
                    storeContainer: jsonData
                  });

                  _this2.setState({
                    loadingState: false
                  });
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getArticles() {
        return _getArticles.apply(this, arguments);
      }

      return getArticles;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getArticles();
      articles_by_source_scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](article_container["a" /* default */], null, external_react_["createElement"](article_banner["a" /* default */], {
        header: "\xDCber responsive IT",
        paragraph: "F\xFCr uns ist die Kreativit\xE4t des Ungeplanten von zentraler Bedeutung",
        pageStyle: less["a" /* ePageStyleTemplates */].transparent
      }), external_react_["createElement"](spotlight["a" /* default */], {
        header: "Gestern, Heute, Morgen",
        paragraph: "Bereits seit 2002 bieten wir innovative Leistungen rund um Informatik an",
        pictogram: page_types["ePictogram"].ai_1,
        pageStyle: less["a" /* ePageStyleTemplates */].light,
        orientation: spec["eSpotlightOrientation"].left
      }), external_react_["createElement"](color_container["a" /* default */], {
        pageStyle: less["a" /* ePageStyleTemplates */].light,
        padded: true
      }, external_react_["createElement"](page_header["a" /* default */], {
        header: "News nach Quelle",
        paragraph: "Information | Recherche | Archiv",
        pageStyle: less["a" /* ePageStyleTemplates */].light
      }), external_react_["createElement"](archive_content_list, {
        dataContainer: this.state.storeContainer,
        pageKey: "Home",
        pageStyle: less["a" /* ePageStyleTemplates */].transparent
      }), !this.state.loadingState && external_react_["createElement"](to_top_button["a" /* default */], null))));
    }
  }]);

  return ArticlesBySource;
}(external_react_["Component"]);

/* harmony default export */ var articles_by_source = __webpack_exports__["default"] = (articles_by_source_ArticlesBySource);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(15);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(16);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/article-container/article-container.tsx
var article_container = __webpack_require__(20);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/color-container/color-container.tsx
var color_container = __webpack_require__(13);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/call-to-action/call-to-action.tsx
var call_to_action = __webpack_require__(25);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/eye-catcher/eye-catcher.tsx
var eye_catcher = __webpack_require__(27);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/page-banner/page-banner.tsx








/*
    credits: https://github.com/fisshy/react-scroll
*/
var page_banner_PageBanner =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(PageBanner, _React$Component);

  function PageBanner() {
    classCallCheck_default()(this, PageBanner);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PageBanner).apply(this, arguments));
  }

  createClass_default()(PageBanner, [{
    key: "render",
    value: function render() {
      var pageStyle = this.props.pageStyle;
      var header = this.props.header;
      var paragraph = this.props.paragraph;
      var scrollTo = this.props.scrollTo;
      var Link = external_react_scroll_["Link"];
      return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"]("section", {
        id: "banner"
      }, external_react_["createElement"]("div", {
        className: pageStyle
      }, external_react_["createElement"]("h2", null, header), external_react_["createElement"]("p", null, paragraph)), external_react_["createElement"](Link, {
        className: "more",
        to: scrollTo,
        spy: true,
        smooth: true,
        duration: 2000,
        offset: -50
      }, "weiter")));
    }
  }]);

  return PageBanner;
}(external_react_["Component"]);

/* harmony default export */ var page_banner = (page_banner_PageBanner);
// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/page-header/page-header.tsx
var page_header = __webpack_require__(7);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/spotlight/spec/index.ts
var spec = __webpack_require__(22);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/spotlight/spotlight.tsx + 2 modules
var spotlight = __webpack_require__(23);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/constants.ts
var constants = __webpack_require__(12);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/elements/button-elements/link-button-element.tsx







var link_button_element_LinkButtonElement =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(LinkButtonElement, _React$Component);

  function LinkButtonElement() {
    classCallCheck_default()(this, LinkButtonElement);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(LinkButtonElement).apply(this, arguments));
  }

  createClass_default()(LinkButtonElement, [{
    key: "render",
    value: function render() {
      var cssClass = this.props.cssClass ? this.props.cssClass : "button";
      return external_react_["createElement"]("a", {
        href: this.props.link,
        className: cssClass
      }, this.props.text);
    }
  }]);

  return LinkButtonElement;
}(external_react_["Component"]);

/* harmony default export */ var link_button_element = (link_button_element_LinkButtonElement);
// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/elements/button-elements/spec/index.ts
var button_elements_spec = __webpack_require__(91);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/elements/text-elements/div-element.tsx
var div_element = __webpack_require__(29);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/elements/to-top-button/to-top-button.tsx
var to_top_button = __webpack_require__(21);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/less/index.ts + 1 modules
var less = __webpack_require__(1);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/page-types/index.ts
var page_types = __webpack_require__(14);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx























var pages_scroll = external_react_scroll_["animateScroll"];

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Index, _React$Component);

  function Index() {
    classCallCheck_default()(this, Index);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Index).apply(this, arguments));
  }

  createClass_default()(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      pages_scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](external_react_static_["Head"], null, external_react_["createElement"]("title", null, "Startseite - ", constants["d" /* PAGE_NAME */])), external_react_["createElement"](page_banner, {
        header: "responsive IT",
        paragraph: "IT & Software Architecture, Engineering & Consulting",
        scrollTo: "one",
        pageStyle: less["a" /* ePageStyleTemplates */].transparent
      }), external_react_["createElement"](eye_catcher["a" /* default */], {
        header: "Was bedeutet responsive?",
        paragraph: "\u201EResponsive\u201C bedeutet so viel wie 'auf jemanden eingehen' oder 'reaktionsf\xE4hig bleiben'",
        elementId: "one",
        pageStyle: less["a" /* ePageStyleTemplates */].green
      }), external_react_["createElement"](spotlight["a" /* default */], {
        header: "Wir sind responsive",
        paragraph: "Das Informationszeitalter ist unsere Kinderstube und Information ist praktisch immer zug\xE4nglich",
        orientation: spec["eSpotlightOrientation"].left,
        pageStyle: less["a" /* ePageStyleTemplates */].light,
        pictogram: page_types["ePictogram"].ai_1
      }), external_react_["createElement"](article_container["a" /* default */], null, external_react_["createElement"](color_container["a" /* default */], {
        padded: true,
        pageStyle: less["a" /* ePageStyleTemplates */].light
      }, external_react_["createElement"](page_header["a" /* default */], {
        header: "Die Zeiten \xE4ndern sich",
        paragraph: "In Zeiten rasant wachsender Absatzzahlen von mobilen Endger\xE4ten wie Tablets und Smartphones bildet Responsive Design die M\xF6glichkeit der ger\xE4teunabh\xE4ngigen Kommunikation.",
        pageStyle: less["a" /* ePageStyleTemplates */].light
      }), external_react_["createElement"](div_element["a" /* default */], null, external_react_["createElement"](link_button_element, {
        text: "weiter ...",
        link: "/about",
        cssClass: button_elements_spec["eButtonStyles"].button_special
      })))), external_react_["createElement"](spotlight["a" /* default */], {
        header: "Technik ist unsere Leidenschaft",
        paragraph: "Wir beherrschen unser Fach und setzen Technologie ziel f\xFChrend ein - denn viel hilft eben nicht viel!",
        orientation: spec["eSpotlightOrientation"].left,
        pageStyle: less["a" /* ePageStyleTemplates */].light,
        pictogram: page_types["ePictogram"].settings
      }), external_react_["createElement"](article_container["a" /* default */], {
        pageStyle: less["a" /* ePageStyleTemplates */].light
      }, external_react_["createElement"](color_container["a" /* default */], {
        padded: true,
        pageStyle: less["a" /* ePageStyleTemplates */].light
      }, external_react_["createElement"](page_header["a" /* default */], {
        header: "Mit der Zeit weiss man es",
        paragraph: "Technologien unterst\xFCtzen die Effizienz und den Komfort einer Anwendung oder eines Services - Erfahrung und Knowhow helfen jedoch Schwachstellen zu identifizieren und L\xF6sungen zu finden.",
        pageStyle: less["a" /* ePageStyleTemplates */].light
      }), external_react_["createElement"](call_to_action["a" /* default */], {
        header: "Ihre Anforderung \u2013 Unsere Erfahrung",
        paragraph: "\xDCberzeugen Sie sich \u2013 folgende Projekte geben Aufschluss \xFCber unsere F\xE4higkeiten.",
        pageStyle: less["a" /* ePageStyleTemplates */].light,
        linkText: "Projekte",
        linkUrl: "/projects",
        specialText: "Technik",
        specialUrl: "/technic"
      }), external_react_["createElement"](to_top_button["a" /* default */], null))));
    }
  }]);

  return Index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(15);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(16);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/article-container/article-container.tsx
var article_container = __webpack_require__(20);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/tile-section/tile-item.tsx







var tile_item_TileItem =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TileItem, _React$Component);

  function TileItem() {
    classCallCheck_default()(this, TileItem);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(TileItem).apply(this, arguments));
  }

  createClass_default()(TileItem, [{
    key: "render",
    value: function render() {
      var pageStyle = this.props.pageStyle ? this.props.pageStyle : "light";
      var cssClass = "".concat(pageStyle, " box-equal box-round-corner");
      var itemClass = "item-".concat(this.props.item);
      var bgImg = this.props.backgroundImage ? this.props.backgroundImage : "";
      var styles = {
        backgroundSize: "50%",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        backgroundImage: "linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0) 100%), url(" + bgImg + ")"
      };
      return external_react_["createElement"]("div", {
        className: itemClass
      }, external_react_["createElement"]("div", {
        className: cssClass,
        style: styles
      }, external_react_["createElement"]("a", {
        href: this.props.link
      }, external_react_["createElement"]("div", {
        className: "date"
      }, this.props.date), external_react_["createElement"]("h3", null, this.props.header), external_react_["createElement"]("div", {
        className: "paragraph"
      }, external_react_["createElement"]("p", null, this.props.paragraph)))));
    }
  }]);

  return TileItem;
}(external_react_["Component"]);

/* harmony default export */ var tile_item = (tile_item_TileItem);
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/tile-section/tile-section.tsx







var tile_section_TileSection =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TileSection, _React$Component);

  function TileSection() {
    classCallCheck_default()(this, TileSection);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(TileSection).apply(this, arguments));
  }

  createClass_default()(TileSection, [{
    key: "render",
    value: function render() {
      return external_react_["createElement"]("section", {
        className: this.props.pageStyle
      }, external_react_["createElement"]("section", {
        className: "tiles"
      }, this.props.children));
    }
  }]);

  return TileSection;
}(external_react_["Component"]);

/* harmony default export */ var tile_section = (tile_section_TileSection);
// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/article-banner/article-banner.tsx
var article_banner = __webpack_require__(24);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/constants.ts
var constants = __webpack_require__(12);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/elements/spacer/spacer.tsx
var spacer = __webpack_require__(10);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/elements/to-top-button/to-top-button.tsx
var to_top_button = __webpack_require__(21);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/less/index.ts + 1 modules
var less = __webpack_require__(1);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/page-types/index.ts
var page_types = __webpack_require__(14);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects.tsx

















var projects_scroll = external_react_scroll_["animateScroll"];

var projects_Projects =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Projects, _React$Component);

  function Projects() {
    classCallCheck_default()(this, Projects);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Projects).apply(this, arguments));
  }

  createClass_default()(Projects, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      projects_scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](external_react_static_["Head"], null, external_react_["createElement"]("title", null, "Projekte - ", constants["d" /* PAGE_NAME */])), external_react_["createElement"](article_container["a" /* default */], null, external_react_["createElement"](article_banner["a" /* default */], {
        header: "Projekte",
        paragraph: "Kreativit\xE4t ist der Taktgeber unserer Inspiration",
        pageStyle: less["a" /* ePageStyleTemplates */].transparent
      }), external_react_["createElement"](tile_section, {
        pageStyle: less["a" /* ePageStyleTemplates */].transparent
      }, external_react_["createElement"](tile_item, {
        item: 6,
        header: "DGL | 4com | Novomind",
        paragraph: "Digital Layer | Telefonie | Vorgangsverwaltung",
        link: "/projects/dgl-4com-novomind",
        date: "Sunday, July 7, 2019",
        backgroundImage: page_types["ePictogram"].ai_2
      }), external_react_["createElement"](tile_item, {
        item: 5,
        header: "CI | CD | CQ",
        paragraph: "Continuous Integration, Continuous Deployment, Continuous Quality",
        link: "/projects/ci-cd-cq",
        date: "Friday, December 28, 2018",
        backgroundImage: page_types["ePictogram"].engineer
      }), external_react_["createElement"](tile_item, {
        item: 4,
        header: "Information | Zug\xE4nglich | Innovativ",
        paragraph: "Plattformgrenzen \xFCberwinden, Information ger\xE4teunabh\xE4ngig zug\xE4nglich machen",
        link: "/projects/information-zugaenglich-innovativ",
        date: "Saturday, December 1, 2018",
        backgroundImage: page_types["ePictogram"].analysis
      }), external_react_["createElement"](tile_item, {
        item: 3,
        header: "Industrie | Digitalisierung | Projekterfolg",
        paragraph: "In 10 Monaten die Digitalisierung entwickelt, beschleunigt & verstanden",
        link: "/projects/industrie-digitalisierung-projekterfolg",
        date: "Friday, October 19, 2018",
        backgroundImage: page_types["ePictogram"].computer
      }), external_react_["createElement"](tile_item, {
        item: 2,
        header: "sauber | sicher | schnell",
        paragraph: "Aus Kreativit\xE4t entstanden, als Prinzip im Einsatz",
        link: "/projects/inmemoryloader",
        date: "Thursday, October 18, 2018",
        backgroundImage: page_types["ePictogram"].ai_4
      }), external_react_["createElement"](tile_item, {
        item: 1,
        header: "Responsive | Accessible | Umbraco",
        paragraph: "Umbraco ist ein Open Source CMS dass sich grosser Beliebtheit erfreut",
        link: "/projects/responsive-accessible-umbraco",
        date: "Thursday, October 18, 2018",
        backgroundImage: page_types["ePictogram"].website
      })), external_react_["createElement"](spacer["a" /* default */], null), external_react_["createElement"](to_top_button["a" /* default */], null)));
    }
  }]);

  return Projects;
}(external_react_["Component"]);

/* harmony default export */ var projects = __webpack_exports__["default"] = (projects_Projects);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(35);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(38);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(32);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/archive-source-list/archive-source-list-item.tsx


function ArchiveSourceListItem(props) {
  function handleClick(e) {
    window.location.href = "/articles-by-source?sourceId=".concat(e);
  }

  return external_react_["createElement"]("tr", {
    onClick: function onClick() {
      return handleClick(props.archiveSource.SourceId);
    },
    className: "clickable"
  }, external_react_["createElement"]("td", null, props.archiveSource.Id), external_react_["createElement"]("td", null, props.archiveSource.SourceName), external_react_["createElement"]("td", null, props.archiveSource.SourceCount));
}

/* harmony default export */ var archive_source_list_item = (ArchiveSourceListItem);
// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/archive-source-list/archive-source-list.tsx








var archive_source_list_ArchiveSourceList =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ArchiveSourceList, _React$Component);

  function ArchiveSourceList() {
    classCallCheck_default()(this, ArchiveSourceList);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(ArchiveSourceList).apply(this, arguments));
  }

  createClass_default()(ArchiveSourceList, [{
    key: "render",
    value: function render() {
      var pageStyle = this.props.pageStyle ? this.props.pageStyle + " table-wrapper" : "light table-wrapper";
      var mappedTodos = this.props.dataContainer.map(function (source) {
        return external_react_["createElement"](archive_source_list_item, {
          archiveSource: source,
          key: source.Id
        });
      });
      return this.ListContainer(mappedTodos, pageStyle);
    }
  }, {
    key: "ListContainer",
    value: function ListContainer(list, pageStyle) {
      return external_react_["createElement"]("div", {
        className: pageStyle
      }, external_react_["createElement"]("table", null, external_react_["createElement"]("thead", null, external_react_["createElement"]("tr", null, external_react_["createElement"]("td", null, "Source Id"), external_react_["createElement"]("td", null, "Source Name"), external_react_["createElement"]("td", null, "Article Count"))), external_react_["createElement"]("tbody", null, list)));
    }
  }]);

  return ArchiveSourceList;
}(external_react_["Component"]);

/* harmony default export */ var archive_source_list = (archive_source_list_ArchiveSourceList);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(15);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(16);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/article-container/article-container.tsx
var article_container = __webpack_require__(20);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/components/color-container/color-container.tsx
var color_container = __webpack_require__(13);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/article-banner/article-banner.tsx
var article_banner = __webpack_require__(24);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/page-header/page-header.tsx
var page_header = __webpack_require__(7);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/spotlight/spec/index.ts
var spec = __webpack_require__(22);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/compositions/spotlight/spotlight.tsx + 2 modules
var spotlight = __webpack_require__(23);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/constants.ts
var constants = __webpack_require__(12);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/elements/to-top-button/to-top-button.tsx
var to_top_button = __webpack_require__(21);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/less/index.ts + 1 modules
var less = __webpack_require__(1);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/page-types/index.ts
var page_types = __webpack_require__(14);

// EXTERNAL MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/utils/axios.api.ts
var axios_api = __webpack_require__(40);

// CONCATENATED MODULE: /home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/sources.tsx























var sources_scroll = external_react_scroll_["animateScroll"];

var sources_Sources =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Sources, _React$Component);

  function Sources(props, state) {
    var _this;

    classCallCheck_default()(this, Sources);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Sources).call(this, props, state));
    _this.state = {
      loadingState: false,
      loadingUrl: "api/selectViewArchiveSources",
      storeContainer: []
    };
    _this.handleSubmit = _this.handleSubmit.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Sources, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(e) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return this.getSources();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "getSources",
    value: function () {
      var _getSources = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        var _this2 = this;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  loadingState: true
                });
                _context2.next = 3;
                return Object(axios_api["a" /* default */])({
                  method: "post",
                  url: this.state.loadingUrl,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then(function (res) {
                  var jsonData = res.data;

                  _this2.setState({
                    storeContainer: jsonData
                  });

                  _this2.setState({
                    loadingState: false
                  });
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSources() {
        return _getSources.apply(this, arguments);
      }

      return getSources;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getSources();
      sources_scroll.scrollToTop();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](external_react_static_["Head"], null, external_react_["createElement"]("title", null, "Quellen - ", constants["d" /* PAGE_NAME */])), external_react_["createElement"](article_container["a" /* default */], null, external_react_["createElement"](article_banner["a" /* default */], {
        header: "\xDCber responsive IT",
        paragraph: "F\xFCr uns ist die Kreativit\xE4t des Ungeplanten von zentraler Bedeutung",
        pageStyle: less["a" /* ePageStyleTemplates */].transparent
      }), external_react_["createElement"](spotlight["a" /* default */], {
        header: "Gestern, Heute, Morgen",
        paragraph: "Bereits seit 2002 bieten wir innovative Leistungen rund um Informatik an",
        pictogram: page_types["ePictogram"].ai_1,
        pageStyle: less["a" /* ePageStyleTemplates */].light,
        orientation: spec["eSpotlightOrientation"].left
      }), external_react_["createElement"](color_container["a" /* default */], {
        pageStyle: less["a" /* ePageStyleTemplates */].light,
        padded: true
      }, external_react_["createElement"](page_header["a" /* default */], {
        header: "Erfasste News-Quellen",
        paragraph: "Information | Recherche | Archiv",
        pageStyle: less["a" /* ePageStyleTemplates */].light
      }), external_react_["createElement"](archive_source_list, {
        dataContainer: this.state.storeContainer,
        pageKey: "Home",
        pageStyle: less["a" /* ePageStyleTemplates */].transparent
      }), !this.state.loadingState && external_react_["createElement"](to_top_button["a" /* default */], null))));
    }
  }]);

  return Sources;
}(external_react_["Component"]);

/* harmony default export */ var sources = __webpack_exports__["default"] = (sources_Sources);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(16);

var _router = __webpack_require__(33);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+CiAgICA8ZyBmaWxsPSIjNjFEQUZCIj4KICAgICAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciLz4KICAgICAgICA8cGF0aCBkPSJNNTIwLjUgNzguMXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("react-iframe");

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _eListElementTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eListElementTypes", function() { return _eListElementTypes__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _iListElementProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _iListElementProps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iListElementProps__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _iButtonElementProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _iButtonElementProps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iButtonElementProps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_iButtonElementProps__WEBPACK_IMPORTED_MODULE_0__, "eButtonStyles")) __webpack_require__.d(__webpack_exports__, "eButtonStyles", function() { return _iButtonElementProps__WEBPACK_IMPORTED_MODULE_0__["eButtonStyles"]; });

/* harmony import */ var _eButtonStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eButtonStyles", function() { return _eButtonStyles__WEBPACK_IMPORTED_MODULE_1__["a"]; });




/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
__webpack_require__(94);
module.exports = __webpack_require__(100);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(46)["default"];

var _require = __webpack_require__(47),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(46)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42)(module)))

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(47),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(48),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(48),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42)(module)))

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(44);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 39,
	"./": 39,
	"./index": 39,
	"./index.js": 39
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 96;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(43);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(49);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(50);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(26);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(101);

var _interopRequireDefault = __webpack_require__(102);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(103));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(104));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(105);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(106)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== "undefined") {
  var target = document.getElementById("root");
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept("./App", function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(107)(module)))

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// Imports
var urlEscape = __webpack_require__(109);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(52));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(52) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(110));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(111));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(112));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(113) + "#fontawesome");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(53));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(53) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(114));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(115));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(116));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(117) + "#fontawesome");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(54));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(54) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(118));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(119));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(120));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(121) + "#fontawesome");

// Module
exports.push([module.i, "/*!\n * Font Awesome Free 5.11.2 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n.fa,\n.fas,\n.far,\n.fal,\n.fad,\n.fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  left: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\nreaders do not read off random characters that represent icons */\n.fa-500px:before {\n  content: \"\\f26e\"; }\n\n.fa-accessible-icon:before {\n  content: \"\\f368\"; }\n\n.fa-accusoft:before {\n  content: \"\\f369\"; }\n\n.fa-acquisitions-incorporated:before {\n  content: \"\\f6af\"; }\n\n.fa-ad:before {\n  content: \"\\f641\"; }\n\n.fa-address-book:before {\n  content: \"\\f2b9\"; }\n\n.fa-address-card:before {\n  content: \"\\f2bb\"; }\n\n.fa-adjust:before {\n  content: \"\\f042\"; }\n\n.fa-adn:before {\n  content: \"\\f170\"; }\n\n.fa-adobe:before {\n  content: \"\\f778\"; }\n\n.fa-adversal:before {\n  content: \"\\f36a\"; }\n\n.fa-affiliatetheme:before {\n  content: \"\\f36b\"; }\n\n.fa-air-freshener:before {\n  content: \"\\f5d0\"; }\n\n.fa-airbnb:before {\n  content: \"\\f834\"; }\n\n.fa-algolia:before {\n  content: \"\\f36c\"; }\n\n.fa-align-center:before {\n  content: \"\\f037\"; }\n\n.fa-align-justify:before {\n  content: \"\\f039\"; }\n\n.fa-align-left:before {\n  content: \"\\f036\"; }\n\n.fa-align-right:before {\n  content: \"\\f038\"; }\n\n.fa-alipay:before {\n  content: \"\\f642\"; }\n\n.fa-allergies:before {\n  content: \"\\f461\"; }\n\n.fa-amazon:before {\n  content: \"\\f270\"; }\n\n.fa-amazon-pay:before {\n  content: \"\\f42c\"; }\n\n.fa-ambulance:before {\n  content: \"\\f0f9\"; }\n\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\"; }\n\n.fa-amilia:before {\n  content: \"\\f36d\"; }\n\n.fa-anchor:before {\n  content: \"\\f13d\"; }\n\n.fa-android:before {\n  content: \"\\f17b\"; }\n\n.fa-angellist:before {\n  content: \"\\f209\"; }\n\n.fa-angle-double-down:before {\n  content: \"\\f103\"; }\n\n.fa-angle-double-left:before {\n  content: \"\\f100\"; }\n\n.fa-angle-double-right:before {\n  content: \"\\f101\"; }\n\n.fa-angle-double-up:before {\n  content: \"\\f102\"; }\n\n.fa-angle-down:before {\n  content: \"\\f107\"; }\n\n.fa-angle-left:before {\n  content: \"\\f104\"; }\n\n.fa-angle-right:before {\n  content: \"\\f105\"; }\n\n.fa-angle-up:before {\n  content: \"\\f106\"; }\n\n.fa-angry:before {\n  content: \"\\f556\"; }\n\n.fa-angrycreative:before {\n  content: \"\\f36e\"; }\n\n.fa-angular:before {\n  content: \"\\f420\"; }\n\n.fa-ankh:before {\n  content: \"\\f644\"; }\n\n.fa-app-store:before {\n  content: \"\\f36f\"; }\n\n.fa-app-store-ios:before {\n  content: \"\\f370\"; }\n\n.fa-apper:before {\n  content: \"\\f371\"; }\n\n.fa-apple:before {\n  content: \"\\f179\"; }\n\n.fa-apple-alt:before {\n  content: \"\\f5d1\"; }\n\n.fa-apple-pay:before {\n  content: \"\\f415\"; }\n\n.fa-archive:before {\n  content: \"\\f187\"; }\n\n.fa-archway:before {\n  content: \"\\f557\"; }\n\n.fa-arrow-alt-circle-down:before {\n  content: \"\\f358\"; }\n\n.fa-arrow-alt-circle-left:before {\n  content: \"\\f359\"; }\n\n.fa-arrow-alt-circle-right:before {\n  content: \"\\f35a\"; }\n\n.fa-arrow-alt-circle-up:before {\n  content: \"\\f35b\"; }\n\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\"; }\n\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\"; }\n\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\"; }\n\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\"; }\n\n.fa-arrow-down:before {\n  content: \"\\f063\"; }\n\n.fa-arrow-left:before {\n  content: \"\\f060\"; }\n\n.fa-arrow-right:before {\n  content: \"\\f061\"; }\n\n.fa-arrow-up:before {\n  content: \"\\f062\"; }\n\n.fa-arrows-alt:before {\n  content: \"\\f0b2\"; }\n\n.fa-arrows-alt-h:before {\n  content: \"\\f337\"; }\n\n.fa-arrows-alt-v:before {\n  content: \"\\f338\"; }\n\n.fa-artstation:before {\n  content: \"\\f77a\"; }\n\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\"; }\n\n.fa-asterisk:before {\n  content: \"\\f069\"; }\n\n.fa-asymmetrik:before {\n  content: \"\\f372\"; }\n\n.fa-at:before {\n  content: \"\\f1fa\"; }\n\n.fa-atlas:before {\n  content: \"\\f558\"; }\n\n.fa-atlassian:before {\n  content: \"\\f77b\"; }\n\n.fa-atom:before {\n  content: \"\\f5d2\"; }\n\n.fa-audible:before {\n  content: \"\\f373\"; }\n\n.fa-audio-description:before {\n  content: \"\\f29e\"; }\n\n.fa-autoprefixer:before {\n  content: \"\\f41c\"; }\n\n.fa-avianex:before {\n  content: \"\\f374\"; }\n\n.fa-aviato:before {\n  content: \"\\f421\"; }\n\n.fa-award:before {\n  content: \"\\f559\"; }\n\n.fa-aws:before {\n  content: \"\\f375\"; }\n\n.fa-baby:before {\n  content: \"\\f77c\"; }\n\n.fa-baby-carriage:before {\n  content: \"\\f77d\"; }\n\n.fa-backspace:before {\n  content: \"\\f55a\"; }\n\n.fa-backward:before {\n  content: \"\\f04a\"; }\n\n.fa-bacon:before {\n  content: \"\\f7e5\"; }\n\n.fa-balance-scale:before {\n  content: \"\\f24e\"; }\n\n.fa-balance-scale-left:before {\n  content: \"\\f515\"; }\n\n.fa-balance-scale-right:before {\n  content: \"\\f516\"; }\n\n.fa-ban:before {\n  content: \"\\f05e\"; }\n\n.fa-band-aid:before {\n  content: \"\\f462\"; }\n\n.fa-bandcamp:before {\n  content: \"\\f2d5\"; }\n\n.fa-barcode:before {\n  content: \"\\f02a\"; }\n\n.fa-bars:before {\n  content: \"\\f0c9\"; }\n\n.fa-baseball-ball:before {\n  content: \"\\f433\"; }\n\n.fa-basketball-ball:before {\n  content: \"\\f434\"; }\n\n.fa-bath:before {\n  content: \"\\f2cd\"; }\n\n.fa-battery-empty:before {\n  content: \"\\f244\"; }\n\n.fa-battery-full:before {\n  content: \"\\f240\"; }\n\n.fa-battery-half:before {\n  content: \"\\f242\"; }\n\n.fa-battery-quarter:before {\n  content: \"\\f243\"; }\n\n.fa-battery-three-quarters:before {\n  content: \"\\f241\"; }\n\n.fa-battle-net:before {\n  content: \"\\f835\"; }\n\n.fa-bed:before {\n  content: \"\\f236\"; }\n\n.fa-beer:before {\n  content: \"\\f0fc\"; }\n\n.fa-behance:before {\n  content: \"\\f1b4\"; }\n\n.fa-behance-square:before {\n  content: \"\\f1b5\"; }\n\n.fa-bell:before {\n  content: \"\\f0f3\"; }\n\n.fa-bell-slash:before {\n  content: \"\\f1f6\"; }\n\n.fa-bezier-curve:before {\n  content: \"\\f55b\"; }\n\n.fa-bible:before {\n  content: \"\\f647\"; }\n\n.fa-bicycle:before {\n  content: \"\\f206\"; }\n\n.fa-biking:before {\n  content: \"\\f84a\"; }\n\n.fa-bimobject:before {\n  content: \"\\f378\"; }\n\n.fa-binoculars:before {\n  content: \"\\f1e5\"; }\n\n.fa-biohazard:before {\n  content: \"\\f780\"; }\n\n.fa-birthday-cake:before {\n  content: \"\\f1fd\"; }\n\n.fa-bitbucket:before {\n  content: \"\\f171\"; }\n\n.fa-bitcoin:before {\n  content: \"\\f379\"; }\n\n.fa-bity:before {\n  content: \"\\f37a\"; }\n\n.fa-black-tie:before {\n  content: \"\\f27e\"; }\n\n.fa-blackberry:before {\n  content: \"\\f37b\"; }\n\n.fa-blender:before {\n  content: \"\\f517\"; }\n\n.fa-blender-phone:before {\n  content: \"\\f6b6\"; }\n\n.fa-blind:before {\n  content: \"\\f29d\"; }\n\n.fa-blog:before {\n  content: \"\\f781\"; }\n\n.fa-blogger:before {\n  content: \"\\f37c\"; }\n\n.fa-blogger-b:before {\n  content: \"\\f37d\"; }\n\n.fa-bluetooth:before {\n  content: \"\\f293\"; }\n\n.fa-bluetooth-b:before {\n  content: \"\\f294\"; }\n\n.fa-bold:before {\n  content: \"\\f032\"; }\n\n.fa-bolt:before {\n  content: \"\\f0e7\"; }\n\n.fa-bomb:before {\n  content: \"\\f1e2\"; }\n\n.fa-bone:before {\n  content: \"\\f5d7\"; }\n\n.fa-bong:before {\n  content: \"\\f55c\"; }\n\n.fa-book:before {\n  content: \"\\f02d\"; }\n\n.fa-book-dead:before {\n  content: \"\\f6b7\"; }\n\n.fa-book-medical:before {\n  content: \"\\f7e6\"; }\n\n.fa-book-open:before {\n  content: \"\\f518\"; }\n\n.fa-book-reader:before {\n  content: \"\\f5da\"; }\n\n.fa-bookmark:before {\n  content: \"\\f02e\"; }\n\n.fa-bootstrap:before {\n  content: \"\\f836\"; }\n\n.fa-border-all:before {\n  content: \"\\f84c\"; }\n\n.fa-border-none:before {\n  content: \"\\f850\"; }\n\n.fa-border-style:before {\n  content: \"\\f853\"; }\n\n.fa-bowling-ball:before {\n  content: \"\\f436\"; }\n\n.fa-box:before {\n  content: \"\\f466\"; }\n\n.fa-box-open:before {\n  content: \"\\f49e\"; }\n\n.fa-boxes:before {\n  content: \"\\f468\"; }\n\n.fa-braille:before {\n  content: \"\\f2a1\"; }\n\n.fa-brain:before {\n  content: \"\\f5dc\"; }\n\n.fa-bread-slice:before {\n  content: \"\\f7ec\"; }\n\n.fa-briefcase:before {\n  content: \"\\f0b1\"; }\n\n.fa-briefcase-medical:before {\n  content: \"\\f469\"; }\n\n.fa-broadcast-tower:before {\n  content: \"\\f519\"; }\n\n.fa-broom:before {\n  content: \"\\f51a\"; }\n\n.fa-brush:before {\n  content: \"\\f55d\"; }\n\n.fa-btc:before {\n  content: \"\\f15a\"; }\n\n.fa-buffer:before {\n  content: \"\\f837\"; }\n\n.fa-bug:before {\n  content: \"\\f188\"; }\n\n.fa-building:before {\n  content: \"\\f1ad\"; }\n\n.fa-bullhorn:before {\n  content: \"\\f0a1\"; }\n\n.fa-bullseye:before {\n  content: \"\\f140\"; }\n\n.fa-burn:before {\n  content: \"\\f46a\"; }\n\n.fa-buromobelexperte:before {\n  content: \"\\f37f\"; }\n\n.fa-bus:before {\n  content: \"\\f207\"; }\n\n.fa-bus-alt:before {\n  content: \"\\f55e\"; }\n\n.fa-business-time:before {\n  content: \"\\f64a\"; }\n\n.fa-buy-n-large:before {\n  content: \"\\f8a6\"; }\n\n.fa-buysellads:before {\n  content: \"\\f20d\"; }\n\n.fa-calculator:before {\n  content: \"\\f1ec\"; }\n\n.fa-calendar:before {\n  content: \"\\f133\"; }\n\n.fa-calendar-alt:before {\n  content: \"\\f073\"; }\n\n.fa-calendar-check:before {\n  content: \"\\f274\"; }\n\n.fa-calendar-day:before {\n  content: \"\\f783\"; }\n\n.fa-calendar-minus:before {\n  content: \"\\f272\"; }\n\n.fa-calendar-plus:before {\n  content: \"\\f271\"; }\n\n.fa-calendar-times:before {\n  content: \"\\f273\"; }\n\n.fa-calendar-week:before {\n  content: \"\\f784\"; }\n\n.fa-camera:before {\n  content: \"\\f030\"; }\n\n.fa-camera-retro:before {\n  content: \"\\f083\"; }\n\n.fa-campground:before {\n  content: \"\\f6bb\"; }\n\n.fa-canadian-maple-leaf:before {\n  content: \"\\f785\"; }\n\n.fa-candy-cane:before {\n  content: \"\\f786\"; }\n\n.fa-cannabis:before {\n  content: \"\\f55f\"; }\n\n.fa-capsules:before {\n  content: \"\\f46b\"; }\n\n.fa-car:before {\n  content: \"\\f1b9\"; }\n\n.fa-car-alt:before {\n  content: \"\\f5de\"; }\n\n.fa-car-battery:before {\n  content: \"\\f5df\"; }\n\n.fa-car-crash:before {\n  content: \"\\f5e1\"; }\n\n.fa-car-side:before {\n  content: \"\\f5e4\"; }\n\n.fa-caret-down:before {\n  content: \"\\f0d7\"; }\n\n.fa-caret-left:before {\n  content: \"\\f0d9\"; }\n\n.fa-caret-right:before {\n  content: \"\\f0da\"; }\n\n.fa-caret-square-down:before {\n  content: \"\\f150\"; }\n\n.fa-caret-square-left:before {\n  content: \"\\f191\"; }\n\n.fa-caret-square-right:before {\n  content: \"\\f152\"; }\n\n.fa-caret-square-up:before {\n  content: \"\\f151\"; }\n\n.fa-caret-up:before {\n  content: \"\\f0d8\"; }\n\n.fa-carrot:before {\n  content: \"\\f787\"; }\n\n.fa-cart-arrow-down:before {\n  content: \"\\f218\"; }\n\n.fa-cart-plus:before {\n  content: \"\\f217\"; }\n\n.fa-cash-register:before {\n  content: \"\\f788\"; }\n\n.fa-cat:before {\n  content: \"\\f6be\"; }\n\n.fa-cc-amazon-pay:before {\n  content: \"\\f42d\"; }\n\n.fa-cc-amex:before {\n  content: \"\\f1f3\"; }\n\n.fa-cc-apple-pay:before {\n  content: \"\\f416\"; }\n\n.fa-cc-diners-club:before {\n  content: \"\\f24c\"; }\n\n.fa-cc-discover:before {\n  content: \"\\f1f2\"; }\n\n.fa-cc-jcb:before {\n  content: \"\\f24b\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\"; }\n\n.fa-cc-paypal:before {\n  content: \"\\f1f4\"; }\n\n.fa-cc-stripe:before {\n  content: \"\\f1f5\"; }\n\n.fa-cc-visa:before {\n  content: \"\\f1f0\"; }\n\n.fa-centercode:before {\n  content: \"\\f380\"; }\n\n.fa-centos:before {\n  content: \"\\f789\"; }\n\n.fa-certificate:before {\n  content: \"\\f0a3\"; }\n\n.fa-chair:before {\n  content: \"\\f6c0\"; }\n\n.fa-chalkboard:before {\n  content: \"\\f51b\"; }\n\n.fa-chalkboard-teacher:before {\n  content: \"\\f51c\"; }\n\n.fa-charging-station:before {\n  content: \"\\f5e7\"; }\n\n.fa-chart-area:before {\n  content: \"\\f1fe\"; }\n\n.fa-chart-bar:before {\n  content: \"\\f080\"; }\n\n.fa-chart-line:before {\n  content: \"\\f201\"; }\n\n.fa-chart-pie:before {\n  content: \"\\f200\"; }\n\n.fa-check:before {\n  content: \"\\f00c\"; }\n\n.fa-check-circle:before {\n  content: \"\\f058\"; }\n\n.fa-check-double:before {\n  content: \"\\f560\"; }\n\n.fa-check-square:before {\n  content: \"\\f14a\"; }\n\n.fa-cheese:before {\n  content: \"\\f7ef\"; }\n\n.fa-chess:before {\n  content: \"\\f439\"; }\n\n.fa-chess-bishop:before {\n  content: \"\\f43a\"; }\n\n.fa-chess-board:before {\n  content: \"\\f43c\"; }\n\n.fa-chess-king:before {\n  content: \"\\f43f\"; }\n\n.fa-chess-knight:before {\n  content: \"\\f441\"; }\n\n.fa-chess-pawn:before {\n  content: \"\\f443\"; }\n\n.fa-chess-queen:before {\n  content: \"\\f445\"; }\n\n.fa-chess-rook:before {\n  content: \"\\f447\"; }\n\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\"; }\n\n.fa-chevron-circle-left:before {\n  content: \"\\f137\"; }\n\n.fa-chevron-circle-right:before {\n  content: \"\\f138\"; }\n\n.fa-chevron-circle-up:before {\n  content: \"\\f139\"; }\n\n.fa-chevron-down:before {\n  content: \"\\f078\"; }\n\n.fa-chevron-left:before {\n  content: \"\\f053\"; }\n\n.fa-chevron-right:before {\n  content: \"\\f054\"; }\n\n.fa-chevron-up:before {\n  content: \"\\f077\"; }\n\n.fa-child:before {\n  content: \"\\f1ae\"; }\n\n.fa-chrome:before {\n  content: \"\\f268\"; }\n\n.fa-chromecast:before {\n  content: \"\\f838\"; }\n\n.fa-church:before {\n  content: \"\\f51d\"; }\n\n.fa-circle:before {\n  content: \"\\f111\"; }\n\n.fa-circle-notch:before {\n  content: \"\\f1ce\"; }\n\n.fa-city:before {\n  content: \"\\f64f\"; }\n\n.fa-clinic-medical:before {\n  content: \"\\f7f2\"; }\n\n.fa-clipboard:before {\n  content: \"\\f328\"; }\n\n.fa-clipboard-check:before {\n  content: \"\\f46c\"; }\n\n.fa-clipboard-list:before {\n  content: \"\\f46d\"; }\n\n.fa-clock:before {\n  content: \"\\f017\"; }\n\n.fa-clone:before {\n  content: \"\\f24d\"; }\n\n.fa-closed-captioning:before {\n  content: \"\\f20a\"; }\n\n.fa-cloud:before {\n  content: \"\\f0c2\"; }\n\n.fa-cloud-download-alt:before {\n  content: \"\\f381\"; }\n\n.fa-cloud-meatball:before {\n  content: \"\\f73b\"; }\n\n.fa-cloud-moon:before {\n  content: \"\\f6c3\"; }\n\n.fa-cloud-moon-rain:before {\n  content: \"\\f73c\"; }\n\n.fa-cloud-rain:before {\n  content: \"\\f73d\"; }\n\n.fa-cloud-showers-heavy:before {\n  content: \"\\f740\"; }\n\n.fa-cloud-sun:before {\n  content: \"\\f6c4\"; }\n\n.fa-cloud-sun-rain:before {\n  content: \"\\f743\"; }\n\n.fa-cloud-upload-alt:before {\n  content: \"\\f382\"; }\n\n.fa-cloudscale:before {\n  content: \"\\f383\"; }\n\n.fa-cloudsmith:before {\n  content: \"\\f384\"; }\n\n.fa-cloudversify:before {\n  content: \"\\f385\"; }\n\n.fa-cocktail:before {\n  content: \"\\f561\"; }\n\n.fa-code:before {\n  content: \"\\f121\"; }\n\n.fa-code-branch:before {\n  content: \"\\f126\"; }\n\n.fa-codepen:before {\n  content: \"\\f1cb\"; }\n\n.fa-codiepie:before {\n  content: \"\\f284\"; }\n\n.fa-coffee:before {\n  content: \"\\f0f4\"; }\n\n.fa-cog:before {\n  content: \"\\f013\"; }\n\n.fa-cogs:before {\n  content: \"\\f085\"; }\n\n.fa-coins:before {\n  content: \"\\f51e\"; }\n\n.fa-columns:before {\n  content: \"\\f0db\"; }\n\n.fa-comment:before {\n  content: \"\\f075\"; }\n\n.fa-comment-alt:before {\n  content: \"\\f27a\"; }\n\n.fa-comment-dollar:before {\n  content: \"\\f651\"; }\n\n.fa-comment-dots:before {\n  content: \"\\f4ad\"; }\n\n.fa-comment-medical:before {\n  content: \"\\f7f5\"; }\n\n.fa-comment-slash:before {\n  content: \"\\f4b3\"; }\n\n.fa-comments:before {\n  content: \"\\f086\"; }\n\n.fa-comments-dollar:before {\n  content: \"\\f653\"; }\n\n.fa-compact-disc:before {\n  content: \"\\f51f\"; }\n\n.fa-compass:before {\n  content: \"\\f14e\"; }\n\n.fa-compress:before {\n  content: \"\\f066\"; }\n\n.fa-compress-arrows-alt:before {\n  content: \"\\f78c\"; }\n\n.fa-concierge-bell:before {\n  content: \"\\f562\"; }\n\n.fa-confluence:before {\n  content: \"\\f78d\"; }\n\n.fa-connectdevelop:before {\n  content: \"\\f20e\"; }\n\n.fa-contao:before {\n  content: \"\\f26d\"; }\n\n.fa-cookie:before {\n  content: \"\\f563\"; }\n\n.fa-cookie-bite:before {\n  content: \"\\f564\"; }\n\n.fa-copy:before {\n  content: \"\\f0c5\"; }\n\n.fa-copyright:before {\n  content: \"\\f1f9\"; }\n\n.fa-cotton-bureau:before {\n  content: \"\\f89e\"; }\n\n.fa-couch:before {\n  content: \"\\f4b8\"; }\n\n.fa-cpanel:before {\n  content: \"\\f388\"; }\n\n.fa-creative-commons:before {\n  content: \"\\f25e\"; }\n\n.fa-creative-commons-by:before {\n  content: \"\\f4e7\"; }\n\n.fa-creative-commons-nc:before {\n  content: \"\\f4e8\"; }\n\n.fa-creative-commons-nc-eu:before {\n  content: \"\\f4e9\"; }\n\n.fa-creative-commons-nc-jp:before {\n  content: \"\\f4ea\"; }\n\n.fa-creative-commons-nd:before {\n  content: \"\\f4eb\"; }\n\n.fa-creative-commons-pd:before {\n  content: \"\\f4ec\"; }\n\n.fa-creative-commons-pd-alt:before {\n  content: \"\\f4ed\"; }\n\n.fa-creative-commons-remix:before {\n  content: \"\\f4ee\"; }\n\n.fa-creative-commons-sa:before {\n  content: \"\\f4ef\"; }\n\n.fa-creative-commons-sampling:before {\n  content: \"\\f4f0\"; }\n\n.fa-creative-commons-sampling-plus:before {\n  content: \"\\f4f1\"; }\n\n.fa-creative-commons-share:before {\n  content: \"\\f4f2\"; }\n\n.fa-creative-commons-zero:before {\n  content: \"\\f4f3\"; }\n\n.fa-credit-card:before {\n  content: \"\\f09d\"; }\n\n.fa-critical-role:before {\n  content: \"\\f6c9\"; }\n\n.fa-crop:before {\n  content: \"\\f125\"; }\n\n.fa-crop-alt:before {\n  content: \"\\f565\"; }\n\n.fa-cross:before {\n  content: \"\\f654\"; }\n\n.fa-crosshairs:before {\n  content: \"\\f05b\"; }\n\n.fa-crow:before {\n  content: \"\\f520\"; }\n\n.fa-crown:before {\n  content: \"\\f521\"; }\n\n.fa-crutch:before {\n  content: \"\\f7f7\"; }\n\n.fa-css3:before {\n  content: \"\\f13c\"; }\n\n.fa-css3-alt:before {\n  content: \"\\f38b\"; }\n\n.fa-cube:before {\n  content: \"\\f1b2\"; }\n\n.fa-cubes:before {\n  content: \"\\f1b3\"; }\n\n.fa-cut:before {\n  content: \"\\f0c4\"; }\n\n.fa-cuttlefish:before {\n  content: \"\\f38c\"; }\n\n.fa-d-and-d:before {\n  content: \"\\f38d\"; }\n\n.fa-d-and-d-beyond:before {\n  content: \"\\f6ca\"; }\n\n.fa-dashcube:before {\n  content: \"\\f210\"; }\n\n.fa-database:before {\n  content: \"\\f1c0\"; }\n\n.fa-deaf:before {\n  content: \"\\f2a4\"; }\n\n.fa-delicious:before {\n  content: \"\\f1a5\"; }\n\n.fa-democrat:before {\n  content: \"\\f747\"; }\n\n.fa-deploydog:before {\n  content: \"\\f38e\"; }\n\n.fa-deskpro:before {\n  content: \"\\f38f\"; }\n\n.fa-desktop:before {\n  content: \"\\f108\"; }\n\n.fa-dev:before {\n  content: \"\\f6cc\"; }\n\n.fa-deviantart:before {\n  content: \"\\f1bd\"; }\n\n.fa-dharmachakra:before {\n  content: \"\\f655\"; }\n\n.fa-dhl:before {\n  content: \"\\f790\"; }\n\n.fa-diagnoses:before {\n  content: \"\\f470\"; }\n\n.fa-diaspora:before {\n  content: \"\\f791\"; }\n\n.fa-dice:before {\n  content: \"\\f522\"; }\n\n.fa-dice-d20:before {\n  content: \"\\f6cf\"; }\n\n.fa-dice-d6:before {\n  content: \"\\f6d1\"; }\n\n.fa-dice-five:before {\n  content: \"\\f523\"; }\n\n.fa-dice-four:before {\n  content: \"\\f524\"; }\n\n.fa-dice-one:before {\n  content: \"\\f525\"; }\n\n.fa-dice-six:before {\n  content: \"\\f526\"; }\n\n.fa-dice-three:before {\n  content: \"\\f527\"; }\n\n.fa-dice-two:before {\n  content: \"\\f528\"; }\n\n.fa-digg:before {\n  content: \"\\f1a6\"; }\n\n.fa-digital-ocean:before {\n  content: \"\\f391\"; }\n\n.fa-digital-tachograph:before {\n  content: \"\\f566\"; }\n\n.fa-directions:before {\n  content: \"\\f5eb\"; }\n\n.fa-discord:before {\n  content: \"\\f392\"; }\n\n.fa-discourse:before {\n  content: \"\\f393\"; }\n\n.fa-divide:before {\n  content: \"\\f529\"; }\n\n.fa-dizzy:before {\n  content: \"\\f567\"; }\n\n.fa-dna:before {\n  content: \"\\f471\"; }\n\n.fa-dochub:before {\n  content: \"\\f394\"; }\n\n.fa-docker:before {\n  content: \"\\f395\"; }\n\n.fa-dog:before {\n  content: \"\\f6d3\"; }\n\n.fa-dollar-sign:before {\n  content: \"\\f155\"; }\n\n.fa-dolly:before {\n  content: \"\\f472\"; }\n\n.fa-dolly-flatbed:before {\n  content: \"\\f474\"; }\n\n.fa-donate:before {\n  content: \"\\f4b9\"; }\n\n.fa-door-closed:before {\n  content: \"\\f52a\"; }\n\n.fa-door-open:before {\n  content: \"\\f52b\"; }\n\n.fa-dot-circle:before {\n  content: \"\\f192\"; }\n\n.fa-dove:before {\n  content: \"\\f4ba\"; }\n\n.fa-download:before {\n  content: \"\\f019\"; }\n\n.fa-draft2digital:before {\n  content: \"\\f396\"; }\n\n.fa-drafting-compass:before {\n  content: \"\\f568\"; }\n\n.fa-dragon:before {\n  content: \"\\f6d5\"; }\n\n.fa-draw-polygon:before {\n  content: \"\\f5ee\"; }\n\n.fa-dribbble:before {\n  content: \"\\f17d\"; }\n\n.fa-dribbble-square:before {\n  content: \"\\f397\"; }\n\n.fa-dropbox:before {\n  content: \"\\f16b\"; }\n\n.fa-drum:before {\n  content: \"\\f569\"; }\n\n.fa-drum-steelpan:before {\n  content: \"\\f56a\"; }\n\n.fa-drumstick-bite:before {\n  content: \"\\f6d7\"; }\n\n.fa-drupal:before {\n  content: \"\\f1a9\"; }\n\n.fa-dumbbell:before {\n  content: \"\\f44b\"; }\n\n.fa-dumpster:before {\n  content: \"\\f793\"; }\n\n.fa-dumpster-fire:before {\n  content: \"\\f794\"; }\n\n.fa-dungeon:before {\n  content: \"\\f6d9\"; }\n\n.fa-dyalog:before {\n  content: \"\\f399\"; }\n\n.fa-earlybirds:before {\n  content: \"\\f39a\"; }\n\n.fa-ebay:before {\n  content: \"\\f4f4\"; }\n\n.fa-edge:before {\n  content: \"\\f282\"; }\n\n.fa-edit:before {\n  content: \"\\f044\"; }\n\n.fa-egg:before {\n  content: \"\\f7fb\"; }\n\n.fa-eject:before {\n  content: \"\\f052\"; }\n\n.fa-elementor:before {\n  content: \"\\f430\"; }\n\n.fa-ellipsis-h:before {\n  content: \"\\f141\"; }\n\n.fa-ellipsis-v:before {\n  content: \"\\f142\"; }\n\n.fa-ello:before {\n  content: \"\\f5f1\"; }\n\n.fa-ember:before {\n  content: \"\\f423\"; }\n\n.fa-empire:before {\n  content: \"\\f1d1\"; }\n\n.fa-envelope:before {\n  content: \"\\f0e0\"; }\n\n.fa-envelope-open:before {\n  content: \"\\f2b6\"; }\n\n.fa-envelope-open-text:before {\n  content: \"\\f658\"; }\n\n.fa-envelope-square:before {\n  content: \"\\f199\"; }\n\n.fa-envira:before {\n  content: \"\\f299\"; }\n\n.fa-equals:before {\n  content: \"\\f52c\"; }\n\n.fa-eraser:before {\n  content: \"\\f12d\"; }\n\n.fa-erlang:before {\n  content: \"\\f39d\"; }\n\n.fa-ethereum:before {\n  content: \"\\f42e\"; }\n\n.fa-ethernet:before {\n  content: \"\\f796\"; }\n\n.fa-etsy:before {\n  content: \"\\f2d7\"; }\n\n.fa-euro-sign:before {\n  content: \"\\f153\"; }\n\n.fa-evernote:before {\n  content: \"\\f839\"; }\n\n.fa-exchange-alt:before {\n  content: \"\\f362\"; }\n\n.fa-exclamation:before {\n  content: \"\\f12a\"; }\n\n.fa-exclamation-circle:before {\n  content: \"\\f06a\"; }\n\n.fa-exclamation-triangle:before {\n  content: \"\\f071\"; }\n\n.fa-expand:before {\n  content: \"\\f065\"; }\n\n.fa-expand-arrows-alt:before {\n  content: \"\\f31e\"; }\n\n.fa-expeditedssl:before {\n  content: \"\\f23e\"; }\n\n.fa-external-link-alt:before {\n  content: \"\\f35d\"; }\n\n.fa-external-link-square-alt:before {\n  content: \"\\f360\"; }\n\n.fa-eye:before {\n  content: \"\\f06e\"; }\n\n.fa-eye-dropper:before {\n  content: \"\\f1fb\"; }\n\n.fa-eye-slash:before {\n  content: \"\\f070\"; }\n\n.fa-facebook:before {\n  content: \"\\f09a\"; }\n\n.fa-facebook-f:before {\n  content: \"\\f39e\"; }\n\n.fa-facebook-messenger:before {\n  content: \"\\f39f\"; }\n\n.fa-facebook-square:before {\n  content: \"\\f082\"; }\n\n.fa-fan:before {\n  content: \"\\f863\"; }\n\n.fa-fantasy-flight-games:before {\n  content: \"\\f6dc\"; }\n\n.fa-fast-backward:before {\n  content: \"\\f049\"; }\n\n.fa-fast-forward:before {\n  content: \"\\f050\"; }\n\n.fa-fax:before {\n  content: \"\\f1ac\"; }\n\n.fa-feather:before {\n  content: \"\\f52d\"; }\n\n.fa-feather-alt:before {\n  content: \"\\f56b\"; }\n\n.fa-fedex:before {\n  content: \"\\f797\"; }\n\n.fa-fedora:before {\n  content: \"\\f798\"; }\n\n.fa-female:before {\n  content: \"\\f182\"; }\n\n.fa-fighter-jet:before {\n  content: \"\\f0fb\"; }\n\n.fa-figma:before {\n  content: \"\\f799\"; }\n\n.fa-file:before {\n  content: \"\\f15b\"; }\n\n.fa-file-alt:before {\n  content: \"\\f15c\"; }\n\n.fa-file-archive:before {\n  content: \"\\f1c6\"; }\n\n.fa-file-audio:before {\n  content: \"\\f1c7\"; }\n\n.fa-file-code:before {\n  content: \"\\f1c9\"; }\n\n.fa-file-contract:before {\n  content: \"\\f56c\"; }\n\n.fa-file-csv:before {\n  content: \"\\f6dd\"; }\n\n.fa-file-download:before {\n  content: \"\\f56d\"; }\n\n.fa-file-excel:before {\n  content: \"\\f1c3\"; }\n\n.fa-file-export:before {\n  content: \"\\f56e\"; }\n\n.fa-file-image:before {\n  content: \"\\f1c5\"; }\n\n.fa-file-import:before {\n  content: \"\\f56f\"; }\n\n.fa-file-invoice:before {\n  content: \"\\f570\"; }\n\n.fa-file-invoice-dollar:before {\n  content: \"\\f571\"; }\n\n.fa-file-medical:before {\n  content: \"\\f477\"; }\n\n.fa-file-medical-alt:before {\n  content: \"\\f478\"; }\n\n.fa-file-pdf:before {\n  content: \"\\f1c1\"; }\n\n.fa-file-powerpoint:before {\n  content: \"\\f1c4\"; }\n\n.fa-file-prescription:before {\n  content: \"\\f572\"; }\n\n.fa-file-signature:before {\n  content: \"\\f573\"; }\n\n.fa-file-upload:before {\n  content: \"\\f574\"; }\n\n.fa-file-video:before {\n  content: \"\\f1c8\"; }\n\n.fa-file-word:before {\n  content: \"\\f1c2\"; }\n\n.fa-fill:before {\n  content: \"\\f575\"; }\n\n.fa-fill-drip:before {\n  content: \"\\f576\"; }\n\n.fa-film:before {\n  content: \"\\f008\"; }\n\n.fa-filter:before {\n  content: \"\\f0b0\"; }\n\n.fa-fingerprint:before {\n  content: \"\\f577\"; }\n\n.fa-fire:before {\n  content: \"\\f06d\"; }\n\n.fa-fire-alt:before {\n  content: \"\\f7e4\"; }\n\n.fa-fire-extinguisher:before {\n  content: \"\\f134\"; }\n\n.fa-firefox:before {\n  content: \"\\f269\"; }\n\n.fa-first-aid:before {\n  content: \"\\f479\"; }\n\n.fa-first-order:before {\n  content: \"\\f2b0\"; }\n\n.fa-first-order-alt:before {\n  content: \"\\f50a\"; }\n\n.fa-firstdraft:before {\n  content: \"\\f3a1\"; }\n\n.fa-fish:before {\n  content: \"\\f578\"; }\n\n.fa-fist-raised:before {\n  content: \"\\f6de\"; }\n\n.fa-flag:before {\n  content: \"\\f024\"; }\n\n.fa-flag-checkered:before {\n  content: \"\\f11e\"; }\n\n.fa-flag-usa:before {\n  content: \"\\f74d\"; }\n\n.fa-flask:before {\n  content: \"\\f0c3\"; }\n\n.fa-flickr:before {\n  content: \"\\f16e\"; }\n\n.fa-flipboard:before {\n  content: \"\\f44d\"; }\n\n.fa-flushed:before {\n  content: \"\\f579\"; }\n\n.fa-fly:before {\n  content: \"\\f417\"; }\n\n.fa-folder:before {\n  content: \"\\f07b\"; }\n\n.fa-folder-minus:before {\n  content: \"\\f65d\"; }\n\n.fa-folder-open:before {\n  content: \"\\f07c\"; }\n\n.fa-folder-plus:before {\n  content: \"\\f65e\"; }\n\n.fa-font:before {\n  content: \"\\f031\"; }\n\n.fa-font-awesome:before {\n  content: \"\\f2b4\"; }\n\n.fa-font-awesome-alt:before {\n  content: \"\\f35c\"; }\n\n.fa-font-awesome-flag:before {\n  content: \"\\f425\"; }\n\n.fa-font-awesome-logo-full:before {\n  content: \"\\f4e6\"; }\n\n.fa-fonticons:before {\n  content: \"\\f280\"; }\n\n.fa-fonticons-fi:before {\n  content: \"\\f3a2\"; }\n\n.fa-football-ball:before {\n  content: \"\\f44e\"; }\n\n.fa-fort-awesome:before {\n  content: \"\\f286\"; }\n\n.fa-fort-awesome-alt:before {\n  content: \"\\f3a3\"; }\n\n.fa-forumbee:before {\n  content: \"\\f211\"; }\n\n.fa-forward:before {\n  content: \"\\f04e\"; }\n\n.fa-foursquare:before {\n  content: \"\\f180\"; }\n\n.fa-free-code-camp:before {\n  content: \"\\f2c5\"; }\n\n.fa-freebsd:before {\n  content: \"\\f3a4\"; }\n\n.fa-frog:before {\n  content: \"\\f52e\"; }\n\n.fa-frown:before {\n  content: \"\\f119\"; }\n\n.fa-frown-open:before {\n  content: \"\\f57a\"; }\n\n.fa-fulcrum:before {\n  content: \"\\f50b\"; }\n\n.fa-funnel-dollar:before {\n  content: \"\\f662\"; }\n\n.fa-futbol:before {\n  content: \"\\f1e3\"; }\n\n.fa-galactic-republic:before {\n  content: \"\\f50c\"; }\n\n.fa-galactic-senate:before {\n  content: \"\\f50d\"; }\n\n.fa-gamepad:before {\n  content: \"\\f11b\"; }\n\n.fa-gas-pump:before {\n  content: \"\\f52f\"; }\n\n.fa-gavel:before {\n  content: \"\\f0e3\"; }\n\n.fa-gem:before {\n  content: \"\\f3a5\"; }\n\n.fa-genderless:before {\n  content: \"\\f22d\"; }\n\n.fa-get-pocket:before {\n  content: \"\\f265\"; }\n\n.fa-gg:before {\n  content: \"\\f260\"; }\n\n.fa-gg-circle:before {\n  content: \"\\f261\"; }\n\n.fa-ghost:before {\n  content: \"\\f6e2\"; }\n\n.fa-gift:before {\n  content: \"\\f06b\"; }\n\n.fa-gifts:before {\n  content: \"\\f79c\"; }\n\n.fa-git:before {\n  content: \"\\f1d3\"; }\n\n.fa-git-alt:before {\n  content: \"\\f841\"; }\n\n.fa-git-square:before {\n  content: \"\\f1d2\"; }\n\n.fa-github:before {\n  content: \"\\f09b\"; }\n\n.fa-github-alt:before {\n  content: \"\\f113\"; }\n\n.fa-github-square:before {\n  content: \"\\f092\"; }\n\n.fa-gitkraken:before {\n  content: \"\\f3a6\"; }\n\n.fa-gitlab:before {\n  content: \"\\f296\"; }\n\n.fa-gitter:before {\n  content: \"\\f426\"; }\n\n.fa-glass-cheers:before {\n  content: \"\\f79f\"; }\n\n.fa-glass-martini:before {\n  content: \"\\f000\"; }\n\n.fa-glass-martini-alt:before {\n  content: \"\\f57b\"; }\n\n.fa-glass-whiskey:before {\n  content: \"\\f7a0\"; }\n\n.fa-glasses:before {\n  content: \"\\f530\"; }\n\n.fa-glide:before {\n  content: \"\\f2a5\"; }\n\n.fa-glide-g:before {\n  content: \"\\f2a6\"; }\n\n.fa-globe:before {\n  content: \"\\f0ac\"; }\n\n.fa-globe-africa:before {\n  content: \"\\f57c\"; }\n\n.fa-globe-americas:before {\n  content: \"\\f57d\"; }\n\n.fa-globe-asia:before {\n  content: \"\\f57e\"; }\n\n.fa-globe-europe:before {\n  content: \"\\f7a2\"; }\n\n.fa-gofore:before {\n  content: \"\\f3a7\"; }\n\n.fa-golf-ball:before {\n  content: \"\\f450\"; }\n\n.fa-goodreads:before {\n  content: \"\\f3a8\"; }\n\n.fa-goodreads-g:before {\n  content: \"\\f3a9\"; }\n\n.fa-google:before {\n  content: \"\\f1a0\"; }\n\n.fa-google-drive:before {\n  content: \"\\f3aa\"; }\n\n.fa-google-play:before {\n  content: \"\\f3ab\"; }\n\n.fa-google-plus:before {\n  content: \"\\f2b3\"; }\n\n.fa-google-plus-g:before {\n  content: \"\\f0d5\"; }\n\n.fa-google-plus-square:before {\n  content: \"\\f0d4\"; }\n\n.fa-google-wallet:before {\n  content: \"\\f1ee\"; }\n\n.fa-gopuram:before {\n  content: \"\\f664\"; }\n\n.fa-graduation-cap:before {\n  content: \"\\f19d\"; }\n\n.fa-gratipay:before {\n  content: \"\\f184\"; }\n\n.fa-grav:before {\n  content: \"\\f2d6\"; }\n\n.fa-greater-than:before {\n  content: \"\\f531\"; }\n\n.fa-greater-than-equal:before {\n  content: \"\\f532\"; }\n\n.fa-grimace:before {\n  content: \"\\f57f\"; }\n\n.fa-grin:before {\n  content: \"\\f580\"; }\n\n.fa-grin-alt:before {\n  content: \"\\f581\"; }\n\n.fa-grin-beam:before {\n  content: \"\\f582\"; }\n\n.fa-grin-beam-sweat:before {\n  content: \"\\f583\"; }\n\n.fa-grin-hearts:before {\n  content: \"\\f584\"; }\n\n.fa-grin-squint:before {\n  content: \"\\f585\"; }\n\n.fa-grin-squint-tears:before {\n  content: \"\\f586\"; }\n\n.fa-grin-stars:before {\n  content: \"\\f587\"; }\n\n.fa-grin-tears:before {\n  content: \"\\f588\"; }\n\n.fa-grin-tongue:before {\n  content: \"\\f589\"; }\n\n.fa-grin-tongue-squint:before {\n  content: \"\\f58a\"; }\n\n.fa-grin-tongue-wink:before {\n  content: \"\\f58b\"; }\n\n.fa-grin-wink:before {\n  content: \"\\f58c\"; }\n\n.fa-grip-horizontal:before {\n  content: \"\\f58d\"; }\n\n.fa-grip-lines:before {\n  content: \"\\f7a4\"; }\n\n.fa-grip-lines-vertical:before {\n  content: \"\\f7a5\"; }\n\n.fa-grip-vertical:before {\n  content: \"\\f58e\"; }\n\n.fa-gripfire:before {\n  content: \"\\f3ac\"; }\n\n.fa-grunt:before {\n  content: \"\\f3ad\"; }\n\n.fa-guitar:before {\n  content: \"\\f7a6\"; }\n\n.fa-gulp:before {\n  content: \"\\f3ae\"; }\n\n.fa-h-square:before {\n  content: \"\\f0fd\"; }\n\n.fa-hacker-news:before {\n  content: \"\\f1d4\"; }\n\n.fa-hacker-news-square:before {\n  content: \"\\f3af\"; }\n\n.fa-hackerrank:before {\n  content: \"\\f5f7\"; }\n\n.fa-hamburger:before {\n  content: \"\\f805\"; }\n\n.fa-hammer:before {\n  content: \"\\f6e3\"; }\n\n.fa-hamsa:before {\n  content: \"\\f665\"; }\n\n.fa-hand-holding:before {\n  content: \"\\f4bd\"; }\n\n.fa-hand-holding-heart:before {\n  content: \"\\f4be\"; }\n\n.fa-hand-holding-usd:before {\n  content: \"\\f4c0\"; }\n\n.fa-hand-lizard:before {\n  content: \"\\f258\"; }\n\n.fa-hand-middle-finger:before {\n  content: \"\\f806\"; }\n\n.fa-hand-paper:before {\n  content: \"\\f256\"; }\n\n.fa-hand-peace:before {\n  content: \"\\f25b\"; }\n\n.fa-hand-point-down:before {\n  content: \"\\f0a7\"; }\n\n.fa-hand-point-left:before {\n  content: \"\\f0a5\"; }\n\n.fa-hand-point-right:before {\n  content: \"\\f0a4\"; }\n\n.fa-hand-point-up:before {\n  content: \"\\f0a6\"; }\n\n.fa-hand-pointer:before {\n  content: \"\\f25a\"; }\n\n.fa-hand-rock:before {\n  content: \"\\f255\"; }\n\n.fa-hand-scissors:before {\n  content: \"\\f257\"; }\n\n.fa-hand-spock:before {\n  content: \"\\f259\"; }\n\n.fa-hands:before {\n  content: \"\\f4c2\"; }\n\n.fa-hands-helping:before {\n  content: \"\\f4c4\"; }\n\n.fa-handshake:before {\n  content: \"\\f2b5\"; }\n\n.fa-hanukiah:before {\n  content: \"\\f6e6\"; }\n\n.fa-hard-hat:before {\n  content: \"\\f807\"; }\n\n.fa-hashtag:before {\n  content: \"\\f292\"; }\n\n.fa-hat-cowboy:before {\n  content: \"\\f8c0\"; }\n\n.fa-hat-cowboy-side:before {\n  content: \"\\f8c1\"; }\n\n.fa-hat-wizard:before {\n  content: \"\\f6e8\"; }\n\n.fa-haykal:before {\n  content: \"\\f666\"; }\n\n.fa-hdd:before {\n  content: \"\\f0a0\"; }\n\n.fa-heading:before {\n  content: \"\\f1dc\"; }\n\n.fa-headphones:before {\n  content: \"\\f025\"; }\n\n.fa-headphones-alt:before {\n  content: \"\\f58f\"; }\n\n.fa-headset:before {\n  content: \"\\f590\"; }\n\n.fa-heart:before {\n  content: \"\\f004\"; }\n\n.fa-heart-broken:before {\n  content: \"\\f7a9\"; }\n\n.fa-heartbeat:before {\n  content: \"\\f21e\"; }\n\n.fa-helicopter:before {\n  content: \"\\f533\"; }\n\n.fa-highlighter:before {\n  content: \"\\f591\"; }\n\n.fa-hiking:before {\n  content: \"\\f6ec\"; }\n\n.fa-hippo:before {\n  content: \"\\f6ed\"; }\n\n.fa-hips:before {\n  content: \"\\f452\"; }\n\n.fa-hire-a-helper:before {\n  content: \"\\f3b0\"; }\n\n.fa-history:before {\n  content: \"\\f1da\"; }\n\n.fa-hockey-puck:before {\n  content: \"\\f453\"; }\n\n.fa-holly-berry:before {\n  content: \"\\f7aa\"; }\n\n.fa-home:before {\n  content: \"\\f015\"; }\n\n.fa-hooli:before {\n  content: \"\\f427\"; }\n\n.fa-hornbill:before {\n  content: \"\\f592\"; }\n\n.fa-horse:before {\n  content: \"\\f6f0\"; }\n\n.fa-horse-head:before {\n  content: \"\\f7ab\"; }\n\n.fa-hospital:before {\n  content: \"\\f0f8\"; }\n\n.fa-hospital-alt:before {\n  content: \"\\f47d\"; }\n\n.fa-hospital-symbol:before {\n  content: \"\\f47e\"; }\n\n.fa-hot-tub:before {\n  content: \"\\f593\"; }\n\n.fa-hotdog:before {\n  content: \"\\f80f\"; }\n\n.fa-hotel:before {\n  content: \"\\f594\"; }\n\n.fa-hotjar:before {\n  content: \"\\f3b1\"; }\n\n.fa-hourglass:before {\n  content: \"\\f254\"; }\n\n.fa-hourglass-end:before {\n  content: \"\\f253\"; }\n\n.fa-hourglass-half:before {\n  content: \"\\f252\"; }\n\n.fa-hourglass-start:before {\n  content: \"\\f251\"; }\n\n.fa-house-damage:before {\n  content: \"\\f6f1\"; }\n\n.fa-houzz:before {\n  content: \"\\f27c\"; }\n\n.fa-hryvnia:before {\n  content: \"\\f6f2\"; }\n\n.fa-html5:before {\n  content: \"\\f13b\"; }\n\n.fa-hubspot:before {\n  content: \"\\f3b2\"; }\n\n.fa-i-cursor:before {\n  content: \"\\f246\"; }\n\n.fa-ice-cream:before {\n  content: \"\\f810\"; }\n\n.fa-icicles:before {\n  content: \"\\f7ad\"; }\n\n.fa-icons:before {\n  content: \"\\f86d\"; }\n\n.fa-id-badge:before {\n  content: \"\\f2c1\"; }\n\n.fa-id-card:before {\n  content: \"\\f2c2\"; }\n\n.fa-id-card-alt:before {\n  content: \"\\f47f\"; }\n\n.fa-igloo:before {\n  content: \"\\f7ae\"; }\n\n.fa-image:before {\n  content: \"\\f03e\"; }\n\n.fa-images:before {\n  content: \"\\f302\"; }\n\n.fa-imdb:before {\n  content: \"\\f2d8\"; }\n\n.fa-inbox:before {\n  content: \"\\f01c\"; }\n\n.fa-indent:before {\n  content: \"\\f03c\"; }\n\n.fa-industry:before {\n  content: \"\\f275\"; }\n\n.fa-infinity:before {\n  content: \"\\f534\"; }\n\n.fa-info:before {\n  content: \"\\f129\"; }\n\n.fa-info-circle:before {\n  content: \"\\f05a\"; }\n\n.fa-instagram:before {\n  content: \"\\f16d\"; }\n\n.fa-intercom:before {\n  content: \"\\f7af\"; }\n\n.fa-internet-explorer:before {\n  content: \"\\f26b\"; }\n\n.fa-invision:before {\n  content: \"\\f7b0\"; }\n\n.fa-ioxhost:before {\n  content: \"\\f208\"; }\n\n.fa-italic:before {\n  content: \"\\f033\"; }\n\n.fa-itch-io:before {\n  content: \"\\f83a\"; }\n\n.fa-itunes:before {\n  content: \"\\f3b4\"; }\n\n.fa-itunes-note:before {\n  content: \"\\f3b5\"; }\n\n.fa-java:before {\n  content: \"\\f4e4\"; }\n\n.fa-jedi:before {\n  content: \"\\f669\"; }\n\n.fa-jedi-order:before {\n  content: \"\\f50e\"; }\n\n.fa-jenkins:before {\n  content: \"\\f3b6\"; }\n\n.fa-jira:before {\n  content: \"\\f7b1\"; }\n\n.fa-joget:before {\n  content: \"\\f3b7\"; }\n\n.fa-joint:before {\n  content: \"\\f595\"; }\n\n.fa-joomla:before {\n  content: \"\\f1aa\"; }\n\n.fa-journal-whills:before {\n  content: \"\\f66a\"; }\n\n.fa-js:before {\n  content: \"\\f3b8\"; }\n\n.fa-js-square:before {\n  content: \"\\f3b9\"; }\n\n.fa-jsfiddle:before {\n  content: \"\\f1cc\"; }\n\n.fa-kaaba:before {\n  content: \"\\f66b\"; }\n\n.fa-kaggle:before {\n  content: \"\\f5fa\"; }\n\n.fa-key:before {\n  content: \"\\f084\"; }\n\n.fa-keybase:before {\n  content: \"\\f4f5\"; }\n\n.fa-keyboard:before {\n  content: \"\\f11c\"; }\n\n.fa-keycdn:before {\n  content: \"\\f3ba\"; }\n\n.fa-khanda:before {\n  content: \"\\f66d\"; }\n\n.fa-kickstarter:before {\n  content: \"\\f3bb\"; }\n\n.fa-kickstarter-k:before {\n  content: \"\\f3bc\"; }\n\n.fa-kiss:before {\n  content: \"\\f596\"; }\n\n.fa-kiss-beam:before {\n  content: \"\\f597\"; }\n\n.fa-kiss-wink-heart:before {\n  content: \"\\f598\"; }\n\n.fa-kiwi-bird:before {\n  content: \"\\f535\"; }\n\n.fa-korvue:before {\n  content: \"\\f42f\"; }\n\n.fa-landmark:before {\n  content: \"\\f66f\"; }\n\n.fa-language:before {\n  content: \"\\f1ab\"; }\n\n.fa-laptop:before {\n  content: \"\\f109\"; }\n\n.fa-laptop-code:before {\n  content: \"\\f5fc\"; }\n\n.fa-laptop-medical:before {\n  content: \"\\f812\"; }\n\n.fa-laravel:before {\n  content: \"\\f3bd\"; }\n\n.fa-lastfm:before {\n  content: \"\\f202\"; }\n\n.fa-lastfm-square:before {\n  content: \"\\f203\"; }\n\n.fa-laugh:before {\n  content: \"\\f599\"; }\n\n.fa-laugh-beam:before {\n  content: \"\\f59a\"; }\n\n.fa-laugh-squint:before {\n  content: \"\\f59b\"; }\n\n.fa-laugh-wink:before {\n  content: \"\\f59c\"; }\n\n.fa-layer-group:before {\n  content: \"\\f5fd\"; }\n\n.fa-leaf:before {\n  content: \"\\f06c\"; }\n\n.fa-leanpub:before {\n  content: \"\\f212\"; }\n\n.fa-lemon:before {\n  content: \"\\f094\"; }\n\n.fa-less:before {\n  content: \"\\f41d\"; }\n\n.fa-less-than:before {\n  content: \"\\f536\"; }\n\n.fa-less-than-equal:before {\n  content: \"\\f537\"; }\n\n.fa-level-down-alt:before {\n  content: \"\\f3be\"; }\n\n.fa-level-up-alt:before {\n  content: \"\\f3bf\"; }\n\n.fa-life-ring:before {\n  content: \"\\f1cd\"; }\n\n.fa-lightbulb:before {\n  content: \"\\f0eb\"; }\n\n.fa-line:before {\n  content: \"\\f3c0\"; }\n\n.fa-link:before {\n  content: \"\\f0c1\"; }\n\n.fa-linkedin:before {\n  content: \"\\f08c\"; }\n\n.fa-linkedin-in:before {\n  content: \"\\f0e1\"; }\n\n.fa-linode:before {\n  content: \"\\f2b8\"; }\n\n.fa-linux:before {\n  content: \"\\f17c\"; }\n\n.fa-lira-sign:before {\n  content: \"\\f195\"; }\n\n.fa-list:before {\n  content: \"\\f03a\"; }\n\n.fa-list-alt:before {\n  content: \"\\f022\"; }\n\n.fa-list-ol:before {\n  content: \"\\f0cb\"; }\n\n.fa-list-ul:before {\n  content: \"\\f0ca\"; }\n\n.fa-location-arrow:before {\n  content: \"\\f124\"; }\n\n.fa-lock:before {\n  content: \"\\f023\"; }\n\n.fa-lock-open:before {\n  content: \"\\f3c1\"; }\n\n.fa-long-arrow-alt-down:before {\n  content: \"\\f309\"; }\n\n.fa-long-arrow-alt-left:before {\n  content: \"\\f30a\"; }\n\n.fa-long-arrow-alt-right:before {\n  content: \"\\f30b\"; }\n\n.fa-long-arrow-alt-up:before {\n  content: \"\\f30c\"; }\n\n.fa-low-vision:before {\n  content: \"\\f2a8\"; }\n\n.fa-luggage-cart:before {\n  content: \"\\f59d\"; }\n\n.fa-lyft:before {\n  content: \"\\f3c3\"; }\n\n.fa-magento:before {\n  content: \"\\f3c4\"; }\n\n.fa-magic:before {\n  content: \"\\f0d0\"; }\n\n.fa-magnet:before {\n  content: \"\\f076\"; }\n\n.fa-mail-bulk:before {\n  content: \"\\f674\"; }\n\n.fa-mailchimp:before {\n  content: \"\\f59e\"; }\n\n.fa-male:before {\n  content: \"\\f183\"; }\n\n.fa-mandalorian:before {\n  content: \"\\f50f\"; }\n\n.fa-map:before {\n  content: \"\\f279\"; }\n\n.fa-map-marked:before {\n  content: \"\\f59f\"; }\n\n.fa-map-marked-alt:before {\n  content: \"\\f5a0\"; }\n\n.fa-map-marker:before {\n  content: \"\\f041\"; }\n\n.fa-map-marker-alt:before {\n  content: \"\\f3c5\"; }\n\n.fa-map-pin:before {\n  content: \"\\f276\"; }\n\n.fa-map-signs:before {\n  content: \"\\f277\"; }\n\n.fa-markdown:before {\n  content: \"\\f60f\"; }\n\n.fa-marker:before {\n  content: \"\\f5a1\"; }\n\n.fa-mars:before {\n  content: \"\\f222\"; }\n\n.fa-mars-double:before {\n  content: \"\\f227\"; }\n\n.fa-mars-stroke:before {\n  content: \"\\f229\"; }\n\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\"; }\n\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\"; }\n\n.fa-mask:before {\n  content: \"\\f6fa\"; }\n\n.fa-mastodon:before {\n  content: \"\\f4f6\"; }\n\n.fa-maxcdn:before {\n  content: \"\\f136\"; }\n\n.fa-mdb:before {\n  content: \"\\f8ca\"; }\n\n.fa-medal:before {\n  content: \"\\f5a2\"; }\n\n.fa-medapps:before {\n  content: \"\\f3c6\"; }\n\n.fa-medium:before {\n  content: \"\\f23a\"; }\n\n.fa-medium-m:before {\n  content: \"\\f3c7\"; }\n\n.fa-medkit:before {\n  content: \"\\f0fa\"; }\n\n.fa-medrt:before {\n  content: \"\\f3c8\"; }\n\n.fa-meetup:before {\n  content: \"\\f2e0\"; }\n\n.fa-megaport:before {\n  content: \"\\f5a3\"; }\n\n.fa-meh:before {\n  content: \"\\f11a\"; }\n\n.fa-meh-blank:before {\n  content: \"\\f5a4\"; }\n\n.fa-meh-rolling-eyes:before {\n  content: \"\\f5a5\"; }\n\n.fa-memory:before {\n  content: \"\\f538\"; }\n\n.fa-mendeley:before {\n  content: \"\\f7b3\"; }\n\n.fa-menorah:before {\n  content: \"\\f676\"; }\n\n.fa-mercury:before {\n  content: \"\\f223\"; }\n\n.fa-meteor:before {\n  content: \"\\f753\"; }\n\n.fa-microchip:before {\n  content: \"\\f2db\"; }\n\n.fa-microphone:before {\n  content: \"\\f130\"; }\n\n.fa-microphone-alt:before {\n  content: \"\\f3c9\"; }\n\n.fa-microphone-alt-slash:before {\n  content: \"\\f539\"; }\n\n.fa-microphone-slash:before {\n  content: \"\\f131\"; }\n\n.fa-microscope:before {\n  content: \"\\f610\"; }\n\n.fa-microsoft:before {\n  content: \"\\f3ca\"; }\n\n.fa-minus:before {\n  content: \"\\f068\"; }\n\n.fa-minus-circle:before {\n  content: \"\\f056\"; }\n\n.fa-minus-square:before {\n  content: \"\\f146\"; }\n\n.fa-mitten:before {\n  content: \"\\f7b5\"; }\n\n.fa-mix:before {\n  content: \"\\f3cb\"; }\n\n.fa-mixcloud:before {\n  content: \"\\f289\"; }\n\n.fa-mizuni:before {\n  content: \"\\f3cc\"; }\n\n.fa-mobile:before {\n  content: \"\\f10b\"; }\n\n.fa-mobile-alt:before {\n  content: \"\\f3cd\"; }\n\n.fa-modx:before {\n  content: \"\\f285\"; }\n\n.fa-monero:before {\n  content: \"\\f3d0\"; }\n\n.fa-money-bill:before {\n  content: \"\\f0d6\"; }\n\n.fa-money-bill-alt:before {\n  content: \"\\f3d1\"; }\n\n.fa-money-bill-wave:before {\n  content: \"\\f53a\"; }\n\n.fa-money-bill-wave-alt:before {\n  content: \"\\f53b\"; }\n\n.fa-money-check:before {\n  content: \"\\f53c\"; }\n\n.fa-money-check-alt:before {\n  content: \"\\f53d\"; }\n\n.fa-monument:before {\n  content: \"\\f5a6\"; }\n\n.fa-moon:before {\n  content: \"\\f186\"; }\n\n.fa-mortar-pestle:before {\n  content: \"\\f5a7\"; }\n\n.fa-mosque:before {\n  content: \"\\f678\"; }\n\n.fa-motorcycle:before {\n  content: \"\\f21c\"; }\n\n.fa-mountain:before {\n  content: \"\\f6fc\"; }\n\n.fa-mouse:before {\n  content: \"\\f8cc\"; }\n\n.fa-mouse-pointer:before {\n  content: \"\\f245\"; }\n\n.fa-mug-hot:before {\n  content: \"\\f7b6\"; }\n\n.fa-music:before {\n  content: \"\\f001\"; }\n\n.fa-napster:before {\n  content: \"\\f3d2\"; }\n\n.fa-neos:before {\n  content: \"\\f612\"; }\n\n.fa-network-wired:before {\n  content: \"\\f6ff\"; }\n\n.fa-neuter:before {\n  content: \"\\f22c\"; }\n\n.fa-newspaper:before {\n  content: \"\\f1ea\"; }\n\n.fa-nimblr:before {\n  content: \"\\f5a8\"; }\n\n.fa-node:before {\n  content: \"\\f419\"; }\n\n.fa-node-js:before {\n  content: \"\\f3d3\"; }\n\n.fa-not-equal:before {\n  content: \"\\f53e\"; }\n\n.fa-notes-medical:before {\n  content: \"\\f481\"; }\n\n.fa-npm:before {\n  content: \"\\f3d4\"; }\n\n.fa-ns8:before {\n  content: \"\\f3d5\"; }\n\n.fa-nutritionix:before {\n  content: \"\\f3d6\"; }\n\n.fa-object-group:before {\n  content: \"\\f247\"; }\n\n.fa-object-ungroup:before {\n  content: \"\\f248\"; }\n\n.fa-odnoklassniki:before {\n  content: \"\\f263\"; }\n\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\"; }\n\n.fa-oil-can:before {\n  content: \"\\f613\"; }\n\n.fa-old-republic:before {\n  content: \"\\f510\"; }\n\n.fa-om:before {\n  content: \"\\f679\"; }\n\n.fa-opencart:before {\n  content: \"\\f23d\"; }\n\n.fa-openid:before {\n  content: \"\\f19b\"; }\n\n.fa-opera:before {\n  content: \"\\f26a\"; }\n\n.fa-optin-monster:before {\n  content: \"\\f23c\"; }\n\n.fa-orcid:before {\n  content: \"\\f8d2\"; }\n\n.fa-osi:before {\n  content: \"\\f41a\"; }\n\n.fa-otter:before {\n  content: \"\\f700\"; }\n\n.fa-outdent:before {\n  content: \"\\f03b\"; }\n\n.fa-page4:before {\n  content: \"\\f3d7\"; }\n\n.fa-pagelines:before {\n  content: \"\\f18c\"; }\n\n.fa-pager:before {\n  content: \"\\f815\"; }\n\n.fa-paint-brush:before {\n  content: \"\\f1fc\"; }\n\n.fa-paint-roller:before {\n  content: \"\\f5aa\"; }\n\n.fa-palette:before {\n  content: \"\\f53f\"; }\n\n.fa-palfed:before {\n  content: \"\\f3d8\"; }\n\n.fa-pallet:before {\n  content: \"\\f482\"; }\n\n.fa-paper-plane:before {\n  content: \"\\f1d8\"; }\n\n.fa-paperclip:before {\n  content: \"\\f0c6\"; }\n\n.fa-parachute-box:before {\n  content: \"\\f4cd\"; }\n\n.fa-paragraph:before {\n  content: \"\\f1dd\"; }\n\n.fa-parking:before {\n  content: \"\\f540\"; }\n\n.fa-passport:before {\n  content: \"\\f5ab\"; }\n\n.fa-pastafarianism:before {\n  content: \"\\f67b\"; }\n\n.fa-paste:before {\n  content: \"\\f0ea\"; }\n\n.fa-patreon:before {\n  content: \"\\f3d9\"; }\n\n.fa-pause:before {\n  content: \"\\f04c\"; }\n\n.fa-pause-circle:before {\n  content: \"\\f28b\"; }\n\n.fa-paw:before {\n  content: \"\\f1b0\"; }\n\n.fa-paypal:before {\n  content: \"\\f1ed\"; }\n\n.fa-peace:before {\n  content: \"\\f67c\"; }\n\n.fa-pen:before {\n  content: \"\\f304\"; }\n\n.fa-pen-alt:before {\n  content: \"\\f305\"; }\n\n.fa-pen-fancy:before {\n  content: \"\\f5ac\"; }\n\n.fa-pen-nib:before {\n  content: \"\\f5ad\"; }\n\n.fa-pen-square:before {\n  content: \"\\f14b\"; }\n\n.fa-pencil-alt:before {\n  content: \"\\f303\"; }\n\n.fa-pencil-ruler:before {\n  content: \"\\f5ae\"; }\n\n.fa-penny-arcade:before {\n  content: \"\\f704\"; }\n\n.fa-people-carry:before {\n  content: \"\\f4ce\"; }\n\n.fa-pepper-hot:before {\n  content: \"\\f816\"; }\n\n.fa-percent:before {\n  content: \"\\f295\"; }\n\n.fa-percentage:before {\n  content: \"\\f541\"; }\n\n.fa-periscope:before {\n  content: \"\\f3da\"; }\n\n.fa-person-booth:before {\n  content: \"\\f756\"; }\n\n.fa-phabricator:before {\n  content: \"\\f3db\"; }\n\n.fa-phoenix-framework:before {\n  content: \"\\f3dc\"; }\n\n.fa-phoenix-squadron:before {\n  content: \"\\f511\"; }\n\n.fa-phone:before {\n  content: \"\\f095\"; }\n\n.fa-phone-alt:before {\n  content: \"\\f879\"; }\n\n.fa-phone-slash:before {\n  content: \"\\f3dd\"; }\n\n.fa-phone-square:before {\n  content: \"\\f098\"; }\n\n.fa-phone-square-alt:before {\n  content: \"\\f87b\"; }\n\n.fa-phone-volume:before {\n  content: \"\\f2a0\"; }\n\n.fa-photo-video:before {\n  content: \"\\f87c\"; }\n\n.fa-php:before {\n  content: \"\\f457\"; }\n\n.fa-pied-piper:before {\n  content: \"\\f2ae\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\"; }\n\n.fa-pied-piper-hat:before {\n  content: \"\\f4e5\"; }\n\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\"; }\n\n.fa-piggy-bank:before {\n  content: \"\\f4d3\"; }\n\n.fa-pills:before {\n  content: \"\\f484\"; }\n\n.fa-pinterest:before {\n  content: \"\\f0d2\"; }\n\n.fa-pinterest-p:before {\n  content: \"\\f231\"; }\n\n.fa-pinterest-square:before {\n  content: \"\\f0d3\"; }\n\n.fa-pizza-slice:before {\n  content: \"\\f818\"; }\n\n.fa-place-of-worship:before {\n  content: \"\\f67f\"; }\n\n.fa-plane:before {\n  content: \"\\f072\"; }\n\n.fa-plane-arrival:before {\n  content: \"\\f5af\"; }\n\n.fa-plane-departure:before {\n  content: \"\\f5b0\"; }\n\n.fa-play:before {\n  content: \"\\f04b\"; }\n\n.fa-play-circle:before {\n  content: \"\\f144\"; }\n\n.fa-playstation:before {\n  content: \"\\f3df\"; }\n\n.fa-plug:before {\n  content: \"\\f1e6\"; }\n\n.fa-plus:before {\n  content: \"\\f067\"; }\n\n.fa-plus-circle:before {\n  content: \"\\f055\"; }\n\n.fa-plus-square:before {\n  content: \"\\f0fe\"; }\n\n.fa-podcast:before {\n  content: \"\\f2ce\"; }\n\n.fa-poll:before {\n  content: \"\\f681\"; }\n\n.fa-poll-h:before {\n  content: \"\\f682\"; }\n\n.fa-poo:before {\n  content: \"\\f2fe\"; }\n\n.fa-poo-storm:before {\n  content: \"\\f75a\"; }\n\n.fa-poop:before {\n  content: \"\\f619\"; }\n\n.fa-portrait:before {\n  content: \"\\f3e0\"; }\n\n.fa-pound-sign:before {\n  content: \"\\f154\"; }\n\n.fa-power-off:before {\n  content: \"\\f011\"; }\n\n.fa-pray:before {\n  content: \"\\f683\"; }\n\n.fa-praying-hands:before {\n  content: \"\\f684\"; }\n\n.fa-prescription:before {\n  content: \"\\f5b1\"; }\n\n.fa-prescription-bottle:before {\n  content: \"\\f485\"; }\n\n.fa-prescription-bottle-alt:before {\n  content: \"\\f486\"; }\n\n.fa-print:before {\n  content: \"\\f02f\"; }\n\n.fa-procedures:before {\n  content: \"\\f487\"; }\n\n.fa-product-hunt:before {\n  content: \"\\f288\"; }\n\n.fa-project-diagram:before {\n  content: \"\\f542\"; }\n\n.fa-pushed:before {\n  content: \"\\f3e1\"; }\n\n.fa-puzzle-piece:before {\n  content: \"\\f12e\"; }\n\n.fa-python:before {\n  content: \"\\f3e2\"; }\n\n.fa-qq:before {\n  content: \"\\f1d6\"; }\n\n.fa-qrcode:before {\n  content: \"\\f029\"; }\n\n.fa-question:before {\n  content: \"\\f128\"; }\n\n.fa-question-circle:before {\n  content: \"\\f059\"; }\n\n.fa-quidditch:before {\n  content: \"\\f458\"; }\n\n.fa-quinscape:before {\n  content: \"\\f459\"; }\n\n.fa-quora:before {\n  content: \"\\f2c4\"; }\n\n.fa-quote-left:before {\n  content: \"\\f10d\"; }\n\n.fa-quote-right:before {\n  content: \"\\f10e\"; }\n\n.fa-quran:before {\n  content: \"\\f687\"; }\n\n.fa-r-project:before {\n  content: \"\\f4f7\"; }\n\n.fa-radiation:before {\n  content: \"\\f7b9\"; }\n\n.fa-radiation-alt:before {\n  content: \"\\f7ba\"; }\n\n.fa-rainbow:before {\n  content: \"\\f75b\"; }\n\n.fa-random:before {\n  content: \"\\f074\"; }\n\n.fa-raspberry-pi:before {\n  content: \"\\f7bb\"; }\n\n.fa-ravelry:before {\n  content: \"\\f2d9\"; }\n\n.fa-react:before {\n  content: \"\\f41b\"; }\n\n.fa-reacteurope:before {\n  content: \"\\f75d\"; }\n\n.fa-readme:before {\n  content: \"\\f4d5\"; }\n\n.fa-rebel:before {\n  content: \"\\f1d0\"; }\n\n.fa-receipt:before {\n  content: \"\\f543\"; }\n\n.fa-record-vinyl:before {\n  content: \"\\f8d9\"; }\n\n.fa-recycle:before {\n  content: \"\\f1b8\"; }\n\n.fa-red-river:before {\n  content: \"\\f3e3\"; }\n\n.fa-reddit:before {\n  content: \"\\f1a1\"; }\n\n.fa-reddit-alien:before {\n  content: \"\\f281\"; }\n\n.fa-reddit-square:before {\n  content: \"\\f1a2\"; }\n\n.fa-redhat:before {\n  content: \"\\f7bc\"; }\n\n.fa-redo:before {\n  content: \"\\f01e\"; }\n\n.fa-redo-alt:before {\n  content: \"\\f2f9\"; }\n\n.fa-registered:before {\n  content: \"\\f25d\"; }\n\n.fa-remove-format:before {\n  content: \"\\f87d\"; }\n\n.fa-renren:before {\n  content: \"\\f18b\"; }\n\n.fa-reply:before {\n  content: \"\\f3e5\"; }\n\n.fa-reply-all:before {\n  content: \"\\f122\"; }\n\n.fa-replyd:before {\n  content: \"\\f3e6\"; }\n\n.fa-republican:before {\n  content: \"\\f75e\"; }\n\n.fa-researchgate:before {\n  content: \"\\f4f8\"; }\n\n.fa-resolving:before {\n  content: \"\\f3e7\"; }\n\n.fa-restroom:before {\n  content: \"\\f7bd\"; }\n\n.fa-retweet:before {\n  content: \"\\f079\"; }\n\n.fa-rev:before {\n  content: \"\\f5b2\"; }\n\n.fa-ribbon:before {\n  content: \"\\f4d6\"; }\n\n.fa-ring:before {\n  content: \"\\f70b\"; }\n\n.fa-road:before {\n  content: \"\\f018\"; }\n\n.fa-robot:before {\n  content: \"\\f544\"; }\n\n.fa-rocket:before {\n  content: \"\\f135\"; }\n\n.fa-rocketchat:before {\n  content: \"\\f3e8\"; }\n\n.fa-rockrms:before {\n  content: \"\\f3e9\"; }\n\n.fa-route:before {\n  content: \"\\f4d7\"; }\n\n.fa-rss:before {\n  content: \"\\f09e\"; }\n\n.fa-rss-square:before {\n  content: \"\\f143\"; }\n\n.fa-ruble-sign:before {\n  content: \"\\f158\"; }\n\n.fa-ruler:before {\n  content: \"\\f545\"; }\n\n.fa-ruler-combined:before {\n  content: \"\\f546\"; }\n\n.fa-ruler-horizontal:before {\n  content: \"\\f547\"; }\n\n.fa-ruler-vertical:before {\n  content: \"\\f548\"; }\n\n.fa-running:before {\n  content: \"\\f70c\"; }\n\n.fa-rupee-sign:before {\n  content: \"\\f156\"; }\n\n.fa-sad-cry:before {\n  content: \"\\f5b3\"; }\n\n.fa-sad-tear:before {\n  content: \"\\f5b4\"; }\n\n.fa-safari:before {\n  content: \"\\f267\"; }\n\n.fa-salesforce:before {\n  content: \"\\f83b\"; }\n\n.fa-sass:before {\n  content: \"\\f41e\"; }\n\n.fa-satellite:before {\n  content: \"\\f7bf\"; }\n\n.fa-satellite-dish:before {\n  content: \"\\f7c0\"; }\n\n.fa-save:before {\n  content: \"\\f0c7\"; }\n\n.fa-schlix:before {\n  content: \"\\f3ea\"; }\n\n.fa-school:before {\n  content: \"\\f549\"; }\n\n.fa-screwdriver:before {\n  content: \"\\f54a\"; }\n\n.fa-scribd:before {\n  content: \"\\f28a\"; }\n\n.fa-scroll:before {\n  content: \"\\f70e\"; }\n\n.fa-sd-card:before {\n  content: \"\\f7c2\"; }\n\n.fa-search:before {\n  content: \"\\f002\"; }\n\n.fa-search-dollar:before {\n  content: \"\\f688\"; }\n\n.fa-search-location:before {\n  content: \"\\f689\"; }\n\n.fa-search-minus:before {\n  content: \"\\f010\"; }\n\n.fa-search-plus:before {\n  content: \"\\f00e\"; }\n\n.fa-searchengin:before {\n  content: \"\\f3eb\"; }\n\n.fa-seedling:before {\n  content: \"\\f4d8\"; }\n\n.fa-sellcast:before {\n  content: \"\\f2da\"; }\n\n.fa-sellsy:before {\n  content: \"\\f213\"; }\n\n.fa-server:before {\n  content: \"\\f233\"; }\n\n.fa-servicestack:before {\n  content: \"\\f3ec\"; }\n\n.fa-shapes:before {\n  content: \"\\f61f\"; }\n\n.fa-share:before {\n  content: \"\\f064\"; }\n\n.fa-share-alt:before {\n  content: \"\\f1e0\"; }\n\n.fa-share-alt-square:before {\n  content: \"\\f1e1\"; }\n\n.fa-share-square:before {\n  content: \"\\f14d\"; }\n\n.fa-shekel-sign:before {\n  content: \"\\f20b\"; }\n\n.fa-shield-alt:before {\n  content: \"\\f3ed\"; }\n\n.fa-ship:before {\n  content: \"\\f21a\"; }\n\n.fa-shipping-fast:before {\n  content: \"\\f48b\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\\f214\"; }\n\n.fa-shoe-prints:before {\n  content: \"\\f54b\"; }\n\n.fa-shopping-bag:before {\n  content: \"\\f290\"; }\n\n.fa-shopping-basket:before {\n  content: \"\\f291\"; }\n\n.fa-shopping-cart:before {\n  content: \"\\f07a\"; }\n\n.fa-shopware:before {\n  content: \"\\f5b5\"; }\n\n.fa-shower:before {\n  content: \"\\f2cc\"; }\n\n.fa-shuttle-van:before {\n  content: \"\\f5b6\"; }\n\n.fa-sign:before {\n  content: \"\\f4d9\"; }\n\n.fa-sign-in-alt:before {\n  content: \"\\f2f6\"; }\n\n.fa-sign-language:before {\n  content: \"\\f2a7\"; }\n\n.fa-sign-out-alt:before {\n  content: \"\\f2f5\"; }\n\n.fa-signal:before {\n  content: \"\\f012\"; }\n\n.fa-signature:before {\n  content: \"\\f5b7\"; }\n\n.fa-sim-card:before {\n  content: \"\\f7c4\"; }\n\n.fa-simplybuilt:before {\n  content: \"\\f215\"; }\n\n.fa-sistrix:before {\n  content: \"\\f3ee\"; }\n\n.fa-sitemap:before {\n  content: \"\\f0e8\"; }\n\n.fa-sith:before {\n  content: \"\\f512\"; }\n\n.fa-skating:before {\n  content: \"\\f7c5\"; }\n\n.fa-sketch:before {\n  content: \"\\f7c6\"; }\n\n.fa-skiing:before {\n  content: \"\\f7c9\"; }\n\n.fa-skiing-nordic:before {\n  content: \"\\f7ca\"; }\n\n.fa-skull:before {\n  content: \"\\f54c\"; }\n\n.fa-skull-crossbones:before {\n  content: \"\\f714\"; }\n\n.fa-skyatlas:before {\n  content: \"\\f216\"; }\n\n.fa-skype:before {\n  content: \"\\f17e\"; }\n\n.fa-slack:before {\n  content: \"\\f198\"; }\n\n.fa-slack-hash:before {\n  content: \"\\f3ef\"; }\n\n.fa-slash:before {\n  content: \"\\f715\"; }\n\n.fa-sleigh:before {\n  content: \"\\f7cc\"; }\n\n.fa-sliders-h:before {\n  content: \"\\f1de\"; }\n\n.fa-slideshare:before {\n  content: \"\\f1e7\"; }\n\n.fa-smile:before {\n  content: \"\\f118\"; }\n\n.fa-smile-beam:before {\n  content: \"\\f5b8\"; }\n\n.fa-smile-wink:before {\n  content: \"\\f4da\"; }\n\n.fa-smog:before {\n  content: \"\\f75f\"; }\n\n.fa-smoking:before {\n  content: \"\\f48d\"; }\n\n.fa-smoking-ban:before {\n  content: \"\\f54d\"; }\n\n.fa-sms:before {\n  content: \"\\f7cd\"; }\n\n.fa-snapchat:before {\n  content: \"\\f2ab\"; }\n\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\"; }\n\n.fa-snapchat-square:before {\n  content: \"\\f2ad\"; }\n\n.fa-snowboarding:before {\n  content: \"\\f7ce\"; }\n\n.fa-snowflake:before {\n  content: \"\\f2dc\"; }\n\n.fa-snowman:before {\n  content: \"\\f7d0\"; }\n\n.fa-snowplow:before {\n  content: \"\\f7d2\"; }\n\n.fa-socks:before {\n  content: \"\\f696\"; }\n\n.fa-solar-panel:before {\n  content: \"\\f5ba\"; }\n\n.fa-sort:before {\n  content: \"\\f0dc\"; }\n\n.fa-sort-alpha-down:before {\n  content: \"\\f15d\"; }\n\n.fa-sort-alpha-down-alt:before {\n  content: \"\\f881\"; }\n\n.fa-sort-alpha-up:before {\n  content: \"\\f15e\"; }\n\n.fa-sort-alpha-up-alt:before {\n  content: \"\\f882\"; }\n\n.fa-sort-amount-down:before {\n  content: \"\\f160\"; }\n\n.fa-sort-amount-down-alt:before {\n  content: \"\\f884\"; }\n\n.fa-sort-amount-up:before {\n  content: \"\\f161\"; }\n\n.fa-sort-amount-up-alt:before {\n  content: \"\\f885\"; }\n\n.fa-sort-down:before {\n  content: \"\\f0dd\"; }\n\n.fa-sort-numeric-down:before {\n  content: \"\\f162\"; }\n\n.fa-sort-numeric-down-alt:before {\n  content: \"\\f886\"; }\n\n.fa-sort-numeric-up:before {\n  content: \"\\f163\"; }\n\n.fa-sort-numeric-up-alt:before {\n  content: \"\\f887\"; }\n\n.fa-sort-up:before {\n  content: \"\\f0de\"; }\n\n.fa-soundcloud:before {\n  content: \"\\f1be\"; }\n\n.fa-sourcetree:before {\n  content: \"\\f7d3\"; }\n\n.fa-spa:before {\n  content: \"\\f5bb\"; }\n\n.fa-space-shuttle:before {\n  content: \"\\f197\"; }\n\n.fa-speakap:before {\n  content: \"\\f3f3\"; }\n\n.fa-speaker-deck:before {\n  content: \"\\f83c\"; }\n\n.fa-spell-check:before {\n  content: \"\\f891\"; }\n\n.fa-spider:before {\n  content: \"\\f717\"; }\n\n.fa-spinner:before {\n  content: \"\\f110\"; }\n\n.fa-splotch:before {\n  content: \"\\f5bc\"; }\n\n.fa-spotify:before {\n  content: \"\\f1bc\"; }\n\n.fa-spray-can:before {\n  content: \"\\f5bd\"; }\n\n.fa-square:before {\n  content: \"\\f0c8\"; }\n\n.fa-square-full:before {\n  content: \"\\f45c\"; }\n\n.fa-square-root-alt:before {\n  content: \"\\f698\"; }\n\n.fa-squarespace:before {\n  content: \"\\f5be\"; }\n\n.fa-stack-exchange:before {\n  content: \"\\f18d\"; }\n\n.fa-stack-overflow:before {\n  content: \"\\f16c\"; }\n\n.fa-stackpath:before {\n  content: \"\\f842\"; }\n\n.fa-stamp:before {\n  content: \"\\f5bf\"; }\n\n.fa-star:before {\n  content: \"\\f005\"; }\n\n.fa-star-and-crescent:before {\n  content: \"\\f699\"; }\n\n.fa-star-half:before {\n  content: \"\\f089\"; }\n\n.fa-star-half-alt:before {\n  content: \"\\f5c0\"; }\n\n.fa-star-of-david:before {\n  content: \"\\f69a\"; }\n\n.fa-star-of-life:before {\n  content: \"\\f621\"; }\n\n.fa-staylinked:before {\n  content: \"\\f3f5\"; }\n\n.fa-steam:before {\n  content: \"\\f1b6\"; }\n\n.fa-steam-square:before {\n  content: \"\\f1b7\"; }\n\n.fa-steam-symbol:before {\n  content: \"\\f3f6\"; }\n\n.fa-step-backward:before {\n  content: \"\\f048\"; }\n\n.fa-step-forward:before {\n  content: \"\\f051\"; }\n\n.fa-stethoscope:before {\n  content: \"\\f0f1\"; }\n\n.fa-sticker-mule:before {\n  content: \"\\f3f7\"; }\n\n.fa-sticky-note:before {\n  content: \"\\f249\"; }\n\n.fa-stop:before {\n  content: \"\\f04d\"; }\n\n.fa-stop-circle:before {\n  content: \"\\f28d\"; }\n\n.fa-stopwatch:before {\n  content: \"\\f2f2\"; }\n\n.fa-store:before {\n  content: \"\\f54e\"; }\n\n.fa-store-alt:before {\n  content: \"\\f54f\"; }\n\n.fa-strava:before {\n  content: \"\\f428\"; }\n\n.fa-stream:before {\n  content: \"\\f550\"; }\n\n.fa-street-view:before {\n  content: \"\\f21d\"; }\n\n.fa-strikethrough:before {\n  content: \"\\f0cc\"; }\n\n.fa-stripe:before {\n  content: \"\\f429\"; }\n\n.fa-stripe-s:before {\n  content: \"\\f42a\"; }\n\n.fa-stroopwafel:before {\n  content: \"\\f551\"; }\n\n.fa-studiovinari:before {\n  content: \"\\f3f8\"; }\n\n.fa-stumbleupon:before {\n  content: \"\\f1a4\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\"; }\n\n.fa-subscript:before {\n  content: \"\\f12c\"; }\n\n.fa-subway:before {\n  content: \"\\f239\"; }\n\n.fa-suitcase:before {\n  content: \"\\f0f2\"; }\n\n.fa-suitcase-rolling:before {\n  content: \"\\f5c1\"; }\n\n.fa-sun:before {\n  content: \"\\f185\"; }\n\n.fa-superpowers:before {\n  content: \"\\f2dd\"; }\n\n.fa-superscript:before {\n  content: \"\\f12b\"; }\n\n.fa-supple:before {\n  content: \"\\f3f9\"; }\n\n.fa-surprise:before {\n  content: \"\\f5c2\"; }\n\n.fa-suse:before {\n  content: \"\\f7d6\"; }\n\n.fa-swatchbook:before {\n  content: \"\\f5c3\"; }\n\n.fa-swift:before {\n  content: \"\\f8e1\"; }\n\n.fa-swimmer:before {\n  content: \"\\f5c4\"; }\n\n.fa-swimming-pool:before {\n  content: \"\\f5c5\"; }\n\n.fa-symfony:before {\n  content: \"\\f83d\"; }\n\n.fa-synagogue:before {\n  content: \"\\f69b\"; }\n\n.fa-sync:before {\n  content: \"\\f021\"; }\n\n.fa-sync-alt:before {\n  content: \"\\f2f1\"; }\n\n.fa-syringe:before {\n  content: \"\\f48e\"; }\n\n.fa-table:before {\n  content: \"\\f0ce\"; }\n\n.fa-table-tennis:before {\n  content: \"\\f45d\"; }\n\n.fa-tablet:before {\n  content: \"\\f10a\"; }\n\n.fa-tablet-alt:before {\n  content: \"\\f3fa\"; }\n\n.fa-tablets:before {\n  content: \"\\f490\"; }\n\n.fa-tachometer-alt:before {\n  content: \"\\f3fd\"; }\n\n.fa-tag:before {\n  content: \"\\f02b\"; }\n\n.fa-tags:before {\n  content: \"\\f02c\"; }\n\n.fa-tape:before {\n  content: \"\\f4db\"; }\n\n.fa-tasks:before {\n  content: \"\\f0ae\"; }\n\n.fa-taxi:before {\n  content: \"\\f1ba\"; }\n\n.fa-teamspeak:before {\n  content: \"\\f4f9\"; }\n\n.fa-teeth:before {\n  content: \"\\f62e\"; }\n\n.fa-teeth-open:before {\n  content: \"\\f62f\"; }\n\n.fa-telegram:before {\n  content: \"\\f2c6\"; }\n\n.fa-telegram-plane:before {\n  content: \"\\f3fe\"; }\n\n.fa-temperature-high:before {\n  content: \"\\f769\"; }\n\n.fa-temperature-low:before {\n  content: \"\\f76b\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\"; }\n\n.fa-tenge:before {\n  content: \"\\f7d7\"; }\n\n.fa-terminal:before {\n  content: \"\\f120\"; }\n\n.fa-text-height:before {\n  content: \"\\f034\"; }\n\n.fa-text-width:before {\n  content: \"\\f035\"; }\n\n.fa-th:before {\n  content: \"\\f00a\"; }\n\n.fa-th-large:before {\n  content: \"\\f009\"; }\n\n.fa-th-list:before {\n  content: \"\\f00b\"; }\n\n.fa-the-red-yeti:before {\n  content: \"\\f69d\"; }\n\n.fa-theater-masks:before {\n  content: \"\\f630\"; }\n\n.fa-themeco:before {\n  content: \"\\f5c6\"; }\n\n.fa-themeisle:before {\n  content: \"\\f2b2\"; }\n\n.fa-thermometer:before {\n  content: \"\\f491\"; }\n\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\"; }\n\n.fa-thermometer-full:before {\n  content: \"\\f2c7\"; }\n\n.fa-thermometer-half:before {\n  content: \"\\f2c9\"; }\n\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\"; }\n\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\"; }\n\n.fa-think-peaks:before {\n  content: \"\\f731\"; }\n\n.fa-thumbs-down:before {\n  content: \"\\f165\"; }\n\n.fa-thumbs-up:before {\n  content: \"\\f164\"; }\n\n.fa-thumbtack:before {\n  content: \"\\f08d\"; }\n\n.fa-ticket-alt:before {\n  content: \"\\f3ff\"; }\n\n.fa-times:before {\n  content: \"\\f00d\"; }\n\n.fa-times-circle:before {\n  content: \"\\f057\"; }\n\n.fa-tint:before {\n  content: \"\\f043\"; }\n\n.fa-tint-slash:before {\n  content: \"\\f5c7\"; }\n\n.fa-tired:before {\n  content: \"\\f5c8\"; }\n\n.fa-toggle-off:before {\n  content: \"\\f204\"; }\n\n.fa-toggle-on:before {\n  content: \"\\f205\"; }\n\n.fa-toilet:before {\n  content: \"\\f7d8\"; }\n\n.fa-toilet-paper:before {\n  content: \"\\f71e\"; }\n\n.fa-toolbox:before {\n  content: \"\\f552\"; }\n\n.fa-tools:before {\n  content: \"\\f7d9\"; }\n\n.fa-tooth:before {\n  content: \"\\f5c9\"; }\n\n.fa-torah:before {\n  content: \"\\f6a0\"; }\n\n.fa-torii-gate:before {\n  content: \"\\f6a1\"; }\n\n.fa-tractor:before {\n  content: \"\\f722\"; }\n\n.fa-trade-federation:before {\n  content: \"\\f513\"; }\n\n.fa-trademark:before {\n  content: \"\\f25c\"; }\n\n.fa-traffic-light:before {\n  content: \"\\f637\"; }\n\n.fa-train:before {\n  content: \"\\f238\"; }\n\n.fa-tram:before {\n  content: \"\\f7da\"; }\n\n.fa-transgender:before {\n  content: \"\\f224\"; }\n\n.fa-transgender-alt:before {\n  content: \"\\f225\"; }\n\n.fa-trash:before {\n  content: \"\\f1f8\"; }\n\n.fa-trash-alt:before {\n  content: \"\\f2ed\"; }\n\n.fa-trash-restore:before {\n  content: \"\\f829\"; }\n\n.fa-trash-restore-alt:before {\n  content: \"\\f82a\"; }\n\n.fa-tree:before {\n  content: \"\\f1bb\"; }\n\n.fa-trello:before {\n  content: \"\\f181\"; }\n\n.fa-tripadvisor:before {\n  content: \"\\f262\"; }\n\n.fa-trophy:before {\n  content: \"\\f091\"; }\n\n.fa-truck:before {\n  content: \"\\f0d1\"; }\n\n.fa-truck-loading:before {\n  content: \"\\f4de\"; }\n\n.fa-truck-monster:before {\n  content: \"\\f63b\"; }\n\n.fa-truck-moving:before {\n  content: \"\\f4df\"; }\n\n.fa-truck-pickup:before {\n  content: \"\\f63c\"; }\n\n.fa-tshirt:before {\n  content: \"\\f553\"; }\n\n.fa-tty:before {\n  content: \"\\f1e4\"; }\n\n.fa-tumblr:before {\n  content: \"\\f173\"; }\n\n.fa-tumblr-square:before {\n  content: \"\\f174\"; }\n\n.fa-tv:before {\n  content: \"\\f26c\"; }\n\n.fa-twitch:before {\n  content: \"\\f1e8\"; }\n\n.fa-twitter:before {\n  content: \"\\f099\"; }\n\n.fa-twitter-square:before {\n  content: \"\\f081\"; }\n\n.fa-typo3:before {\n  content: \"\\f42b\"; }\n\n.fa-uber:before {\n  content: \"\\f402\"; }\n\n.fa-ubuntu:before {\n  content: \"\\f7df\"; }\n\n.fa-uikit:before {\n  content: \"\\f403\"; }\n\n.fa-umbraco:before {\n  content: \"\\f8e8\"; }\n\n.fa-umbrella:before {\n  content: \"\\f0e9\"; }\n\n.fa-umbrella-beach:before {\n  content: \"\\f5ca\"; }\n\n.fa-underline:before {\n  content: \"\\f0cd\"; }\n\n.fa-undo:before {\n  content: \"\\f0e2\"; }\n\n.fa-undo-alt:before {\n  content: \"\\f2ea\"; }\n\n.fa-uniregistry:before {\n  content: \"\\f404\"; }\n\n.fa-universal-access:before {\n  content: \"\\f29a\"; }\n\n.fa-university:before {\n  content: \"\\f19c\"; }\n\n.fa-unlink:before {\n  content: \"\\f127\"; }\n\n.fa-unlock:before {\n  content: \"\\f09c\"; }\n\n.fa-unlock-alt:before {\n  content: \"\\f13e\"; }\n\n.fa-untappd:before {\n  content: \"\\f405\"; }\n\n.fa-upload:before {\n  content: \"\\f093\"; }\n\n.fa-ups:before {\n  content: \"\\f7e0\"; }\n\n.fa-usb:before {\n  content: \"\\f287\"; }\n\n.fa-user:before {\n  content: \"\\f007\"; }\n\n.fa-user-alt:before {\n  content: \"\\f406\"; }\n\n.fa-user-alt-slash:before {\n  content: \"\\f4fa\"; }\n\n.fa-user-astronaut:before {\n  content: \"\\f4fb\"; }\n\n.fa-user-check:before {\n  content: \"\\f4fc\"; }\n\n.fa-user-circle:before {\n  content: \"\\f2bd\"; }\n\n.fa-user-clock:before {\n  content: \"\\f4fd\"; }\n\n.fa-user-cog:before {\n  content: \"\\f4fe\"; }\n\n.fa-user-edit:before {\n  content: \"\\f4ff\"; }\n\n.fa-user-friends:before {\n  content: \"\\f500\"; }\n\n.fa-user-graduate:before {\n  content: \"\\f501\"; }\n\n.fa-user-injured:before {\n  content: \"\\f728\"; }\n\n.fa-user-lock:before {\n  content: \"\\f502\"; }\n\n.fa-user-md:before {\n  content: \"\\f0f0\"; }\n\n.fa-user-minus:before {\n  content: \"\\f503\"; }\n\n.fa-user-ninja:before {\n  content: \"\\f504\"; }\n\n.fa-user-nurse:before {\n  content: \"\\f82f\"; }\n\n.fa-user-plus:before {\n  content: \"\\f234\"; }\n\n.fa-user-secret:before {\n  content: \"\\f21b\"; }\n\n.fa-user-shield:before {\n  content: \"\\f505\"; }\n\n.fa-user-slash:before {\n  content: \"\\f506\"; }\n\n.fa-user-tag:before {\n  content: \"\\f507\"; }\n\n.fa-user-tie:before {\n  content: \"\\f508\"; }\n\n.fa-user-times:before {\n  content: \"\\f235\"; }\n\n.fa-users:before {\n  content: \"\\f0c0\"; }\n\n.fa-users-cog:before {\n  content: \"\\f509\"; }\n\n.fa-usps:before {\n  content: \"\\f7e1\"; }\n\n.fa-ussunnah:before {\n  content: \"\\f407\"; }\n\n.fa-utensil-spoon:before {\n  content: \"\\f2e5\"; }\n\n.fa-utensils:before {\n  content: \"\\f2e7\"; }\n\n.fa-vaadin:before {\n  content: \"\\f408\"; }\n\n.fa-vector-square:before {\n  content: \"\\f5cb\"; }\n\n.fa-venus:before {\n  content: \"\\f221\"; }\n\n.fa-venus-double:before {\n  content: \"\\f226\"; }\n\n.fa-venus-mars:before {\n  content: \"\\f228\"; }\n\n.fa-viacoin:before {\n  content: \"\\f237\"; }\n\n.fa-viadeo:before {\n  content: \"\\f2a9\"; }\n\n.fa-viadeo-square:before {\n  content: \"\\f2aa\"; }\n\n.fa-vial:before {\n  content: \"\\f492\"; }\n\n.fa-vials:before {\n  content: \"\\f493\"; }\n\n.fa-viber:before {\n  content: \"\\f409\"; }\n\n.fa-video:before {\n  content: \"\\f03d\"; }\n\n.fa-video-slash:before {\n  content: \"\\f4e2\"; }\n\n.fa-vihara:before {\n  content: \"\\f6a7\"; }\n\n.fa-vimeo:before {\n  content: \"\\f40a\"; }\n\n.fa-vimeo-square:before {\n  content: \"\\f194\"; }\n\n.fa-vimeo-v:before {\n  content: \"\\f27d\"; }\n\n.fa-vine:before {\n  content: \"\\f1ca\"; }\n\n.fa-vk:before {\n  content: \"\\f189\"; }\n\n.fa-vnv:before {\n  content: \"\\f40b\"; }\n\n.fa-voicemail:before {\n  content: \"\\f897\"; }\n\n.fa-volleyball-ball:before {\n  content: \"\\f45f\"; }\n\n.fa-volume-down:before {\n  content: \"\\f027\"; }\n\n.fa-volume-mute:before {\n  content: \"\\f6a9\"; }\n\n.fa-volume-off:before {\n  content: \"\\f026\"; }\n\n.fa-volume-up:before {\n  content: \"\\f028\"; }\n\n.fa-vote-yea:before {\n  content: \"\\f772\"; }\n\n.fa-vr-cardboard:before {\n  content: \"\\f729\"; }\n\n.fa-vuejs:before {\n  content: \"\\f41f\"; }\n\n.fa-walking:before {\n  content: \"\\f554\"; }\n\n.fa-wallet:before {\n  content: \"\\f555\"; }\n\n.fa-warehouse:before {\n  content: \"\\f494\"; }\n\n.fa-water:before {\n  content: \"\\f773\"; }\n\n.fa-wave-square:before {\n  content: \"\\f83e\"; }\n\n.fa-waze:before {\n  content: \"\\f83f\"; }\n\n.fa-weebly:before {\n  content: \"\\f5cc\"; }\n\n.fa-weibo:before {\n  content: \"\\f18a\"; }\n\n.fa-weight:before {\n  content: \"\\f496\"; }\n\n.fa-weight-hanging:before {\n  content: \"\\f5cd\"; }\n\n.fa-weixin:before {\n  content: \"\\f1d7\"; }\n\n.fa-whatsapp:before {\n  content: \"\\f232\"; }\n\n.fa-whatsapp-square:before {\n  content: \"\\f40c\"; }\n\n.fa-wheelchair:before {\n  content: \"\\f193\"; }\n\n.fa-whmcs:before {\n  content: \"\\f40d\"; }\n\n.fa-wifi:before {\n  content: \"\\f1eb\"; }\n\n.fa-wikipedia-w:before {\n  content: \"\\f266\"; }\n\n.fa-wind:before {\n  content: \"\\f72e\"; }\n\n.fa-window-close:before {\n  content: \"\\f410\"; }\n\n.fa-window-maximize:before {\n  content: \"\\f2d0\"; }\n\n.fa-window-minimize:before {\n  content: \"\\f2d1\"; }\n\n.fa-window-restore:before {\n  content: \"\\f2d2\"; }\n\n.fa-windows:before {\n  content: \"\\f17a\"; }\n\n.fa-wine-bottle:before {\n  content: \"\\f72f\"; }\n\n.fa-wine-glass:before {\n  content: \"\\f4e3\"; }\n\n.fa-wine-glass-alt:before {\n  content: \"\\f5ce\"; }\n\n.fa-wix:before {\n  content: \"\\f5cf\"; }\n\n.fa-wizards-of-the-coast:before {\n  content: \"\\f730\"; }\n\n.fa-wolf-pack-battalion:before {\n  content: \"\\f514\"; }\n\n.fa-won-sign:before {\n  content: \"\\f159\"; }\n\n.fa-wordpress:before {\n  content: \"\\f19a\"; }\n\n.fa-wordpress-simple:before {\n  content: \"\\f411\"; }\n\n.fa-wpbeginner:before {\n  content: \"\\f297\"; }\n\n.fa-wpexplorer:before {\n  content: \"\\f2de\"; }\n\n.fa-wpforms:before {\n  content: \"\\f298\"; }\n\n.fa-wpressr:before {\n  content: \"\\f3e4\"; }\n\n.fa-wrench:before {\n  content: \"\\f0ad\"; }\n\n.fa-x-ray:before {\n  content: \"\\f497\"; }\n\n.fa-xbox:before {\n  content: \"\\f412\"; }\n\n.fa-xing:before {\n  content: \"\\f168\"; }\n\n.fa-xing-square:before {\n  content: \"\\f169\"; }\n\n.fa-y-combinator:before {\n  content: \"\\f23b\"; }\n\n.fa-yahoo:before {\n  content: \"\\f19e\"; }\n\n.fa-yammer:before {\n  content: \"\\f840\"; }\n\n.fa-yandex:before {\n  content: \"\\f413\"; }\n\n.fa-yandex-international:before {\n  content: \"\\f414\"; }\n\n.fa-yarn:before {\n  content: \"\\f7e3\"; }\n\n.fa-yelp:before {\n  content: \"\\f1e9\"; }\n\n.fa-yen-sign:before {\n  content: \"\\f157\"; }\n\n.fa-yin-yang:before {\n  content: \"\\f6ad\"; }\n\n.fa-yoast:before {\n  content: \"\\f2b1\"; }\n\n.fa-youtube:before {\n  content: \"\\f167\"; }\n\n.fa-youtube-square:before {\n  content: \"\\f431\"; }\n\n.fa-zhihu:before {\n  content: \"\\f63f\"; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n@font-face {\n  font-family: 'Font Awesome 5 Brands';\n  font-style: normal;\n  font-weight: normal;\n  font-display: auto;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\"); }\n\n.fab {\n  font-family: 'Font Awesome 5 Brands'; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  src: url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\"); }\n\n.far {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 400; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 900;\n  font-display: auto;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  src: url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\"); }\n\n.fa,\n.fas {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900; }\n", ""]);



/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cccc9d29470e879e40eb70249d9a2705.woff2";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c5e0f14f88a828261ba01558ce2bf26f.woff";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "06147b6cd88c7346cecd1edd060cd5de.ttf";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a9c4bb7348f42626454c988dbde1d0a0.svg";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f5f2566b93e89391da4db79462b8078b.woff2";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c4f508e7c4f01a9eeba7f08155cde04e.woff";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "65b286af947c0d982ca01b40e1fcab38.ttf";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7b9568e6389b1f8ae0902cd39665fc1e.svg";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "44d537ab79f921fde5a28b2c1636f397.woff2";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "333bae208dc363746961b234ff6c2500.woff";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0bff33a5fd7ec390235476b4859747a0.ttf";

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c2801fb415f03c7b170934769d7b5397.svg";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// Module
exports.push([module.i, "/* \n  plugins & globals\n---------------------------------------------------------------------------------------------------\n*/\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ncaption,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  border: 0;\n  vertical-align: baseline;\n  font-size: 100%;\n}\n/* \n    base styles and definitions\n---------------------------------------------------------------------------------------------------\n*/\n/* \n    code\n---------------------------------------------------------------------------------------------------\n*/\n/* \n    box / banner\n---------------------------------------------------------------------------------------------------\n*/\n/* \n    button\n---------------------------------------------------------------------------------------------------\n*/\n/* \n    green\n---------------------------------------------------------------------------------------------------\n*/\n/* \n    gray\n---------------------------------------------------------------------------------------------------\n*/\n/* \n    purple\n---------------------------------------------------------------------------------------------------\n*/\n/* \n    transparent\n---------------------------------------------------------------------------------------------------\n*/\n/* \n    light\n---------------------------------------------------------------------------------------------------\n*/\nbody {\n  line-height: 1.4;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ncaption,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  line-height: 1.4;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n   -ms-text-size-adjust: none;\n       text-size-adjust: none;\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nbody.is-loading *,\nbody.is-loading *:before,\nbody.is-loading *:after {\n  -webkit-animation: none !important;\n  animation: none !important;\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n/* \n  atom\n---------------------------------------------------------------------------------------------------\n*/\na {\n  border-bottom: 0;\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\na:hover {\n  text-transform: lowercase;\n  text-decoration: none;\n}\na {\n  color: darkgray;\n}\na:hover {\n  color: red;\n}\na.link-h-padding:nth-child(1) {\n  padding-left: 0;\n}\na.link-h-padding {\n  padding-left: 1.5rem;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 800 !important;\n  letter-spacing: 0.225rem !important;\n}\nh1 a,\nh2 a,\nh3 a,\nh4 a,\nh5 a,\nh6 a {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\nh1 a,\nh2 a,\nh3 a,\nh4 a,\nh5 a,\nh6 a {\n  font-weight: 800 !important;\n  letter-spacing: 0.225rem !important;\n}\nh1 {\n  font-size: 1.6rem !important;\n  line-height: 1.6rem !important;\n}\nh2 {\n  font-size: 1.5rem !important;\n  line-height: 1.5rem !important;\n}\nh3 {\n  font-size: 1.4rem !important;\n  line-height: 1.5rem !important;\n}\nh4 {\n  font-size: 1rem !important;\n  line-height: 1.5rem !important;\n}\nh5 {\n  font-size: 0.9rem !important;\n  line-height: 1.5rem !important;\n}\nh6 {\n  font-size: 0.8rem !important;\n  line-height: 1.5rem !important;\n}\n.abstract {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.abstract {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\n.abstract {\n  font-size: 1.3rem;\n  font-weight: 700;\n}\nblockquote,\nq {\n  quotes: none;\n  margin: 0;\n  padding: 0;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\nblockquote {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\nblockquote {\n  font-size: 1.3rem;\n  font-weight: 400;\n  line-height: 1.6rem !important;\n  letter-spacing: 0.2rem !important;\n}\nblockquote:before,\nblockquote:after {\n  display: inline-block;\n  content: '\"';\n}\nblockquote {\n  padding: 1rem;\n  text-align: center;\n  position: relative;\n}\nblockquote + * {\n  padding: 3rem 1rem;\n}\ncode {\n  margin: 0;\n  padding: 0;\n  border-radius: 0;\n}\ncode {\n  font-family: \"Courier New\", Courier, monospace;\n  text-decoration: none;\n  text-transform: lowercase;\n}\ncode {\n  color: darkgray;\n  background-color: gray;\n}\ncode {\n  overflow: auto;\n  font-size: 0.75rem;\n  border-radius: 10px;\n}\nhr {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\nhr {\n  border: 0;\n  border-bottom: solid 2px darkgray;\n  margin: 1rem 0;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n.image {\n  border-radius: 0.5rem;\n  border: 0;\n  display: inline-block;\n  position: relative;\n}\n.image img {\n  border-radius: 0.5rem;\n  display: block;\n}\n.img-padding {\n  padding-top: 1rem;\n  padding-bottom: 2rem;\n}\n.image.left {\n  float: left;\n  margin: 0 2rem 2rem 0;\n  top: 0.25em;\n}\n.image.right {\n  float: right;\n  margin: 0 0 2rem 2rem;\n  top: 0.25rem;\n}\n.image.left,\n.image.right {\n  max-width: 40%;\n}\n.image.left img,\n.image.right img {\n  width: 100%;\n}\n.image.fit {\n  display: block;\n  margin: 0 0 2rem 0;\n  width: 100%;\n}\n.image.fit img {\n  width: 100%;\n}\npre {\n  overflow: auto;\n  border-radius: 10px;\n}\npre {\n  -webkit-overflow-scrolling: touch;\n  font-family: \"Courier New\", monospace;\n  font-size: 0.9rem;\n  margin: 0 0 2rem 0;\n}\npre code {\n  display: block;\n  line-height: 1.75rem;\n  padding: 1em 1.5rem;\n  overflow-x: auto;\n}\np {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\np {\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25rem;\n  letter-spacing: 0.1rem;\n}\nlabel {\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25rem;\n  letter-spacing: 0.1rem;\n}\nstrong,\nb {\n  font-weight: 600;\n}\nem,\ni {\n  font-style: italic;\n}\ni a {\n  margin: 0.5rem;\n  font-style: italic;\n}\nsub {\n  font-size: 0.8rem;\n  position: relative;\n  top: 0.5em;\n}\nsup {\n  font-size: 0.8rem;\n  position: relative;\n  top: -0.5rem;\n}\n/* \n  molecule\n---------------------------------------------------------------------------------------------------\n*/\n.box {\n  border-radius: 5px;\n  border: thin solid darkgray;\n  margin: 0.5rem;\n  padding: 0.5rem;\n  text-align: center;\n}\n.box-four-in-row {\n  width: 20%;\n}\n.box-three-in-row {\n  width: 30%;\n}\n.box > :last-child,\n.box > :last-child > :last-child,\n.box > :last-child > :last-child > :last-child {\n  margin-bottom: 0;\n}\n.box.alt {\n  border: 0;\n  border-radius: 0;\n  padding: 0;\n}\n.box-equal {\n  display: table-cell;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.box-round-corner {\n  border-radius: 5px;\n  white-space: normal;\n  padding: 1.25rem;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/* \n    a.button\n---------------------------------------------------------------------------------------------------\n*/\na.button {\n  border-radius: 5px;\n  margin-top: 20px;\n  font-family: \"Lato\", sans-serif !important;\n  font-size: 1rem;\n  background: transparent;\n  color: whitesmoke !important;\n  background: black !important;\n  background-color: black !important;\n  text-transform: lowercase !important;\n  text-decoration: none !important;\n}\na.button:hover {\n  background: rgba(0, 0, 0, 0.5) !important;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n/* \n    a.button.special\n---------------------------------------------------------------------------------------------------\n*/\na.button.special {\n  border-radius: 3px;\n  margin-top: 20px;\n  font-family: \"Lato\", sans-serif !important;\n  font-size: 1rem;\n  color: whitesmoke !important;\n  background: #ed4933 !important;\n  background-color: #ed4933 !important;\n  text-transform: lowercase !important;\n  text-decoration: none !important;\n}\na.button.special:hover {\n  background: #ef5e4a !important;\n  background-color: #ef5e4a !important;\n}\n/* \n    selectors\n---------------------------------------------------------------------------------------------------\n*/\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"],\nbutton,\n.button {\n  border-radius: 0.75rem;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  height: 3.125rem;\n  letter-spacing: 0.225rem;\n  line-height: 3.125rem;\n  padding: 0 2.75rem;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  box-shadow: inset 0 0 0 2px whitesmoke;\n}\ninput[type=\"submit\"].icon:before,\ninput[type=\"reset\"].icon:before,\ninput[type=\"button\"].icon:before,\nbutton.icon:before,\n.button.icon:before {\n  margin-right: 0.5rem;\n}\ninput[type=\"submit\"].fit,\ninput[type=\"reset\"].fit,\ninput[type=\"button\"].fit,\nbutton.fit,\n.button.fit {\n  display: block;\n  margin: 0 0 1rem 0;\n  width: 100%;\n}\ninput[type=\"submit\"].small,\ninput[type=\"reset\"].small,\ninput[type=\"button\"].small,\nbutton.small,\n.button.small {\n  border-radius: 0.35rem;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 0.6rem;\n  font-weight: normal;\n  height: 2.125rem;\n  letter-spacing: 0.225rem;\n  line-height: 2.125rem;\n  padding: 0 1.25rem;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  box-shadow: inset 0 0 0 2px whitesmoke;\n}\ninput[type=\"submit\"].big,\ninput[type=\"reset\"].big,\ninput[type=\"button\"].big,\nbutton.big,\n.button.big {\n  font-size: 1.35rem;\n}\ninput[type=\"submit\"].disabled,\ninput[type=\"submit\"]:disabled,\ninput[type=\"reset\"].disabled,\ninput[type=\"reset\"]:disabled,\ninput[type=\"button\"].disabled,\ninput[type=\"button\"]:disabled,\nbutton.disabled,\nbutton:disabled,\n.button.disabled,\n.button:disabled {\n  -moz-pointer-events: none;\n  -webkit-pointer-events: none;\n  -ms-pointer-events: none;\n  pointer-events: none;\n  opacity: 0.25;\n}\n/* \n    media queries\n---------------------------------------------------------------------------------------------------\n*/\n@media screen and (max-width: 736px) {\n  input[type=\"submit\"],\n  input[type=\"reset\"],\n  input[type=\"button\"],\n  button,\n  .button {\n    height: 3.75rem;\n    line-height: 3.75rem;\n  }\n}\n/* \n    li\n---------------------------------------------------------------------------------------------------\n*/\nli {\n  font-size: 1rem;\n  line-height: 1.6;\n  letter-spacing: 0.15rem;\n}\nli {\n  color: whitesmoke;\n  font-weight: 400;\n}\n/* \n    ul\n---------------------------------------------------------------------------------------------------\n*/\nul {\n  margin-left: 0.2rem;\n}\n* + ul {\n  margin-bottom: 0.3rem;\n}\nul {\n  list-style: disc;\n  margin: 0 0 0.5rem 0;\n  padding-left: 0;\n}\nul li {\n  list-style-position: inside;\n  padding-left: 0.5rem;\n}\n/* \n    ol\n---------------------------------------------------------------------------------------------------\n*/\nol {\n  margin-left: 0.25rem;\n}\n* + ol {\n  margin-bottom: 0.3rem;\n}\nol {\n  list-style: decimal;\n  margin: 0 0 2rem 0;\n  padding-left: 1.25rem;\n}\nol li {\n  padding-left: 0.25rem;\n}\n/* \n    dl\n---------------------------------------------------------------------------------------------------\n*/\ndl {\n  margin: 0 0 2rem 0;\n}\n/* \n    ul.alt\n---------------------------------------------------------------------------------------------------\n*/\nul.alt {\n  list-style: none;\n  padding-left: 0;\n}\nul.alt li {\n  border-top: solid 1px darkgray;\n  padding: 0.5rem 0;\n}\nul.alt li:first-child {\n  border-top: 0;\n  padding-top: 0;\n}\n/* \n    ul.icons\n---------------------------------------------------------------------------------------------------\n*/\nul.icons {\n  cursor: default;\n  list-style: none;\n  padding-left: 0;\n}\nul.icons li {\n  display: inline-block;\n  padding: 0 1rem 0 0;\n}\nul.icons li:last-child {\n  padding-right: 0 !important;\n}\n/* \n    ul.icons.major\n---------------------------------------------------------------------------------------------------\n*/\nul.icons.major {\n  padding: 1rem 0;\n}\nul.icons.major li {\n  padding-right: 3.5rem;\n}\n/* \n    ul.actions\n---------------------------------------------------------------------------------------------------\n*/\nul.actions {\n  cursor: default;\n  list-style: none;\n  padding-left: 0;\n}\nul.actions li {\n  display: inline-block;\n  padding: 0 1.5rem 0 0;\n  vertical-align: middle;\n}\nul.actions li:last-child {\n  padding-right: 0;\n}\n/* \n    ul.actions.small\n---------------------------------------------------------------------------------------------------\n*/\nul.actions.small li {\n  padding: 0 0.75rem 0 0;\n}\n/* \n    ul.actions.vertical\n---------------------------------------------------------------------------------------------------\n*/\nul.actions.vertical li {\n  display: block;\n  padding: 1.5rem 0 0 0;\n}\nul.actions.vertical li:first-child {\n  padding-top: 0;\n}\nul.actions.vertical li > * {\n  margin-bottom: 0;\n}\n/* \n    ul.actions.vertical.small\n---------------------------------------------------------------------------------------------------\n*/\nul.actions.vertical.small li {\n  padding: 0.75rem 0 0 0;\n}\nul.actions.vertical.small li:first-child {\n  padding-top: 0;\n}\n/* \n    ul.actions.fit\n---------------------------------------------------------------------------------------------------\n*/\nul.actions.fit {\n  display: table;\n  margin-left: -1.5rem;\n  padding: 0;\n  table-layout: fixed;\n  width: calc(100% + 1.5rem);\n}\nul.actions.fit li {\n  display: table-cell;\n  padding: 0 0 0 1.5rem;\n}\nul.actions.fit li > * {\n  margin-bottom: 0;\n}\n/* \n    ul.actions.fit.small\n---------------------------------------------------------------------------------------------------\n*/\nul.actions.fit.small {\n  margin-left: -0.75rem;\n  width: calc(100% + 0.75rem);\n}\nul.actions.fit.small li {\n  padding: 0 0 0 0.75rem;\n}\n/* \n    media queries\n---------------------------------------------------------------------------------------------------\n*/\n@media screen and (max-width: 736px) {\n  ul.icons.major li {\n    padding: 0 1rem !important;\n  }\n}\n@media screen and (max-width: 736px) {\n  ul.actions li {\n    display: block;\n    padding: 1rem 0 0 0;\n    text-align: center;\n    width: 100%;\n  }\n  ul.actions li:first-child {\n    padding-top: 0;\n  }\n  ul.actions li > * {\n    margin: 0 auto !important;\n    max-width: 15rem;\n    width: 100%;\n  }\n  ul.actions li > *.icon:before {\n    margin-left: -1rem;\n  }\n  ul.actions.small li {\n    padding: 0.5rem 0 0 0;\n  }\n  ul.actions.small li:first-child {\n    padding-top: 0;\n  }\n}\n.flex-row-wrapper {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.flex-column-wrapper {\n  display: flex;\n  flex-flow: column;\n}\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.row {\n  margin: 0;\n  padding: 0;\n}\n.row-bottom-padding {\n  padding-bottom: 2rem;\n}\nform.row {\n  padding-bottom: 1rem !important;\n}\n.flex-container.row {\n  padding-bottom: 1rem !important;\n}\n.flex-row-wrapper.row {\n  padding-bottom: 1rem !important;\n}\n.flex-column-wraper.row {\n  padding-bottom: 1rem !important;\n}\n.separator {\n  margin-right: auto;\n  margin-left: auto;\n  border: 0;\n}\n.separator-spacing {\n  margin-bottom: 0.5rem;\n}\n/* \n    lead\n---------------------------------------------------------------------------------------------------\n*/\n.lead {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\n.lead {\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1.5rem;\n  letter-spacing: 0.1rem;\n}\n.lead {\n  margin: 0;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n/* \n    small\n---------------------------------------------------------------------------------------------------\n*/\n.small {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\n.small {\n  font-size: 0.85rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n/* \n    italic\n---------------------------------------------------------------------------------------------------\n*/\n.italic {\n  font-style: italic;\n}\n/* \n    headline\n---------------------------------------------------------------------------------------------------\n*/\n.headline {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\n.headline {\n  font-size: 1.6rem;\n  margin-bottom: 1rem;\n}\n/* \n    tagline\n---------------------------------------------------------------------------------------------------\n*/\n.tagline {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\n.tagline {\n  font-weight: 100;\n  font-size: 1.4rem;\n  margin-bottom: 1rem;\n}\n/* \n    paragraph\n---------------------------------------------------------------------------------------------------\n*/\n.paragraph {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\n.paragraph {\n  margin: 0;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n/* \n    paragraph-2col\n---------------------------------------------------------------------------------------------------\n*/\n.paragraph-2col {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\n.paragraph-2col {\n  margin: 0;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n/* \n    paragraph-3col\n---------------------------------------------------------------------------------------------------\n*/\n.paragraph-3col {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\n.paragraph-3col {\n  margin: 0;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n/* \n    align\n---------------------------------------------------------------------------------------------------\n*/\n.align-left {\n  text-align: left;\n}\n.align-center {\n  text-align: center;\n}\n.align-right {\n  text-align: right;\n}\n/* \n    error\n---------------------------------------------------------------------------------------------------\n*/\n.error {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n  color: darkred !important;\n}\n.error {\n  display: block;\n  font-size: 1rem;\n  font-weight: bold;\n}\n/* \n    media queries\n---------------------------------------------------------------------------------------------------\n*/\n@media screen and (min-width: 980px) {\n  .paragraph {\n    -webkit-columns: 300px 1;\n    -moz-columns: 300px 1;\n    columns: 300px 1;\n  }\n  .paragraph-2col {\n    -webkit-columns: 200px 2;\n    -moz-columns: 200px 2;\n    columns: 200px 2;\n  }\n  .paragraph-3col {\n    -webkit-columns: 100px 3;\n    -moz-columns: 100px 3;\n    columns: 100px 3;\n  }\n}\n/* \n  organism\n---------------------------------------------------------------------------------------------------\n*/\narticle#main > header {\n  background-attachment: fixed;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n  background-color: transparent;\n  padding-top: 5rem;\n  padding-bottom: 3rem;\n}\narticle#main > header h2 {\n  font-size: 1.75rem;\n  padding-bottom: 0.75rem;\n}\narticle#main > header p {\n  letter-spacing: 0.225rem;\n  top: 0;\n}\nsection#banner > div {\n  color: whitesmoke;\n  background-color: transparent !important;\n}\nsection#banner > div h2 {\n  color: whitesmoke;\n  background-color: transparent !important;\n  width: 70%;\n}\nsection#banner > div p {\n  color: whitesmoke;\n  background-color: transparent !important;\n}\n#banner {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  -moz-flex-direction: column;\n  flex-direction: column;\n  -moz-justify-content: center;\n  -ms-justify-content: center;\n  justify-content: center;\n  cursor: default;\n  height: 100vh;\n  min-height: 35rem;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n#banner .inner {\n  padding-left: 15%;\n  padding-right: 15%;\n  margin: 0;\n}\n#banner h2 {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  display: inline-block;\n  font-size: 2.5rem;\n  opacity: 1;\n  padding: 1rem 2rem;\n  position: relative;\n  z-index: 1;\n}\n#banner h2:before,\n#banner h2:after {\n  background: #fff;\n  content: \"\";\n  display: block;\n  height: 2px;\n  position: absolute;\n  width: 100%;\n}\n#banner h2:before {\n  top: 0;\n  left: 0;\n}\n#banner h2:after {\n  bottom: 0;\n  right: 0;\n}\n#banner p {\n  padding-top: 1.5rem;\n  letter-spacing: 0.225rem;\n  text-transform: lowercase;\n}\n#banner .actions {\n  padding-top: 0.75rem;\n}\n#banner:after {\n  -moz-pointer-events: none;\n  -webkit-pointer-events: none;\n  -ms-pointer-events: none;\n  pointer-events: none;\n  content: \"\";\n  background: #2e3842;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n@media screen and (max-width: 736px) {\n  #banner {\n    padding: 7rem 0 5rem 0;\n    height: auto;\n    min-height: 0;\n  }\n  #banner h2 {\n    font-size: 1.25rem;\n  }\n  #banner br {\n    display: none;\n  }\n  #banner .more {\n    display: none;\n  }\n}\nbody.is-loading #banner h2 {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n  opacity: 0;\n}\nbody.is-loading #banner h2:before,\nbody.is-loading #banner h2:after {\n  width: 0;\n}\nbody.is-loading #banner .more {\n  -webkit-transform: translateY(8.5rem);\n  transform: translateY(8.5rem);\n  opacity: 0;\n}\nbody.is-loading #banner:after {\n  opacity: 1;\n}\na.more.scrolly {\n  color: whitesmoke;\n}\n.breadcrumb {\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n.breadcrumb a,\n.breadcrumb a:visited {\n  color: whitesmoke;\n  font-size: 1rem;\n}\n.breadcrumb:hover {\n  background: black;\n}\n@media (min-width: 768px) {\n  .breadcrumb {\n    padding: 4px 8px;\n    position: absolute;\n    left: 40px;\n    top: 40px;\n  }\n  .breadcrumb a {\n    font-size: 1.2rem;\n  }\n}\n@media (max-width: 768px) {\n  .breadcrumb {\n    text-align: center;\n    padding: 20px 0;\n    background: black;\n  }\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 20%;\n  padding-right: 20%;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n@media screen and (max-width: 980px) {\n  .container {\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 1.75rem;\n    padding-bottom: 1.75rem;\n  }\n}\n@media screen and (max-width: 736px) {\n  .container {\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 5%;\n    padding-right: 5%;\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n}\n#cta .inner {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  scroll-padding-top: 1.5rem;\n}\n#cta .inner header {\n  -moz-order: 1;\n  -ms-order: 1;\n  order: 1;\n  padding-right: 3rem;\n  width: 70%;\n}\n#cta .inner header h2 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n#cta .inner header p {\n  color: inherit;\n}\n#cta .inner .actions {\n  -moz-order: 2;\n  -ms-order: 2;\n  order: 2;\n  width: 30%;\n}\n@media screen and (max-width: 980px) {\n  #cta .inner {\n    display: block;\n    text-align: center;\n  }\n  #cta .inner header {\n    padding-right: 0;\n    width: 100%;\n  }\n  #cta .inner .actions {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 20rem;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 736px) {\n  #cta .inner .actions {\n    max-width: none;\n  }\n}\nsection.special {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  padding: 3rem !important;\n}\nsection.special header.major h2 {\n  padding-bottom: 1rem;\n}\nsection.special header.major p {\n  padding-top: 1.125rem;\n}\n.features {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  flex-wrap: wrap;\n  -moz-justify-content: center;\n  -ms-justify-content: center;\n  justify-content: center;\n  list-style: none;\n  padding: 0;\n  width: 100%;\n}\n.features li {\n  padding: 4rem 4rem 2rem 6rem;\n  display: block;\n  position: relative;\n  text-align: left;\n  width: 50%;\n}\n.features li:nth-child(1) {\n  background-color: rgba(0, 0, 0, 0.035);\n}\n.features li:nth-child(2) {\n  background-color: rgba(0, 0, 0, 0.07);\n}\n.features li:nth-child(3) {\n  background-color: rgba(0, 0, 0, 0.105);\n}\n.features li:nth-child(4) {\n  background-color: rgba(0, 0, 0, 0.14);\n}\n.features li:nth-child(5) {\n  background-color: rgba(0, 0, 0, 0.175);\n}\n.features li:nth-child(6) {\n  background-color: rgba(0, 0, 0, 0.21);\n}\n.features li:nth-child(7) {\n  background-color: rgba(0, 0, 0, 0.245);\n}\n.features li:nth-child(8) {\n  background-color: rgba(0, 0, 0, 0.28);\n}\n.features li:nth-child(9) {\n  background-color: rgba(0, 0, 0, 0.315);\n}\n.features li:nth-child(10) {\n  background-color: rgba(0, 0, 0, 0.35);\n}\n.features li:before {\n  display: block;\n  color: #00ffcc;\n  position: absolute;\n  left: 1.75rem;\n  top: 2.75rem;\n  font-size: 1.5rem;\n}\n.features li:nth-child(1) {\n  border-top-left-radius: 3px;\n}\n.features li:nth-child(2) {\n  border-top-right-radius: 3px;\n}\n.features li:nth-last-child(1) {\n  border-bottom-right-radius: 3px;\n}\n.features li:nth-last-child(2) {\n  border-bottom-left-radius: 3px;\n}\n@media screen and (max-width: 980px) {\n  .features li {\n    padding: 3rem 2rem 1rem 2rem;\n    text-align: center;\n  }\n  .features li:before {\n    left: 0;\n    margin: 0 0 1rem 0;\n    position: relative;\n    top: 0;\n  }\n}\n@media screen and (max-width: 736px) {\n  .features li {\n    padding: 3rem 0 1rem 0;\n    background-color: transparent !important;\n    border-top: solid 2px darkgray;\n    width: 100%;\n  }\n  .features li:first-child {\n    border-top: 0;\n  }\n}\nselect,\ntextarea,\ninput {\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n}\nform label {\n  display: block;\n  padding-bottom: 0.3rem;\n}\nselect {\n  border-radius: 0.75rem;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 400;\n  height: 2.125rem;\n  letter-spacing: 0.225rem;\n  line-height: 2.125rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\ntextarea {\n  border-radius: 0.75rem;\n  border: 0;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 400;\n  letter-spacing: 0.225rem;\n  line-height: 2.125rem;\n  padding: 1rem;\n}\ninput[type=\"text\"] {\n  border-radius: 0.75rem;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 400;\n  height: 2.125rem;\n  letter-spacing: 0.225rem;\n  line-height: 2.125rem;\n  padding: 1rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 40%;\n}\ninput[type=\"password\"] {\n  border-radius: 0.75rem;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 400;\n  height: 2.125rem;\n  letter-spacing: 0.225rem;\n  line-height: 2.125rem;\n  padding: 1rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 40%;\n}\n.icon:before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important;\n}\n.icon {\n  font-size: 1.25rem;\n}\n.icon a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.icon > .label {\n  display: none;\n}\n.icon.major {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  border-radius: 3px;\n  border: thin solid darkgray;\n  display: inline-block;\n  font-size: 1.35rem;\n  height: calc(3rem + 2px);\n  line-height: 3rem;\n  text-align: center;\n  width: calc(3rem + 2px);\n}\n.icon.major:before {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  display: inline-block;\n  font-size: 1.5rem;\n}\n@media screen and (max-width: 736px) {\n  .icon.major {\n    font-size: 1rem;\n  }\n}\n.modal {\n  position: fixed;\n  top: 15%;\n  left: 10%;\n  width: 80%;\n  height: 80%;\n  z-index: 9999;\n  background: transparent;\n}\n.backdrop {\n  position: relative;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 10001;\n}\n.modal-box {\n  border-radius: 1rem;\n  border-color: black;\n  border-style: solid;\n  border: thin;\n  box-shadow: inset 0 0 0 2px darkslategrey;\n  z-index: 7777;\n  height: 100%;\n  overflow-x: auto;\n  scrollbar-base-color: gray lightgray;\n}\n.modal-box::-webkit-scrollbar {\n  width: 0.125rem;\n}\n.modal-box::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 0.25rem;\n}\n.modal-box::-webkit-scrollbar-thumb {\n  border-radius: 0.25rem;\n  -webkit-box-shadow: inset 0 0 0.75rem rgba(0, 0, 0, 0.5);\n}\n.news-modal-header {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  padding: 1rem;\n  background-color: darkslategrey;\n  border-bottom: solid thick darkred;\n}\n.news-modal-header h3 {\n  font-size: 1rem;\n  line-height: 1rem;\n  color: whitesmoke;\n}\n.news-modal-body {\n  padding: 1rem;\n  height: 100%;\n}\n.news-modal-body span {\n  border-bottom: dotted 1px;\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n  color: darkgray;\n}\n.news-modal-body a {\n  border-bottom: dotted 1px;\n  text-decoration: none;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", \"Lato\", Arial, sans-serif;\n  text-transform: lowercase;\n  color: darkgray;\n}\n.news-modal-body a:hover {\n  text-transform: lowercase;\n  text-decoration: none;\n  color: red !important;\n}\n.source-detail-modal-body {\n  padding: 1rem;\n  height: 100%;\n}\n.source-detail-modal-body em {\n  min-width: 40%;\n}\n.panel {\n  margin-top: 1rem;\n  margin-bottom: 1.75rem;\n  min-height: 200px;\n  float: left;\n}\n.page-header {\n  padding: 0;\n  padding-bottom: 0.5rem;\n}\nsection {\n  margin: 0;\n  padding: 0;\n}\n.spotlight {\n  -moz-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  width: 100%;\n}\n.spotlight-left .image {\n  justify-content: flex-start;\n  -moz-order: 1;\n  -ms-order: 1;\n  order: 1;\n  border-radius: 0;\n  max-height: 160px;\n  max-width: 160px;\n}\n.spotlight-right .image {\n  justify-content: flex-end;\n  -moz-order: 2;\n  -ms-order: 2;\n  order: 2;\n  border-radius: 0;\n  height: 160px;\n  width: 160px;\n}\n.spotlight .image img {\n  border-radius: 0;\n  padding: 1rem;\n}\n.spotlight-left .content {\n  -moz-order: 2;\n  -ms-order: 2;\n  order: 2;\n  width: 100%;\n  height: 160px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 2.25rem;\n}\n.spotlight-right .content {\n  -moz-order: 1;\n  -ms-order: 1;\n  order: 1;\n  width: 100%;\n  height: 160px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 2.25rem;\n}\n.spotlight .content h2 {\n  font-size: 1.5rem;\n  padding-bottom: 1rem;\n}\n.spotlight .content p {\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1.5rem;\n  padding-bottom: 3rem;\n}\n.spotlight:nth-child(1) {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.spotlight:nth-child(2) {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.spotlight:nth-child(3) {\n  background-color: rgba(0, 0, 0, 0.225);\n}\n.spotlight:nth-child(4) {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.spotlight:nth-child(5) {\n  background-color: rgba(0, 0, 0, 0.375);\n}\n.spotlight:nth-child(6) {\n  background-color: rgba(0, 0, 0, 0.45);\n}\n.spotlight:nth-child(7) {\n  background-color: rgba(0, 0, 0, 0.525);\n}\n.spotlight:nth-child(8) {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.spotlight:nth-child(9) {\n  background-color: rgba(0, 0, 0, 0.675);\n}\n.spotlight:nth-child(10) {\n  background-color: rgba(0, 0, 0, 0.75);\n}\n@media screen and (max-width: 736px) {\n  .spotlight {\n    display: block;\n  }\n  .spotlight br {\n    display: none;\n  }\n  .spotlight .image {\n    width: 100%;\n  }\n  .spotlight .content {\n    display: inline-block;\n    width: 100%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2rem;\n  }\n  .spotlight-left .image {\n    max-height: 128px;\n    max-width: 128px;\n  }\n  .spotlight-right .image {\n    height: 128px;\n    width: 128px;\n  }\n  .spotlight .content h2 {\n    display: block;\n  }\n  .spotlight .content p {\n    display: block;\n    padding-bottom: 1.75rem;\n  }\n}\n@media screen and (max-width: 468px) {\n  .spotlight {\n    display: block;\n  }\n  .spotlight br {\n    display: none;\n  }\n  .spotlight .image {\n    width: 100%;\n  }\n  .spotlight .content {\n    display: inline-block;\n    width: 100%;\n    padding-left: 5%;\n    padding-right: 5%;\n    padding-top: 1.5rem;\n  }\n  .spotlight-left .image {\n    max-height: 96px;\n    max-width: 96px;\n  }\n  .spotlight-right .image {\n    height: 96px;\n    width: 96px;\n  }\n  .spotlight .content h2 {\n    display: block;\n  }\n  .spotlight .content p {\n    display: block;\n    padding-bottom: 1rem;\n  }\n}\n.spinner {\n  -webkit-animation: spinner-spin infinite 2s linear;\n          animation: spinner-spin infinite 2s linear;\n  background-color: transparent;\n  position: fixed;\n  top: 40%;\n  left: 45%;\n  z-index: 9990;\n  width: 100px;\n  height: 100px;\n}\n@-webkit-keyframes spinner-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spinner-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.table-wrapper {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding-top: 0.5rem;\n}\ntable {\n  width: 100%;\n}\ntable tbody tr:nth-child(2n + 1) {\n  background-color: rgba(144, 144, 144, 0.35);\n}\ntable td {\n  padding: 0.35rem;\n}\ntable.alt {\n  border-collapse: separate;\n}\ntable.alt tbody tr td:first-child {\n  border-left-width: 1px;\n}\ntable.alt tbody tr:first-child td {\n  border-top-width: 1px;\n}\ntable.alt thead {\n  border-bottom: 0;\n}\ntable.alt tfoot {\n  border-top: 0;\n}\n.tiles {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.tiles div[class^=\"item-\"] {\n  margin: 0.75rem !important;\n  flex-direction: row;\n  width: 40%;\n}\n.tiles h3 {\n  padding-bottom: 0.75rem;\n}\n.tiles a {\n  text-decoration: none;\n}\n.tiles a:hover * {\n  text-decoration: none;\n  color: red;\n}\n.tiles a:hover p {\n  text-decoration: underline;\n  color: red;\n}\n.tiles .date {\n  text-align: right;\n}\n.tiles p.paragraph {\n  min-height: 60px;\n}\n@media screen and (max-width: 736px) {\n  .tiles div[class^=\"item-\"] {\n    margin: 0.25rem !important;\n    display: block;\n    width: 80%;\n  }\n  .tiles h3 {\n    font-size: 1.125rem;\n    padding-bottom: 0.35rem;\n  }\n  .tiles .date {\n    font-size: 1rem;\n    padding-bottom: 0.35rem;\n  }\n  .tiles p.paragraph {\n    font-size: 1.1rem;\n    font-weight: normal;\n  }\n}\n/* \n  page\n---------------------------------------------------------------------------------------------------\n*/\n#footer {\n  padding: 3rem 0 2rem 0;\n  text-align: center;\n  color: whitesmoke;\n}\n#footer .icons {\n  font-size: 1.25rem;\n}\n#footer .icons a {\n  color: rgba(255, 255, 255, 0.5);\n}\n#footer .icons a:hover {\n  color: red;\n}\n#footer * {\n  text-decoration: none;\n  text-transform: lowercase;\n  border-bottom-color: transparent;\n}\n#footer .copyright {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.8rem;\n  letter-spacing: 0.225rem;\n  list-style: none;\n  padding: 0;\n}\n#footer .copyright span {\n  display: inline-block;\n  line-height: 1rem;\n  margin-left: 0;\n  padding-left: 0m;\n  padding-top: 1.5rem;\n}\n#footer .copyright li:first-child {\n  border-left: 0;\n  margin-left: 0;\n  padding-left: 0;\n}\nbody.landing #footer {\n  background-color: rgba(29, 36, 42, 0.9);\n}\nbody.regular #footer {\n  background-color: rgba(29, 36, 42, 0.9);\n}\nbody.is-mobile.landing #footer {\n  background-color: transparent;\n}\n@media screen and (max-width: 480px) {\n  #footer .copyright li {\n    border: 0;\n    display: block;\n    line-height: 1.65rem;\n    margin: 0;\n    padding: 0.5rem 0;\n  }\n}\n@media screen and (max-width: 980px) {\n  #footer {\n    padding: 4rem 3rem 2rem 3rem;\n  }\n}\n@media screen and (max-width: 736px) {\n  #footer {\n    padding: 3rem 2rem 1rem 2rem;\n  }\n}\nheader.major h2 {\n  border-bottom: thin solid darkgray;\n  margin: 0;\n  padding: 0;\n}\nheader.major p {\n  margin: 0;\n  padding: 0;\n}\n#header {\n  background-color: transparent;\n  left: 0;\n  line-height: 3rem;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10000;\n}\n#header h1 {\n  height: inherit;\n  left: 1.25rem;\n  line-height: inherit;\n  position: absolute;\n  top: 0;\n  padding-top: 1rem;\n}\n#header h1 a {\n  border: 0;\n  display: block;\n  height: inherit;\n  line-height: inherit;\n}\n.displayBlock {\n  display: block;\n  opacity: 0.85;\n}\n.displayNone {\n  display: none;\n}\n#menu {\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  background-color: #1a867d;\n  color: whitesmoke;\n}\n.menu ul {\n  padding-top: 25%;\n  padding-bottom: 65%;\n}\n.menu ul li {\n  margin: 0.5rem !important;\n}\n.menu a {\n  color: whitesmoke;\n}\n.menu a:hover {\n  color: red;\n}\n.menu li {\n  color: whitesmoke;\n  border-bottom: thin solid darkgray;\n  padding-bottom: 0.5rem;\n  padding-top: 1rem;\n}\n.menu li a {\n  padding-right: 2rem;\n}\n.menu-active {\n  font-weight: bold;\n}\n#nav div > ul {\n  list-style: none;\n  text-align: left;\n}\n#nav div ul > li {\n  list-style: none;\n  text-align: left;\n}\n#header nav {\n  margin: 0;\n  padding: 0;\n  width: 40%;\n  text-align: right;\n}\n#header nav span.menuToggle {\n  text-align: right;\n  padding-right: 1rem;\n}\n#header nav span.menuClose {\n  text-align: right;\n  padding-right: 1rem;\n}\n#header nav {\n  height: inherit;\n  line-height: inherit;\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  right: 0;\n  top: 0;\n  color: whitesmoke;\n}\n#header nav span.menuToggle:after {\n  background-image: url(\"/assets/images/bars.svg\");\n  background-position: right center;\n  background-repeat: no-repeat;\n  content: '';\n  display: inline-block;\n  height: 3.75rem;\n  vertical-align: middle;\n  width: 2rem;\n}\n#header nav span.menuClose:after {\n  background-image: url(\"/assets/images/close.svg\");\n  background-position: right center;\n  background-repeat: no-repeat;\n  content: '';\n  display: inline-block;\n  height: 3.75rem;\n  vertical-align: middle;\n  width: 2rem;\n}\n.totop-wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  width: 20%;\n  background-color: inherit;\n}\nbutton.totop {\n  border-radius: 10px;\n  font-family: \"Lato\", sans-serif !important;\n  font-size: 1rem;\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding-left: 5%;\n  padding-right: 5%;\n  color: whitesmoke !important;\n  background: #ed4933 !important;\n  background-color: #ed4933 !important;\n  text-transform: lowercase !important;\n  text-decoration: none !important;\n}\nbutton.totop:hover {\n  background: #ef5e4a !important;\n  background-color: #ef5e4a !important;\n}\n.more {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  border: none;\n  bottom: 0;\n  font-size: 0.8rem;\n  height: 8.5rem;\n  left: 50%;\n  letter-spacing: 0.225rem;\n  margin-left: -8.5rem;\n  opacity: 1;\n  outline: 0;\n  padding-left: 0.225rem;\n  position: absolute;\n  text-align: center;\n  text-transform: lowercase;\n  width: 16rem;\n  z-index: 1;\n}\n.more:after {\n  background-image: url(\"/assets/images/arrow.svg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  bottom: 4rem;\n  content: \"\";\n  display: block;\n  height: 1.5rem;\n  left: 50%;\n  margin: 0 0 0 -0.75rem;\n  position: absolute;\n  width: 1.5rem;\n}\n/* \n  template\n---------------------------------------------------------------------------------------------------\n*/\n.container.gray ul li {\n  color: whitesmoke;\n}\n.gray {\n  color: whitesmoke;\n  background-color: darkgray !important;\n}\n.gray a:hover {\n  color: red;\n}\n.gray .page-header {\n  width: 100%;\n  color: whitesmoke;\n  border-bottom: whitesmoke solid thin !important;\n}\n.gray .abstract {\n  color: whitesmoke !important;\n}\n.container.gray .abstract {\n  color: whitesmoke !important;\n}\ntable thead {\n  border-bottom: solid 2px whitesmoke !important;\n}\ntable tfoot {\n  border-top: solid 2px whitesmoke !important;\n}\ntable.alt tbody tr td {\n  border: solid 1px whitesmoke !important;\n  border-left-width: 0;\n  border-top-width: 0;\n}\n.container.green ul li {\n  color: whitesmoke;\n}\n.green {\n  color: whitesmoke;\n  background-color: #1a867d !important;\n}\n.green a:hover {\n  color: red;\n}\n.green .page-header {\n  width: 100%;\n  color: whitesmoke;\n  border-bottom: whitesmoke solid thin !important;\n}\n.green .abstract {\n  color: whitesmoke !important;\n}\n.container.green .abstract {\n  color: whitesmoke !important;\n}\ntable thead {\n  border-bottom: solid 2px whitesmoke !important;\n}\ntable tfoot {\n  border-top: solid 2px whitesmoke !important;\n}\ntable.alt tbody tr td {\n  border: solid 1px whitesmoke !important;\n  border-left-width: 0;\n  border-top-width: 0;\n}\n.container.light ul li {\n  color: #5e5e5e;\n}\n.light {\n  color: #5e5e5e;\n  background-color: whitesmoke !important;\n}\n.light a:hover {\n  color: red;\n}\n.light .page-header {\n  width: 100%;\n  color: #5e5e5e !important;\n  border-bottom: #5e5e5e solid thin !important;\n}\n.light .abstract {\n  color: #5e5e5e !important;\n}\n.container.light .abstract {\n  color: #5e5e5e !important;\n}\n.spotlight .content {\n  background-color: lightgray !important;\n}\n.spotlight .image {\n  background-color: whitesmoke !important;\n}\ntable thead {\n  border-bottom: solid 2px #5e5e5e !important;\n}\ntable tfoot {\n  border-top: solid 2px #5e5e5e !important;\n}\ntable.alt tbody tr td {\n  border: solid 1px #5e5e5e !important;\n  border-left-width: 0;\n  border-top-width: 0;\n}\n.container.purple ul li {\n  color: #d3d4e4;\n}\n.purple {\n  color: #d3d4e4;\n  background-color: #505393 !important;\n}\n.purple a:hover {\n  color: red;\n}\n.purple .page-header {\n  width: 100%;\n  color: #d3d4e4;\n  border-bottom: #d3d4e4 solid thin !important;\n}\n.purple .abstract {\n  color: #d3d4e4 !important;\n}\n.container.purple .abstract {\n  color: #d3d4e4 !important;\n}\ntable thead {\n  border-bottom: solid 2px #d3d4e4 !important;\n}\ntable tfoot {\n  border-top: solid 2px #d3d4e4 !important;\n}\ntable.alt tbody tr td {\n  border: solid 1px #d3d4e4 !important;\n  border-left-width: 0;\n  border-top-width: 0;\n}\n.container.transparent ul li {\n  color: whitesmoke;\n}\n.transparent {\n  color: whitesmoke;\n  background-color: transparent !important;\n}\n.transparent a:hover {\n  color: darkgray;\n}\n.transparent .page-header {\n  width: 100%;\n  color: whitesmoke;\n  border-bottom: whitesmoke solid thin !important;\n}\n.transparent .abstract {\n  color: whitesmoke !important;\n}\n.container.transparent .abstract {\n  color: whitesmoke !important;\n}\ntable thead {\n  border-bottom: solid 2px whitesmoke !important;\n}\ntable tfoot {\n  border-top: solid 2px whitesmoke !important;\n}\ntable.alt tbody tr td {\n  border: solid 1px whitesmoke !important;\n  border-left-width: 0;\n  border-top-width: 0;\n}\n/* \n  custom styles\n---------------------------------------------------------------------------------------------------\n*/\n.clearfix {\n  float: none;\n}\n.emailform {\n  margin-left: auto;\n  margin-right: auto;\n  width: 640px;\n  height: 767px;\n}\n#header {\n  width: 100%;\n  height: 3.25rem;\n  color: #f5f5f5;\n  background-color: #0b3536;\n}\n#header nav {\n  color: #f5f5f5;\n  background-color: #0b3536;\n}\n#footer {\n  padding: 1rem 0 1rem 0;\n  text-align: center;\n  color: #f5f5f5;\n  background-color: #0b3536;\n}\n#footer .copyright span {\n  padding: 0;\n}\nbody.is-mobile #main > header {\n  background-attachment: scroll;\n}\n#body.landing #header {\n  background-color: transparent !important;\n}\n#body.landing #header nav {\n  color: #f5f5f5;\n  background-color: transparent !important;\n}\nbody #root {\n  background: -webkit-linear-gradient(top, #0b3536 0%, rgba(125, 185, 232, 0)), url(\"/assets/images/internet-of-things-1920xx.png\");\n  background-image: -ms-linear-gradient(top, #0b3536 0%, rgba(125, 185, 232, 0)), url(\"/assets/images/internet-of-things-1920xx.png\");\n  background: -webkit-gradient(linear, left top, left bottom, from(#0b3536), to(rgba(125, 185, 232, 0))), url(\"/assets/images/internet-of-things-1920xx.png\");\n  background: linear-gradient(to bottom, #0b3536 0%, rgba(125, 185, 232, 0)), url(\"/assets/images/internet-of-things-1920xx.png\");\n  background-attachment: fixed;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding-top: 0;\n  background-color: transparent;\n}\n@media screen and (min-width: 1680px) {\n  #menu {\n    width: 100%;\n  }\n  #header nav {\n    width: 40%;\n  }\n}\n@media screen and (max-width: 1680px) {\n  #menu {\n    width: 100%;\n  }\n  #header nav {\n    width: 40%;\n  }\n}\n@media screen and (max-width: 1280px) {\n  #menu {\n    width: 100%;\n  }\n  #header nav {\n    width: 40%;\n  }\n}\n@media screen and (max-width: 980px) {\n  #menu {\n    width: 100%;\n  }\n  #header nav {\n    width: 50%;\n  }\n  header#header > h1 > a {\n    font-weight: 500 !important;\n    letter-spacing: 0.125rem !important;\n    font-size: 1.1rem !important;\n    line-height: 1rem !important;\n  }\n}\n@media screen and (max-width: 736px) {\n  #menu {\n    width: 100%;\n  }\n  #header nav {\n    width: 50%;\n  }\n  header#header > h1 > a {\n    font-weight: 500 !important;\n    letter-spacing: 0.125rem !important;\n    font-size: 1.1rem !important;\n    line-height: 1rem !important;\n  }\n}\n", ""]);



/***/ })
/******/ ]);
});