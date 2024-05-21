let numbers = [10,20,30,40,50,60,70];

//Arrow Function =>
const sumArr = sum => {
    let result = 0;
    for(let i=0; i<sum.length; i++){
        result = result+sum[i];
    }
    console.log(result);
}
sumArr(numbers);