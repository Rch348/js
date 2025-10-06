const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

// Pour qu'une partie puisse être relancée.
let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS} ?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice ! We chose ${DEFAULT_USER_CHOICE} for you !`);
        // return DEFAULT_USER_CHOICE; // Façon la + courte.
        return;
    }
    return selection;
};

const getComputerChoice = () => {
    // Math est un objet global mis à disposition par le navigateur dans JS.
    const randomValue = Math.random(); // .random() est une méthode générant un nombre aléatoire entre 0 et 1.
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// const getWinner = function(cChoice, pChoice) {
//     if (cChoice === pChoice) {
//         return RESULT_DRAW;
//     } else if (
//         cChoice === ROCK && pChoice === PAPER ||
//         cChoice === PAPER && pChoice === SCISSORS ||
//         cChoice === SCISSORS && pChoice === ROCK
//     ) {
//         return RESULT_PLAYER_WINS;
//     } else {
//         return RESULT_COMPUTER_WINS;
//     }
// }
// Arrow function (~ function getWinner() {}).
// Si un seul argument, les parenthèses peuvent être omises : arg => { ... }.
// Si une seule expression, les accolades peuvent être omises : (arg1, arg2) => arg1 + arg2. /!\ return est toujours utilisé par l'arrow function. Si dans la seule expression, un objet est retourné : const functionName = arg => ({ key: value }); (Parenthèses nécessaires pour éviter de confondre les accolades de l'objet avec celles du bloc d'instruction). 
// Paramètre par défaut : si la variable passée en argument est undefined (ou aucune variable) et qu'une valeur par défaut lui est attribuée, la valeur par défaut sera retenue. Mais si l'une des autres falsy values (null, NaN, 0...) est passée en argument, la valeur par défaut ne sera pas retenue.
const getWinner = (
    cChoice, 
    pChoice = DEFAULT_USER_CHOICE // pChoice est prédéfini avec une valeur par défaut (pas le + opti, juste pour l'ex.).
) =>
// { return
    cChoice === pChoice 
    ? RESULT_DRAW 
    : cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

    // if (cChoice === pChoice) {
    //     return RESULT_DRAW;
    // } else if (
    //     cChoice === ROCK && pChoice === PAPER ||
    //     cChoice === PAPER && pChoice === SCISSORS ||
    //     cChoice === SCISSORS && pChoice === ROCK
    // ) {
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }
// }



// Si une fonction est définie du côté droit de l'opérateur d'assignement, la fonction n'est plus stockée dans une portée globale et peut donc être nommée pareil.
// Expression de fonction : fonction stockée dans une variable/objet qui sera stockée dans la portée globale et référencée en utilisant le nom de la variable/constante. Hissée mais pas initialisée > initialisée avec undefined. Utilisée pour forcer la déclaration avant utilisation de la fonction, variante pouvant donc être utilisée normalement.
// const startGame = function startGame() { // Expression de fonction.
// const start = function startGame() { // Expression de fonction
// const start = function () { // Fonction anonyme.
//     console.log('Game is starting...');
// }

// Définition de fonction : Hissée & initialisée, crée automatiquement une variable contenant l'objet fonction.
// function startGame() {
//     console.log('Game is starting...');
// }

// console.log('Type of function: ', typeof start); // function : type à part reposant sur un objet.
// console.dir(startGame) // Affiche toutes les infos relatives à la fonction (length, nom, args, portée, prototype...) sous forme d'objet.

// startGameBtn.addEventListener('click', start); // Référence à l'expression de fonction stockée dans la variable start.
// En passant cette fonction anonyme en argument à la fonction addEventListener(), on passe un pointeur d'une fonction (listener) à une autre fonction (anonyme).
startGameBtn.addEventListener('click', () => { // Cette fonction anonyme est une fonction de callback car elle est appelée sans nécessité de le faire soit même (ici, elle est appelée par le listener).
    if (gameIsRunning) { // Vérifie si le jeu est déjà lancé.
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    // console.log('Player chose: ', playerChoice);
    const computerChoice = getComputerChoice();
    // console.log('Computer chose: ', computerChoice);
    // const winner = getWinner(computerChoice, playerChoice);
    // console.log(winner);
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice); // Dans d'autres langages, il y aurait une erreur du fait de ne fournir qu'un seul argument à un efonction en attendant deux. EN JS, la faute est tolérée mais utilise undefined à la place du 2° argument. Un paramètre peut être prédéfini par défaut (cf. getWinner()).
    }
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});
// startGameBtn.addEventListener('click', function() { // Fonction anonyme dont la référence est passée en argument de la fonction addEventListener.
// });
