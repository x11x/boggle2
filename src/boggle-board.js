import { rollDice } from "./dice";
import { clearElement } from "./util";
import BOGGLE_DICE from "./boggle-dice";

export default BoggleBoard;

function BoggleBoard(doc, dice) {
  if (!(this instanceof BoggleBoard)) return new BoggleBoard(doc, dice);
  this.board = createBoggleBoard(doc);
  this.document = this.board.ownerDocument;
  this.letters = null;
  this.dice = dice || BOGGLE_DICE;
}

BoggleBoard.prototype.cover = function () {
  this.board.classList.add('covered');
  return this;
};

BoggleBoard.prototype.uncover = function () {
  this.board.classList.remove('covered');
  return this;
};

BoggleBoard.prototype.clear = function () {
  clearElement(this.board);
  return this;
};

BoggleBoard.prototype.fill = function (letters) {
  this.letters = letters;
  var boardLetters = createBoggleBoardLettersFragment(this.document, letters);
  this.clear();
  this.board.appendChild(boardLetters);
  return this;
};

BoggleBoard.prototype.shuffle = function () {
  return this.fill(rollDice(this.dice));
};

BoggleBoard.prototype.attach = function (container) {
  if (this.board.parentNode !== container) container.appendChild(this.board);
};

function createBoggleBoardLettersFragment(doc, letters) {
  var frag = doc.createDocumentFragment();
  var cell, row = doc.createElement('tr');
  var r = 0, l = letters.length, i;
  for (i = 0; i < l; ++i) {
    cell = doc.createElement('td');
    cell.appendChild(doc.createTextNode(letters[i]));
    row.appendChild(cell);
    if (++r === 4) {
      r = 0;
      frag.appendChild(row);
      row = doc.createElement('tr');
    }
  }
  frag.appendChild(row);
  return frag;
}

function createBoggleBoard(doc) {
  var board;
  if (!doc) doc = document;
  else if (doc.nodeType === 1) {
    board = doc;
    doc = board.ownerDocument;
  }
  if (!board) board = doc.createElement('table');
  board.classList.add('boggle', 'fullscreen');
  return board;
}
