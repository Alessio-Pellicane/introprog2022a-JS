
//Fonction opération

function addition() {
    let nbre1 = parseFloat(document.getElementById("inputOne").value);
    let nbre2 = parseFloat(document.getElementById("inputTwo").value);
    if (nbre1 && nbre2) {
        let result = document.getElementById("result");

        result.value = (nbre1 + nbre2);
        console.log(result);
    } else {
        alert("Champs vides. Veillez saisir un nombre !");
    }
}

function soustraction() {
    let nbre1 = parseFloat(document.getElementById("inputOne").value);
    let nbre2 = parseFloat(document.getElementById("inputTwo").value);
    if (nbre1 && nbre2) {
        let result = document.getElementById("result");

        result.value = (nbre1 - nbre2);
        console.log(result);
    } else {
        alert("Champs vides. Veillez saisir un nombre !");
    }
}

function multiplication() {
    let nbre1 = parseFloat(document.getElementById("inputOne").value);
    let nbre2 = parseFloat(document.getElementById("inputTwo").value);
    if (nbre1 && nbre2) {
        let result = document.getElementById("result");

        result.value = (nbre1 * nbre2);
        console.log(result);
    } else {
        alert("Champs vides. Veillez saisir un nombre !");
    }
}

function division() {
    let nbre1 = parseFloat(document.getElementById("inputOne").value);
    let nbre2 = parseFloat(document.getElementById("inputTwo").value);
    if (nbre1 && nbre2) {
        let result = document.getElementById("result");

        result.value = (nbre1 / nbre2);
        console.log(result);
    } else {
        alert("Champs vides. Veillez saisir un nombre !");
    }
}



//Addition

let bouton1 = document.querySelector("#plus");
bouton1.addEventListener("click", addition);


//Soustraction

let bouton2 = document.querySelector("#minus");
bouton2.addEventListener("click", soustraction);


//Multiplication

let bouton3 = document.querySelector("#multiplier");
bouton3.addEventListener("click", multiplication);


//Division

let bouton4 = document.querySelector("#divider");
bouton4.addEventListener("click", division);


