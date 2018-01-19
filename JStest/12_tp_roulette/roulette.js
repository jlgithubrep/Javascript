let num_tire;
let color;// true noir, false rouge
let pair;// true pair, false impair
let pari;//chiffre choisi par l'utilisateur
let balance = 100;
let mise;//somme misée par l'utilisateur
let text="";

let noir = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

document.getElementById("balance").innerHTML = "" + balance;


function traitement() {
    console.log("traitement");
    //text = "Le numéro tiré au hasard est: " + num_tire;
    text += "<p>Vous avez parié le numéro: " + pari + "</p>";
    document.getElementById("result").innerHTML = text;


    if (num_tire == pari) {
        balance = balance + (mise * 36);
        document.getElementById("result").innerHTML += "Vous avez gagné!";
    } else {
        balance = balance - mise;
        document.getElementById("result").innerHTML += "Vous avez perdu!";

    }

    console.log(balance);

    document.getElementById("balance").innerHTML = "" + balance;
}


function random() {

    num_tire = Math.floor(Math.random() * 36);
    console.log("num_tire: ", num_tire);
    text = "Le numéro tiré au hasard est: " + num_tire;

    //document.getElementById("result").innerHTML = text;


    for (e in noir) {
        if (num_tire == noir[e]) {
            color = true;//noir
        }
        else {
            color = false;//rouge
        }

    }
    console.log(color);


    if (num_tire % 2 == 0) {
        pair = true;
    }
    else {
        pair = false;
    }

    pari = document.getElementById("pari").value; // recuperation de la valeur choisie par l'utilisateur
    mise = document.getElementById("mise").value; //recuperation de la somme misée
    console.log("pari", pari);

    ////


    let pariOK = true;

    //test validité du pari
    if (pari < 0 | pari > 36) {
        pariOK = false;
        text = "Choississez entre 0 et 36";
        document.getElementById("result").innerHTML = ""+text;
    }

    //test validité de la somme misée
    if (mise > balance) {


        if (pariOK == false) {
            pariOK = false;
            text += "</br>" + "balance insuffisante"
            document.getElementById("result").innerHTML = "" + text;

        } else {
            pariOK = false;
            text = "balance insuffisante"
            document.getElementById("result").innerHTML = "" + text;
        }


    }


    if (pariOK == true) {
        traitement();
    }


}






