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
/* harmony import */ var _exp_parts_Static__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../exp/parts/Static */ "../exp/parts/Static.js");
/* harmony import */ var _parts_Dividers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/Dividers */ "./parts/Dividers.js");
/* harmony import */ var _parts_Header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../parts/Header */ "./parts/Header.js");
/* harmony import */ var _parts_PostPreview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../parts/PostPreview */ "./parts/PostPreview.js");






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
          wh = _this$props2.wh;
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
              lineNumber: 43
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
              lineNumber: 50
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
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "static/images/favicon.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, post.title, " - Cloudera Fast Forward")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1405458506",
        dynamic: [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem],
        __self: this
      }, "h1,h2,h3,h4,h5,h6{font-weight:400;font-style:normal;margin:0;}h1{font-size:".concat(fs * 3, "px;line-height:1.25;}h2{font-size:").concat(fs * 2, "px;line-height:1.25;padding-top:").concat(grem, "px;margin-bottom:").concat(grem, "px;}h3{font-size:").concat(fs * 1.5, "px;line-height:1.25;padding-top:").concat(grem, "px;margin-bottom:").concat(grem, "px;}h4{font-size:").concat(fs * 1.25, "px;line-height:1.25;padding-top:").concat(grem, "px;margin-bottom:").concat(grem, "px;}h5{font-size:").concat(fs * 0.75, "px;line-height:1.4375;margin-bottom:").concat(grem / 2, "px;padding-bottom:").concat(grem / 2, "px;margin-top:-").concat(grem / 2, "px;}p{margin:0 0 ").concat(grem, "px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYXJ0cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUYyQixBQVE2QixBQUt5QixBQUlBLEFBTUEsQUFNQSxBQU1DLEFBV0csZ0JBckMzQixrQkFDVCxPQUlRLEFBSUEsQUFNQSxBQU1BLENBTUUsQ0F6QnJCLEVBb0NBLGFBaENBLEFBSTZDLEFBTUEsQUFNQSxHQU1HLHdDQWpCRCxBQU1BLEFBTUEsTUFNRSx1Q0FqQmpELEFBTUEsQUFNQSxRQVE4Qyw0Q0FDOUMiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9mZmdyaWRzL2Zhc3Rmb3J3YXJkL3BhcnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHAgfSBmcm9tICcuLi9wYXJ0cy9VdGlscydcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL3Bvc3RzJ1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuaW1wb3J0IHsgZm9udF9zaXplLCBsaW5lX2hlaWdodCwgZm9udF9taW4sIHNtIH0gZnJvbSAnLi4vLi4vZXhwL3BhcnRzL1N0YXRpYydcbmltcG9ydCB7IEhkLCBWZCwgUmVjdCB9IGZyb20gJy4uL3BhcnRzL0RpdmlkZXJzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9wYXJ0cy9IZWFkZXInXG5pbXBvcnQgUG9zdFByZXZpZXcgZnJvbSAnLi4vcGFydHMvUG9zdFByZXZpZXcnXG5cbmxldCBvZnMgPSAxNlxuXG5leHBvcnQgY2xhc3MgUG9zdExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiwgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQge1xuICAgICAgZ3JlbSxcbiAgICAgIG9ncmVtLFxuICAgICAgY2VudGVyX3RleHQsXG4gICAgICBhZnMsXG4gICAgICBmc24sXG4gICAgICBmcyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBjb2x1bW5fd2lkdGgsXG4gICAgICBvZmZzZXQsXG4gICAgICB3dyxcbiAgICAgIHdoLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgcG9zdF9pbmRleCA9IHBvc3RzLm1hcChwID0+IHAudXJsUGF0aCkuaW5kZXhPZihwYXRobmFtZSlcbiAgICBsZXQgcHJldl9pbmRleCA9IHBvc3RfaW5kZXggLSAxXG4gICAgbGV0IG5leHRfaW5kZXggPSBwb3N0X2luZGV4ICsgMVxuICAgIGxldCBwb3N0ID0gcG9zdHNbcG9zdF9pbmRleF1cbiAgICBsZXQgcHJldl9wb3N0ID0gcG9zdHNbcHJldl9pbmRleF1cbiAgICBsZXQgbmV4dF9wb3N0ID0gcG9zdHNbbmV4dF9pbmRleF1cblxuICAgIGxldCBjb21wb25lbnRzID0ge1xuICAgICAgaW1nOiBwcm9wcyA9PiB7XG4gICAgICAgIGxldCBhZGRyZXNzID0gcHJvcHMuc3JjXG4gICAgICAgIGFkZHJlc3MucmVwbGFjZSgne3sgc2l0ZS5naXRodWIudXJsIH19JywgJycpXG4gICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/IGFkZHJlc3MgOiBgL3N0YXRpYyR7YWRkcmVzc31gXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLy8gd2lkdGg6IG9wdGltX3dpZHRoICsgb2dyZW0sXG4gICAgICAgICAgICAgIC8vIG1hcmdpbkxlZnQ6IC1ncmVtIC8gMiAtIG9ncmVtIC8gMixcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXthZGRyZXNzfVxuICAgICAgICAgICAgICBhbHQ9e3Byb3BzLmFsdH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiBvcHRpbV93aWR0aCArIG9ncmVtLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9LFxuICAgIH1cblxuICAgIGxldCBwb3N0X2RhdGUgPSBuZXcgRGF0ZShwb3N0LnB1Ymxpc2hEYXRlKVxuICAgIGxldCBwdWJsaXNoZWRfZGF0ZSA9IGAke3Bvc3RfZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7XG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICB9KX0gJHsocG9zdF9kYXRlLmdldERheSgpICsgMSlcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAucGFkU3RhcnQoMiwgJzAnKX0gJHtwb3N0X2RhdGUuZ2V0RnVsbFllYXIoKX1gXG5cbiAgICBsZXQgcHJldmlld19jb2x1bW5zID0gTWF0aC5tYXgoXG4gICAgICAoY29sdW1ucyAvIDIpICUgMiA9PT0gMCA/IGNvbHVtbnMgLyAyIDogY29sdW1ucyAvIDIgLSAxLFxuICAgICAgNFxuICAgIClcbiAgICBsZXQgcHJldmlld19vZmZzZXQgPSBNYXRoLm1heCgwLCBjb2x1bW5zIC8gMiAtIHByZXZpZXdfY29sdW1ucylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcbiAgICAgICAgICAgIGhyZWY9XCJzdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfSAtIENsb3VkZXJhIEZhc3QgRm9yd2FyZDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGgyLFxuICAgICAgICAgIGgzLFxuICAgICAgICAgIGg0LFxuICAgICAgICAgIGg1LFxuICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmcyAqIDN9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZzICogMn1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7Z3JlbX1weDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7Z3JlbX1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZzICogMS41fXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJHtncmVtfXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHtncmVtfXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7ZnMgKiAxLjI1fXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJHtncmVtfXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHtncmVtfXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNSB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7ZnMgKiAwLjc1fXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDM3NTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7Z3JlbSAvIDJ9cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHtncmVtIC8gMn1weDtcbiAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAtJHtncmVtIC8gMiArIG9ncmVtIC8gMn1weDtcbiAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogLSR7Z3JlbSAvIDIgKyBvZ3JlbSAvIDJ9cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtJHtncmVtIC8gMn1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDUgZW0ge1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwICR7Z3JlbX1weCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IG9ncmVtIC8gMixcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBvZ3JlbSAvIDIsXG4gICAgICAgICAgICAgIHBhZGRpbmdUb3A6IGdyZW0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IE1hdGgubWluKGNvbHVtbnMsIDYpICogY29sdW1uX3dpZHRoLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDpcbiAgICAgICAgICAgICAgICAgICAgKChjb2x1bW5zIC0gTWF0aC5taW4oY29sdW1ucywgNikpIC8gMikgKiBjb2x1bW5fd2lkdGggK1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb2x1bW5fd2lkdGggKiAxLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBwKDAsIGdyZW0gLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBmcyAqICg2IC8gOCksXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjAzZW0nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3B1Ymxpc2hlZF9kYXRlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb2x1bW5fd2lkdGggKiAxLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBwKDAsIGdyZW0gLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBmcyAqICg2IC8gOCksXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjAzZW0nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Bvc3QucG9zdF90eXBlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGZzICogMyxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4yNSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogcCgwLCBncmVtIC8gMiksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBNYXRoLm1pbihjb2x1bW5zLCA2KSAqIGNvbHVtbl93aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDpcbiAgICAgICAgICAgICAgICAgICAgICAoKGNvbHVtbnMgLSBNYXRoLm1pbihjb2x1bW5zLCA2KSkgLyAyKSAqIGNvbHVtbl93aWR0aCArXG4gICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogY29sdW1ucyA+IDQgPyA1ICogY29sdW1uX3dpZHRoIDogNCAqIGNvbHVtbl93aWR0aCxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6XG4gICAgICAgICAgICAgICAgICAgIChjb2x1bW5zID4gNFxuICAgICAgICAgICAgICAgICAgICAgID8gKChjb2x1bW5zIC0gNCkgLyAyIC0gMSkgKiBjb2x1bW5fd2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICA6ICgoY29sdW1ucyAtIDQpIC8gMikgKiBjb2x1bW5fd2lkdGgpICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29sdW1ucyA+IDQgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogcChncmVtLCBncmVtIC8gMiwgZ3JlbSwgZ3JlbSAvIDIpLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb2x1bW5fd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmF1dGhvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgYnl7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuYXV0aG9yX2xpbmsgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QuYXV0aG9yX2xpbmt9Pntwb3N0LmF1dGhvcn08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LmF1dGhvclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9eycgJ31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNvbHVtbl93aWR0aCAqIDQsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHAoZ3JlbSwgZ3JlbSAvIDIsIGdyZW0sIGdyZW0gLyAyKSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9PntjaGlsZHJlbn08L01EWFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZmYucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtuZXh0X3Bvc3QgPyAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC1vZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAtb2dyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGdyZW0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAtb2dyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAtb2dyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHAoXG4gICAgICAgICAgICAgICAgICAgICAgICBncmVtIC8gNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyZW0gLyAyICsgb2dyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlbSAvIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmVtIC8gMiArIG9mZnNldCArIG9ncmVtXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQmVmb3JlXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxQb3N0UHJldmlld1xuICAgICAgICAgICAgICAgICAgICBwb3N0PXtwb3N0c1tuZXh0X2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgICAgICAgICAgd3c9e3d3fVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5fd2lkdGg9e2NvbHVtbl93aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgZnM9e2ZzfVxuICAgICAgICAgICAgICAgICAgICBvZ3JlbT17b2dyZW19XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhX2xlZnQ9e29ncmVtIC8gMiArIG9mZnNldH1cbiAgICAgICAgICAgICAgICAgICAgZXh0cmFfcmlnaHQ9e29ncmVtIC8gMiArIG9mZnNldH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8SGQgYWxpZ249XCJiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAge3ByZXZfcG9zdCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogLW9ncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IC1vZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogZ3JlbSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC1vZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IC1vZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogcChcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyZW0gLyA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlbSAvIDIgKyBvZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmVtIC8gNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyZW0gLyAyICsgb2Zmc2V0ICsgb2dyZW1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZnRlclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8UG9zdFByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgcG9zdD17cG9zdHNbcHJldl9pbmRleF19XG4gICAgICAgICAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICAgICAgICAgIHd3PXt3d31cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3dpZHRoPXtjb2x1bW5fd2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGZzPXtmc31cbiAgICAgICAgICAgICAgICAgICAgb2dyZW09e29ncmVtfVxuICAgICAgICAgICAgICAgICAgICBleHRyYV9sZWZ0PXtvZ3JlbSAvIDIgKyBvZmZzZXR9XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhX3JpZ2h0PXtvZ3JlbSAvIDIgKyBvZmZzZXR9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8SGQgYWxpZ249XCJiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBncmVtIH19PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBmcyAqIDIsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogcCgwLCBncmVtIC8gMiwgMCwgZ3JlbSAvIDIpLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgIC4uLmNlbnRlcl90ZXh0LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBwKDAsIGdyZW0gLyAyKSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAuLi5jZW50ZXJfdGV4dCxcbiAgICAgICAgICAgICAgICAgIC4uLmZzbixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIExhYnMgaXMgYW4gYXBwbGllZCBtYWNoaW5lIGxlYXJuaW5nXG4gICAgICAgICAgICAgICAgcmVzZWFyY2ggZ3JvdXAuIFdlIGhlbHAgb3JnYW5pemF0aW9ucyByZWNvZ25pemUgYW5kIGRldmVsb3AgbmV3XG4gICAgICAgICAgICAgICAgcHJvZHVjdCBhbmQgYnVzaW5lc3Mgb3Bwb3J0dW5pdGllcyB0aHJvdWdoIGVtZXJnaW5nXG4gICAgICAgICAgICAgICAgdGVjaG5vbG9naWVzLnsnICd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHAoMCwgZ3JlbSAvIDIpLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgIC4uLmNlbnRlcl90ZXh0LFxuICAgICAgICAgICAgICAgICAgLi4uZnNuLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2xvdWRlcmEuY29tL3Byb2R1Y3RzL2Zhc3QtZm9yd2FyZC1sYWJzLXJlc2VhcmNoLmh0bWxcIj5cbiAgICAgICAgICAgICAgICAgIExlYXJuIG1vcmUgYWJvdXQgd29ya2luZyB3aXRoIHVzLlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgIDxIZCB3aWR0aD1cIjEwMCVcIiBhbGlnbj1cInRcIiBmcz17ZnN9IC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgICAgICAgICAgICAgIC4uLmZzbixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+QmxvZzwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IGdyZW0gLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2xvdWRlcmEuY29tL3Byb2R1Y3RzL2Zhc3QtZm9yd2FyZC1sYWJzLXJlc2VhcmNoLmh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDbG91ZGVyYVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IGdyZW0gLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ibG9nLmZhc3Rmb3J3YXJkbGFicy5jb20vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQUkgRXhwZXJpbWVudHNcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Zhc3Rmb3J3YXJkbGFic1wiPlR3aXR0ZXI8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/parts/Layout.js */")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
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
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
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
          lineNumber: 147
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
          lineNumber: 157
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
          lineNumber: 170
        },
        __self: this
      }, post.post_type)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginBottom: 0
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
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
          lineNumber: 185
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
          lineNumber: 200
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
          lineNumber: 211
        },
        __self: this
      }, post.author ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "by", ' ', post.author_link ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: post.author_link,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
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
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__["MDXProvider"], {
        components: components,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
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
          lineNumber: 237
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
          lineNumber: 244
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
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
          lineNumber: 264
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
          lineNumber: 272
        },
        __self: this
      }, "Before"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_PostPreview__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
          lineNumber: 286
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_14__["Hd"], {
        align: "b",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
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
          lineNumber: 302
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
          lineNumber: 310
        },
        __self: this
      }, "After"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_PostPreview__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
          lineNumber: 324
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_14__["Hd"], {
        align: "b",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      })) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          paddingBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
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
          lineNumber: 342
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
          lineNumber: 353
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
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "Learn more about working with us.")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_14__["Hd"], {
        width: "100%",
        align: "t",
        fs: fs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
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
          lineNumber: 384
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "/",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
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
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, "Cloudera")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://blog.fastforwardlabs.com/",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, "AI Experiments")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://twitter.com/fastforwardlabs",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, "Twitter"))))))));
    }
  }]);

  return PostLayout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/***/ })

})
//# sourceMappingURL=_app.js.43e9076cc966290ac822.hot-update.js.map