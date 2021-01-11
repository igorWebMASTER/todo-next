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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Todo/index.js":
/*!**********************************!*\
  !*** ./components/Todo/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/Todo/styles.js\");\n\nvar _jsxFileName = \"/Users/igor/Documents/www/todo-next/components/Todo/index.js\";\n\n\n\nfunction Todo({\n  todo\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: todo.task\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG8vaW5kZXguanM/NmM1MiJdLCJuYW1lcyI6WyJUb2RvIiwidG9kbyIsInRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULENBQWM7QUFBRUM7QUFBRixDQUFkLEVBQXdCO0FBQ3RCLHNCQUNFLHFFQUFDLGlEQUFEO0FBQUEsMkJBQ0U7QUFBQSxnQkFBS0EsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY0YsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG8vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5mdW5jdGlvbiBUb2RvKHsgdG9kbyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxsaT57dG9kby50YXNrfTwvbGk+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Todo/index.js\n");

/***/ }),

/***/ "./components/Todo/styles.js":
/*!***********************************!*\
  !*** ./components/Todo/styles.js ***!
  \***********************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"qr8v22-0\"\n})([\"width:32%;background:#4e4e5c;color:#fff;padding-bottom:20px;min-height:40px;font-size:12px;display:flex;overflow:hidden;margin:0 auto;flex-direction:column;justify-content:center;transition:all 400ms;position:relative;top:-50px;z-index:-1;border-radius:25px;margin-top:20px;font-size:14px;margin-bottom:10px;border-radius:3px;box-shadow:0px 5px 20px rgba(0,0,0,0.1);li:first-child{margin-top:20px;margin-left:20px;font-size:1rem;}li:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px;}li{list-style:none;}@media screen and (max-width:760px){&{width:90%;}}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG8vc3R5bGVzLmpzPzkzOGIiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdrQkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVG9kby9zdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzMiU7XG4gIGJhY2tncm91bmQ6ICM0ZTRlNWM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHB4O1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgbGk6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIH1cblxuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgJiB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Todo/styles.js\n");

/***/ }),

