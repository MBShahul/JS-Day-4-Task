let numbers = [73, 18, 42, 9, 57, 1, 24, 86, 6, 39, 80, 14, 5, 29, 71, 35, 97, 10, 63];

//Anonymous function
const primeNumbers = function(arr) {
    const primes = [];
    for (let i = 0; i<arr.length; i++) {
        const num = arr[i];
        let isPrime = true;
        if (num <= 1) {
            isPrime = false; 
        } else {
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
};
let primeArray = primeNumbers(numbers);
console.log("Prime numbers:", primeArray);


//IIFE
(function(arr) {
    const primes = [];
    for (let i = 0; i<arr.length; i++) {
        const num = arr[i];
        let isPrime = true;
        if (num <= 1) {
            isPrime = false; 
        } else {
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    (function() {
        if (primes.length === 0) {
            console.log("No prime numbers found in the array.");
        } else {
            console.log("Prime numbers:", primes);
        }
    })();
    return primes;
})(numbers);
