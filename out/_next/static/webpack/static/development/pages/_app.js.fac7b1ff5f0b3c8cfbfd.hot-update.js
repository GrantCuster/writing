webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/bowser/es5.js":
/*!************************************!*\
  !*** ./node_modules/bowser/es5.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=86)}({17:function(e,t,r){var n,i,s;i=[],void 0===(s="function"==typeof(n=function(){"use strict";function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r=e,i=[{key:"getFirstMatch",value:function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""}},{key:"getSecondMatch",value:function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""}},{key:"matchAndReturnConst",value:function(e,t,r){if(e.test(t))return r}},{key:"getWindowsVersionName",value:function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}},{key:"getAndroidVersionName",value:function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0});if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":void 0}},{key:"getVersionPrecision",value:function(e){return e.split(".").length}},{key:"compareVersions",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),o=Math.max(i,s),a=0,u=e.map([t,r],function(t){var r=o-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});for(n&&(a=o-Math.min(i,s)),o-=1;o>=a;){if(u[0][o]>u[1][o])return 1;if(u[0][o]===u[1][o]){if(o===a)return 0;o-=1}else if(u[0][o]<u[1][o])return-1}}},{key:"map",value:function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n}}],(n=null)&&t(r.prototype,n),i&&t(r,i),e;var r,n,i}();e.exports=r})?n.apply(t,i):n)||(e.exports=s)},86:function(e,t,r){var n,i,s;i=[t,r(87)],void 0===(s="function"==typeof(n=function(r,n){"use strict";function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n=(s=n)&&s.__esModule?s:{default:s};var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return t=e,s=[{key:"getParser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("string"!=typeof e)throw new Error("UserAgent should be a string");return new n.default(e,t)}},{key:"parse",value:function(e){return new n.default(e).getResult()}}],(r=null)&&i(t.prototype,r),s&&i(t,s),e;var t,r,s}();r.default=o,e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)},87:function(e,t,r){var n,i,s;i=[t,r(88),r(89),r(90),r(91),r(17)],void 0===(s="function"==typeof(n=function(r,n,i,s,o,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n=u(n),i=u(i),s=u(s),o=u(o);var f=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},!0!==r&&this.parse()}return t=e,(r=[{key:"getUA",value:function(){return this._ua}},{key:"test",value:function(e){return e.test(this._ua)}},{key:"parseBrowser",value:function(){var e=this;this.parsedResult.browser={};var t=n.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}},{key:"getBrowser",value:function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}},{key:"getBrowserName",value:function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}},{key:"getBrowserVersion",value:function(){return this.getBrowser().version}},{key:"getOS",value:function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}},{key:"parseOS",value:function(){var e=this;this.parsedResult.os={};var t=i.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}},{key:"getOSName",value:function(e){var t=this.getOS(),r=t.name;return e?String(r).toLowerCase()||"":r||""}},{key:"getOSVersion",value:function(){return this.getOS().version}},{key:"getPlatform",value:function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}},{key:"getPlatformType",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.getPlatform(),r=t.type;return e?String(r).toLowerCase()||"":r||""}},{key:"parsePlatform",value:function(){var e=this;this.parsedResult.platform={};var t=s.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}},{key:"getEngine",value:function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}},{key:"getEngineName",value:function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}},{key:"parseEngine",value:function(){var e=this;this.parsedResult.engine={};var t=o.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}},{key:"parse",value:function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}},{key:"getResult",value:function(){return Object.assign({},this.parsedResult)}},{key:"satisfies",value:function(e){var t=this,r={},n=0,i={},s=0,o=Object.keys(e);if(o.forEach(function(t){var o=e[t];"string"==typeof o?(i[t]=o,s+=1):"object"===c(o)&&(r[t]=o,n+=1)}),n>0){var a=Object.keys(r),u=a.find(function(e){return t.isOS(e)});if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var f=a.find(function(e){return t.isPlatform(e)});if(f){var l=this.satisfies(r[f]);if(void 0!==l)return l}}if(s>0){var v=Object.keys(i),p=v.find(function(e){return t.isBrowser(e)});if(void 0!==p)return this.compareVersion(i[p])}}},{key:"isBrowser",value:function(e){return this.getBrowserName(!0)===String(e).toLowerCase()}},{key:"compareVersion",value:function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf((0,a.compareVersions)(i,r,n))>-1}},{key:"isOS",value:function(e){return this.getOSName(!0)===String(e).toLowerCase()}},{key:"isPlatform",value:function(e){return this.getPlatformType(!0)===String(e).toLowerCase()}},{key:"isEngine",value:function(e){return this.getEngineName(!0)===String(e).toLowerCase()}},{key:"is",value:function(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)}},{key:"some",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.some(function(t){return e.is(t)})}}])&&d(t.prototype,r),u&&d(t,u),e;var t,r,u}();r.default=f,e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)},88:function(e,t,r){var n,i,s;i=[t,r(17)],void 0===(s="function"==typeof(n=function(r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=/version\/(\d+(\.?_?\d+)+)/i,s=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=(0,n.getFirstMatch)(/googlebot\/(\d+(\.\d+))/i,e)||(0,n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/(?:opera)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=(0,n.getFirstMatch)(/(?:opr|opios)[\s\/](\S+)/i,e)||(0,n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/(?:SamsungBrowser)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=(0,n.getFirstMatch)(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i,e)||(0,n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=(0,n.getFirstMatch)(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i,e)||(0,n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=(0,n.getFirstMatch)(/(?:swing)[\s\/](\d+(?:\.\d+)+)/i,e)||(0,n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/(?:coast)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/(?:yabrowser)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/(?:ucbrowser)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/(?:Maxthon|mxios)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/(?:epiphany)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/(?:puffin)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/(?:sleipnir)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/(?:k-meleon)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=(0,n.getFirstMatch)(/(?:micromessenger)[\s\/](\d+(\.?_?\d+)+)/i,e)||(0,n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=(0,n.getFirstMatch)(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=(0,n.getSecondMatch)(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=(0,n.getFirstMatch)(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=(0,n.getFirstMatch)(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=(0,n.getFirstMatch)(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=(0,n.getFirstMatch)(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=(0,n.getFirstMatch)(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=(0,n.getFirstMatch)(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=(0,n.getFirstMatch)(i,e)||(0,n.getFirstMatch)(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=(0,n.getFirstMatch)(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=(0,n.getFirstMatch)(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||(0,n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=(0,n.getFirstMatch)(/(?:qupzilla)[\s\/](\d+(\.?_?\d+)+)/i,e)||(0,n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=(0,n.getFirstMatch)(/(?:firefox|iceweasel|fxios)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=(0,n.getFirstMatch)(/(?:chromium)[\s\/](\d+(\.?_?\d+)+)/i,e)||(0,n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=(0,n.getFirstMatch)(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=(0,n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=(0,n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){return{name:(0,n.getFirstMatch)(/^(.*)\/(.*) /,e),version:(0,n.getSecondMatch)(/^(.*)\/(.*) /,e)}}}];r.default=s,e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)},89:function(e,t,r){var n,i,s;i=[t,r(17)],void 0===(s="function"==typeof(n=function(r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=[{test:[/windows phone/i],describe:function(e){var t=(0,n.getFirstMatch)(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:"Windows Phone",version:t}}},{test:[/windows/i],describe:function(e){var t=(0,n.getFirstMatch)(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=(0,n.getWindowsVersionName)(t);return{name:"Windows",version:t,versionName:r}}},{test:[/macintosh/i],describe:function(e){var t=(0,n.getFirstMatch)(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,".");return{name:"macOS",version:t}}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=(0,n.getFirstMatch)(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:"iOS",version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=(0,n.getFirstMatch)(/android[\s\/-](\d+(\.\d+)*)/i,e),r=(0,n.getAndroidVersionName)(t),i={name:"Android",version:t};return r&&(i.versionName=r),i}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=(0,n.getFirstMatch)(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:"WebOS"};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=(0,n.getFirstMatch)(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||(0,n.getFirstMatch)(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||(0,n.getFirstMatch)(/\bbb(\d+)/i,e);return{name:"BlackBerry",version:t}}},{test:[/bada/i],describe:function(e){var t=(0,n.getFirstMatch)(/bada\/(\d+(\.\d+)*)/i,e);return{name:"Bada",version:t}}},{test:[/tizen/i],describe:function(e){var t=(0,n.getFirstMatch)(/tizen[\/\s](\d+(\.\d+)*)/i,e);return{name:"Tizen",version:t}}},{test:[/linux/i],describe:function(){return{name:"Linux"}}},{test:[/CrOS/],describe:function(){return{name:"Chrome OS"}}}];r.default=i,e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)},90:function(e,t,r){var n,i,s;i=[t,r(17)],void 0===(s="function"==typeof(n=function(r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i={tablet:"tablet",mobile:"mobile",desktop:"desktop"},s=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=(0,n.getFirstMatch)(/(can-l01)/i,e)&&"Nova",r={type:i.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:i.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:i.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:i.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:i.tablet,vendor:"Amazon"}}},{test:[/tablet/i],describe:function(){return{type:i.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=(0,n.getFirstMatch)(/(ipod|iphone)/i,e);return{type:i.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:i.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:i.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:i.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:i.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:i.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:i.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:i.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:i.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:i.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:i.desktop}}}];r.default=s,e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)},91:function(e,t,r){var n,i,s;i=[t,r(17)],void 0===(s="function"==typeof(n=function(r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){var t=(0,n.getFirstMatch)(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:"EdgeHTML",version:t}}},{test:[/trident/i],describe:function(e){var t={name:"Trident"},r=(0,n.getFirstMatch)(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:"Presto"},r=(0,n.getFirstMatch)(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:"Gecko"},r=(0,n.getFirstMatch)(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:"Blink"}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:"WebKit"},r=(0,n.getFirstMatch)(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];r.default=i,e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)}})});

/***/ }),

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _parts_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parts/Layout */ "./parts/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _parts_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/Header */ "./parts/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "/Users/grant.custer/Sites/ffgrids/writing/pages/_app.js";









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
      ww: 640,
      wh: 480,
      optimal: 600,
      loaded: false,
      render_info: null,
      origin: null
    };
    _this.setSize = _this.setSize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.setSize = Object(lodash__WEBPACK_IMPORTED_MODULE_13__["debounce"])(_this.setSize, 100);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "setSize",
    value: function setSize() {
      this.setState({
        ww: document.documentElement.clientWidth,
        wh: window.innerHeight,
        loaded: true
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.setSize);
      this.setSize();
      var render_info = bowser__WEBPACK_IMPORTED_MODULE_17__["getParser"](window.navigator.userAgent).parse().parsedResult;
      this.setState({
        render_info: render_info,
        origin: window.location.href
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          ww = _this$state.ww,
          wh = _this$state.wh,
          loaded = _this$state.loaded,
          optimal = _this$state.optimal,
          render_info = _this$state.render_info,
          origin = _this$state.origin;
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var pathname = this.props.router.pathname;
      var is_post = pathname.startsWith('/posts/');
      var grem = _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"];
      var dividers = 4;
      var column_raw = Math.floor(ww / (optimal / dividers));
      var column_num = Math.floor(column_raw / 2) * 2;
      var c = Math.round(ww / column_raw * 10) / 10;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, ".js-no-flash { display: none }"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("noscript", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, ".js-no-flash { display: block }"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3523385867",
        dynamic: [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem],
        __self: this
      }, "@font-face{font-family:'Inter';font-style:normal;font-weight:400;src:url('/static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Regular.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:400;src:url('/static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Italic.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:700;src:url('/static/fonts/Inter-Bold.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-Bold.woff?v=3.5') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:700;src:url('/static/fonts/Inter-BoldItalic.woff2?v=3.5') format('woff2'), url('/static/fonts/Inter-BoldItalic.woff?v=3.5') format('woff');}*{box-sizing:border-box;}html{background:#efefef;font-family:'Inter',serif;font-size:".concat(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], "px;line-height:").concat(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], "px;text-rendering:optimizelegibility;font-feature-settings:'kern';font-kerning:normal;font-feature-settings:'ss02' 1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}pre{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto;overflow-x:auto;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo, Monaco,Courier New,monospace;}body{margin:0;}p{margin:0 0 0 0;text-indent:").concat(grem, "px;}a{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy93cml0aW5nL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0UyQixBQUdpQyxBQU9BLEFBT0EsQUFPQSxBQVNFLEFBR0gsQUFZUyxBQU9uQixBQUdNLEFBSUgsU0FOZCxHQU9BLEdBSjZDLElBdEJoQixDQWpDVCxBQU9BLEFBT0EsQUFPQSxFQVNwQixNQWUrQixVQTVDYixBQU9BLEFBT0EsQUFPQSxPQVl5QixTQS9CcUIsQUFPRCxBQU9GLEFBUU0sR0FxQmpELENBVWxCLGVBUmtDLGFBYlcsMkNBQ1QsZ0NBYXBDLEVBWitCLGNBbkIvQixJQVBBLEVBUEEsTUFzQkEsR0FZc0Isb0JBQ1csK0JBQ0ksbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvZmZncmlkcy93cml0aW5nL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgUG9zdExheW91dCB9IGZyb20gJy4uL3BhcnRzL0xheW91dCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvbnRfc2l6ZSwgbGluZV9oZWlnaHQsIGZvbnRfbWluLCBzbSB9IGZyb20gJy4uL3BhcnRzL1N0YXRpYydcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9wYXJ0cy9IZWFkZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgKiBhcyBCb3dzZXIgZnJvbSAnYm93c2VyJ1xuXG4vLyBPdmVycmlkZSB0aGUgQXBwIGNsYXNzIHRvIHB1dCBsYXlvdXQgY29tcG9uZW50IGFyb3VuZCB0aGUgcGFnZSBjb250ZW50c1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcyNjdXN0b20tYXBwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd3c6IDY0MCxcbiAgICAgIHdoOiA0ODAsXG4gICAgICBvcHRpbWFsOiA2MDAsXG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgcmVuZGVyX2luZm86IG51bGwsXG4gICAgICBvcmlnaW46IG51bGwsXG4gICAgfVxuICAgIHRoaXMuc2V0U2l6ZSA9IHRoaXMuc2V0U2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTaXplID0gZGVib3VuY2UodGhpcy5zZXRTaXplLCAxMDApXG4gIH1cblxuICBzZXRTaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd3c6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgIHdoOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICBsb2FkZWQ6IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFNpemUpXG4gICAgdGhpcy5zZXRTaXplKClcbiAgICBsZXQgcmVuZGVyX2luZm8gPSBCb3dzZXIuZ2V0UGFyc2VyKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KS5wYXJzZSgpXG4gICAgICAucGFyc2VkUmVzdWx0XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlcl9pbmZvLCBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgd3csIHdoLCBsb2FkZWQsIG9wdGltYWwsIHJlbmRlcl9pbmZvLCBvcmlnaW4gfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXJcblxuICAgIGxldCBpc19wb3N0ID0gcGF0aG5hbWUuc3RhcnRzV2l0aCgnL3Bvc3RzLycpXG5cbiAgICBsZXQgZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0XG5cbiAgICBsZXQgZGl2aWRlcnMgPSA0XG4gICAgbGV0IGNvbHVtbl9yYXcgPSBNYXRoLmZsb29yKHd3IC8gKG9wdGltYWwgLyBkaXZpZGVycykpXG4gICAgbGV0IGNvbHVtbl9udW0gPSBNYXRoLmZsb29yKGNvbHVtbl9yYXcgLyAyKSAqIDJcbiAgICBsZXQgYyA9IE1hdGgucm91bmQoKHd3IC8gY29sdW1uX3JhdykgKiAxMCkgLyAxMFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxzdHlsZT57YC5qcy1uby1mbGFzaCB7IGRpc3BsYXk6IG5vbmUgfWB9PC9zdHlsZT5cbiAgICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgICA8c3R5bGU+e2AuanMtbm8tZmxhc2ggeyBkaXNwbGF5OiBibG9jayB9YH08L3N0eWxlPlxuICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0ludGVyLVJlZ3VsYXIud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1SZWd1bGFyLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1JdGFsaWMud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1JdGFsaWMud29mZj92PTMuNScpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0ludGVyLUJvbGQud29mZjI/dj0zLjUnKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1Cb2xkLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1Cb2xkSXRhbGljLndvZmYyP3Y9My41JylcbiAgICAgICAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9JbnRlci1Cb2xkSXRhbGljLndvZmY/dj0zLjUnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250X3NpemV9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHtmb250X3NpemUgKiBsaW5lX2hlaWdodH1weDtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdrZXJuJztcbiAgICAgICAgICAgIGZvbnQta2VybmluZzogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnc3MwMicgMTtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJlIHtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIE1lbmxvLFxuICAgICAgICAgICAgICBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAke2dyZW19cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwianMtbm8tZmxhc2hcIlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGxvYWRlZCA/ICdibG9jaycgOiBudWxsIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IGdyZW0gLyAyIH19PlxuICAgICAgICAgICAgPGRpdj5HcmFudCBDdXN0ZXI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+RGVzaWdu4oCTQ29kZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge3d3fXh7d2h9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBwYWRkaW5nTGVmdDogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IGdyZW0gLyAyIH19PlxuICAgICAgICAgICAgICAgIHtpc19wb3N0ID8gKFxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGE+V3JpdGluZzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHNwYW4+V3JpdGluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9mZWVkLmdyYW50Y3VzdGVyLmNvbVwiPkZlZWQ8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzX3Bvc3QgPyAoXG4gICAgICAgICAgICA8UG9zdExheW91dCBwYXRobmFtZT17cGF0aG5hbWV9IGdyZW09e2dyZW19IGM9e2N9PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1Bvc3RMYXlvdXQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gZ3JlbT17Z3JlbX0gYz17Y30gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBncmVtLCB0ZXh0SW5kZW50OiBncmVtIH19PlxuICAgICAgICAgIEdlbmVyYXRlZFxuICAgICAgICAgIHtvcmlnaW4gIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8c3Bhbj4gZnJvbSB7dGhpcy5saW5rKG9yaWdpbil9PC9zcGFuPlxuICAgICAgICAgICkgOiBudWxsfSBvbiB7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgIHtyZW5kZXJfaW5mbyAhPT0gbnVsbFxuICAgICAgICAgICAgPyBgIHdpdGggJHtyZW5kZXJfaW5mby5icm93c2VyLm5hbWV9ICR7XG4gICAgICAgICAgICAgICAgcmVuZGVyX2luZm8uYnJvd3Nlci52ZXJzaW9uXG4gICAgICAgICAgICAgIH0gb24gJHtyZW5kZXJfaW5mby5vcy5uYW1lfSAke3JlbmRlcl9pbmZvLm9zLnZlcnNpb259YFxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIC5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/ffgrids/writing/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: loaded ? 'block' : null
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]) + " " + "js-no-flash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Grant Custer"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Design\u2013Code"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, ww, "x", wh), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: 'flex',
          paddingLeft: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, is_post ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Writing")) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Writing")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginRight: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        href: "http://feed.grantcuster.com",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Feed")))), is_post ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_parts_Layout__WEBPACK_IMPORTED_MODULE_10__["PostLayout"], {
        pathname: pathname,
        grem: grem,
        c: c,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        grem: grem,
        c: c,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          padding: grem,
          textIndent: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Generated", origin !== null ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3523385867", [_parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"], _parts_Static__WEBPACK_IMPORTED_MODULE_12__["font_size"] * _parts_Static__WEBPACK_IMPORTED_MODULE_12__["line_height"], grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, " from ", this.link(origin)) : null, " on ", new Date().toLocaleString(), render_info !== null ? " with ".concat(render_info.browser.name, " ").concat(render_info.browser.version, " on ").concat(render_info.os.name, " ").concat(render_info.os.version) : null, "."));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.fac7b1ff5f0b3c8cfbfd.hot-update.js.map