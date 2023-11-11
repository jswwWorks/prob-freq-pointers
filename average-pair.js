/**
 * Input an sorted array of numbers and a target number,
 * return true or false based on whether there is a pair of numbers in the array
 * where the average of the two numbers is the target number
 */

function averagePair(sortedNums, targetAvg) {
  let leftIndex = 0;
  let rightIndex = sortedNums.length - 1;

  // use multiple pointers to maintain linear complexity
  while (leftIndex < rightIndex) {
    const iterationAvg = (sortedNums[leftIndex] + sortedNums[rightIndex]) / 2;

    if (iterationAvg === targetAvg) {
      return true;
    }
    else if (iterationAvg < targetAvg) {
      leftIndex++;
    }
    else {
      rightIndex--;
    }
  }

  return false;
}
