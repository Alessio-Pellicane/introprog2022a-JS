// Sans récursion

function factorial(x) {
  let result = 1;
  for (let i = 1; i <= x; i++) result = result * i;
  return result;
}

console.log(factorial(5)); // output : 120

// Avec récursion

function factorialRecursive(x) {
  // This is the base case.
  if (x === 0) return 1;
  // This is the recursive one.
  else return x * factorialRecursive(x - 1);
}

console.log(factorialRecursive(5)); // output : 120
