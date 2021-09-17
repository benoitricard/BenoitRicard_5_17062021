'use strict'

// Stockage locale des tâches
class Storage {
    // Constructeur pour initialiser l'objet avec le nom de la clé et son contenu (valeur)
    constructor(name) {
        this.name = name
        this.list = this.get()
    }

    // Méthode pour récupérer un tableau des valeurs ou par défaut, le créer
    get() {
        if (!localStorage.getItem(this.name)) {
            localStorage.setItem(this.name, '[]')
        }
        return JSON.parse(localStorage.getItem(this.name))
    }

    // Méthode pour ajouter une valeur dans le tableau
    set(value) {
        this.list.push(value)
        localStorage.setItem(this.name, JSON.stringify(this.list))
    }

    // Méthode pour supprimer une valeur du tableau
    remove(value) {
        const index = this.list.indexOf(value)
        this.list.splice(index, 1)
        localStorage.setItem(this.name, JSON.stringify(this.list))
    }
}