let text = "";
let i = 0;
/* For */
for (i = 0; i < 5; i++) {
  text += "For: The number is " + i + "\n";
}
// console.log(text);

/* While */

while (i < 10) {
  text += "While: The number is " + i + "\n";
  i++;
}
// console.log(text);

/* Do while */
text = "";
i = 0;

do {
  text += "\nDo while: The number is " + i;
  i++;
} while (i < 10);
// console.log(text);

/* For... in: boucle sur les index */
// attention, ne respecte pas toujours l'ordre du tableau

let numbers = [45, 4, 9, 16, 25];

txt = "";
for (let x in numbers) {
  txt += numbers[x] + "\n";
}
// console.log(txt);

/* For... of: boucle sur les valeurs */

const cars = ["BMW", "Volvo", "Mini"];

text = "";
for (let x of cars) {
  text += x;
}
// console.log(cars);

/* Foreach */

/*
  la fonction prend 3 arguments :

  La valeur de l'article
  L'index des articles
  Le tableau lui-même

*/

numbers = [45, 4, 9, 16, 25];

txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "\n";
}
// console.log(txt);
