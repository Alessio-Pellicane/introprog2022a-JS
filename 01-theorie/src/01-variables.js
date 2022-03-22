/* Pour afficher dans la console avec JS (F12 / console) */
console.log("Je suis un console.log");

/* var - on peut déclarer deux fois avec le même nom et réassigner */
var myName = "Bart";
var myName = "Maggie";

// console.log("Var : ", myName);

/* let - on ne peut déclarer un let 2 fois mais bien le réassigner */
let myName2 = "Lisa";
// let myName2 = "Bart"; // error: Identifier 'myName2' has already been declared
// myName2 = "Bart";

// console.log("Let : ", myName2);

/* const - on ne peut déclarer déclarer 2 fois ni réassigner une constante*/
const myName3 = "Marge";
// const myName3 = "Homer"; // Identifier 'myName3' has already been declared
// myName3 = "Homer"; // error: Assignment to constant variable.

// console.log("Const : ", myName3);

/* rien - - on peut déclarer deux fois avec le même nom et réassigner */
myName4 = "Moe";
myName4 = "Otto";

// console.log("Rien : ", myName4);

/* concaténation : on utilise "+" ou des virgules */

let myName5 = "Bart";
let myName6 = "Lisa";
let myAge = 10;
let myAge2 = 9;

// console.log(
//   "Bonjour je suis",
//   myName5,
//   ", le frère de ",
//   myName6,
//   " et j'ai ",
//   myAge,
//   "ans!"
// );

// console.log(
//   "Bonjour je suis" + myName5,
//   ", le frère de " + myName6,
//   " et j'ai ",
//   myAge2 + 1,
//   "ans!"
// );

/* concaténation : Littéraux de gabarits ou template strings : entre backticks `` */
let textToDisplay = `Je suis ${myName5} le frère de ${myName6} et j'ai ${
  myAge2 + 1
} ans!`;

// console.log(textToDisplay);
