import { setContainerOrDocument } from "./util";
import BoggleBoard from "./boggle-board";
import Timer from "./timer";

export default Boggle;

function Boggle(doc, dice, timer) {
  if (!(this instanceof Boggle)) return new Boggle(container, doc, dice);
  this._setContainerAndDocument(doc);
  if (!this.container) this.container = this.document.createElement('div');
  this.board = dice instanceof BoggleBoard ? dice : new BoggleBoard(this.document, dice);
  this.board.cover();
  this.timer = timer || new Timer(this.document, this);
  this.timer.boggle = this;
  this.timer.setTime(0, 3 * 60000);
}

Boggle.prototype._setContainerAndDocument = setContainerOrDocument;

Boggle.prototype.attach = function (container) {
  if (!container) container = this.document.body;
  this.timer.attach(this.container);
  this.board.attach(this.container);
  if (this.container.parentNode !== container) container.appendChild(this.container);
  return this;
};

Boggle.prototype.onStopped = function () {
  this.boggle.board.cover();
};

Boggle.prototype.onStarted = function () {
  this.boggle.board.uncover();
};

Boggle.prototype.onReset = function () {
};

Boggle.prototype.onFinished = function () {
  this.boggle.board.cover();
};