/***/ "./components/TodoForm3/index.js":
/*!***************************************!*\
  !*** ./components/TodoForm3/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"yup\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ \"./components/TodoForm3/style.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/igor/Documents/www/todo-next/components/TodoForm3/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst TodoForm2 = ({\n  addTodo\n}) => {\n  const {\n    0: inputError,\n    1: setInputError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: todo,\n    1: setTodo\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    id: '',\n    task: ''\n  });\n\n  function handleTaskInputChange(e) {\n    setTodo(_objectSpread(_objectSpread({}, todo), {}, {\n      task: e.target.value\n    }));\n    setInputError('');\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault(); // prevents browser refresh\n    // trim() gets rid of string whitespace\n\n    if (todo.task.trim() && todo.task.length > 5) {\n      addTodo(_objectSpread(_objectSpread({}, todo), {}, {\n        id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])()\n      }));\n      setTodo(_objectSpread(_objectSpread({}, todo), {}, {\n        task: ''\n      }));\n    } else {\n      setInputError('Digite uma tarefa');\n    }\n\n    setInputError('');\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"TodoLuby \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"formTodo\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              display: 'flex'\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"inputTask\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                name: \"task\",\n                onChange: handleTaskInputChange,\n                placeholder: \"Digite uma tarefa\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, undefined), !!inputError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"error\",\n                children: inputError\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 33\n              }, undefined) : '']\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                children: \"Adicionar\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoForm2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9Gb3JtMy9pbmRleC5qcz80MWU0Il0sIm5hbWVzIjpbIlRvZG9Gb3JtMiIsImFkZFRvZG8iLCJpbnB1dEVycm9yIiwic2V0SW5wdXRFcnJvciIsInVzZVN0YXRlIiwidG9kbyIsInNldFRvZG8iLCJpZCIsInRhc2siLCJoYW5kbGVUYXNrSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJsZW5ndGgiLCJ1dWlkdjQiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBaUI7QUFDakMsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQyxzREFBUSxDQUFDLEVBQUQsQ0FBNUM7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JGLHNEQUFRLENBQUM7QUFDL0JHLE1BQUUsRUFBRSxFQUQyQjtBQUUvQkMsUUFBSSxFQUFFO0FBRnlCLEdBQUQsQ0FBaEM7O0FBS0EsV0FBU0MscUJBQVQsQ0FBK0JDLENBQS9CLEVBQWtDO0FBQ2hDSixXQUFPLGlDQUFNRCxJQUFOO0FBQVlHLFVBQUksRUFBRUUsQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQTNCLE9BQVA7QUFDQVQsaUJBQWEsQ0FBQyxFQUFELENBQWI7QUFDRDs7QUFFRCxXQUFTVSxZQUFULENBQXNCSCxDQUF0QixFQUF5QjtBQUN2QkEsS0FBQyxDQUFDSSxjQUFGLEdBRHVCLENBQ0g7QUFDcEI7O0FBQ0EsUUFBSVQsSUFBSSxDQUFDRyxJQUFMLENBQVVPLElBQVYsTUFBb0JWLElBQUksQ0FBQ0csSUFBTCxDQUFVUSxNQUFWLEdBQW1CLENBQTNDLEVBQThDO0FBQzVDZixhQUFPLGlDQUFNSSxJQUFOO0FBQVlFLFVBQUUsRUFBRVUsK0NBQU07QUFBdEIsU0FBUDtBQUNBWCxhQUFPLGlDQUFNRCxJQUFOO0FBQVlHLFlBQUksRUFBRTtBQUFsQixTQUFQO0FBQ0QsS0FIRCxNQUdPO0FBQ0xMLG1CQUFhLENBQUMsbUJBQUQsQ0FBYjtBQUNEOztBQUVEQSxpQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNEOztBQUVELHNCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBTSxnQkFBUSxFQUFFVSxZQUFoQjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0U7QUFDRSxpQkFBSyxFQUFFO0FBQ0xLLHFCQUFPLEVBQUU7QUFESixhQURUO0FBQUEsb0NBS0U7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDRTtBQUNFLG9CQUFJLEVBQUMsTUFEUDtBQUVFLG9CQUFJLEVBQUMsTUFGUDtBQUdFLHdCQUFRLEVBQUVULHFCQUhaO0FBSUUsMkJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFPRyxDQUFDLENBQUNQLFVBQUYsZ0JBQWU7QUFBSyx5QkFBUyxFQUFDLE9BQWY7QUFBQSwwQkFBd0JBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQWYsR0FBMkQsRUFQOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGLGVBY0U7QUFBQSxxQ0FDRTtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNkJELENBdkREOztBQXlEZUYsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9Gb3JtMy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkLCB1c2VGb3JtaWssIEVycm9yTWVzc2FnZSwgc2V0SW4gfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5jb25zdCBUb2RvRm9ybTIgPSAoeyBhZGRUb2RvIH0pID0+IHtcbiAgY29uc3QgW2lucHV0RXJyb3IsIHNldElucHV0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFt0b2RvLCBzZXRUb2RvXSA9IHVzZVN0YXRlKHtcbiAgICBpZDogJycsXG4gICAgdGFzazogJycsXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVRhc2tJbnB1dENoYW5nZShlKSB7XG4gICAgc2V0VG9kbyh7IC4uLnRvZG8sIHRhc2s6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIHNldElucHV0RXJyb3IoJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnRzIGJyb3dzZXIgcmVmcmVzaFxuICAgIC8vIHRyaW0oKSBnZXRzIHJpZCBvZiBzdHJpbmcgd2hpdGVzcGFjZVxuICAgIGlmICh0b2RvLnRhc2sudHJpbSgpICYmIHRvZG8udGFzay5sZW5ndGggPiA1KSB7XG4gICAgICBhZGRUb2RvKHsgLi4udG9kbywgaWQ6IHV1aWR2NCgpIH0pO1xuICAgICAgc2V0VG9kbyh7IC4uLnRvZG8sIHRhc2s6ICcnIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJbnB1dEVycm9yKCdEaWdpdGUgdW1hIHRhcmVmYScpO1xuICAgIH1cblxuICAgIHNldElucHV0RXJyb3IoJycpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxPlRvZG9MdWJ5IDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1Ub2RvJz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dFRhc2snPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3Rhc2snXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFza0lucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0RpZ2l0ZSB1bWEgdGFyZWZhJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgeyEhaW5wdXRFcnJvciA/IDxkaXYgY2xhc3NOYW1lPSdlcnJvcic+e2lucHV0RXJyb3J9PC9kaXY+IDogJyd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5BZGljaW9uYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvRm9ybTI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TodoForm3/index.js\n");

/***/ }),

