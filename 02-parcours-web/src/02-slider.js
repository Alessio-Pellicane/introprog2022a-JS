let slide = new Array(
  "cat01.jpg",
  "cat02.jpg",
  "cat03.jpg",
  "cat04.jpg",
  "cat05.jpg",
  "cat06.jpg",
  "cat07.jpg",
  "cat08.jpg",
  "cat09.jpg",
  "cat10.jpg",
  "cat11.jpg",
  "cat12.jpg"
);

//Initialisation de l'indice (pour l'image)
let cpt = 0;


//Pour la fonction image précédente
let btprev = document.getElementById("previous");
btprev.addEventListener("click", previous);


function previous() {

  if (cpt === 0) {
    cpt = slide.length - 1;
  } else {
    cpt--;
  }
  document.getElementById("slide").src = "assets/img/cats/" + slide[cpt];
  console.log(cpt);
}



//Pour la fonction image suivante
let btnext = document.getElementById("next");
btnext.addEventListener("click", next);


function next() {

  if (cpt === slide.length - 1) {
    cpt = 0
  } else {
    cpt++;
  }
  document.getElementById("slide").src = "assets/img/cats/" + slide[cpt];
}

//Intervalle
setInterval(next, 4000);