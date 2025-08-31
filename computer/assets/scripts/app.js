// Fichier contenant la logique de la calculatrice.

// alert('This works!');

// let currentResult = 0 // Déclarer une variable sans l'initialiser : let currentResult;
const defaultResult = 0
let currentResult = defaultResult // Erreur : Uncaught TypeError: Assignment to constant variable.

currentResult = currentResult + 10 // Le côté droit est exécuté en 1°. Le côté gauche écrase donc la valeur initiale de currentResult avec celle de l'addition.

let calculationDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1'

outputResult(currentResult, calculationDescription)

