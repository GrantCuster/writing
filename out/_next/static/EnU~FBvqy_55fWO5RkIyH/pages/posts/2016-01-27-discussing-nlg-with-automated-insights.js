(window.webpackJsonp=window.webpackJsonp||[]).push([["ff74"],{"+SFK":function(t,e,n){n("AUvm"),n("wgeU"),n("adOz"),n("dl0q"),t.exports=n("WEpk").Symbol},"+plK":function(t,e,n){n("ApPD"),t.exports=n("WEpk").Object.getPrototypeOf},"0iUn":function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.r(e),n.d(e,"default",function(){return o})},"2Nb0":function(t,e,n){n("FlQf"),n("bBy9"),t.exports=n("zLkG").f("iterator")},"3GJH":function(t,e,n){n("lCc8");var o=n("WEpk").Object;t.exports=function(t,e){return o.create(t,e)}},"6tYh":function(t,e,n){var o=n("93I4"),r=n("5K7Z"),i=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n("2GTP")(Function.call,n("vwuL").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},"AT/M":function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.r(e),n.d(e,"default",function(){return o})},ApPD:function(t,e,n){var o=n("JB68"),r=n("U+KD");n("zn7N")("getPrototypeOf",function(){return function(t){return r(o(t))}})},Bhuq:function(t,e,n){t.exports=n("+plK")},FlQf:function(t,e,n){"use strict";var o=n("ccE7")(!0);n("MPFp")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},Hfiw:function(t,e,n){var o=n("Y7ZC");o(o.S,"Object",{setPrototypeOf:n("6tYh").set})},JbBM:function(t,e,n){n("Hfiw"),t.exports=n("WEpk").Object.setPrototypeOf},L0Rl:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",function(){return s}),n.d(e,"default",function(){return f});var o=n("kOwS"),r=n("qNsG"),i=(n("q1tI"),n("E/Ix")),u=n("Xj0z"),s={title:"Discussing NLG with Automated Insights",date:new Date("2016-01-27T16:36:33.000Z"),tags:["webinar","announcement","language generation"],layout:"post",redirect_from:["/post/138157023778/discussing-nlg-with-automated-insights"],preview_image:"http://imgur.com/PihF0QE.png"},a={frontMatter:s},c="wrapper";function f(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(i.b)(c,Object(o.a)({},a,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("p",null,"On January 26, we co-hosted an online discussion with Robbie Allen, the founder and CEO of natural language generation software provider ",Object(i.b)("a",{href:"https://automatedinsights.com/"},"Automated Insights"),". You may know them as the company behind Yahoo! fantasy football reports and the Associated Press’s ",Object(i.b)("a",{href:"http://www.theverge.com/2015/10/20/9572975/automated-insights-wordsmith-natural-language"},"automated company earning statements"),". Their latest release of Wordsmith allows non-technical business to define template language with less overhead from IT and professional service teams. "),Object(i.b)("p",null,"The webinar covers how NLG works, how different industries verticals are applying the technology, how users engage with Wordsmith, and where we suspect NLG will go in the near future. "),Object(i.b)("p",null,"Check it out, and let us know if you have questions about ",Object(i.b)("a",{href:"https://clients.fastforwardlabs.com/nlg.html"},"our NLG resources"),"!")),Object(i.b)(u.a,{src:"https://www.youtube.com/embed/2RralvQIdQQ?feature=oembed&enablejsapi=1&origin=https://safe.txmblr.com&wmode=opaque",mdxType:"VideoHolder"}))}f.isMDXComponent=!0},MI3g:function(t,e,n){"use strict";n.r(e);var o=n("XVgq"),r=n.n(o),i=n("Z7t5"),u=n.n(i);function s(t){return(s="function"==typeof u.a&&"symbol"==typeof r.a?function(t){return typeof t}:function(t){return t&&"function"==typeof u.a&&t.constructor===u.a&&t!==u.a.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"==typeof u.a&&"symbol"===s(r.a)?function(t){return s(t)}:function(t){return t&&"function"==typeof u.a&&t.constructor===u.a&&t!==u.a.prototype?"symbol":s(t)})(t)}var c=n("AT/M");function f(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?Object(c.default)(t):e}n.d(e,"default",function(){return f})},MPFp:function(t,e,n){"use strict";var o=n("uOPS"),r=n("Y7ZC"),i=n("kTiW"),u=n("NegM"),s=n("SBuE"),a=n("j2DC"),c=n("RfKB"),f=n("U+KD"),l=n("UWiX")("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,y,b,g){a(n,e,d);var m,w,v,O=function(t){if(!p&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",_="values"==y,j=!1,L=t.prototype,T=L[l]||L["@@iterator"]||y&&L[y],x=T||O(y),k=y?_?O("entries"):x:void 0,M="Array"==e&&L.entries||T;if(M&&(v=f(M.call(new t)))!==Object.prototype&&v.next&&(c(v,S,!0),o||"function"==typeof v[l]||u(v,l,h)),_&&T&&"values"!==T.name&&(j=!0,x=function(){return T.call(this)}),o&&!g||!p&&!j&&L[l]||u(L,l,x),s[e]=x,s[S]=h,y)if(m={values:_?x:O("values"),keys:b?x:O("keys"),entries:k},g)for(w in m)w in L||i(L,w,m[w]);else r(r.P+r.F*(p||j),e,m);return m}},"RU/L":function(t,e,n){n("Rqdy");var o=n("WEpk").Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},Rqdy:function(t,e,n){var o=n("Y7ZC");o(o.S+o.F*!n("jmDH"),"Object",{defineProperty:n("2faE").f})},SBuE:function(t,e){t.exports={}},SqZg:function(t,e,n){t.exports=n("3GJH")},TRZx:function(t,e,n){t.exports=n("JbBM")},Tit0:function(t,e,n){"use strict";n.r(e);var o=n("SqZg"),r=n.n(o),i=n("TRZx"),u=n.n(i);function s(t,e){return(s=u.a||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=r()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}n.d(e,"default",function(){return a})},"U+KD":function(t,e,n){var o=n("B+OT"),r=n("JB68"),i=n("VVlx")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},UO39:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},XVgq:function(t,e,n){t.exports=n("2Nb0")},Xj0z:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var o=n("0iUn"),r=n("sLSF"),i=n("MI3g"),u=n("a7VT"),s=n("Tit0"),a=n("q1tI"),c=n.n(a),f=function(t){function e(){return Object(o.default)(this,e),Object(i.default)(this,Object(u.default)(e).apply(this,arguments))}return Object(s.default)(e,t),Object(r.default)(e,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return c.a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",paddingTop:25,height:0,marginBottom:"1.5em"}},c.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:this.props.src,frameborder:"0",allowfullscreen:!0,autoplay:!!this.props.giffify,loop:!!this.props.giffify}))}}]),e}(c.a.Component)},Z7t5:function(t,e,n){t.exports=n("+SFK")},a7VT:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s});var o=n("Bhuq"),r=n.n(o),i=n("TRZx"),u=n.n(i);function s(t){return(s=u.a?r.a:function(t){return t.__proto__||r()(t)})(t)}},adOz:function(t,e,n){n("Zxgi")("asyncIterator")},bBy9:function(t,e,n){n("w2d+");for(var o=n("5T2Y"),r=n("NegM"),i=n("SBuE"),u=n("UWiX")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<s.length;a++){var c=s[a],f=o[c],l=f&&f.prototype;l&&!l[u]&&r(l,u,c),i[c]=i.Array}},ccE7:function(t,e,n){var o=n("Ojgd"),r=n("Jes0");t.exports=function(t){return function(e,n){var i,u,s=String(r(e)),a=o(n),c=s.length;return a<0||a>=c?t?"":void 0:(i=s.charCodeAt(a))<55296||i>56319||a+1===c||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},dl0q:function(t,e,n){n("Zxgi")("observable")},hDam:function(t,e){t.exports=function(){}},hfKm:function(t,e,n){t.exports=n("RU/L")},j2DC:function(t,e,n){"use strict";var o=n("oVml"),r=n("rr1i"),i=n("RfKB"),u={};n("NegM")(u,n("UWiX")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(u,{next:r(1,n)}),i(t,e+" Iterator")}},lCc8:function(t,e,n){var o=n("Y7ZC");o(o.S,"Object",{create:n("oVml")})},sLSF:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return u});var o=n("hfKm"),r=n.n(o);function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r()(t,o.key,o)}}function u(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},twjA:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2016-01-27-discussing-nlg-with-automated-insights",function(){var t=n("L0Rl");return{page:t.default||t}}])},"w2d+":function(t,e,n){"use strict";var o=n("hDam"),r=n("UO39"),i=n("SBuE"),u=n("NsO/");t.exports=n("MPFp")(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},wgeU:function(t,e){}},[["twjA","5d41","9da1"]]]);