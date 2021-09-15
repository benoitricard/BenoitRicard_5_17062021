// Appel de l'API des Teddies

// Récupération de l'URL avec l'ID de la peluche en paramètre
let param = new URLSearchParams(window.location.search);
let id = param.get('id');

fetch(`http://localhost:3000/api/teddies/${id}`)
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {


    // Variables
    const teddy = value;
    console.log(teddy)

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
        <button class="addBasket"><i class="fas fa-shopping-cart"></i>Add to Basket</button>
    </div>`

    const select = document.getElementById('select')
    for (let i = 0; i < teddy.colors.length; i++) {
        const option = document.createElement('option')
        option.innerHTML = teddy.colors[i]
        select.appendChild(option)
    }


})
.catch(function(error) {
});

// Fin de l'appel de l'API des Teddies