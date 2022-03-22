/* JavaScript if else and else if */

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

/*
  Opérateur ternaire / ternary operator :
  let variableName = condition ? expressionIfTrue : expressionIfFalse;
*/

// Classique
let age = 12;
let message;

if (age >= 18) {
  message = "Vous pouvez conduire.";
} else {
  message = "Vous ne pouvez pas conduire.";
}

// console.log(message);

// Ternaire

let age2 = 13;
let message2;

message2 = age >= 18 ? "Vous pouvez conduire." : "ous ne pouvez pas conduire.";

// console.log(message2);

/* Switch case */

switch (new Date().getDay()) {
  case 1:
    day = "Lundi";
    break;
  case 2:
    day = "Mardi";
    break;
  case 3:
    day = "Mercredi";
    break;
  case 4:
    day = "Jeudi";
    break;
  case 5:
    day = "Vendredi";
    break;
  case 6:
    day = "Samedi";
    break;
  case 7:
    day = "Dimanche";
    break;
  default:
    text = "Semaine des 4 jeudis!";
}

// console.log(day);
