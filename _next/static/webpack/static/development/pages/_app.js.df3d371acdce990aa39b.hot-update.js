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
    _this.setActivePost = _this.setActivePost.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
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
      var mode_value = localStorage.getItem('mode') || 'light';
      var grid_value = localStorage.getItem('grid') || 'hide';
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
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1356236813",
        dynamic: [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]],
        __self: this
      }, "*{box-sizing:border-box;}html{font-family:'Inter',serif;font-size:".concat(_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], "px;line-height:").concat(_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], "px;text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;font-feature-settings:'ss02' 1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{margin:0;overflow-x:hidden;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}a:hover{opacity:0.75;}a.no-hover:hover{opacity:1;}.hover_box_overlay{opacity:0;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}.hover_box:hover .hover_box_overlay{opacity:1;}a.gray-backer{-webkit-transition:background 0.05s linear;transition:background 0.05s linear;}a.gray-backer:hover{background:#f3f3f3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFMkIsQUFHbUMsQUFHSyxBQVdsQixBQUlLLEFBS0QsQUFHSCxBQUdBLEFBSUEsQUFHeUIsQUFHaEIsU0F4QkQsQ0FZcEIsQUFHbUMsQUFJbkMsR0FWQSxDQUx1QixLQXFCdkIsR0F2Q0EsSUFHMkMsQ0FZM0MscUNBSW1DLEdBZlUsV0FnQzdDLE1BTkEsMEJBekJvQyw0QkFlcEMsTUFkK0IsNkJBQ1Qsb0JBQ1csK0JBQ0ksbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFBvc3RMYXlvdXQgfSBmcm9tICcuLi9wYXJ0cy9MYXlvdXQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb250X3NpemUsIGxpbmVfaGVpZ2h0LCBmb250X21pbiwgc20gfSBmcm9tICcuLi8uLi9leHAvcGFydHMvU3RhdGljJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3BhcnRzL0hlYWRlcidcblxuLy8gT3ZlcnJpZGUgdGhlIEFwcCBjbGFzcyB0byBwdXQgbGF5b3V0IGNvbXBvbmVudCBhcm91bmQgdGhlIHBhZ2UgY29udGVudHNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMjY3VzdG9tLWFwcFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHd3OiAwLFxuICAgICAgb3B0aW1hbDogbnVsbCxcbiAgICAgIGdyaWRfY2FudmFzOiBudWxsLFxuICAgICAgbW9kZTogJ2xpZ2h0JyxcbiAgICAgIGdyaWQ6ICdoaWRlJyxcbiAgICAgIHNob3dpbmdfcG9zdHM6IDI1LFxuICAgIH1cbiAgICB0aGlzLnNldFNpemUgPSB0aGlzLnNldFNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0U2l6ZSA9IGRlYm91bmNlKHRoaXMuc2V0U2l6ZSwgMTAwKVxuICAgIHRoaXMuc2V0QWN0aXZlUG9zdCA9IHRoaXMuc2V0QWN0aXZlUG9zdC5iaW5kKHRoaXMpXG4gIH1cblxuICBzZXRTaXplKCkge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGN0eC5mb250ID0gYG5vcm1hbCAke2ZvbnRfc2l6ZX1weCBJbnRlcmBcbiAgICBsZXQgd2lkdGggPSBjdHgubWVhc3VyZVRleHQoXG4gICAgICAndGhvdXNhbmQgd3JpdGVycy4gV2l0aCBvdmVyIGEgbWlsbGlvbiBwZW9wbGUgZnJvbSB2YXJpb3VzIGZpZWxkcyB3b3JraW5nJ1xuICAgICkud2lkdGhcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICB3dzogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIHdoOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIG9wdGltYWw6IHdpZHRoICsgZm9udF9zaXplICogbGluZV9oZWlnaHQsXG4gICAgICAgIC8vIG9wdGltYWw6IDYzMy41MDI0NDE0MDYyNSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7fVxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFNpemUpXG4gICAgdGhpcy5zZXRTaXplKClcblxuICAgIGxldCBtb2RlX3ZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKSB8fCAnbGlnaHQnXG4gICAgbGV0IGdyaWRfdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ3JpZCcpIHx8ICdoaWRlJ1xuXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGdyaWRfY2FudmFzOiBjYW52YXMsIG1vZGU6IG1vZGVfdmFsdWUsIGdyaWQ6IGdyaWRfdmFsdWUgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB3dywgd2gsIG9wdGltYWwsIG1vZGUsIGdyaWQsIGdyaWRfY2FudmFzLCBzaG93aW5nX3Bvc3RzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyXG5cbiAgICBsZXQgaXNfcG9zdCA9IHBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9wb3N0cy8nKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250X3NpemV9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHtmb250X3NpemUgKiBsaW5lX2hlaWdodH1weDtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdrZXJuJztcbiAgICAgICAgICAgIGZvbnQta2VybmluZzogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnc3MwMicgMTtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDI1cyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby1ob3Zlcjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXJfYm94X292ZXJsYXkge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wMjVzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyX2JveDpob3ZlciAuaG92ZXJfYm94X292ZXJsYXkge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5ncmF5LWJhY2tlciB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMDVzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5ncmF5LWJhY2tlcjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgICAge2lzX3Bvc3QgPyAoXG4gICAgICAgICAgICA8UG9zdExheW91dCBwYXRobmFtZT17cGF0aG5hbWV9PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1Bvc3RMYXlvdXQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), is_post ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Layout__WEBPACK_IMPORTED_MODULE_9__["PostLayout"], {
        pathname: pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.df3d371acdce990aa39b.hot-update.js.map