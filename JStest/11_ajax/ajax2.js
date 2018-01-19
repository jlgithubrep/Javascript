let xhr = new XMLHttpRequest();
// définir la ressource a atteindre et la manière de l'atteindre
xhr.open('GET', 'https://api.imgflip.com/get_memes');

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
        <h1>Titre : ${o.data.memes[99].name}</h1>
        <img src="${o.data.memes[99].url}">`;
    }
};

//voir la structure en parcourant le json resultant de l'api


// la requête HTTP est envoyé
xhr.send();