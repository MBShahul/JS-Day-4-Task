let names = ["shahul","ajith","naseem","sabarish","arif","ismath"];

//Arrow Function =>
const titleCaps = names => { 
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
        console.log(names[i]);
    }
};
titleCaps(names);
