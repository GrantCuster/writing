(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("kOwS"),a=n("0iUn"),i=n("sLSF"),o=n("MI3g"),s=n("a7VT"),c=n("AT/M"),l=n("Tit0"),u=n("MX0m"),f=n.n(u),d=n("8Bbg"),h=n.n(d),m=n("YFqc"),p=n.n(m),y=n("q1tI"),v=n.n(y),g=n("X8Qk"),_=n("m/Pd"),b=n.n(_),w=n("LvDl"),S=n("I6xX"),k=n("E/Ix"),x=n("ACBD"),E=function(e){function t(){return Object(a.default)(this,t),Object(o.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.pathname,r=this.props,a=r.grem,i=r.c,o=S.a.map(function(e){return e.path_name}).indexOf(n),s=o-1,c=S.a[o];S.a[s];(function e(t,n){var r=n[t-1];return void 0===r?void 0:!1!==r.external_url?e(t-1,n):r})(o,S.a);(function e(t,n){var r=n[t+1];return void 0===r?void 0:!1!==r.external_url?e(t+1,n):r})(o,S.a);var l=new Date(c.publishDate);"".concat(l.toLocaleString("en-us",{month:"short"})," ").concat((l.getDay()+1).toString().padStart(2,"0")," ").concat(l.getFullYear()),x.a;return v.a.createElement("div",{className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])},v.a.createElement(b.a,null,v.a.createElement("link",{rel:"icon",type:"image/x-icon",href:"static/images/favicon.png",className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])}),v.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css",integrity:"sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j",crossorigin:"anonymous",className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])}),v.a.createElement("title",{className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])},c.title),v.a.createElement("meta",{property:"og:title",content:c.title,className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])}),v.a.createElement("meta",{content:c.summary,className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])}),v.a.createElement("meta",{property:"og:description",content:c.summary,className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])}),v.a.createElement("meta",{property:"og:image",content:"https://writing.grantcuster.com/static/images/gray.png",className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])}),v.a.createElement("meta",{property:"og:url",content:"https://writing.grantcuster.com".concat(n),className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])}),v.a.createElement("meta",{name:"twitter:card",content:"summary_large_image",className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])})),v.a.createElement(f.a,{id:"3070679174",dynamic:[x.a,x.b,a,a,a,a,a,a]},["h1,h2,h3,h4,h5,h6{font-weight:400;font-style:normal;margin:0;font-size:".concat(x.a,"px;line-height:").concat(x.b,";margin-top:1.5rem;}"),"ol,ul{margin:0 0 0 0;list-style-position:inside;padding-left:0;text-indent:".concat(a,"px;}"),"blockquote{margin:0 0 ".concat(a,"px ").concat(a,"px;}"),".html-video-holder{margin:0 0 ".concat(a,"px 0;}"),"video{max-width:100%;}","code{padding-right:3px;background:#eaeaea;padding-left:3px;font-size:0.975em;word-break:break-word;}"]),v.a.createElement("div",{style:{maxWidth:4*i,padding:Object(g.a)(a/2,a/2,2*a,a/2),margin:"0 auto"},className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])},v.a.createElement("div",{style:{textIndent:a},className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])},c.date),v.a.createElement("div",{style:{marginBottom:a},className:f.a.dynamic([["3070679174",[x.a,x.b,a,a,a,a,a,a]]])},c.title),v.a.createElement(k.a,{components:{}},t)))}}]),t}(v.a.Component);n("SO/+");n.d(t,"default",function(){return j});var j=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(o.default)(this,Object(s.default)(t).call(this,e))).state={ww:640,wh:480,optimal:600,loaded:!1},n.setSize=n.setSize.bind(Object(c.default)(n)),n.setSize=Object(w.debounce)(n.setSize,100),n}return Object(l.default)(t,e),Object(i.default)(t,[{key:"setSize",value:function(){this.setState({ww:document.documentElement.clientWidth,wh:window.innerHeight,loaded:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.setSize),this.setSize()}},{key:"render",value:function(){var e=this.state,t=e.ww,n=e.wh,a=e.loaded,i=e.optimal,o=this.props,s=o.Component,c=o.pageProps,l=this.props.router.pathname,u=l.startsWith("/posts/"),h=x.a*x.b,m=Math.floor(t/(i/4)),y=(Math.floor(m/2),Math.round(t/m*10)/10);return v.a.createElement(d.Container,null,v.a.createElement(b.a,null,v.a.createElement("style",null,".js-no-flash { display: none }"),v.a.createElement("noscript",{className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])},v.a.createElement("style",null,".js-no-flash { display: block }"))),v.a.createElement(f.a,{id:"3523385867",dynamic:[x.a,x.a*x.b,h]},["@font-face{font-family:'Inter';font-style:normal;font-weight:400;src:url('/static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Regular.woff?v=3.5') format('woff');}","@font-face{font-family:'Inter';font-style:italic;font-weight:400;src:url('/static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Italic.woff?v=3.5') format('woff');}","@font-face{font-family:'Inter';font-style:normal;font-weight:700;src:url('/static/fonts/Inter-Bold.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Bold.woff?v=3.5') format('woff');}","@font-face{font-family:'Inter';font-style:italic;font-weight:700;src:url('/static/fonts/Inter-BoldItalic.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-BoldItalic.woff?v=3.5') format('woff');}","*{box-sizing:border-box;}","html{background:#efefef;font-family:'Inter',serif;font-size:".concat(x.a,"px;line-height:").concat(x.a*x.b,"px;text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;font-feature-settings:'ss02' 1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}"),"pre{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto;overflow-x:auto;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo, Monaco,Courier New,monospace;}","body{margin:0;}","p{margin:0 0 0 0;text-indent:".concat(h,"px;}"),"a{color:black;}"]),v.a.createElement("div",{style:{display:a?"block":null},className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])+" js-no-flash"},v.a.createElement("div",{style:{padding:h/2},className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])},v.a.createElement("div",{className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])},"Grant Custer"),v.a.createElement("div",{className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])},"Design–Code"),v.a.createElement("div",{className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])},t,"x",n),v.a.createElement("div",{style:{display:"flex",paddingLeft:h/2},className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])},v.a.createElement("div",{style:{marginRight:h/2},className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])},u?v.a.createElement(p.a,{href:"/"},v.a.createElement("a",{className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])},"Writing")):v.a.createElement("span",{className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])},"Writing")),v.a.createElement("div",{style:{marginRight:h/2},className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])},v.a.createElement("a",{href:"http://feed.grantcuster.com",className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])},"Feed")))),u?v.a.createElement(E,{pathname:l,grem:h,c:y},v.a.createElement(s,Object(r.a)({},c,{className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])+" "+(null!=c.className&&c.className||"")}))):v.a.createElement(s,Object(r.a)({},c,{grem:h,c:y,className:f.a.dynamic([["3523385867",[x.a,x.a*x.b,h]]])+" "+(null!=c.className&&c.className||"")}))))}}]),t}(h.a)},"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var r,a=n("q1tI");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,c(t).call(this,e))).prevProps={},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,a.Component),n=t,i=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return u.computeId(t,n)}).join(" ")}}],(r=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&o(n.prototype,r),i&&o(n,i),t}();t.default=f},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8oxB":function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&h())}function h(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||s(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("ln6h")),i=r(n("+oT+")),o=r(n("UXZV")),s=r(n("/HRN")),c=r(n("WaGi")),l=r(n("ZDA2")),u=r(n("/+P4")),f=r(n("N9n2")),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},h=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=d(n("q1tI")),p=h(n("lgD3")),y=n("Bu4q"),v=n("nOHt"),g=function(e){function t(){return(0,s.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"getChildContext",value:function(){return{router:v.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=w(t);return m.default.createElement(_,null,m.default.createElement(n,(0,o.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(){var e=(0,i.default)(a.default.mark(function e(t){var n,r,i;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,y.loadGetInitialProps(n,r);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(m.Component);g.childContextTypes={router:p.default.object},t.default=g;var _=function(e){function t(){return(0,s.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(m.Component);t.Container=_;var b=y.execOnce(function(){0});function w(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return b(),r},get pathname(){return b(),t},get asPath(){return b(),n},back:function(){b(),e.back()},push:function(t,n){return b(),e.push(t,n)},pushTo:function(t,n){b();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return b(),e.replace(t,n)},replaceTo:function(t,n){b();var r=n?t:null,a=n||t;return e.replace(r,a)}}}t.createUrl=w},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},MX0m:function(e,t,n){e.exports=n("3niX")},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("9kyW")),a=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i,s=t.isBrowser,c=void 0===s?"undefined"!=typeof window:s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new a.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,i;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,a=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=a.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var a=String(n),i=t+a;return e[i]||(e[i]="jsx-".concat((0,r.default)("".concat(t,"-").concat(a)))),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var a=n+r;return t[a]||(t[a]=r.replace(e,n)),t[a]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,r=e.dynamic,a=e.id;if(r){var i=this.computeId(a,r);return{styleId:i,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,n)]}}return{styleId:this.computeId(a),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&o(t.prototype,n),i&&o(t,i),e}();t.default=s},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,i=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,c=void 0===s?r:s,l=t.isBrowser,u=void 0===l?"undefined"!=typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(a(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#".concat(i,"-deleted-rule____{}"),o("boolean"==typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,s;return t=e,(i=[{key:"setOptimizeForSpeed",value:function(e){o("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(o(a(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return r||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var a=this._tags[e];o(a,"old rule at index `".concat(e,"` not found")),a.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&o(a(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-".concat(e),""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),s&&n(t,s),e}();function o(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=i}).call(this,n("8oxB"))}},[["GcxT","5d41","9da1"]]]);