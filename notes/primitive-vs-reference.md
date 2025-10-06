# Primitive : string, number, boolean, null, undefined & symbol.
    > Stockés dans la stack où les variables stockent leur valeur elles-mêmes.

# Référence : tous les autres objets (+ coûteux à créer car prennent + de place, de mémoire).
    > Stockés quelque part dans le heap en tant que référence.
    > En réalité, c'est l'adresse de l'endroit de la mémoire (= pointeur) et non la valeur elle-même. Donc si une même valeur est assignée à une variable différente, seulement le pointeur/référence sera copié et non pas la valeur.

```javascript
let name = 'Feisar';
console.log(name); // 'Feisar'
// Une copie de la valeur de la variable name est créée et stockée dans la variable user mais est stockée dans la même place mémoire et stocke l'adresse de cet endroit 
let user = name;
console.log(user); // 'Feisar'
name = 'Auricom';
console.log(user); // 'Feisar'

// En assignant activities à newActivities, seul le pointeur/adresse de l'array est copié. L'élément/valeur/array elle-même n'est jamais dupliquée afin d'éviter de la duplication de données non nécessaire.
let activities = ['Sports'];
let newActivities = activities; // ['Sports']
console.log(newActivities); // ['Sports']
activities.push('Cooking');
console.log(activities); // ['Sports', 'Cooking']
console.log(newActivities); // ['Sports', 'Cooking']

let person = { age: 27 };
let anotherPerson = person;
anotherPerson.age = 29; // La modification est effectuée dans .age, pas dans anotherPerson malgré le fait d'utiliser l'assignation sur une constante.
console.log(person); // 29
// Spread operator ... : sort tous les éléments d'un array ou toutes les paires clé-valeur d'un objet.
let yetAnotherPerson = { ...person }; // Un nouvel objet/copie est créée.
console.log(yetAnotherPerson); // 32
person.age = 30;
console.log(yetAnotherPerson); // 32 car c'est une toute nouvelle copie.

let activities = ['Sports'];
let moreActivities = [...activities];
activities.push('Cooking');
console.log(moreActivities); // Affiche ['Sports']

const person1 = { age: 27 };
const person2 = { age: 27 };
person1 === person2 // false étant donné que 2 variables/objets ont été créés et stockés à différents endroits, 2 pointeurs pointent vers différentes adresses en mémoire et ce sont ces adresses qui sont comparées.

const activities = ['Sports'];
activities.push('Cooking');
console.log(activities); // ['Sports', 'Cooking'] car même si activities est une constante, c'est l'adresse de l'array qui est stockée dans la constante et la donnée peut être manipulée en mémoire puisque l'adresse en mémoire reste la même. Seule + de mémoire est allouée. Donc 'Cooking' est bien ajouté.
activities = ['Sports', 'Running']; // Erreur car un nouvel array tente d'être assigné à activities, ce qui n'est pas autorisé.
```
