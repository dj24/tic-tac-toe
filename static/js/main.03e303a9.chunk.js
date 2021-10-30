(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{79:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(58),s=a.n(c),r=(a(79),a(90)),l=a(89),o=a(91),d=a(92),j=a(41),u=a(47),x="cross",b="zero",h="start",f="in progress",p="cross wins",m="zero wins",y="draw",O=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[6,4,2],[0,4,8]],g=[null,null,null,null,null,null,null,null,null],w=Object(u.b)({name:"board",initialState:{cells:g,player:x},reducers:{reset:function(e){e.cells=g,e.player=x},takeTurn:function(e,t){e.cells[t.payload]=e.player,e.player=e.player===b?x:b}}}),v=w.actions,k=v.reset,N=v.takeTurn,D=w.reducer,C=Object(u.b)({name:"board",initialState:{value:h},reducers:{setGameState:function(e,t){e.value=t.payload}}}),S=C.actions.setGameState,L=C.reducer,W=function(){var e=Object(j.c)((function(e){return e.board.player})),t=Object(j.c)((function(e){return e.board.cells})),a=Object(j.c)((function(e){return e.gameState.value})),n=Object(j.b)(),c=Object(i.useCallback)((function(e){return O.some((function(a){return a.every((function(a){return t[a]===e}))}))}),[t]);Object(i.useEffect)((function(){c(x)?n(S(p)):c(b)?n(S(m)):t.every((function(e){return null!==e}))&&n(S(y))}),[t,c,n]);return{player:e,cells:t,gameState:a,handleCellClick:function(e){return function(){null===t[e]&&(n(N(e)),a===h&&n(S(f)))}},handleStartClick:function(){n(k()),n(S(f))}}},T=a(2),B=.075,M=function(){return Object(T.jsxs)(r.a.svg,{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",initial:"hidden",animate:"show",children:[Object(T.jsx)(r.a.path,{style:{originX:0,originY:1,strokeDasharray:117},initial:{strokeDashoffset:116,scale:0},animate:{strokeDashoffset:0,scale:1},transition:{strokeDashoffset:{delay:B},scale:{duration:B}},d:"M8.5 91.5L91.6919 8.6429",strokeWidth:"16",strokeLinecap:"round"}),Object(T.jsx)(r.a.path,{style:{originX:0,originY:0,strokeDasharray:117},initial:{strokeDashoffset:116,scale:0},animate:{strokeDashoffset:0,scale:1},transition:{strokeDashoffset:{delay:.3},scale:{delay:.225,duration:B}},d:"M8.5 8.5L91.5 91.5",strokeWidth:"16",strokeLinecap:"round"})]})},z=function(){return Object(T.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(T.jsx)("g",{clipPath:"url(#clip0_1:22)",children:Object(T.jsx)(r.a.circle,{style:{strokeDasharray:264,rotate:-90},initial:{scale:0,strokeDashoffset:264},animate:{scale:1,strokeDashoffset:0},transition:{scale:{duration:.075},strokeDashoffset:{type:"spring",mass:10,stiffness:800,damping:200,delay:.075}},cx:"50",cy:"49.9999",r:"42",strokeWidth:"16",strokeLinecap:"round"})}),Object(T.jsx)("defs",{children:Object(T.jsx)("clipPath",{id:"clip0_1:22",children:Object(T.jsx)("rect",{width:"100",height:"100",fill:"white"})})})]})},G=function(){var e=W(),t=e.cells,a=e.player,i=e.handleCellClick;return Object(T.jsx)(r.a.div,{initial:{opacity:0,x:200},animate:{opacity:1,x:0},exit:{opacity:0},className:"board",children:null===t||void 0===t?void 0:t.map((function(e,t){var n="hover-container";return a===b&&null===e&&(n+=" hover:bg-blue-100"),a===x&&null===e&&(n+=" hover:bg-red-100"),Object(T.jsx)(r.a.div,{className:"cell",onClick:i(t),children:Object(T.jsxs)(r.a.div,{className:n,children:[e===b&&Object(T.jsx)(z,{}),e===x&&Object(T.jsx)(M,{})]})},t)}))})},E=function(e){var t=e.children,a=e.colour,i=e.active,n="\n  px-6 py-3 rounded-xl transition-colors font-semibold\n  ".concat(i?"text-".concat(a,"-500 bg-").concat(a,"-100"):"text-gray-400");return Object(T.jsx)("span",{className:n,children:t})},I=function(){var e=W().player;return Object(T.jsxs)(r.a.div,{initial:{y:64},animate:{y:0},exit:{y:64},transition:{type:"spring",bounce:.25},className:"flex fixed bottom-0 w-full max-w-md justify-between p-8 capitalize text-2xl",children:[Object(T.jsx)(E,{colour:"red",active:e===x,children:x}),Object(T.jsx)(E,{colour:"blue",active:e===b,children:b})]})},P=a(24),A=function(e){return Object(T.jsx)(r.a.button,Object(P.a)({className:"w-full text-lg sm:w-auto px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white"},e))},J={type:"spring",mass:10,stiffness:2e3,damping:200,restDelta:.005},X=function(){var e=W().handleStartClick;return Object(T.jsxs)(r.a.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},className:"mt-12 sm:mr-8 max-w-lg p-6 flex flex-col items-start",children:[Object(T.jsx)(r.a.h1,{layoutId:"title",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:Object(P.a)(Object(P.a)({},J),{},{delay:.2}),className:"text-5xl sm:text-6xl lg:text-7xl font-black flex mb-6 ",children:"Tic Tac Toe"}),Object(T.jsx)(r.a.p,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,transition:{duration:.1,delay:0}},transition:Object(P.a)(Object(P.a)({},J),{},{delay:.4}),className:"text-xl sm:text-2xl text-gray-400 mb-6",children:"A game for 2 players: Match 3 cells in a row before the other player to win!"}),Object(T.jsx)(A,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,transition:{duration:.1,delay:0}},transition:Object(P.a)(Object(P.a)({},J),{},{delay:.6}),onClick:e,children:"Start Game"})]})},Y=function(e){return Object(T.jsx)("button",Object(P.a)(Object(P.a)({className:"text-black hover:bg-gray-100 rounded-lg p-2"},e),{},{children:Object(T.jsxs)("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",initial:"hidden",animate:"show",className:"stroke-current w-4 h-4",children:[Object(T.jsx)("path",{d:"M8.5 91.5L91.6919 8.6429",strokeWidth:"16",strokeLinecap:"round"}),Object(T.jsx)("path",{d:"M8.5 8.5L91.5 91.5",strokeWidth:"16",strokeLinecap:"round"})]})}))},_=function(e){var t=e.children,a=W().handleStartClick;return Object(T.jsx)(r.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"w-full h-full fixed top-0 bg-black bg-opacity-25 flex items-center justify-center",children:Object(T.jsxs)(r.a.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{type:"spring",stiffness:800,damping:100,restDelta:1e-4},className:"rounded-xl w-full max-w-sm bg-white flex-col m-4",children:[Object(T.jsxs)("header",{className:"border-b px-6 py-4 font-semibold text-xl flex justify-between items-center",children:[Object(T.jsx)("span",{children:"Game Result"}),Object(T.jsx)(Y,{onClick:a})]}),Object(T.jsx)("main",{className:"p-6 flex flex-col",children:Object(T.jsx)("div",{className:"text-xl",children:t})}),Object(T.jsx)("footer",{className:"border-t p-6 flex flex-col",children:Object(T.jsx)(A,{onClick:a,children:"Play Again"})})]})})},F=function(){var e=W().gameState;return Object(T.jsx)(r.a.main,{className:"fixed w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center",children:Object(T.jsx)(l.a,{transition:{type:"spring",mass:10,stiffness:1500,damping:200,restDelta:.005},children:Object(T.jsx)(o.a,{type:"crossfade",children:Object(T.jsxs)(d.a,{exitBeforeEnter:!0,children:[e===h?Object(T.jsx)(X,{},"start-screen"):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(r.a.div,{className:"fixed top-0 p-12",children:Object(T.jsx)(r.a.h1,{className:"font-black text-4xl",layoutId:"title",children:"Tic Tac Toe"})}),Object(T.jsx)(G,{},"board"),Object(T.jsx)(I,{},"player-indicator")]}),e===p&&Object(T.jsxs)(_,{children:["\ud83c\udf89 ",Object(T.jsx)("span",{className:"text-red-500",children:"Cross"})," Wins!"]},"cross-modal"),e===m&&Object(T.jsxs)(_,{children:["\ud83c\udf89 ",Object(T.jsx)("span",{className:"text-blue-500",children:"Zero"})," Wins!"]},"zero-modal"),e===y&&Object(T.jsx)(_,{children:"\ud83d\ude45\u200d\u2642\ufe0f Draw!"},"draw-modal")]})})})})},R=Object(u.a)({reducer:{board:D,gameState:L}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(j.a,{store:R,children:Object(T.jsx)(F,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[87,1,2]]]);
//# sourceMappingURL=main.03e303a9.chunk.js.map