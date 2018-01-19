console.log("0 à 20");
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

console.log("4à32");
for (let i = 4; i <= 32; i++) {
    console.log(i);
}

console.log("nombre pairs de 0à100")
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("fizzbuzz");
for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log("fizzbuzz", i);
        } else {
            console.log("fizz", i)
        }
    }
    else if (i % 5 == 0) {
        console.log("buzz", i);
    }


}

/*
console.log("nombres 1er entre 0et100");
for (let i = 0; i <= 100; i++) {
    let racine = Math.sqrt(i);

    for (let j = 3; j <= racine; j++) {

        if (i % j == 0) {
            console.log(i);
        }
    }

}
*/

console.log("nombres 1er entre 0et100");
for (let i = 0; i <= 100; i++) {
    let racine = Math.sqrt(i);
    //console.log("i:", i);
    let j = 2;
    do {
        j++;
        //console.log("j:", j);
        let m = i % j;
        console.log("i:",i,"j:",j,"i%j:",m);
        if (m != 0) {
            console.log("nb premier: ", i);
        }
    } while (j < racine);

}


