function reverseArr(var1) {
  let start = 0;
  let end = var1.length - 1;

  while (start < end) {
    let temp = var1[start];
    var1[start] = var1[end];
    var1[end] = temp;
    start++;
    end--;
  }
  return var1;
}

console.log(reverseArr([1, 4, 2, 5, 7]));

function reverseStr(var1) {
  let start = 0;
  let end = var1.length - 1;

  while (start < end) {
    let temp = var1.charAt(start);
    var1[start] = var1.charAt(end);
    var1[end] = temp;
    start++;
    end--;
  }
  return var1;
}

console.log(reverseStr("14257"));
