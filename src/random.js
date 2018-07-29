export { sequence, shuffle, getRandomInt, getRandomSequence };

function sequence(min, max) {
  var l = max - min + 1, seq = new Array(l), i;
  for (i = 0; i < l; ++i) seq[i] = i + min;
  return seq;
}

/* from http://stackoverflow.com/a/6274398 */
function shuffle(array) {
  var counter = array.length, temp, index;

  // While there are elements in the array
  while (counter--) {
    // Pick a random index
    index = (Math.random() * counter) << 0;
    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

function getRandomInt(min, max) {
  return (Math.random() * (max - min + 1) + min) << 0;
}

function getRandomSequence(min, max) {
  return shuffle(sequence(min, max));
}

