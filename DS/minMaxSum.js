function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const minSum = sum - max;
  const maxSum = sum - min;
  return minSum + " " + maxSum;
}

console.log(miniMaxSum([1, 3, 7, 5, 9]));
