import { getRandomSequence, getRandomInt } from "./random.js";
export { rollDice, rollDie };

function rollDice(dice) {
  var len = dice.length;
  var diceOrder = getRandomSequence(0, len - 1);
  var n, letters = new Array(len);
  for (n = 0; n < len; ++n) letters[n] = rollDie(dice, diceOrder[n]);
  return letters;
}

function rollDie(dice, n) {
  var die = dice[n];
  if (!die) throw new Error("Invalid die number " + n);
  var i = getRandomInt(0, 5);
  var letter = die.charAt(i);
  if (letter === 'Q') letter = 'Qu';
  return letter;
}
