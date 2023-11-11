"use strict";

/** Get char counts for str; input a str; return char counts
 * https://gist.github.com/nickmonteleone/94b9f03522c63072888d0dd524f6bf0a
*/

function getCharCountsForStr(input){
  const charToCount = {};

  // find highest letter count in word
  for (let char of input) {
    charToCount[char] = (charToCount[char] || 0) + 1;
  }

  return charToCount;
}

/**
 * Check if two numbers have the same frequency of digits
 * Input two numbers, output true or false based on if same digit freq
*/

function sameFrequency(num1, num2) {

  const num1Counts = getCharCountsForStr(String(num1));
  const num2Counts = getCharCountsForStr(String(num2));

  for (const num in num1Counts) {
    if (num1Counts[num] !== num2Counts[num]) {
      return false;
    }
  }

  for (const num in num2Counts) {
    if (num2Counts[num] !== num1Counts[num]) {
      return false;
    }
  }

  return true;
}
