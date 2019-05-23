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
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
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
      ctx.font = "normal ".concat(_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], "px Inter");
      var width = ctx.measureText('thousand writers. With over a million people from various fields working').width;
      this.setState({
        ww: window.innerWidth,
        wh: window.innerHeight,
        // optimal: width + font_size * line_height,
        optimal: 633.50244140625
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
      var ogrem = _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"];
      var afs = _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"];
      var font_ratio = optimal / _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"];

      if (ww - ogrem < optimal) {
        var aspect_font = (ww - ogrem) / font_ratio;

        if (aspect_font > _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_min"]) {
          afs = aspect_font;
        } else {
          afs = _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_min"];
        }
      }

      ogrem = afs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"];
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
      var grem = fs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"];
      var center_text = {
        width: optim_width,
        marginLeft: optim_center_left
      };
      var ofsn = {
        fontSize: afs,
        lineHeight: _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"] // font-size normal

      };
      var fsn = {
        fontSize: fs,
        lineHeight: _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]
      };
      var logo_stroke = 'black';
      var ocap = ogrem * (2048 / 2816);
      var cap = grem * (2048 / 2816);
      var grid_props = {
        grem: grem,
        ogrem: ogrem,
        center_text: center_text,
        afs: afs,
        fsn: fsn,
        fs: fs,
        columns: columns,
        column_width: column_width,
        offset: offset,
        ww: ww,
        wh: wh,
        cap: cap,
        optim_width: optim_width
      };
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "243119499",
        dynamic: [_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]],
        __self: this
      }, "@font-face{font-family:'Inter';font-style:normal;font-weight:400;src:url('static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'), url('static/fonts/Inter-Regular.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:400;src:url('static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'), url('static/fonts/Inter-Italic.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:700;src:url('static/fonts/Inter-Bold.woff2?v=3.5 format('woff2'),              url('static/fonts/Inter-Bold.woff?v=3.5') format('woff');;}@font-face{font-family:'Inter';font-style:italic;font-weight:700;src:url('static/fonts/Inter-BoldItalic.woff2?v=3.5 format('woff2'),              url('static/fonts/Inter-BoldItalic.woff?v=3.5') format('woff');;}*{box-sizing:border-box;}html{font-family:'Inter',serif;font-size:".concat(_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], "px;line-height:").concat(_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], "px;text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;font-feature-settings:'ss02' 1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}pre{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto;overflow-x:auto;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo, Monaco,Courier New,monospace;}body{margin:0;overflow-x:hidden;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}a:hover{opacity:0.75;}a.no-hover:hover{opacity:1;}.hover_box_overlay{opacity:0;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}.hover_box:hover .hover_box_overlay{opacity:1;}a.gray-backer{-webkit-transition:background 0.05s linear;transition:background 0.05s linear;}a.gray-backer:hover{background:#f3f3f3;}button:focus{outline:#999 auto 3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9KMkIsQUFHaUMsQUFPQSxBQU9BLEFBT0EsQUFRRSxBQUdLLEFBV0MsQUFPbkIsQUFJSyxBQUtELEFBR0gsQUFHQSxBQUlBLEFBR3lCLEFBR2hCLEFBR0csU0EzQkosQ0FZcEIsQUFHbUMsQUFJbkMsR0FWQSxDQUx1QixLQXFCdkIsQ0EzRW9CLEFBT0EsQUFPQSxBQU9BLEVBUXBCLEFBaURBLElBOUMyQyxDQW1CM0MsQ0FSK0IsVUExQ2IsQUFPQSxBQU9BLEFBT0EsZ0JBbkI2QyxBQU9ELEFBUTlELEFBT0EsR0FtQmtCLE9BV2lCLEdBdEJVLE1BYVgsS0EwQmxDLE1BTkEsMEJBaENvQyw0QkFzQnBDLE1BckIrQixpQkFZL0IsWUFYc0IsTUF6QnRCLEVBUEEsTUFjQyxNQW1CZ0MsTUFaaEMseUJBYW9DLG1DQUNELGtDQUNwQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2ZmZ3JpZHMvZmFzdGZvcndhcmQvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBQb3N0TGF5b3V0IH0gZnJvbSAnLi4vcGFydHMvTGF5b3V0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9udF9zaXplLCBsaW5lX2hlaWdodCwgZm9udF9taW4sIHNtIH0gZnJvbSAnLi4vcGFydHMvU3RhdGljJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3BhcnRzL0hlYWRlcidcblxuLy8gT3ZlcnJpZGUgdGhlIEFwcCBjbGFzcyB0byBwdXQgbGF5b3V0IGNvbXBvbmVudCBhcm91bmQgdGhlIHBhZ2UgY29udGVudHNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMjY3VzdG9tLWFwcFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHd3OiAwLFxuICAgICAgb3B0aW1hbDogbnVsbCxcbiAgICAgIGdyaWRfY2FudmFzOiBudWxsLFxuICAgICAgbW9kZTogJ2xpZ2h0JyxcbiAgICAgIGdyaWQ6ICdoaWRlJyxcbiAgICAgIHNob3dpbmdfcG9zdHM6IDI1LFxuICAgIH1cbiAgICB0aGlzLnNldFNpemUgPSB0aGlzLnNldFNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0U2l6ZSA9IGRlYm91bmNlKHRoaXMuc2V0U2l6ZSwgMTAwKVxuICB9XG5cbiAgc2V0U2l6ZSgpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjdHguZm9udCA9IGBub3JtYWwgJHtmb250X3NpemV9cHggSW50ZXJgXG4gICAgbGV0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KFxuICAgICAgJ3Rob3VzYW5kIHdyaXRlcnMuIFdpdGggb3ZlciBhIG1pbGxpb24gcGVvcGxlIGZyb20gdmFyaW91cyBmaWVsZHMgd29ya2luZydcbiAgICApLndpZHRoXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgd3c6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICB3aDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICAvLyBvcHRpbWFsOiB3aWR0aCArIGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0LFxuICAgICAgICBvcHRpbWFsOiA2MzMuNTAyNDQxNDA2MjUsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRTaXplKVxuICAgIHRoaXMuc2V0U2l6ZSgpXG5cbiAgICBsZXQgbW9kZV92YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2RlJykgfHwgJ2xpZ2h0J1xuICAgIGxldCBncmlkX3ZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dyaWQnKSB8fCAnaGlkZSdcblxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBncmlkX2NhbnZhczogY2FudmFzLCBtb2RlOiBtb2RlX3ZhbHVlLCBncmlkOiBncmlkX3ZhbHVlIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgd3csIHdoLCBvcHRpbWFsLCBtb2RlLCBncmlkLCBncmlkX2NhbnZhcywgc2hvd2luZ19wb3N0cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlclxuXG4gICAgbGV0IGlzX3Bvc3QgPSBwYXRobmFtZS5zdGFydHNXaXRoKCcvcG9zdHMvJylcblxuICAgIGxldCBvZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0XG4gICAgbGV0IGFmcyA9IGZvbnRfc2l6ZVxuXG4gICAgbGV0IGZvbnRfcmF0aW8gPSBvcHRpbWFsIC8gZm9udF9zaXplXG4gICAgaWYgKHd3IC0gb2dyZW0gPCBvcHRpbWFsKSB7XG4gICAgICBsZXQgYXNwZWN0X2ZvbnQgPSAod3cgLSBvZ3JlbSkgLyBmb250X3JhdGlvXG4gICAgICBpZiAoYXNwZWN0X2ZvbnQgPiBmb250X21pbikge1xuICAgICAgICBhZnMgPSBhc3BlY3RfZm9udFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWZzID0gZm9udF9taW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvZ3JlbSA9IGFmcyAqIGxpbmVfaGVpZ2h0XG5cbiAgICBsZXQgZGl2aXNpb25zID0gNFxuXG4gICAgbGV0IHRhcmdldF93aWR0aCA9IG9wdGltYWwgLyBkaXZpc2lvbnNcbiAgICBsZXQgY29sdW1ucyA9IE1hdGguZmxvb3IoKHd3IC0gb2dyZW0pIC8gdGFyZ2V0X3dpZHRoKVxuICAgIGxldCBjb2x1bW5fd2lkdGggPSAod3cgLSBvZ3JlbSkgLyBjb2x1bW5zXG5cbiAgICBsZXQgb2Zmc2V0ID0gMFxuICAgIGxldCBldmVuID0gY29sdW1ucyAlIDIgPT09IDBcbiAgICBpZiAoIWV2ZW4pIHtcbiAgICAgIGNvbHVtbnMgPSBjb2x1bW5zIC0gMVxuICAgICAgb2Zmc2V0ID0gY29sdW1uX3dpZHRoIC8gMlxuICAgIH1cblxuICAgIGxldCByYXRpbyA9IGNvbHVtbl93aWR0aCAvIHRhcmdldF93aWR0aFxuXG4gICAgbGV0IG9wdGltX3dpZHRoID0gY29sdW1uX3dpZHRoICogZGl2aXNpb25zXG4gICAgbGV0IG9wdGltX2NlbnRlcl9sZWZ0ID1cbiAgICAgIChjb2x1bW5zIC8gMiAtIGRpdmlzaW9ucyAvIDIpICogY29sdW1uX3dpZHRoICsgb2Zmc2V0XG5cbiAgICBsZXQgc3RhY2tlZCA9IGZhbHNlXG4gICAgLy8gVE9ETyByZXRoaW5rIHN0YWNrZWRcbiAgICBpZiAoY29sdW1ucyA8IGRpdmlzaW9ucykge1xuICAgICAgb2Zmc2V0ID0gMFxuICAgICAgY29sdW1ucyA9IGRpdmlzaW9uc1xuICAgICAgY29sdW1uX3dpZHRoID0gKHd3IC0gb2dyZW0pIC8gZGl2aXNpb25zXG4gICAgICBvcHRpbV93aWR0aCA9IGNvbHVtbl93aWR0aCAqIGRpdmlzaW9uc1xuICAgICAgb3B0aW1fY2VudGVyX2xlZnQgPSAwXG4gICAgICAvLyBncmVtID0gZ3JlbSAvIDJcbiAgICAgIHJhdGlvID0gMVxuICAgICAgc3RhY2tlZCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBBZGp1c3QgZ3JlbVxuICAgIGxldCBmcyA9IGFmcyAqIHJhdGlvXG4gICAgbGV0IGdyZW0gPSBmcyAqIGxpbmVfaGVpZ2h0XG5cbiAgICBsZXQgY2VudGVyX3RleHQgPSB7XG4gICAgICB3aWR0aDogb3B0aW1fd2lkdGgsXG4gICAgICBtYXJnaW5MZWZ0OiBvcHRpbV9jZW50ZXJfbGVmdCxcbiAgICB9XG4gICAgbGV0IG9mc24gPSB7XG4gICAgICBmb250U2l6ZTogYWZzLFxuICAgICAgbGluZUhlaWdodDogbGluZV9oZWlnaHQsXG4gICAgfVxuICAgIC8vIGZvbnQtc2l6ZSBub3JtYWxcbiAgICBsZXQgZnNuID0ge1xuICAgICAgZm9udFNpemU6IGZzLFxuICAgICAgbGluZUhlaWdodDogbGluZV9oZWlnaHQsXG4gICAgfVxuXG4gICAgbGV0IGxvZ29fc3Ryb2tlID0gJ2JsYWNrJ1xuICAgIGxldCBvY2FwID0gb2dyZW0gKiAoMjA0OCAvIDI4MTYpXG4gICAgbGV0IGNhcCA9IGdyZW0gKiAoMjA0OCAvIDI4MTYpXG5cbiAgICBsZXQgZ3JpZF9wcm9wcyA9IHtcbiAgICAgIGdyZW0sXG4gICAgICBvZ3JlbSxcbiAgICAgIGNlbnRlcl90ZXh0LFxuICAgICAgYWZzLFxuICAgICAgZnNuLFxuICAgICAgZnMsXG4gICAgICBjb2x1bW5zLFxuICAgICAgY29sdW1uX3dpZHRoLFxuICAgICAgb2Zmc2V0LFxuICAgICAgd3csXG4gICAgICB3aCxcbiAgICAgIGNhcCxcbiAgICAgIG9wdGltX3dpZHRoLFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgc3JjOiB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1SZWd1bGFyLndvZmYyP3Y9My41JykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1SZWd1bGFyLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLUl0YWxpYy53b2ZmMj92PTMuNScpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCdzdGF0aWMvZm9udHMvSW50ZXItSXRhbGljLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLUJvbGQud29mZjI/dj0zLjUgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1Cb2xkLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLUJvbGRJdGFsaWMud29mZjI/dj0zLjUgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1Cb2xkSXRhbGljLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRfc2l6ZX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2ZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0fXB4O1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgICAgZm9udC1rZXJuaW5nOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdzczAyJyAxO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcmUge1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sXG4gICAgICAgICAgICAgIE1vbmFjbywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDI1cyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby1ob3Zlcjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXJfYm94X292ZXJsYXkge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wMjVzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyX2JveDpob3ZlciAuaG92ZXJfYm94X292ZXJsYXkge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5ncmF5LWJhY2tlciB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMDVzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5ncmF5LWJhY2tlcjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogIzk5OSBhdXRvIDNweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHthZnN9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHthZnMgKiBsaW5lX2hlaWdodH1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSxcbiAgICAgICAgICAuZGlzcGxheS1saW5rIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICAgICAgIGJsYWNrIDEwMCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDAlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMGVtIGNhbGMoJHsxICsgc219ZW0pO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxZW0gJHtzbX1lbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby1ob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIHtvcHRpbWFsICE9PSBudWxsID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICAgIGxvZ29fc3Ryb2tlPXtsb2dvX3N0cm9rZX1cbiAgICAgICAgICAgICAgY2FwPXtjYXB9XG4gICAgICAgICAgICAgIGZzbj17ZnNufVxuICAgICAgICAgICAgICBmcz17ZnN9XG4gICAgICAgICAgICAgIGlzX3Bvc3Q9e2lzX3Bvc3R9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7aXNfcG9zdCA/IChcbiAgICAgICAgICAgICAgPFBvc3RMYXlvdXQgcGF0aG5hbWU9e3BhdGhuYW1lfSB7Li4uZ3JpZF9wcm9wc30+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICA8L1Bvc3RMYXlvdXQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IHsuLi5ncmlkX3Byb3BzfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3492724327",
        dynamic: [afs, afs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]],
        __self: this
      }, "html{font-size:".concat(afs, "px;line-height:").concat(afs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], "px;}a,.display-link{background-image:linear-gradient( to right, black 100%, transparent 0% );background-position:0em calc(").concat(1 + _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], "em);background-repeat:repeat-x;background-size:1em ").concat(_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], "em;}a.no-hover{background-image:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVPMkIsQUFHc0QsQUFTeEMsQUFNcUIsc0JBQ3hCLG1CQWY2QyxnQ0FTa0IsV0FSL0Qsa0RBUzZCLDJCQUN3QixtREFDckQiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9mZmdyaWRzL2Zhc3Rmb3J3YXJkL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgUG9zdExheW91dCB9IGZyb20gJy4uL3BhcnRzL0xheW91dCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvbnRfc2l6ZSwgbGluZV9oZWlnaHQsIGZvbnRfbWluLCBzbSB9IGZyb20gJy4uL3BhcnRzL1N0YXRpYydcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9wYXJ0cy9IZWFkZXInXG5cbi8vIE92ZXJyaWRlIHRoZSBBcHAgY2xhc3MgdG8gcHV0IGxheW91dCBjb21wb25lbnQgYXJvdW5kIHRoZSBwYWdlIGNvbnRlbnRzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzI2N1c3RvbS1hcHBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3dzogMCxcbiAgICAgIG9wdGltYWw6IG51bGwsXG4gICAgICBncmlkX2NhbnZhczogbnVsbCxcbiAgICAgIG1vZGU6ICdsaWdodCcsXG4gICAgICBncmlkOiAnaGlkZScsXG4gICAgICBzaG93aW5nX3Bvc3RzOiAyNSxcbiAgICB9XG4gICAgdGhpcy5zZXRTaXplID0gdGhpcy5zZXRTaXplLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFNpemUgPSBkZWJvdW5jZSh0aGlzLnNldFNpemUsIDEwMClcbiAgfVxuXG4gIHNldFNpemUoKSB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY3R4LmZvbnQgPSBgbm9ybWFsICR7Zm9udF9zaXplfXB4IEludGVyYFxuICAgIGxldCB3aWR0aCA9IGN0eC5tZWFzdXJlVGV4dChcbiAgICAgICd0aG91c2FuZCB3cml0ZXJzLiBXaXRoIG92ZXIgYSBtaWxsaW9uIHBlb3BsZSBmcm9tIHZhcmlvdXMgZmllbGRzIHdvcmtpbmcnXG4gICAgKS53aWR0aFxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHd3OiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgd2g6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgLy8gb3B0aW1hbDogd2lkdGggKyBmb250X3NpemUgKiBsaW5lX2hlaWdodCxcbiAgICAgICAgb3B0aW1hbDogNjMzLjUwMjQ0MTQwNjI1LFxuICAgICAgfSxcbiAgICAgICgpID0+IHt9XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2V0U2l6ZSlcbiAgICB0aGlzLnNldFNpemUoKVxuXG4gICAgbGV0IG1vZGVfdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpIHx8ICdsaWdodCdcbiAgICBsZXQgZ3JpZF92YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdncmlkJykgfHwgJ2hpZGUnXG5cbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICB0aGlzLnNldFN0YXRlKHsgZ3JpZF9jYW52YXM6IGNhbnZhcywgbW9kZTogbW9kZV92YWx1ZSwgZ3JpZDogZ3JpZF92YWx1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHd3LCB3aCwgb3B0aW1hbCwgbW9kZSwgZ3JpZCwgZ3JpZF9jYW52YXMsIHNob3dpbmdfcG9zdHMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXJcblxuICAgIGxldCBpc19wb3N0ID0gcGF0aG5hbWUuc3RhcnRzV2l0aCgnL3Bvc3RzLycpXG5cbiAgICBsZXQgb2dyZW0gPSBmb250X3NpemUgKiBsaW5lX2hlaWdodFxuICAgIGxldCBhZnMgPSBmb250X3NpemVcblxuICAgIGxldCBmb250X3JhdGlvID0gb3B0aW1hbCAvIGZvbnRfc2l6ZVxuICAgIGlmICh3dyAtIG9ncmVtIDwgb3B0aW1hbCkge1xuICAgICAgbGV0IGFzcGVjdF9mb250ID0gKHd3IC0gb2dyZW0pIC8gZm9udF9yYXRpb1xuICAgICAgaWYgKGFzcGVjdF9mb250ID4gZm9udF9taW4pIHtcbiAgICAgICAgYWZzID0gYXNwZWN0X2ZvbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFmcyA9IGZvbnRfbWluXG4gICAgICB9XG4gICAgfVxuXG4gICAgb2dyZW0gPSBhZnMgKiBsaW5lX2hlaWdodFxuXG4gICAgbGV0IGRpdmlzaW9ucyA9IDRcblxuICAgIGxldCB0YXJnZXRfd2lkdGggPSBvcHRpbWFsIC8gZGl2aXNpb25zXG4gICAgbGV0IGNvbHVtbnMgPSBNYXRoLmZsb29yKCh3dyAtIG9ncmVtKSAvIHRhcmdldF93aWR0aClcbiAgICBsZXQgY29sdW1uX3dpZHRoID0gKHd3IC0gb2dyZW0pIC8gY29sdW1uc1xuXG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBsZXQgZXZlbiA9IGNvbHVtbnMgJSAyID09PSAwXG4gICAgaWYgKCFldmVuKSB7XG4gICAgICBjb2x1bW5zID0gY29sdW1ucyAtIDFcbiAgICAgIG9mZnNldCA9IGNvbHVtbl93aWR0aCAvIDJcbiAgICB9XG5cbiAgICBsZXQgcmF0aW8gPSBjb2x1bW5fd2lkdGggLyB0YXJnZXRfd2lkdGhcblxuICAgIGxldCBvcHRpbV93aWR0aCA9IGNvbHVtbl93aWR0aCAqIGRpdmlzaW9uc1xuICAgIGxldCBvcHRpbV9jZW50ZXJfbGVmdCA9XG4gICAgICAoY29sdW1ucyAvIDIgLSBkaXZpc2lvbnMgLyAyKSAqIGNvbHVtbl93aWR0aCArIG9mZnNldFxuXG4gICAgbGV0IHN0YWNrZWQgPSBmYWxzZVxuICAgIC8vIFRPRE8gcmV0aGluayBzdGFja2VkXG4gICAgaWYgKGNvbHVtbnMgPCBkaXZpc2lvbnMpIHtcbiAgICAgIG9mZnNldCA9IDBcbiAgICAgIGNvbHVtbnMgPSBkaXZpc2lvbnNcbiAgICAgIGNvbHVtbl93aWR0aCA9ICh3dyAtIG9ncmVtKSAvIGRpdmlzaW9uc1xuICAgICAgb3B0aW1fd2lkdGggPSBjb2x1bW5fd2lkdGggKiBkaXZpc2lvbnNcbiAgICAgIG9wdGltX2NlbnRlcl9sZWZ0ID0gMFxuICAgICAgLy8gZ3JlbSA9IGdyZW0gLyAyXG4gICAgICByYXRpbyA9IDFcbiAgICAgIHN0YWNrZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gQWRqdXN0IGdyZW1cbiAgICBsZXQgZnMgPSBhZnMgKiByYXRpb1xuICAgIGxldCBncmVtID0gZnMgKiBsaW5lX2hlaWdodFxuXG4gICAgbGV0IGNlbnRlcl90ZXh0ID0ge1xuICAgICAgd2lkdGg6IG9wdGltX3dpZHRoLFxuICAgICAgbWFyZ2luTGVmdDogb3B0aW1fY2VudGVyX2xlZnQsXG4gICAgfVxuICAgIGxldCBvZnNuID0ge1xuICAgICAgZm9udFNpemU6IGFmcyxcbiAgICAgIGxpbmVIZWlnaHQ6IGxpbmVfaGVpZ2h0LFxuICAgIH1cbiAgICAvLyBmb250LXNpemUgbm9ybWFsXG4gICAgbGV0IGZzbiA9IHtcbiAgICAgIGZvbnRTaXplOiBmcyxcbiAgICAgIGxpbmVIZWlnaHQ6IGxpbmVfaGVpZ2h0LFxuICAgIH1cblxuICAgIGxldCBsb2dvX3N0cm9rZSA9ICdibGFjaydcbiAgICBsZXQgb2NhcCA9IG9ncmVtICogKDIwNDggLyAyODE2KVxuICAgIGxldCBjYXAgPSBncmVtICogKDIwNDggLyAyODE2KVxuXG4gICAgbGV0IGdyaWRfcHJvcHMgPSB7XG4gICAgICBncmVtLFxuICAgICAgb2dyZW0sXG4gICAgICBjZW50ZXJfdGV4dCxcbiAgICAgIGFmcyxcbiAgICAgIGZzbixcbiAgICAgIGZzLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGNvbHVtbl93aWR0aCxcbiAgICAgIG9mZnNldCxcbiAgICAgIHd3LFxuICAgICAgd2gsXG4gICAgICBjYXAsXG4gICAgICBvcHRpbV93aWR0aCxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHNyYzogdXJsKCdzdGF0aWMvZm9udHMvSW50ZXItUmVndWxhci53b2ZmMj92PTMuNScpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCdzdGF0aWMvZm9udHMvSW50ZXItUmVndWxhci53b2ZmP3Y9My41JykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgc3JjOiB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1JdGFsaWMud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLUl0YWxpYy53b2ZmP3Y9My41JykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgc3JjOiB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1Cb2xkLndvZmYyP3Y9My41IGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCdzdGF0aWMvZm9udHMvSW50ZXItQm9sZC53b2ZmP3Y9My41JykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgc3JjOiB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1Cb2xkSXRhbGljLndvZmYyP3Y9My41IGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCdzdGF0aWMvZm9udHMvSW50ZXItQm9sZEl0YWxpYy53b2ZmP3Y9My41JykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250X3NpemV9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHtmb250X3NpemUgKiBsaW5lX2hlaWdodH1weDtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdrZXJuJztcbiAgICAgICAgICAgIGZvbnQta2VybmluZzogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnc3MwMicgMTtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJlIHtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIE1lbmxvLFxuICAgICAgICAgICAgICBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjAyNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEubm8taG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyX2JveF9vdmVybGF5IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDI1cyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlcl9ib3g6aG92ZXIgLmhvdmVyX2JveF9vdmVybGF5IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEuZ3JheS1iYWNrZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjA1cyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEuZ3JheS1iYWNrZXI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6ICM5OTkgYXV0byAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7YWZzfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7YWZzICogbGluZV9oZWlnaHR9cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEsXG4gICAgICAgICAgLmRpc3BsYXktbGluayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAgICAgICBibGFjayAxMDAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAwJVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBlbSBjYWxjKCR7MSArIHNtfWVtKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMWVtICR7c219ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGEubm8taG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICB7b3B0aW1hbCAhPT0gbnVsbCA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgICBsb2dvX3N0cm9rZT17bG9nb19zdHJva2V9XG4gICAgICAgICAgICAgIGNhcD17Y2FwfVxuICAgICAgICAgICAgICBmc249e2Zzbn1cbiAgICAgICAgICAgICAgZnM9e2ZzfVxuICAgICAgICAgICAgICBpc19wb3N0PXtpc19wb3N0fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge2lzX3Bvc3QgPyAoXG4gICAgICAgICAgICAgIDxQb3N0TGF5b3V0IHBhdGhuYW1lPXtwYXRobmFtZX0gey4uLmdyaWRfcHJvcHN9PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgPC9Qb3N0TGF5b3V0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB7Li4uZ3JpZF9wcm9wc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/pages/_app.js */")), optimal !== null ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["243119499", [_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]], ["3492724327", [afs, afs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        logo_stroke: logo_stroke,
        cap: cap,
        fsn: fsn,
        fs: fs,
        is_post: is_post,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }), is_post ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Layout__WEBPACK_IMPORTED_MODULE_9__["PostLayout"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        pathname: pathname
      }, grid_props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["243119499", [_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]], ["3492724327", [afs, afs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, grid_props, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["243119499", [_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]], ["3492724327", [afs, afs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]]]]) + " " + (grid_props.className != null && grid_props.className || pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }))) : null);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.b32732aa152060b3ccef.hot-update.js.map