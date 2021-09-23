'use strict'

// On récupère les éléments du Local Storage
let basket = JSON.parse(localStorage.getItem('basket'))
let order = JSON.parse(localStorage.getItem('order'))

// On cible les éléments HTML à remplir
const thanksName = document.getElementById('thanksName')
const namesConfirmation = document.getElementById('namesConfirmation')
const addressConfirmation = document.getElementById('addressConfirmation')
const emailConfirmation = document.getElementById('emailConfirmation')
const priceConfirmation = document.getElementById('priceConfirmation')
const idConfirmation = document.getElementById('idConfirmation')

// On remplit les éléments HTML avec le contenu de 'contact'
function informations() {
    thanksName.textContent = order.contact.firstName
    namesConfirmation.textContent = order.contact.firstName + ' ' + order.contact.lastName
    addressConfirmation.textContent = order.contact.address + ', ' + order.contact.city
    emailConfirmation.textContent = order.contact.email
} informations()

// On récupère le prix total du panier
let totalPrice = 0

function price() {
    for (let i = 0; i < basket.length; i++) {
        totalPrice += basket[i].price
    }
} price()

// On affiche le prix total et l'ID fourni par l'API
priceConfirmation.textContent = totalPrice + '€'
idConfirmation.textContent = order.orderId