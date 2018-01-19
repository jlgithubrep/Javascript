console.log(a);

var a = 3;

//fonctionne même si la déclaration est après car en javascript, le script est d'abord entierement passé en revue avant execution
maFonction();

function maFonction() {
    console.log("dans la fonction");
}


//cette fonction ne fonctionne pas car elle est connue que en tant que variable au 1er passage
autreFonction();

let autreFonction = function(){
  console.log("une autre fonction");
};