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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _parts_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parts/Layout */ "./parts/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _parts_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/Header */ "./parts/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_16__);







var _jsxFileName = "/Users/grant.custer/Sites/ffgrids/writing/pages/_app.js";









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
      ww: 640,
      wh: 480,
      optimal: 600,
      loaded: false,
      render_info: null,
      origin: null
    };
    _this.setSize = _this.setSize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.setSize = Object(lodash__WEBPACK_IMPORTED_MODULE_13__["debounce"])(_this.setSize, 100);
    _this.link = _this.link.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "link",
    value: function link(href) {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        href: href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, href);
    }
  }, {
    key: "setSize",
    value: function setSize() {
      this.setState({
        ww: document.documentElement.clientWidth,
        wh: window.innerHeight,
        loaded: true
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.setSize);
      this.setSize();
      var render_info = bowser__WEBPACK_IMPORTED_MODULE_16__["getParser"](window.navigator.userAgent).parse().parsedResult;
      this.setState({
        render_info: render_info,
        origin: window.location.href
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          ww = _this$state.ww,
          wh = _this$state.wh,
          loaded = _this$state.loaded,
          optimal = _this$state.optimal,
          render_info = _this$state.render_info,
          origin = _this$state.origin;
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var pathname = this.props.router.pathname;
      var is_post = pathname.startsWith('/posts/');
      var grem = _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"];
      var dividers = 4;
      var column_raw = Math.floor(ww / (optimal / dividers));
      var column_num = Math.floor(column_raw / 2) * 2;
      var c = Math.round(ww / column_raw * 10) / 10;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, ".js-no-flash { display: none }"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("noscript", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, ".js-no-flash { display: block }"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3523385867",
        dynamic: [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem],
        __self: this
      }, "@font-face{font-family:'Inter';font-style:normal;font-weight:400;src:url('/static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Regular.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:400;src:url('/static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Italic.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:700;src:url('/static/fonts/Inter-Bold.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Bold.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:700;src:url('/static/fonts/Inter-BoldItalic.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-BoldItalic.woff?v=3.5') format('woff');}*{box-sizing:border-box;}html{background:#efefef;font-family:'Inter',serif;font-size:".concat(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], "px;line-height:").concat(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], "px;text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;font-feature-settings:'ss02' 1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}pre{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto;overflow-x:auto;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo, Monaco,Courier New,monospace;}body{margin:0;}p{margin:0 0 0 0;text-indent:").concat(grem, "px;}a{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy93cml0aW5nL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUUyQixBQUdpQyxBQU9BLEFBT0EsQUFPQSxBQVNFLEFBR0gsQUFZUyxBQU9uQixBQUdNLEFBSUgsU0FOZCxHQU9BLEdBSjZDLElBdEJoQixDQWpDVCxBQU9BLEFBT0EsQUFPQSxFQVNwQixNQWUrQixVQTVDYixBQU9BLEFBT0EsQUFPQSxPQVl5QixTQS9CcUIsQUFPRCxBQU9GLEFBUU0sR0FxQmpELENBVWxCLGVBUmtDLGFBYlcsMkNBQ1QsZ0NBYXBDLEVBWitCLGNBbkIvQixJQVBBLEVBUEEsTUFzQkEsR0FZc0Isb0JBQ1csK0JBQ0ksbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy93cml0aW5nL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgUG9zdExheW91dCB9IGZyb20gJy4uL3BhcnRzL0xheW91dCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvbnRfc2l6ZSwgbGluZV9oZWlnaHQsIGZvbnRfbWluLCBzbSB9IGZyb20gJy4uL3BhcnRzL1N0YXRpYydcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9wYXJ0cy9IZWFkZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgKiBhcyBCb3dzZXIgZnJvbSAnYm93c2VyJ1xuXG4vLyBPdmVycmlkZSB0aGUgQXBwIGNsYXNzIHRvIHB1dCBsYXlvdXQgY29tcG9uZW50IGFyb3VuZCB0aGUgcGFnZSBjb250ZW50c1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcyNjdXN0b20tYXBwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd3c6IDY0MCxcbiAgICAgIHdoOiA0ODAsXG4gICAgICBvcHRpbWFsOiA2MDAsXG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgcmVuZGVyX2luZm86IG51bGwsXG4gICAgICBvcmlnaW46IG51bGwsXG4gICAgfVxuICAgIHRoaXMuc2V0U2l6ZSA9IHRoaXMuc2V0U2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTaXplID0gZGVib3VuY2UodGhpcy5zZXRTaXplLCAxMDApXG4gICAgdGhpcy5saW5rID0gdGhpcy5saW5rLmJpbmQodGhpcylcbiAgfVxuXG4gIGxpbmsoaHJlZikge1xuICAgIHJldHVybiA8YSBocmVmPXtocmVmfT57aHJlZn08L2E+XG4gIH1cblxuICBzZXRTaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd3c6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgIHdoOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICBsb2FkZWQ6IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFNpemUpXG4gICAgdGhpcy5zZXRTaXplKClcbiAgICBsZXQgcmVuZGVyX2luZm8gPSBCb3dzZXIuZ2V0UGFyc2VyKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KS5wYXJzZSgpXG4gICAgICAucGFyc2VkUmVzdWx0XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlcl9pbmZvLCBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgd3csIHdoLCBsb2FkZWQsIG9wdGltYWwsIHJlbmRlcl9pbmZvLCBvcmlnaW4gfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXJcblxuICAgIGxldCBpc19wb3N0ID0gcGF0aG5hbWUuc3RhcnRzV2l0aCgnL3Bvc3RzLycpXG5cbiAgICBsZXQgZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0XG5cbiAgICBsZXQgZGl2aWRlcnMgPSA0XG4gICAgbGV0IGNvbHVtbl9yYXcgPSBNYXRoLmZsb29yKHd3IC8gKG9wdGltYWwgLyBkaXZpZGVycykpXG4gICAgbGV0IGNvbHVtbl9udW0gPSBNYXRoLmZsb29yKGNvbHVtbl9yYXcgLyAyKSAqIDJcbiAgICBsZXQgYyA9IE1hdGgucm91bmQoKHd3IC8gY29sdW1uX3JhdykgKiAxMCkgLyAxMFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxzdHlsZT57YC5qcy1uby1mbGFzaCB7IGRpc3BsYXk6IG5vbmUgfWB9PC9zdHlsZT5cbiAgICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgICA8c3R5bGU+e2AuanMtbm8tZmxhc2ggeyBkaXNwbGF5OiBibG9jayB9YH08L3N0eWxlPlxuICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0ludGVyLVJlZ3VsYXIud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1SZWd1bGFyLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1JdGFsaWMud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1JdGFsaWMud29mZj92PTMuNScpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0ludGVyLUJvbGQud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1Cb2xkLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1Cb2xkSXRhbGljLndvZmYyP3Y9My41JylcbiAgICAgICAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1Cb2xkSXRhbGljLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250X3NpemV9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHtmb250X3NpemUgKiBsaW5lX2hlaWdodH1weDtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdrZXJuJztcbiAgICAgICAgICAgIGZvbnQta2VybmluZzogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnc3MwMicgMTtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJlIHtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIE1lbmxvLFxuICAgICAgICAgICAgICBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAke2dyZW19cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwianMtbm8tZmxhc2hcIlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGxvYWRlZCA/ICdibG9jaycgOiBudWxsIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IGdyZW0gLyAyIH19PlxuICAgICAgICAgICAgPGRpdj5HcmFudCBDdXN0ZXI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+RGVzaWdu4oCTQ29kZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge3d3fXh7d2h9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBwYWRkaW5nTGVmdDogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IGdyZW0gLyAyIH19PlxuICAgICAgICAgICAgICAgIHtpc19wb3N0ID8gKFxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGE+V3JpdGluZzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHNwYW4+V3JpdGluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9mZWVkLmdyYW50Y3VzdGVyLmNvbVwiPkZlZWQ8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzX3Bvc3QgPyAoXG4gICAgICAgICAgICA8UG9zdExheW91dCBwYXRobmFtZT17cGF0aG5hbWV9IGdyZW09e2dyZW19IGM9e2N9PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1Bvc3RMYXlvdXQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gZ3JlbT17Z3JlbX0gYz17Y30gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0SW5kZW50OiBncmVtIH19PlxuICAgICAgICAgIEdlbmVyYXRlZFxuICAgICAgICAgIHtvcmlnaW4gIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8c3Bhbj4gZnJvbSB7dGhpcy5saW5rKG9yaWdpbil9PC9zcGFuPlxuICAgICAgICAgICkgOiBudWxsfSBvbiB7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgIHtyZW5kZXJfaW5mbyAhPT0gbnVsbFxuICAgICAgICAgICAgPyBgIHdpdGggJHtyZW5kZXJfaW5mby5icm93c2VyLm5hbWV9ICR7XG4gICAgICAgICAgICAgICAgcmVuZGVyX2luZm8uYnJvd3Nlci52ZXJzaW9uXG4gICAgICAgICAgICAgIH0gb24gJHtyZW5kZXJfaW5mby5vcy5uYW1lfSAke3JlbmRlcl9pbmZvLm9zLnZlcnNpb259YFxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIC5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/writing/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: loaded ? 'block' : null
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]) + " " + "js-no-flash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Grant Custer"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Design\u2013Code"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, ww, "x", wh), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: 'flex',
          paddingLeft: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, is_post ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Writing")) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Writing")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        href: "http://feed.grantcuster.com",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Feed")))), is_post ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_parts_Layout__WEBPACK_IMPORTED_MODULE_10__["PostLayout"], {
        pathname: pathname,
        grem: grem,
        c: c,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        grem: grem,
        c: c,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          textIndent: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "Generated", origin !== null ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, " from ", this.link(origin)) : null, " on ", new Date().toLocaleString(), render_info !== null ? " with ".concat(render_info.browser.name, " ").concat(render_info.browser.version, " on ").concat(render_info.os.name, " ").concat(render_info.os.version) : null, "."));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.fd260fbb16a5289b1da0.hot-update.js.map