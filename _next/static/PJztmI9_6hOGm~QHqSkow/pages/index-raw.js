(window.webpackJsonp=window.webpackJsonp||[]).push([["82f4"],{"6dRl":function(e,t,n){"use strict";var i=n("vYYK"),a=n("0iUn"),c=n("sLSF"),o=n("MI3g"),r=n("a7VT"),s=n("Tit0"),l=n("q1tI"),h=n.n(l),d=function(e){function t(){return Object(a.default)(this,t),Object(o.default)(this,Object(r.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.width,n=(e.packed,e.grem),a=e.connections,c=e.center_points,o=e.experiments,r=e.fl,s=e.spacer,l=(e.ww,e.wh,e.adjusted_height),d=e.active_node,u=e.side_width,m=(e.set_width,e.set_height),f=u,g=m/l,p=f/t;return c=c.slice(1,c.length-1),h.a.createElement("svg",{width:f,height:m,style:{width:f,height:m,position:"absolute",right:0,top:2*n,zIndex:1}},a.map(function(e){var t;return h.a.createElement("line",(t={x1:e.x1*p,y1:e.y1*g,x2:e.x2*p,y2:e.y2*g,strokeWidth:1*r,stroke:"var(--background)"},Object(i.a)(t,"stroke","white"),Object(i.a)(t,"style",{display:"none"}),t))}),c.map(function(e,t){var n,i=o[t],a=d!==t?s/2:s/2*1.125;return n="var(--background)",void 0!==i&&i.featured?h.a.createElement("rect",{x:e.x*p-a/2,y:e.y*g-a/2,width:a,height:a,fill:n,strokeWidth:2*r,style:{}}):e.spacer?h.a.createElement("circle",{cx:e.x*p,cy:e.y*g,r:a/2,fill:"white",stroke:n,strokeWidth:2*r,style:{}}):h.a.createElement("circle",{cx:e.x*p,cy:e.y*g,r:a/2,fill:n,style:{}})}))}}]),t}(h.a.Component);t.a=d},Lx2M:function(e,t,n){"use strict";n.r(t);var i=n("vYYK"),a=n("zrwo"),c=(n("UXZV"),n("ln6h")),o=n.n(c),r=n("O40h"),s=n("0iUn"),l=n("MI3g"),h=n("a7VT"),d=n("AT/M"),u=n("sLSF"),m=n("Tit0"),f=n("MX0m"),g=n.n(f),p=n("q1tI"),v=n.n(p),y=n("zgjP"),x=n.n(y),w=n("m/Pd"),b=n.n(w),_=n("X8Qk"),k=n("b7xd"),E=n("lCqh"),z=n("fCvV"),j=n("E29R"),O=n("YUnZ"),N=n("LvDl"),M=n("6dRl"),S=function(e){function t(e){var n;Object(s.default)(this,t),n=Object(l.default)(this,Object(h.default)(t).call(this,e));var i=new Date,a=new Date(i.getFullYear(),0,0),c=i-a+60*(a.getTimezoneOffset()-i.getTimezoneOffset())*1e3*24,o=Math.floor(c/864e5);return n.state={ww:600,wh:800,loaded:!1,hex:O.hcl(Math.floor(o/365*360),60,80),active_node:null,day:o,cover_height:null},n.setSize=n.setSize.bind(Object(d.default)(n)),n.setSize=Object(N.debounce)(n.setSize,100),n.setActiveNode=n.setActiveNode.bind(Object(d.default)(n)),n}return Object(m.default)(t,e),Object(u.default)(t,null,[{key:"getInitialProps",value:function(){var e=Object(r.default)(o.a.mark(function e(t){var n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,i=n?n.headers["user-agent"]:navigator.userAgent,e.abrupt("return",{userAgent:i});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),Object(u.default)(t,[{key:"setSize",value:function(){var e=this;console.log("set size");this.cover.clientHeight;this.setState({ww:window.innerWidth,wh:window.innerHeight},function(){e.setCoverHeight()})}},{key:"setActiveNode",value:function(e){this.setState({active_node:e})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.setSize),this.setState({ww:window.innerWidth,wh:window.innerHeight,loaded:!0},function(){e.setCoverHeight()})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setSize)}},{key:"setCoverHeight",value:function(){var e=this.cover.clientHeight;this.setState({cover_height:e})}},{key:"render",value:function(){var e,t=this,n=this.props.experiments,c=this.state,o=c.ww,r=c.wh,s=c.hex,l=c.loaded,h=(c.cover_height,_.c.font_size*_.c.line_height),d=h*(2048/2816);var u=!0,m={width:o,position:"relative"},f={};var p=0+2*h,y=o-0-h;u&&(y=o);var x=10*h+p,w=12*h,S=y,I=Math.floor(S/x),C=Math.floor(S/I-p),H=n.map(function(e){var t=Math.round(C),n=Math.round(w);return!0===e.featured?{width:Math.min(2*t+p,o-p),height:2*n+p}:{width:Math.min(t,o-p),height:n}}),L=Object(E.a)({width:S,height:1/0},H,p),T=L.boxes.slice();T.unshift({width:y-2*h,height:w,x:0,y:-(w+p),featured:!1,spacer:!0}),T.push({width:y-2*h,height:w,x:0,y:L.container.height+(w+p)});for(var A=T.map(function(e,t){return{i:t,x:e.x+p/2+e.width/2,y:e.y+e.height/2+(w+p)/2,spacer:e.spacer}}),F=T.map(function(e,t){return{i:t,x:e.x+p/2+e.width/2,y:e.y+h+(w+p)/2}}),U=T.map(function(e,t){return{i:t,x:e.x+p/2+e.width/2,y:e.y+e.height+h+(w+p)/2}}),V=Object(N.sortBy)(F,"y"),W=Object(N.sortBy)(U,"y").reverse(),B=[],P=0;P<V.length;P++){var Y=V[P];if(B.length>0){var q=B[B.length-1],X=F[q[q.length-1]].y;Y.y===X?q.push(Y.i):B.push([Y.i])}else B.push([Y.i])}for(var Z=[],D=0;D<W.length;D++){var J=W[D];if(Z.length>0){var K=Z[Z.length-1],R=U[K[K.length-1]].y;J.y===R?K.push(J.i):Z.push([J.i])}else Z.push([J.i])}B=B.concat(Z);for(var G=[],Q=0;Q<B.length;Q++){var $=B[Q],ee=B[Q+1];if(void 0!==ee)for(var te=0;te<$.length;te++)for(var ne=A[$[te]],ie=0;ie<ee.length;ie++){var ae=A[ee[ie]],ce={x1:ne.x,y1:ne.y,x2:ae.x,y2:ae.y};G.push(ce)}}return console.log(H),v.a.createElement("div",null,v.a.createElement("div",{className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},v.a.createElement(b.a,null,v.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])}),v.a.createElement("meta",{charSet:"utf-8",className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])}),v.a.createElement("style",null,".js-no-flash { display: none; }"),v.a.createElement("noscript",{className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},v.a.createElement("style",null,".js-no-flash { display: block; }"))),v.a.createElement(g.a,{id:"225325100",dynamic:[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]},["@import url('https://rsms.me/inter/inter.css');",":root{--background:".concat(s,";--light_background:").concat(O(s).luminance(.8).hex(),";--dark_background:").concat(O(s).luminance(.4).hex(),";}"),"::selection{background:var(--background);}",".inter{font-family:'Inter var',serif;}",".js-no-flash{display:none;}","*{box-sizing:border-box;}","html{background:white;font-family:'Inter var',serif;}","body{margin:0;color:black;font:".concat(_.c.font_size,"px ").concat(_.c.font,";line-height:").concat(_.c.line_height,";}"),"a{color:inherit;}","a:hover .item_name{background:var(--background);}",".color{display:none;}",".color2{display:none;}",".hover:hover .color2{display:block;}",".hover_box:hover{-webkit-transition:box-shadow 0.05s linear;transition:box-shadow 0.05s linear;box-shadow:0 0 ".concat(h/2,"px rgba(0,0,0,0.4);}")]),v.a.createElement("div",{style:{display:l?"block":null},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])+" js-no-flash"},v.a.createElement("div",{style:{position:"fixed",left:0,top:0,width:o,height:2*h,background:"var(--background)"},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])}),v.a.createElement("div",{style:Object(a.a)({},m,(e={background:"var(--background)"},Object(i.a)(e,"background","transparent"),Object(i.a)(e,"height","80vh"),e)),ref:function(e){t.cover=e},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},v.a.createElement(M.a,{width:y,side_width:0,packed:L,grem:h,adjusted_height:L.container.height+2*w,connections:G,center_points:A,experiments:n,fl:_.c.stroke_mult*_.c.font_size,spacer:p,ww:o,wh:r,active_node:this.state.active_node,set_width:u?o/2:0,set_height:this.state.cover_height-2*h}),v.a.createElement("div",{style:{position:"relative",zIndex:2,height:m.height},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},v.a.createElement("div",{style:{padding:Object(_.a)(h/2,h/2),position:"relative"},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},"Cloudera Fast Forward",v.a.createElement(z.a,{width:2*d,height:d,style:{position:"absolute",right:h/2,top:h/2+(h-d)/2},stroke:2})),v.a.createElement("div",{style:{padding:Object(_.a)(h/2,h/2,0,h/2),fontSize:3*_.c.font_size,lineHeight:1},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},v.a.createElement("div",{style:{padding:Object(_.a)(4,0)},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},"Experiments")),v.a.createElement("div",{style:{position:u?"relative":"absolute",bottom:u?"auto":0,width:m.side_width,padding:h/2},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},v.a.createElement("div",{style:{marginBottom:h/2},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},"Cloudera Fast Forward is an applied machine learning research group. We help organizations recognize and develop new product and business opportunities through emerging technologies."),v.a.createElement("div",{style:{marginBottom:h/2},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},v.a.createElement("a",{href:"#",className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},"Learn more about working with us.")),v.a.createElement("div",{className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},"GEN: ",this.state.day,"-",this.state.ww,"x",this.state.wh))),v.a.createElement("div",{style:{position:"absolute",zIndex:2,top:0,left:0,width:m.width,height:2*h,pointerEvents:"none"},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])}),u?v.a.createElement(k.b,{width:o,align:"b",stroke:1,style:{zIndex:9,display:"none"}}):v.a.createElement(k.d,{height:r,align:"r",stroke:1,style:{zIndex:9,display:"none"}})),v.a.createElement("div",{style:Object(a.a)({},f),className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},v.a.createElement("div",{style:{position:"relative",paddingBottom:2*h,paddingTop:0*h},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},v.a.createElement(j.a,{width:y,grem:h,experiments:n,packed:L,spacer:p,target_height:w,setActiveNode:this.setActiveNode,stacked:u})),v.a.createElement("div",{style:{position:"relative",padding:Object(_.a)(h/2,u?h/2:h),display:"none"},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},v.a.createElement(z.a,{width:2*d,height:d,style:{position:"absolute",left:u?h/2:h,top:h/2+(h-d)/2},stroke:2}),v.a.createElement("div",{style:{textAlign:"right"},className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},v.a.createElement("a",{href:"#",className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},"Main"),"  ",v.a.createElement("a",{href:"#",className:g.a.dynamic([["225325100",[s,O(s).luminance(.8).hex(),O(s).luminance(.4).hex(),_.c.font_size,_.c.font,_.c.line_height,h/2]]])},"Blog")),v.a.createElement(k.b,{width:u?o:o-0,align:"t",style:{display:"none"}}))))))}}]),t}(v.a.Component);S.getInitialProps=Object(r.default)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("https://your_deployment.server.com/static/data/experiments.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{experiments:n});case 7:case"end":return e.stop()}},e)})),t.default=S},UXZV:function(e,t,n){e.exports=n("UbbE")},UbbE:function(e,t,n){n("o8NH"),e.exports=n("WEpk").Object.assign},VlL7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index-raw",function(){var e=n("Lx2M");return{page:e.default||e}}])},kwZ1:function(e,t,n){"use strict";var i=n("w6GO"),a=n("mqlF"),c=n("NV0k"),o=n("JB68"),r=n("M1xp"),s=Object.assign;e.exports=!s||n("KUxP")(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=i})?function(e,t){for(var n=o(e),s=arguments.length,l=1,h=a.f,d=c.f;s>l;)for(var u,m=r(arguments[l++]),f=h?i(m).concat(h(m)):i(m),g=f.length,p=0;g>p;)d.call(m,u=f[p++])&&(n[u]=m[u]);return n}:s},o8NH:function(e,t,n){var i=n("Y7ZC");i(i.S+i.F,"Object",{assign:n("kwZ1")})}},[["VlL7","5d41","9da1"]]]);