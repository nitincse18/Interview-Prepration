// How do you find the duplicate number on a given integer array?

// Count occurance of elements
function findOccurance() {
  let arry = [1, 2, 1, 3, 4, 3, 5];
  let toMap = {};
  for (let i = 0; i < arry.length; i++) {
    if (toMap[arry[i]]) {
      toMap[arry[i]] += 1;
    } else toMap[arry[i]] = 1;
  }

  console.log(toMap);
}
findOccurance();

// Prints duplicate numbers with filter and indexOf Method
function findDuplicates() {
  let arry = [1, 2, 1, 3, 4, 3, 5];
  const tofindDuplicates = (arry) =>
    arry.filter((item, index) => arry.indexOf(item) !== index);
  const duplicateElements = tofindDuplicates(arry);
  console.log(duplicateElements);
}
findDuplicates();

// Prints duplicate numbers with set, filter
function toFindDuplicates(arry) {
  const uniqueElements = new Set(arry);
  const filteredElements = arry.filter((item) => {
    if (uniqueElements.has(item)) {
      uniqueElements.delete(item);
    } else {
      return item;
    }
  });

  return [...new Set(filteredElements)];
}
const arry = [1, 2, 1, 3, 4, 3, 5];
const duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);
