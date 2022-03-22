/* Fonction classique */

function add(x, y) {
  return x + y;
}

// console.log(add(3, 3)); // 6

/* Fonction classique anonyme avec expression de fonction.*/
const addAnonym = function (x, y) {
  return x + y;
};

// console.log(addAnonym(5, 4)); // 9

/* Fonctions flêchées / arrow functions (anonyme) avec expression de fonction */

// console.log(addArrow(6, 6)); // Cannot access 'addArrow' before initialization

const addArrow = (x, y) => {
  return x + y;
};

// const addArrow = (x, y) => x + y;

// console.log(addArrow(6, 6)); // 12

/* Immediately Invoked Function Expressions (IIFE) */

// (function () {
//   console.log("IIFE fonction classique");
// })();

// (() => {
//   console.log("IIFE fonction flêchée");
// })();
