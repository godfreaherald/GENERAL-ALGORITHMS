function arraySum(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b;
  });
  let largest = tempArr.pop();
  let number = 0;
  tempArr.forEach(item => (number += item));
  return largest === number;
}

console.log(arraySum([1, 6, 4, 2, 13]));
console.log(arraySum([1, 6, 4, 2, 12]));
