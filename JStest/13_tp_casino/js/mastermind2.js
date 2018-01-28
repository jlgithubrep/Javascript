$(document).ready(function () {
    // Le code ne s'executeras pas tant que la page n'est pas chargée

    let balance = 100;
    let pari;
    let mastermind = $(".mastermind");
    let nbHasard = [0, 0, 0];
    let gameStarted = 0;

    document.getElementById("balance").innerHTML = "" + balance;//affiche la valeur de la balance sur la page

    mastermind.toggle();

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function affichageMastermind() {
        if (gameStarted == 0) {
            gameStarted = 1;
            mastermind.toggle();
        }
    }

    function reinitialisation() {
        document.getElementById("message").innerHTML = "";
        document.getElementById("message2").innerHTML = "";
        document.getElementById("historique").innerHTML = "";
    }

    function gameStart() {
        balance -= pari;
        if (balance < 0) {
            document.getElementById("message").innerHTML = "Balance Insuffisante";
        } else {
            document.getElementById("balance").innerHTML = "" + balance;
            game();
        }
    }

    function game() {

        //on efface la zone de message quand on refait une tentative
        document.getElementById("message").innerHTML = "";
        document.getElementById("message2").innerHTML = "";

        //balance -= pari; // on enleve de la balance à chaque fois que l'on propose un nombre
        //document.getElementById("balance").innerHTML = "" + balance;

        let t = $(".tentative").val();
        console.log("tentative", t);
        //$(".historique").append(t + "<br>");
        let historique = "";

        let tabDecomposition = t.split(''); //apres avoir recupéré la tentative (entre 100 et 999), on decompose le nombre en 3 chiffres dans un tab
        console.log("decompo", tabDecomposition);

        let occurence = 0;
        let bonnePlace = 0;
        //let testDejaTtrouvé;
		let testDejaTrouve = [];
        let dejaTtrouve = 0;


        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                if (nbHasard[i] == tabDecomposition[j]) {


                    if (i == j) {
                        bonnePlace++; //quand on trouve un chiffre bien placé
                        occurence++;

                        //traitement des doublons
						/*
                        if (testDejaTtrouvé == nbHasard[i]) {
                            dejaTtrouve++;console.log("LAAAAAA");
                        }
                        testDejaTtrouvé = nbHasard[i];
						console.log("testDejaTtrouvé",testDejaTtrouvé);
						*/
						console.log(tabDecomposition[j]);
						for (let h=0;h<testDejaTrouve.length;h++) {
						  if(testDejaTrouve[h]==tabDecomposition[j]){
							dejaTtrouve++;
							break;
						  }
						}
						testDejaTrouve.push(tabDecomposition[j]);
						//console.log("elng",testDejaTrouve.length,tabDecomposition[j]);
                    }
                    else {
                        occurence++;

                        //traitement des doublons
						/*
                        if (testDejaTtrouvé == nbHasard[i]) {
                            dejaTtrouve++;console.log("LAAAAAA");
                        }
                        testDejaTtrouvé = nbHasard[i];
						console.log("testDejaTtrouvé",testDejaTtrouvé);
						*/
						console.log(tabDecomposition[j]);
						for (let h=0;h<testDejaTrouve.length;h++) {
						  if(testDejaTrouve[h]==tabDecomposition[j]){
							dejaTtrouve++;
							break;
						  }
						}
						testDejaTrouve.push(tabDecomposition[j]);
						//console.log("elng",testDejaTrouve.length,tabDecomposition[j]);
                    }

                }
            }
        }
		
	
						  console.log("azrf<",testDejaTrouve);
						
		

        let mess;//variable pour stocké les messages html à renvoyer

        if (dejaTtrouve == 0) {

            if (occurence == 0) {
                mess = t + " : rien n'a été trouvé<br>";
                document.getElementById("message").innerHTML = mess;
                historique += mess;
            } else if (occurence > 0) {
                mess = t + ": " + occurence + " chiffres trouvés, mais pas à la bonne place<br>";
                document.getElementById("message").innerHTML = mess;
                historique += mess;
            }


            if (bonnePlace > 0 && bonnePlace < 3 && occurence == 0) {
                mess = t + ": " + bonnePlace + " chiffres à la bonne place<br>";
                document.getElementById("message").innerHTML = mess;
                historique = mess;
            } else if (bonnePlace > 0 && bonnePlace < 3 && occurence > 0) {
                mess = t + ": " + bonnePlace + " chiffres à la bonne place, " + (occurence - bonnePlace) + " bon chiffres mal placés<br>";
                document.getElementById("message").innerHTML = mess;
                historique = mess;
            } else if (bonnePlace == 3) {
                mess = t + ": est le bon nombre, bravo, votre mise x10 ajouté à la balance";
                document.getElementById("message").innerHTML = mess;
                balance += pari * 10;
                document.getElementById("balance").innerHTML = "" + balance;
            }
        }

        if (dejaTtrouve > 0) {
            console.log("dejaTrouve>0");
            if (bonnePlace < 3 && occurence == 0) {
                //mess = t + ": " + bonnePlace + " chiffres à la bonne place, 1 chiffre apparait plusieurs fois<br>";
				mess = t + ": " + bonnePlace + " chiffres à la bonne place<br>";
                document.getElementById("message").innerHTML = mess;
                historique = mess;
            } else if (bonnePlace < 3 && occurence > 0) {
				//let bonMalPlace = occurence - dejaTtrouve;
                let bonMalPlace = occurence - dejaTtrouve - bonnePlace; // +1
				console.log("flxjkjwjlwp",bonMalPlace);
				
				if(bonnePlace > 1 ){
					bonMalPlace += 1;
				}
				
				console.log("* bien placé est 1* mal placé");
                //mess = t + ": " + bonnePlace + " chiffffffres à la bonne place, "+bonMalPlace+" bon chiffres mal placés, 1 chiffre apparait plusieurs fois<br>";
				mess = t + ": " + bonnePlace + " chiffre(s) à la bonne place, "+bonMalPlace+" bon chiffres mal placés<br>";
                document.getElementById("message").innerHTML = mess;
                historique = mess;
            }
            else if (bonnePlace == 3) {
                mess = t + ": est le bon nombre, bravo, votre mise x10 ajouté à la balance";
                document.getElementById("message").innerHTML = mess;
                balance += pari * 10;
                document.getElementById("balance").innerHTML = "" + balance;
            }

			//333
			/*
            if (occurence == 3 && dejaTtrouve == 2) {
                let bonMalPlace = occurence - bonnePlace - dejaTtrouve;

                mess = t + ": " + bonnePlace + " chiffres à la bonne place, " + bonMalPlace + " bon chiffres mal placés, 1 chiffre apparait plusieurs fois<br>";
                document.getElementById("message").innerHTML = mess;
                historique = mess;
            }
			*/
			
        }

        $(".historique").append(historique);
        console.log("valeur dejaTrouve à la fin de la fct game", dejaTtrouve);
        console.log("valeur d'occurence à la fin de la fct game ", occurence);
        console.log("valeur de bonnePlace à la fin de la fct game", bonnePlace);
    }


    function lancement() {
        console.log("dans la fonction lancement");


        if (gameStarted == 1) { // re initialisation du jeu
            console.log("appel de la reinitialisation");
            reinitialisation();
        }


        pari = $(".pari").val();
        pari = parseInt(pari);
        console.log("pari", pari);


        nbHasard[0] = getRandomInt(1, 9);
        nbHasard[1] = getRandomInt(1, 9);
        nbHasard[2] = getRandomInt(1, 9);


		//proposez 101
	/*
		nbHasard[0] = 1;
        nbHasard[1] = 7;
        nbHasard[2] = 1;
*/

        //161
		/*
                nbHasard[0] = 6;
                nbHasard[1] = 1;
                nbHasard[2] = 1;
        */
		
		//proposer 202
		/*
		        nbHasard[0] = 6;
                nbHasard[1] = 5;
                nbHasard[2] = 2;
*/
/*
				nbHasard[0] = 3;
                nbHasard[1] = 3;
                nbHasard[2] = 3;
*/
        console.log("nbhasard", nbHasard);

        affichageMastermind();
    }


    $(".playButton").click(lancement);

    $(".boutonTentative").click(gameStart);

});