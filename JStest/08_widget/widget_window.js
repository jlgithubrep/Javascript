/**
 * Created by Administrateur on 27/07/2016.
 */

let showhtml = document.querySelector("._text-inside");
let boxtext = document.querySelector("._box-mini2");
let FlecheBas = document.querySelector("._fleche-bas");
let FlecheHaut = document.querySelector("._fleche-haut");


function togglevisi(item,State) {
    item.style.display = State;
}

togglevisi(showhtml,"none");
togglevisi(FlecheHaut,"none");
togglevisi(boxtext,"none");

FlecheBas.addEventListener("click",function (e) {
    togglevisi(showhtml,"");//affiche
    togglevisi(FlecheBas,"none");//affiche pas
    togglevisi(FlecheHaut,"");
    togglevisi(FlecheHaut,"");
    togglevisi(boxtext,"");



});

FlecheHaut.addEventListener("click",function (e) {
    togglevisi(FlecheHaut,"none");
    togglevisi(showhtml,"none");
    togglevisi(FlecheBas,"");
    togglevisi(boxtext,"none");
});

