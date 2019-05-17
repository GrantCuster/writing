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
      console.log(grid_props);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1356236813",
        dynamic: [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]],
        __self: this
      }, "*{box-sizing:border-box;}html{font-family:'Inter',serif;font-size:".concat(_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], "px;line-height:").concat(_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], "px;text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;font-feature-settings:'ss02' 1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{margin:0;overflow-x:hidden;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}a:hover{opacity:0.75;}a.no-hover:hover{opacity:1;}.hover_box_overlay{opacity:0;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}.hover_box:hover .hover_box_overlay{opacity:1;}a.gray-backer{-webkit-transition:background 0.05s linear;transition:background 0.05s linear;}a.gray-backer:hover{background:#f3f3f3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNKMkIsQUFHbUMsQUFHSyxBQVdsQixBQUlLLEFBS0QsQUFHSCxBQUdBLEFBSUEsQUFHeUIsQUFHaEIsU0F4QkQsQ0FZcEIsQUFHbUMsQUFJbkMsR0FWQSxDQUx1QixLQXFCdkIsR0F2Q0EsSUFHMkMsQ0FZM0MscUNBSW1DLEdBZlUsV0FnQzdDLE1BTkEsMEJBekJvQyw0QkFlcEMsTUFkK0IsNkJBQ1Qsb0JBQ1csK0JBQ0ksbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFBvc3RMYXlvdXQgfSBmcm9tICcuLi9wYXJ0cy9MYXlvdXQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb250X3NpemUsIGxpbmVfaGVpZ2h0LCBmb250X21pbiwgc20gfSBmcm9tICcuLi8uLi9leHAvcGFydHMvU3RhdGljJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3BhcnRzL0hlYWRlcidcblxuLy8gT3ZlcnJpZGUgdGhlIEFwcCBjbGFzcyB0byBwdXQgbGF5b3V0IGNvbXBvbmVudCBhcm91bmQgdGhlIHBhZ2UgY29udGVudHNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMjY3VzdG9tLWFwcFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHd3OiAwLFxuICAgICAgb3B0aW1hbDogbnVsbCxcbiAgICAgIGdyaWRfY2FudmFzOiBudWxsLFxuICAgICAgbW9kZTogJ2xpZ2h0JyxcbiAgICAgIGdyaWQ6ICdoaWRlJyxcbiAgICAgIHNob3dpbmdfcG9zdHM6IDI1LFxuICAgIH1cbiAgICB0aGlzLnNldFNpemUgPSB0aGlzLnNldFNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0U2l6ZSA9IGRlYm91bmNlKHRoaXMuc2V0U2l6ZSwgMTAwKVxuICB9XG5cbiAgc2V0U2l6ZSgpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjdHguZm9udCA9IGBub3JtYWwgJHtmb250X3NpemV9cHggSW50ZXJgXG4gICAgbGV0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KFxuICAgICAgJ3Rob3VzYW5kIHdyaXRlcnMuIFdpdGggb3ZlciBhIG1pbGxpb24gcGVvcGxlIGZyb20gdmFyaW91cyBmaWVsZHMgd29ya2luZydcbiAgICApLndpZHRoXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgd3c6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICB3aDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICBvcHRpbWFsOiB3aWR0aCArIGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0LFxuICAgICAgICAvLyBvcHRpbWFsOiA2MzMuNTAyNDQxNDA2MjUsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRTaXplKVxuICAgIHRoaXMuc2V0U2l6ZSgpXG5cbiAgICBsZXQgbW9kZV92YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2RlJykgfHwgJ2xpZ2h0J1xuICAgIGxldCBncmlkX3ZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dyaWQnKSB8fCAnaGlkZSdcblxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBncmlkX2NhbnZhczogY2FudmFzLCBtb2RlOiBtb2RlX3ZhbHVlLCBncmlkOiBncmlkX3ZhbHVlIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgd3csIHdoLCBvcHRpbWFsLCBtb2RlLCBncmlkLCBncmlkX2NhbnZhcywgc2hvd2luZ19wb3N0cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlclxuXG4gICAgbGV0IGlzX3Bvc3QgPSBwYXRobmFtZS5zdGFydHNXaXRoKCcvcG9zdHMvJylcblxuICAgIGxldCBvZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0XG4gICAgbGV0IGFmcyA9IGZvbnRfc2l6ZVxuXG4gICAgbGV0IGZvbnRfcmF0aW8gPSBvcHRpbWFsIC8gZm9udF9zaXplXG4gICAgaWYgKHd3IC0gb2dyZW0gPCBvcHRpbWFsKSB7XG4gICAgICBsZXQgYXNwZWN0X2ZvbnQgPSAod3cgLSBvZ3JlbSkgLyBmb250X3JhdGlvXG4gICAgICBpZiAoYXNwZWN0X2ZvbnQgPiBmb250X21pbikge1xuICAgICAgICBhZnMgPSBhc3BlY3RfZm9udFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWZzID0gZm9udF9taW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvZ3JlbSA9IGFmcyAqIGxpbmVfaGVpZ2h0XG5cbiAgICBsZXQgZGl2aXNpb25zID0gNFxuXG4gICAgbGV0IHRhcmdldF93aWR0aCA9IG9wdGltYWwgLyBkaXZpc2lvbnNcbiAgICBsZXQgY29sdW1ucyA9IE1hdGguZmxvb3IoKHd3IC0gb2dyZW0pIC8gdGFyZ2V0X3dpZHRoKVxuICAgIGxldCBjb2x1bW5fd2lkdGggPSAod3cgLSBvZ3JlbSkgLyBjb2x1bW5zXG5cbiAgICBsZXQgb2Zmc2V0ID0gMFxuICAgIGxldCBldmVuID0gY29sdW1ucyAlIDIgPT09IDBcbiAgICBpZiAoIWV2ZW4pIHtcbiAgICAgIGNvbHVtbnMgPSBjb2x1bW5zIC0gMVxuICAgICAgb2Zmc2V0ID0gY29sdW1uX3dpZHRoIC8gMlxuICAgIH1cblxuICAgIGxldCByYXRpbyA9IGNvbHVtbl93aWR0aCAvIHRhcmdldF93aWR0aFxuXG4gICAgbGV0IG9wdGltX3dpZHRoID0gY29sdW1uX3dpZHRoICogZGl2aXNpb25zXG4gICAgbGV0IG9wdGltX2NlbnRlcl9sZWZ0ID1cbiAgICAgIChjb2x1bW5zIC8gMiAtIGRpdmlzaW9ucyAvIDIpICogY29sdW1uX3dpZHRoICsgb2Zmc2V0XG5cbiAgICBsZXQgc3RhY2tlZCA9IGZhbHNlXG4gICAgLy8gVE9ETyByZXRoaW5rIHN0YWNrZWRcbiAgICBpZiAoY29sdW1ucyA8IGRpdmlzaW9ucykge1xuICAgICAgb2Zmc2V0ID0gMFxuICAgICAgY29sdW1ucyA9IGRpdmlzaW9uc1xuICAgICAgY29sdW1uX3dpZHRoID0gKHd3IC0gb2dyZW0pIC8gZGl2aXNpb25zXG4gICAgICBvcHRpbV93aWR0aCA9IGNvbHVtbl93aWR0aCAqIGRpdmlzaW9uc1xuICAgICAgb3B0aW1fY2VudGVyX2xlZnQgPSAwXG4gICAgICAvLyBncmVtID0gZ3JlbSAvIDJcbiAgICAgIHJhdGlvID0gMVxuICAgICAgc3RhY2tlZCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBBZGp1c3QgZ3JlbVxuICAgIGxldCBmcyA9IGFmcyAqIHJhdGlvXG4gICAgbGV0IGdyZW0gPSBmcyAqIGxpbmVfaGVpZ2h0XG5cbiAgICBsZXQgY2VudGVyX3RleHQgPSB7XG4gICAgICB3aWR0aDogb3B0aW1fd2lkdGgsXG4gICAgICBtYXJnaW5MZWZ0OiBvcHRpbV9jZW50ZXJfbGVmdCxcbiAgICB9XG4gICAgbGV0IG9mc24gPSB7XG4gICAgICBmb250U2l6ZTogYWZzLFxuICAgICAgbGluZUhlaWdodDogbGluZV9oZWlnaHQsXG4gICAgfVxuICAgIC8vIGZvbnQtc2l6ZSBub3JtYWxcbiAgICBsZXQgZnNuID0ge1xuICAgICAgZm9udFNpemU6IGZzLFxuICAgICAgbGluZUhlaWdodDogbGluZV9oZWlnaHQsXG4gICAgfVxuXG4gICAgbGV0IGxvZ29fc3Ryb2tlID0gJ2JsYWNrJ1xuICAgIGxldCBvY2FwID0gb2dyZW0gKiAoMjA0OCAvIDI4MTYpXG4gICAgbGV0IGNhcCA9IGdyZW0gKiAoMjA0OCAvIDI4MTYpXG5cbiAgICBsZXQgZ3JpZF9wcm9wcyA9IHtcbiAgICAgIGdyZW0sXG4gICAgICBvZ3JlbSxcbiAgICAgIGNlbnRlcl90ZXh0LFxuICAgICAgYWZzLFxuICAgICAgZnNuLFxuICAgICAgZnMsXG4gICAgICBjb2x1bW5zLFxuICAgICAgY29sdW1uX3dpZHRoLFxuICAgICAgb2Zmc2V0LFxuICAgICAgd3csXG4gICAgICB3aCxcbiAgICAgIGNhcCxcbiAgICAgIG9wdGltX3dpZHRoLFxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGdyaWRfcHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRfc2l6ZX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2ZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0fXB4O1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgICAgZm9udC1rZXJuaW5nOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdzczAyJyAxO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wMjVzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLWhvdmVyOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlcl9ib3hfb3ZlcmxheSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjAyNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXJfYm94OmhvdmVyIC5ob3Zlcl9ib3hfb3ZlcmxheSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLmdyYXktYmFja2VyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4wNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLmdyYXktYmFja2VyOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7YWZzfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7YWZzICogbGluZV9oZWlnaHR9cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEsXG4gICAgICAgICAgLmRpc3BsYXktbGluayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAgICAgICBibGFjayAxMDAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAwJVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBlbSBjYWxjKCR7MSArIHNtfWVtKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMWVtICR7c219ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGEubm8taG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICB7b3B0aW1hbCAhPT0gbnVsbCA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgICBsb2dvX3N0cm9rZT17bG9nb19zdHJva2V9XG4gICAgICAgICAgICAgIGNhcD17Y2FwfVxuICAgICAgICAgICAgICBmc249e2Zzbn1cbiAgICAgICAgICAgICAgZnM9e2ZzfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge2lzX3Bvc3QgPyAoXG4gICAgICAgICAgICAgIDxQb3N0TGF5b3V0IHBhdGhuYW1lPXtwYXRobmFtZX0gey4uLmdyaWRfcHJvcHN9PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gIC8+XG4gICAgICAgICAgICAgIDwvUG9zdExheW91dD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gey4uLmdyaWRfcHJvcHN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3492724327",
        dynamic: [afs, afs * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]],
        __self: this
      }, "html{font-size:".concat(afs, "px;line-height:").concat(afs * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], "px;}a,.display-link{background-image:linear-gradient( to right, black 100%, transparent 0% );background-position:0em calc(").concat(1 + _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], "em);background-repeat:repeat-x;background-size:1em ").concat(_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], "em;}a.no-hover{background-image:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtNMkIsQUFHc0QsQUFTeEMsQUFNcUIsc0JBQ3hCLG1CQWY2QyxnQ0FTa0IsV0FSL0Qsa0RBUzZCLDJCQUN3QixtREFDckQiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9mZmdyaWRzL2Zhc3Rmb3J3YXJkL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgUG9zdExheW91dCB9IGZyb20gJy4uL3BhcnRzL0xheW91dCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvbnRfc2l6ZSwgbGluZV9oZWlnaHQsIGZvbnRfbWluLCBzbSB9IGZyb20gJy4uLy4uL2V4cC9wYXJ0cy9TdGF0aWMnXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vcGFydHMvSGVhZGVyJ1xuXG4vLyBPdmVycmlkZSB0aGUgQXBwIGNsYXNzIHRvIHB1dCBsYXlvdXQgY29tcG9uZW50IGFyb3VuZCB0aGUgcGFnZSBjb250ZW50c1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcyNjdXN0b20tYXBwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd3c6IDAsXG4gICAgICBvcHRpbWFsOiBudWxsLFxuICAgICAgZ3JpZF9jYW52YXM6IG51bGwsXG4gICAgICBtb2RlOiAnbGlnaHQnLFxuICAgICAgZ3JpZDogJ2hpZGUnLFxuICAgICAgc2hvd2luZ19wb3N0czogMjUsXG4gICAgfVxuICAgIHRoaXMuc2V0U2l6ZSA9IHRoaXMuc2V0U2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTaXplID0gZGVib3VuY2UodGhpcy5zZXRTaXplLCAxMDApXG4gIH1cblxuICBzZXRTaXplKCkge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGN0eC5mb250ID0gYG5vcm1hbCAke2ZvbnRfc2l6ZX1weCBJbnRlcmBcbiAgICBsZXQgd2lkdGggPSBjdHgubWVhc3VyZVRleHQoXG4gICAgICAndGhvdXNhbmQgd3JpdGVycy4gV2l0aCBvdmVyIGEgbWlsbGlvbiBwZW9wbGUgZnJvbSB2YXJpb3VzIGZpZWxkcyB3b3JraW5nJ1xuICAgICkud2lkdGhcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICB3dzogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIHdoOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIG9wdGltYWw6IHdpZHRoICsgZm9udF9zaXplICogbGluZV9oZWlnaHQsXG4gICAgICAgIC8vIG9wdGltYWw6IDYzMy41MDI0NDE0MDYyNSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7fVxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFNpemUpXG4gICAgdGhpcy5zZXRTaXplKClcblxuICAgIGxldCBtb2RlX3ZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKSB8fCAnbGlnaHQnXG4gICAgbGV0IGdyaWRfdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ3JpZCcpIHx8ICdoaWRlJ1xuXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGdyaWRfY2FudmFzOiBjYW52YXMsIG1vZGU6IG1vZGVfdmFsdWUsIGdyaWQ6IGdyaWRfdmFsdWUgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB3dywgd2gsIG9wdGltYWwsIG1vZGUsIGdyaWQsIGdyaWRfY2FudmFzLCBzaG93aW5nX3Bvc3RzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyXG5cbiAgICBsZXQgaXNfcG9zdCA9IHBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9wb3N0cy8nKVxuXG4gICAgbGV0IG9ncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHRcbiAgICBsZXQgYWZzID0gZm9udF9zaXplXG5cbiAgICBsZXQgZm9udF9yYXRpbyA9IG9wdGltYWwgLyBmb250X3NpemVcbiAgICBpZiAod3cgLSBvZ3JlbSA8IG9wdGltYWwpIHtcbiAgICAgIGxldCBhc3BlY3RfZm9udCA9ICh3dyAtIG9ncmVtKSAvIGZvbnRfcmF0aW9cbiAgICAgIGlmIChhc3BlY3RfZm9udCA+IGZvbnRfbWluKSB7XG4gICAgICAgIGFmcyA9IGFzcGVjdF9mb250XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZnMgPSBmb250X21pblxuICAgICAgfVxuICAgIH1cblxuICAgIG9ncmVtID0gYWZzICogbGluZV9oZWlnaHRcblxuICAgIGxldCBkaXZpc2lvbnMgPSA0XG5cbiAgICBsZXQgdGFyZ2V0X3dpZHRoID0gb3B0aW1hbCAvIGRpdmlzaW9uc1xuICAgIGxldCBjb2x1bW5zID0gTWF0aC5mbG9vcigod3cgLSBvZ3JlbSkgLyB0YXJnZXRfd2lkdGgpXG4gICAgbGV0IGNvbHVtbl93aWR0aCA9ICh3dyAtIG9ncmVtKSAvIGNvbHVtbnNcblxuICAgIGxldCBvZmZzZXQgPSAwXG4gICAgbGV0IGV2ZW4gPSBjb2x1bW5zICUgMiA9PT0gMFxuICAgIGlmICghZXZlbikge1xuICAgICAgY29sdW1ucyA9IGNvbHVtbnMgLSAxXG4gICAgICBvZmZzZXQgPSBjb2x1bW5fd2lkdGggLyAyXG4gICAgfVxuXG4gICAgbGV0IHJhdGlvID0gY29sdW1uX3dpZHRoIC8gdGFyZ2V0X3dpZHRoXG5cbiAgICBsZXQgb3B0aW1fd2lkdGggPSBjb2x1bW5fd2lkdGggKiBkaXZpc2lvbnNcbiAgICBsZXQgb3B0aW1fY2VudGVyX2xlZnQgPVxuICAgICAgKGNvbHVtbnMgLyAyIC0gZGl2aXNpb25zIC8gMikgKiBjb2x1bW5fd2lkdGggKyBvZmZzZXRcblxuICAgIGxldCBzdGFja2VkID0gZmFsc2VcbiAgICAvLyBUT0RPIHJldGhpbmsgc3RhY2tlZFxuICAgIGlmIChjb2x1bW5zIDwgZGl2aXNpb25zKSB7XG4gICAgICBvZmZzZXQgPSAwXG4gICAgICBjb2x1bW5zID0gZGl2aXNpb25zXG4gICAgICBjb2x1bW5fd2lkdGggPSAod3cgLSBvZ3JlbSkgLyBkaXZpc2lvbnNcbiAgICAgIG9wdGltX3dpZHRoID0gY29sdW1uX3dpZHRoICogZGl2aXNpb25zXG4gICAgICBvcHRpbV9jZW50ZXJfbGVmdCA9IDBcbiAgICAgIC8vIGdyZW0gPSBncmVtIC8gMlxuICAgICAgcmF0aW8gPSAxXG4gICAgICBzdGFja2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIEFkanVzdCBncmVtXG4gICAgbGV0IGZzID0gYWZzICogcmF0aW9cbiAgICBsZXQgZ3JlbSA9IGZzICogbGluZV9oZWlnaHRcblxuICAgIGxldCBjZW50ZXJfdGV4dCA9IHtcbiAgICAgIHdpZHRoOiBvcHRpbV93aWR0aCxcbiAgICAgIG1hcmdpbkxlZnQ6IG9wdGltX2NlbnRlcl9sZWZ0LFxuICAgIH1cbiAgICBsZXQgb2ZzbiA9IHtcbiAgICAgIGZvbnRTaXplOiBhZnMsXG4gICAgICBsaW5lSGVpZ2h0OiBsaW5lX2hlaWdodCxcbiAgICB9XG4gICAgLy8gZm9udC1zaXplIG5vcm1hbFxuICAgIGxldCBmc24gPSB7XG4gICAgICBmb250U2l6ZTogZnMsXG4gICAgICBsaW5lSGVpZ2h0OiBsaW5lX2hlaWdodCxcbiAgICB9XG5cbiAgICBsZXQgbG9nb19zdHJva2UgPSAnYmxhY2snXG4gICAgbGV0IG9jYXAgPSBvZ3JlbSAqICgyMDQ4IC8gMjgxNilcbiAgICBsZXQgY2FwID0gZ3JlbSAqICgyMDQ4IC8gMjgxNilcblxuICAgIGxldCBncmlkX3Byb3BzID0ge1xuICAgICAgZ3JlbSxcbiAgICAgIG9ncmVtLFxuICAgICAgY2VudGVyX3RleHQsXG4gICAgICBhZnMsXG4gICAgICBmc24sXG4gICAgICBmcyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBjb2x1bW5fd2lkdGgsXG4gICAgICBvZmZzZXQsXG4gICAgICB3dyxcbiAgICAgIHdoLFxuICAgICAgY2FwLFxuICAgICAgb3B0aW1fd2lkdGgsXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZ3JpZF9wcm9wcylcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7Zm9udF9zaXplfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7Zm9udF9zaXplICogbGluZV9oZWlnaHR9cHg7XG4gICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xuICAgICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAna2Vybic7XG4gICAgICAgICAgICBmb250LWtlcm5pbmc6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3NzMDInIDE7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjAyNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEubm8taG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyX2JveF9vdmVybGF5IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDI1cyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlcl9ib3g6aG92ZXIgLmhvdmVyX2JveF9vdmVybGF5IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEuZ3JheS1iYWNrZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjA1cyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEuZ3JheS1iYWNrZXI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHthZnN9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHthZnMgKiBsaW5lX2hlaWdodH1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSxcbiAgICAgICAgICAuZGlzcGxheS1saW5rIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICAgICAgIGJsYWNrIDEwMCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDAlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMGVtIGNhbGMoJHsxICsgc219ZW0pO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxZW0gJHtzbX1lbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby1ob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIHtvcHRpbWFsICE9PSBudWxsID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICAgIGxvZ29fc3Ryb2tlPXtsb2dvX3N0cm9rZX1cbiAgICAgICAgICAgICAgY2FwPXtjYXB9XG4gICAgICAgICAgICAgIGZzbj17ZnNufVxuICAgICAgICAgICAgICBmcz17ZnN9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7aXNfcG9zdCA/IChcbiAgICAgICAgICAgICAgPFBvc3RMYXlvdXQgcGF0aG5hbWU9e3BhdGhuYW1lfSB7Li4uZ3JpZF9wcm9wc30+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAgLz5cbiAgICAgICAgICAgICAgPC9Qb3N0TGF5b3V0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB7Li4uZ3JpZF9wcm9wc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/pages/_app.js */")), optimal !== null ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]], ["3492724327", [afs, afs * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
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
          lineNumber: 218
        },
        __self: this
      }), is_post ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Layout__WEBPACK_IMPORTED_MODULE_9__["PostLayout"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        pathname: pathname
      }, grid_props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]], ["3492724327", [afs, afs * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, grid_props, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1356236813", [_exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]], ["3492724327", [afs, afs * _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _exp_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]]]]) + " " + (grid_props.className != null && grid_props.className || pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }))) : null);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.42a5f626a7f13f8c54e9.hot-update.js.map