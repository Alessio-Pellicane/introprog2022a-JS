//On sélectionne le premier button et le premier div du document
let b1 = document.querySelector("button");
let d1 = document.querySelector("div");

function changeColor() {
  this.style.backgroundColor = "orange";
}

//On utilise la méthode addEventListener pour gérer des évènements
b1.addEventListener("click", function () {
  alert("Bouton cliqué");
});
d1.addEventListener("mouseover", changeColor);
d1.addEventListener("mouseover", function () {
  this.style.fontWeight = "bold";
});

//On supprime un évènement
d1.removeEventListener("mouseover", changeColor);
