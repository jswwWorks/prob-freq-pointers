"use strict";

/**Generate frequency counter. Input a string and output a frequency object */
function getFrequencyOfLetters(input) {
  const lettersInInput = {};

  // set up frequencies for input str
  for (const letter of input) {
    if (letter in lettersInInput) {
      lettersInInput[letter]++;
    }
    else {
      lettersInInput[letter] = 1;
    }
  }

  return lettersInInput;
}


/** Takes 2 strings, one is a word and one is a letter.
 * Checks whether word can be built with given letters, and
 * returns a boolean.
 */

function canConstructWord(word, letters) {

  // make frequency counters
  const lettersInWord = getFrequencyOfLetters(word);
  const lettersPool = getFrequencyOfLetters(letters);

  // make sure each value for each letter in lettersInWord
  for (const letter in lettersInWord) {
    // note: switch conditions to do undefined check
    if (lettersPool[letter] === undefined ||
        lettersInWord[letter] > lettersPool[letter]) {
        return false;
    }
  }

  return true;
}
