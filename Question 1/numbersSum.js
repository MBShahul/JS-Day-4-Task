let numbers = [10,20,30,40,50,60,70];

//Anonymous function
const sumArr = function(sum){
    let result = 0;
    for(let i=0; i<sum.length; i++){
        result = result+sum[i];
    }
    console.log(result);
}
sumArr(numbers);

//IIFE
(function(sum){
    let result = 0;
    for(let i=0; i<sum.length; i++){
        result = result+sum[i];
    }
    console.log(result);
})(numbers)