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
        id: "3058579605",
        dynamic: [_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]],
        __self: this
      }, "@font-face{font-family:'Inter';font-style:normal;font-weight:400;src:url('static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'), url('static/fonts/Inter-Regular.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:400;src:url('static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'), url('static/fonts/Inter-Italic.woff?v=3.5') format('woff');}*{box-sizing:border-box;}html{font-family:'Inter',serif;font-size:".concat(_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], "px;line-height:").concat(_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], "px;text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;font-feature-settings:'ss02' 1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}pre{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto;overflow-x:auto;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo, Monaco,Courier New,monospace;}body{margin:0;overflow-x:hidden;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}a:hover{opacity:0.75;}a.no-hover:hover{opacity:1;}.hover_box_overlay{opacity:0;-webkit-transition:opacity 0.025s linear;transition:opacity 0.025s linear;}.hover_box:hover .hover_box_overlay{opacity:1;}a.gray-backer{-webkit-transition:background 0.05s linear;transition:background 0.05s linear;}a.gray-backer:hover{background:#f3f3f3;}button:focus{outline:#999 auto 3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9KMkIsQUFHaUMsQUFPQSxBQVFFLEFBR0ssQUFXQyxBQU9uQixBQUlLLEFBS0QsQUFHSCxBQUdBLEFBSUEsQUFHeUIsQUFHaEIsQUFHRyxTQTNCSixDQVlwQixBQUdtQyxBQUluQyxHQVZBLENBTHVCLEtBcUJ2QixDQTdEb0IsQUFPQSxFQVFwQixBQWlEQSxJQTlDMkMsQ0FtQjNDLENBUitCLFVBNUJiLEFBT0EsZ0JBTDZDLEFBT0QsR0FvQjVDLE9BV2lCLEdBdEJVLE1BYVgsS0EwQmxDLE1BTkEsMEJBaENvQyw0QkFzQnBDLE1BckIrQixpQkFZL0IsWUFYc0IsTUFYdEIsRUFQQSxZQW1CaUMsK0JBQ0ksbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFBvc3RMYXlvdXQgfSBmcm9tICcuLi9wYXJ0cy9MYXlvdXQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb250X3NpemUsIGxpbmVfaGVpZ2h0LCBmb250X21pbiwgc20gfSBmcm9tICcuLi9wYXJ0cy9TdGF0aWMnXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vcGFydHMvSGVhZGVyJ1xuXG4vLyBPdmVycmlkZSB0aGUgQXBwIGNsYXNzIHRvIHB1dCBsYXlvdXQgY29tcG9uZW50IGFyb3VuZCB0aGUgcGFnZSBjb250ZW50c1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcyNjdXN0b20tYXBwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd3c6IDAsXG4gICAgICBvcHRpbWFsOiBudWxsLFxuICAgICAgZ3JpZF9jYW52YXM6IG51bGwsXG4gICAgICBtb2RlOiAnbGlnaHQnLFxuICAgICAgZ3JpZDogJ2hpZGUnLFxuICAgICAgc2hvd2luZ19wb3N0czogMjUsXG4gICAgfVxuICAgIHRoaXMuc2V0U2l6ZSA9IHRoaXMuc2V0U2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTaXplID0gZGVib3VuY2UodGhpcy5zZXRTaXplLCAxMDApXG4gIH1cblxuICBzZXRTaXplKCkge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGN0eC5mb250ID0gYG5vcm1hbCAke2ZvbnRfc2l6ZX1weCBJbnRlcmBcbiAgICBsZXQgd2lkdGggPSBjdHgubWVhc3VyZVRleHQoXG4gICAgICAndGhvdXNhbmQgd3JpdGVycy4gV2l0aCBvdmVyIGEgbWlsbGlvbiBwZW9wbGUgZnJvbSB2YXJpb3VzIGZpZWxkcyB3b3JraW5nJ1xuICAgICkud2lkdGhcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICB3dzogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIHdoOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIC8vIG9wdGltYWw6IHdpZHRoICsgZm9udF9zaXplICogbGluZV9oZWlnaHQsXG4gICAgICAgIG9wdGltYWw6IDYzMy41MDI0NDE0MDYyNSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7fVxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFNpemUpXG4gICAgdGhpcy5zZXRTaXplKClcblxuICAgIGxldCBtb2RlX3ZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKSB8fCAnbGlnaHQnXG4gICAgbGV0IGdyaWRfdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ3JpZCcpIHx8ICdoaWRlJ1xuXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGdyaWRfY2FudmFzOiBjYW52YXMsIG1vZGU6IG1vZGVfdmFsdWUsIGdyaWQ6IGdyaWRfdmFsdWUgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB3dywgd2gsIG9wdGltYWwsIG1vZGUsIGdyaWQsIGdyaWRfY2FudmFzLCBzaG93aW5nX3Bvc3RzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyXG5cbiAgICBsZXQgaXNfcG9zdCA9IHBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9wb3N0cy8nKVxuXG4gICAgbGV0IG9ncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHRcbiAgICBsZXQgYWZzID0gZm9udF9zaXplXG5cbiAgICBsZXQgZm9udF9yYXRpbyA9IG9wdGltYWwgLyBmb250X3NpemVcbiAgICBpZiAod3cgLSBvZ3JlbSA8IG9wdGltYWwpIHtcbiAgICAgIGxldCBhc3BlY3RfZm9udCA9ICh3dyAtIG9ncmVtKSAvIGZvbnRfcmF0aW9cbiAgICAgIGlmIChhc3BlY3RfZm9udCA+IGZvbnRfbWluKSB7XG4gICAgICAgIGFmcyA9IGFzcGVjdF9mb250XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZnMgPSBmb250X21pblxuICAgICAgfVxuICAgIH1cblxuICAgIG9ncmVtID0gYWZzICogbGluZV9oZWlnaHRcblxuICAgIGxldCBkaXZpc2lvbnMgPSA0XG5cbiAgICBsZXQgdGFyZ2V0X3dpZHRoID0gb3B0aW1hbCAvIGRpdmlzaW9uc1xuICAgIGxldCBjb2x1bW5zID0gTWF0aC5mbG9vcigod3cgLSBvZ3JlbSkgLyB0YXJnZXRfd2lkdGgpXG4gICAgbGV0IGNvbHVtbl93aWR0aCA9ICh3dyAtIG9ncmVtKSAvIGNvbHVtbnNcblxuICAgIGxldCBvZmZzZXQgPSAwXG4gICAgbGV0IGV2ZW4gPSBjb2x1bW5zICUgMiA9PT0gMFxuICAgIGlmICghZXZlbikge1xuICAgICAgY29sdW1ucyA9IGNvbHVtbnMgLSAxXG4gICAgICBvZmZzZXQgPSBjb2x1bW5fd2lkdGggLyAyXG4gICAgfVxuXG4gICAgbGV0IHJhdGlvID0gY29sdW1uX3dpZHRoIC8gdGFyZ2V0X3dpZHRoXG5cbiAgICBsZXQgb3B0aW1fd2lkdGggPSBjb2x1bW5fd2lkdGggKiBkaXZpc2lvbnNcbiAgICBsZXQgb3B0aW1fY2VudGVyX2xlZnQgPVxuICAgICAgKGNvbHVtbnMgLyAyIC0gZGl2aXNpb25zIC8gMikgKiBjb2x1bW5fd2lkdGggKyBvZmZzZXRcblxuICAgIGxldCBzdGFja2VkID0gZmFsc2VcbiAgICAvLyBUT0RPIHJldGhpbmsgc3RhY2tlZFxuICAgIGlmIChjb2x1bW5zIDwgZGl2aXNpb25zKSB7XG4gICAgICBvZmZzZXQgPSAwXG4gICAgICBjb2x1bW5zID0gZGl2aXNpb25zXG4gICAgICBjb2x1bW5fd2lkdGggPSAod3cgLSBvZ3JlbSkgLyBkaXZpc2lvbnNcbiAgICAgIG9wdGltX3dpZHRoID0gY29sdW1uX3dpZHRoICogZGl2aXNpb25zXG4gICAgICBvcHRpbV9jZW50ZXJfbGVmdCA9IDBcbiAgICAgIC8vIGdyZW0gPSBncmVtIC8gMlxuICAgICAgcmF0aW8gPSAxXG4gICAgICBzdGFja2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIEFkanVzdCBncmVtXG4gICAgbGV0IGZzID0gYWZzICogcmF0aW9cbiAgICBsZXQgZ3JlbSA9IGZzICogbGluZV9oZWlnaHRcblxuICAgIGxldCBjZW50ZXJfdGV4dCA9IHtcbiAgICAgIHdpZHRoOiBvcHRpbV93aWR0aCxcbiAgICAgIG1hcmdpbkxlZnQ6IG9wdGltX2NlbnRlcl9sZWZ0LFxuICAgIH1cbiAgICBsZXQgb2ZzbiA9IHtcbiAgICAgIGZvbnRTaXplOiBhZnMsXG4gICAgICBsaW5lSGVpZ2h0OiBsaW5lX2hlaWdodCxcbiAgICB9XG4gICAgLy8gZm9udC1zaXplIG5vcm1hbFxuICAgIGxldCBmc24gPSB7XG4gICAgICBmb250U2l6ZTogZnMsXG4gICAgICBsaW5lSGVpZ2h0OiBsaW5lX2hlaWdodCxcbiAgICB9XG5cbiAgICBsZXQgbG9nb19zdHJva2UgPSAnYmxhY2snXG4gICAgbGV0IG9jYXAgPSBvZ3JlbSAqICgyMDQ4IC8gMjgxNilcbiAgICBsZXQgY2FwID0gZ3JlbSAqICgyMDQ4IC8gMjgxNilcblxuICAgIGxldCBncmlkX3Byb3BzID0ge1xuICAgICAgZ3JlbSxcbiAgICAgIG9ncmVtLFxuICAgICAgY2VudGVyX3RleHQsXG4gICAgICBhZnMsXG4gICAgICBmc24sXG4gICAgICBmcyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBjb2x1bW5fd2lkdGgsXG4gICAgICBvZmZzZXQsXG4gICAgICB3dyxcbiAgICAgIHdoLFxuICAgICAgY2FwLFxuICAgICAgb3B0aW1fd2lkdGgsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLVJlZ3VsYXIud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLVJlZ3VsYXIud29mZj92PTMuNScpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHNyYzogdXJsKCdzdGF0aWMvZm9udHMvSW50ZXItSXRhbGljLndvZmYyP3Y9My41JykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1JdGFsaWMud29mZj92PTMuNScpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7Zm9udF9zaXplfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7Zm9udF9zaXplICogbGluZV9oZWlnaHR9cHg7XG4gICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xuICAgICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAna2Vybic7XG4gICAgICAgICAgICBmb250LWtlcm5pbmc6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3NzMDInIDE7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHByZSB7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbyxcbiAgICAgICAgICAgICAgTW9uYWNvLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wMjVzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLWhvdmVyOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlcl9ib3hfb3ZlcmxheSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjAyNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXJfYm94OmhvdmVyIC5ob3Zlcl9ib3hfb3ZlcmxheSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLmdyYXktYmFja2VyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4wNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLmdyYXktYmFja2VyOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiAjOTk5IGF1dG8gM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2Fmc31weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2FmcyAqIGxpbmVfaGVpZ2h0fXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLFxuICAgICAgICAgIC5kaXNwbGF5LWxpbmsge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICAgICAgYmxhY2sgMTAwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMCVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwZW0gY2FsYygkezEgKyBzbX1lbSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDFlbSAke3NtfWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLWhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAge29wdGltYWwgIT09IG51bGwgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgICAgbG9nb19zdHJva2U9e2xvZ29fc3Ryb2tlfVxuICAgICAgICAgICAgICBjYXA9e2NhcH1cbiAgICAgICAgICAgICAgZnNuPXtmc259XG4gICAgICAgICAgICAgIGZzPXtmc31cbiAgICAgICAgICAgICAgaXNfcG9zdD17aXNfcG9zdH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHtpc19wb3N0ID8gKFxuICAgICAgICAgICAgICA8UG9zdExheW91dCBwYXRobmFtZT17cGF0aG5hbWV9IHsuLi5ncmlkX3Byb3BzfT5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgIDwvUG9zdExheW91dD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gey4uLmdyaWRfcHJvcHN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3492724327",
        dynamic: [afs, afs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]],
        __self: this
      }, "html{font-size:".concat(afs, "px;line-height:").concat(afs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], "px;}a,.display-link{background-image:linear-gradient( to right, black 100%, transparent 0% );background-position:0em calc(").concat(1 + _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], "em);background-repeat:repeat-x;background-size:1em ").concat(_parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], "em;}a.no-hover{background-image:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlOMkIsQUFHc0QsQUFTeEMsQUFNcUIsc0JBQ3hCLG1CQWY2QyxnQ0FTa0IsV0FSL0Qsa0RBUzZCLDJCQUN3QixtREFDckQiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9mZmdyaWRzL2Zhc3Rmb3J3YXJkL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgUG9zdExheW91dCB9IGZyb20gJy4uL3BhcnRzL0xheW91dCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvbnRfc2l6ZSwgbGluZV9oZWlnaHQsIGZvbnRfbWluLCBzbSB9IGZyb20gJy4uL3BhcnRzL1N0YXRpYydcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9wYXJ0cy9IZWFkZXInXG5cbi8vIE92ZXJyaWRlIHRoZSBBcHAgY2xhc3MgdG8gcHV0IGxheW91dCBjb21wb25lbnQgYXJvdW5kIHRoZSBwYWdlIGNvbnRlbnRzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzI2N1c3RvbS1hcHBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3dzogMCxcbiAgICAgIG9wdGltYWw6IG51bGwsXG4gICAgICBncmlkX2NhbnZhczogbnVsbCxcbiAgICAgIG1vZGU6ICdsaWdodCcsXG4gICAgICBncmlkOiAnaGlkZScsXG4gICAgICBzaG93aW5nX3Bvc3RzOiAyNSxcbiAgICB9XG4gICAgdGhpcy5zZXRTaXplID0gdGhpcy5zZXRTaXplLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFNpemUgPSBkZWJvdW5jZSh0aGlzLnNldFNpemUsIDEwMClcbiAgfVxuXG4gIHNldFNpemUoKSB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY3R4LmZvbnQgPSBgbm9ybWFsICR7Zm9udF9zaXplfXB4IEludGVyYFxuICAgIGxldCB3aWR0aCA9IGN0eC5tZWFzdXJlVGV4dChcbiAgICAgICd0aG91c2FuZCB3cml0ZXJzLiBXaXRoIG92ZXIgYSBtaWxsaW9uIHBlb3BsZSBmcm9tIHZhcmlvdXMgZmllbGRzIHdvcmtpbmcnXG4gICAgKS53aWR0aFxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHd3OiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgd2g6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgLy8gb3B0aW1hbDogd2lkdGggKyBmb250X3NpemUgKiBsaW5lX2hlaWdodCxcbiAgICAgICAgb3B0aW1hbDogNjMzLjUwMjQ0MTQwNjI1LFxuICAgICAgfSxcbiAgICAgICgpID0+IHt9XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2V0U2l6ZSlcbiAgICB0aGlzLnNldFNpemUoKVxuXG4gICAgbGV0IG1vZGVfdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpIHx8ICdsaWdodCdcbiAgICBsZXQgZ3JpZF92YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdncmlkJykgfHwgJ2hpZGUnXG5cbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICB0aGlzLnNldFN0YXRlKHsgZ3JpZF9jYW52YXM6IGNhbnZhcywgbW9kZTogbW9kZV92YWx1ZSwgZ3JpZDogZ3JpZF92YWx1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHd3LCB3aCwgb3B0aW1hbCwgbW9kZSwgZ3JpZCwgZ3JpZF9jYW52YXMsIHNob3dpbmdfcG9zdHMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXJcblxuICAgIGxldCBpc19wb3N0ID0gcGF0aG5hbWUuc3RhcnRzV2l0aCgnL3Bvc3RzLycpXG5cbiAgICBsZXQgb2dyZW0gPSBmb250X3NpemUgKiBsaW5lX2hlaWdodFxuICAgIGxldCBhZnMgPSBmb250X3NpemVcblxuICAgIGxldCBmb250X3JhdGlvID0gb3B0aW1hbCAvIGZvbnRfc2l6ZVxuICAgIGlmICh3dyAtIG9ncmVtIDwgb3B0aW1hbCkge1xuICAgICAgbGV0IGFzcGVjdF9mb250ID0gKHd3IC0gb2dyZW0pIC8gZm9udF9yYXRpb1xuICAgICAgaWYgKGFzcGVjdF9mb250ID4gZm9udF9taW4pIHtcbiAgICAgICAgYWZzID0gYXNwZWN0X2ZvbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFmcyA9IGZvbnRfbWluXG4gICAgICB9XG4gICAgfVxuXG4gICAgb2dyZW0gPSBhZnMgKiBsaW5lX2hlaWdodFxuXG4gICAgbGV0IGRpdmlzaW9ucyA9IDRcblxuICAgIGxldCB0YXJnZXRfd2lkdGggPSBvcHRpbWFsIC8gZGl2aXNpb25zXG4gICAgbGV0IGNvbHVtbnMgPSBNYXRoLmZsb29yKCh3dyAtIG9ncmVtKSAvIHRhcmdldF93aWR0aClcbiAgICBsZXQgY29sdW1uX3dpZHRoID0gKHd3IC0gb2dyZW0pIC8gY29sdW1uc1xuXG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBsZXQgZXZlbiA9IGNvbHVtbnMgJSAyID09PSAwXG4gICAgaWYgKCFldmVuKSB7XG4gICAgICBjb2x1bW5zID0gY29sdW1ucyAtIDFcbiAgICAgIG9mZnNldCA9IGNvbHVtbl93aWR0aCAvIDJcbiAgICB9XG5cbiAgICBsZXQgcmF0aW8gPSBjb2x1bW5fd2lkdGggLyB0YXJnZXRfd2lkdGhcblxuICAgIGxldCBvcHRpbV93aWR0aCA9IGNvbHVtbl93aWR0aCAqIGRpdmlzaW9uc1xuICAgIGxldCBvcHRpbV9jZW50ZXJfbGVmdCA9XG4gICAgICAoY29sdW1ucyAvIDIgLSBkaXZpc2lvbnMgLyAyKSAqIGNvbHVtbl93aWR0aCArIG9mZnNldFxuXG4gICAgbGV0IHN0YWNrZWQgPSBmYWxzZVxuICAgIC8vIFRPRE8gcmV0aGluayBzdGFja2VkXG4gICAgaWYgKGNvbHVtbnMgPCBkaXZpc2lvbnMpIHtcbiAgICAgIG9mZnNldCA9IDBcbiAgICAgIGNvbHVtbnMgPSBkaXZpc2lvbnNcbiAgICAgIGNvbHVtbl93aWR0aCA9ICh3dyAtIG9ncmVtKSAvIGRpdmlzaW9uc1xuICAgICAgb3B0aW1fd2lkdGggPSBjb2x1bW5fd2lkdGggKiBkaXZpc2lvbnNcbiAgICAgIG9wdGltX2NlbnRlcl9sZWZ0ID0gMFxuICAgICAgLy8gZ3JlbSA9IGdyZW0gLyAyXG4gICAgICByYXRpbyA9IDFcbiAgICAgIHN0YWNrZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gQWRqdXN0IGdyZW1cbiAgICBsZXQgZnMgPSBhZnMgKiByYXRpb1xuICAgIGxldCBncmVtID0gZnMgKiBsaW5lX2hlaWdodFxuXG4gICAgbGV0IGNlbnRlcl90ZXh0ID0ge1xuICAgICAgd2lkdGg6IG9wdGltX3dpZHRoLFxuICAgICAgbWFyZ2luTGVmdDogb3B0aW1fY2VudGVyX2xlZnQsXG4gICAgfVxuICAgIGxldCBvZnNuID0ge1xuICAgICAgZm9udFNpemU6IGFmcyxcbiAgICAgIGxpbmVIZWlnaHQ6IGxpbmVfaGVpZ2h0LFxuICAgIH1cbiAgICAvLyBmb250LXNpemUgbm9ybWFsXG4gICAgbGV0IGZzbiA9IHtcbiAgICAgIGZvbnRTaXplOiBmcyxcbiAgICAgIGxpbmVIZWlnaHQ6IGxpbmVfaGVpZ2h0LFxuICAgIH1cblxuICAgIGxldCBsb2dvX3N0cm9rZSA9ICdibGFjaydcbiAgICBsZXQgb2NhcCA9IG9ncmVtICogKDIwNDggLyAyODE2KVxuICAgIGxldCBjYXAgPSBncmVtICogKDIwNDggLyAyODE2KVxuXG4gICAgbGV0IGdyaWRfcHJvcHMgPSB7XG4gICAgICBncmVtLFxuICAgICAgb2dyZW0sXG4gICAgICBjZW50ZXJfdGV4dCxcbiAgICAgIGFmcyxcbiAgICAgIGZzbixcbiAgICAgIGZzLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGNvbHVtbl93aWR0aCxcbiAgICAgIG9mZnNldCxcbiAgICAgIHd3LFxuICAgICAgd2gsXG4gICAgICBjYXAsXG4gICAgICBvcHRpbV93aWR0aCxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHNyYzogdXJsKCdzdGF0aWMvZm9udHMvSW50ZXItUmVndWxhci53b2ZmMj92PTMuNScpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCdzdGF0aWMvZm9udHMvSW50ZXItUmVndWxhci53b2ZmP3Y9My41JykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgc3JjOiB1cmwoJ3N0YXRpYy9mb250cy9JbnRlci1JdGFsaWMud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnc3RhdGljL2ZvbnRzL0ludGVyLUl0YWxpYy53b2ZmP3Y9My41JykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250X3NpemV9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHtmb250X3NpemUgKiBsaW5lX2hlaWdodH1weDtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdrZXJuJztcbiAgICAgICAgICAgIGZvbnQta2VybmluZzogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnc3MwMicgMTtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJlIHtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIE1lbmxvLFxuICAgICAgICAgICAgICBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjAyNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEubm8taG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyX2JveF9vdmVybGF5IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDI1cyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlcl9ib3g6aG92ZXIgLmhvdmVyX2JveF9vdmVybGF5IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEuZ3JheS1iYWNrZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjA1cyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEuZ3JheS1iYWNrZXI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6ICM5OTkgYXV0byAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7YWZzfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7YWZzICogbGluZV9oZWlnaHR9cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEsXG4gICAgICAgICAgLmRpc3BsYXktbGluayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAgICAgICBibGFjayAxMDAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAwJVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBlbSBjYWxjKCR7MSArIHNtfWVtKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMWVtICR7c219ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGEubm8taG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICB7b3B0aW1hbCAhPT0gbnVsbCA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgICBsb2dvX3N0cm9rZT17bG9nb19zdHJva2V9XG4gICAgICAgICAgICAgIGNhcD17Y2FwfVxuICAgICAgICAgICAgICBmc249e2Zzbn1cbiAgICAgICAgICAgICAgZnM9e2ZzfVxuICAgICAgICAgICAgICBpc19wb3N0PXtpc19wb3N0fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge2lzX3Bvc3QgPyAoXG4gICAgICAgICAgICAgIDxQb3N0TGF5b3V0IHBhdGhuYW1lPXtwYXRobmFtZX0gey4uLmdyaWRfcHJvcHN9PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgPC9Qb3N0TGF5b3V0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB7Li4uZ3JpZF9wcm9wc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/pages/_app.js */")), optimal !== null ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3058579605", [_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]], ["3492724327", [afs, afs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
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
          lineNumber: 241
        },
        __self: this
      }), is_post ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_Layout__WEBPACK_IMPORTED_MODULE_9__["PostLayout"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        pathname: pathname
      }, grid_props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3058579605", [_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]], ["3492724327", [afs, afs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, grid_props, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3058579605", [_parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"]]], ["3492724327", [afs, afs * _parts_Static__WEBPACK_IMPORTED_MODULE_11__["line_height"], 1 + _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"], _parts_Static__WEBPACK_IMPORTED_MODULE_11__["sm"]]]]) + " " + (grid_props.className != null && grid_props.className || pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }))) : null);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.b09694b9943cd38b6fd9.hot-update.js.map