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
      console.log(_data_experiments_json__WEBPACK_IMPORTED_MODULE_19__);
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
      var sized_experiments = _data_experiments_json__WEBPACK_IMPORTED_MODULE_19__.map(function (e) {
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
      }, "@font-face{font-family:'Interi';font-style:normal;font-weight:400;src:url('static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'), url('static/fonts/Inter-Regular.woff?v=3.5') format('woff');}@font-face{font-family:'Interi';font-style:italic;font-weight:400;src:url('static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'), url('static/fonts/Inter-Italic.woff?v=3.5') format('woff');}:root{--background:".concat(hex, ";}*{box-sizing:border-box;}html{font-family:'Interi',serif;font-size:").concat(font_size, "px;line-height:").concat(line_height, ";text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{margin:0;overflow-x:hidden;}a{color:inherit;-webkit-text-decoration:underline;text-decoration:underline;}.hover_box:hover{-webkit-transition:box-shadow 0.05s linear;transition:box-shadow 0.05s linear;box-shadow:0 0 ").concat(grem / 2, "px rgba(0,0,0,0.4);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmFzdGZvcndhcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUoyQixBQUd1RCxBQUdyQixBQU9BLEFBT0MsQUFHTSxBQVVuQixBQUlLLEFBSXFCLFNBUGpCLEtBSVEsT0EvQlIsQUFPQSxDQU9wQixLQUcyQyxBQVczQyxZQTNCa0IsQUFPQSxHQVhsQixhQU0rRCxBQU9ELGFBUW5CLE1BYzNDLElBR21FLCtCQWhCL0IsK0JBaUJwQyxHQWhCK0IsNkJBQ1QsUUFWdEIsRUFQQSxVQWtCcUMsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmFzdGZvcndhcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgSGQsIFZkLCBSZWN0LCBGZGl2IH0gZnJvbSAnLi4vcGFydHMvRGl2aWRlcnMnXG5pbXBvcnQgeyBzdHlsZXMsIHAgfSBmcm9tICcuLi9wYXJ0cy9VdGlscydcbmltcG9ydCB7IHBhY2sgfSBmcm9tICcuLi9wYXJ0cy9CaW5wYWNrLTJkLXBvcnQnXG5pbXBvcnQgRkZ1dHVyZSBmcm9tICcuLi9wYXJ0cy9GRnV0dXJlJ1xuaW1wb3J0IEV4cEdyaWQgZnJvbSAnLi4vcGFydHMvRXhwR3JpZCdcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgY2hyb21hIGZyb20gJ2Nocm9tYS1qcydcbmltcG9ydCBleHBlcmltZW50cyBmcm9tICcuLi9kYXRhL2V4cGVyaW1lbnRzLmpzb24nXG5cbmxldCBmb250X3NpemUgPSAxNlxubGV0IGxpbmVfaGVpZ2h0ID0gMS41XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKVxuICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCAwLCAwKVxuICAgIHZhciBkaWZmID1cbiAgICAgIG5vdyAtXG4gICAgICBzdGFydCArXG4gICAgICAoc3RhcnQuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIG5vdy5nZXRUaW1lem9uZU9mZnNldCgpKSAqIDYwICogMTAwMCAqIDI0XG4gICAgdmFyIG9uZURheSA9IDEwMDAgKiA2MCAqIDYwICogMjRcbiAgICB2YXIgZGF5X2luX3llYXIgPSBNYXRoLmZsb29yKGRpZmYgLyBvbmVEYXkpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd3c6IDAsXG4gICAgICBvcHRpbWFsOiBudWxsLFxuICAgICAgaGV4OiBjaHJvbWEuaGNsKE1hdGguZmxvb3IoKGRheV9pbl95ZWFyIC8gMzY1KSAqIDM2MCksIDYwLCA4MCksXG4gICAgfVxuICAgIHRoaXMuc2V0U2l6ZSA9IHRoaXMuc2V0U2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTaXplID0gZGVib3VuY2UodGhpcy5zZXRTaXplLCAxMDApXG4gIH1cblxuICBzZXRTaXplKCkge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGN0eC5mb250ID0gYG5vcm1hbCAke2ZvbnRfc2l6ZX1weCBJbnRlcmlgXG4gICAgbGV0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KFxuICAgICAgJ3Rob3VzYW5kIHdyaXRlcnMuIFdpdGggb3ZlciBhIG1pbGxpb24gcGVvcGxlIGZyb20gdmFyaW91cyBmaWVsZHMgd29ya2luZydcbiAgICApLndpZHRoXG4gICAgd2luZG93LnJhdGlvID0gTWF0aC5tYXgod2luZG93LmlubmVyV2lkdGggLyB3aWR0aCwgMSlcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHd3OiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgd2g6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgb3B0aW1hbDogd2lkdGggKyBmb250X3NpemUgKiBsaW5lX2hlaWdodCxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7fVxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFNpemUpXG4gICAgdGhpcy5zZXRTaXplKClcbiAgICBsZXQgbWUgPSB0aGlzXG4gICAgZG9jdW1lbnQuZm9udHMucmVhZHkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIG1lLnNldFNpemUoKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coZXhwZXJpbWVudHMpXG5cbiAgICBsZXQgeyB3dywgd2gsIG9wdGltYWwsIGhleCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IGdyZW0gPSBmb250X3NpemUgKiBsaW5lX2hlaWdodFxuXG4gICAgbGV0IGRpdmlzaW9ucyA9IDRcblxuICAgIGxldCB0YXJnZXRfd2lkdGggPSBvcHRpbWFsIC8gZGl2aXNpb25zXG4gICAgbGV0IGNvbHVtbnMgPSBNYXRoLmZsb29yKHd3IC8gdGFyZ2V0X3dpZHRoKVxuICAgIGxldCBvZ19jb2x1bW5zID0gTWF0aC5mbG9vcih3dyAvIHRhcmdldF93aWR0aClcbiAgICBsZXQgY29sdW1uX3dpZHRoID0gd3cgLyBjb2x1bW5zXG5cbiAgICBsZXQgb2Zmc2V0ID0gMFxuICAgIGxldCBldmVuID0gY29sdW1ucyAlIDIgPT09IDBcbiAgICBpZiAoIWV2ZW4pIHtcbiAgICAgIGNvbHVtbnMgPSBjb2x1bW5zIC0gMVxuICAgICAgb2Zmc2V0ID0gY29sdW1uX3dpZHRoIC8gMlxuICAgIH1cblxuICAgIGxldCBvcHRpbV93aWR0aCA9IGNvbHVtbl93aWR0aCAqIGRpdmlzaW9uc1xuICAgIGxldCBvcHRpbV9sZWZ0ID0gKGNvbHVtbnMgLyAyIC0gZGl2aXNpb25zIC8gMikgKiBjb2x1bW5fd2lkdGggKyBvZmZzZXRcblxuICAgIGxldCByYXRpbyA9IGNvbHVtbl93aWR0aCAvIHRhcmdldF93aWR0aFxuXG4gICAgaWYgKGNvbHVtbnMgPCBkaXZpc2lvbnMpIHtcbiAgICAgIG9mZnNldCA9IDBcbiAgICAgIGNvbHVtbnMgPSAyXG4gICAgICBjb2x1bW5fd2lkdGggPSB3dyAvIDJcbiAgICAgIG9wdGltX3dpZHRoID0gY29sdW1uX3dpZHRoICogMlxuICAgICAgb3B0aW1fbGVmdCA9IDBcbiAgICAgIHJhdGlvID0gMVxuICAgIH1cblxuICAgIGxldCBmcyA9IGZvbnRfc2l6ZSAqIHJhdGlvXG5cbiAgICBsZXQgY2VudGVyX3RleHQgPSB7XG4gICAgICB3aWR0aDogb3B0aW1fd2lkdGgsXG4gICAgICBtYXJnaW5MZWZ0OiBvcHRpbV9sZWZ0LFxuICAgIH1cblxuICAgIGxldCB0YXJnZXRfaGVpZ2h0ID0gZ3JlbSAqIDEyXG4gICAgbGV0IHNwYWNlciA9IGdyZW1cblxuICAgIGxldCBzaXplZF9leHBlcmltZW50cyA9IGV4cGVyaW1lbnRzLm1hcChlID0+IHtcbiAgICAgIGxldCB3ID0gTWF0aC5yb3VuZChjb2x1bW5fd2lkdGggKiAyIC0gc3BhY2VyKVxuICAgICAgbGV0IGggPSBNYXRoLnJvdW5kKHRhcmdldF9oZWlnaHQpXG4gICAgICBpZiAoZS5mZWF0dXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiBNYXRoLm1pbih3ICogMiArIHNwYWNlciwgd3cgLSBzcGFjZXIpLFxuICAgICAgICAgIGhlaWdodDogaCAqIDIgKyBzcGFjZXIsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKHcsIHd3IC0gc3BhY2VyKSxcbiAgICAgICAgICBoZWlnaHQ6IGgsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IGF2YWlsID0gd3cgLSBvZmZzZXQgKiAyXG5cbiAgICBsZXQgcGFja2VkID0gcGFjayhcbiAgICAgIHsgd2lkdGg6IGF2YWlsLCBoZWlnaHQ6IEluZmluaXR5IH0sXG4gICAgICBzaXplZF9leHBlcmltZW50cyxcbiAgICAgIHNwYWNlclxuICAgIClcblxuICAgIGxldCBjYXAgPSBncmVtICogKDIwNDggLyAyODE2KVxuXG4gICAgbGV0IGZzX25vcm1hbCA9IHtcbiAgICAgIGZvbnRTaXplOiBmcyxcbiAgICB9XG5cbiAgICBsZXQgc3ZnX3NjYWxlID0gMzUgLyAoY2FwICsgZ3JlbSAvIDgpXG5cbiAgICBsZXQgcm91bmRlZF93aCA9IE1hdGguZmxvb3Iod2ggLyBncmVtKSAqIGdyZW1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPVwic3RhdGljL2ZvbnRzL0ludGVyLVJlZ3VsYXIud29mZjI/dj0zLjVcIlxuICAgICAgICAgICAgYXM9XCJmb250XCJcbiAgICAgICAgICAgIHR5cGU9XCJmb250L3dvZmYyXCJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiKlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogJHtoZXh9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXJpJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLVJlZ3VsYXIud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLVJlZ3VsYXIud29mZj92PTMuNScpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXJpJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLUl0YWxpYy53b2ZmMj92PTMuNScpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCdzdGF0aWMvZm9udHMvSW50ZXItSXRhbGljLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXJpJywgc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7Zm9udF9zaXplfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGluZV9oZWlnaHR9O1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgICAgZm9udC1rZXJuaW5nOiBub3JtYWw7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlcl9ib3g6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjA1cyBsaW5lYXI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgJHtncmVtIC8gMn1weCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlcl9ib3g6aG92ZXIgLmhvdmVyX25hbWUge1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICB7b3B0aW1hbCAhPT0gbnVsbCA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3dyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgICAgekluZGV4OiAtMSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtbLi4uQXJyYXkoY29sdW1ucyldLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBpICogY29sdW1uX3dpZHRoICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb2x1bW5fd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogJ3NvbGlkIDFweCByZ2JhKDAsMCwwLDAuMSknLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCBsZWZ0OiAwLCBib3R0b206IDAsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2Pm9nX2NvbHVtbnM6IHtvZ19jb2x1bW5zfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PntldmVuID8gJ2V2ZW4nIDogJ29kZCd9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+Zm9udCBzaXplOiB7ZnN9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICAuLi5mc19ub3JtYWwsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogZ3JlbSAqIDEuMjUgfX0+XG4gICAgICAgICAgICAgICAgICBDbG91ZGVyYSBGYXN0IEZvcndhcmRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDM2IDM2XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2NhcCArIGdyZW0gLyA4fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtjYXAgKyBncmVtIC8gOH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBncmVtIC8gMiArIChncmVtIC0gY2FwKSAvIDIgLSBncmVtIC8gMTYsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTggMThMMSAxVjM1TDE4IDE4WlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2ZzICogc3R5bGVzLnN0cm9rZV9tdWx0ICogc3ZnX3NjYWxlfVxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cImJldmVsXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTM1IDE4TDE4IDFWMzVMMzUgMThaXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17ZnMgKiBzdHlsZXMuc3Ryb2tlX211bHQgKiBzdmdfc2NhbGV9XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwiYmV2ZWxcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMSAxSDM1VjE4SDFWMVpcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17ZnMgKiBzdHlsZXMuc3Ryb2tlX211bHQgKiBzdmdfc2NhbGV9XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEgMThIMzVWMzVIMVYxOFpcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17ZnMgKiBzdHlsZXMuc3Ryb2tlX211bHQgKiBzdmdfc2NhbGV9XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBncmVtIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+TWFpbjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkJsb2c8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICA8SGQgd2lkdGg9e3d3fSBhbGlnbj1cImJcIiBzdHJva2U9e2ZzICogc3R5bGVzLnN0cm9rZV9tdWx0fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IGdyZW0gKiAyLFxuICAgICAgICAgICAgICAgIGhlaWdodDogZ3JlbSAqIDQsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtmYWxzZVxuICAgICAgICAgICAgICAgID8gZXhwZXJpbWVudHMubWFwKChlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiID0gcGFja2VkLmJveGVzW2ldXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdfd2lkdGggPSBncmVtICogNlxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3X2hlaWdodCA9IGdyZW0gKiA4XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKGIueCAvIHd3KSAqIG5ld193aWR0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogTWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYi55IC8gcGFja2VkLmNvbnRhaW5lci5oZWlnaHQpICogbmV3X2hlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogTWF0aC5yb3VuZCgoYi53aWR0aCAvIHd3KSAqIG5ld193aWR0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYi5oZWlnaHQgLyBwYWNrZWQuY29udGFpbmVyLmhlaWdodCkgKiBuZXdfaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2UuaW1hZ2VfdXJsfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogZ3JlbSAqIDQsXG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6ICdncmF5c2NhbGUoMTAwJSknLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IHd3LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAuLi5jZW50ZXJfdGV4dCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogZnMgKiAzLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFeHBlcmltZW50c1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4uY2VudGVyX3RleHQsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAuLi5mc19ub3JtYWwsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1hY2hpbmUgbGVhcm5pbmcgdmlzdWFsaXphdGlvbnMgYW5kIGNvZGVcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IGdyZW0gLyAyICsgb2Zmc2V0LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RXhwR3JpZFxuICAgICAgICAgICAgICAgIHdpZHRoPXt3d31cbiAgICAgICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgICAgIGV4cGVyaW1lbnRzPXtleHBlcmltZW50c31cbiAgICAgICAgICAgICAgICBwYWNrZWQ9e3BhY2tlZH1cbiAgICAgICAgICAgICAgICBzcGFjZXI9e3NwYWNlcn1cbiAgICAgICAgICAgICAgICB0YXJnZXRfaGVpZ2h0PXt0YXJnZXRfaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGZzPXtmc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4uY2VudGVyX3RleHQsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IGZzICogMixcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC4uLmNlbnRlcl90ZXh0LFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgIC4uLmZzX25vcm1hbCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIGlzIGFuIGFwcGxpZWQgbWFjaGluZSBsZWFybmluZyByZXNlYXJjaFxuICAgICAgICAgICAgICBncm91cC4gV2UgaGVscCBvcmdhbml6YXRpb25zIHJlY29nbml6ZSBhbmQgZGV2ZWxvcCBuZXcgcHJvZHVjdCBhbmRcbiAgICAgICAgICAgICAgYnVzaW5lc3Mgb3Bwb3J0dW5pdGllcyB0aHJvdWdoIGVtZXJnaW5nIHRlY2hub2xvZ2llcy57JyAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLmNlbnRlcl90ZXh0LCBwYWRkaW5nOiBncmVtIC8gMiwgcGFkZGluZ1RvcDogMCB9fT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5MZWFybiBtb3JlIGFib3V0IHdvcmtpbmcgd2l0aCB1cy48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBncmVtLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SGQgd2lkdGg9e3d3fSBhbGlnbj1cImJcIiBzdHJva2U9e2ZzICogc3R5bGVzLnN0cm9rZV9tdWx0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/fastforward/pages/index.js */")), optimal !== null ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
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
        experiments: _data_experiments_json__WEBPACK_IMPORTED_MODULE_19__,
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
//# sourceMappingURL=index.js.04c2c0cfaa75ea2ea713.hot-update.js.map