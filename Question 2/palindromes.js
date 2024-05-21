let words = ["level", "radar", "apple", "rotor", "banana", "madam", "hello", "racecar"];

//Arrow Function =>
let palindromes = arr => {
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
