let numbers = [10,20,30,40,50,60,70];
let k = 3;

//Anonymous function
let rotateArray = function(arr, k) {
    let n = arr.length;
    k = k % n;
    return arr.slice(-k).concat(arr.slice(0, -k));
};
let rotatedNumbers = rotateArray(numbers, k);
console.log(rotatedNumbers);


//IIFE
(function(arr, k) {
    k = k % arr.length;
    let rotated = arr.slice(-k).concat(arr.slice(0, -k));
    console.log(rotated); 
})(numbers, k);