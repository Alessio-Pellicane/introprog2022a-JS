function isAnagram(str1, str2) {
  // Vérifiez si les deux chaînes ont des longueurs différentes
  if (str1.length !== str2.length) {
    return false;
  }

  // Trier les deux chaînes
  let s1 = str1.toLowerCase().split("").sort().join("");
  let s2 = str2.toLowerCase().split("").sort().join("");
  // toLowerCase : en minuscules
  // split : on crée un tableau avec chaque mot
  // sort : on trie le tableau
  // on concatène et on renvoie une chaine de caractère

  // Comparez les deux chaînes triées
  return s1 === s2;
}

console.log("Yourcenar / Crayencour : ", isAnagram("Yourcenar", "Crayencour")); // false
console.log("chien / Niche : ", isAnagram("chien", "Niche")); // true
console.log(
  "Pablo Picasso / Pascal Obispo",
  isAnagram("Pablo Picasso", "Pascal Obispo")
); // true
