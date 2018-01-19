//opérateurs dispo:
//+,*,/,%,&&,||,++,--,?:
//comparaison
//+=, -=, *=,..

// a+=2 ; a = a + 2 ;

let a =15;

let b = 0;

if (a>6){
    b=10;
    console.log(b);
} else{
    b=8;
}

let c = a > 6 ? 10 : 8;

// + concatène dans une chaine de caractère
let string = "hello"+" "+"world";
console.log(string);

console.log("37" - 7); //fait l"'operation
console.log("37"+7); // va concatener en string

// == conversion de type si besoin
console.log("7"==7);

// === pas de converstion de type, les types sont aussi comparés
console.log("7"===7);