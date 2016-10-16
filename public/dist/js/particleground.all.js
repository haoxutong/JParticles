/**
 * Particleground.js v1.0.0 (https://github.com/Barrior/Particleground.js)
 * Copyright 2016 Barrior <Barrior@qq.com>
 * Licensed under the MIT (https://opensource.org/licenses/mit-license.php)
 */
!function(t){"object"==typeof module&&module.exports?module.exports=t():t()}(function(){"use strict";function t(t){return parseInt(t,10)}function e(t){return t.replace(L,"")}function i(){return"#"+b().toString(16).slice(-6)}function n(t,e){return b()*(t-e)+e}function o(){var t,e,i=arguments,n=i[0]||{},s=!1,r=i.length,c=1;for("boolean"==typeof n&&(s=n,n=i[1]||{},c++);c<r;c++)for(e in i[c])t=i[c][e],s&&(a(t)||A(t))?n[e]=o(s,A(t)?[]:{},t):n[e]=t;return n}function s(t,e){return toString.call(t)===e}function r(t){return s(t,"[object Function]")}function a(t){return s(t,"[object Object]")}function c(t){return!(!t||1!==t.nodeType)}function f(e,i){var n=E.getComputedStyle(e)[i];return S.test(n)?t(n):n}function h(t){for(var e=t.offsetLeft||0,i=t.offsetTop||0;t=t.offsetParent;)e+=t.offsetLeft,i+=t.offsetTop;return{left:e,top:i}}function u(t,e,i){t.addEventListener(e,i)}function l(t,e,i){t.removeEventListener(e,i)}function p(t){t.cw=t.c.width=f(t.container,"width")||k,t.ch=t.c.height=f(t.container,"height")||z}function m(t,e,i,n){T&&(t.container=c(i)?i:C.querySelector(i))&&(t.set=o(!0,{},M.commonConfig,e.defaultConfig,n),t.c=C.createElement("canvas"),t.cxt=t.c.getContext("2d"),t.paused=!1,p(t),t.container.innerHTML="",t.container.appendChild(t.c),t.color=v(t.set.color),t.init())}function d(t,e){return t>0&&t<1?e*t:t}function v(t){var e=!!A(t)&&t.length,n=function(){return t[P(b()*e)]};return"string"!=typeof t?e?n:i:function(){return t}}function g(t,e){t.set&&!t.paused&&(r(e)&&e.call(t,"pause"),t.paused=!0)}function y(t,e){t.set&&t.paused&&(r(e)&&e.call(t,"open"),t.paused=!1,t.draw())}function x(t,e){t.set.resize&&u(E,"resize",function(){var i=t.cw,n=t.ch;p(t);var o=t.cw/i,s=t.ch/n;A(t.dots)&&t.dots.forEach(function(t){a(t)&&(t.x*=o,t.y*=s)}),r(e)&&e.call(t,o,s),t.paused&&t.draw()})}function w(t,i,n){e(i).split(",").forEach(function(e){t[e]=function(){F[e](this,n)}})}var E=window,C=document,b=Math.random,P=Math.floor,A=Array.isArray,T=!!C.createElement("canvas").getContext,k=485,z=300,L=/\s/g,S=/^\d+(\.\d+)?[a-z]+$/i;E.requestAnimationFrame=function(t){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(E);var F={pInt:t,trimAll:e,randomColor:i,limitRandom:n,extend:o,typeChecking:s,isFunction:r,isPlainObject:a,isElem:c,getCss:f,offset:h,createCanvas:m,scaleValue:d,setColor:v,pause:g,open:y,resize:x,modifyPrototype:w},M={version:"1.0.0",canvasSupport:T,commonConfig:{opacity:1,color:[],resize:!0},util:F,inherit:{requestAnimationFrame:function(){!this.paused&&E.requestAnimationFrame(this.draw.bind(this))},pause:function(){g(this)},open:function(){y(this)},resize:function(){x(this)}},event:{on:u,off:l},extend:function(t){return o(t,this.inherit),this}};return E.Particleground=M,"function"==typeof define&&define.amd&&define(function(){return M}),M}),+function(t){"use strict";function e(t,e,i){for(var n=o.getCss;t=t.offsetParent;)if(n(t,e)===i)return!0;return!1}function i(t,e){o.createCanvas(this,i,t,e)}function n(t){var e=this,i=e.set;i.num>0&&i.range>0&&(t="pause"===t?"off":"on",s[t](i.eventElem,"mousemove",e.moveHandler),s[t](i.eventElem,"touchmove",e.moveHandler))}var o=t.util,s=t.event,r=Math.random,a=Math.abs,c=2*Math.PI;i.defaultConfig={speed:1,num:.12,max:2.4,min:.6,dis:130,lineWidth:.2,range:160,eventElem:null};var f=i.prototype={version:"1.0.0",init:function(){this.set.num>0&&(this.set.range>0&&(o.isElem(this.set.eventElem)||this.set.eventElem===document||(this.set.eventElem=this.c),this.posX=r()*this.cw,this.posY=r()*this.ch,this.event()),this.createDots(),this.draw(),this.resize())},createDots:function(){for(var t,e=this.cw,i=this.ch,n=this.set,s=this.color,r=o.limitRandom,a=n.speed,c=n.max,f=n.min,h=o.pInt(o.scaleValue(n.num,e)),u=[];h--;)t=r(c,f),u.push({x:r(e-t,t),y:r(i-t,t),r:t,vx:r(a,.5*-a)||a,vy:r(a,.5*-a)||a,color:s()});this.dots=u},draw:function(){var t=this.set;if(!(t.num<=0)){var e=this.cw,i=this.ch,n=this.cxt,o=this.paused;n.clearRect(0,0,e,i),n.lineWidth=t.lineWidth,n.globalAlpha=t.opacity,this.dots.forEach(function(t){var s=t.r;if(n.save(),n.beginPath(),n.arc(t.x,t.y,s,0,c),n.fillStyle=t.color,n.fill(),n.restore(),!o){t.x+=t.vx,t.y+=t.vy;var r=t.x,a=t.y;(r+s>=e||r-s<=0)&&(t.vx*=-1),(a+s>=i||a-s<=0)&&(t.vy*=-1)}}),t.range>0&&this.connectDots(),this.requestAnimationFrame()}},connectDots:function(){var t=this.cxt,e=this.set,i=e.dis,n=this.posX,o=this.posY,s=e.range,r=this.dots,c=r.length;r.forEach(function(e,f){for(var h=e.x,u=e.y,l=e.color;++f<c;){var p=r[f],m=p.x,d=p.y;a(h-m)<=i&&a(u-d)<=i&&(a(h-n)<=s&&a(u-o)<=s||a(m-n)<=s&&a(d-o)<=s)&&(t.save(),t.beginPath(),t.moveTo(h,u),t.lineTo(m,d),t.strokeStyle=l,t.stroke(),t.restore())}})},getElemOffset:function(){return this.elemOffset=this.elemOffset?o.offset(this.set.eventElem):null},event:function(){this.set.eventElem!==document&&(this.elemOffset=!0),this.moveHandler=function(t){this.posX=t.pageX,this.posY=t.pageY,this.getElemOffset()&&(e(this.set.eventElem,"position","fixed")&&(this.posX=t.clientX,this.posY=t.clientY),this.posX-=this.elemOffset.left,this.posY-=this.elemOffset.top)}.bind(this),n.call(this)}};t.extend(f),o.modifyPrototype(f,"pause, open",n),o.modifyPrototype(f,"resize",function(t,e){this.set.num>0&&this.set.range>0&&(this.posX*=t,this.posY*=e,this.getElemOffset())}),t.particle=f.constructor=i}(Particleground),+function(t){"use strict";function e(t,n){i.createCanvas(this,e,t,n)}var i=t.util,n=Math.random,o=2*Math.PI;e.defaultConfig={color:"#fff",max:6.5,min:.4,speed:.4};var s=e.prototype={version:"1.0.0",init:function(){this.dots=[],this.createDots(),this.draw(),this.resize()},snowShape:function(){var t=this.color,e=this.cw,o=this.set,s=o.speed,r=i.limitRandom(o.max,o.min);return{x:n()*e,y:-r,r:r,vx:n()||.4,vy:r*s,color:t()}},createDots:function(){for(var t=i.pInt(6*n()),e=this.dots;t--;)e.push(this.snowShape())},draw:function(){var t=this,e=t.set,i=t.cxt,s=t.cw,r=t.ch,a=t.paused;i.clearRect(0,0,s,r),i.globalAlpha=e.opacity,t.dots.forEach(function(e,c,f){var h=e.x,u=e.y,l=e.r;i.save(),i.beginPath(),i.arc(h,u,l,0,o),i.fillStyle=e.color,i.fill(),i.restore(),a||(e.x+=e.vx,e.y+=e.vy,n()>.99&&n()>.5&&(e.vx*=-1),h<0||h-l>s?f.splice(c,1,t.snowShape()):u-l>=r&&f.splice(c,1))}),!a&&n()>.9&&t.createDots(),t.requestAnimationFrame()}};t.extend(s),t.snow=s.constructor=e}(Particleground),+function(t){"use strict";function e(t,n){i.createCanvas(this,e,t,n)}var i=t.util,n=i.limitRandom,o=i.randomColor,s=i.scaleValue,r=Math.random,a=Math.sin,c=2*Math.PI,f="undefined",h=Array.isArray;e.defaultConfig={num:3,fillColor:[],lineColor:[],lineWidth:[],offsetLeft:[],offsetTop:[],crestHeight:[],rippleNum:[],speed:[],fill:!1,stroke:!0};var u=e.prototype={version:"1.0.0",init:function(){this.set.num>0&&(this.rippleLength=[],this.attrNormalize(),this.createDots(),this.draw(),this.resize())},attrNormalize:function(){["fillColor","lineColor","lineWidth","offsetLeft","offsetTop","crestHeight","rippleNum","speed","fill","stroke"].forEach(function(t){this.attrProcessor(t)}.bind(this))},attrProcessor:function(t){var e=this.set.num,i=this.set[t],n=i,o="offsetLeft"===t?this.cw:this.ch;for(h(i)||(n=this.set[t]=[]);e--;){var s=h(i)?i[e]:i;n[e]=typeof s===f?this.generateAttrVal(t):this.scaleValue(t,s,o),"rippleNum"===t&&(this.rippleLength[e]=this.cw/n[e])}},scaleValue:function(t,e,i){return"offsetTop"===t||"offsetLeft"===t||"crestHeight"===t?s(e,i):e},generateAttrVal:function(t){var e=this.cw,i=this.ch;switch(t){case"lineColor":case"fillColor":t=o();break;case"lineWidth":t=n(2,.2);break;case"offsetLeft":t=r()*e;break;case"offsetTop":case"crestHeight":t=r()*i;break;case"rippleNum":t=n(e/2,1);break;case"speed":t=n(.4,.1);break;case"fill":t=!1;break;case"stroke":t=!0}return t},setOffsetTop:function(t){this.set.num>0&&(!h(t)&&t>0&&t<1&&(t*=this.ch),this.set.offsetTop.forEach(function(e,i,n){n[i]=h(t)?t[i]||e:t}))},createDots:function(){for(var t=this.dots=[],e=this.rippleLength,i=this.cw,n=this.set.num;n--;){for(var o=[],s=c/e[n],r=0;r<i;r++)o.push({x:r,y:r*s});t[n]=o}},draw:function(){var t=this.set;if(!(t.num<=0)){var e=this.cxt,i=this.cw,n=this.ch,o=this.paused;e.clearRect(0,0,i,n),e.globalAlpha=t.opacity,this.dots.forEach(function(s,r){var c=t.crestHeight[r],f=t.offsetLeft[r],h=t.offsetTop[r],u=t.speed[r];e.save(),e.beginPath(),s.forEach(function(t,i){e[i?"lineTo":"moveTo"](t.x,c*a(t.y+f)+h),!o&&(t.y-=u)}),t.fill[r]&&(e.lineTo(i,n),e.lineTo(0,n),e.closePath(),e.fillStyle=t.fillColor[r],e.fill()),t.stroke[r]&&(e.lineWidth=t.lineWidth[r],e.strokeStyle=t.lineColor[r],e.stroke()),e.restore()}),this.requestAnimationFrame()}}};t.extend(u),i.modifyPrototype(u,"resize",function(t,e){this.set.num>0&&this.dots.forEach(function(i){i.forEach(function(i){i.x*=t,i.y*=e})})}),t.wave=u.constructor=e}(Particleground);