/** Takes 2 strings, one is a word and one is a letter.
 * Checks whether word can be built with given letters, and
 * returns a boolean.
 */

function canConstructWord(word, letters) {

  const lettersInWord = {};

  // set up frequencies for lettersInWord
  for (const letter of word) {
    if (letter in lettersInWord) {
      lettersInWord[letter]++;
    }
    else {
      lettersInWord[letter] = 1;
    }
  }

  const lettersPool = {};

  for (const letter of letters) {
    if (letter in lettersPool) {
      lettersPool[letter]++;
    }
    else {
      lettersPool[letter] = 1;
    }
  }

  // make sure each value for each letter in lettersInWord
  for (const letter in lettersInWord) {
    if ((lettersInWord[letter] > lettersPool[letter]) ||
       (lettersPool[letter] === undefined)) {
      return false;
    }
  }

  return true;
}
