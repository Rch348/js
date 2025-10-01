const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// 1.
if (randomNumber >= 0.7) {
    alert(`1. La variable randomNumber est supérieure ou égale à 0.7 : ${randomNumber}`);
} else {
    alert(`1. La variable randomNumber n'est pas supérieure ou égale à 0.7 : ${randomNumber}`)
}

// 2.
const nums = [4, 5, 6, 8, 10, 12, 18];
for (let i = 0; i < nums.length; i++){
    console.log('2.1 : ', nums[i]);
}
// Ou for of :
for (const num of nums) {
    console.log('2.2 : ', num);
}
// Ou while :
let counter = 0;
while (counter < nums.length) {
    console.log('2.3 : ', nums[counter]);
    counter++;
}

// 3.
// - 1 car les index partent de 0.
for (let i = nums.length - 1; i >= 0; i--){
    console.log('3 : ', nums[i]);
}

// 4.
const randomNumber2 = Math.random();
// while (
//     (randomNumber <= 0.2 || randomNumber2 <= 0.2) ||
//     (randomNumber > 0.7 && randomNumber2 > 0.7)
// ) {
//     if (randomNumber < 0.2) {
//         alert(`4. La variable randomNumber est inférieure ou égale à 0.2 : ${randomNumber} (randomNumber2 = ${randomNumber2})`);
//     } else if (randomNumber2 < 0.2) {
//         alert(`4. La variable randomNumber2 est inférieure ou égale à 0.2 : ${randomNumber2} (randomNumber = ${randomNumber})`);
//     } else if (randomNumber > 0.7 && randomNumber2 > 0.7) {
//         alert(`4. Les variables randomNumber et randomNumber2 sont supérieures à 0.7 : ${randomNumber} et ${randomNumber2}`);
//     }
//     break;
// }

if (
    (randomNumber > 0.7 && randomNumber2 > 0.7) || 
    randomNumber <= 0.2 || 
    randomNumber2 <= 0.2
) {
    alert('Les 2 variables sont supérieures à 7 ou inférieures à 0.2.');
}