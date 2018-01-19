let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");


let formu = document.querySelector(".container2");

function nombreAleatoire(borne_max) {
    return Math.floor(Math.random() * borne_max);
}

////
var res;
var nbEssaie = 1;

function togglevisibilite(item, State) {
    item.style.display = State;
}


function fonctionValeur() {
    let x, text;

    // Get the value of the input field with id="number"
    x = document.getElementById("number").value;

    if (x < res) {
        nbEssaie++;
        text = "Plus Grand!";
    } else if(x > res) {
        nbEssaie++;
        text = "Plus Petit!";
    } else{
        text="La réponse est bien: "+ x+" trouvée en "+nbEssaie+" tentatives!";
        nbEssaie = 1;
    }

    document.getElementById("hist").innerHTML = text;

}

togglevisibilite(formu, "none");

button1.addEventListener("click", function (e) {
    res = nombreAleatoire(100);
    nbEssaie = 1;
    console.log(res);
    togglevisibilite(formu, "");
    document.getElementById("jeuChoisi").innerHTML = "1 à 100";
});

button2.addEventListener("click", function (e) {
    res = nombreAleatoire(1000);
    nbEssaie = 1;
    console.log(res);
    togglevisibilite(formu, "");
    document.getElementById("jeuChoisi").innerHTML = "1 à 1000";
});

button3.addEventListener("click", function (e) {
    res = nombreAleatoire(10000);
    nbEssaie = 1;
    console.log(res);
    togglevisibilite(formu, "");
    document.getElementById("jeuChoisi").innerHTML = "1 à 10 000";
});

button4.addEventListener("click", function (e) {
    res = nombreAleatoire(1000000);
    nbEssaie = 1;
    console.log(res);
    togglevisibilite(formu, "");
    document.getElementById("jeuChoisi").innerHTML = "1 à 1 000 000";
});




////

/*
button1.addEventListener("click", function (e) {
    let res = nombreAleatoire(100);
    console.log(res);


    let tentative = prompt("Devinez le chiffre ");

    if (tentative != null) {
        do {
            if (tentative < res) {
                tentative = prompt("Plus Grand!");
            } else if (tentative > res) {
                tentative = prompt("Plus Petit!");
            }

        } while (tentative != res ^ tentative == null);

        if (tentative == res) {
            document.getElementById("message1").innerHTML =
                "Le bon chiffre est bien : " + tentative;
        } else {
            document.getElementById("message1").innerHTML =
                "Abandon";
        }
    } else {
        document.getElementById("message1").innerHTML =
            "Abandon";
    }


});

button2.addEventListener("click", function (e) {
    let res = nombreAleatoire(1000);
    console.log(res);

    let tentative = prompt("Devinez le chiffre ");

    if (tentative != null) {
        do {
            if (tentative < res) {
                tentative = prompt("Plus Grand!");
            } else if (tentative > res) {
                tentative = prompt("Plus Petit!");
            }

        } while (tentative != res ^ tentative == null);

        if (tentative == res) {
            document.getElementById("message2").innerHTML =
                "Le bon chiffre est bien : " + tentative;
        } else {
            document.getElementById("message2").innerHTML =
                "Abandon";
        }
    } else {
        document.getElementById("message2").innerHTML =
            "Abandon";
    }


});

button3.addEventListener("click", function (e) {
    let res = nombreAleatoire(10000);
    console.log(res);

    let tentative = prompt("Devinez le chiffre ");

    if (tentative != null) {
        do {
            if (tentative < res) {
                tentative = prompt("Plus Grand!");
            } else if (tentative > res) {
                tentative = prompt("Plus Petit!");
            }

        } while (tentative != res ^ tentative == null);

        if (tentative == res) {
            document.getElementById("message3").innerHTML =
                "Le bon chiffre est bien : " + tentative;
        } else {
            document.getElementById("message3").innerHTML =
                "Abandon";
        }
    } else {
        document.getElementById("message3").innerHTML =
            "Abandon";
    }


});

button4.addEventListener("click", function (e) {
    let res = nombreAleatoire(10000);
    console.log(res);

    let tentative = prompt("Devinez le chiffre ");

    if (tentative != null) {
        do {
            if (tentative < res) {
                tentative = prompt("Plus Grand!");
            } else if (tentative > res) {
                tentative = prompt("Plus Petit!");
            }

        } while (tentative != res ^ tentative == null);

        if (tentative == res) {
            document.getElementById("message4").innerHTML =
                "Le bon chiffre est bien : " + tentative;
        } else {
            document.getElementById("message4").innerHTML =
                "Abandon";
        }
    } else {
        document.getElementById("message4").innerHTML =
            "Abandon";
    }


});

*/