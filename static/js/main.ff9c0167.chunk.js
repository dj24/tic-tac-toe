(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{15:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(5),i=n.n(a),l=(n(15),"cross"),o="zero",c=n(4),d=n(6),h={cells:[null,null,null,null,null,null,null,null,null],player:l},u=Object(d.b)({name:"board",initialState:h,reducers:{reset:function(e){h},takeTurn:function(e,t){e.cells[t.payload]=e.player,e.player=e.player===o?l:o}}}),j=u.actions,f=(j.reset,j.takeTurn),b=u.reducer,k=function(){var e=Object(c.c)((function(e){return e.board.player})),t=Object(c.c)((function(e){return e.board.cells})),n=Object(c.b)();return{player:e,cells:t,handleCellClick:function(e){return function(){null===t[e]&&n(f(e))}}}},p=n(25),w=n(1),x=.075,O=function(){return Object(w.jsxs)(p.a.svg,{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",initial:"hidden",animate:"show",children:[Object(w.jsx)(p.a.path,{style:{originX:0,originY:1,strokeDasharray:117},initial:{strokeDashoffset:116,scale:0},animate:{strokeDashoffset:0,scale:1},transition:{strokeDashoffset:{delay:x},scale:{duration:x}},d:"M8.5 91.5L91.6919 8.6429",strokeWidth:"16",strokeLinecap:"round"}),Object(w.jsx)(p.a.path,{style:{originX:0,originY:0,strokeDasharray:117},initial:{strokeDashoffset:116,scale:0},animate:{strokeDashoffset:0,scale:1},transition:{strokeDashoffset:{delay:.3},scale:{delay:.225,duration:x}},d:"M8.5 8.5L91.5 91.5",strokeWidth:"16",strokeLinecap:"round"})]})},y=function(){return Object(w.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(w.jsx)("g",{clipPath:"url(#clip0_1:22)",children:Object(w.jsx)(p.a.circle,{style:{strokeDasharray:264,rotate:-90},initial:{scale:0,strokeDashoffset:264},animate:{scale:1,strokeDashoffset:0},transition:{scale:{duration:.075},strokeDashoffset:{type:"spring",mass:10,stiffness:800,damping:200,delay:.075}},cx:"50",cy:"49.9999",r:"42",strokeWidth:"16",strokeLinecap:"round"})}),Object(w.jsx)("defs",{children:Object(w.jsx)("clipPath",{id:"clip0_1:22",children:Object(w.jsx)("rect",{width:"100",height:"100",fill:"white"})})})]})},g=function(){var e=k(),t=e.cells,n=e.handleCellClick;return Object(w.jsx)("div",{className:"board",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(w.jsxs)("div",{className:"cell",onClick:n(t),children:[e===o&&Object(w.jsx)(y,{}),e===l&&Object(w.jsx)(O,{})]},t)}))})};var m=function(){return Object(w.jsx)("main",{children:Object(w.jsx)(g,{})})},v=Object(d.a)({reducer:{board:b}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(c.a,{store:v,children:Object(w.jsx)(m,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.ff9c0167.chunk.js.map