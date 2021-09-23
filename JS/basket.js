'use strict'

// DOM Selection
const basketContenu = document.getElementById('basketContenu') // Contenu de tous les objets du panier
const spanPrice = document.getElementById('totalPrice') // Prix total du panier

// Variables
let basket = JSON.parse(localStorage.getItem('basket'))

// Variables du panier
let basketProduct = '' // Produit du panier
let totalPrice = 0 // Prix total du panier

// Boucle pour créer les cartes produit dans le panier
function product() {
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
} product()

// Boutons de suppression
const buttons = document.getElementsByClassName('removeButton')

// Boucle pour créer les boutons sur chaque produit du panier
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function remove() {
        basket.splice(i, 1)
        localStorage.setItem('basket', JSON.stringify(basket))
        location.reload()
    })
}

// Prix total du panier
spanPrice.textContent = `${totalPrice}€`


// Formulaire
const confirm = document.getElementById('submitButton')
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/ // Vérifie la conformité de l'adresse mail

// Bouton Submit
confirm.addEventListener('click', function confirmation(event) {
    

    // Objet contact du formulaire
    let contact = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value
    }

    // Vérification des données du formulaire
    if (
        (contact.firstName) &&
        (contact.lastName) &&
        (contact.address) &&
        (contact.city) &&
        (regexMail.test(contact.email) == true)
    ) {

        // Informations du panier validé
        let products = [];
        for (let i = 0; i < basket.length; i++) {
            products.push(basket[i]._id)
        }

        // Envoi des données
        fetch('http://localhost:3000/api/teddies/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contact,
                products
            }),
        })
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            localStorage.setItem('order', JSON.stringify(value))
            document.location.href = 'confirmation.html'
        })
        .catch(function(error) {
            console.error(error)
        })

    } else {
        alert(`Le formulaire n'est pas correctement rempli`)
    }
})