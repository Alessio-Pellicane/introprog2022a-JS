async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    // await: attend la fin de l'opération puis passe à la suite
    // sans bloquer l’exécution des autres opérations asynchrones
    // qui pourraient se dérouller en arrière plan
    const data = await response.json();
    const { userId, id, title, completed } = data;
    console.log(userId, id, title, completed);
  } catch (error) {
    console.log("Erreur : " + error);
  }
}
getData();
