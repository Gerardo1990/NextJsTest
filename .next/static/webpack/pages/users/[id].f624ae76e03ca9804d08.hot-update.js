self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Gerardo_Desktop_nextproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js?a34a0");
/* harmony import */ var C_Users_Gerardo_Desktop_nextproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Gerardo_Desktop_nextproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Gerardo_Desktop_nextproject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Gerardo\\Desktop\\nextproject\\pages\\users\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();




var User = function User() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var id = router.query.id;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
    children: "Profile"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 12
  }, _this);
};

_s(User, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = User;

User.getInitialProps = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Gerardo_Desktop_nextproject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Gerardo_Desktop_nextproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {
    return C_Users_Gerardo_Desktop_nextproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()("https://reqres.in/api/users/".concat(ctx.query.id));

          case 2:
            return _context.abrupt("return", {});

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (User);

var _c;

$RefreshReg$(_c, "User");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/* globals self */exports.Headers=self.Headers;exports.Request=self.Request;exports.Response=self.Response;exports.fetch=self.fetch;
//# sourceMappingURL=whatwg-fetch.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL2ZldGNoL3doYXR3Zy1mZXRjaC5qcyJdLCJuYW1lcyI6WyJVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWhCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFGZ0IsTUFHVEMsRUFIUyxHQUdKRixNQUFNLENBQUNHLEtBSEgsQ0FHVEQsRUFIUztBQUtmLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDSCxDQU5EOztHQUFNSCxJO1VBRVlFLGtEOzs7S0FGWkYsSTs7QUFRTkEsSUFBSSxDQUFDSyxlQUFMO0FBQUEsdVJBQXVCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNkQyx1REFBSyx1Q0FBaUNELEdBQUcsQ0FBQ0YsS0FBSixDQUFVRCxFQUEzQyxFQURTOztBQUFBO0FBQUEsNkNBRVosRUFGWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSwrREFBZUgsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQU8sQ0FBQyxvRkFBYztBQUN0Qjs7Ozs7Ozs7Ozs7O0FDTGEsa0JBQWtCLGVBQWUsY0FBYyxlQUFlLGNBQWMsZ0JBQWdCLGVBQWUsYUFBYTtBQUNySSx3QyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2Vycy9baWRdLmY2MjRhZTc2ZTAzY2E5ODA0ZDA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuXHJcbmNvbnN0IFVzZXIgPSAoKSA9PiB7XHJcblxyXG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIgKCk7XHJcbiAgIGNvbnN0IHtpZH09IHJvdXRlci5xdWVyeVxyXG4gICBcclxuICAgIHJldHVybiA8aDE+UHJvZmlsZTwvaDE+XHJcbn1cclxuXHJcblVzZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICBhd2FpdCBmZXRjaCAoYGh0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycy8ke2N0eC5xdWVyeS5pZH1gKVxyXG4gICAgcmV0dXJuIHt9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlciIsIi8vIHRoZSB3aGF0d2ctZmV0Y2ggcG9seWZpbGwgaW5zdGFsbHMgdGhlIGZldGNoKCkgZnVuY3Rpb25cbi8vIG9uIHRoZSBnbG9iYWwgb2JqZWN0ICh3aW5kb3cgb3Igc2VsZilcbi8vXG4vLyBSZXR1cm4gdGhhdCBhcyB0aGUgZXhwb3J0IGZvciB1c2UgaW4gV2VicGFjaywgQnJvd3NlcmlmeSBldGMuXG5yZXF1aXJlKCd3aGF0d2ctZmV0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gc2VsZi5mZXRjaC5iaW5kKHNlbGYpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7LyogZ2xvYmFscyBzZWxmICovZXhwb3J0cy5IZWFkZXJzPXNlbGYuSGVhZGVycztleHBvcnRzLlJlcXVlc3Q9c2VsZi5SZXF1ZXN0O2V4cG9ydHMuUmVzcG9uc2U9c2VsZi5SZXNwb25zZTtleHBvcnRzLmZldGNoPXNlbGYuZmV0Y2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aGF0d2ctZmV0Y2guanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==