'use strict'

// DOM Selection
const basketContenu = document.getElementById('basketContenu') // Contenu de tous les objets du panier
const spanPrice = document.getElementById('totalPrice') // Prix total du panier

// Appel de l'API des Teddies

fetch('http://localhost:3000/api/teddies')
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {

    // Variables
    let basket = JSON.parse(localStorage.getItem('basket'))

    // Variables du panier
    let basketProduct = '' // Produit du panier
    let totalPrice = 0 // Prix total du panier

    // Boucle pour créer les cartes produit dans le panier
    for(let i = 0; i < basket.length; i++) { 
        basketProduct =
            `<div class="basketProduct" id="basketProduct">
                <div class="basketProductLeft">
                    <img class="basketProductPhoto" src="${basket[i].imageUrl}">
                    <div class="basketProductInfo">
                        <p class="itemProductName">${basket[i].name}</p>
                        <p class="productId">ID: ${basket[i]._id}</p>
                        <p class="basketProductColor">Color:</p>
                    </div>
                </div>
                <div class="basketProductRight">
                    <p class="productPrice">${basket[i].price}€</p>
                    <button class="removeButton"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>`

        basketContenu.innerHTML += basketProduct

        const remove = document.getElementById(`remove${i}`)

        totalPrice += basket[i].price
    }


    // Boutons de suppression
    const buttons = document.getElementsByClassName('removeButton')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            basket.splice(i, 1)
            localStorage.setItem('basket', JSON.stringify(basket))
            location.reload()
        })
    }

    // Prix total du panier
    spanPrice.textContent = `${totalPrice}€`


})
.catch(function(error) {
});

// Fin de l'appel de l'API des Teddies