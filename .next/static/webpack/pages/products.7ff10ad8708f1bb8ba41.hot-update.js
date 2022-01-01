/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_tamir_Desktop_projects_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Product */ \"./components/Product.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/tamir/Desktop/projects/sick-fits/frontend/pages/products.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_home_tamir_Desktop_projects_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n    query ALL_PRODUCTS_QUERY {\\n        allProducts {\\n            id\\n            name\\n            description\\n            photo {\\n                id\\n                image {\\n                    publicUrlTransformed\\n                }\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar ALL_PRODUCTS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__.default)(_templateObject());\nvar ProductListStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({\n  displayName: \"products__ProductListStyles\",\n  componentId: \"sc-12d9fqq-0\"\n})([\"display:grid;grid-template-columns:1fr 1fr;gap:60px;\"]);\n_c = ProductListStyles;\nfunction Products() {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(ALL_PRODUCTS_QUERY),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  console.log(\"-> loading\", loading);\n  console.log(\"-> error\", error);\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading..\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 24\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductListStyles, {\n      children: data.allProducts.map(function (product) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n          product: product\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 12\n  }, this);\n}\n\n_s(Products, \"Z+0LgrSWpTZsLds+tjQq9+67f1U=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];\n});\n\n_c2 = Products;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProductListStyles\");\n$RefreshReg$(_c2, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanM/NmFlMCJdLCJuYW1lcyI6WyJBTExfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJQcm9kdWN0TGlzdFN0eWxlcyIsInN0eWxlZCIsIlByb2R1Y3RzIiwidXNlUXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImFsbFByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxrQkFBa0IsR0FBR0Msb0RBQUgsbUJBQXhCO0FBZ0JBLElBQU1DLGlCQUFpQixHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw0REFBdkI7S0FBTUQsaUI7QUFNUyxTQUFTRSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0FDLHdEQUFRLENBQUNMLGtCQUFELENBRFI7QUFBQSxNQUN4Qk0sSUFEd0IsYUFDeEJBLElBRHdCO0FBQUEsTUFDbEJDLEtBRGtCLGFBQ2xCQSxLQURrQjtBQUFBLE1BQ1hDLE9BRFcsYUFDWEEsT0FEVzs7QUFFL0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJGLE9BQTFCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JILEtBQXhCO0FBQ0EsTUFBR0MsT0FBSCxFQUFZLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWixzQkFBTztBQUFBLDJCQUNILDhEQUFDLGlCQUFEO0FBQUEsZ0JBQ0tGLElBQUksQ0FBQ0ssV0FBTCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQUMsT0FBTztBQUFBLDRCQUN6Qiw4REFBQyx3REFBRDtBQUEwQixpQkFBTyxFQUFFQTtBQUFuQyxXQUFjQSxPQUFPLENBQUNDLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHlCO0FBQUEsT0FBNUI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBU0g7O0dBZHVCVixRO1VBQ1dDLG9EOzs7TUFEWEQsUSIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RcIjtcblxuXG5jb25zdCBBTExfUFJPRFVDVFNfUVVFUlkgPSBncWxgXG4gICAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZIHtcbiAgICAgICAgYWxsUHJvZHVjdHMge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBwaG90byB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYFxuXG5jb25zdCBQcm9kdWN0TGlzdFN0eWxlcyA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBncmlkOyBcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbmdhcDogNjBweDtcbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XG4gICAgY29uc3Qge2RhdGEsIGVycm9yLCBsb2FkaW5nfSA9IHVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWSlcbiAgICBjb25zb2xlLmxvZyhcIi0+IGxvYWRpbmdcIiwgbG9hZGluZyk7XG4gICAgY29uc29sZS5sb2coXCItPiBlcnJvclwiLCBlcnJvcik7XG4gICAgaWYobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLjwvcD5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPFByb2R1Y3RMaXN0U3R5bGVzPlxuICAgICAgICAgICAge2RhdGEuYWxsUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1Byb2R1Y3RMaXN0U3R5bGVzPlxuXG4gICAgICAgIHsvKjxQcm9kdWN0Lz4qL31cbiAgICA8L2Rpdj5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products.js\n");

/***/ })

});