/***/ "./components/TodoForm3/style.js":
/*!***************************************!*\
  !*** ./components/TodoForm3/style.js ***!
  \***************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ \"polished\");\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"style__Container\",\n  componentId: \"sc-1s98o40-0\"\n})([\"min-height:166px;font-size:12px;display:flex;margin:0 auto;border-radius:10px;margin:40px auto;flex-direction:column;justify-content:center;align-items:center;transition:all 400ms;h1{font-size:34px;position:absolute;top:1.5rem;color:#fff;}.formTodo{display:flex;align-content:center;width:100%;margin:0 auto;max-width:460px;padding:15px;.inputTask{display:flex;flex-direction:column;}input{height:48px;border:0;background:#2e2d34;color:#5d5d5f;min-width:250px;max-width:250px;font-size:14px;border-radius:3px;padding-left:15px;&::placeholder{color:#5d5d5f;}}button{height:48px;border:0;width:100%;color:#fff;font-size:14px;background:#13825c;min-width:130px;border-radius:3px;margin-left:10px;transition:background-color 300ms;cursor:pointer;}button:hover{background:\", \";}.error{padding-top:10px;color:#ed5249;}}@media screen and (max-width:760px){.formTodo{flex-direction:column;span{position:relative;}button,input{width:100%;}}}div > h1{font-weight:500;font-size:22px;margin-top:10px;text-align:center;}@media screen and (max-width:760px){div{width:100%;}div > h1{text-align:left;margin:1rem 0 0rem 1rem;}}\"], Object(polished__WEBPACK_IMPORTED_MODULE_1__[\"shade\"])(0.15, '#13825c'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9Gb3JtMi9zdHlsZS5qcz9kYmE3Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInNoYWRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtsQ0FvRUZDLHNEQUFLLENBQUMsSUFBRCxFQUFPLFNBQVAsQ0FwRUgsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVG9kb0Zvcm0zL3N0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzaGFkZSB9IGZyb20gJ3BvbGlzaGVkJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDE2NnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcztcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEuNXJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5mb3JtVG9kbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA0NjBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgLyogPiBkaXYge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH0gKi9cblxuICAgIC5pbnB1dFRhc2sge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZDogIzJlMmQzNDtcbiAgICAgIGNvbG9yOiAjNWQ1ZDVmO1xuICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICM1ZDVkNWY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTM4MjVjO1xuICAgICAgbWluLXdpZHRoOiAxMzBweDtcblxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3NoYWRlKDAuMTUsICcjMTM4MjVjJyl9O1xuICAgIH1cblxuICAgIC5lcnJvciB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIGNvbG9yOiAjZWQ1MjQ5O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgLmZvcm1Ub2RvIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbixcbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGl2ID4gaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICBkaXYge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgZGl2ID4gaDEge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbjogMXJlbSAwIDByZW0gMXJlbTtcbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TodoForm3/style.js\n");

/***/ }),

