// How do you find the missing number in a given integer array of 1 to 100?

/*
 * METHOD 1
 * From JS REDUCE method if multiple number is missing
 */
function findMissingNumbers1(arr) {
  // Create sparse array with a 1 at each index equal to a value in the input.
  var sparse = arr.reduce((sparse, i) => ((sparse[i] = 1), sparse), []);
  // Create array 0..highest number, and retain only those values for which
  // the sparse array has nothing at that index (and eliminate the 0 value).
  let keys = [...sparse.keys()];
  return keys.filter((i) => i && !sparse[i]);
}

/*
 * METHOD 2
 * Normal DS if multiple number is missing
 */
function findMissingNumbers2(arr) {
  var missingNumbersCount;
  var missingNumbers = [];
  // Sort Array
  arr.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] != 1 && arr[i + 1] != undefined) {
      // Count consecutive missing element
      missingNumbersCount = arr[i + 1] - arr[i] - 1;
      for (j = 1; j <= missingNumbersCount; j++) {
        // Push missing element in array
        missingNumbers.push(arr[i] + j);
      }
    }
  }
  return missingNumbers;
}

var someArr = [2, 5, 3, 1, 4, 7, 10, 15];
var result1 = findMissingNumbers1(someArr);
var result2 = findMissingNumbers2(someArr);
console.log(result1, result2);

/*
 * METHOD 3
 * If only one number is mising
 */

someArr = [2, 5, 3, 1, 4, 7, 10, 9, 6];
function getMissingNo(a) {
  let n = a.length;
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < n; i++) total -= a[i];
  return total;
}
var result = getMissingNo(someArr);
console.log(result);
