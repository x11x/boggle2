export {
  clearElement,
  setContainerAndDocument,
  setContainerOrDocument,
  detach,
  secondsToHMS,
  formatHMS,
  zerofill,
  noop
};


function clearElement(element) {
  var c;
  while (c = element.firstChild) element.removeChild(c);
}

function detach(node) {
  var parentNode = node && node.parentNode;
  if (parentNode) parentNode.removeChild(node);
  return node;
}

function setContainerAndDocument(container, doc) {
  if (container) {
    if (container.nodeType === 9) {
      doc = container;
      container = null;
    } else {
      doc = container.ownerDocument;
    }
  }
  this.container = container;
  this.document = doc || document;
}

function setContainerOrDocument(doc) {
  var cont;
  if (!doc) doc = document;
  else if (doc.nodeType === 1) {
    cont = doc;
    doc = cont.ownerDocument;
  }
  this.container = cont;
  this.document = doc;
}

function secondsToHMS(sec) {
  var hours = Math.floor(sec / 3600);
  if (hours >= 1) sec -= hours * 3600;
  else hours = 0;

  var min = Math.floor(sec / 60);
  if (min >= 1) sec -= min * 60;
  else min = 0;

  if (sec < 1) sec = 0;

  return [hours, min, sec];
}

function formatHMS(hms, showZeroes) {
  var o = [], n, nz;
  for (var i = 0, l = hms.length; i < l; ++i) {
    n = hms[i];
    if (showZeroes || n || nz) {
      o.push(n && !nz ? n.toString() : zerofill(2, n, '0'));
      nz = true;
    }
  }
  return o.join(':') || '0';
}

function zerofill(l, s, c) {
  s = s.toString();
  if (!c) c = '0';
  while (s.length < l) s = c + s;
  return s;
}

function noop () {}
