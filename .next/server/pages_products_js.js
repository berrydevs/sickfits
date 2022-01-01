/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "pages_products_js";
exports.ids = ["pages_products_js"];
exports.modules = {

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/tamir/Desktop/projects/sick-fits/frontend/pages/products.js\";\n\n\n\nconst ALL_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`\n    query ALL_PRODUCTS_QUERY {\n        allProducts {\n            id\n            name\n            description\n            photo {\n                id\n                image {\n                    publicUrlTransformed\n                }\n            }\n        }\n    }\n`;\nconst ProductListStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({\n  displayName: \"products__ProductListStyles\",\n  componentId: \"sc-12d9fqq-0\"\n})([\"display:grid;grid-template-columns:1fr 1fr;gap:60px;\"]);\nfunction Products() {\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(ALL_PRODUCTS_QUERY);\n  console.log(\"-> useQuery(ALL_PRODUCTS_QUERY)\", (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(ALL_PRODUCTS_QUERY));\n  console.log(\"-> loading\", loading);\n  console.log(\"-> error\", error);\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading..\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 24\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductListStyles, {\n      children: data.allProducts.map(product => {\n        /*#__PURE__*/\n        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: product.name\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 12\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9wcm9kdWN0cy5qcz82YWUwIl0sIm5hbWVzIjpbIkFMTF9QUk9EVUNUU19RVUVSWSIsImdxbCIsIlByb2R1Y3RMaXN0U3R5bGVzIiwic3R5bGVkIiwiUHJvZHVjdHMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJjb25zb2xlIiwibG9nIiwiYWxsUHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLGtCQUFrQixHQUFHQyxvREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZEE7QUFnQkEsTUFBTUMsaUJBQWlCLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDREQUF2QjtBQU1lLFNBQVNDLFFBQVQsR0FBb0I7QUFDL0IsUUFBTTtBQUFDQyxRQUFEO0FBQU9DLFNBQVA7QUFBY0M7QUFBZCxNQUF5QkMsd0RBQVEsQ0FBQ1Isa0JBQUQsQ0FBdkM7QUFDQVMsU0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVosRUFBK0NGLHdEQUFRLENBQUNSLGtCQUFELENBQXZEO0FBQ0FTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJILE9BQTFCO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JKLEtBQXhCO0FBQ0EsTUFBR0MsT0FBSCxFQUFZLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWixzQkFBTztBQUFBLDJCQUNILDhEQUFDLGlCQUFEO0FBQUEsZ0JBQ0tGLElBQUksQ0FBQ00sV0FBTCxDQUFpQkMsR0FBakIsQ0FBcUJDLE9BQU8sSUFBSTtBQUM3QjtBQUFBO0FBQUEsb0JBQXFCQSxPQUFPLENBQUNDO0FBQTdCLFdBQVFELE9BQU8sQ0FBQ0UsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNILE9BRkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBUUgiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQge3VzZVF1ZXJ5fSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cblxuY29uc3QgQUxMX1BST0RVQ1RTX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IEFMTF9QUk9EVUNUU19RVUVSWSB7XG4gICAgICAgIGFsbFByb2R1Y3RzIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgcGhvdG8ge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmBcblxuY29uc3QgUHJvZHVjdExpc3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZ3JpZDsgXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5nYXA6IDYwcHg7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xuICAgIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZ30gPSB1c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUlkpXG4gICAgY29uc29sZS5sb2coXCItPiB1c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUlkpXCIsIHVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWSkpO1xuICAgIGNvbnNvbGUubG9nKFwiLT4gbG9hZGluZ1wiLCBsb2FkaW5nKTtcbiAgICBjb25zb2xlLmxvZyhcIi0+IGVycm9yXCIsIGVycm9yKTtcbiAgICBpZihsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uPC9wPlxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8UHJvZHVjdExpc3RTdHlsZXM+XG4gICAgICAgICAgICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgPHAga2V5PXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1Byb2R1Y3RMaXN0U3R5bGVzPlxuICAgICAgICB7Lyo8UHJvZHVjdC8+Ki99XG4gICAgPC9kaXY+XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products.js\n");

/***/ })

};
;