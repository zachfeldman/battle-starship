(this["webpackJsonpbattle-starship"]=this["webpackJsonpbattle-starship"]||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);for(var a=n(0),r=n.n(a),c=n(10),l=n.n(c),i=(n(23),n(1)),o=n(7),s=n(3),u="ABCDEFG".split(""),m=Object(o.a)(Array(7).keys()),h=[],d=0;d<u.length;d++)for(var p=0;p<m.length;p++)h.push(u[d]+(m[p]+1).toString());var f=h,b={};f.forEach((function(e,t){return b[e]="clean"}));var E={hits:[],ships:["B2","E3"],currentCoordinate:"",status:b},v=Object(s.b)({name:"fireControl",initialState:E,reducers:{fire:function(e,t){e.hits=[].concat(Object(o.a)(e.hits),[t.payload]);var n=e.status;if(-1!==e.ships.indexOf(t.payload)){var a=new Audio("/battle-starship/explosion.mp3");setTimeout((function(){a.play()}),500),n[t.payload]="ship-hit"}else n[t.payload]="hit";e.status=n}}}),y=(v.actions.fire,function(e){return Object.values(e.fireControl.status).filter((function(e){return"ship-hit"===e})).length});v.reducer;function O(e){var t=Object(i.c)(y);return r.a.createElement("div",{className:"counter"},r.a.createElement("h3",null,e.title),r.a.createElement("div",{className:"count"},("000"+t).slice(-3)))}var j={initialSecond:Date.now(),currentSecond:30},g=Object(s.b)({name:"timer",initialState:j,reducers:{decrementTimer:function(e){e.currentSecond>0&&(e.currentSecond=30-Math.round((Date.now()-e.initialSecond)/1e3))},resetTimer:function(e){e.initialSecond=Date.now(),e.currentSecond=30}}}),S=g.actions,C=S.resetTimer,w=S.decrementTimer,N=function(e){return e.timer.currentSecond},k=g.reducer,x=Object(s.b)({name:"highScores",initialState:{scores:[["AAA",2],["BBB",3],["CCC",1],["UUU",8],["WWW",3]]},reducers:{updateHighScores:function(e,t){var n=e.scores,a=t.payload;n.push(["YOU",a]),e.scores=n.sort((function(e,t){return e[1]>t[1]?-1:1}))}}}),A=x.actions.updateHighScores,B=function(e){return 0===e.timer.currentSecond},K=function(e){return e.highScores.scores},G=x.reducer;function T(e){var t=Object(i.c)(N),n=Object(i.c)(y),c=Object(i.b)();return Object(a.useEffect)((function(){setTimeout((function(){c(w())}),1e3),0===t&&c(A(n))})),r.a.createElement("div",{className:"counter"},r.a.createElement("h3",null,"Timer"),r.a.createElement("div",{className:"count"},t))}n(30);var F=n(17),H={};f.forEach((function(e,t){return H[e]="clean"}));var L=function(e,t){for(var n,a,r=e.slice(0),c=e.length;c--;)n=r[a=Math.floor((c+1)*Math.random())],r[a]=r[c],r[c]=n;return r.slice(0,t)}(f,10),U={hits:[],ships:L,currentCoordinate:"",status:H},V=Object(s.b)({name:"fireControl",initialState:U,reducers:{fire:function(e,t){var n=t.payload.toUpperCase();e.hits=[].concat(Object(o.a)(e.hits),[n]);var a=e.status,r=new Audio("/battle-starship/laser-shot.mp3"),c=new Audio("/battle-starship/access-denied.mp3");if(-1===f.indexOf(n)||e.hits.filter((function(e){return e===n})).length>1?c.play():1===e.hits.filter((function(e){return e===n})).length&&r.play(),-1!==e.ships.indexOf(n)){var l=new Audio("/battle-starship/explosion.mp3");setTimeout((function(){l.play()}),500),a[n]="ship-hit"}else a[n]="hit";e.status=a},resetFireControlState:function(e){e.status=H,e.ships=L,e.hits=[]}}}),D=V.actions,I=D.fire,M=D.resetFireControlState,W=V.reducer;function R(){var e=Object(i.b)(),t=Object(a.useState)("C3"),n=Object(F.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{className:"fireControl"},r.a.createElement("img",{src:"crosshairs.png",width:"100",alt:"crosshairs"}),r.a.createElement("input",{type:"text",maxLength:2,value:c,onChange:function(e){return l(e.target.value)},onKeyPress:function(t){13===t.which&&e(I(c))}}),r.a.createElement("button",{onClick:function(){e(I(c))}},"FIRE LASER"),r.a.createElement("audio",{className:"audio-element"},r.a.createElement("source",{src:"/battle-starship/laser-shot.mp3"})))}var P=n(4),J=n(5),Y=n(6),$=n(8),q=function(e){Object($.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){return a.createElement("td",{key:this.props.cellKey,className:"letterBox"},this.props.cellLetter)}}]),n}(a.Component),z=function(e){Object($.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){return a.createElement("td",{key:this.props.cellKey,className:"numberBox"},this.props.cellValue)}}]),n}(a.Component),Q=function(e){return e.fireControl.status};function X(e){var t=Object(i.c)(Q)["ABCDEFG".split("")[e.cellValue]+e.numberGridValue];return"ship-hit"===t?r.a.createElement("td",{key:e.cellKey,className:"battleGridBox hit ship"},r.a.createElement("img",{src:"starship-hopper.png",alt:"HIT",width:"60px",className:"dragonHit"})):"ship"===t?r.a.createElement("td",{key:e.cellKey,className:"battleGridBox"}):"hit"===t?r.a.createElement("td",{key:e.cellKey,className:"battleGridBox hit"}):r.a.createElement("td",{key:e.cellKey,className:"battleGridBox"})}var Z=function(e){Object($.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"instructions"},r.a.createElement("h3",null,"How to Play"),r.a.createElement("p",null,"Ships have been hidden all around space! Use the targeting computer at the bottom of the screen and the FIRE LASER button to try to sink them and see how many you can locate in the allotted time."))}}]),n}(r.a.Component);function _(){var e=Object(i.c)(B),t=Object(i.c)(K),n=Object(i.b)(),a=t.slice(0,5);return console.log(a),e?r.a.createElement("div",{className:"high-score"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",null,"High Scores"),r.a.createElement("table",null,r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,e[0]),r.a.createElement("td",null,e[1]))}))))),r.a.createElement("button",{className:"play-again",onClick:function(){n(M()),n(C())}},"PLAY AGAIN")):r.a.createElement("div",null)}var ee=function(){return r.a.createElement("div",{id:"wrapper"},r.a.createElement("div",{className:"topMenu"},r.a.createElement("h2",null,"BattleStarship")),r.a.createElement("div",{className:"left"},r.a.createElement(T,{countdown:100}),r.a.createElement(O,{title:"Sunk",count:5}),r.a.createElement(Z,null)),r.a.createElement("div",{className:"left"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null),u.map((function(e,t){return r.a.createElement(q,{cellLetter:e,cellKey:t})}))),m.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement(z,{cellValue:e+1,cellKey:t}),m.map((function(t,n){return r.a.createElement(X,{cellValue:t,cellKey:n,numberGridValue:e+1})})))})))),r.a.createElement(R,null)),r.a.createElement("div",{className:"clear"}),r.a.createElement(_,null))},te=Object(s.a)({reducer:{fireControl:W,timer:k,highScores:G}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:te},r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ac7674c6.chunk.js.map