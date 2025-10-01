# break : stoppe l'exécution de la loop.
```javascript
for (let i = 0; i < 4; i++) {
    if (i === 2) {
        break;
    }
    console.log(i) // Affiche 0 et 1.
}
```

# continue : continue avec la prochaine itération de la loop et stoppe l'exécution de l'itération actuelle.
```javascript
for (let i = 0; i < 4; i++) {
    if (i === 2) {
        continue; // Ici, 2 ne serait pas affiché par le console.log() suivant.
        console.log(i);
        // continue; // Ici, aucun effet puisque fin du bloc if. La loop serait passée à l'itération suivante, peu importe ce qu'il se passe.
    }
    console.log(i) // Affiche 0, 1, 3 et 4.
}
```

# 'l'abeled' (très rare) : on peut nommer une loop en préfixant le mot clé de la boucle par 'name: '.
```javascript
outerFor: for (let i = 0; i < 4; i++) {
    console.log('Outer : ', i) // Affiche 0, 1, 2 et 3.
    innerFor: for (let j = 0; j < 5; j++) {
        if (i === 2) {
        break outerFor; // Arrête la loop outerFor (et non pas seulement innerFor).
        // continue outerFor; 
    }
    console.log('Inner : ', j) // Affiche 0 et 1.
    }
}
```

## Exercice :
```javascript
let sum = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
        if (i >= 2) {
            continue;
        }
        sum = sum + i + j;
    }
}
console.log(sum);
```
Suivi exact des itérations :
i = 0
                             sum + i + j
j = 0 → i >= 2 ? false → sum = 0 + 0 + 0 = 0
                             sum + i + j
j = 1 → i >= 2 ? false → sum = 0 + 0 + 1 = 1

👉 fin i=0 → sum = 1

i = 1
                             sum + i + j
j = 0 → i >= 2 ? false → sum = 1 + 1 + 0 = 2
                             sum + i + j
j = 1 → i >= 2 ? false → sum = 2 + 1 + 1 = 4

👉 fin i=1 → sum = 4

i = 2

j = 0 → i >= 2 ? true → continue → rien ajouté

j = 1 → idem

👉 fin i=2 → sum = 4

i = 3, 4 → pareil (toujours continue) → sum reste 4