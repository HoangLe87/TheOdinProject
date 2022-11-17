(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),c=n.n(o)()(a());c.push([e.id,"body,#content{height:100vh;background:linear-gradient(black 70%, rgb(62, 16, 19));color:#fff;display:flex;flex-direction:column;justify-content:space-between;margin:0}img{width:250px;aspect-ratio:1;border-radius:50%;margin:2rem}header{display:flex;font-weight:bold;margin:0;text-align:center;justify-content:right}ul{list-style:none;display:flex;justify-content:center;gap:1rem;margin:2rem}li:hover{cursor:pointer;transform:scale(1.1)}footer{text-align:center;font-size:small}main{text-align:center;display:flex;flex-direction:column;justify-content:space-between;gap:3rem;text-align:center}#menuUl,#contactsUl{display:grid;padding:0;margin:3rem}#menuUl>li{display:flex;gap:1rem;justify-content:center}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&c[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var d=e[i],l=r.base?d[0]+r.base:d[0],p=o[l]||0,s="".concat(l," ").concat(p);o[l]=p+1;var u=n(s),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,r);r.byIndex=i,t.splice(i,0,{identifier:s,updater:h,references:1})}c.push(s)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var d=r(e,a),l=0;l<o.length;l++){var p=n(o[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{let e=document.createElement("div"),t=document.createElement("ul"),r=document.createElement("li"),a=document.createElement("li"),o=document.createElement("li");r.textContent="Home",r.setAttribute("id","home"),a.textContent="Contacts",a.setAttribute("id","contacts"),o.textContent="Menu",o.setAttribute("id","menu"),t.appendChild(r),t.appendChild(a),t.appendChild(o),e.appendChild(t);const c=e,i=n.p+"d6f4ee770ac59e0d7974.jpg",d=n.p+"948bd2ea479ce1a2145c.jpg",l=n.p+"1ffc8c0de4c148679ad2.jpg";let p=document.createElement("div"),s=document.createElement("h1");s.textContent="Asian Fusion";let u=document.createElement("div");u.classList.add("panel");const m=document.createElement("img"),h=document.createElement("img"),f=document.createElement("img");p.appendChild(m),p.appendChild(h),p.appendChild(f),m.src=i,h.src=d,f.src=l,p.appendChild(s),p.appendChild(u);const C=p;let v=document.createElement("div"),g=document.createElement("h1");g.textContent="Menu";let E=document.createElement("ul");E.setAttribute("id","menuUl");let x=document.createElement("div");x.textContent="............................";let y=document.createElement("div");y.textContent="............................";let b=document.createElement("div");b.textContent="............................";let w=document.createElement("li"),j=document.createElement("div"),A=document.createElement("div");j.textContent="burger",A.textContent="99 KC",w.appendChild(j),w.appendChild(x),w.appendChild(A);let T=document.createElement("li"),I=document.createElement("div"),M=document.createElement("div");I.textContent="pizza",M.textContent="199 KC",T.appendChild(I),T.appendChild(y),T.appendChild(M);let S=document.createElement("li"),B=document.createElement("div"),L=document.createElement("div");B.textContent="steak",L.textContent="299 KC",S.appendChild(B),S.appendChild(b),S.appendChild(L),E.appendChild(w),E.appendChild(T),E.appendChild(S),v.appendChild(g),v.appendChild(E);const k=v;let U=document.createElement("div"),P=document.createElement("h1");P.textContent="Contacts";let N=document.createElement("ul");N.setAttribute("id","contactsUl");let Z=document.createElement("li"),z=document.createElement("div");z.textContent="Andel 115, Prague",Z.appendChild(z);let F=document.createElement("li"),H=document.createElement("div");H.textContent="Czech Republic, 150 00",F.appendChild(H);let O=document.createElement("li"),K=document.createElement("div");K.textContent="Tel: 987 654 321",O.appendChild(K),N.appendChild(Z),N.appendChild(F),N.appendChild(O),U.appendChild(P),U.appendChild(N);const R=U;let $=document.createElement("div");$.textContent="Hoang Le 2022";const _=$;var q=n(379),D=n.n(q),J=n(795),G=n.n(J),Q=n(569),V=n.n(Q),W=n(565),X=n.n(W),Y=n(216),ee=n.n(Y),te=n(589),ne=n.n(te),re=n(192),ae={};ae.styleTagTransform=ne(),ae.setAttributes=X(),ae.insert=V().bind(null,"head"),ae.domAPI=G(),ae.insertStyleElement=ee(),D()(re.Z,ae),re.Z&&re.Z.locals&&re.Z.locals;let oe=document.createElement("header"),ce=document.createElement("main"),ie=document.createElement("footer");oe.appendChild(c),ie.appendChild(_),ce.appendChild(C);let de=document.getElementById("content");de.appendChild(oe),de.appendChild(ce),de.appendChild(ie),document.getElementById("menu").addEventListener("click",(()=>{ce.textContent="",ce.appendChild(k),de.insertBefore(ce,ie)})),document.getElementById("home").addEventListener("click",(()=>{ce.textContent="",ce.appendChild(C),de.insertBefore(ce,ie)})),document.getElementById("contacts").addEventListener("click",(()=>{ce.textContent="",ce.appendChild(R),de.insertBefore(ce,ie)}))})()})();