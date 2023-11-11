"use strict";

/** Takes two arrays, one named keys and the other named values.
 * Assembles an object using keys as keys and values and values.
 * Returns object.
 */

function twoArrayObject(keys, values) {
  let outputObject = {};

  for (let i = 0; i < keys.length; i++) {

    // handles cases where values array is less than keys array
    if (i > (values.length - 1)) {
      values.push(null);
    }

    outputObject[keys[i]] = values[i];
  }

  return outputObject;
}