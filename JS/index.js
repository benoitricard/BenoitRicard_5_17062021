'use strict'

// Appel de l'API des Teddies

fetch('http://localhost:3000/api/teddies')
.then(function response(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function result(value) {


    // Variables
    const teddiesTab = value;
    const teddiesContainer = document.getElementById('teddiesContainer')

    // Boucle pour créer les cartes Teddies en index
    function teddiesCards() {
        for(let i = 0; i < teddiesTab.length; i++) { 
            let teddyItem =
                `<a class="teddyLink" href="Pages/teddy.html?id=${teddiesTab[i]._id}">
                    <div class="teddyProduct">
                        <div class="imageAndName">
                            <img src="${teddiesTab[i].imageUrl}" alt="teddybear0${[i]}">
                            <p class="teddyName">${teddiesTab[i].name}</p>
                        </div>
                        <p class="teddyPrice">${teddiesTab[i].price/=100}€</p>
                    </div>
                </a>`;
            teddiesContainer.innerHTML += teddyItem
        }
    } teddiesCards()


})
.catch(function alertError(error) {
    console.error(`Cette requête n'a pas pu aboutir ` + '- ' + error)
});

// Fin de l'appel de l'API des Teddies