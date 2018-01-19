/*
* les arrow function s'implifient l'écriture
* */

//calculer la somme des carrés (n*n) pour les nombres pairs
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = data
    .filter(e => e % 2 === 0)
    .map(e => e * e)
    .reduce((acc, e) => acc + e, 0);


//calculer la somme des nombres divisibles par 5 pour des nombres
//entre 1 et 147 multipliés par 3

/*
création tab 1 à 147

filter par div par 5
map * 3
reduce somme des éléments
*/

let array = [];

for (let i = 1; i <= 147; i++) {
    array.push(i);
}

let res2 = array
    .filter(e => e % 5 === 0)
    .map(e => e * 3)
    .reduce((acc, e) => acc + e, 0);

console.log(res2);