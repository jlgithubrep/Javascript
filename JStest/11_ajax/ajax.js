
let xhr=new XMLHttpRequest();
// définir la ressource a atteindre et la manière de l'atteindre
xhr.open('GET', 'https://randomuser.me/api/');

// accrocher un listener pour réagir aux xhangements d'états de l'objet
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState == 4) {
        console.log(xhr.status);
        console.log(JSON.parse(xhr.responseText));
        let divRandom = document.querySelector('.random');
        let o = JSON.parse(xhr.responseText);
        console.log(o);
        divRandom.innerHTML = `
       <h1>Nom : ${o.results[0].name.last}</h1>
       <h1>Prenom : ${o.results[0].name.first}</h1>
       <img src="${o.results[0].picture.medium}">`;
    }
};


// la requête HTTP est envoyé
xhr.send();