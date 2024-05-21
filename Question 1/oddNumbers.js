let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//Anonymous function
const oddNumbers = function(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2 !==0) {
            console.log(arr[i]);
        }
    }
}
oddNumbers(numbers);

//IIFE
(function(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 !==0){
            console.log(arr[i]);
        }
    }
})(numbers)