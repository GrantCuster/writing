(window.webpackJsonp=window.webpackJsonp||[]).push([["64f2"],{"8puX":function(e,t,n){"use strict";(function(t){const a={enabled:!0,visible:!0,styles:{},keys:{}};"FORCE_COLOR"in t.env&&(a.enabled="0"!==t.env.FORCE_COLOR);const i=(e,t,n)=>{let{open:a,close:i,regex:c}=e;return t=a+(t.includes(i)?t.replace(c,i+a):t)+i,n?t.replace(/\r?\n/g,`${i}$&${a}`):t},c=(e,t,n)=>{a.styles[e]=(e=>(e.open=`[${e.codes[0]}m`,e.close=`[${e.codes[1]}m`,e.regex=new RegExp(`\\u001b\\[${e.codes[1]}m`,"g"),e))({name:e,codes:t}),(a.keys[n]||(a.keys[n]=[])).push(e),Reflect.defineProperty(a,e,{get(){let t=e=>((e,t)=>{if(""===e||null==e)return"";if(!1===a.enabled)return e;if(!1===a.visible)return"";let n=""+e,c=n.includes("\n"),o=t.length;for(;o-- >0;)n=i(a.styles[t[o]],n,c);return n})(e,t.stack);return Reflect.setPrototypeOf(t,a),t.stack=this.stack?this.stack.concat(e):[e],t}})};c("reset",[0,0],"modifier"),c("bold",[1,22],"modifier"),c("dim",[2,22],"modifier"),c("italic",[3,23],"modifier"),c("underline",[4,24],"modifier"),c("inverse",[7,27],"modifier"),c("hidden",[8,28],"modifier"),c("strikethrough",[9,29],"modifier"),c("black",[30,39],"color"),c("red",[31,39],"color"),c("green",[32,39],"color"),c("yellow",[33,39],"color"),c("blue",[34,39],"color"),c("magenta",[35,39],"color"),c("cyan",[36,39],"color"),c("white",[37,39],"color"),c("gray",[90,39],"color"),c("grey",[90,39],"color"),c("bgBlack",[40,49],"bg"),c("bgRed",[41,49],"bg"),c("bgGreen",[42,49],"bg"),c("bgYellow",[43,49],"bg"),c("bgBlue",[44,49],"bg"),c("bgMagenta",[45,49],"bg"),c("bgCyan",[46,49],"bg"),c("bgWhite",[47,49],"bg"),c("blackBright",[90,39],"bright"),c("redBright",[91,39],"bright"),c("greenBright",[92,39],"bright"),c("yellowBright",[93,39],"bright"),c("blueBright",[94,39],"bright"),c("magentaBright",[95,39],"bright"),c("cyanBright",[96,39],"bright"),c("whiteBright",[97,39],"bright"),c("bgBlackBright",[100,49],"bgBright"),c("bgRedBright",[101,49],"bgBright"),c("bgGreenBright",[102,49],"bgBright"),c("bgYellowBright",[103,49],"bgBright"),c("bgBlueBright",[104,49],"bgBright"),c("bgMagentaBright",[105,49],"bgBright"),c("bgCyanBright",[106,49],"bgBright"),c("bgWhiteBright",[107,49],"bgBright");const o=a.ansiRegex=/[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;a.hasColor=a.hasAnsi=(e=>(o.lastIndex=0,!!e&&"string"==typeof e&&o.test(e))),a.unstyle=(e=>(o.lastIndex=0,"string"==typeof e?e.replace(o,""):e)),a.none=a.clear=a.noop=(e=>e),a.stripColor=a.unstyle,a.symbols=n("bYGB"),a.define=c,e.exports=a}).call(this,n("8oxB"))},EOkE:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),i=n.n(a),c=n("O40h"),o=n("0iUn"),l=n("MI3g"),s=n("a7VT"),r=n("sLSF"),h=n("Tit0"),d=n("MX0m"),f=n.n(d),g=n("q1tI"),m=n.n(g),y=n("m/Pd"),b=n.n(y),_=n("X8Qk"),p=n("zrwo"),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,n=void 0===t?100:t,a=e.height,i=void 0===a?100:a,c=e.pixelRatio,o=void 0===c?2:c,l=e.style,s=void 0===l?{}:l,r=Object(g.useRef)(null);Object(g.useLayoutEffect)(function(){var e=r.current.getContext("2d");e.save(),e.scale(o,o),e.clearRect(0,0,n,i),e.strokeStyle="black",e.fillStyle="black",e.lineWidth=1;var t=n/2,a=n/4;function c(t,n){e.moveTo(t+a,n+a)}function l(t,n){e.lineTo(t+a,n+a)}e.lineWidth=_.c.stroke_mult*_.c.font_size,e.fillStyle="pink",console.log(a,a),e.fillStyle="pink",e.strokeStyle="pink",e.beginPath(),c(0,0),l(t/2,t/2),l(0,t),l(0,0),e.fill(),e.stroke(),e.beginPath(),c(t/2,0),l(t-0,t/2),l(t/2,t),l(t/2,0),e.fill(),e.stroke(),e.strokeStyle="black",e.beginPath(),c(t,0),l(0,0),l(0,t),e.stroke(),e.beginPath(),c(t/2,t),l(t/2,0),e.stroke(),e.beginPath(),c(0,t/2),l(t,t/2),e.stroke(),e.restore()});var h=Math.floor(o*n),d=Math.floor(o*i),f=Object(p.a)({},s,{width:n,height:i});return m.a.createElement("canvas",{ref:r,width:h,height:d,style:f})};n("8puX");function k(e){var t=Math.pow(2,6-Math.log(e)/Math.log(2))*Math.pow(10,2);return t<100&&(t=100),t}var z=function(e){function t(e){var n;return Object(o.default)(this,t),(n=Object(l.default)(this,Object(s.default)(t).call(this,e))).state={ww:600,wh:800,loaded:!1},n}return Object(h.default)(t,e),Object(r.default)(t,null,[{key:"getInitialProps",value:function(){var e=Object(c.default)(i.a.mark(function e(t){var n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,a=n?n.headers["user-agent"]:navigator.userAgent,e.abrupt("return",{userAgent:a});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),Object(r.default)(t,[{key:"componentDidMount",value:function(){this.setState({ww:window.innerWidth,wh:window.innerHeight,loaded:!0})}},{key:"render",value:function(){var e=this.state,t=e.ww,n=(e.wh,e.loaded),a=_.c.grem,i=4*a,c=(Math.round(t/i),_.c.font_size*_.c.stroke_mult),o=Math.ceil(c),l=a*(2048/2708);return m.a.createElement("div",{className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement(b.a,null,m.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("meta",{charSet:"utf-8",className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("style",null,".js-no-flash { display: none; }"),m.a.createElement("noscript",{className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("style",null,".js-no-flash { display: block; }"))),m.a.createElement(f.a,{id:"2040882185",dynamic:[_.c.font_size,_.c.font,_.c.line_height]},['@import url("https://rsms.me/inter/inter.css");','.inter{font-family:"Inter var",serif;}',".js-no-flash{display:none;}","*{box-sizing:border-box;}",'html{background:#fff;font-family:"Inter var",serif;}',"body{margin:0;background:#fff;color:black;font:".concat(_.c.font_size,"px ").concat(_.c.font,";line-height:").concat(_.c.line_height,";}"),"a{color:inherit;}"]),m.a.createElement("div",{style:{display:n?"block":null,paddingTop:o/2},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])+" js-no-flash"},m.a.createElement("div",{style:{position:"relative"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement(u,{width:2*a,height:2*a,grem:a,style:{position:"absolute",left:0,top:0,background:"transparent",display:"none"}}),m.a.createElement("svg",{width:a,height:a,style:{position:"absolute",left:a/2,top:a/2+(a-_.c.font_size*(2048/2708))/2-_.c.font_size*(660/2708)},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("path",{d:"M".concat(c/2,",").concat(c/2," L").concat(l/2+c/2,",").concat(l/2+c/2," L").concat(c/2,",").concat(l+c/2),stroke:"none",strokeWidth:c,strokeLinejoin:"bevel",fill:"#aaa",className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("path",{d:"M".concat(l/2+c/2,",").concat(c/2," L").concat(l+c/2,",").concat(l/2+c/2," L").concat(l/2+c/2,",").concat(l+c/2),stroke:"none",strokeWidth:c,strokeLinejoin:"bevel",fill:"#aaa",className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("line",{x1:c/2,y1:c/2,x2:c/2,y2:a*(2048/2708),stroke:"black",strokeWidth:c,fill:"none",className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("line",{x1:c/2,y1:c/2,x2:a*(2048/2708),y2:c/2,stroke:"black",strokeWidth:c,fill:"none",className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("line",{x1:c/2,y1:c/2+a*(2048/2708)/2,x2:a*(2048/2708),y2:c/2+a*(2048/2708)/2,stroke:"black",strokeWidth:c,fill:"none",className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("line",{y1:c/2,x1:c/2+a*(2048/2708)/2,y2:a*(2048/2708),x2:c/2+a*(2048/2708)/2,stroke:"black",strokeWidth:c,fill:"none",className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])})),m.a.createElement("svg",{width:a+2*c,height:a+2*c,style:{position:"absolute",left:a/2-c,top:a/2-c,display:"none"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("circle",{cx:c/2+a/2,cy:c/2+a/2,r:a/16*5,fill:"none",className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("path",{d:"M".concat(c/2,",").concat(c/2," L").concat(a/2+c/2,",").concat(a/2+c/2," L").concat(c/2,",").concat(a+c/2),fill:"none",stroke:"black","stroke-width":c,className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("path",{d:"M".concat(a/2+c/2,",").concat(c/2," L").concat(a+c/2,",").concat(a/2+c/2," L").concat(a/2+c/2,",").concat(a+c/2),fill:"none",stroke:"black","stroke-width":c,className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("path",{d:"M".concat(c/2,",").concat(a+c/2," L").concat(c/2,",").concat(c/2," L").concat(a+c/2,",").concat(c/2),fill:"none",stroke:"black","stroke-width":c,className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("path",{d:"M".concat(c/2,",").concat(a/2+c/2," L").concat(a+c/2,",").concat(a/2+c/2),fill:"none",stroke:"black","stroke-width":c,className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("path",{d:"M".concat(a/2+c/2,",").concat(c/2," L").concat(a/2+c/2,",").concat(a+c/2),fill:"none",stroke:"black","stroke-width":c,className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("path",{d:"M".concat(c/2,",").concat(c/2," L").concat(a+c/2,",").concat(c/2," L").concat(a+c/2,",").concat(a+c/2," L").concat(c/2,",").concat(a+c/2,",L").concat(c/2,",").concat(c/2),fill:"none",stroke:"black","stroke-width":c,className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])})),m.a.createElement("div",{style:{position:"absolute",left:a/2,top:a/2,background:"pink",width:a,height:a,display:"none"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("div",{style:{position:"relative"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("div",{style:{position:"absolute",top:a/2,left:a,height:a,background:"rgba(100,0,100,0.5)",width:4*a,display:"none"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("div",{style:{position:"absolute",top:a/2+(a-_.c.font_size*(2048/2708))/2,left:a,height:_.c.font_size*(2048/2708),background:"rgba(100,100,100,0.5)",width:4*a,display:"none"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("div",{style:{position:"absolute",top:a/2+(a-_.c.font_size*(2048/2708))/2-_.c.font_size*(660/2708),left:a,height:_.c.font_size*(660/2708),background:"rgba(0,100,100,0.5)",width:4*a,display:"none"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("div",{style:{position:"absolute",top:a/2+(a-_.c.font_size*(2048/2708))/2+_.c.font_size*(2048/2708),left:a,height:_.c.font_size*(660/2708),background:"rgba(0,100,100,0.5)",width:4*a,display:"none"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}),m.a.createElement("div",{style:{padding:a/2,paddingLeft:0+2.25*l,position:"relative"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("svg",{style:{position:"absolute",left:0,width:t,height:o,top:-o/2},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("line",{x1:0,y1:c/2,x2:t,y2:c/2,style:{stroke:"black",strokeWidth:c},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])})),m.a.createElement("span",{style:{fontVariationSettings:"'wght' ".concat(k(_.c.font_size)+300)},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},"cloudera")," ","fast forward"),m.a.createElement("div",{style:{padding:Object(_.a)(a/2,a/2),position:"relative"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("svg",{style:{position:"absolute",left:a/2,width:t-a,height:o,top:-o/2},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("line",{x1:0,y1:c/2,x2:t,y2:c/2,style:{stroke:"black",strokeWidth:c},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])})),"experiments"),m.a.createElement("div",{style:{paddingLeft:a/2,paddingBottom:a/2,display:"grid",gridTemplateColumns:"repeat(auto-fill, ".concat(20*a,"px)"),gridColumnGap:a},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("a",{href:"https://github.com/victordibia/handtrack.js",style:{display:"block",paddingTop:0,width:20*a,height:20*a,marginBottom:a/2,marginRight:a/2,position:"relative",backgroundImage:"url(http://feed.grantcuster.com/static/images/feed/clip3-1554232754113.gif)",backgroundPosition:"center center",textDecoration:"none"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("div",{style:{background:"white",position:"relative",display:"flex"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("div",{style:{background:"white",padding:Object(_.a)(0,a/2),fontSize:.75*_.c.font_size,lineHeight:"".concat(_.c.font_size*_.c.line_height,"px"),fontVariationSettings:"'wght' ".concat(k(.75*_.c.font_size))},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("span",{style:{},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},"PROTOTYPE")),m.a.createElement("svg",{style:{position:"absolute",left:a/2,width:20*a-1*a,height:o,bottom:-o/2},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("line",{x1:0,y1:c/2,x2:20*a-1*a,y2:c/2,style:{stroke:"black",strokeWidth:c},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}))),m.a.createElement("div",{style:{background:"#fff",fontSize:3*_.c.font_size,lineHeight:_.c.line_height,padding:Object(_.a)(0,a/2),fontVariationSettings:"'wght' 700"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},"Active Learner"),m.a.createElement("div",{style:{background:"white",padding:a/2,position:"absolute",bottom:0},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("div",{className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("span",{style:{},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},"Handtrack.js is a library for prototyping realtime hand detection (bounding box), directly in the browser.")),m.a.createElement("div",{className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("span",{style:{},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},"https://github.com/victordibia/handtrack.js")),m.a.createElement("svg",{style:{position:"absolute",left:0,width:10*a,height:o,top:-o/2},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("line",{x1:0,y1:c/2,x2:10*a,y2:c/2,style:{stroke:"black",strokeWidth:c},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}))),m.a.createElement("div",{style:{background:"white",padding:a/2,position:"absolute",bottom:0},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("svg",{style:{position:"absolute",left:0,width:10*a,height:o,top:-o/2},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("line",{x1:0,y1:c/2,x2:10*a,y2:c/2,style:{stroke:"black",strokeWidth:c},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}))),m.a.createElement("svg",{style:{position:"absolute",top:-c,left:-c,width:20*a+2*c,height:20*a+2*c},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("path",{d:"M".concat(c,",").concat(c," L").concat(20*a,",").concat(c," L").concat(20*a,",").concat(20*a," L").concat(c,",").concat(20*a,", L").concat(c,",").concat(c),fill:"none",stroke:"black",strokeWidth:c,pointerEvents:"none",className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}))),m.a.createElement("a",{href:"https://github.com/victordibia/handtrack.js",style:{display:"block",paddingTop:0,width:10*a,height:10*a,marginBottom:a/2,marginRight:a/2,position:"relative",backgroundImage:"url(https://github.com/victordibia/handtrack.js/raw/master/demo/images/bossflip.gif)",backgroundPosition:"center center",textDecoration:"none"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("div",{style:{background:"white",position:"relative",padding:Object(_.a)(0,a/4),fontSize:.75*_.c.font_size,lineHeight:"".concat(_.c.font_size*_.c.line_height,"px"),fontVariationSettings:"'wght' ".concat(k(.75*_.c.font_size))},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},"LIBRARY",m.a.createElement("svg",{style:{position:"absolute",left:0,width:10*a,height:o,bottom:-o/2},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("line",{x1:0,y1:c/2,x2:10*a,y2:c/2,style:{stroke:"black",strokeWidth:c},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}))),m.a.createElement("div",{style:{background:"white",padding:Object(_.a)(0,a/4),fontSize:2*_.c.font_size,fontVariationSettings:"'wght' ".concat(k(2*_.c.font_size)+300)},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},"Handtrack.js"),m.a.createElement("div",{style:{fontSize:a/4*3/_.c.line_height,lineHeight:_.c.line_height,background:"white",padding:a/4,position:"absolute",bottom:0,fontVariationSettings:"'wght' ".concat(k(a/4*3/_.c.line_height))},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("span",{style:{},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},"Handtrack.js is a library for prototyping realtime hand detection (bounding box), directly in the browser.")),m.a.createElement("svg",{style:{position:"absolute",top:-c,left:-c,width:10*a+2*c,height:10*a+2*c},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("path",{d:"M".concat(c,",").concat(c," L").concat(10*a,",").concat(c," L").concat(10*a,",").concat(10*a," L").concat(c,",").concat(10*a,", L").concat(c,",").concat(c),fill:"none",stroke:"black","stroke-width":c,className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}))),m.a.createElement("a",{href:"https://github.com/victordibia/handtrack.js",style:{display:"block",paddingTop:0,width:20*a,height:20*a,marginBottom:a/2,marginRight:a/2,position:"relative",backgroundImage:"url(https://github.com/victordibia/handtrack.js/raw/master/demo/images/bossflip.gif)",backgroundPosition:"center center",textDecoration:"none"},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("div",{style:{background:"#fff",fontSize:3*_.c.font_size,lineHeight:_.c.line_height,padding:Object(_.a)(0,a/2),fontVariationSettings:"'wght' ".concat(k(3*_.c.font_size)+300)},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},"Turbofan Tycoon"),m.a.createElement("div",{style:{background:"white",padding:a/2,position:"absolute",bottom:0},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("span",{style:{},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},"Handtrack.js is a library for prototyping realtime hand detection (bounding box), directly in the browser."),m.a.createElement("svg",{style:{position:"absolute",left:0,width:20*a,height:o,top:-o/2},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("line",{x1:0,y1:c/2,x2:20*a,y2:c/2,style:{stroke:"black",strokeWidth:c},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}))),m.a.createElement("svg",{style:{position:"absolute",top:-c,left:-c,width:20*a+2*c,height:20*a+2*c},className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])},m.a.createElement("path",{d:"M".concat(c,",").concat(c," L").concat(20*a,",").concat(c," L").concat(20*a,",").concat(20*a," L").concat(c,",").concat(20*a,", L").concat(c,",").concat(c),fill:"none",stroke:"black",strokeWidth:c,pointerEvents:"none",className:f.a.dynamic([["2040882185",[_.c.font_size,_.c.font,_.c.line_height]]])}))))))))}}]),t}(m.a.Component);t.default=z},EnOr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/boxed-index",function(){var e=n("EOkE");return{page:e.default||e}}])},bYGB:function(e,t,n){"use strict";(function(t){const n="win32"===t.platform,a="linux"===t.platform,i={bullet:"•",check:"√",cross:"×",ellipsis:"...",heart:"❤",info:"i",line:"─",middot:"·",minus:"－",plus:"＋",question:"?",questionSmall:"﹖",pointer:">",pointerSmall:"»",warning:"‼"},c={ballotCross:"✘",bullet:"•",check:"✔",cross:"✖",ellipsis:"…",heart:"❤",info:"ℹ",line:"─",middot:"·",minus:"－",plus:"＋",question:"?",questionFull:"？",questionSmall:"﹖",pointer:a?"▸":"❯",pointerSmall:a?"‣":"›",warning:"⚠"};e.exports=n?i:c,Reflect.defineProperty(e.exports,"windows",{enumerable:!1,value:i}),Reflect.defineProperty(e.exports,"other",{enumerable:!1,value:c})}).call(this,n("8oxB"))}},[["EnOr","5d41","9da1"]]]);