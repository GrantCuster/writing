webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _parts_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parts/Layout */ "./parts/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../exp/parts/Static */ "../exp/parts/Static.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _parts_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/Header */ "./parts/Header.js");







var _jsxFileName = "/Users/grant.custer/Sites/ffgrids/fastforward/pages/_app.js";






 // Override the App class to put layout component around the page contents
// https://github.com/zeit/next.js#custom-app

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _App);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).call(this, props));
    _this.state = {
      ww: 0,
      optimal: null,
      grid_canvas: null,
      mode: 'light',
      grid: 'hide',
      showing_posts: 25
    };
    _this.setSize = _this.setSize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.setSize = Object(lodash__WEBPACK_IMPORTED_MODULE_12__["debounce"])(_this.setSize, 100);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "setSize",
    value: function setSize() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      ctx.font = "normal ".concat(_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], "px Inter");
      var width = ctx.measureText('thousand writers. With over a million people from various fields working').width;
      this.setState({
        ww: window.innerWidth,
        wh: window.innerHeight,
        optimal: width + _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"] // optimal: 633.50244140625,

      }, function () {});
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.setSize);
      this.setSize();
      var canvas = document.createElement('canvas');
      this.setState({
        grid_canvas: canvas,
        mode: mode_value,
        grid: grid_value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          ww = _this$state.ww,
          wh = _this$state.wh,
          optimal = _this$state.optimal,
          mode = _this$state.mode,
          grid = _this$state.grid,
          grid_canvas = _this$state.grid_canvas,
          showing_posts = _this$state.showing_posts;
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var pathname = this.props.router.pathname;
      var is_post = pathname.startsWith('/posts/');
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1356236813",
        dynamic: [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]],
        __self: this
      }, "*{box-sizing:border-box;}html{font-family:'Inter',serif;font-size:".concat(_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], "px;line-height:").concat(_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], "px;text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;font-feature-settings:'ss02' 1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{margin:0;overflow-x:hidden;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}a:hover{opacity:0.75;}a.no-hover:hover{opacity:1;}.hover_box_overlay{opacity:0;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}.hover_box:hover .hover_box_overlay{opacity:1;}a.gray-backer{-webkit-transition:background 0.05s linear;transition:background 0.05s linear;}a.gray-backer:hover{background:#f3f3f3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREMkIsQUFHbUMsQUFHSyxBQVdsQixBQUlLLEFBS0QsQUFHSCxBQUdBLEFBSUEsQUFHeUIsQUFHaEIsU0F4QkQsQ0FZcEIsQUFHbUMsQUFJbkMsR0FWQSxDQUx1QixLQXFCdkIsR0F2Q0EsSUFHMkMsQ0FZM0MscUNBSW1DLEdBZlUsV0FnQzdDLE1BTkEsMEJBekJvQyw0QkFlcEMsTUFkK0IsNkJBQ1Qsb0JBQ1csK0JBQ0ksbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFBvc3RMYXlvdXQgfSBmcm9tICcuLi9wYXJ0cy9MYXlvdXQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb250X3NpemUsIGxpbmVfaGVpZ2h0LCBmb250X21pbiwgc20gfSBmcm9tICcuLi8uLi9leHAvcGFydHMvU3RhdGljJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3BhcnRzL0hlYWRlcidcblxuLy8gT3ZlcnJpZGUgdGhlIEFwcCBjbGFzcyB0byBwdXQgbGF5b3V0IGNvbXBvbmVudCBhcm91bmQgdGhlIHBhZ2UgY29udGVudHNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMjY3VzdG9tLWFwcFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHd3OiAwLFxuICAgICAgb3B0aW1hbDogbnVsbCxcbiAgICAgIGdyaWRfY2FudmFzOiBudWxsLFxuICAgICAgbW9kZTogJ2xpZ2h0JyxcbiAgICAgIGdyaWQ6ICdoaWRlJyxcbiAgICAgIHNob3dpbmdfcG9zdHM6IDI1LFxuICAgIH1cbiAgICB0aGlzLnNldFNpemUgPSB0aGlzLnNldFNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0U2l6ZSA9IGRlYm91bmNlKHRoaXMuc2V0U2l6ZSwgMTAwKVxuICB9XG5cbiAgc2V0U2l6ZSgpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjdHguZm9udCA9IGBub3JtYWwgJHtmb250X3NpemV9cHggSW50ZXJgXG4gICAgbGV0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KFxuICAgICAgJ3Rob3VzYW5kIHdyaXRlcnMuIFdpdGggb3ZlciBhIG1pbGxpb24gcGVvcGxlIGZyb20gdmFyaW91cyBmaWVsZHMgd29ya2luZydcbiAgICApLndpZHRoXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgd3c6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICB3aDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICBvcHRpbWFsOiB3aWR0aCArIGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0LFxuICAgICAgICAvLyBvcHRpbWFsOiA2MzMuNTAyNDQxNDA2MjUsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRTaXplKVxuICAgIHRoaXMuc2V0U2l6ZSgpXG5cbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICB0aGlzLnNldFN0YXRlKHsgZ3JpZF9jYW52YXM6IGNhbnZhcywgbW9kZTogbW9kZV92YWx1ZSwgZ3JpZDogZ3JpZF92YWx1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHd3LCB3aCwgb3B0aW1hbCwgbW9kZSwgZ3JpZCwgZ3JpZF9jYW52YXMsIHNob3dpbmdfcG9zdHMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXJcblxuICAgIGxldCBpc19wb3N0ID0gcGF0aG5hbWUuc3RhcnRzV2l0aCgnL3Bvc3RzLycpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRfc2l6ZX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2ZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0fXB4O1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgICAgZm9udC1rZXJuaW5nOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdzczAyJyAxO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wMjVzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLWhvdmVyOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlcl9ib3hfb3ZlcmxheSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjAyNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXJfYm94OmhvdmVyIC5ob3Zlcl9ib3hfb3ZlcmxheSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLmdyYXktYmFja2VyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4wNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLmdyYXktYmFja2VyOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgICB7aXNfcG9zdCA/IChcbiAgICAgICAgICAgIDxQb3N0TGF5b3V0IHBhdGhuYW1lPXtwYXRobmFtZX0+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvUG9zdExheW91dD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), is_post ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Layout__WEBPACK_IMPORTED_MODULE_9__["PostLayout"], {
        pathname: pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.a0c479b49a0581bedf34.hot-update.js.map