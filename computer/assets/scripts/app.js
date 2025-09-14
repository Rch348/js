// Fichier contenant la logique de la calculatrice.

// Le ; n'est requis que si 2 instructions se trouvent sur une même ligne de code(ex : const defaultResult = 0; let currentResult = defaultResult;).
// alert('This works!')

// let currentResult = 0 // Déclarer une variable sans l'initialiser : let currentResult
const defaultResult = 0
let currentResult = defaultResult // En réalité, la valeur contenue dans currentResult est une copie/référence de la constante defaultResult dont sa valeur pourra être modifiée (car ce conteneur de donnée currentResult est une variable), la constante originale ne le sera pas.
let logEntries // = []

// Une fonction peut être définie après son appel/invocation car JS lit tout le fichier avant de l'exécuter.
// Ici : portée globale.
// function add(num1, num2) {
//     // Ici : portée de la fonction, result n'a pas de portée globale, seulement locale.
//     const result = num1 + num2
//     // alert(`The result is ${result}`)
//     return result
// } // Pas de ; après une paire d'accolades.

// add(1, 2)
// add(4, 5)

// defaultResult = (currentResult + 10) * 3 / 2 -1 // Erreur : Uncaught TypeError: Assignment to constant variable.
// currentResult = (currentResult + 10) * 3 / 2 -1  // Le côté droit est exécuté en 1°. Le côté gauche écrase donc la valeur initiale de currentResult avec celle de l'addition.
// currentResult = add(1, 2)

// let calculationDescription = `(${defaultResult} + 10)
//                             * 3 / 2 - 1` // Les retours de ligne sont effectués par défaut dans un template.
// let errorMessage = 'An error \n' +
//                     'occured!' // Dans une string classique, nécessité d'ajouter \n pour un retour de ligne.
                    // Une string doit toujours être écrite sur une seule ligne car sinon, JS ne trouve pas le guillemet fermant et retourne une erreur.

// On veut dire au navigateur ce qu'il faut exécuter lors d'un clic sur le bouton. Le code est analysé par le navigateur. En ajoutant le listener et si la fonction add était passée en argument du listener avec les parenthèses et les arguments dedans, la fonction add() serait appelée (au moment de l'exécution du script) mais ce n'est pas l'idée. En réalité, il faudrait plutôt lui dire de garder en tête que cette fonction devra être exécutée lorsque le bouton sera cliqué > Donc ne PAS mettre les PARENTHESES, juste le nom de la fonction. Ceci dit à JS que quand l'événement du clic survient, de jetter un oeil à la déclaration de la fonction avec le nom indiqué et de l'exécuter à ce moment précis : Différencier le moment d'exécution du script et le moment où doit être exécutée la fonction.
// addBtn.addEventListener('click', add(1, 2)) // MAUVAISE FACON. 

// addBtn.addEventListener('click', add)

// Récupère la saisie utilisateur depuis le champ et la convertit en valeur numérique.
function getUserNumInput () {
    return parseInt(userInput.value)
}

// Affiche la 1° valeur/résultat saisie, l'opérateur et la 2° valeur de l'opération en cours.
function createAndWriteOutput (operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

// Mais qu'en est-il des arguments à passer à add() ? Il faut revoir la fonction :
function add() {
    // La fonction n'interagit plus avec des variables locales mais avec des globales.
    const enteredNumber = getUserNumInput() // Donnera la 2° valeur de l'opération saisie âr l'utilisateur.
    const initialResult = currentResult // Réf. à la 1° valeur/résultat de l'opération.
    // Ici, un nombre (currentResult) et une string (userInput.value). Par sécurité et parcequ'il ne sait pas s'il doit faire l'un ou l'autre, JS transforme currentResult en string pour la concaténer avec userInput.value (ex : si 4 + 5 > 45 au lieu de 9). 
    // currentResult = currentResult + userInput.value // /!\ userInput.value est de type string car tout ce que l'utilisateur soumettra, le JS du navigateur l'enverra sous forme de string.
    // parseInt() fonctionne juste avec les entiers, pas avec les décimaux > parseFloat().
    currentResult += enteredNumber // Effectue l'addition.
    // ++currentResult // Mettre l'opérateur devant la variable permet de retourner la nouvelle valeur après l'incrément (ex : Si currentResult était = à 0, retourne 1).
    // currentResult++ // Retourne la valeur avant l'incrément(ex : Si currentResult était = à 0, retourne 0 ).
    createAndWriteOutput('+', initialResult, enteredNumber) // Affiche le résultat.
    logEntries = [enteredNumber]
}

// Mais en appuyant sur le bouton, cette fonction n'est pas exécutée (seulement lors de l'exécution du script) > Il faut l'intégrer dans la fonction add().
// outputResult(currentResult, calculationDescription)

function subtract () {
    const enteredNumber = getUserNumInput()
    const initialResult = currentResult
    currentResult -= enteredNumber // Soustrait les 2 entiers de ces 2 variables.
    createAndWriteOutput('-', initialResult, enteredNumber) // Affiche le résultat.
}

function multiply () {
    const enteredNumber = getUserNumInput()
    const initialResult = currentResult
    currentResult *= enteredNumber
    createAndWriteOutput('*', initialResult, enteredNumber) // Affiche le résultat.
}

function divide () {
    const enteredNumber = getUserNumInput()
    const initialResult = currentResult
    currentResult /= enteredNumber
    createAndWriteOutput('/', initialResult, enteredNumber) // Affiche le résultat.
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)