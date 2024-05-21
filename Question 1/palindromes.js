let words = ["level", "radar", "apple", "rotor", "banana", "madam", "hello", "racecar"];

//Anonymous function
let palindromes = function(arr){
    let palins = [];
    for(let i=0; i<arr.length; i++){
        let isPalindrome = true;
        let word = arr[i];
        let reversed = word.split("").reverse().join("");
        if(word !== reversed) {
            isPalindrome = false;
        }
        else {
            palins.push(word);
        }
    }
    return palins;
};
let palindromesArray = palindromes(words);
console.log("Palindromes: ", palindromesArray);

//IIFE
(function(arr){
    let palins = [];
    for(let i=0; i<arr.length; i++){
        let isPalindrome = true;
        let word = arr[i];
        let reversed = word.split("").reverse().join("");
        if(word !== reversed) {
            ispalindrome = false;
        }
        else {
            palins.push(word);
        }
    }

    (function() {
        if (palins.length === 0) {
            console.log("No palindromes found in the array.");
        } else {
            console.log("Palindromes:", palins);
        }
    })();
    return palins;
})(words)
