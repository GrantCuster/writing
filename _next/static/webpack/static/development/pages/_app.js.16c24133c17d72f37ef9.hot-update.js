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
      loaded: false
    };
    _this.setSize = _this.setSize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.setSize = Object(lodash__WEBPACK_IMPORTED_MODULE_13__["debounce"])(_this.setSize, 100);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
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
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          ww = _this$state.ww,
          wh = _this$state.wh,
          loaded = _this$state.loaded,
          optimal = _this$state.optimal;
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
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, ".js-no-flash { display: none }"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("noscript", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, ".js-no-flash { display: block }"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3523385867",
        dynamic: [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem],
        __self: this
      }, "@font-face{font-family:'Inter';font-style:normal;font-weight:400;src:url('/static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Regular.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:400;src:url('/static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Italic.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:700;src:url('/static/fonts/Inter-Bold.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Bold.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:700;src:url('/static/fonts/Inter-BoldItalic.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-BoldItalic.woff?v=3.5') format('woff');}*{box-sizing:border-box;}html{background:#efefef;font-family:'Inter',serif;font-size:".concat(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], "px;line-height:").concat(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], "px;text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;font-feature-settings:'ss02' 1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}pre{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto;overflow-x:auto;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo, Monaco,Courier New,monospace;}body{margin:0;}p{margin:0 0 0 0;text-indent:").concat(grem, "px;}a{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy93cml0aW5nL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEQyQixBQUdpQyxBQU9BLEFBT0EsQUFPQSxBQVNFLEFBR0gsQUFZUyxBQU9uQixBQUdNLEFBSUgsU0FOZCxHQU9BLEdBSjZDLElBdEJoQixDQWpDVCxBQU9BLEFBT0EsQUFPQSxFQVNwQixNQWUrQixVQTVDYixBQU9BLEFBT0EsQUFPQSxPQVl5QixTQS9CcUIsQUFPRCxBQU9GLEFBUU0sR0FxQmpELENBVWxCLGVBUmtDLGFBYlcsMkNBQ1QsZ0NBYXBDLEVBWitCLGNBbkIvQixJQVBBLEVBUEEsTUFzQkEsR0FZc0Isb0JBQ1csK0JBQ0ksbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy93cml0aW5nL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgUG9zdExheW91dCB9IGZyb20gJy4uL3BhcnRzL0xheW91dCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvbnRfc2l6ZSwgbGluZV9oZWlnaHQsIGZvbnRfbWluLCBzbSB9IGZyb20gJy4uL3BhcnRzL1N0YXRpYydcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9wYXJ0cy9IZWFkZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbi8vIE92ZXJyaWRlIHRoZSBBcHAgY2xhc3MgdG8gcHV0IGxheW91dCBjb21wb25lbnQgYXJvdW5kIHRoZSBwYWdlIGNvbnRlbnRzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzI2N1c3RvbS1hcHBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3dzogNjQwLFxuICAgICAgd2g6IDQ4MCxcbiAgICAgIG9wdGltYWw6IDYwMCxcbiAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgfVxuICAgIHRoaXMuc2V0U2l6ZSA9IHRoaXMuc2V0U2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTaXplID0gZGVib3VuY2UodGhpcy5zZXRTaXplLCAxMDApXG4gIH1cblxuICBzZXRTaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd3c6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgIHdoOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICBsb2FkZWQ6IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFNpemUpXG4gICAgdGhpcy5zZXRTaXplKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB3dywgd2gsIGxvYWRlZCwgb3B0aW1hbCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlclxuXG4gICAgbGV0IGlzX3Bvc3QgPSBwYXRobmFtZS5zdGFydHNXaXRoKCcvcG9zdHMvJylcblxuICAgIGxldCBncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHRcblxuICAgIGxldCBkaXZpZGVycyA9IDRcbiAgICBsZXQgY29sdW1uX3JhdyA9IE1hdGguZmxvb3Iod3cgLyAob3B0aW1hbCAvIGRpdmlkZXJzKSlcbiAgICBsZXQgY29sdW1uX251bSA9IE1hdGguZmxvb3IoY29sdW1uX3JhdyAvIDIpICogMlxuICAgIGxldCBjID0gTWF0aC5yb3VuZCgod3cgLyBjb2x1bW5fcmF3KSAqIDEwKSAvIDEwXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHN0eWxlPntgLmpzLW5vLWZsYXNoIHsgZGlzcGxheTogbm9uZSB9YH08L3N0eWxlPlxuICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgIDxzdHlsZT57YC5qcy1uby1mbGFzaCB7IGRpc3BsYXk6IGJsb2NrIH1gfTwvc3R5bGU+XG4gICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvSW50ZXItUmVndWxhci53b2ZmMj92PTMuNScpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL0ludGVyLVJlZ3VsYXIud29mZj92PTMuNScpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0ludGVyLUl0YWxpYy53b2ZmMj92PTMuNScpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL0ludGVyLUl0YWxpYy53b2ZmP3Y9My41JykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvSW50ZXItQm9sZC53b2ZmMj92PTMuNScpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL0ludGVyLUJvbGQud29mZj92PTMuNScpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0ludGVyLUJvbGRJdGFsaWMud29mZjI/dj0zLjUnKVxuICAgICAgICAgICAgICAgIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL0ludGVyLUJvbGRJdGFsaWMud29mZj92PTMuNScpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRfc2l6ZX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2ZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0fXB4O1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgICAgZm9udC1rZXJuaW5nOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdzczAyJyAxO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcmUge1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sXG4gICAgICAgICAgICAgIE1vbmFjbywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAwO1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6ICR7Z3JlbX1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJqcy1uby1mbGFzaFwiXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogbG9hZGVkID8gJ2Jsb2NrJyA6IG51bGwgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICA8ZGl2PkdyYW50IEN1c3RlcjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5EZXNpZ27igJNDb2RlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7d3d9eHt3aH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHBhZGRpbmdMZWZ0OiBncmVtIC8gMiB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICAgICAge2lzX3Bvc3QgPyAoXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YT5Xcml0aW5nPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Xcml0aW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBncmVtIC8gMiB9fT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2ZlZWQuZ3JhbnRjdXN0ZXIuY29tXCI+RmVlZDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aXNfcG9zdCA/IChcbiAgICAgICAgICAgIDxQb3N0TGF5b3V0IHBhdGhuYW1lPXtwYXRobmFtZX0gZ3JlbT17Z3JlbX0gYz17Y30+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvUG9zdExheW91dD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBncmVtPXtncmVtfSBjPXtjfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/writing/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: loaded ? 'block' : null
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]) + " " + "js-no-flash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Grant Custer"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Design\u2013Code"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
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
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, is_post ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Writing")) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Writing")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        href: "http://feed.grantcuster.com",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Feed")))), is_post ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_parts_Layout__WEBPACK_IMPORTED_MODULE_10__["PostLayout"], {
        pathname: pathname,
        grem: grem,
        c: c,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        grem: grem,
        c: c,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.16c24133c17d72f37ef9.hot-update.js.map