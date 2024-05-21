let arr1 = [1,2,3,4,5];
let arr2 = [10,9,8,7,6];

//Anonymous function
const medianOfArrays = function(arr1, arr2){
    let mergedArray = arr1.concat(arr2);
    mergedArray.sort(function(a, b) {
        return a - b;
    });
    let n = mergedArray.length;
    if (n % 2 === 0) { 
        return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2; 
    } else {
        return mergedArray[Math.floor(n / 2)]; 
    }
};
console.log("Median of sorted arrays: ", medianOfArrays(arr1, arr2));

//IIFE
(function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    mergedArray.sort(function(a, b) {
        return a - b;
    });
    let n = mergedArray.length;
    if (n % 2 === 0) {
        const median = (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
        console.log("Median of sorted arrays: ", median); 
        return median; 
    } else {
        const median = mergedArray[Math.floor(n / 2)];
    }
})(arr1, arr2);