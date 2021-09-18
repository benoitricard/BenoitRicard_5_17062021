'use strict'

// Récupération de l'URL avec l'ID de la peluche en paramètre
let param = new URLSearchParams(window.location.search);
let id = param.get('id');

// Appel de l'API des Teddies
fetch(`http://localhost:3000/api/teddies/${id}`)
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {

    
    // Tableau du contenu de mon storage
    const storage = new Storage('basket')
    const basket = storage.list

    // Variables
    const teddy = value;
    console.log(teddy)

    // Page produit
    const section = document.getElementById('sectionContainer')
    section.innerHTML = `<img class="teddyImage" src="${teddy.imageUrl}" alt="teddybear">
    <div class="productInfo">
        <h2 class="teddyName">${teddy.name}</h2>
        <p class="teddyId">ID: ${teddy._id}</p>
        <p class="teddyPrice">${teddy.price/=100}€</p>
        <p class="teddyDescription">${teddy.description}</p>
        <div class="teddyColors">
            <label for="teddyColorsInput">Colors</label>
            <select id="select" name="teddyColorsInput">
            </select>
        </div>
        <button id="addBasket"><i class="fas fa-shopping-cart"></i>Add to Basket</button>
    </div>`

    // Récupération des couleurs
    const select = document.getElementById('select')
    for (let i = 0; i < teddy.colors.length; i++) {
        const option = document.createElement('option')
        option.innerHTML = teddy.colors[i]
        select.appendChild(option)
    }

    // Bouton 'Add to Basket'
    const button = document.getElementById('addBasket')
    
    button.addEventListener('click', function () {
        storage.set(teddy)
    })


})
.catch(function(error) {
});

// Fin de l'appel de l'API des Teddies