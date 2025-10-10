// 1.
// const firstLine = document.querySelector('#task-1');
const firstLine = document.querySelector('li'); // Fonctionne car le 1° sera retourné.
// const firstLine = document.querySelector('ul li:first-of-type'); // Pas recommandé car serait + difficile à analyser pour JS, prendrait + de temps > - opti.
// Ou :
const firstLine2 = document.getElementById('task-1');
console.dir(firstLine);
firstLine.style.backgroundColor = 'black';

// 2.
const title = document.querySelector('title');
// Ou :
const docHead = document.head;
const docTitle = docHead.querySelector('title');
// Ou :
const title2 = document.title;
console.dir(title);
title.textContent = 'Assignment -Solved!';

// 3.
const h1 = document.querySelector('h1');
console.dir(h1);
h1.textContent = 'Assignment - Solved!';