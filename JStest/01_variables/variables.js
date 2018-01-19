//variables globales
var a = 42;
console.log(a);
a = 'changement de type';
console.log(a);

var b;
console.log(b);

//variable non déclarée crée tout de même
c='hello';
console.log(c);

//console.log(d);
//ne s'affiche, le script stop


//variable ES 6
let maVariablesES6 = 'bonjour';
//constante
const MA_CONSTANTE_ES6 = "le monde";


/*
    Variable Scope
 */

var globalVariable = "je suis une variable globale";
let uneAutreVariableGlobal ="je suis aussi une variable globale";

if(true){
    var jeNeSuisPasLocaleAuIf ="pas locale au if..";
    let etMoiMonScopeEstLeBlockIf="locale au if?";
}

console.log(jeNeSuisPasLocaleAuIf);

// erreur etMoiMonScopeEstLeBlockIf is not defined
//console.log(etMoiMonScopeEstLeBlockIf);
//erreur car cette variable est declaré avec let dans le if


function uneFonction() {
    var uneFonctionVar1=1;//locale
    let uneFonctionVar2=2;//locale
    uneFonctionVar3 = 3; //globale
}

uneFonction();

console.log(uneFonctionVar3);


//objet GLOBAL
//les variables globales sont des propriétés de l'objet GLOBAL
//dans un navigateur l'objet GLOBAL est window
//les 3 lignes suivantes sont équivalentes
console.log(a);
console.log(window.a);
window.console.log(window.a);