(window.webpackJsonp=window.webpackJsonp||[]).push([["137e"],{"4wk2":function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),i=a.n(n),c=a("O40h"),r=a("0iUn"),o=a("MI3g"),s=a("a7VT"),l=a("AT/M"),d=a("sLSF"),h=a("Tit0"),m=a("MX0m"),u=a.n(m),g=a("q1tI"),p=a.n(g),x=a("zgjP"),f=a.n(x),v=(a("m/Pd"),a("X8Qk")),y=a("b7xd"),w=a("lCqh"),b=a("fCvV"),k=a("E29R"),E=a("YUnZ"),_=a("LvDl"),j=(a("6dRl"),function(e){function t(e){var a;Object(r.default)(this,t),a=Object(o.default)(this,Object(s.default)(t).call(this,e));var n=new Date,i=new Date(n.getFullYear(),0,0),c=n-i+60*(i.getTimezoneOffset()-n.getTimezoneOffset())*1e3*24,d=Math.floor(c/864e5);return a.state={ww:600,wh:800,loaded:!1,hex:E.hcl(Math.floor(d/365*360),60,80),active_node:null,day:d,cover_height:null,ratio:1,top_height:null,bottom_height:null},a.setTopHeight=a.setTopHeight.bind(Object(l.default)(a)),a.setBottomHeight=a.setBottomHeight.bind(Object(l.default)(a)),a.setSize=a.setSize.bind(Object(l.default)(a)),a.setSize=Object(_.debounce)(a.setSize,100),a.setActiveNode=a.setActiveNode.bind(Object(l.default)(a)),a}return Object(h.default)(t,e),Object(d.default)(t,null,[{key:"getInitialProps",value:function(){var e=Object(c.default)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.req,n=a?a.headers["user-agent"]:navigator.userAgent,e.abrupt("return",{userAgent:n});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),Object(d.default)(t,[{key:"setTopHeight",value:function(){var e=this.top.clientHeight;this.setState({top_height:e})}},{key:"setBottomHeight",value:function(){var e=this.bottom.clientHeight;this.setState({bottom_height:e})}},{key:"setSize",value:function(){var e=this,t=document.createElement("canvas").getContext("2d");t.font="normal ".concat(16,"px Inter");var a=t.measureText("Anything from 45 to 75 characters is widely regarded as a satisfactory len").width+24;window.ratio=Math.max(window.innerWidth/a,1),this.setState({ww:window.innerWidth,wh:window.innerHeight,ratio:Math.max(window.innerWidth/a,1)},function(){e.setTopHeight(),e.setBottomHeight()})}},{key:"setActiveNode",value:function(e){this.setState({active_node:e})}},{key:"getBaseRatio",value:function(){}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.setSize);var t=document.createElement("canvas").getContext("2d");t.font="normal ".concat(16,"px Inter");var a=t.measureText("Anything from 45 to 75 characters is widely regarded as a satisfactory len").width+24;this.setState({ww:window.innerWidth,wh:window.innerHeight,loaded:!0,ratio:Math.max(window.innerWidth/a,1)},function(){console.log(e.state.ratio),e.setTopHeight(),e.setBottomHeight()})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setSize)}},{key:"render",value:function(){var e,t=this,a=this.props.experiments,n=this.state,i=n.ww,c=n.wh,r=n.hex,o=(n.loaded,n.cover_height,n.ratio),s=n.top_height,l=n.bottom_height,d=16*o,h=1.5*d,m=h*(2048/2816),g=v.c.stroke_mult*d,x=0+h,f=i-h,_=10*h+x,j=f,O=Math.floor(j/_);1===o?(O=1,x=24):o<2?(O=2,x=24):o<3?(O=3,x=36):o<4&&(O=4,x=48);var N=Math.min(Math.floor((j-x*(O-1))/O),f);e=Math.min(N,c/2-1.5*x);var z=a.map(function(t){var a=Math.round(N),n=Math.round(e);return!0===t.featured?{width:Math.min(2*a+x,f),height:1===O?1.5*n:2*n+x}:{width:Math.min(a,i-x),height:n}}),M=Object(w.a)({width:j,height:1/0},z,x);return p.a.createElement("div",{className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},p.a.createElement(u.a,{id:"3603168419",dynamic:[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]},["@import url('https://rsms.me/inter/inter.css');",":root{--background:".concat(r,";--light_background:").concat(E(r).luminance(.8).hex(),";--dark_background:").concat(E(r).luminance(.4).hex(),";}"),"::selection{background:var(--background);}","*{box-sizing:border-box;}","html{font-family:'Inter var',serif;font-size:".concat(d,"px;line-height:").concat(1.5,";}"),"body{margin:0;}","a{color:inherit;-webkit-text-decoration:underline;text-decoration:underline;}",".hover_box:hover{-webkit-transition:box-shadow 0.05s linear;transition:box-shadow 0.05s linear;box-shadow:0 0 ".concat(h/4,"px rgba(0,0,0,0.4);}")]),p.a.createElement("div",{style:{},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},p.a.createElement("div",{style:{padding:Object(v.a)(h/4,h/2,0,h/2),position:"relative"},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},"Cloudera Fast Forward",p.a.createElement(b.a,{width:2*m,height:m,style:{position:"absolute",right:h/2,top:h/4+(h-m)/2},stroke:1*g}),p.a.createElement(y.b,{width:i,align:"b",stroke:o*v.c.font_size*v.c.stroke_mult,style:{display:"none"}})),p.a.createElement("div",{style:{padding:Object(v.a)(0,0,h/4,0)},ref:function(e){t.top=e},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},p.a.createElement("div",{style:{fontSize:3*d,lineHeight:1,padding:Object(v.a)(h/2,h/2,0,h/2)},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},"Experiments"),p.a.createElement("div",{style:{padding:Object(v.a)(h/2,h/2,0,h/2)},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},"Machine learning visualizations and code")),p.a.createElement("div",{style:{position:"relative",padding:Object(v.a)(h/2,h/2)},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},p.a.createElement(k.a,{width:f,grem:h,experiments:a,packed:M,spacer:x,target_height:e,setActiveNode:this.setActiveNode,ngrem:h,st:g,sentence_width:i/o}),p.a.createElement(y.b,{width:i,align:"b",stroke:o*v.c.font_size*v.c.stroke_mult,style:{display:"none"}})),p.a.createElement("div",{style:{padding:Object(v.a)(0,0,h/4,0)},ref:function(e){t.bottom=e},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},p.a.createElement("div",{style:{padding:Object(v.a)(0,h/2,h/4,h/2),fontSize:o*v.c.font_size*2,lineHeight:1.25,paddingTop:h/2},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},"About"),p.a.createElement("div",{style:{padding:Object(v.a)(h/4,h/2)},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},"Cloudera Fast Forward is an applied machine learning research group. We help organizations recognize and develop new product and business opportunities through emerging technologies."),p.a.createElement("div",{style:{padding:Object(v.a)(h/4,h/2)},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},p.a.createElement("a",{href:"#",className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},"Learn more about working with us.")))),p.a.createElement("div",{className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},p.a.createElement("div",{style:{position:"relative",paddingBottom:l+h,paddingTop:s+h/2,display:"none"},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])})),p.a.createElement("div",{style:{padding:Object(v.a)(h/4,h/2),position:"relative"},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},p.a.createElement("div",{style:{display:"flex"},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},p.a.createElement("div",{style:{marginRight:h/2},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},"Experiments"),p.a.createElement("div",{style:{marginRight:h/2},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},p.a.createElement("a",{href:"#",className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},"Main")),p.a.createElement("div",{style:{marginRight:h/2},className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},p.a.createElement("a",{href:"#",className:u.a.dynamic([["3603168419",[r,E(r).luminance(.8).hex(),E(r).luminance(.4).hex(),d,1.5,h/4]]])},"Blog"))),p.a.createElement(y.b,{width:i,align:"t",stroke:o*v.c.font_size*v.c.stroke_mult,style:{display:"none"}})))}}]),t}(p.a.Component));j.getInitialProps=Object(c.default)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://your_deployment.server.com/static/data/experiments.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",{experiments:a});case 7:case"end":return e.stop()}},e)})),t.default=j},"6dRl":function(e,t,a){"use strict";var n=a("vYYK"),i=a("0iUn"),c=a("sLSF"),r=a("MI3g"),o=a("a7VT"),s=a("Tit0"),l=a("q1tI"),d=a.n(l),h=function(e){function t(){return Object(i.default)(this,t),Object(r.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=(e.packed,e.grem),i=e.connections,c=e.center_points,r=e.experiments,o=e.fl,s=e.spacer,l=(e.ww,e.wh,e.adjusted_height),h=e.active_node,m=e.side_width,u=(e.set_width,e.set_height),g=m,p=u/l,x=g/t;return c=c.slice(1,c.length-1),d.a.createElement("svg",{width:g,height:u,style:{width:g,height:u,position:"absolute",right:0,top:2*a,zIndex:1}},i.map(function(e){var t;return d.a.createElement("line",(t={x1:e.x1*x,y1:e.y1*p,x2:e.x2*x,y2:e.y2*p,strokeWidth:1*o,stroke:"var(--background)"},Object(n.a)(t,"stroke","white"),Object(n.a)(t,"style",{display:"none"}),t))}),c.map(function(e,t){var a,n=r[t],i=h!==t?s/2:s/2*1.125;return a="var(--background)",void 0!==n&&n.featured?d.a.createElement("rect",{x:e.x*x-i/2,y:e.y*p-i/2,width:i,height:i,fill:a,strokeWidth:2*o,style:{}}):e.spacer?d.a.createElement("circle",{cx:e.x*x,cy:e.y*p,r:i/2,fill:"white",stroke:a,strokeWidth:2*o,style:{}}):d.a.createElement("circle",{cx:e.x*x,cy:e.y*p,r:i/2,fill:a,style:{}})}))}}]),t}(d.a.Component);t.a=h},h5Gq:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index-font",function(){var e=a("4wk2");return{page:e.default||e}}])}},[["h5Gq","5d41","9da1"]]]);