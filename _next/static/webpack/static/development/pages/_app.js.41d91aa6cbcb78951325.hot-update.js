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
      var ogrem = _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"];
      var afs = _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"];
      var font_ratio = optimal / _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"];

      if (ww - ogrem < optimal) {
        var aspect_font = (ww - ogrem) / font_ratio;

        if (aspect_font > _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_min"]) {
          afs = aspect_font;
        } else {
          afs = _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_min"];
        }
      }

      ogrem = afs * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"];
      var divisions = 4;
      var target_width = optimal / divisions;
      var columns = Math.floor((ww - ogrem) / target_width);
      var column_width = (ww - ogrem) / columns;
      var offset = 0;
      var even = columns % 2 === 0;

      if (!even) {
        columns = columns - 1;
        offset = column_width / 2;
      }

      var ratio = column_width / target_width;
      var optim_width = column_width * divisions;
      var optim_center_left = (columns / 2 - divisions / 2) * column_width + offset;
      var stacked = false; // TODO rethink stacked

      if (columns < divisions) {
        offset = 0;
        columns = divisions;
        column_width = (ww - ogrem) / divisions;
        optim_width = column_width * divisions;
        optim_center_left = 0; // grem = grem / 2

        ratio = 1;
        stacked = true;
      } // Adjust grem


      var fs = afs * ratio;
      var grem = fs * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"];
      var center_text = {
        width: optim_width,
        marginLeft: optim_center_left
      };
      var ofsn = {
        fontSize: afs,
        lineHeight: _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"] // font-size normal

      };
      var fsn = {
        fontSize: fs,
        lineHeight: _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]
      };
      var logo_stroke = 'black';
      var ocap = ogrem * (2048 / 2816);
      var cap = grem * (2048 / 2816);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1356236813",
        dynamic: [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]],
        __self: this
      }, "*{box-sizing:border-box;}html{font-family:'Inter',serif;font-size:".concat(_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], "px;line-height:").concat(_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], "px;text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;font-feature-settings:'ss02' 1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{margin:0;overflow-x:hidden;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}a:hover{opacity:0.75;}a.no-hover:hover{opacity:1;}.hover_box_overlay{opacity:0;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}.hover_box:hover .hover_box_overlay{opacity:1;}a.gray-backer{-webkit-transition:background 0.05s linear;transition:background 0.05s linear;}a.gray-backer:hover{background:#f3f3f3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9JMkIsQUFHbUMsQUFHSyxBQVdsQixBQUlLLEFBS0QsQUFHSCxBQUdBLEFBSUEsQUFHeUIsQUFHaEIsU0F4QkQsQ0FZcEIsQUFHbUMsQUFJbkMsR0FWQSxDQUx1QixLQXFCdkIsR0F2Q0EsSUFHMkMsQ0FZM0MscUNBSW1DLEdBZlUsV0FnQzdDLE1BTkEsMEJBekJvQyw0QkFlcEMsTUFkK0IsNkJBQ1Qsb0JBQ1csK0JBQ0ksbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFBvc3RMYXlvdXQgfSBmcm9tICcuLi9wYXJ0cy9MYXlvdXQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb250X3NpemUsIGxpbmVfaGVpZ2h0LCBmb250X21pbiwgc20gfSBmcm9tICcuLi8uLi9leHAvcGFydHMvU3RhdGljJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3BhcnRzL0hlYWRlcidcblxuLy8gT3ZlcnJpZGUgdGhlIEFwcCBjbGFzcyB0byBwdXQgbGF5b3V0IGNvbXBvbmVudCBhcm91bmQgdGhlIHBhZ2UgY29udGVudHNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMjY3VzdG9tLWFwcFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHd3OiAwLFxuICAgICAgb3B0aW1hbDogbnVsbCxcbiAgICAgIGdyaWRfY2FudmFzOiBudWxsLFxuICAgICAgbW9kZTogJ2xpZ2h0JyxcbiAgICAgIGdyaWQ6ICdoaWRlJyxcbiAgICAgIHNob3dpbmdfcG9zdHM6IDI1LFxuICAgIH1cbiAgICB0aGlzLnNldFNpemUgPSB0aGlzLnNldFNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0U2l6ZSA9IGRlYm91bmNlKHRoaXMuc2V0U2l6ZSwgMTAwKVxuICB9XG5cbiAgc2V0U2l6ZSgpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjdHguZm9udCA9IGBub3JtYWwgJHtmb250X3NpemV9cHggSW50ZXJgXG4gICAgbGV0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KFxuICAgICAgJ3Rob3VzYW5kIHdyaXRlcnMuIFdpdGggb3ZlciBhIG1pbGxpb24gcGVvcGxlIGZyb20gdmFyaW91cyBmaWVsZHMgd29ya2luZydcbiAgICApLndpZHRoXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgd3c6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICB3aDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICBvcHRpbWFsOiB3aWR0aCArIGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0LFxuICAgICAgICAvLyBvcHRpbWFsOiA2MzMuNTAyNDQxNDA2MjUsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRTaXplKVxuICAgIHRoaXMuc2V0U2l6ZSgpXG5cbiAgICBsZXQgbW9kZV92YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2RlJykgfHwgJ2xpZ2h0J1xuICAgIGxldCBncmlkX3ZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dyaWQnKSB8fCAnaGlkZSdcblxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBncmlkX2NhbnZhczogY2FudmFzLCBtb2RlOiBtb2RlX3ZhbHVlLCBncmlkOiBncmlkX3ZhbHVlIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgd3csIHdoLCBvcHRpbWFsLCBtb2RlLCBncmlkLCBncmlkX2NhbnZhcywgc2hvd2luZ19wb3N0cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlclxuXG4gICAgbGV0IGlzX3Bvc3QgPSBwYXRobmFtZS5zdGFydHNXaXRoKCcvcG9zdHMvJylcblxuICAgIGxldCBvZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0XG4gICAgbGV0IGFmcyA9IGZvbnRfc2l6ZVxuXG4gICAgbGV0IGZvbnRfcmF0aW8gPSBvcHRpbWFsIC8gZm9udF9zaXplXG4gICAgaWYgKHd3IC0gb2dyZW0gPCBvcHRpbWFsKSB7XG4gICAgICBsZXQgYXNwZWN0X2ZvbnQgPSAod3cgLSBvZ3JlbSkgLyBmb250X3JhdGlvXG4gICAgICBpZiAoYXNwZWN0X2ZvbnQgPiBmb250X21pbikge1xuICAgICAgICBhZnMgPSBhc3BlY3RfZm9udFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWZzID0gZm9udF9taW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvZ3JlbSA9IGFmcyAqIGxpbmVfaGVpZ2h0XG5cbiAgICBsZXQgZGl2aXNpb25zID0gNFxuXG4gICAgbGV0IHRhcmdldF93aWR0aCA9IG9wdGltYWwgLyBkaXZpc2lvbnNcbiAgICBsZXQgY29sdW1ucyA9IE1hdGguZmxvb3IoKHd3IC0gb2dyZW0pIC8gdGFyZ2V0X3dpZHRoKVxuICAgIGxldCBjb2x1bW5fd2lkdGggPSAod3cgLSBvZ3JlbSkgLyBjb2x1bW5zXG5cbiAgICBsZXQgb2Zmc2V0ID0gMFxuICAgIGxldCBldmVuID0gY29sdW1ucyAlIDIgPT09IDBcbiAgICBpZiAoIWV2ZW4pIHtcbiAgICAgIGNvbHVtbnMgPSBjb2x1bW5zIC0gMVxuICAgICAgb2Zmc2V0ID0gY29sdW1uX3dpZHRoIC8gMlxuICAgIH1cblxuICAgIGxldCByYXRpbyA9IGNvbHVtbl93aWR0aCAvIHRhcmdldF93aWR0aFxuXG4gICAgbGV0IG9wdGltX3dpZHRoID0gY29sdW1uX3dpZHRoICogZGl2aXNpb25zXG4gICAgbGV0IG9wdGltX2NlbnRlcl9sZWZ0ID1cbiAgICAgIChjb2x1bW5zIC8gMiAtIGRpdmlzaW9ucyAvIDIpICogY29sdW1uX3dpZHRoICsgb2Zmc2V0XG5cbiAgICBsZXQgc3RhY2tlZCA9IGZhbHNlXG4gICAgLy8gVE9ETyByZXRoaW5rIHN0YWNrZWRcbiAgICBpZiAoY29sdW1ucyA8IGRpdmlzaW9ucykge1xuICAgICAgb2Zmc2V0ID0gMFxuICAgICAgY29sdW1ucyA9IGRpdmlzaW9uc1xuICAgICAgY29sdW1uX3dpZHRoID0gKHd3IC0gb2dyZW0pIC8gZGl2aXNpb25zXG4gICAgICBvcHRpbV93aWR0aCA9IGNvbHVtbl93aWR0aCAqIGRpdmlzaW9uc1xuICAgICAgb3B0aW1fY2VudGVyX2xlZnQgPSAwXG4gICAgICAvLyBncmVtID0gZ3JlbSAvIDJcbiAgICAgIHJhdGlvID0gMVxuICAgICAgc3RhY2tlZCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBBZGp1c3QgZ3JlbVxuICAgIGxldCBmcyA9IGFmcyAqIHJhdGlvXG4gICAgbGV0IGdyZW0gPSBmcyAqIGxpbmVfaGVpZ2h0XG5cbiAgICBsZXQgY2VudGVyX3RleHQgPSB7XG4gICAgICB3aWR0aDogb3B0aW1fd2lkdGgsXG4gICAgICBtYXJnaW5MZWZ0OiBvcHRpbV9jZW50ZXJfbGVmdCxcbiAgICB9XG4gICAgbGV0IG9mc24gPSB7XG4gICAgICBmb250U2l6ZTogYWZzLFxuICAgICAgbGluZUhlaWdodDogbGluZV9oZWlnaHQsXG4gICAgfVxuICAgIC8vIGZvbnQtc2l6ZSBub3JtYWxcbiAgICBsZXQgZnNuID0ge1xuICAgICAgZm9udFNpemU6IGZzLFxuICAgICAgbGluZUhlaWdodDogbGluZV9oZWlnaHQsXG4gICAgfVxuXG4gICAgbGV0IGxvZ29fc3Ryb2tlID0gJ2JsYWNrJ1xuICAgIGxldCBvY2FwID0gb2dyZW0gKiAoMjA0OCAvIDI4MTYpXG4gICAgbGV0IGNhcCA9IGdyZW0gKiAoMjA0OCAvIDI4MTYpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRfc2l6ZX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2ZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0fXB4O1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgICAgZm9udC1rZXJuaW5nOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdzczAyJyAxO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wMjVzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLWhvdmVyOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlcl9ib3hfb3ZlcmxheSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjAyNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXJfYm94OmhvdmVyIC5ob3Zlcl9ib3hfb3ZlcmxheSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLmdyYXktYmFja2VyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4wNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLmdyYXktYmFja2VyOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgbG9nb19zdHJva2U9e2xvZ29fc3Ryb2tlfVxuICAgICAgICAgICAgY2FwPXtjYXB9XG4gICAgICAgICAgICBmc249e2Zzbn1cbiAgICAgICAgICAgIGZzPXtmc31cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAge2lzX3Bvc3QgPyAoXG4gICAgICAgICAgICA8UG9zdExheW91dCBwYXRobmFtZT17cGF0aG5hbWV9PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1Bvc3RMYXlvdXQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        logo_stroke: logo_stroke,
        cap: cap,
        fsn: fsn,
        fs: fs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), is_post ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Layout__WEBPACK_IMPORTED_MODULE_9__["PostLayout"], {
        pathname: pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.41d91aa6cbcb78951325.hot-update.js.map