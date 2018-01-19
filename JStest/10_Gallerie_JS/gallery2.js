/*
* Modifié avec une requete à une api de l'exemple 11_ajax
* */



function buildGalleryItemHTML(item) {
    return `
    <a href="" class="gallery__item">
        <img src="${item.url}" alt="${item.name}" class="gallery__item__image">
        <p class="gallery__item__title">${item.name}</p>
    </a>
    `;
}

function buildGallery(items, containerCSSSelector) {
    let container = document.querySelector(containerCSSSelector);

    // let itemsHTML = '';
    // for(let i = 0; i < items.length; i++) {
    //     itemsHTML += buildGalleryItemHTML(items[i]);
    // }

    container.innerHTML = `
        <div class="gallery">${ items.reduce( (html, item) => html + buildGalleryItemHTML(item), '') }</div>
    `;
}


let xhr = new XMLHttpRequest();
// définir la ressource a atteindre et la manière de l'atteindre
xhr.open('GET', 'https://api.imgflip.com/get_memes');

// accrocher un listener pour réagir aux xhangements d'états de l'objet
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState == 4) {
        console.log(xhr.status);
        console.log(JSON.parse(xhr.responseText));
        //let divRandom = document.querySelector('.random');
        let o = JSON.parse(xhr.responseText);
        console.log(o);
        let items = o.data.memes;   //voir la structure en parcourant le json resultant de l'api

        buildGallery(items, '.gallery-section');

    }
};

// la requête HTTP est envoyé
xhr.send();