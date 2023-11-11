/** Takes 2 strings, one is a word and one is a letter.
 * Checks whether word can be built with given letters, and
 * returns a boolean.
 */

function canConstructWord(word, letters) {


  const lettersInWord = {};

  // set up frequencies for lettersInWord
  for (const letter of word) {
    if (letter in lettersInWord) {
      lettersInWord++;
    }
    else {
      lettersInWord[letter] = 1;
    }
  }

  const lettersPool = {};

  for (const letter of letters) {
    if (letter in lettersPool) {
      lettersPool++;
    }
    else {
      lettersPool[letter] = 1;
    }
  }

  // check if we can make word from letters pool

  // make sure each value for each letter in lettersInWord
  // is less than or equal to the value for that given letter
  // in lettersPool...if this isn't true,
  for (const letter in lettersInWord) {
    let freqOfLetterInWord = lettersInWord[letter];
    let freqOfLetterInPool = lettersPool[letter];
    if ((freqOfLetterInWord > freqOfLetterInPool) ||
       (freqOfLetterInPool === undefined)) {
      return false;
    }
  }

  return true;
}





/** Takes 2 strings, one is a word and one is a letter.
 * Checks whether word can be built with given letters, and
 * returns a boolean.
 */

function canConstructWord(word, letters) {


  const lettersInWord = {};

  // set up frequencies for lettersInWord
  for (const letter of word) {
    if (letter in lettersInWord) {
      lettersInWord++;
    }
    else {
      lettersInWord[letter] = 1;
    }
  }

  const lettersPool = {};

  for (const letter of letters) {
    if (letter in lettersPool) {
      lettersPool++;
    }
    else {
      lettersPool[letter] = 1;
    }
  }

  // check if we can make word from letters pool

  // make sure each value for each letter in lettersInWord
  // is less than or equal to the value for that given letter
  // in lettersPool...if this isn't true,
  for (const letter in lettersInWord) {
    let freqOfLetterInWord = lettersInWord[letter];
    let freqOfLetterInPool = lettersPool[letter];
    if ((freqOfLetterInWord > freqOfLetterInPool) ||
       (freqOfLetterInPool === undefined)) {
      return false;
    }
  }

  return true;
}
