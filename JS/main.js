// Appel de l'API des Teddies

fetch("http://localhost:3000/api/teddies")
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {
    console.log(value);
})
.catch(function(error) {
});

// Fin de l'appel de l'API des Teddies


