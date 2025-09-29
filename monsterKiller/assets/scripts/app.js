const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 19;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

// Identifiants de constante globale.
const MODE_ATTACK = 'ATTACK'; // Ou MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // Ou MODE_STRONG_ATTACK = 1
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

// Fonction native JS/navigateur pour permettre la saisie utilisateur.
const enteredValue = prompt(
    'Maximum life for you and the monster.', // Texte affiché.
    '100', // Placeholder du champ;
);
// const enteredValue = parseInt(prompt('Maximum life for you and the monster.', '100'));

// Ces variables ne sont pas globales car leur valeur peut être modifiée.
let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100; 
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];

adjustHealthBars(chosenMaxLife);

// Fonction affichant différentes entrées/sorties retenues dans l'application. On pourrait se passer des arguments monsterHealth & playerHealth en se référant directement aux variables currentMonsterHealth & currentPlayerHealth mais il est + approprié d'utiliser les arguments puisqu'ils fournissent la donnée recherchée.
function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
    };

    switch (ev) {
        // /!\ Le switch case applique toujours l'opérateur === pour évaluer une condition.
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth,
            };
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth,
            };
        break;
        default:
            logEntry = {};
    }

    // if (ev === LOG_EVENT_PLAYER_ATTACK) {
    //     logEntry.target = 'MONSTER';
    // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //     logEntry.target = 'MONSTER';
    // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    //     logEntry.target = 'PLAYER';
    // // A finir.
    // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'PLAYER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth,
    //     };
    // } 
    // // else if (ev === LOG_EVENT_GAME_OVER) {
    // //     logEntry = {
    // //         event: ev,
    // //         value: val,
    // //         finalMonsterHealth: monsterHealth,
    // //         finalPlayerHealth: playerHealth,
    // //     };
    // // }

    battleLog.push(logEntry);
}


function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

// Le monstre attaque le joueur puis, vérification des niveaux de vie et termine le jeu en fonction.
function endRound() {
    // Récupération de la santé actuelle (avant le coup fatal).
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );

    // Ici, JS n'a pas nécessité de convertir hasBonusLife en booléen puisque c'est un booléen. Il fait automatiquement la comparaison.
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        // Restitution de la santé telle qu'elle était avant le coup fatal.
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but the bonus life saved you!');
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON!',
            currentMonsterHealth,
            currentPlayerHealth
        );
        // reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON!',
            currentMonsterHealth,
            currentPlayerHealth
        );
        // reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'A DRAW!',
            currentMonsterHealth,
            currentPlayerHealth
        );
        // reset();
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

// Le joueur attaque (avec une puissance renseignée en paramètre) le monstre puis lance endRound().
function attackMonster(mode) {
    // Simplification avec une ternaire pour se passer du if.
    // Etant donné qu'aucune nouvelle valeur ne sera réassignée, utilisation de 'const' au lieu de 'let'.
    const maxDamage = 
        mode === MODE_ATTACK
            ? ATTACK_VALUE
            : STRONG_ATTACK_VALUE;
    const logEvent =
        mode === MODE_ATTACK
            ? LOG_EVENT_PLAYER_ATTACK
            : LOG_EVENT_PLAYER_STRONG_ATTACK;
    // if (mode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if (mode === MODE_STRONG_ATTACK) {
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
    // }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    );
    endRound();
}

function attackHandler() {
    attackMonster('ATTACK'); 
}

function strongAtackHandler() {
    attackMonster('STRONG_ATTACK'); 
}

function healPlayerHandler() {
    let healValue;
    // Si le joueur a 80 PV ou +, ajoute 20 PV ou la différence jusqu'à avoir un maximum de 100 PV.
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    // Si le joueur a moins de 80 PV, ajoute 20 PV.
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL ,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    )
    endRound(); 
}

function printLogHandler() {
    // Nécessite au moins les 2 ';' : for (;;) { ... } mais fait crasher.

    for (let i = 0; i < 4; i++) {
        console.log('---------');
    }
    // Dans ce cas, préférer le for.
    // let j = 0;
    // while (j < 3) {
    //     console.log('----------');
    //     j++
    // }

    // for (let i = 10; i > 0;) {
    //     i--;
    //     console.log('---------');
    // }
    // for (let i = 0; i < battleLog.length; i++) {
    //     console.log(battleLog[i]); // Affiche tous les éléments de battleLog.
    // }

    let i = 0;
    for (const logEntry of battleLog) {
        console.log(`#${i}`); // Affiche tous les logs (comme le for juste avant).
        for (const key in logEntry) {
            // console.log(key); // Affiche toutes les clés de l'objet logEntry.
            // console.log(logEntry[key]); // Idem.
            console.log(`${key} => ${logEntry[key]}`);
        }
        i++;
    }

}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAtackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
