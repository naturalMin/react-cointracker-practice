(this["webpackJsonpreact-cointracker-practice"]=this["webpackJsonpreact-cointracker-practice"]||[]).push([[0],{74:function(n,e,t){"use strict";t.r(e);var c=t(1),i=t.n(c),r=t(27),o=t.n(r),a=t(50),s=t(8),d=t(18),l=t(4),j="https://api.coinpaprika.com/v1";function b(){return fetch("".concat(j,"/coins")).then((function(n){return n.json()}))}function h(n){return fetch("".concat(j,"/tickers/").concat(n)).then((function(n){return n.json()}))}var u=t(12),x=t(43),p=t.n(x),O=t(0);var f,g,v,m,y,k,C,w,_=function(n){var e=n.coinId,t=Object(u.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(j,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading,i=t.data;return Object(O.jsx)("div",{children:c?"Loading chart...":Object(O.jsx)(p.a,{type:"candlestick",series:[{data:null===i||void 0===i?void 0:i.map((function(n){return{x:n.time_close,y:[n.open,n.high,n.low,n.close]}}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparant"},grid:{show:!0},xaxis:{axisBorder:{show:!0},axisTicks:{show:!0},labels:{style:{colors:"#2d3436"}},type:"datetime",categories:null===i||void 0===i?void 0:i.map((function(n){return n.time_close}))},yaxis:{show:!0,labels:{style:{colors:"#2d3436"},formatter:function(n){return n.toFixed(0)}}}}})})},q=t(6),S=q.c.div(f||(f=Object(s.a)(["\n  padding: 0 20px;\n  max-width: 500px;\n  margin: 0 auto;  \n"]))),P=q.c.h1(g||(g=Object(s.a)(["\n  color: ",";\n  font-size: 30px;\n  text-align: center;\n"])),(function(n){return n.theme.textColor})),D=q.c.div(v||(v=Object(s.a)(["\n  text-align: center;\n  display: block;\n"]))),I=q.c.div(m||(m=Object(s.a)(["\n    margin-top: 20px;        \n"]))),L=q.c.div(y||(y=Object(s.a)(["  \n  padding: 20px;\n  border: 1px solid ",";  \n  border-radius: 15px;\n  margin-bottom: 10px;\n  font-weight : bold;\n  display: flex;\n  justify-content: space-between;\n"])),(function(n){return n.theme.textColor})),U=q.c.div(k||(k=Object(s.a)([""]))),z=q.c.div(C||(C=Object(s.a)([""]))),Q=q.c.span(w||(w=Object(s.a)(["\n  color: ",";\n"])),(function(n){return n.isPositive?"#00b894":"#ff7675"}));function M(n){if(n)return n>0}var F,T,A,B,R,H,J,E,W,$,G=function(){var n=Object(l.g)().coinId,e=Object(u.useQuery)(["tickers",n],(function(){return h(n)}),{refetchInterval:5e3}),t=e.isLoading,c=e.data;return Object(O.jsxs)(S,{children:[Object(O.jsxs)(P,{children:[n," Price"]}),t?Object(O.jsx)(D,{children:"Price loading..."}):Object(O.jsxs)(I,{children:[Object(O.jsxs)(L,{children:[Object(O.jsx)(U,{children:"Percent change (15minutes)"}),Object(O.jsx)(z,{children:Object(O.jsxs)(Q,{isPositive:!0===M(null===c||void 0===c?void 0:c.quotes.USD.percent_change_15m),children:[null===c||void 0===c?void 0:c.quotes.USD.percent_change_15m,"%"]})})]}),Object(O.jsxs)(L,{children:[Object(O.jsx)(U,{children:"Percent change (1hour)"}),Object(O.jsx)(z,{children:Object(O.jsxs)(Q,{isPositive:!0===M(null===c||void 0===c?void 0:c.quotes.USD.percent_change_1h),children:[null===c||void 0===c?void 0:c.quotes.USD.percent_change_1h,"%"]})})]}),Object(O.jsxs)(L,{children:[Object(O.jsx)(U,{children:"Percent change (1day)"}),Object(O.jsx)(z,{children:Object(O.jsxs)(Q,{isPositive:!0===M(null===c||void 0===c?void 0:c.quotes.USD.percent_change_24h),children:[null===c||void 0===c?void 0:c.quotes.USD.percent_change_24h,"%"]})})]}),Object(O.jsxs)(L,{children:[Object(O.jsx)(U,{children:"Percent change (1Week)"}),Object(O.jsx)(z,{children:Object(O.jsxs)(Q,{isPositive:!0===M(null===c||void 0===c?void 0:c.quotes.USD.percent_change_7d),children:[null===c||void 0===c?void 0:c.quotes.USD.percent_change_7d,"%"]})})]}),Object(O.jsxs)(L,{children:[Object(O.jsx)(U,{children:"Percent change (1month)"}),Object(O.jsx)(z,{children:Object(O.jsxs)(Q,{isPositive:!0===M(null===c||void 0===c?void 0:c.quotes.USD.percent_change_30d),children:[null===c||void 0===c?void 0:c.quotes.USD.percent_change_30d,"%"]})})]})]})]})},K=t(28),N=q.c.div(F||(F=Object(s.a)(["\n  padding: 0 20px;\n  max-width: 500px;\n  margin: 0 auto;\n"]))),V=q.c.header(T||(T=Object(s.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),X=q.c.h1(A||(A=Object(s.a)(["\n  color: ",";\n  font-size: 50px;\n"])),(function(n){return n.theme.textColor})),Y=q.c.div(B||(B=Object(s.a)(["\n  text-align: center;\n  display: block;\n"]))),Z=q.c.div(R||(R=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: #dfe6e975;\n  padding: 10px 20px;\n  border-radius: 10px; \n"]))),nn=q.c.div(H||(H=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),en=q.c.p(J||(J=Object(s.a)(["\n  margin: 20px 0;\n"]))),tn=q.c.div(E||(E=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),cn=q.c.span(W||(W=Object(s.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  color: ",";\n  padding: 7px 0px;\n  border-radius: 10px;\n  background-color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.isActive?n.theme.accentColor:"#dfe6e975"})),rn=q.c.div($||($=Object(s.a)(["\n  text-align: center;\n  font-size: 12px;\n  width: 50px;  \n  background-color: ",";\n  border-radius: 10px;\n  margin-top: 5px;\n  padding: 7px 10px;  \n  a {\n    color: ",";\n    display: block;\n  }\n"])),(function(n){return n.theme.accentColor}),(function(n){return n.theme.textColor}));var on,an,sn,dn,ln,jn,bn,hn=function(){var n=Object(l.g)().coinId,e=Object(l.f)().state,t=Object(l.h)("/:coinId/price"),c=Object(l.h)("/:coinId/chart"),i=Object(u.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(j,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),r=i.isLoading,o=i.data,a=Object(u.useQuery)(["tickers",n],(function(){return h(n)}),{refetchInterval:5e3}),s=a.isLoading,b=a.data,x=r||s;return Object(O.jsxs)(N,{children:[Object(O.jsx)(rn,{children:Object(O.jsx)(d.b,{to:"/",children:"Back"})}),Object(O.jsx)(K.a,{children:Object(O.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:x?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(O.jsx)(V,{children:Object(O.jsx)(X,{children:(null===e||void 0===e?void 0:e.name)?e.name:x?"Loading...":null===o||void 0===o?void 0:o.name})}),x?Object(O.jsx)(Y,{children:"loading..."}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(Z,{children:[Object(O.jsxs)(nn,{children:[Object(O.jsx)("span",{children:"Rank: "}),Object(O.jsx)("span",{children:null===o||void 0===o?void 0:o.name})]}),Object(O.jsxs)(nn,{children:[Object(O.jsx)("span",{children:"Symbol: "}),Object(O.jsx)("span",{children:null===o||void 0===o?void 0:o.symbol})]}),Object(O.jsxs)(nn,{children:[Object(O.jsx)("span",{children:"price: "}),Object(O.jsxs)("span",{children:["$",null===b||void 0===b?void 0:b.quotes.USD.price.toFixed(2)]})]})]}),Object(O.jsx)(en,{children:null===o||void 0===o?void 0:o.description}),Object(O.jsxs)(Z,{children:[Object(O.jsxs)(nn,{children:[Object(O.jsx)("span",{children:"Total Supply: "}),Object(O.jsx)("span",{children:null===b||void 0===b?void 0:b.total_supply})]}),Object(O.jsxs)(nn,{children:[Object(O.jsx)("span",{children:"Max Supply: "}),Object(O.jsx)("span",{children:null===b||void 0===b?void 0:b.max_supply})]})]}),Object(O.jsxs)(tn,{children:[Object(O.jsx)(cn,{isActive:null!==c,children:Object(O.jsx)(d.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(O.jsx)(cn,{isActive:null!==t,children:Object(O.jsx)(d.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/:coinId/price",children:Object(O.jsx)(G,{})}),Object(O.jsx)(l.a,{path:"/:coinId/chart",children:Object(O.jsx)(_,{coinId:n})})]})]})]})},un=q.c.div(on||(on=Object(s.a)(["\n  padding: 0 20px;\n  max-width: 500px;\n  margin: 0 auto;\n"]))),xn=q.c.div(an||(an=Object(s.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),pn=q.c.ul(sn||(sn=Object(s.a)([""]))),On=q.c.li(dn||(dn=Object(s.a)(["  \n  color: ",";\n  padding: 20px;\n  border: 1px solid ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: block;\n    text-align: center;\n    font-size: 20px;    \n  }\n  &:hover {\n    color: ",";\n    font-weight: bold;\n    border-bottom: 5px solid ",";\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor}),(function(n){return n.theme.accentColor})),fn=q.c.h1(ln||(ln=Object(s.a)(["\n  color: ",";\n  font-size: 50px;\n"])),(function(n){return n.theme.textColor})),gn=q.c.div(jn||(jn=Object(s.a)(["\n  text-align: center;\n  display: block;\n"]))),vn=q.c.img(bn||(bn=Object(s.a)(["\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n"])));var mn=function(){var n=Object(u.useQuery)("allCoins",b),e=n.isLoading,t=n.data;return Object(O.jsxs)(un,{children:[Object(O.jsx)(K.a,{children:Object(O.jsx)("title",{children:"Coins"})}),Object(O.jsx)(xn,{children:Object(O.jsx)(fn,{children:"Coins"})}),e?Object(O.jsx)(gn,{children:"Loading..."}):Object(O.jsx)(pn,{children:null===t||void 0===t?void 0:t.slice(0,50).map((function(n){return Object(O.jsx)(On,{children:Object(O.jsxs)(d.b,{to:{pathname:"./".concat(n.id),state:{name:n.name}},children:[Object(O.jsx)(vn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name]})},n.id)}))})]})};var yn,kn=function(){return Object(O.jsx)(d.a,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/:coinId",children:Object(O.jsx)(hn,{})}),Object(O.jsx)(l.a,{path:"/",children:Object(O.jsx)(mn,{})})]})})},Cn=t(49),wn={bgColor:"#6c5ce7",textColor:"#ffeaa7",accentColor:"#ff7675"},_n={bgColor:"#ffeaa7",textColor:"#2d3436",accentColor:"#00cec9"},qn=Object(q.b)(yn||(yn=Object(s.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, menu, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  main, menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, main, menu, nav, section {\n  display: block;\n  }\n  /* HTML5 hidden-attribute fix for newer browsers */\n  *[hidden] {\n  display: none;\n  }\n  body {\n  line-height: 1.2;  \n  }\n  menu, ol, ul {\n  list-style: none;\n  }\n  blockquote, q {\n  quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n  content: '';\n  content: none;\n  }\n  table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  }\n  //\uae30\ubcf8 Reset.css\uc5d0\uc11c \ucd94\uac00\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: 'Open Sans', sans-serif;\n    background-color: ",";\n    color: ",";\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  button {\n    border: 0px;\n    border-radius: 10px;\n    padding: 5px;\n    background-color: ",";    \n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor}));var Sn=function(){var n=Object(c.useState)(!1),e=Object(a.a)(n,2),t=e[0],i=e[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(q.a,{theme:t?wn:_n,children:[Object(O.jsx)("button",{onClick:function(){return i((function(n){return!n}))},children:t?"Light mode":"Dark mode"}),Object(O.jsx)(qn,{}),Object(O.jsx)(kn,{}),Object(O.jsx)(Cn.ReactQueryDevtools,{initialIsOpen:!0})]})})},Pn=new u.QueryClient;o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(u.QueryClientProvider,{client:Pn,children:Object(O.jsx)(Sn,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.57fd6ede.chunk.js.map