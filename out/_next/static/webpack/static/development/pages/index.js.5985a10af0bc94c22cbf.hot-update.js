webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _parts_Dividers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Dividers */ "./parts/Dividers.js");
/* harmony import */ var _parts_Utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/Utils */ "./parts/Utils.js");
/* harmony import */ var _parts_Binpack_2d_port__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/Binpack-2d-port */ "./parts/Binpack-2d-port.js");
/* harmony import */ var _parts_FFuture__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../parts/FFuture */ "./parts/FFuture.js");
/* harmony import */ var _parts_ExpGrid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../parts/ExpGrid */ "./parts/ExpGrid.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _data_experiments_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../data/experiments.json */ "./data/experiments.json");
var _data_experiments_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/experiments.json */ "./data/experiments.json", 1);








var _jsxFileName = "/Users/grant.custer/Sites/fastforward/pages/index.js";












var font_size = 16;
var line_height = 1.5;

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000 * 24;
    var oneDay = 1000 * 60 * 60 * 24;
    var day_in_year = Math.floor(diff / oneDay);
    _this.state = {
      ww: 0,
      optimal: null,
      hex: chroma_js__WEBPACK_IMPORTED_MODULE_18__["hcl"](Math.floor(day_in_year / 365 * 360), 60, 80)
    };
    _this.setSize = _this.setSize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setSize = Object(lodash__WEBPACK_IMPORTED_MODULE_17__["debounce"])(_this.setSize, 100);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
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
      console.log(_data_experiments_json__WEBPACK_IMPORTED_MODULE_19__["experiments"]);
      var _this$state = this.state,
          ww = _this$state.ww,
          wh = _this$state.wh,
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
      var sized_experiments = _data_experiments_json__WEBPACK_IMPORTED_MODULE_19__["experiments"].map(function (e) {
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
      var packed = Object(_parts_Binpack_2d_port__WEBPACK_IMPORTED_MODULE_14__["pack"])({
        width: avail,
        height: Infinity
      }, sized_experiments, spacer);
      var cap = grem * (2048 / 2816);
      var fs_normal = {
        fontSize: fs
      };
      var svg_scale = 35 / (cap + grem / 8);
      var rounded_wh = Math.floor(wh / grem) * grem;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        rel: "preload",
        href: "static/fonts/Inter-Regular.woff2?v=3.5",
        as: "font",
        type: "font/woff2",
        crossOrigin: "*",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "384580974",
        dynamic: [hex, font_size, line_height, grem / 2],
        __self: this
      }, "@font-face{font-family:'Interi';font-style:normal;font-weight:400;src:url('static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'), url('static/fonts/Inter-Regular.woff?v=3.5') format('woff');}@font-face{font-family:'Interi';font-style:italic;font-weight:400;src:url('static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'), url('static/fonts/Inter-Italic.woff?v=3.5') format('woff');}:root{--background:".concat(hex, ";}*{box-sizing:border-box;}html{font-family:'Interi',serif;font-size:").concat(font_size, "px;line-height:").concat(line_height, ";text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{margin:0;overflow-x:hidden;}a{color:inherit;-webkit-text-decoration:underline;text-decoration:underline;}.hover_box:hover{-webkit-transition:box-shadow 0.05s linear;transition:box-shadow 0.05s linear;box-shadow:0 0 ").concat(grem / 2, "px rgba(0,0,0,0.4);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmFzdGZvcndhcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUoyQixBQUd1RCxBQUdyQixBQU9BLEFBT0MsQUFHTSxBQVVuQixBQUlLLEFBSXFCLFNBUGpCLEtBSVEsT0EvQlIsQUFPQSxDQU9wQixLQUcyQyxBQVczQyxZQTNCa0IsQUFPQSxHQVhsQixhQU0rRCxBQU9ELGFBUW5CLE1BYzNDLElBR21FLCtCQWhCL0IsK0JBaUJwQyxHQWhCK0IsNkJBQ1QsUUFWdEIsRUFQQSxVQWtCcUMsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmFzdGZvcndhcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgSGQsIFZkLCBSZWN0LCBGZGl2IH0gZnJvbSAnLi4vcGFydHMvRGl2aWRlcnMnXG5pbXBvcnQgeyBzdHlsZXMsIHAgfSBmcm9tICcuLi9wYXJ0cy9VdGlscydcbmltcG9ydCB7IHBhY2sgfSBmcm9tICcuLi9wYXJ0cy9CaW5wYWNrLTJkLXBvcnQnXG5pbXBvcnQgRkZ1dHVyZSBmcm9tICcuLi9wYXJ0cy9GRnV0dXJlJ1xuaW1wb3J0IEV4cEdyaWQgZnJvbSAnLi4vcGFydHMvRXhwR3JpZCdcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgY2hyb21hIGZyb20gJ2Nocm9tYS1qcydcbmltcG9ydCB7IGV4cGVyaW1lbnRzIH0gZnJvbSAnLi4vZGF0YS9leHBlcmltZW50cy5qc29uJ1xuXG5sZXQgZm9udF9zaXplID0gMTZcbmxldCBsaW5lX2hlaWdodCA9IDEuNVxuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKClcbiAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgMCwgMClcbiAgICB2YXIgZGlmZiA9XG4gICAgICBub3cgLVxuICAgICAgc3RhcnQgK1xuICAgICAgKHN0YXJ0LmdldFRpbWV6b25lT2Zmc2V0KCkgLSBub3cuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiA2MCAqIDEwMDAgKiAyNFxuICAgIHZhciBvbmVEYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0XG4gICAgdmFyIGRheV9pbl95ZWFyID0gTWF0aC5mbG9vcihkaWZmIC8gb25lRGF5KVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHd3OiAwLFxuICAgICAgb3B0aW1hbDogbnVsbCxcbiAgICAgIGhleDogY2hyb21hLmhjbChNYXRoLmZsb29yKChkYXlfaW5feWVhciAvIDM2NSkgKiAzNjApLCA2MCwgODApLFxuICAgIH1cbiAgICB0aGlzLnNldFNpemUgPSB0aGlzLnNldFNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0U2l6ZSA9IGRlYm91bmNlKHRoaXMuc2V0U2l6ZSwgMTAwKVxuICB9XG5cbiAgc2V0U2l6ZSgpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjdHguZm9udCA9IGBub3JtYWwgJHtmb250X3NpemV9cHggSW50ZXJpYFxuICAgIGxldCB3aWR0aCA9IGN0eC5tZWFzdXJlVGV4dChcbiAgICAgICd0aG91c2FuZCB3cml0ZXJzLiBXaXRoIG92ZXIgYSBtaWxsaW9uIHBlb3BsZSBmcm9tIHZhcmlvdXMgZmllbGRzIHdvcmtpbmcnXG4gICAgKS53aWR0aFxuICAgIHdpbmRvdy5yYXRpbyA9IE1hdGgubWF4KHdpbmRvdy5pbm5lcldpZHRoIC8gd2lkdGgsIDEpXG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICB3dzogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIHdoOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIG9wdGltYWw6IHdpZHRoICsgZm9udF9zaXplICogbGluZV9oZWlnaHQsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRTaXplKVxuICAgIHRoaXMuc2V0U2l6ZSgpXG4gICAgbGV0IG1lID0gdGhpc1xuICAgIGRvY3VtZW50LmZvbnRzLnJlYWR5LnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBtZS5zZXRTaXplKClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKGV4cGVyaW1lbnRzKVxuXG4gICAgbGV0IHsgd3csIHdoLCBvcHRpbWFsLCBoZXggfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHRcblxuICAgIGxldCBkaXZpc2lvbnMgPSA0XG5cbiAgICBsZXQgdGFyZ2V0X3dpZHRoID0gb3B0aW1hbCAvIGRpdmlzaW9uc1xuICAgIGxldCBjb2x1bW5zID0gTWF0aC5mbG9vcih3dyAvIHRhcmdldF93aWR0aClcbiAgICBsZXQgb2dfY29sdW1ucyA9IE1hdGguZmxvb3Iod3cgLyB0YXJnZXRfd2lkdGgpXG4gICAgbGV0IGNvbHVtbl93aWR0aCA9IHd3IC8gY29sdW1uc1xuXG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBsZXQgZXZlbiA9IGNvbHVtbnMgJSAyID09PSAwXG4gICAgaWYgKCFldmVuKSB7XG4gICAgICBjb2x1bW5zID0gY29sdW1ucyAtIDFcbiAgICAgIG9mZnNldCA9IGNvbHVtbl93aWR0aCAvIDJcbiAgICB9XG5cbiAgICBsZXQgb3B0aW1fd2lkdGggPSBjb2x1bW5fd2lkdGggKiBkaXZpc2lvbnNcbiAgICBsZXQgb3B0aW1fbGVmdCA9IChjb2x1bW5zIC8gMiAtIGRpdmlzaW9ucyAvIDIpICogY29sdW1uX3dpZHRoICsgb2Zmc2V0XG5cbiAgICBsZXQgcmF0aW8gPSBjb2x1bW5fd2lkdGggLyB0YXJnZXRfd2lkdGhcblxuICAgIGlmIChjb2x1bW5zIDwgZGl2aXNpb25zKSB7XG4gICAgICBvZmZzZXQgPSAwXG4gICAgICBjb2x1bW5zID0gMlxuICAgICAgY29sdW1uX3dpZHRoID0gd3cgLyAyXG4gICAgICBvcHRpbV93aWR0aCA9IGNvbHVtbl93aWR0aCAqIDJcbiAgICAgIG9wdGltX2xlZnQgPSAwXG4gICAgICByYXRpbyA9IDFcbiAgICB9XG5cbiAgICBsZXQgZnMgPSBmb250X3NpemUgKiByYXRpb1xuXG4gICAgbGV0IGNlbnRlcl90ZXh0ID0ge1xuICAgICAgd2lkdGg6IG9wdGltX3dpZHRoLFxuICAgICAgbWFyZ2luTGVmdDogb3B0aW1fbGVmdCxcbiAgICB9XG5cbiAgICBsZXQgdGFyZ2V0X2hlaWdodCA9IGdyZW0gKiAxMlxuICAgIGxldCBzcGFjZXIgPSBncmVtXG5cbiAgICBsZXQgc2l6ZWRfZXhwZXJpbWVudHMgPSBleHBlcmltZW50cy5tYXAoZSA9PiB7XG4gICAgICBsZXQgdyA9IE1hdGgucm91bmQoY29sdW1uX3dpZHRoICogMiAtIHNwYWNlcilcbiAgICAgIGxldCBoID0gTWF0aC5yb3VuZCh0YXJnZXRfaGVpZ2h0KVxuICAgICAgaWYgKGUuZmVhdHVyZWQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aWR0aDogTWF0aC5taW4odyAqIDIgKyBzcGFjZXIsIHd3IC0gc3BhY2VyKSxcbiAgICAgICAgICBoZWlnaHQ6IGggKiAyICsgc3BhY2VyLFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiBNYXRoLm1pbih3LCB3dyAtIHNwYWNlciksXG4gICAgICAgICAgaGVpZ2h0OiBoLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGxldCBhdmFpbCA9IHd3IC0gb2Zmc2V0ICogMlxuXG4gICAgbGV0IHBhY2tlZCA9IHBhY2soXG4gICAgICB7IHdpZHRoOiBhdmFpbCwgaGVpZ2h0OiBJbmZpbml0eSB9LFxuICAgICAgc2l6ZWRfZXhwZXJpbWVudHMsXG4gICAgICBzcGFjZXJcbiAgICApXG5cbiAgICBsZXQgY2FwID0gZ3JlbSAqICgyMDQ4IC8gMjgxNilcblxuICAgIGxldCBmc19ub3JtYWwgPSB7XG4gICAgICBmb250U2l6ZTogZnMsXG4gICAgfVxuXG4gICAgbGV0IHN2Z19zY2FsZSA9IDM1IC8gKGNhcCArIGdyZW0gLyA4KVxuXG4gICAgbGV0IHJvdW5kZWRfd2ggPSBNYXRoLmZsb29yKHdoIC8gZ3JlbSkgKiBncmVtXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj1cInN0YXRpYy9mb250cy9JbnRlci1SZWd1bGFyLndvZmYyP3Y9My41XCJcbiAgICAgICAgICAgIGFzPVwiZm9udFwiXG4gICAgICAgICAgICB0eXBlPVwiZm9udC93b2ZmMlwiXG4gICAgICAgICAgICBjcm9zc09yaWdpbj1cIipcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICR7aGV4fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyaSc7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgc3JjOiB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1SZWd1bGFyLndvZmYyP3Y9My41JykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1SZWd1bGFyLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyaSc7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgc3JjOiB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1JdGFsaWMud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLUl0YWxpYy53b2ZmP3Y9My41JykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyaScsIHNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRfc2l6ZX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2xpbmVfaGVpZ2h0fTtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdrZXJuJztcbiAgICAgICAgICAgIGZvbnQta2VybmluZzogbm9ybWFsO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXJfYm94OmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4wNXMgbGluZWFyO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwICR7Z3JlbSAvIDJ9cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXJfYm94OmhvdmVyIC5ob3Zlcl9uYW1lIHtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAge29wdGltYWwgIT09IG51bGwgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogd3csXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgICAgICAgIHpJbmRleDogLTEsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Wy4uLkFycmF5KGNvbHVtbnMpXS5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogaSAqIGNvbHVtbl93aWR0aCArIG9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29sdW1uX3dpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6ICdzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjEpJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJywgbGVmdDogMCwgYm90dG9tOiAwLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5vZ19jb2x1bW5zOiB7b2dfY29sdW1uc308L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57ZXZlbiA/ICdldmVuJyA6ICdvZGQnfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PmZvbnQgc2l6ZToge2ZzfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgICAgLi4uZnNfbm9ybWFsLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IGdyZW0gKiAxLjI1IH19PlxuICAgICAgICAgICAgICAgICAgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzNiAzNlwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtjYXAgKyBncmVtIC8gOH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17Y2FwICsgZ3JlbSAvIDh9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZ3JlbSAvIDIgKyAoZ3JlbSAtIGNhcCkgLyAyIC0gZ3JlbSAvIDE2LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTE4IDE4TDEgMVYzNUwxOCAxOFpcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtmcyAqIHN0eWxlcy5zdHJva2VfbXVsdCAqIHN2Z19zY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJiZXZlbFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0zNSAxOEwxOCAxVjM1TDM1IDE4WlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2ZzICogc3R5bGVzLnN0cm9rZV9tdWx0ICogc3ZnX3NjYWxlfVxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cImJldmVsXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEgMUgzNVYxOEgxVjFaXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2ZzICogc3R5bGVzLnN0cm9rZV9tdWx0ICogc3ZnX3NjYWxlfVxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xIDE4SDM1VjM1SDFWMThaXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2ZzICogc3R5bGVzLnN0cm9rZV9tdWx0ICogc3ZnX3NjYWxlfVxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPk1haW48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5CbG9nPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgPEhkIHdpZHRoPXt3d30gYWxpZ249XCJiXCIgc3Ryb2tlPXtmcyAqIHN0eWxlcy5zdHJva2VfbXVsdH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiBncmVtICogMixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGdyZW0gKiA0LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZmFsc2VcbiAgICAgICAgICAgICAgICA/IGV4cGVyaW1lbnRzLm1hcCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYiA9IHBhY2tlZC5ib3hlc1tpXVxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3X3dpZHRoID0gZ3JlbSAqIDZcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld19oZWlnaHQgPSBncmVtICogOFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKChiLnggLyB3dykgKiBuZXdfd2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IE1hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGIueSAvIHBhY2tlZC5jb250YWluZXIuaGVpZ2h0KSAqIG5ld19oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IE1hdGgucm91bmQoKGIud2lkdGggLyB3dykgKiBuZXdfd2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGIuaGVpZ2h0IC8gcGFja2VkLmNvbnRhaW5lci5oZWlnaHQpICogbmV3X2hlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtlLmltYWdlX3VybH0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGdyZW0gKiA0LFxuICAgICAgICAgICAgICAgICAgZmlsdGVyOiAnZ3JheXNjYWxlKDEwMCUpJyxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiB3dyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4uY2VudGVyX3RleHQsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IGZzICogMyxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRXhwZXJpbWVudHNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC4uLmNlbnRlcl90ZXh0LFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgLi4uZnNfbm9ybWFsLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNYWNoaW5lIGxlYXJuaW5nIHZpc3VhbGl6YXRpb25zIGFuZCBjb2RlXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBncmVtIC8gMiArIG9mZnNldCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEV4cEdyaWRcbiAgICAgICAgICAgICAgICB3aWR0aD17d3d9XG4gICAgICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgICAgICBleHBlcmltZW50cz17ZXhwZXJpbWVudHN9XG4gICAgICAgICAgICAgICAgcGFja2VkPXtwYWNrZWR9XG4gICAgICAgICAgICAgICAgc3BhY2VyPXtzcGFjZXJ9XG4gICAgICAgICAgICAgICAgdGFyZ2V0X2hlaWdodD17dGFyZ2V0X2hlaWdodH1cbiAgICAgICAgICAgICAgICBmcz17ZnN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC4uLmNlbnRlcl90ZXh0LFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBmcyAqIDIsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4yNSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAuLi5jZW50ZXJfdGV4dCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAuLi5mc19ub3JtYWwsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENsb3VkZXJhIEZhc3QgRm9yd2FyZCBpcyBhbiBhcHBsaWVkIG1hY2hpbmUgbGVhcm5pbmcgcmVzZWFyY2hcbiAgICAgICAgICAgICAgZ3JvdXAuIFdlIGhlbHAgb3JnYW5pemF0aW9ucyByZWNvZ25pemUgYW5kIGRldmVsb3AgbmV3IHByb2R1Y3QgYW5kXG4gICAgICAgICAgICAgIGJ1c2luZXNzIG9wcG9ydHVuaXRpZXMgdGhyb3VnaCBlbWVyZ2luZyB0ZWNobm9sb2dpZXMueycgJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5jZW50ZXJfdGV4dCwgcGFkZGluZzogZ3JlbSAvIDIsIHBhZGRpbmdUb3A6IDAgfX0+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+TGVhcm4gbW9yZSBhYm91dCB3b3JraW5nIHdpdGggdXMuPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogZ3JlbSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEhkIHdpZHRoPXt3d30gYWxpZ249XCJiXCIgc3Ryb2tlPXtmcyAqIHN0eWxlcy5zdHJva2VfbXVsdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/fastforward/pages/index.js */")), optimal !== null ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          top: 0,
          width: ww,
          height: '100vh',
          zIndex: -1,
          display: 'none'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(columns)).map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          key: i,
          style: {
            position: 'absolute',
            left: i * column_width + offset,
            top: 0,
            width: column_width,
            height: '100vh',
            outline: 'solid 1px rgba(0,0,0,0.1)'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          bottom: 0,
          display: 'none'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "og_columns: ", og_columns), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, even ? 'even' : 'odd'), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "font size: ", fs)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          padding: grem / 2,
          display: 'flex',
          justifyContent: 'space-between'
        }, fs_normal),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          paddingLeft: grem * 1.25
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Cloudera Fast Forward"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("svg", {
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        width: cap + grem / 8,
        height: cap + grem / 8,
        style: {
          position: 'absolute',
          left: grem / 2,
          top: grem / 2 + (grem - cap) / 2 - grem / 16
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("path", {
        d: "M18 18L1 1V35L18 18Z",
        stroke: "black",
        strokeWidth: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_13__["styles"].stroke_mult * svg_scale,
        strokeLinejoin: "bevel",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("path", {
        d: "M35 18L18 1V35L35 18Z",
        stroke: "black",
        strokeWidth: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_13__["styles"].stroke_mult * svg_scale,
        strokeLinejoin: "bevel",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("path", {
        d: "M1 1H35V18H1V1Z",
        strokeWidth: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_13__["styles"].stroke_mult * svg_scale,
        stroke: "black",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("path", {
        d: "M1 18H35V35H1V18Z",
        strokeWidth: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_13__["styles"].stroke_mult * svg_scale,
        stroke: "black",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Main")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "Blog")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          padding: 0,
          paddingBottom: grem / 2,
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_12__["Hd"], {
        width: ww,
        align: "b",
        stroke: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_13__["styles"].stroke_mult,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: grem * 2,
          height: grem * 4
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, false ? undefined : null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          height: grem * 4,
          filter: 'grayscale(100%)',
          width: ww
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, center_text, {
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          fontSize: fs * 3,
          lineHeight: 1,
          paddingTop: grem / 2,
          marginTop: grem / 2,
          position: 'relative',
          background: 'white'
        }),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "Experiments"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, center_text, {
          padding: grem / 2,
          background: 'white',
          position: 'relative'
        }, fs_normal),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "Machine learning visualizations and code"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          padding: grem / 2,
          paddingLeft: grem / 2 + offset
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_parts_ExpGrid__WEBPACK_IMPORTED_MODULE_16__["default"], {
        width: ww,
        grem: grem,
        experiments: _data_experiments_json__WEBPACK_IMPORTED_MODULE_19__["experiments"],
        packed: packed,
        spacer: spacer,
        target_height: target_height,
        fs: fs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, center_text, {
          fontSize: fs * 2,
          lineHeight: 1.25,
          padding: grem / 2,
          paddingBottom: 0
        }),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, center_text, {
          padding: grem / 2
        }, fs_normal),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, "Cloudera Fast Forward is an applied machine learning research group. We help organizations recognize and develop new product and business opportunities through emerging technologies.", ' '), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, center_text, {
          padding: grem / 2,
          paddingTop: 0
        }),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, "Learn more about working with us.")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          position: 'relative',
          paddingTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_12__["Hd"], {
        width: ww,
        align: "b",
        stroke: fs * _parts_Utils__WEBPACK_IMPORTED_MODULE_13__["styles"].stroke_mult,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["384580974", [hex, font_size, line_height, grem / 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      })) : null);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5985a10af0bc94c22cbf.hot-update.js.map