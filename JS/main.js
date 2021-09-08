// Appel de l'API des Teddies

fetch("http://localhost:3000/api/teddies")
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {
    console.log(value)

    let teddiesTab = value
    let teddiesIndex = ""
    let i
    for(i = 0; i < teddiesTab.length; i++) {
        let productIndex = `<a class="linkTeddy" href="Pages/teddy1.html">
            <div class="item">
            <div class="itemPhotoTitle">
                <img src="Images/teddy1.jpg" alt="brown teddybear">
                <p class="itemProductTitle">${teddiesTab[i].name}</p>
            </div>
            <p class="itemPrice">${teddiesTab[i].price}€</p>
        </div>
    </a>`;
        teddiesIndex+=productIndex
    }
    let itemContainer = document.getElementById("itemContainer")
    itemContainer.innerHTML(teddiesIndex)
})
.catch(function(error) {
});

// Fin de l'appel de l'API des Teddies


