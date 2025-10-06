// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

// 1.
const sayHello1 = name => console.log('Hi ' + name);
sayHello1('Feisar');

// 2.
// With 2 args :
const sayHello2 = (fisrtname, lastname) => console.log(`Hi ${firstname} ${lastname} !`);
sayHello2('Feisar', 'Roch');

// Without arg :
const sayHello21 = () => console.log(`Hi unknown people !`);
sayHello21();

// With return value :
const sayHello22 = name => name;
sayHello22('Feisar');

// 3.
const sayHello3 = (name = 'Feisar') => console.log('Hi ' + name);
sayHello3('Feisar');

// 4.
const warnFunction = (string) => {
  console.log('No word specified or empty word !', typeof string);
  return;
}

const checkInput = (fallback, ...strings) => {
  // If NO argument :
  if (!strings) {
    fallback(strings);
  }

  // If string is empty :
  for (string of strings) {
    if (string === '' && string.trim() === '') {
      fallback(string);
    }
  }

  let sentence;
  for (string of strings) {
    console.log(string);
    sentence += string + ' ';
  }
  return sentence;
}

const resultSentence = checkInput(warnFunction, 'Hi', 'I', 'dont', 'remember', '   ');
console.log(resultSentence);

// Autre façon :
function checkInput2(fallback, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (hasEmptyText) {
      fallback();
  }
}

checkInput(() => {
  console.log('All not empty !');
}, 'Hello', '12', 'abcd', '');
