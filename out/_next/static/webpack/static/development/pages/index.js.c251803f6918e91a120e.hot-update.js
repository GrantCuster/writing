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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _parts_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parts/Header */ "./parts/Header.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_Utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/Utils */ "./parts/Utils.js");
/* harmony import */ var _parts_Dividers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/Dividers */ "./parts/Dividers.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../posts */ "./posts.js");
/* harmony import */ var _parts_PostPreview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../parts/PostPreview */ "./parts/PostPreview.js");







var _jsxFileName = "/Users/grant.custer/Sites/ffgrids/fastforward/pages/index.js";











var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));
    _this.state = {
      ww: 0,
      optimal: null,
      grid_canvas: null,
      mode: 'light',
      grid: 'hide',
      showing_posts: 25
    };
    _this.setSize = _this.setSize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.setSize = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["debounce"])(_this.setSize, 100);
    _this.setActivePost = _this.setActivePost.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "setSize",
    value: function setSize() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      ctx.font = "normal ".concat(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], "px Inter");
      var width = ctx.measureText('thousand writers. With over a million people from various fields working').width;
      this.setState({
        ww: window.innerWidth,
        wh: window.innerHeight,
        optimal: width + _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"] // optimal: 633.50244140625,

      }, function () {});
    }
  }, {
    key: "setActivePost",
    value: function setActivePost(index) {
      this.setState({
        active_post: index
      });
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
      var _this2 = this;

      var _this$state = this.state,
          ww = _this$state.ww,
          wh = _this$state.wh,
          optimal = _this$state.optimal,
          mode = _this$state.mode,
          grid = _this$state.grid,
          grid_canvas = _this$state.grid_canvas,
          showing_posts = _this$state.showing_posts;
      var _this$props = this.props,
          grem = _this$props.grem,
          ogrem = _this$props.ogrem,
          center_text = _this$props.center_text,
          afs = _this$props.afs,
          fsn = _this$props.fsn,
          fs = _this$props.fs,
          columns = _this$props.columns;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "static/images/favicon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Blog \u2013 Cloudera Fast Forward"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        property: "og:title",
        content: "Experiments - Cloudera Fast Forward",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), "property=\"description\"", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        content: "Machine learning visualizations and code by Cloudera Fast Forward.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        property: "og:description",
        content: "Machine learning visualizations and code by Cloudera Fast Forward.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        property: "og:image",
        content: "https://experiments.fastforwardlabs.com/static/images/experiments-share.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        property: "og:url",
        content: "https://experiments.fastforwardlabs.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary_large_image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_13__["p"])(grem / 4, ogrem / 2)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, center_text, {
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_13__["p"])(grem / 4, grem / 2),
          fontSize: afs * 3,
          lineHeight: 1.25,
          position: 'relative'
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Blog"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_13__["p"])(grem / 4, grem / 2)
        }, center_text, fsn),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Posts on machine learning and other emerging technologies by", ' ', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Cloudera Fast Forward Labs"), "."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_13__["p"])(grem / 2, 0, grem, 0)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, _posts__WEBPACK_IMPORTED_MODULE_15__["default"].filter(function (post) {
        return post.published === true;
      }).slice(0, showing_posts).map(function (post, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_PostPreview__WEBPACK_IMPORTED_MODULE_16__["default"], {
          key: post.title,
          post: post,
          grem: grem,
          ww: ww,
          fs: fs,
          ogrem: ogrem,
          columns: columns,
          column_width: column_width,
          extra_left: ogrem / 2 + offset,
          extra_right: ogrem / 2 + offset,
          adjust_left: -ogrem / 2,
          adjust_right: -ogrem / 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        });
      }), showing_posts < _posts__WEBPACK_IMPORTED_MODULE_15__["default"].length ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "gray-backer",
        onClick: function onClick() {
          _this2.setState({
            showing_posts: showing_posts + 25
          });
        },
        style: {
          display: 'block',
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          paddingLeft: ogrem / 2 + (columns > 4 ? (columns - 4) / 2 * column_width : 0) + offset + grem / 2,
          fontSize: fs * 1,
          lineHeight: 1.5,
          marginLeft: -ogrem / 2,
          marginRight: -ogrem / 2,
          position: 'relative',
          fontFamily: 'inherit',
          border: 'none',
          width: '100vw',
          cursor: 'pointer',
          textDecoration: 'underline',
          textAlign: 'left'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Load more posts", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_14__["Hd"], {
        align: "t",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginLeft: -ogrem / 2,
          marginRight: -ogrem / 2,
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_14__["Hd"], {
        align: "b",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_13__["p"])(0, 0),
          marginBottom: grem * 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          fontSize: fs * 2,
          lineHeight: 1.25,
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_13__["p"])(grem / 4, grem / 2)
        }, center_text),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_13__["p"])(grem / 4, grem / 2)
        }, center_text, fsn),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Cloudera Fast Forward Labs is an applied machine learning research group. We help organizations recognize and develop new product and business opportunities through emerging technologies.", ' '), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_13__["p"])(grem / 4, grem / 2)
        }, center_text, fsn),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "Learn more about working with us.")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Dividers__WEBPACK_IMPORTED_MODULE_14__["Hd"], {
        width: "100%",
        align: "t",
        fs: fs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          padding: grem / 2,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }, fsn),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Cloudera Fast Forward Labs"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Cloudera")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://blog.fastforwardlabs.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://twitter.com/fastforwardlabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "Twitter"))))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c251803f6918e91a120e.hot-update.js.map