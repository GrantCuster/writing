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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/Utils */ "./parts/Utils.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../posts */ "./posts.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");





var _jsxFileName = "/Users/grant.custer/Sites/ffgrids/writing/parts/Layout.js";









var ofs = 16;
var PostLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PostLayout, _React$Component);

  function PostLayout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostLayout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostLayout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          pathname = _this$props.pathname;
      var _this$props2 = this.props,
          grem = _this$props2.grem,
          c = _this$props2.c;
      var post_index = _posts__WEBPACK_IMPORTED_MODULE_11__["default"].map(function (p) {
        return p.path_name;
      }).indexOf(pathname);
      var prev_index = post_index - 1;
      var post = _posts__WEBPACK_IMPORTED_MODULE_11__["default"][post_index];
      var prev_post = _posts__WEBPACK_IMPORTED_MODULE_11__["default"][prev_index];
      var components = {};

      function getNewerPost(index, posts) {
        var next_try = posts[index - 1];

        if (next_try === undefined) {
          return undefined;
        } else {
          if (next_try.external_url !== false) {
            return getNewerPost(index - 1, posts);
          } else {
            return next_try;
          }
        }
      }

      var newer_post = getNewerPost(post_index, _posts__WEBPACK_IMPORTED_MODULE_11__["default"]);

      function getOlderPost(index, posts) {
        var next_try = posts[index + 1];

        if (next_try === undefined) {
          return undefined;
        } else {
          if (next_try.external_url !== false) {
            return getOlderPost(index + 1, posts);
          } else {
            return next_try;
          }
        }
      }

      var older_post = getOlderPost(post_index, _posts__WEBPACK_IMPORTED_MODULE_11__["default"]);
      var post_date = new Date(post.publishDate);
      var published_date = "".concat(post_date.toLocaleString('en-us', {
        month: 'short'
      }), " ").concat((post_date.getDay() + 1).toString().padStart(2, '0'), " ").concat(post_date.getFullYear());
      var fs = _parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "static/images/favicon.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css",
        integrity: "sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j",
        crossorigin: "anonymous",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, post.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        property: "og:title",
        content: post.title,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        content: post.summary,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        property: "og:description",
        content: post.summary,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        property: "og:image",
        content: "https://writing.grantcuster.com/static/images/gray.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        property: "og:url",
        content: "https://writing.grantcuster.com".concat(pathname),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary_large_image",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3070679174",
        dynamic: [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem],
        __self: this
      }, "h1,h2,h3,h4,h5,h6{font-weight:400;font-style:normal;margin:0;font-size:".concat(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], "px;line-height:").concat(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], ";margin-top:1.5rem;}ol,ul{margin:0 0 0 0;list-style-position:inside;padding-left:0;text-indent:").concat(grem, "px;}blockquote{margin:0 0 ").concat(grem, "px ").concat(grem, "px;}.html-video-holder{margin:0 0 ").concat(grem, "px 0;}video{max-width:100%;}code{padding-right:3px;background:#eaeaea;padding-left:3px;font-size:0.975em;word-break:break-word;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy93cml0aW5nL3BhcnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRjJCLEFBUTZCLEFBU0QsQUFXMEQsQUFHN0IsQUFHN0IsQUFHRyxlQWxCUyxBQWdCN0IsQ0ExQm9CLEVBNkJDLGdCQTVCVixHQTZCUSxLQW5CRixDQVQwQixDQXFCM0MsVUFRb0IsR0FuQnlCLGVBb0JyQixDQVp4QixXQWpCMkMsVUE4QjNDLE1BcEJBLHlCQVRvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9mZmdyaWRzL3dyaXRpbmcvcGFydHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcCB9IGZyb20gJy4uL3BhcnRzL1V0aWxzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgcG9zdHMgZnJvbSAnLi4vcG9zdHMnXG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5pbXBvcnQgeyBmb250X3NpemUsIGxpbmVfaGVpZ2h0LCBmb250X21pbiwgc20gfSBmcm9tICcuLi9wYXJ0cy9TdGF0aWMnXG5cbmxldCBvZnMgPSAxNlxuXG5leHBvcnQgY2xhc3MgUG9zdExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiwgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgeyBncmVtLCBjIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgcG9zdF9pbmRleCA9IHBvc3RzLm1hcChwID0+IHAucGF0aF9uYW1lKS5pbmRleE9mKHBhdGhuYW1lKVxuICAgIGxldCBwcmV2X2luZGV4ID0gcG9zdF9pbmRleCAtIDFcbiAgICBsZXQgcG9zdCA9IHBvc3RzW3Bvc3RfaW5kZXhdXG4gICAgbGV0IHByZXZfcG9zdCA9IHBvc3RzW3ByZXZfaW5kZXhdXG5cbiAgICBsZXQgY29tcG9uZW50cyA9IHt9XG5cbiAgICBmdW5jdGlvbiBnZXROZXdlclBvc3QoaW5kZXgsIHBvc3RzKSB7XG4gICAgICBsZXQgbmV4dF90cnkgPSBwb3N0c1tpbmRleCAtIDFdXG4gICAgICBpZiAobmV4dF90cnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmV4dF90cnkuZXh0ZXJuYWxfdXJsICE9PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBnZXROZXdlclBvc3QoaW5kZXggLSAxLCBwb3N0cylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV4dF90cnlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBuZXdlcl9wb3N0ID0gZ2V0TmV3ZXJQb3N0KHBvc3RfaW5kZXgsIHBvc3RzKVxuXG4gICAgZnVuY3Rpb24gZ2V0T2xkZXJQb3N0KGluZGV4LCBwb3N0cykge1xuICAgICAgbGV0IG5leHRfdHJ5ID0gcG9zdHNbaW5kZXggKyAxXVxuICAgICAgaWYgKG5leHRfdHJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5leHRfdHJ5LmV4dGVybmFsX3VybCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0T2xkZXJQb3N0KGluZGV4ICsgMSwgcG9zdHMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5leHRfdHJ5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgb2xkZXJfcG9zdCA9IGdldE9sZGVyUG9zdChwb3N0X2luZGV4LCBwb3N0cylcblxuICAgIGxldCBwb3N0X2RhdGUgPSBuZXcgRGF0ZShwb3N0LnB1Ymxpc2hEYXRlKVxuICAgIGxldCBwdWJsaXNoZWRfZGF0ZSA9IGAke3Bvc3RfZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7XG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICB9KX0gJHsocG9zdF9kYXRlLmdldERheSgpICsgMSlcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAucGFkU3RhcnQoMiwgJzAnKX0gJHtwb3N0X2RhdGUuZ2V0RnVsbFllYXIoKX1gXG5cbiAgICBsZXQgZnMgPSBmb250X3NpemVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcbiAgICAgICAgICAgIGhyZWY9XCJzdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2thdGV4QDAuMTAuMi9kaXN0L2thdGV4Lm1pbi5jc3NcIlxuICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LXlGUnRNTURuUXREUk84ckxwTUlLcnRQQ0Q1amRrdGFvMlRWMTlZaVpZV01Ea1VSNUdRWlIvTk9WVGRxdUV4MWpcIlxuICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Bvc3QudGl0bGV9IC8+XG4gICAgICAgICAgPG1ldGEgY29udGVudD17cG9zdC5zdW1tYXJ5fSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0LnN1bW1hcnl9IC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgICAgY29udGVudD1cImh0dHBzOi8vd3JpdGluZy5ncmFudGN1c3Rlci5jb20vc3RhdGljL2ltYWdlcy9ncmF5LnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgICAgY29udGVudD17YGh0dHBzOi8vd3JpdGluZy5ncmFudGN1c3Rlci5jb20ke3BhdGhuYW1lfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBoMSxcbiAgICAgICAgICBoMixcbiAgICAgICAgICBoMyxcbiAgICAgICAgICBoNCxcbiAgICAgICAgICBoNSxcbiAgICAgICAgICBoNiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRfc2l6ZX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2xpbmVfaGVpZ2h0fTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICBvbCxcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDA7XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6ICR7Z3JlbX1weDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAke2dyZW19cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9sIGxpLFxuICAgICAgICAgIHVsIGxpIHtcbiAgICAgICAgICAgIC8vIHRleHQtaW5kZW50OiAke2dyZW19cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJsb2NrcXVvdGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgJHtncmVtfXB4ICR7Z3JlbX1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmh0bWwtdmlkZW8taG9sZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwICR7Z3JlbX1weCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2aWRlbyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjk3NWVtO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXhXaWR0aDogYyAqIDQsXG4gICAgICAgICAgICBwYWRkaW5nOiBwKGdyZW0gLyAyLCBncmVtIC8gMiwgZ3JlbSAvIDIsIGdyZW0gLyAyKSxcbiAgICAgICAgICAgIG1hcmdpbjogYDAgYXV0b2AsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEluZGVudDogZ3JlbSB9fT57cG9zdC5kYXRlLnJlcGxhY2UoLy0vZywgJy8nKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSB9fT57cG9zdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17Y29tcG9uZW50c30+e2NoaWxkcmVufTwvTURYUHJvdmlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/writing/parts/Layout.js */")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          maxWidth: c * 4,
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_7__["p"])(grem / 2, grem / 2, grem / 2, grem / 2),
          margin: "0 auto"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          textIndent: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, post.date.replace(/-/g, '/')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3070679174", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, post.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__["MDXProvider"], {
        components: components,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, children)));
    }
  }]);

  return PostLayout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/***/ })

})
//# sourceMappingURL=_app.js.5f015807492ea71508fd.hot-update.js.map