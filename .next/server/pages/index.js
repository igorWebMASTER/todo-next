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

/***/ "./components/TodoForm2/index.js":
/*!***************************************!*\
  !*** ./components/TodoForm2/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"yup\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ \"./components/TodoForm2/style.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/igor/Documents/www/todo-next/components/TodoForm2/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst TodoForm2 = ({\n  addTodo\n}) => {\n  const addTodoSchema = yup__WEBPACK_IMPORTED_MODULE_4__[\"object\"]().shape({\n    task: yup__WEBPACK_IMPORTED_MODULE_4__[\"string\"]().required('Tarefa é obrigatória').min(4, 'Tarefa com nome curto. deve conter mínimo de 5 letras')\n  });\n  const {\n    0: todo,\n    1: setTodo\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    id: '',\n    task: ''\n  });\n  const initialValues = {\n    task: ''\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"TodoLuby \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n      initialValues: initialValues,\n      validationSchema: addTodoSchema,\n      onSubmit: values => {\n        addTodo(_objectSpread(_objectSpread({}, todo), {}, {\n          id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])()\n        }));\n        setTodo(_objectSpread(_objectSpread({}, todo), {}, {\n          task: values.task\n        }));\n      },\n      children: formik => {\n        const {\n          values\n        } = formik;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n            onSubmit: formik.handleSubmit,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"formTodo\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                style: {\n                  display: 'flex'\n                },\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"inputTask\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                    type: \"text\",\n                    name: \"task\",\n                    id: \"task\",\n                    onChange: formik.handleChange,\n                    placeholder: \"Digite uma tarefa\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 45,\n                    columnNumber: 23\n                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n                    name: \"task\",\n                    component: \"span\",\n                    className: \"error\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 52,\n                    columnNumber: 23\n                  }, undefined)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 21\n                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                    type: \"submit\",\n                    children: \"Adicionar\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 59,\n                    columnNumber: 23\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 21\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 19\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 17\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, undefined);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoForm2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9Gb3JtMi9pbmRleC5qcz81YjNhIl0sIm5hbWVzIjpbIlRvZG9Gb3JtMiIsImFkZFRvZG8iLCJhZGRUb2RvU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJ0YXNrIiwicmVxdWlyZWQiLCJtaW4iLCJ0b2RvIiwic2V0VG9kbyIsInVzZVN0YXRlIiwiaWQiLCJpbml0aWFsVmFsdWVzIiwidmFsdWVzIiwidXVpZHY0IiwiZm9ybWlrIiwiaGFuZGxlU3VibWl0IiwiZGlzcGxheSIsImhhbmRsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQ2pDLFFBQU1DLGFBQWEsR0FBR0MsMENBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUN2Q0MsUUFBSSxFQUFFRiwwQ0FBQSxHQUNIRyxRQURHLENBQ00sc0JBRE4sRUFFSEMsR0FGRyxDQUVDLENBRkQsRUFFSSx1REFGSjtBQURpQyxHQUFuQixDQUF0QjtBQU1BLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQztBQUFFQyxNQUFFLEVBQUUsRUFBTjtBQUFVTixRQUFJLEVBQUU7QUFBaEIsR0FBRCxDQUFoQztBQUVBLFFBQU1PLGFBQWEsR0FBRztBQUNwQlAsUUFBSSxFQUFFO0FBRGMsR0FBdEI7QUFJQSxzQkFDRSxxRUFBQyxnREFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsNkNBQUQ7QUFDRSxtQkFBYSxFQUFFTyxhQURqQjtBQUVFLHNCQUFnQixFQUFFVixhQUZwQjtBQUdFLGNBQVEsRUFBR1csTUFBRCxJQUFZO0FBQ3BCWixlQUFPLGlDQUFNTyxJQUFOO0FBQVlHLFlBQUUsRUFBRUcsK0NBQU07QUFBdEIsV0FBUDtBQUNBTCxlQUFPLGlDQUFNRCxJQUFOO0FBQVlILGNBQUksRUFBRVEsTUFBTSxDQUFDUjtBQUF6QixXQUFQO0FBQ0QsT0FOSDtBQUFBLGdCQVFJVSxNQUFELElBQVk7QUFDWCxjQUFNO0FBQUVGO0FBQUYsWUFBYUUsTUFBbkI7QUFFQSw0QkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNFLHFFQUFDLDJDQUFEO0FBQU0sb0JBQVEsRUFBRUEsTUFBTSxDQUFDQyxZQUF2QjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQUEscUNBQ0U7QUFDRSxxQkFBSyxFQUFFO0FBQ0xDLHlCQUFPLEVBQUU7QUFESixpQkFEVDtBQUFBLHdDQUtFO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQUEsMENBQ0UscUVBQUMsNENBQUQ7QUFDRSx3QkFBSSxFQUFDLE1BRFA7QUFFRSx3QkFBSSxFQUFDLE1BRlA7QUFHRSxzQkFBRSxFQUFDLE1BSEw7QUFJRSw0QkFBUSxFQUFFRixNQUFNLENBQUNHLFlBSm5CO0FBS0UsK0JBQVcsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFRRSxxRUFBQyxtREFBRDtBQUNFLHdCQUFJLEVBQUMsTUFEUDtBQUVFLDZCQUFTLEVBQUMsTUFGWjtBQUdFLDZCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFMRixlQW1CRTtBQUFBLHlDQUNFO0FBQVEsd0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBK0JEO0FBMUNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpREQsQ0E5REQ7O0FBZ0VlbEIsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9Gb3JtMi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkLCB1c2VGb3JtaWssIEVycm9yTWVzc2FnZSB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmNvbnN0IFRvZG9Gb3JtMiA9ICh7IGFkZFRvZG8gfSkgPT4ge1xuICBjb25zdCBhZGRUb2RvU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICB0YXNrOiBZdXAuc3RyaW5nKClcbiAgICAgIC5yZXF1aXJlZCgnVGFyZWZhIMOpIG9icmlnYXTDs3JpYScpXG4gICAgICAubWluKDQsICdUYXJlZmEgY29tIG5vbWUgY3VydG8uIGRldmUgY29udGVyIG3DrW5pbW8gZGUgNSBsZXRyYXMnKSxcbiAgfSk7XG5cbiAgY29uc3QgW3RvZG8sIHNldFRvZG9dID0gdXNlU3RhdGUoeyBpZDogJycsIHRhc2s6ICcnIH0pO1xuXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4gICAgdGFzazogJycsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxPlRvZG9MdWJ5IDwvaDE+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2FkZFRvZG9TY2hlbWF9XG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgYWRkVG9kbyh7IC4uLnRvZG8sIGlkOiB1dWlkdjQoKSB9KTtcbiAgICAgICAgICBzZXRUb2RvKHsgLi4udG9kbywgdGFzazogdmFsdWVzLnRhc2sgfSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsoZm9ybWlrKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IGZvcm1paztcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtVG9kbyc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXRUYXNrJz5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0YXNrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3Rhc2snXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgdW1hIHRhcmVmYSdcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Rhc2snXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J3NwYW4nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Vycm9yJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5BZGljaW9uYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0Zvcm0yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoForm2/index.js\n");

/***/ }),

