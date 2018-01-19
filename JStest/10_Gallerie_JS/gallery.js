/*
1) fonction constructeur pour créer des Item
Item de gallery a
- un titre
- une url d'image
 */

function Item(title, url) {
    this.title = title;
    this.url = url;
}

/*
2) manuellement appeler la fonction pour créer un tableau d'Item

*/
let items = [
    new Item("p1","https://farm6.staticflickr.com/5448/9587382078_a0d7772cb9_o_d.jpg"),
    new Item("p2","https://farm4.staticflickr.com/3804/11129952164_e10c4ec600_k_d.jpg"),
    new Item("p3","https://farm4.staticflickr.com/3851/14496148339_be764b8b79_h_d.jpg"),
    new Item("p4","https://farm4.staticflickr.com/3743/14124294348_23d8baa2ce_h_d.jpg"),
    new Item("p5","https://farm3.staticflickr.com/2879/9259156851_9b8d9224b8_b_d.jpg"),
    new Item("p6","https://farm8.staticflickr.com/7322/9321294269_6040b03cb1_b_d.jpg")

];

/*
3) écrire une fonction qui insère la gallery d'item dans
l'élement DOM de notre choix, précisé par le selecteur

@param items: Array<Item>
@param containerCSSSelector: String
@return nothing
function buildGallery(items, containerCSSSelector)

exemple d'utilisation
buildGallery(items, '.gallery-section');

*/

function buildGalleryItemHTML(item) {
    return `
    <a href="" class="gallery__item">
        <img src="${item.url}" alt="${item.title}" class="gallery__item__image">
        <p class="gallery__item__title">${item.title}</p>
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


buildGallery(items, '.gallery-section');






