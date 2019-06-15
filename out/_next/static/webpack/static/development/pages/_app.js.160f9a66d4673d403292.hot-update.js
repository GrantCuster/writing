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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, post.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        property: "og:title",
        content: post.title,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        content: post.summary,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        property: "og:description",
        content: post.summary,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        property: "og:image",
        content: "https://writing.grantcuster.com/static/images/gray.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        property: "og:url",
        content: "https://writing.grantcuster.com".concat(pathname),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary_large_image",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2149195881",
        dynamic: [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem],
        __self: this
      }, "h1,h2,h3,h4,h5,h6{font-weight:400;font-style:normal;margin:0;font-size:".concat(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], "px;line-height:").concat(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], ";margin-top:1.5rem;}ol,ul{margin:0 0 0 0;padding-left:").concat(grem, "px;list-style-position:outside;}blockquote{margin:0 0 ").concat(grem, "px ").concat(grem, "px;}.html-video-holder{margin:0 0 ").concat(grem, "px 0;}video{max-width:100%;}code{padding-right:3px;background:#eaeaea;padding-left:3px;font-size:0.975em;word-break:break-word;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy93cml0aW5nL3BhcnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRjJCLEFBUTZCLEFBU0QsQUFTMEQsQUFHN0IsQUFHN0IsQUFHRyxlQWpCMEIsQUFlOUMsQ0F4Qm9CLEVBMkJDLGdCQTFCVixHQTJCUSxNQTFCd0IsQ0FtQjNDLFVBUW9CLEtBbkJVLGFBb0JOLENBWnhCLFdBZjJDLEdBUTNDLE9Bb0JBLCtCQTNCb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy93cml0aW5nL3BhcnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHAgfSBmcm9tICcuLi9wYXJ0cy9VdGlscydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL3Bvc3RzJ1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuaW1wb3J0IHsgZm9udF9zaXplLCBsaW5lX2hlaWdodCwgZm9udF9taW4sIHNtIH0gZnJvbSAnLi4vcGFydHMvU3RhdGljJ1xuXG5sZXQgb2ZzID0gMTZcblxuZXhwb3J0IGNsYXNzIFBvc3RMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4sIHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IHsgZ3JlbSwgYyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHBvc3RfaW5kZXggPSBwb3N0cy5tYXAocCA9PiBwLnBhdGhfbmFtZSkuaW5kZXhPZihwYXRobmFtZSlcbiAgICBsZXQgcHJldl9pbmRleCA9IHBvc3RfaW5kZXggLSAxXG4gICAgbGV0IHBvc3QgPSBwb3N0c1twb3N0X2luZGV4XVxuICAgIGxldCBwcmV2X3Bvc3QgPSBwb3N0c1twcmV2X2luZGV4XVxuXG4gICAgbGV0IGNvbXBvbmVudHMgPSB7fVxuXG4gICAgZnVuY3Rpb24gZ2V0TmV3ZXJQb3N0KGluZGV4LCBwb3N0cykge1xuICAgICAgbGV0IG5leHRfdHJ5ID0gcG9zdHNbaW5kZXggLSAxXVxuICAgICAgaWYgKG5leHRfdHJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5leHRfdHJ5LmV4dGVybmFsX3VybCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0TmV3ZXJQb3N0KGluZGV4IC0gMSwgcG9zdHMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5leHRfdHJ5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbmV3ZXJfcG9zdCA9IGdldE5ld2VyUG9zdChwb3N0X2luZGV4LCBwb3N0cylcblxuICAgIGZ1bmN0aW9uIGdldE9sZGVyUG9zdChpbmRleCwgcG9zdHMpIHtcbiAgICAgIGxldCBuZXh0X3RyeSA9IHBvc3RzW2luZGV4ICsgMV1cbiAgICAgIGlmIChuZXh0X3RyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXh0X3RyeS5leHRlcm5hbF91cmwgIT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGdldE9sZGVyUG9zdChpbmRleCArIDEsIHBvc3RzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXh0X3RyeVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG9sZGVyX3Bvc3QgPSBnZXRPbGRlclBvc3QocG9zdF9pbmRleCwgcG9zdHMpXG5cbiAgICBsZXQgcG9zdF9kYXRlID0gbmV3IERhdGUocG9zdC5wdWJsaXNoRGF0ZSlcbiAgICBsZXQgcHVibGlzaGVkX2RhdGUgPSBgJHtwb3N0X2RhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge1xuICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgfSl9ICR7KHBvc3RfZGF0ZS5nZXREYXkoKSArIDEpXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnBhZFN0YXJ0KDIsICcwJyl9ICR7cG9zdF9kYXRlLmdldEZ1bGxZZWFyKCl9YFxuXG4gICAgbGV0IGZzID0gZm9udF9zaXplXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgICAgdHlwZT1cImltYWdlL3gtaWNvblwiXG4gICAgICAgICAgICBocmVmPVwic3RhdGljL2ltYWdlcy9mYXZpY29uLnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9rYXRleEAwLjEwLjIvZGlzdC9rYXRleC5taW4uY3NzXCJcbiAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC15RlJ0TU1EblF0RFJPOHJMcE1JS3J0UENENWpka3RhbzJUVjE5WWlaWVdNRGtVUjVHUVpSL05PVlRkcXVFeDFqXCJcbiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwb3N0LnRpdGxlfSAvPlxuICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e3Bvc3Quc3VtbWFyeX0gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5zdW1tYXJ5fSAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3dyaXRpbmcuZ3JhbnRjdXN0ZXIuY29tL3N0YXRpYy9pbWFnZXMvZ3JheS5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL3dyaXRpbmcuZ3JhbnRjdXN0ZXIuY29tJHtwYXRobmFtZX1gfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaDEsXG4gICAgICAgICAgaDIsXG4gICAgICAgICAgaDMsXG4gICAgICAgICAgaDQsXG4gICAgICAgICAgaDUsXG4gICAgICAgICAgaDYge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250X3NpemV9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHtsaW5lX2hlaWdodH07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgb2wsXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAwO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAke2dyZW19cHg7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvbCBsaSxcbiAgICAgICAgICB1bCBsaSB7XG4gICAgICAgICAgICAvLyB0ZXh0LWluZGVudDogJHtncmVtfXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBibG9ja3F1b3RlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwICR7Z3JlbX1weCAke2dyZW19cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5odG1sLXZpZGVvLWhvbGRlciB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAke2dyZW19cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmlkZW8ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NzVlbTtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWF4V2lkdGg6IGMgKiA0LFxuICAgICAgICAgICAgcGFkZGluZzogcChncmVtIC8gMiwgZ3JlbSAvIDIsIGdyZW0gKiAyLCBncmVtIC8gMiksXG4gICAgICAgICAgICBtYXJnaW46IGAwIGF1dG9gLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSB9fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhPldyaXRpbmc8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gfX0+e3Bvc3QudGl0bGV9PC9kaXY+XG4gICAgICAgICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9PntjaGlsZHJlbn08L01EWFByb3ZpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/writing/parts/Layout.js */")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          maxWidth: c * 4,
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_7__["p"])(grem / 2, grem / 2, grem * 2, grem / 2),
          margin: "0 auto"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Writing"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2149195881", [_parts_Static__WEBPACK_IMPORTED_MODULE_13__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_13__["line_height"], grem, grem, grem, grem, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, post.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__["MDXProvider"], {
        components: components,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, children)));
    }
  }]);

  return PostLayout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/***/ })

})
//# sourceMappingURL=_app.js.160f9a66d4673d403292.hot-update.js.map