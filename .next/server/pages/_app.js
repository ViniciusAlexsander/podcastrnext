module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "BLsd":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"playerContainer": "styles_playerContainer__2kTpC",
	"empty": "styles_empty__XvMyC",
	"emptyPlayer": "styles_emptyPlayer__WHPi6",
	"progress": "styles_progress__ULW9V",
	"slider": "styles_slider__3_Mkb",
	"emptySlider": "styles_emptySlider__3p9Ad",
	"buttons": "styles_buttons__i4fo8",
	"playerButton": "styles_playerButton__32ioK"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JmTP":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__3jyUX"
};


/***/ }),

/***/ "RvHN":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/pt-BR");

/***/ }),

/***/ "Skji":
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "TpEK":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "app_wrapper__X8llh"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "date-fns/format"
var format_ = __webpack_require__("Skji");
var format_default = /*#__PURE__*/__webpack_require__.n(format_);

// EXTERNAL MODULE: external "date-fns/locale/pt-BR"
var pt_BR_ = __webpack_require__("RvHN");
var pt_BR_default = /*#__PURE__*/__webpack_require__.n(pt_BR_);

// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var styles_module = __webpack_require__("JmTP");
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./src/components/Header/index.tsx





function Header() {
  const currentDate = format_default()(new Date(), 'EEEEEE, d MMMM', {
    locale: pt_BR_default.a
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: styles_module_default.a.headerContainer,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "/logo.svg",
      alt: "Podcastr"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "O melhor para voc\xEA ouvir, sempre"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: currentDate
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Player/styles.module.scss
var Player_styles_module = __webpack_require__("BLsd");
var Player_styles_module_default = /*#__PURE__*/__webpack_require__.n(Player_styles_module);

// CONCATENATED MODULE: ./src/components/Player/index.tsx



function Player() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Player_styles_module_default.a.playerContainer,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/playing.svg",
        alt: "Tocando agora"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        children: "Tocando agora"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Player_styles_module_default.a.emptyPlayer,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        children: "Selecione um poscast para ouvir"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("footer", {
      className: Player_styles_module_default.a.empty,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Player_styles_module_default.a.progress,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "00:00"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Player_styles_module_default.a.slider,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Player_styles_module_default.a.emptySlider
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "00:00"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Player_styles_module_default.a.buttons,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/play-previous.svg",
            alt: "Tocar anterior"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "button",
          className: Player_styles_module_default.a.playerButton,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/play.svg",
            alt: "Tocar"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/play-next.svg",
            alt: "Tocar pr\xF3xima"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/repeat.svg",
            alt: "Repetir"
          })
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/styles/global.scss
var global = __webpack_require__("t+Ps");

// EXTERNAL MODULE: ./src/styles/app.module.scss
var app_module = __webpack_require__("TpEK");
var app_module_default = /*#__PURE__*/__webpack_require__.n(app_module);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: app_module_default.a.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Player, {})]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "t+Ps":
/***/ (function(module, exports) {



/***/ })

/******/ });