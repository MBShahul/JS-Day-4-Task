let names = ["shahul","ajith","naseem","sabarish","arif","ismath"];

//Anonymous function
const titleCaps = function (names) { 
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
        console.log(names[i]);
    }
};
titleCaps(names);

//IIFE
(function (names){
    for(let i=0; i<names.length; i++){
        names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
        console.log(names[i]);
    }
})(names)
