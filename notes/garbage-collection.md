# GARBAGE COLLECTION :
> Vérifie périodiquement les objets inutilisés (donc sans références/adresses stockées dans les variables) dans la mémoire du heap pour les supprimer.

# MEMORY LEAKS :
> Du code avec certains objets inutilisés mais possédant toujours une référence pointant vers eux, empêchant le garbage collection de le supprimer.

```javascript
// GARBAGE COLLECTION
// JS recherche s'il existe des variables ou des endroits dans le code où cet objet est référencé.
let person = { name: 'Feisar' };
// Ici, JS détecte que person n'a plus de référence et peut donc le supprimer.
person = null

// MEMORY LEAKS
function printMessage() {
    console.log('...');
}
// Lorsque cette fonction s'exécute, elle ajoutera à tous les clics un nouveau listener, ce qui exécutera la fonction printMessage encore + souvent. Mais JS & le navigateur sont assez intelligents pour remplacer l'ancien listener avec le nouveau, évitant ainsi de finir avec des milliers de listeners sur le même objet (la fonction addListener) pouvant mener à un comportement non désiré de l'application.
function addListener() {
    // Il faudrait plutôt ajouter une fonction anonyme à la place du nom de la fonction appelée dans le listener (ex. ci-dessous) > Fonction sans nom créée en tant que nouvel objet lorsque addListener est exécutée.
    // clickableBtn.addEventListener('click', function() {
    //     console.log('...');
    // });
    clickableBtn.addEventListener('click', printMessage);
}
addListenerBtn.addEventListener('click', addListener); // Ecoute un bouton présent dans le HTML.
```