let getData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    // .json renvoie une promesse, vous devez donc utiliser .then pour
    // en extraire les données (data) de manière synchrone
    .then((data) => {
      const { userId, id, title, completed } = data;
      console.log(userId, id, title, completed);
    })
    .catch((error) => console.log("Erreur : " + error));
};
getData();
