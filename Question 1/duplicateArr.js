let random = ["shahul","ajith","naseem","shahul","sabarish","ismath","arif","ismath","ajith"];

//Anonymous function
let uniqueArray = function(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique.push(arr[i]);
    }
  }
  return unique;
};
console.log(uniqueArray(random));

//IIFE
(function(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique.push(arr[i]);
    }
  }
  console.log(unique);
})(random);