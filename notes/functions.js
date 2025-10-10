/**
 * FONCTIONS : 'Code à la demande'.
 */

/**
 * SPREAD OPERATOR ...
 * - Si utilisé dans un objet A ou un array A sur un objet B ou un array B, fait sortir tout le contenu de l'objet B/array B pour se retrouver dans l'objet A/array A.
 */

/**
 * REST OPERATOR ...
 * - Si utilisé dans les paramètres d'une fonction, plusieurs arguments pourront être renseignés et groupés dans un array pouvant être utilisé dans la fonction.
 * - Doit toujours être le dernier paramètre si il y en a plusieurs dans ladite fonction car les arguments qui suivront ne seront jamais retenus étant donné que le rest operator consumera tous les arguments passés.
 * - Si d'autres paramètres sont spécifiés avant le dernier paramètre avec un rest operator, les 1° paramètres seront aussi exclus et non retenus.
 */

/**
 * /!\ NE PAS UTILISER : AVANT ES6 /!\
 * Mot clé 'arguments' (~ REST OPERATOR):
 * - Ne fonctionne qu'avec les fonctions déclarées avec 'function'.
 * - Utilisé dans le corps de la fonction.
 * - Donne accès à un genre d'array objet avec tous les arguments passés à la fonction.
 */ 
// const sumUp = function(resultHandler, ...nums) {
//     let sum = 0;
//     for (const num of arguments) { // Ne pas utiliser.
//         sum += num;
//     }
//     resultHandler(sum, 'The result is: ');
// };

// const substractUp = function(resultHandler, ...nums) {
//     let difference = 0;
//     for (const num of nums) {
//         difference -= num;
//     }
//     resultHandler(difference, 'The result is: ');
// };

// Le paramètre messageText doit être en 1° position puisque c'est le 2° argument passé à la méthode bind appelée sur la fonction lors de son appel (cf. appel + bas).
const handleResult = (messageText, result) => {
    alert(messageText + ' ' + result);
};

const combine = (resultHandler, operation, ...nums) => {
    const validateNum = num => {
        return isNaN(num) ? 0 : num;
    };

    let result = 0;
    for (const num of nums) {
        if (operation === 'ADD') {
            result += validateNum(num);
        } else {
            result -= validateNum(num);
        }
    }
    resultHandler(result); // Avec la méthode bind(), le 2° argument passé (la string) sera automatiquement passé à resultHandler dans combine, avant result.
};

// sumUp(handleResult, 1, 5, 'abcd', -3, 6, 10);
// sumUp(handleResult, 1, 2, 3, 4, 5);
// substractUp(handleResult, 1, 10, 15, 20);
combine(handleResult.bind(this, 'Result after adding all numbers is: '), 'ADD', 1, 5, 'abcd', -3, 6, 10); // La méthode .bind() permet de créer une nouvelle référence à la fonction (handleResult) qui la renvoie, et sera préconfigurée en fonction des arguments qu'elle recevra. N'exécute pas la fonction directement comme si seules des parenthèses étaient ajoutées, mais permet de la préparer pour une future exécution (ici pour personnaliser le message du résultat en fonction de l'opération effectuée).
combine(handleResult.bind(this, 'Result after adding all numbers is: '), 'ADD', 1, 2, 3, 4, 5);
combine(handleResult.bind(this, 'Result after substracting all numbers is: '), 'SUBSTRACT', 1, 10, 15, 20);

/**
 * Méthodes .call() & .apply() :
 * - Similaires à .bind() > passage d'arguments à la fonction invoquant la méthode.
 * - Appelle et exécute directement la fonction appelant la méthode !== .bind().
 * 
 */
