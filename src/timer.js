import {
  setContainerOrDocument,
  clearElement,
  detach,
  formatHMS,
  secondsToHMS,
  noop
} from "./util";
export default Timer;

var SVG_NS = "http://www.w3.org/2000/svg";
var MAX_DASH_OFFSET = 282;

function Timer(doc, handler) {
  if (!(this instanceof Timer)) return new Timer(doc, handler);
  this._setContainerAndDocument(doc);
  this._timeout = null;
  this.numberElem = null;
  this.circleContElem = null;
  this.circleElem = null;
  this.startTime = 0;
  this.stopTime = 0;
  this.stopped = true;
  this.container = this.createTimerContainer(this.container);
  this.elapsedTime = 0;
  this.totalTime = 0;
  if (!handler) handler = {};
  this.onFinished = handler.onFinished || noop;
  this.onStopped = handler.onStopped || noop;
  this.onStarted = handler.onStarted || noop;
  this.onReset = handler.onReset || noop;
}


Timer.prototype._setContainerAndDocument = setContainerOrDocument;

Timer.prototype.attach = function (container) {
  if (!container) container = this.document.body;
  if (container !== this.container.parentNode) container.appendChild(this.container);
  return this;
};

Timer.prototype.setTime = function (elapsed, total) {
  if (elapsed == null) elapsed = this.elapsedTime || 0;
  if (total == null) total = this.totalTime || 0;
  if (elapsed >= total) {
    elapsed = total;
    this.finished(elapsed, total);
  }
  var dashOffset = (elapsed / total) * MAX_DASH_OFFSET << 0;
  var circle = this.circleElem;
  if (circle) circle.style.strokeDashoffset = dashOffset + '%';
  var timeText = this.formatTime(total - elapsed);
  this.createTimerNumber(this.numberElem, timeText);
  this.elapsedTime = elapsed;
  this.totalTime = total;
  return this;
};

Timer.prototype.formatTime = function (s) {
  return formatHMS(secondsToHMS(Math.ceil(s / 1000)));
};

Timer.prototype.start = function (total) {
  this.stopped = false;
  this.container.setAttribute('title', 'Click to pause');
  var now = Date.now();
  if (this.stopTime) {
    this.startTime += now - this.stopTime;
    this.stopTime = 0;
  } else if (!this.startTime) this.startTime = now;

  this.setTime(now - this.startTime, total);

  var timer = this;
  function tick() {
    timer.setTime(Date.now() - timer.startTime);
    if (!timer.stopped) timer._timeout = setTimeout(tick, 100);
  }
  tick();
  this.onStarted(this.startTime, now);
  return this;
};

Timer.prototype.stop = function () {
  this.stopped = true;
  this.container.setAttribute('title', 'Click to resume');
  this.stopTime = Date.now();
  this._stopTimeout();
  this.onStopped(this.stopTime);
  return this;
};

Timer.prototype.stopStart = function () {
  if (this.stopped) this.start();
  else this.stop();
  return this;
};

Timer.prototype._stopTimeout = function () {
  clearTimeout(this._timeout);
  this._timeout = null;
};

Timer.prototype.reset = function () {
  var total = this.totalTime || 0;
  this.startTime = 0;
  this.setTime(0, total);
  this.onReset();
  return this;
};

Timer.prototype.finished = function () {
  //console.log("finished")
  this._stopTimeout();
  this.stopped = true;
  this.onFinished();
  return this;
};

Timer.prototype.createTimerContainer = function (cont) {
  if (!cont) cont = this.document.createElement('button');
  cont.classList.add('timer');
  cont.setAttribute('title', 'Click to pause');
  cont.addEventListener('click', () => { this.stopStart(); }, false);
  this.createTimerContents(cont);
  return cont;
};

Timer.prototype.createTimerContents = function (cont) {
  var doc = this.document;
  var number = detach(cont.getElementsByClassName('timer-number')[0]);
  var circle = detach(cont.getElementsByTagName('svg')[0]);
  var frag = doc.createDocumentFragment();
  frag.appendChild(number = this.createTimerNumber(number));
  frag.appendChild(circle = this.createTimerCircle(circle));
  clearElement(cont);
  cont.appendChild(frag);
  return cont;
};

Timer.prototype.createTimerNumber = function (cont, number) {
  var doc = this.document;
  if (cont && typeof cont !== 'object') {
    number = cont.toString();
    cont = null;
  }
  if (!cont) cont = doc.createElement('div');
  else clearElement(cont);
  cont.classList.add('timer-number');
  if (number != null) cont.appendChild(doc.createTextNode(number));
  this.numberElem = cont;
  return cont;
};

Timer.prototype.createTimerCircle = function (cont) {
  var doc = this.document;
  if (!cont) cont = createSVG(doc);
  else clearElement(cont);
  var circle = doc.createElementNS(SVG_NS, 'circle');
  circle.setAttributeNS(null, 'r', '43%');
  circle.setAttributeNS(null, 'cx', '50%');
  circle.setAttributeNS(null, 'cy', '50%');
  cont.appendChild(circle);
  this.circleContElem = cont;
  this.circleElem = circle;
  return cont;
};

function createSVG(doc, height, width) {
  var svg = doc.createElementNS(SVG_NS, 'svg');
  svg.setAttributeNS(null, 'viewbox', '0 0 100 100');
  //svg.setAttributeNS(null, 'width', width || '100%');
  //svg.setAttributeNS(null, 'height', height || '100%');
  return svg;
}
