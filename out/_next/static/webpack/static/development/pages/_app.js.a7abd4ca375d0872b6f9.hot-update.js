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
          wh = _this$props2.wh,
          cap = _this$props2.cap;
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
              lineNumber: 44
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
              lineNumber: 51
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
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "static/images/favicon.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, post.title, " - Cloudera Fast Forward")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1405458506",
        dynamic: [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem],
        __self: this
      }, "h1,h2,h3,h4,h5,h6{font-weight:400;font-style:normal;margin:0;}h1{font-size:".concat(fs * 3, "px;line-height:1.25;}h2{font-size:").concat(fs * 2, "px;line-height:1.25;padding-top:").concat(grem, "px;margin-bottom:").concat(grem, "px;}h3{font-size:").concat(fs * 1.5, "px;line-height:1.25;padding-top:").concat(grem, "px;margin-bottom:").concat(grem, "px;}h4{font-size:").concat(fs * 1.25, "px;line-height:1.25;padding-top:").concat(grem, "px;margin-bottom:").concat(grem, "px;}h5{font-size:").concat(fs * 0.75, "px;line-height:1.4375;margin-bottom:").concat(grem / 2, "px;padding-bottom:").concat(grem / 2, "px;margin-top:-").concat(grem / 2, "px;}p{margin:0 0 ").concat(grem, "px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy9mYXN0Zm9yd2FyZC9wYXJ0cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEYyQixBQVE2QixBQUt5QixBQUlBLEFBTUEsQUFNQSxBQU1DLEFBV0csZ0JBckMzQixrQkFDVCxPQUlRLEFBSUEsQUFNQSxBQU1BLENBTUUsQ0F6QnJCLEVBb0NBLGFBaENBLEFBSTZDLEFBTUEsQUFNQSxHQU1HLHdDQWpCRCxBQU1BLEFBTUEsTUFNRSx1Q0FqQmpELEFBTUEsQUFNQSxRQVE4Qyw0Q0FDOUMiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9mZmdyaWRzL2Zhc3Rmb3J3YXJkL3BhcnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHAgfSBmcm9tICcuLi9wYXJ0cy9VdGlscydcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL3Bvc3RzJ1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuaW1wb3J0IHsgZm9udF9zaXplLCBsaW5lX2hlaWdodCwgZm9udF9taW4sIHNtIH0gZnJvbSAnLi4vLi4vZXhwL3BhcnRzL1N0YXRpYydcbmltcG9ydCB7IEhkLCBWZCwgUmVjdCB9IGZyb20gJy4uL3BhcnRzL0RpdmlkZXJzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9wYXJ0cy9IZWFkZXInXG5pbXBvcnQgUG9zdFByZXZpZXcgZnJvbSAnLi4vcGFydHMvUG9zdFByZXZpZXcnXG5cbmxldCBvZnMgPSAxNlxuXG5leHBvcnQgY2xhc3MgUG9zdExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiwgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQge1xuICAgICAgZ3JlbSxcbiAgICAgIG9ncmVtLFxuICAgICAgY2VudGVyX3RleHQsXG4gICAgICBhZnMsXG4gICAgICBmc24sXG4gICAgICBmcyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBjb2x1bW5fd2lkdGgsXG4gICAgICBvZmZzZXQsXG4gICAgICB3dyxcbiAgICAgIHdoLFxuICAgICAgY2FwLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgcG9zdF9pbmRleCA9IHBvc3RzLm1hcChwID0+IHAudXJsUGF0aCkuaW5kZXhPZihwYXRobmFtZSlcbiAgICBsZXQgcHJldl9pbmRleCA9IHBvc3RfaW5kZXggLSAxXG4gICAgbGV0IG5leHRfaW5kZXggPSBwb3N0X2luZGV4ICsgMVxuICAgIGxldCBwb3N0ID0gcG9zdHNbcG9zdF9pbmRleF1cbiAgICBsZXQgcHJldl9wb3N0ID0gcG9zdHNbcHJldl9pbmRleF1cbiAgICBsZXQgbmV4dF9wb3N0ID0gcG9zdHNbbmV4dF9pbmRleF1cblxuICAgIGxldCBjb21wb25lbnRzID0ge1xuICAgICAgaW1nOiBwcm9wcyA9PiB7XG4gICAgICAgIGxldCBhZGRyZXNzID0gcHJvcHMuc3JjXG4gICAgICAgIGFkZHJlc3MucmVwbGFjZSgne3sgc2l0ZS5naXRodWIudXJsIH19JywgJycpXG4gICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/IGFkZHJlc3MgOiBgL3N0YXRpYyR7YWRkcmVzc31gXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLy8gd2lkdGg6IG9wdGltX3dpZHRoICsgb2dyZW0sXG4gICAgICAgICAgICAgIC8vIG1hcmdpbkxlZnQ6IC1ncmVtIC8gMiAtIG9ncmVtIC8gMixcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXthZGRyZXNzfVxuICAgICAgICAgICAgICBhbHQ9e3Byb3BzLmFsdH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiBvcHRpbV93aWR0aCArIG9ncmVtLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9LFxuICAgIH1cblxuICAgIGxldCBwb3N0X2RhdGUgPSBuZXcgRGF0ZShwb3N0LnB1Ymxpc2hEYXRlKVxuICAgIGxldCBwdWJsaXNoZWRfZGF0ZSA9IGAke3Bvc3RfZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7XG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICB9KX0gJHsocG9zdF9kYXRlLmdldERheSgpICsgMSlcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAucGFkU3RhcnQoMiwgJzAnKX0gJHtwb3N0X2RhdGUuZ2V0RnVsbFllYXIoKX1gXG5cbiAgICBsZXQgcHJldmlld19jb2x1bW5zID0gTWF0aC5tYXgoXG4gICAgICAoY29sdW1ucyAvIDIpICUgMiA9PT0gMCA/IGNvbHVtbnMgLyAyIDogY29sdW1ucyAvIDIgLSAxLFxuICAgICAgNFxuICAgIClcbiAgICBsZXQgcHJldmlld19vZmZzZXQgPSBNYXRoLm1heCgwLCBjb2x1bW5zIC8gMiAtIHByZXZpZXdfY29sdW1ucylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcbiAgICAgICAgICAgIGhyZWY9XCJzdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfSAtIENsb3VkZXJhIEZhc3QgRm9yd2FyZDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGgyLFxuICAgICAgICAgIGgzLFxuICAgICAgICAgIGg0LFxuICAgICAgICAgIGg1LFxuICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmcyAqIDN9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZzICogMn1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7Z3JlbX1weDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7Z3JlbX1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZzICogMS41fXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJHtncmVtfXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHtncmVtfXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7ZnMgKiAxLjI1fXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJHtncmVtfXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHtncmVtfXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNSB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7ZnMgKiAwLjc1fXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDM3NTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7Z3JlbSAvIDJ9cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHtncmVtIC8gMn1weDtcbiAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAtJHtncmVtIC8gMiArIG9ncmVtIC8gMn1weDtcbiAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogLSR7Z3JlbSAvIDIgKyBvZ3JlbSAvIDJ9cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtJHtncmVtIC8gMn1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDUgZW0ge1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwICR7Z3JlbX1weCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBvZ3JlbSAvIDIsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogb2dyZW0gLyAyLFxuICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBncmVtLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBNYXRoLm1pbihjb2x1bW5zLCA2KSAqIGNvbHVtbl93aWR0aCxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6XG4gICAgICAgICAgICAgICAgICAgICgoY29sdW1ucyAtIE1hdGgubWluKGNvbHVtbnMsIDYpKSAvIDIpICogY29sdW1uX3dpZHRoICtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29sdW1uX3dpZHRoICogMSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogcCgwLCBncmVtIC8gMiksXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogZnMgKiAoNiAvIDgpLFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wM2VtJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwdWJsaXNoZWRfZGF0ZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29sdW1uX3dpZHRoICogMSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogcCgwLCBncmVtIC8gMiksXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogZnMgKiAoNiAvIDgpLFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wM2VtJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwb3N0LnBvc3RfdHlwZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBmcyAqIDMsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMjUsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHAoMCwgZ3JlbSAvIDIpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogTWF0aC5taW4oY29sdW1ucywgNikgKiBjb2x1bW5fd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6XG4gICAgICAgICAgICAgICAgICAgICAgKChjb2x1bW5zIC0gTWF0aC5taW4oY29sdW1ucywgNikpIC8gMikgKiBjb2x1bW5fd2lkdGggK1xuICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGNvbHVtbnMgPiA0ID8gNSAqIGNvbHVtbl93aWR0aCA6IDQgKiBjb2x1bW5fd2lkdGgsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OlxuICAgICAgICAgICAgICAgICAgICAoY29sdW1ucyA+IDRcbiAgICAgICAgICAgICAgICAgICAgICA/ICgoY29sdW1ucyAtIDQpIC8gMiAtIDEpICogY29sdW1uX3dpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgOiAoKGNvbHVtbnMgLSA0KSAvIDIpICogY29sdW1uX3dpZHRoKSArIG9mZnNldCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbHVtbnMgPiA0ID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHAoZ3JlbSwgZ3JlbSAvIDIsIGdyZW0sIGdyZW0gLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29sdW1uX3dpZHRoLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5hdXRob3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmF1dGhvcl9saW5rID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LmF1dGhvcl9saW5rfT57cG9zdC5hdXRob3J9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5hdXRob3JcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfXsnICd9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb2x1bW5fd2lkdGggKiA0LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBwKGdyZW0sIGdyZW0gLyAyLCBncmVtLCBncmVtIC8gMiksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxNRFhQcm92aWRlciBjb21wb25lbnRzPXtjb21wb25lbnRzfT57Y2hpbGRyZW59PC9NRFhQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ZmLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmV4dF9wb3N0ID8gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAtb2dyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogLW9ncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBncmVtLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogLW9ncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogLW9ncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBwKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlbSAvIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmVtIC8gMiArIG9ncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyZW0gLyA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlbSAvIDIgKyBvZmZzZXQgKyBvZ3JlbVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEJlZm9yZVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8UG9zdFByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgcG9zdD17cG9zdHNbbmV4dF9pbmRleF19XG4gICAgICAgICAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICAgICAgICAgIHd3PXt3d31cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3dpZHRoPXtjb2x1bW5fd2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGZzPXtmc31cbiAgICAgICAgICAgICAgICAgICAgb2dyZW09e29ncmVtfVxuICAgICAgICAgICAgICAgICAgICBleHRyYV9sZWZ0PXtvZ3JlbSAvIDIgKyBvZmZzZXR9XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhX3JpZ2h0PXtvZ3JlbSAvIDIgKyBvZmZzZXR9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEhkIGFsaWduPVwiYlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgIHtwcmV2X3Bvc3QgPyAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC1vZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAtb2dyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGdyZW0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAtb2dyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAtb2dyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHAoXG4gICAgICAgICAgICAgICAgICAgICAgICBncmVtIC8gNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyZW0gLyAyICsgb2dyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlbSAvIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmVtIC8gMiArIG9mZnNldCArIG9ncmVtXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWZ0ZXJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFBvc3RQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Bvc3RzW3ByZXZfaW5kZXhdfVxuICAgICAgICAgICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgICAgICAgICB3dz17d3d9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl93aWR0aD17Y29sdW1uX3dpZHRofVxuICAgICAgICAgICAgICAgICAgICBmcz17ZnN9XG4gICAgICAgICAgICAgICAgICAgIG9ncmVtPXtvZ3JlbX1cbiAgICAgICAgICAgICAgICAgICAgZXh0cmFfbGVmdD17b2dyZW0gLyAyICsgb2Zmc2V0fVxuICAgICAgICAgICAgICAgICAgICBleHRyYV9yaWdodD17b2dyZW0gLyAyICsgb2Zmc2V0fVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPEhkIGFsaWduPVwiYlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogZnMgKiAyLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4yNSxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHAoMCwgZ3JlbSAvIDIsIDAsIGdyZW0gLyAyKSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAuLi5jZW50ZXJfdGV4dCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogcCgwLCBncmVtIC8gMiksXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgLi4uY2VudGVyX3RleHQsXG4gICAgICAgICAgICAgICAgICAuLi5mc24sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENsb3VkZXJhIEZhc3QgRm9yd2FyZCBMYWJzIGlzIGFuIGFwcGxpZWQgbWFjaGluZSBsZWFybmluZ1xuICAgICAgICAgICAgICAgIHJlc2VhcmNoIGdyb3VwLiBXZSBoZWxwIG9yZ2FuaXphdGlvbnMgcmVjb2duaXplIGFuZCBkZXZlbG9wIG5ld1xuICAgICAgICAgICAgICAgIHByb2R1Y3QgYW5kIGJ1c2luZXNzIG9wcG9ydHVuaXRpZXMgdGhyb3VnaCBlbWVyZ2luZ1xuICAgICAgICAgICAgICAgIHRlY2hub2xvZ2llcy57JyAnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBwKDAsIGdyZW0gLyAyKSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAuLi5jZW50ZXJfdGV4dCxcbiAgICAgICAgICAgICAgICAgIC4uLmZzbixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNsb3VkZXJhLmNvbS9wcm9kdWN0cy9mYXN0LWZvcndhcmQtbGFicy1yZXNlYXJjaC5odG1sXCI+XG4gICAgICAgICAgICAgICAgICBMZWFybiBtb3JlIGFib3V0IHdvcmtpbmcgd2l0aCB1cy5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICA8SGQgd2lkdGg9XCIxMDAlXCIgYWxpZ249XCJ0XCIgZnM9e2ZzfSAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgICAgICAgICAgICAuLi5mc24sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkJsb2c8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBncmVtIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNsb3VkZXJhLmNvbS9wcm9kdWN0cy9mYXN0LWZvcndhcmQtbGFicy1yZXNlYXJjaC5odG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ2xvdWRlcmFcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBncmVtIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYmxvZy5mYXN0Zm9yd2FyZGxhYnMuY29tL1wiPlxuICAgICAgICAgICAgICAgICAgICAgIEFJIEV4cGVyaW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9mYXN0Zm9yd2FyZGxhYnNcIj5Ud2l0dGVyPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/fastforward/parts/Layout.js */")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
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
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
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
          lineNumber: 148
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
          lineNumber: 158
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
          lineNumber: 171
        },
        __self: this
      }, post.post_type)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginBottom: 0
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
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
          lineNumber: 186
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
          lineNumber: 201
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
          lineNumber: 212
        },
        __self: this
      }, post.author ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "by", ' ', post.author_link ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: post.author_link,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
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
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__["MDXProvider"], {
        components: components,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
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
          lineNumber: 238
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
          lineNumber: 245
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
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
          lineNumber: 265
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
          lineNumber: 273
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
          lineNumber: 287
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_14__["Hd"], {
        align: "b",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
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
          lineNumber: 303
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
          lineNumber: 311
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
          lineNumber: 325
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_14__["Hd"], {
        align: "b",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      })) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          paddingBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
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
          lineNumber: 343
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
          lineNumber: 354
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
          lineNumber: 367
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, "Learn more about working with us.")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_14__["Hd"], {
        width: "100%",
        align: "t",
        fs: fs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
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
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "/",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
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
          lineNumber: 397
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, "Cloudera")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://blog.fastforwardlabs.com/",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, "AI Experiments")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://twitter.com/fastforwardlabs",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1405458506", [fs * 3, fs * 2, grem, grem, fs * 1.5, grem, grem, fs * 1.25, grem, grem, fs * 0.75, grem / 2, grem / 2, grem / 2 + ogrem / 2, grem / 2 + ogrem / 2, grem / 2, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, "Twitter"))))))));
    }
  }]);

  return PostLayout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/***/ })

})
//# sourceMappingURL=_app.js.a7abd4ca375d0872b6f9.hot-update.js.map