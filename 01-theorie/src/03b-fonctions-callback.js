let myInterval;

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

function myStartFunction() {
  // Lorsqu'une fonction passe en argument une autre fonction, on appelle cette deuxième fonction callback.
  myInterval = setInterval(myTimer, 1000);
}

function myStopFunction() {
  clearInterval(myInterval);
}
