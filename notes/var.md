**Ex**:
```javascript
// var a une portée globale.
console.log(userName); // undefined mais pas d'erreur car JS a une fonctionnalité (hoisting) qui lors du chargement du script, le parcourt en entier et fait des tâches comme rechercher une fonction (puis la charge et l'enregistre automatiquement). Il en est de même avec var en lui assignant une valeur initiale à undefined, empêchant l'erreur. Mais comme le concept n'est pas très intuitif, il vaut mieux déclarer une variable avant de l'utiliser par convention.
var userName = 'Feisar'; // Feisar
// var peut être redéclarée avec une même variable si déjà déclarée dans la même portée.
var userName = 'Auricom'; // Auricom
// Par défaut, JS autorise la déclaration d'une variable sans mot clé (var, let & const) en ajoutant var par défaut lors de la lecture du script > A éviter car on peut penser que la variable a été déclarée avant, après ou même dans un autre scrit importé.
userName = 'AG System'; // AG System
// Peut être évité avec le mode strict (introduit avec ES5).
"use strict";
```

```javascript
// A la différence de var, let & const ont une poretée de bloc.
console.log(userName);
let userName = 'Feisar'; // Erreur, la fonctionnalité de hoisting se produit tout de même et retourne une erreur avec let & const si initialisés avant utilisation.
```