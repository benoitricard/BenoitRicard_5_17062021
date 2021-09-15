// Appel de l'API des Teddies

fetch('http://localhost:3000/api/teddies')
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {



    // Variables
    const teddiesTab = value;
    const teddiesContainer = document.getElementById('teddiesContainer')


    // Boucle pour créer les cartes Teddies en index
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



})
.catch(function(error) {
});

// Fin de l'appel de l'API des Teddies