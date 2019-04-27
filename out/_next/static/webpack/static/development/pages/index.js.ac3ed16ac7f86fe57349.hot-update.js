webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _parts_Dividers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/Dividers */ "./parts/Dividers.js");
/* harmony import */ var _parts_Utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/Utils */ "./parts/Utils.js");
/* harmony import */ var _parts_Binpack_2d_port__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../parts/Binpack-2d-port */ "./parts/Binpack-2d-port.js");
/* harmony import */ var _parts_FFuture__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../parts/FFuture */ "./parts/FFuture.js");
/* harmony import */ var _parts_ExpGrid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../parts/ExpGrid */ "./parts/ExpGrid.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _data_experiments__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../data/experiments */ "./data/experiments.js");









var _jsxFileName = "/Users/grant.custer/Sites/fastforward/pages/index.js";












var font_size = 16;
var line_height = 1.5;

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Index).call(this, props));
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000 * 24;
    var oneDay = 1000 * 60 * 60 * 24;
    var day_in_year = Math.floor(diff / oneDay);
    _this.state = {
      ww: 0,
      optimal: null,
      hex: chroma_js__WEBPACK_IMPORTED_MODULE_19__["hcl"](Math.floor(day_in_year / 365 * 360), 60, 80)
    };
    _this.setSize = _this.setSize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.setSize = Object(lodash__WEBPACK_IMPORTED_MODULE_18__["debounce"])(_this.setSize, 100);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "setSize",
    value: function setSize() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      ctx.font = "normal ".concat(font_size, "px Interi");
      var width = ctx.measureText('thousand writers. With over a million people from various fields working').width;
      window.ratio = Math.max(window.innerWidth / width, 1);
      this.setState({
        ww: window.innerWidth,
        wh: window.innerHeight,
        optimal: width + font_size * line_height
      }, function () {});
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.setSize);
      this.setSize();
      var me = this;
      document.fonts.ready.then(function () {
        me.setSize();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement;

      var _this$state = this.state,
          ww = _this$state.ww,
          optimal = _this$state.optimal,
          hex = _this$state.hex;
      var grem = font_size * line_height;
      var divisions = 4;
      var target_width = optimal / divisions;
      var columns = Math.floor(ww / target_width);
      var og_columns = Math.floor(ww / target_width);
      var column_width = ww / columns;
      var offset = 0;
      var even = columns % 2 === 0;

      if (!even) {
        columns = columns - 1;
        offset = column_width / 2;
      }

      var optim_width = column_width * divisions;
      var optim_left = (columns / 2 - divisions / 2) * column_width + offset;
      var ratio = column_width / target_width;

      if (columns < divisions) {
        offset = 0;
        columns = 2;
        column_width = ww / 2;
        optim_width = column_width * 2;
        optim_left = 0;
        ratio = 1;
      }

      var fs = font_size * ratio;
      var center_text = {
        width: optim_width,
        marginLeft: optim_left
      };
      var target_height = grem * 12;
      var spacer = grem;
      var sized_experiments = _data_experiments__WEBPACK_IMPORTED_MODULE_20__["experiments"].map(function (e) {
        var w = Math.round(column_width * 2 - spacer);
        var h = Math.round(target_height);

        if (e.featured === true) {
          return {
            width: Math.min(w * 2 + spacer, ww - spacer),
            height: h * 2 + spacer
          };
        } else {
          return {
            width: Math.min(w, ww - spacer),
            height: h
          };
        }
      });
      var avail = ww - offset * 2;
      var packed = Object(_parts_Binpack_2d_port__WEBPACK_IMPORTED_MODULE_15__["pack"])({
        width: avail,
        height: Infinity
      }, sized_experiments, spacer);
      var cap = grem * (2048 / 2816);
      var fs_normal = {
        fontSize: fs
      };
      var svg_scale = 35 / (cap + grem / 8);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "preload",
        href: "static/fonts/Inter-Regular.woff2?v=3.5",
        as: "font",
        type: "font/woff2",
        crossOrigin: "*",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "384580974",
        dynamic: [hex, font_size, line_height, grem / 2],
        __self: this
      }, "@font-face{font-family:'Interi';font-style:normal;font-weight:400;src:url('static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'), url('static/fonts/Inter-Regular.woff?v=3.5') format('woff');}@font-face{font-family:'Interi';font-style:italic;font-weight:400;src:url('static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'), url('static/fonts/Inter-Italic.woff?v=3.5') format('woff');}:root{--background:".concat(hex, ";}*{box-sizing:border-box;}html{font-family:'Interi',serif;font-size:").concat(font_size, "px;line-height:").concat(line_height, ";text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{margin:0;overflow-x:hidden;}a{color:inherit;-webkit-text-decoration:underline;text-decoration:underline;}.hover_box:hover{-webkit-transition:box-shadow 0.05s linear;transition:box-shadow 0.05s linear;box-shadow:0 0 ").concat(grem / 2, "px rgba(0,0,0,0.4);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmFzdGZvcndhcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUoyQixBQUd1RCxBQUdyQixBQU9BLEFBT0MsQUFHTSxBQVVuQixBQUlLLEFBSXFCLFNBUGpCLEtBSVEsT0EvQlIsQUFPQSxDQU9wQixLQUcyQyxBQVczQyxZQTNCa0IsQUFPQSxHQVhsQixhQU0rRCxBQU9ELGFBUW5CLE1BYzNDLElBR21FLCtCQWhCL0IsK0JBaUJwQyxHQWhCK0IsNkJBQ1QsUUFWdEIsRUFQQSxVQWtCcUMsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmFzdGZvcndhcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgSGQsIFZkLCBSZWN0LCBGZGl2IH0gZnJvbSAnLi4vcGFydHMvRGl2aWRlcnMnXG5pbXBvcnQgeyBzdHlsZXMsIHAgfSBmcm9tICcuLi9wYXJ0cy9VdGlscydcbmltcG9ydCB7IHBhY2sgfSBmcm9tICcuLi9wYXJ0cy9CaW5wYWNrLTJkLXBvcnQnXG5pbXBvcnQgRkZ1dHVyZSBmcm9tICcuLi9wYXJ0cy9GRnV0dXJlJ1xuaW1wb3J0IEV4cEdyaWQgZnJvbSAnLi4vcGFydHMvRXhwR3JpZCdcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgY2hyb21hIGZyb20gJ2Nocm9tYS1qcydcbmltcG9ydCB7IGV4cGVyaW1lbnRzIH0gZnJvbSAnLi4vZGF0YS9leHBlcmltZW50cydcblxubGV0IGZvbnRfc2l6ZSA9IDE2XG5sZXQgbGluZV9oZWlnaHQgPSAxLjVcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpXG4gICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIDAsIDApXG4gICAgdmFyIGRpZmYgPVxuICAgICAgbm93IC1cbiAgICAgIHN0YXJ0ICtcbiAgICAgIChzdGFydC5nZXRUaW1lem9uZU9mZnNldCgpIC0gbm93LmdldFRpbWV6b25lT2Zmc2V0KCkpICogNjAgKiAxMDAwICogMjRcbiAgICB2YXIgb25lRGF5ID0gMTAwMCAqIDYwICogNjAgKiAyNFxuICAgIHZhciBkYXlfaW5feWVhciA9IE1hdGguZmxvb3IoZGlmZiAvIG9uZURheSlcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3dzogMCxcbiAgICAgIG9wdGltYWw6IG51bGwsXG4gICAgICBoZXg6IGNocm9tYS5oY2woTWF0aC5mbG9vcigoZGF5X2luX3llYXIgLyAzNjUpICogMzYwKSwgNjAsIDgwKSxcbiAgICB9XG4gICAgdGhpcy5zZXRTaXplID0gdGhpcy5zZXRTaXplLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFNpemUgPSBkZWJvdW5jZSh0aGlzLnNldFNpemUsIDEwMClcbiAgfVxuXG4gIHNldFNpemUoKSB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY3R4LmZvbnQgPSBgbm9ybWFsICR7Zm9udF9zaXplfXB4IEludGVyaWBcbiAgICBsZXQgd2lkdGggPSBjdHgubWVhc3VyZVRleHQoXG4gICAgICAndGhvdXNhbmQgd3JpdGVycy4gV2l0aCBvdmVyIGEgbWlsbGlvbiBwZW9wbGUgZnJvbSB2YXJpb3VzIGZpZWxkcyB3b3JraW5nJ1xuICAgICkud2lkdGhcbiAgICB3aW5kb3cucmF0aW8gPSBNYXRoLm1heCh3aW5kb3cuaW5uZXJXaWR0aCAvIHdpZHRoLCAxKVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgd3c6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICB3aDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICBvcHRpbWFsOiB3aWR0aCArIGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0LFxuICAgICAgfSxcbiAgICAgICgpID0+IHt9XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2V0U2l6ZSlcbiAgICB0aGlzLnNldFNpemUoKVxuICAgIGxldCBtZSA9IHRoaXNcbiAgICBkb2N1bWVudC5mb250cy5yZWFkeS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgbWUuc2V0U2l6ZSgpXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB3dywgb3B0aW1hbCwgaGV4IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0XG5cbiAgICBsZXQgZGl2aXNpb25zID0gNFxuXG4gICAgbGV0IHRhcmdldF93aWR0aCA9IG9wdGltYWwgLyBkaXZpc2lvbnNcbiAgICBsZXQgY29sdW1ucyA9IE1hdGguZmxvb3Iod3cgLyB0YXJnZXRfd2lkdGgpXG4gICAgbGV0IG9nX2NvbHVtbnMgPSBNYXRoLmZsb29yKHd3IC8gdGFyZ2V0X3dpZHRoKVxuICAgIGxldCBjb2x1bW5fd2lkdGggPSB3dyAvIGNvbHVtbnNcblxuICAgIGxldCBvZmZzZXQgPSAwXG4gICAgbGV0IGV2ZW4gPSBjb2x1bW5zICUgMiA9PT0gMFxuICAgIGlmICghZXZlbikge1xuICAgICAgY29sdW1ucyA9IGNvbHVtbnMgLSAxXG4gICAgICBvZmZzZXQgPSBjb2x1bW5fd2lkdGggLyAyXG4gICAgfVxuXG4gICAgbGV0IG9wdGltX3dpZHRoID0gY29sdW1uX3dpZHRoICogZGl2aXNpb25zXG4gICAgbGV0IG9wdGltX2xlZnQgPSAoY29sdW1ucyAvIDIgLSBkaXZpc2lvbnMgLyAyKSAqIGNvbHVtbl93aWR0aCArIG9mZnNldFxuXG4gICAgbGV0IHJhdGlvID0gY29sdW1uX3dpZHRoIC8gdGFyZ2V0X3dpZHRoXG5cbiAgICBpZiAoY29sdW1ucyA8IGRpdmlzaW9ucykge1xuICAgICAgb2Zmc2V0ID0gMFxuICAgICAgY29sdW1ucyA9IDJcbiAgICAgIGNvbHVtbl93aWR0aCA9IHd3IC8gMlxuICAgICAgb3B0aW1fd2lkdGggPSBjb2x1bW5fd2lkdGggKiAyXG4gICAgICBvcHRpbV9sZWZ0ID0gMFxuICAgICAgcmF0aW8gPSAxXG4gICAgfVxuXG4gICAgbGV0IGZzID0gZm9udF9zaXplICogcmF0aW9cblxuICAgIGxldCBjZW50ZXJfdGV4dCA9IHtcbiAgICAgIHdpZHRoOiBvcHRpbV93aWR0aCxcbiAgICAgIG1hcmdpbkxlZnQ6IG9wdGltX2xlZnQsXG4gICAgfVxuXG4gICAgbGV0IHRhcmdldF9oZWlnaHQgPSBncmVtICogMTJcbiAgICBsZXQgc3BhY2VyID0gZ3JlbVxuXG4gICAgbGV0IHNpemVkX2V4cGVyaW1lbnRzID0gZXhwZXJpbWVudHMubWFwKGUgPT4ge1xuICAgICAgbGV0IHcgPSBNYXRoLnJvdW5kKGNvbHVtbl93aWR0aCAqIDIgLSBzcGFjZXIpXG4gICAgICBsZXQgaCA9IE1hdGgucm91bmQodGFyZ2V0X2hlaWdodClcbiAgICAgIGlmIChlLmZlYXR1cmVkID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKHcgKiAyICsgc3BhY2VyLCB3dyAtIHNwYWNlciksXG4gICAgICAgICAgaGVpZ2h0OiBoICogMiArIHNwYWNlcixcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aWR0aDogTWF0aC5taW4odywgd3cgLSBzcGFjZXIpLFxuICAgICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgYXZhaWwgPSB3dyAtIG9mZnNldCAqIDJcblxuICAgIGxldCBwYWNrZWQgPSBwYWNrKFxuICAgICAgeyB3aWR0aDogYXZhaWwsIGhlaWdodDogSW5maW5pdHkgfSxcbiAgICAgIHNpemVkX2V4cGVyaW1lbnRzLFxuICAgICAgc3BhY2VyXG4gICAgKVxuXG4gICAgbGV0IGNhcCA9IGdyZW0gKiAoMjA0OCAvIDI4MTYpXG5cbiAgICBsZXQgZnNfbm9ybWFsID0ge1xuICAgICAgZm9udFNpemU6IGZzLFxuICAgIH1cblxuICAgIGxldCBzdmdfc2NhbGUgPSAzNSAvIChjYXAgKyBncmVtIC8gOClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPVwic3RhdGljL2ZvbnRzL0ludGVyLVJlZ3VsYXIud29mZjI/dj0zLjVcIlxuICAgICAgICAgICAgYXM9XCJmb250XCJcbiAgICAgICAgICAgIHR5cGU9XCJmb250L3dvZmYyXCJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiKlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogJHtoZXh9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXJpJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLVJlZ3VsYXIud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLVJlZ3VsYXIud29mZj92PTMuNScpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXJpJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLUl0YWxpYy53b2ZmMj92PTMuNScpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCdzdGF0aWMvZm9udHMvSW50ZXItSXRhbGljLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXJpJywgc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7Zm9udF9zaXplfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGluZV9oZWlnaHR9O1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgICAgZm9udC1rZXJuaW5nOiBub3JtYWw7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlcl9ib3g6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjA1cyBsaW5lYXI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgJHtncmVtIC8gMn1weCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlcl9ib3g6aG92ZXIgLmhvdmVyX25hbWUge1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICB7b3B0aW1hbCAhPT0gbnVsbCA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3dyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Wy4uLkFycmF5KGNvbHVtbnMpXS5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogaSAqIGNvbHVtbl93aWR0aCArIG9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29sdW1uX3dpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6ICdzb2xpZCAxcHggYmx1ZScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+b2dfY29sdW1uczoge29nX2NvbHVtbnN9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+e2V2ZW4gPyAnZXZlbicgOiAnb2RkJ308L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5mb250IHNpemU6IHtmc308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICAgIC4uLmZzX25vcm1hbCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBncmVtICogMS4yNSB9fT5cbiAgICAgICAgICAgICAgICAgIENsb3VkZXJhIEZhc3QgRm9yd2FyZFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzZcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzZcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzNiAzNlwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtjYXAgKyBncmVtIC8gOH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17Y2FwICsgZ3JlbSAvIDh9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZ3JlbSAvIDIgKyAoZ3JlbSAtIGNhcCkgLyAyIC0gZ3JlbSAvIDE2LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTE4IDE4TDEgMVYzNUwxOCAxOFpcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtmcyAqIHN0eWxlcy5zdHJva2VfbXVsdCAqIHN2Z19zY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJiZXZlbFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0zNSAxOEwxOCAxVjM1TDM1IDE4WlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2ZzICogc3R5bGVzLnN0cm9rZV9tdWx0ICogc3ZnX3NjYWxlfVxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cImJldmVsXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEgMUgzNVYxOEgxVjFaXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2ZzICogc3R5bGVzLnN0cm9rZV9tdWx0ICogc3ZnX3NjYWxlfVxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xIDE4SDM1VjM1SDFWMThaXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2ZzICogc3R5bGVzLnN0cm9rZV9tdWx0ICogc3ZnX3NjYWxlfVxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPk1haW48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5CbG9nPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgPEhkIHdpZHRoPXt3d30gYWxpZ249XCJ0XCIgc3Ryb2tlPXtmcyAqIHN0eWxlcy5zdHJva2VfbXVsdH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAuLi5jZW50ZXJfdGV4dCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogZnMgKiAzLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEV4cGVyaW1lbnRzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAuLi5jZW50ZXJfdGV4dCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAuLi5mc19ub3JtYWwsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1hY2hpbmUgbGVhcm5pbmcgdmlzdWFsaXphdGlvbnMgYW5kIGNvZGVcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IGdyZW0gLyAyICsgb2Zmc2V0LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RXhwR3JpZFxuICAgICAgICAgICAgICAgIHdpZHRoPXt3d31cbiAgICAgICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgICAgIGV4cGVyaW1lbnRzPXtleHBlcmltZW50c31cbiAgICAgICAgICAgICAgICBwYWNrZWQ9e3BhY2tlZH1cbiAgICAgICAgICAgICAgICBzcGFjZXI9e3NwYWNlcn1cbiAgICAgICAgICAgICAgICB0YXJnZXRfaGVpZ2h0PXt0YXJnZXRfaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGZzPXtmc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4uY2VudGVyX3RleHQsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IGZzICogMixcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC4uLmNlbnRlcl90ZXh0LFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgIC4uLmZzX25vcm1hbCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIGlzIGFuIGFwcGxpZWQgbWFjaGluZSBsZWFybmluZyByZXNlYXJjaFxuICAgICAgICAgICAgICBncm91cC4gV2UgaGVscCBvcmdhbml6YXRpb25zIHJlY29nbml6ZSBhbmQgZGV2ZWxvcCBuZXcgcHJvZHVjdCBhbmRcbiAgICAgICAgICAgICAgYnVzaW5lc3Mgb3Bwb3J0dW5pdGllcyB0aHJvdWdoIGVtZXJnaW5nIHRlY2hub2xvZ2llcy57JyAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLmNlbnRlcl90ZXh0LCBwYWRkaW5nOiBncmVtIC8gMiwgcGFkZGluZ1RvcDogMCB9fT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5MZWFybiBtb3JlIGFib3V0IHdvcmtpbmcgd2l0aCB1cy48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEhkIHdpZHRoPXt3d30gYWxpZ249XCJiXCIgc3Ryb2tlPXtmcyAqIHN0eWxlcy5zdHJva2VfbXVsdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IGdyZW0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/fastforward/pages/index.js */")), optimal !== null ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          top: 0,
          width: ww,
          height: '100vh',
          display: 'none'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(columns)).map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: i,
          style: {
            position: 'absolute',
            left: i * column_width + offset,
            top: 0,
            width: column_width,
            height: '100vh',
            outline: 'solid 1px blue'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          bottom: 0,
          display: 'none'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "og_columns: ", og_columns), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, even ? 'even' : 'odd'), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "font size: ", fs)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
          padding: grem / 2,
          display: 'flex',
          justifyContent: 'space-between'
        }, fs_normal),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          paddingLeft: grem * 1.25
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Cloudera Fast Forward"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("svg", (_React$createElement = {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "width", cap + grem / 8), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "height", cap + grem / 8), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "style", {
        position: 'absolute',
        left: grem / 2,
        top: grem / 2 + (grem - cap) / 2 - grem / 16
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "className", styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]])), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 242
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("path", {
        d: "M18 18L1 1V35L18 18Z",
        stroke: "black",
        strokeWidth: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_14__["styles"].stroke_mult * svg_scale,
        strokeLinejoin: "bevel",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("path", {
        d: "M35 18L18 1V35L35 18Z",
        stroke: "black",
        strokeWidth: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_14__["styles"].stroke_mult * svg_scale,
        strokeLinejoin: "bevel",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("path", {
        d: "M1 1H35V18H1V1Z",
        strokeWidth: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_14__["styles"].stroke_mult * svg_scale,
        stroke: "black",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("path", {
        d: "M1 18H35V35H1V18Z",
        strokeWidth: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_14__["styles"].stroke_mult * svg_scale,
        stroke: "black",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, "Main")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Blog")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: 0,
          paddingBottom: grem / 2,
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_13__["Hd"], {
        width: ww,
        align: "t",
        stroke: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_14__["styles"].stroke_mult,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, center_text, {
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          fontSize: fs * 3,
          lineHeight: 1,
          paddingTop: grem / 2
        }),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, "Experiments"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, center_text, {
          padding: grem / 2
        }, fs_normal),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "Machine learning visualizations and code"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: grem / 2,
          paddingLeft: grem / 2 + offset
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_ExpGrid__WEBPACK_IMPORTED_MODULE_17__["default"], {
        width: ww,
        grem: grem,
        experiments: _data_experiments__WEBPACK_IMPORTED_MODULE_20__["experiments"],
        packed: packed,
        spacer: spacer,
        target_height: target_height,
        fs: fs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, center_text, {
          fontSize: fs * 2,
          lineHeight: 1.25,
          padding: grem / 2,
          paddingBottom: 0
        }),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, center_text, {
          padding: grem / 2
        }, fs_normal),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "Cloudera Fast Forward is an applied machine learning research group. We help organizations recognize and develop new product and business opportunities through emerging technologies.", ' '), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, center_text, {
          padding: grem / 2,
          paddingTop: 0
        }),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, "Learn more about working with us.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          position: 'relative',
          paddingTop: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_13__["Hd"], {
        width: ww,
        align: "b",
        stroke: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_14__["styles"].stroke_mult,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          paddingTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      })) : null);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ac3ed16ac7f86fe57349.hot-update.js.map