/***/ "./components/TodoList/index.js":
/*!**************************************!*\
  !*** ./components/TodoList/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Todo */ \"./components/Todo/index.js\");\n\nvar _jsxFileName = \"/Users/igor/Documents/www/todo-next/components/TodoList/index.js\";\n\n\n\nfunction TodoList({\n  todos\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: todos.map(todo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        todo: todo\n      }, todo.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9MaXN0L2luZGV4LmpzP2U3MzQiXSwibmFtZXMiOlsiVG9kb0xpc3QiLCJ0b2RvcyIsIm1hcCIsInRvZG8iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0I7QUFBRUM7QUFBRixDQUFsQixFQUE2QjtBQUMzQixzQkFDRTtBQUFBLDJCQUNFO0FBQUEsZ0JBQ0dBLEtBQUssQ0FBQ0MsR0FBTixDQUFXQyxJQUFELGlCQUNULHFFQUFDLDZDQUFEO0FBQW9CLFlBQUksRUFBRUE7QUFBMUIsU0FBV0EsSUFBSSxDQUFDQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBRWNKLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ub2RvTGlzdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuLi9Ub2RvJztcblxuZnVuY3Rpb24gVG9kb0xpc3QoeyB0b2RvcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgIDxUb2RvIGtleT17dG9kby5pZH0gdG9kbz17dG9kb30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoList/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_TodoForm3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TodoForm3 */ \"./components/TodoForm3/index.js\");\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList/index.js\");\n\n\nvar _jsxFileName = \"/Users/igor/Documents/www/todo-next/pages/index.js\";\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"createGlobalStyle\"]`\n\n*{\n margin: 0;\n padding: 0;\n outline: 0;\n box-sizing: border-box;\n}\n\nbody{\n  -webkit-font-smoothing: antialised;\n  background:#403f4d;\n}\n\nbody, input , button{\n  font-family: 'Nunito', sans-serif;\n}\n\n#root{\n  margin: 0 auto;\n  /* padding: 0 20px 50px; */\n}\n\nbutton{\n  cursor: pointer;\n}\n\n\n\n\n`;\n\n\n\nfunction index() {\n  const {\n    0: todos,\n    1: setTodos\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const storageTodos = JSON.parse(localStorage.getItem('TodoLuby:todos'));\n\n    if (storageTodos) {\n      setTodos(storageTodos);\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    localStorage.setItem('TodoLuby:todos', JSON.stringify(todos));\n  }, [todos]);\n\n  function addTodo(todo) {\n    setTodos([todo, ...todos]);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TodoForm3__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      addTodo: addTodo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), todos.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TodoList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      todos: todos\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        textAlign: 'center'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        style: {\n          color: '#fff'\n        },\n        children: \"N\\xE3o tem tarefas adicionadas\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GlobalStyle, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJpbmRleCIsInRvZG9zIiwic2V0VG9kb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0b3JhZ2VUb2RvcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9kbyIsInRvZG8iLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTlCQTtBQWdDQTtBQUNBOztBQUVBLFNBQVNDLEtBQVQsR0FBaUI7QUFDZixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZ0JBQXJCLENBQVgsQ0FBckI7O0FBQ0EsUUFBSUosWUFBSixFQUFrQjtBQUNoQkgsY0FBUSxDQUFDRyxZQUFELENBQVI7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQUQseURBQVMsQ0FBQyxNQUFNO0FBQ2RJLGdCQUFZLENBQUNFLE9BQWIsQ0FBcUIsZ0JBQXJCLEVBQXVDSixJQUFJLENBQUNLLFNBQUwsQ0FBZVYsS0FBZixDQUF2QztBQUNELEdBRlEsRUFFTixDQUFDQSxLQUFELENBRk0sQ0FBVDs7QUFJQSxXQUFTVyxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUNyQlgsWUFBUSxDQUFDLENBQUNXLElBQUQsRUFBTyxHQUFHWixLQUFWLENBQUQsQ0FBUjtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBWUUscUVBQUMsNkRBQUQ7QUFBVSxhQUFPLEVBQUVXO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixFQWNHWCxLQUFLLENBQUNhLE1BQU4sR0FBZSxDQUFmLGdCQUNDLHFFQUFDLDREQUFEO0FBQVUsV0FBSyxFQUFFYjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZ0JBR0M7QUFBSyxXQUFLLEVBQUU7QUFBRWMsaUJBQVMsRUFBRTtBQUFiLE9BQVo7QUFBQSw2QkFDRTtBQUFJLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUU7QUFBVCxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSixlQXVCRSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkY7QUFBQSxrQkFERjtBQTJCRDs7QUFDY2hCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5cbip7XG4gbWFyZ2luOiAwO1xuIHBhZGRpbmc6IDA7XG4gb3V0bGluZTogMDtcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5e1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpc2VkO1xuICBiYWNrZ3JvdW5kOiM0MDNmNGQ7XG59XG5cbmJvZHksIGlucHV0ICwgYnV0dG9ue1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG59XG5cbiNyb290e1xuICBtYXJnaW46IDAgYXV0bztcbiAgLyogcGFkZGluZzogMCAyMHB4IDUwcHg7ICovXG59XG5cbmJ1dHRvbntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuXG5gO1xuXG5pbXBvcnQgVG9kb0Zvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvRm9ybTMnO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0xpc3QnO1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb2RvTHVieTp0b2RvcycpKTtcbiAgICBpZiAoc3RvcmFnZVRvZG9zKSB7XG4gICAgICBzZXRUb2RvcyhzdG9yYWdlVG9kb3MpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RvZG9MdWJ5OnRvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfSwgW3RvZG9zXSk7XG5cbiAgZnVuY3Rpb24gYWRkVG9kbyh0b2RvKSB7XG4gICAgc2V0VG9kb3MoW3RvZG8sIC4uLnRvZG9zXSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogPGZvcm0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlnaXRlIHVtYSB0YXJlZmEnXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5BZGljaW9uYXI8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT4gKi99XG5cbiAgICAgIHsvKiA8VG9kb0Zvcm0gYWRkVG9kbz17YWRkVG9kb30gLz4gKi99XG4gICAgICA8VG9kb0Zvcm0gYWRkVG9kbz17YWRkVG9kb30gLz5cblxuICAgICAge3RvZG9zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxUb2RvTGlzdCB0b2Rvcz17dG9kb3N9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX0+TsOjbyB0ZW0gdGFyZWZhcyBhZGljaW9uYWRhczwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIDxUb2RvTGlzdCB0b2Rvcz17dG9kb3N9IC8+ICovfVxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgPC8+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIj83MGQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZvcm1pay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///formik\n");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"polished\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb2xpc2hlZFwiP2QyZWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicG9saXNoZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb2xpc2hlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///polished\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCI/MzcxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid\n");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yup\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIj8wZGEwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Inl1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///yup\n");

/***/ })

/******/ });