/***/ "./components/TodoForm2/style.js":
/*!***************************************!*\
  !*** ./components/TodoForm2/style.js ***!
  \***************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ \"polished\");\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"style__Container\",\n  componentId: \"sc-1s98o40-0\"\n})([\"min-height:166px;font-size:12px;display:flex;margin:0 auto;border-radius:10px;margin:40px auto;flex-direction:column;justify-content:center;align-items:center;transition:all 400ms;h1{font-size:34px;position:absolute;top:1.5rem;color:#fff;}.formTodo{display:flex;align-content:center;width:100%;margin:0 auto;max-width:460px;padding:15px;.inputTask{display:flex;flex-direction:column;}input{height:48px;border:0;background:#2e2d34;color:#5d5d5f;min-width:250px;max-width:250px;font-size:14px;border-radius:3px;padding-left:15px;&::placeholder{color:#5d5d5f;}}button{height:48px;border:0;width:100%;color:#fff;font-size:14px;background:#13825c;min-width:130px;border-radius:3px;margin-left:10px;transition:background-color 300ms;cursor:pointer;}button:hover{background:\", \";}.error{padding-top:10px;color:#ed5249;}}@media screen and (max-width:760px){.formTodo{flex-direction:column;span{position:relative;}button,input{width:100%;}}div > h1{text-align:left;margin:1rem 0 0rem 1rem;}}div > h1{font-weight:500;font-size:22px;margin-top:10px;text-align:center;}@media screen and (max-width:760px){}\"], Object(polished__WEBPACK_IMPORTED_MODULE_1__[\"shade\"])(0.15, '#13825c'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9Gb3JtMi9zdHlsZS5qcz9kYmE3Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInNoYWRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtrQ0FnRUZDLHNEQUFLLENBQUMsSUFBRCxFQUFPLFNBQVAsQ0FoRUgsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVG9kb0Zvcm0yL3N0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzaGFkZSB9IGZyb20gJ3BvbGlzaGVkJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDE2NnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcztcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEuNXJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5mb3JtVG9kbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA0NjBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgLmlucHV0VGFzayB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjMmUyZDM0O1xuICAgICAgY29sb3I6ICM1ZDVkNWY7XG4gICAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogIzVkNWQ1ZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJhY2tncm91bmQ6ICMxMzgyNWM7XG4gICAgICBtaW4td2lkdGg6IDEzMHB4O1xuXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7c2hhZGUoMC4xNSwgJyMxMzgyNWMnKX07XG4gICAgfVxuXG4gICAgLmVycm9yIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgY29sb3I6ICNlZDUyNDk7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICAuZm9ybVRvZG8ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uLFxuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYgPiBoMSB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luOiAxcmVtIDAgMHJlbSAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIGRpdiA+IGgxIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TodoForm2/style.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_TodoForm2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TodoForm2 */ \"./components/TodoForm2/index.js\");\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList/index.js\");\n\n\nvar _jsxFileName = \"/Users/igor/Documents/www/todo-next/pages/index.js\";\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"createGlobalStyle\"]`\n\n*{\n margin: 0;\n padding: 0;\n outline: 0;\n box-sizing: border-box;\n}\n\nbody{\n  -webkit-font-smoothing: antialised;\n  background:#403f4d;\n}\n\nbody, input , button{\n  font-family: 'Nunito', sans-serif;\n}\n\n#root{\n  margin: 0 auto;\n}\n\nbutton{\n  cursor: pointer;\n}\n\n\n\n\n`;\n\n\n\nfunction index() {\n  const {\n    0: todos,\n    1: setTodos\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const storageTodos = JSON.parse(localStorage.getItem('TodoLuby:todos'));\n\n    if (storageTodos) {\n      setTodos(storageTodos);\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    localStorage.setItem('TodoLuby:todos', JSON.stringify(todos));\n  }, [todos]);\n\n  function addTodo(todo) {\n    setTodos([todo, ...todos]);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TodoForm2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      addTodo: addTodo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), todos.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TodoList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      todos: todos\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        textAlign: 'center'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        style: {\n          color: '#fff'\n        },\n        children: \"N\\xE3o tem tarefas adicionadas\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GlobalStyle, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJpbmRleCIsInRvZG9zIiwic2V0VG9kb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0b3JhZ2VUb2RvcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9kbyIsInRvZG8iLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E3QkE7QUErQkE7QUFDQTs7QUFFQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2YsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGdCQUFyQixDQUFYLENBQXJCOztBQUNBLFFBQUlKLFlBQUosRUFBa0I7QUFDaEJILGNBQVEsQ0FBQ0csWUFBRCxDQUFSO0FBQ0Q7QUFDRixHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0FELHlEQUFTLENBQUMsTUFBTTtBQUNkSSxnQkFBWSxDQUFDRSxPQUFiLENBQXFCLGdCQUFyQixFQUF1Q0osSUFBSSxDQUFDSyxTQUFMLENBQWVWLEtBQWYsQ0FBdkM7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsS0FBRCxDQUZNLENBQVQ7O0FBSUEsV0FBU1csT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDckJYLFlBQVEsQ0FBQyxDQUFDVyxJQUFELEVBQU8sR0FBR1osS0FBVixDQUFELENBQVI7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDZEQUFEO0FBQVUsYUFBTyxFQUFFVztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFHR1gsS0FBSyxDQUFDYSxNQUFOLEdBQWUsQ0FBZixnQkFDQyxxRUFBQyw0REFBRDtBQUFVLFdBQUssRUFBRWI7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGdCQUdDO0FBQUssV0FBSyxFQUFFO0FBQUVjLGlCQUFTLEVBQUU7QUFBYixPQUFaO0FBQUEsNkJBQ0U7QUFBSSxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQVdFLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUEsa0JBREY7QUFlRDs7QUFDY2hCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5cbip7XG4gbWFyZ2luOiAwO1xuIHBhZGRpbmc6IDA7XG4gb3V0bGluZTogMDtcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5e1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpc2VkO1xuICBiYWNrZ3JvdW5kOiM0MDNmNGQ7XG59XG5cbmJvZHksIGlucHV0ICwgYnV0dG9ue1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG59XG5cbiNyb290e1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuYnV0dG9ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG5cbmA7XG5cbmltcG9ydCBUb2RvRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9Gb3JtMic7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvTGlzdCc7XG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2VUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RvZG9MdWJ5OnRvZG9zJykpO1xuICAgIGlmIChzdG9yYWdlVG9kb3MpIHtcbiAgICAgIHNldFRvZG9zKHN0b3JhZ2VUb2Rvcyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9kb0x1Ynk6dG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICB9LCBbdG9kb3NdKTtcblxuICBmdW5jdGlvbiBhZGRUb2RvKHRvZG8pIHtcbiAgICBzZXRUb2RvcyhbdG9kbywgLi4udG9kb3NdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUb2RvRm9ybSBhZGRUb2RvPXthZGRUb2RvfSAvPlxuXG4gICAgICB7dG9kb3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXt0b2Rvc30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT5Ow6NvIHRlbSB0YXJlZmFzIGFkaWNpb25hZGFzPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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