# Comparaison de string :
- Strings peuvent être comparées avec les opérateurs > ou <.
- JS les compare en fonction de l'ordre lexicographique standard.
- Ex : `'a' > 'b' // false.`
`'a' > 'B' // true : Paradoxalement, les majuscules sont considérés plus petits que les minuscules.`
`'ab' > 'aa' // true.`

# Comparaison d'array ou d'objet :
- Ex :  `const person1 = { name: 'Feisar' }`
        `const person2 = { name: 'Feisar' }`
- Ces objets paraissent identiques mais un nouvel objet est créé avec person2.
- Si comparés avec == ou ===, cela retournera false : `person1 === person2 // false`.
- Mais si l'un de ces 2 objets est stocké dans une variable tierce, pas de nouvel objet : `person3 = person1`.
- Et qu'elles sont comparées : `person3 === person1 // true`.

# Opérateur de précédence :
- Ex : `1 + 2 < 3 + 4 // true`
- Ici, les opérateurs d'addition et de soustraction ont une plus haute précédence que celle de l'opérateur de comparaion.
- Ex : `5 == 5 && 3 > 6 || 10 > 5 // true`
- Ici, les opérateurs d'égalité et de comparaison + petit / + grand sont effectués en 1° puis les opérateurs de comparaison logique.
    => L'opérateur && a une + grande précédence que ||.

# Condition avec une string :
- Ex :  `let userInput = 'Feisar'`
        `if (userInput) { ... }` Le code s'exécutera parce que 'Feisar' est vrai (et donc userInput tant qu'elle ne contient pas de string vide).
- JS tente de contraindre (coerce), de convertir sans réellement convertir la valeur passée au if. Il essaie d'interpréter 'Feisar' en tant que booléen.
    => Il ne convertit pas la variable mais génère un nouveau booléen temporaire utilisé pour la comparaison.

# Déclaration IF :
**Ne peut pas retourner de valeur** : Pas de return dans les instructions.
**Ne peut pas être assignée à une constante puisqu'elle ne peut rien retourner**

# EXPRESSION VS DECLARATION (STATEMENT) :
**Expression** : cède une valeur pouvant être stockée dans une variable/constante ou pouvant être renvoyée d'une fonction ; un élément utilisé à droite d'un '=' (assignement).
**Déclaration (Statement)** : élément avec lequel il n'y a pas d'interaction directe (ex : if > pas d'assignation).

# Opérateur 'double NOT' (ou 'double bang') :
**!!** : Utilisé pour la coercission de booléen.
> Transforme une variable (string, number...) ou condition en booléen (false ou true), tout comme l'opérateur de négaton.
**Ex**
```javascript
!!"" // false.
!!1 // true.
const isValidInput = !!userInput // Au lieu de const isValidInput = userInput ? true : false.
```

# Assignement d'une valeur par défaut avec l'opérateur 'OR' :
**||** : Ne génère pas de booléen, retournera la 1° valeur évaluée à true.
**Ex**
```javascript
const name = someInput || 'Feisar' // Si someInput n'est pas true, retourne 'Feisar' par défaut.
```

# Assignement d'une valeur par défaut avec l'opérateur 'AND' :
**&&** : Ne génère pas de booléen, retournera la dernière valeur si les 1° sont vraies dans une validation multiple. Si la 1° valeur est false, alors la 1° valeur sera retournée.
**Ex**
```javascript
const name = isLogged && 'Feisar' // Si isLogged est true, retourne 'Feisar'. Sinon retourne isLogged.
```
