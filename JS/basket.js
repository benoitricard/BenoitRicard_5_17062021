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


    // Tableau du contenu de mon storage
    const storage = new Storage('basket')
    const basket = storage.list

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
                <div class="basketProductRight" id="basketProductRight${[i]}">
                    <p class="productPrice">${basket[i].price}€</p>
                </div>
            </div>`;

        basketContenu.innerHTML += basketProduct

        function priceBalance() {
            totalPrice += basket[i].price
        } priceBalance()

        const basketRight = document.getElementById(`basketProductRight${[i]}`)
        const remove = document.createElement('button')

        remove.innerHTML = `<i class="fas fa-trash-alt"></i>`

        remove.addEventListener('click', function() {
            const basketItem = remove.parentElement.parentElement
            storage.remove(basketItem)
            basketContenu.removeChild(basketItem)
            priceBalance()
        })

        basketRight.appendChild(remove)
    }

    // Prix total du panier
    spanPrice.textContent = `${totalPrice}€`


})
.catch(function(error) {
});

// Fin de l'appel de l'API des Teddies