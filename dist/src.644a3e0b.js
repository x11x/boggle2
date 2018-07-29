parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"ytYP":[function(require,module,exports) {
"use strict";function t(t){for(var e;e=t.firstChild;)t.removeChild(e)}function e(t){var e=t&&t.parentNode;return e&&e.removeChild(t),t}function o(t,e){t&&(9===t.nodeType?(e=t,t=null):e=t.ownerDocument),this.container=t,this.document=e||document}function n(t){var e;t?1===t.nodeType&&(t=(e=t).ownerDocument):t=document,this.container=e,this.document=t}function r(t){var e=Math.floor(t/3600);e>=1?t-=3600*e:e=0;var o=Math.floor(t/60);return o>=1?t-=60*o:o=0,t<1&&(t=0),[e,o,t]}function i(t,e){for(var o,n,r=[],i=0,c=t.length;i<c;++i)o=t[i],(e||o||n)&&(r.push(o&&!n?o.toString():u(2,o,"0")),n=!0);return r.join(":")||"0"}function u(t,e,o){for(e=e.toString(),o||(o="0");e.length<t;)e=o+e;return e}function c(){}Object.defineProperty(exports,"__esModule",{value:!0}),exports.clearElement=t,exports.setContainerAndDocument=o,exports.setContainerOrDocument=n,exports.detach=e,exports.secondsToHMS=r,exports.formatHMS=i,exports.zerofill=u,exports.noop=c;
},{}],"0JF1":[function(require,module,exports) {
"use strict";function e(e,r){var t,n=r-e+1,o=new Array(n);for(t=0;t<n;++t)o[t]=t+e;return o}function r(e){for(var r,t,n=e.length;n--;)t=Math.random()*n<<0,r=e[n],e[n]=e[t],e[t]=r;return e}function t(e,r){return Math.random()*(r-e+1)+e<<0}function n(t,n){return r(e(t,n))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sequence=e,exports.shuffle=r,exports.getRandomInt=t,exports.getRandomSequence=n;
},{}],"WhGk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.rollDie=exports.rollDice=void 0;var r=require("./random.js");function e(e){var t,n=e.length,i=(0,r.getRandomSequence)(0,n-1),l=new Array(n);for(t=0;t<n;++t)l[t]=o(e,i[t]);return l}function o(e,o){var t=e[o];if(!t)throw new Error("Invalid die number "+o);var n=(0,r.getRandomInt)(0,5),i=t.charAt(n);return"Q"===i&&(i="Qu"),i}exports.rollDice=e,exports.rollDie=o;
},{"./random.js":"0JF1"}],"jgEX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=["FPFKSA","ERLIDX","EGHWNE","LNHNZR","VERLYD","APSHCO","NQIMHU","ANAEEG","TYTDSI","STOESI","MTOICU","RETWVH","OTTAOW","JOOBBA","USEENI","ERTTYL"];
},{}],"sy+j":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./dice"),t=require("./util"),r=require("./boggle-dice"),n=o(r);function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(this instanceof i))return new i(e,t);this.board=a(e),this.document=this.board.ownerDocument,this.letters=null,this.dice=t||n.default}function d(e,t){var r,n,o=e.createDocumentFragment(),i=e.createElement("tr"),d=0,a=t.length;for(n=0;n<a;++n)(r=e.createElement("td")).appendChild(e.createTextNode(t[n])),i.appendChild(r),4==++d&&(d=0,o.appendChild(i),i=e.createElement("tr"));return o.appendChild(i),o}function a(e){var t;return e?1===e.nodeType&&(e=(t=e).ownerDocument):e=document,t||(t=e.createElement("table")),t.classList.add("boggle","fullscreen"),t}exports.default=i,i.prototype.cover=function(){return this.board.classList.add("covered"),this},i.prototype.uncover=function(){return this.board.classList.remove("covered"),this},i.prototype.clear=function(){return(0,t.clearElement)(this.board),this},i.prototype.fill=function(e){this.letters=e;var t=d(this.document,e);return this.clear(),this.board.appendChild(t),this},i.prototype.shuffle=function(){return this.fill((0,e.rollDice)(this.dice))},i.prototype.attach=function(e){this.board.parentNode!==e&&e.appendChild(this.board)};
},{"./dice":"WhGk","./util":"ytYP","./boggle-dice":"jgEX"}],"j7Ys":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=require("./util");exports.default=s;var i="http://www.w3.org/2000/svg",o=282;function s(t,i){if(!(this instanceof s))return new s(t,i);this._setContainerAndDocument(t),this._timeout=null,this.numberElem=null,this.circleContElem=null,this.circleElem=null,this.startTime=0,this.stopTime=0,this.stopped=!0,this.container=this.createTimerContainer(this.container),this.elapsedTime=0,this.totalTime=0,i||(i={}),this.onFinished=i.onFinished||e.noop,this.onStopped=i.onStopped||e.noop,this.onStarted=i.onStarted||e.noop,this.onReset=i.onReset||e.noop}function n(t,e,o){var s=t.createElementNS(i,"svg");return s.setAttributeNS(null,"viewbox","0 0 100 100"),s}s.prototype._setContainerAndDocument=e.setContainerOrDocument,s.prototype.attach=function(t){return t||(t=this.document.body),t!==this.container.parentNode&&t.appendChild(this.container),this},s.prototype.setTime=function(t,e){null==t&&(t=this.elapsedTime||0),null==e&&(e=this.totalTime||0),t>=e&&(t=e,this.finished(t,e));var i=t/e*o<<0,s=this.circleElem;s&&(s.style.strokeDashoffset=i+"%");var n=this.formatTime(e-t);return this.createTimerNumber(this.numberElem,n),this.elapsedTime=t,this.totalTime=e,this},s.prototype.formatTime=function(t){return(0,e.formatHMS)((0,e.secondsToHMS)(Math.ceil(t/1e3)))},s.prototype.start=function(t){this.stopped=!1,this.container.setAttribute("title","Click to pause");var e=Date.now();this.stopTime?(this.startTime+=e-this.stopTime,this.stopTime=0):this.startTime||(this.startTime=e),this.setTime(e-this.startTime,t);var i=this;return function t(){i.setTime(Date.now()-i.startTime),i.stopped||(i._timeout=setTimeout(t,100))}(),this.onStarted(this.startTime,e),this},s.prototype.stop=function(){return this.stopped=!0,this.container.setAttribute("title","Click to resume"),this.stopTime=Date.now(),this._stopTimeout(),this.onStopped(this.stopTime),this},s.prototype.stopStart=function(){return this.stopped?this.start():this.stop(),this},s.prototype._stopTimeout=function(){clearTimeout(this._timeout),this._timeout=null},s.prototype.reset=function(){var t=this.totalTime||0;return this.startTime=0,this.setTime(0,t),this.onReset(),this},s.prototype.finished=function(){return this._stopTimeout(),this.stopped=!0,this.onFinished(),this},s.prototype.createTimerContainer=function(t){var e=this;return t||(t=this.document.createElement("button")),t.classList.add("timer"),t.setAttribute("title","Click to pause"),t.addEventListener("click",function(){e.stopStart()},!1),this.createTimerContents(t),t},s.prototype.createTimerContents=function(t){var i=this.document,o=(0,e.detach)(t.getElementsByClassName("timer-number")[0]),s=(0,e.detach)(t.getElementsByTagName("svg")[0]),n=i.createDocumentFragment();return n.appendChild(o=this.createTimerNumber(o)),n.appendChild(s=this.createTimerCircle(s)),(0,e.clearElement)(t),t.appendChild(n),t},s.prototype.createTimerNumber=function(i,o){var s=this.document;return i&&"object"!==(void 0===i?"undefined":t(i))&&(o=i.toString(),i=null),i?(0,e.clearElement)(i):i=s.createElement("div"),i.classList.add("timer-number"),null!=o&&i.appendChild(s.createTextNode(o)),this.numberElem=i,i},s.prototype.createTimerCircle=function(t){var o=this.document;t?(0,e.clearElement)(t):t=n(o);var s=o.createElementNS(i,"circle");return s.setAttributeNS(null,"r","43%"),s.setAttributeNS(null,"cx","50%"),s.setAttributeNS(null,"cy","50%"),t.appendChild(s),this.circleContElem=t,this.circleElem=s,t};
},{"./util":"ytYP"}],"ux8K":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./util"),e=require("./boggle-board"),o=r(e),n=require("./timer"),i=r(n);function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n){if(!(this instanceof s))return new s(container,t,e);this._setContainerAndDocument(t),this.container||(this.container=this.document.createElement("div")),this.board=e instanceof o.default?e:new o.default(this.document,e),this.board.cover(),this.timer=n||new i.default(this.document,this),this.timer.boggle=this,this.timer.setTime(0,18e4)}exports.default=s,s.prototype._setContainerAndDocument=t.setContainerOrDocument,s.prototype.attach=function(t){return t||(t=this.document.body),this.timer.attach(this.container),this.board.attach(this.container),this.container.parentNode!==t&&t.appendChild(this.container),this},s.prototype.onStopped=function(){this.boggle.board.cover()},s.prototype.onStarted=function(){this.boggle.board.uncover()},s.prototype.onReset=function(){},s.prototype.onFinished=function(){this.boggle.board.cover()};
},{"./util":"ytYP","./boggle-board":"sy+j","./timer":"j7Ys"}],"2gen":[function(require,module,exports) {
"use strict";var e=require("./boggle"),r=a(e),t=require("./timer"),u=a(t);function a(e){return e&&e.__esModule?e:{default:e}}var f=new r.default;f.board.shuffle(),f.attach();
},{"./boggle":"ux8K","./timer":"j7Ys"}]},{},["2gen"], null)
//# sourceMappingURL=/src.644a3e0b.map