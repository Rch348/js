const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 19;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

prompt('Maximum life for you and the monster.', '100');

// Ces variables ne sont pas globales car leur valeur peut être modifiée.
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

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
        // reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
        // reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
        // reset();
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

// Le joueur attaque (avec une puissance renseignée en paramètre) le monstre puis lance endRound().
function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
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
    endRound(); 
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAtackHandler);
healBtn.addEventListener('click', healPlayerHandler);

