webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./parts/Layout.js":
/*!*************************!*\
  !*** ./parts/Layout.js ***!
  \*************************/
/*! exports provided: PostLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLayout", function() { return PostLayout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _parts_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parts/Utils */ "./parts/Utils.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../posts */ "./posts.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _parts_Dividers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/Dividers */ "./parts/Dividers.js");
/* harmony import */ var _parts_PostPreview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/PostPreview */ "./parts/PostPreview.js");






var _jsxFileName = "/Users/grant.custer/Sites/ffgrids/fastforward/parts/Layout.js";









var ofs = 16;
var PostLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostLayout, _React$Component);

  function PostLayout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PostLayout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PostLayout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PostLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          pathname = _this$props.pathname;
      var _this$props2 = this.props,
          grem = _this$props2.grem,
          ogrem = _this$props2.ogrem,
          center_text = _this$props2.center_text,
          afs = _this$props2.afs,
          fsn = _this$props2.fsn,
          fs = _this$props2.fs,
          columns = _this$props2.columns,
          column_width = _this$props2.column_width,
          offset = _this$props2.offset,
          ww = _this$props2.ww,
          wh = _this$props2.wh,
          cap = _this$props2.cap,
          optim_width = _this$props2.optim_width;
      console.log(this.props);
      console.log(column_width);
      var post_index = _posts__WEBPACK_IMPORTED_MODULE_11__["default"].map(function (p) {
        return p.urlPath;
      }).indexOf(pathname);
      var prev_index = post_index - 1;
      var next_index = post_index + 1;
      var post = _posts__WEBPACK_IMPORTED_MODULE_11__["default"][post_index];
      var prev_post = _posts__WEBPACK_IMPORTED_MODULE_11__["default"][prev_index];
      var next_post = _posts__WEBPACK_IMPORTED_MODULE_11__["default"][next_index];
      var components = {
        img: function img(props) {
          var address = props.src;
          address.replace('{{ site.github.url }}', '');
          address = address.startsWith('http') ? address : "/static".concat(address);
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              // width: optim_width + ogrem,
              // marginLeft: -grem / 2 - ogrem / 2,
              position: 'relative'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            src: address,
            alt: props.alt,
            style: {
              display: 'block',
              margin: '0',
              maxWidth: optim_width + ogrem,
              width: '100%'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }));
        }
      };
      var post_date = new Date(post.publishDate);
      var published_date = "".concat(post_date.toLocaleString('en-us', {
        month: 'short'
      }), " ").concat((post_date.getDay() + 1).toString().padStart(2, '0'), " ").concat(post_date.getFullYear());
      var preview_columns = Math.max(columns / 2 % 2 === 0 ? columns / 2 : columns / 2 - 1, 4);
      var preview_offset = Math.max(0, columns / 2 - preview_columns);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "static/images/favicon.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, post.title, " - Cloudera Fast Forward")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1405458506",
        dynamic: [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem],
        __self: this
      }, "h1,h2,h3,h4,h5,h6{font-weight:400;font-style:normal;margin:0;}h1{font-size:".concat(fs * 3, "px;line-height:1.25;}h2{font-size:").concat(fs * 2, "px;line-height:1.25;padding-top:").concat(grem, "px;margin-bottom:").concat(grem, "px;}h3{font-size:").concat(fs * 1.5, "px;line-height:1.25;padding-top:").concat(grem, "px;margin-bottom:").concat(grem, "px;}h4{font-size:").concat(fs * 1.25, "px;line-height:1.25;padding-top:").concat(grem, "px;margin-bottom:").concat(grem, "px;}h5{font-size:").concat(fs * 0.75, "px;line-height:1.4375;margin-bottom:").concat(grem / 2, "px;padding-bottom:").concat(grem / 2, "px;margin-top:-").concat(grem / 2, "px;}p{margin:0 0 ").concat(grem, "px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYXJ0cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEYyQixBQVE2QixBQUt5QixBQUlBLEFBTUEsQUFNQSxBQU1DLEFBV0csZ0JBckMzQixrQkFDVCxPQUlRLEFBSUEsQUFNQSxBQU1BLENBTUUsQ0F6QnJCLEVBb0NBLGFBaENBLEFBSTZDLEFBTUEsQUFNQSxHQU1HLHdDQWpCRCxBQU1BLEFBTUEsTUFNRSx1Q0FqQmpELEFBTUEsQUFNQSxRQVE4Qyw0Q0FDOUMiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9mZmdyaWRzL2Zhc3Rmb3J3YXJkL3BhcnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHAgfSBmcm9tICcuLi9wYXJ0cy9VdGlscydcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL3Bvc3RzJ1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuaW1wb3J0IHsgSGQsIFZkLCBSZWN0IH0gZnJvbSAnLi4vcGFydHMvRGl2aWRlcnMnXG5pbXBvcnQgUG9zdFByZXZpZXcgZnJvbSAnLi4vcGFydHMvUG9zdFByZXZpZXcnXG5cbmxldCBvZnMgPSAxNlxuXG5leHBvcnQgY2xhc3MgUG9zdExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiwgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQge1xuICAgICAgZ3JlbSxcbiAgICAgIG9ncmVtLFxuICAgICAgY2VudGVyX3RleHQsXG4gICAgICBhZnMsXG4gICAgICBmc24sXG4gICAgICBmcyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBjb2x1bW5fd2lkdGgsXG4gICAgICBvZmZzZXQsXG4gICAgICB3dyxcbiAgICAgIHdoLFxuICAgICAgY2FwLFxuICAgICAgb3B0aW1fd2lkdGgsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgY29uc29sZS5sb2coY29sdW1uX3dpZHRoKVxuXG4gICAgbGV0IHBvc3RfaW5kZXggPSBwb3N0cy5tYXAocCA9PiBwLnVybFBhdGgpLmluZGV4T2YocGF0aG5hbWUpXG4gICAgbGV0IHByZXZfaW5kZXggPSBwb3N0X2luZGV4IC0gMVxuICAgIGxldCBuZXh0X2luZGV4ID0gcG9zdF9pbmRleCArIDFcbiAgICBsZXQgcG9zdCA9IHBvc3RzW3Bvc3RfaW5kZXhdXG4gICAgbGV0IHByZXZfcG9zdCA9IHBvc3RzW3ByZXZfaW5kZXhdXG4gICAgbGV0IG5leHRfcG9zdCA9IHBvc3RzW25leHRfaW5kZXhdXG5cbiAgICBsZXQgY29tcG9uZW50cyA9IHtcbiAgICAgIGltZzogcHJvcHMgPT4ge1xuICAgICAgICBsZXQgYWRkcmVzcyA9IHByb3BzLnNyY1xuICAgICAgICBhZGRyZXNzLnJlcGxhY2UoJ3t7IHNpdGUuZ2l0aHViLnVybCB9fScsICcnKVxuICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy5zdGFydHNXaXRoKCdodHRwJykgPyBhZGRyZXNzIDogYC9zdGF0aWMke2FkZHJlc3N9YFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC8vIHdpZHRoOiBvcHRpbV93aWR0aCArIG9ncmVtLFxuICAgICAgICAgICAgICAvLyBtYXJnaW5MZWZ0OiAtZ3JlbSAvIDIgLSBvZ3JlbSAvIDIsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17YWRkcmVzc31cbiAgICAgICAgICAgICAgYWx0PXtwcm9wcy5hbHR9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogb3B0aW1fd2lkdGggKyBvZ3JlbSxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSxcbiAgICB9XG5cbiAgICBsZXQgcG9zdF9kYXRlID0gbmV3IERhdGUocG9zdC5wdWJsaXNoRGF0ZSlcbiAgICBsZXQgcHVibGlzaGVkX2RhdGUgPSBgJHtwb3N0X2RhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge1xuICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgfSl9ICR7KHBvc3RfZGF0ZS5nZXREYXkoKSArIDEpXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnBhZFN0YXJ0KDIsICcwJyl9ICR7cG9zdF9kYXRlLmdldEZ1bGxZZWFyKCl9YFxuXG4gICAgbGV0IHByZXZpZXdfY29sdW1ucyA9IE1hdGgubWF4KFxuICAgICAgKGNvbHVtbnMgLyAyKSAlIDIgPT09IDAgPyBjb2x1bW5zIC8gMiA6IGNvbHVtbnMgLyAyIC0gMSxcbiAgICAgIDRcbiAgICApXG4gICAgbGV0IHByZXZpZXdfb2Zmc2V0ID0gTWF0aC5tYXgoMCwgY29sdW1ucyAvIDIgLSBwcmV2aWV3X2NvbHVtbnMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgICAgdHlwZT1cImltYWdlL3gtaWNvblwiXG4gICAgICAgICAgICBocmVmPVwic3RhdGljL2ltYWdlcy9mYXZpY29uLnBuZ1wiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX0gLSBDbG91ZGVyYSBGYXN0IEZvcndhcmQ8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBoMSxcbiAgICAgICAgICBoMixcbiAgICAgICAgICBoMyxcbiAgICAgICAgICBoNCxcbiAgICAgICAgICBoNSxcbiAgICAgICAgICBoNiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7ZnMgKiAzfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmcyAqIDJ9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAke2dyZW19cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAke2dyZW19cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmcyAqIDEuNX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7Z3JlbX1weDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7Z3JlbX1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZzICogMS4yNX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7Z3JlbX1weDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7Z3JlbX1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZzICogMC43NX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzNzU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAke2dyZW0gLyAyfXB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICR7Z3JlbSAvIDJ9cHg7XG4gICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogLSR7Z3JlbSAvIDIgKyBvZ3JlbSAvIDJ9cHg7XG4gICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IC0ke2dyZW0gLyAyICsgb2dyZW0gLyAyfXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLSR7Z3JlbSAvIDJ9cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGg1IGVtIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAke2dyZW19cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogb2dyZW0gLyAyLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IG9ncmVtIC8gMixcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogZ3JlbSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogTWF0aC5taW4oY29sdW1ucywgNikgKiBjb2x1bW5fd2lkdGgsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OlxuICAgICAgICAgICAgICAgICAgICAoKGNvbHVtbnMgLSBNYXRoLm1pbihjb2x1bW5zLCA2KSkgLyAyKSAqIGNvbHVtbl93aWR0aCArXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNvbHVtbl93aWR0aCAqIDEsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHAoMCwgZ3JlbSAvIDIpLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGZzICogKDYgLyA4KSxcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDNlbScsXG4gICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cHVibGlzaGVkX2RhdGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNvbHVtbl93aWR0aCAqIDEsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHAoMCwgZ3JlbSAvIDIpLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGZzICogKDYgLyA4KSxcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDNlbScsXG4gICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cG9zdC5wb3N0X3R5cGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogZnMgKiAzLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBwKDAsIGdyZW0gLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IE1hdGgubWluKGNvbHVtbnMsIDYpICogY29sdW1uX3dpZHRoLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OlxuICAgICAgICAgICAgICAgICAgICAgICgoY29sdW1ucyAtIE1hdGgubWluKGNvbHVtbnMsIDYpKSAvIDIpICogY29sdW1uX3dpZHRoICtcbiAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb2x1bW5zID4gNCA/IDUgKiBjb2x1bW5fd2lkdGggOiA0ICogY29sdW1uX3dpZHRoLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDpcbiAgICAgICAgICAgICAgICAgICAgKGNvbHVtbnMgPiA0XG4gICAgICAgICAgICAgICAgICAgICAgPyAoKGNvbHVtbnMgLSA0KSAvIDIgLSAxKSAqIGNvbHVtbl93aWR0aFxuICAgICAgICAgICAgICAgICAgICAgIDogKChjb2x1bW5zIC0gNCkgLyAyKSAqIGNvbHVtbl93aWR0aCkgKyBvZmZzZXQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb2x1bW5zID4gNCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBwKGdyZW0sIGdyZW0gLyAyLCBncmVtLCBncmVtIC8gMiksXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNvbHVtbl93aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3QuYXV0aG9yID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBieXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5hdXRob3JfbGluayA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5hdXRob3JfbGlua30+e3Bvc3QuYXV0aG9yfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuYXV0aG9yXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH17JyAnfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29sdW1uX3dpZHRoICogNCxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogcChncmVtLCBncmVtIC8gMiwgZ3JlbSwgZ3JlbSAvIDIpLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17Y29tcG9uZW50c30+e2NoaWxkcmVufTwvTURYUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9mZi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25leHRfcG9zdCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogLW9ncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IC1vZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogZ3JlbSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC1vZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IC1vZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogcChcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyZW0gLyA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlbSAvIDIgKyBvZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmVtIC8gNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyZW0gLyAyICsgb2Zmc2V0ICsgb2dyZW1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBCZWZvcmVcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFBvc3RQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Bvc3RzW25leHRfaW5kZXhdfVxuICAgICAgICAgICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgICAgICAgICB3dz17d3d9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl93aWR0aD17Y29sdW1uX3dpZHRofVxuICAgICAgICAgICAgICAgICAgICBmcz17ZnN9XG4gICAgICAgICAgICAgICAgICAgIG9ncmVtPXtvZ3JlbX1cbiAgICAgICAgICAgICAgICAgICAgZXh0cmFfbGVmdD17b2dyZW0gLyAyICsgb2Zmc2V0fVxuICAgICAgICAgICAgICAgICAgICBleHRyYV9yaWdodD17b2dyZW0gLyAyICsgb2Zmc2V0fVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxIZCBhbGlnbj1cImJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICB7cHJldl9wb3N0ID8gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAtb2dyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogLW9ncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBncmVtLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogLW9ncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogLW9ncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBwKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlbSAvIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmVtIC8gMiArIG9ncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyZW0gLyA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlbSAvIDIgKyBvZmZzZXQgKyBvZ3JlbVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEFmdGVyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxQb3N0UHJldmlld1xuICAgICAgICAgICAgICAgICAgICBwb3N0PXtwb3N0c1twcmV2X2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgICAgICAgICAgd3c9e3d3fVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5fd2lkdGg9e2NvbHVtbl93aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgZnM9e2ZzfVxuICAgICAgICAgICAgICAgICAgICBvZ3JlbT17b2dyZW19XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhX2xlZnQ9e29ncmVtIC8gMiArIG9mZnNldH1cbiAgICAgICAgICAgICAgICAgICAgZXh0cmFfcmlnaHQ9e29ncmVtIC8gMiArIG9mZnNldH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxIZCBhbGlnbj1cImJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGZzICogMixcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMjUsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBwKDAsIGdyZW0gLyAyLCAwLCBncmVtIC8gMiksXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgLi4uY2VudGVyX3RleHQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHAoMCwgZ3JlbSAvIDIpLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgIC4uLmNlbnRlcl90ZXh0LFxuICAgICAgICAgICAgICAgICAgLi4uZnNuLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDbG91ZGVyYSBGYXN0IEZvcndhcmQgTGFicyBpcyBhbiBhcHBsaWVkIG1hY2hpbmUgbGVhcm5pbmdcbiAgICAgICAgICAgICAgICByZXNlYXJjaCBncm91cC4gV2UgaGVscCBvcmdhbml6YXRpb25zIHJlY29nbml6ZSBhbmQgZGV2ZWxvcCBuZXdcbiAgICAgICAgICAgICAgICBwcm9kdWN0IGFuZCBidXNpbmVzcyBvcHBvcnR1bml0aWVzIHRocm91Z2ggZW1lcmdpbmdcbiAgICAgICAgICAgICAgICB0ZWNobm9sb2dpZXMueycgJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogcCgwLCBncmVtIC8gMiksXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgLi4uY2VudGVyX3RleHQsXG4gICAgICAgICAgICAgICAgICAuLi5mc24sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jbG91ZGVyYS5jb20vcHJvZHVjdHMvZmFzdC1mb3J3YXJkLWxhYnMtcmVzZWFyY2guaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgTGVhcm4gbW9yZSBhYm91dCB3b3JraW5nIHdpdGggdXMuXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgPEhkIHdpZHRoPVwiMTAwJVwiIGFsaWduPVwidFwiIGZzPXtmc30gLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICAgICAgICAgICAgICAgLi4uZnNuLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5CbG9nPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jbG91ZGVyYS5jb20vcHJvZHVjdHMvZmFzdC1mb3J3YXJkLWxhYnMtcmVzZWFyY2guaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIENsb3VkZXJhXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Jsb2cuZmFzdGZvcndhcmRsYWJzLmNvbS9cIj5cbiAgICAgICAgICAgICAgICAgICAgICBBSSBFeHBlcmltZW50c1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZmFzdGZvcndhcmRsYWJzXCI+VHdpdHRlcjwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/parts/Layout.js */")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          paddingLeft: ogrem / 2,
          paddingRight: ogrem / 2,
          paddingTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: 'flex',
          marginBottom: grem / 2,
          width: Math.min(columns, 6) * column_width,
          marginLeft: (columns - Math.min(columns, 6)) / 2 * column_width + offset
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: column_width * 1,
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_9__["p"])(0, grem / 2),
          position: 'relative',
          fontSize: fs * (6 / 8),
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
          lineHeight: 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, published_date), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: column_width * 1,
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_9__["p"])(0, grem / 2),
          position: 'relative',
          fontSize: fs * (6 / 8),
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
          lineHeight: 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, post.post_type)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginBottom: 0
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          fontSize: fs * 3,
          lineHeight: 1.25,
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_9__["p"])(0, grem / 2),
          width: Math.min(columns, 6) * column_width,
          marginLeft: (columns - Math.min(columns, 6)) / 2 * column_width + offset
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, post.title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: 'flex',
          width: columns > 4 ? 5 * column_width : 4 * column_width,
          marginLeft: (columns > 4 ? ((columns - 4) / 2 - 1) * column_width : (columns - 4) / 2 * column_width) + offset
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, columns > 4 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_9__["p"])(grem, grem / 2, grem, grem / 2),
          width: column_width
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, post.author ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "by", ' ', post.author_link ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: post.author_link,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, post.author) : post.author) : null, ' ') : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: column_width * 4,
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_9__["p"])(grem, grem / 2, grem, grem / 2)
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__["MDXProvider"], {
        components: components,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          padding: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        style: {
          height: cap,
          width: cap,
          position: 'relative',
          display: 'block'
        },
        src: "/static/images/ff.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, next_post ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative',
          marginLeft: -ogrem / 2,
          marginRight: -ogrem / 2,
          marginBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginLeft: -ogrem / 2,
          marginRight: -ogrem / 2,
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_9__["p"])(grem / 4, grem / 2 + ogrem / 2, grem / 4, grem / 2 + offset + ogrem)
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "Before"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_PostPreview__WEBPACK_IMPORTED_MODULE_14__["default"], {
        post: _posts__WEBPACK_IMPORTED_MODULE_11__["default"][next_index],
        grem: grem,
        ww: ww,
        column_width: column_width,
        fs: fs,
        ogrem: ogrem,
        extra_left: ogrem / 2 + offset,
        extra_right: ogrem / 2 + offset,
        columns: columns,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_13__["Hd"], {
        align: "b",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      })) : null, prev_post ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative',
          marginLeft: -ogrem / 2,
          marginRight: -ogrem / 2,
          marginBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginLeft: -ogrem / 2,
          marginRight: -ogrem / 2,
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_9__["p"])(grem / 4, grem / 2 + ogrem / 2, grem / 4, grem / 2 + offset + ogrem)
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, "After"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_PostPreview__WEBPACK_IMPORTED_MODULE_14__["default"], {
        post: _posts__WEBPACK_IMPORTED_MODULE_11__["default"][prev_index],
        grem: grem,
        ww: ww,
        column_width: column_width,
        fs: fs,
        ogrem: ogrem,
        extra_left: ogrem / 2 + offset,
        extra_right: ogrem / 2 + offset,
        columns: columns,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_13__["Hd"], {
        align: "b",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      })) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          paddingBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          fontSize: fs * 2,
          lineHeight: 1.25,
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_9__["p"])(0, grem / 2, 0, grem / 2),
          marginBottom: grem / 2
        }, center_text),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_9__["p"])(0, grem / 2),
          marginBottom: grem / 2
        }, center_text, fsn),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, "Cloudera Fast Forward Labs is an applied machine learning research group. We help organizations recognize and develop new product and business opportunities through emerging technologies.", ' '), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_9__["p"])(0, grem / 2),
          marginBottom: grem / 2
        }, center_text, fsn),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, "Learn more about working with us.")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_13__["Hd"], {
        width: "100%",
        align: "t",
        fs: fs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          padding: grem / 2,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }, fsn),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "/",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, "Cloudera")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://blog.fastforwardlabs.com/",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, "AI Experiments")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://twitter.com/fastforwardlabs",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, "Twitter"))))))));
    }
  }]);

  return PostLayout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/***/ })

})
//# sourceMappingURL=_app.js.08a48352e9fc52a0fb41.hot-update.js.map