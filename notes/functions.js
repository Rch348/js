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
const sumUp = function() {
    let sum = 0;
    for (const num of arguments) { // Ne pas utiliser.
        sum += num;
    }
    return sum;
}