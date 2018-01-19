/*
* if, else, switch, for, while, do..while, label, break
* */

for (let i = 0; i<10;i++){
    console.log("dans la boucle : ",i);
}

// si i est un var, le seul scope est la fonction

//itérer sur un tableau
let myArray = ["bonjour","le","monde"];

for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}

let myArray2 = [];

for (let i=1;i<10;i++){
    myArray2.push(i);
}
console.log(myArray2);

//ES6 for ..of
for (let i of myArray){
    console.log(i);
}

//forEach
myArray.forEach(function(e){
    console.log("forEach",e);
});