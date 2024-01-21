const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

const novoArray = frutas.reverse().join(", ");

console.log(novoArray);

frutas.shift();
frutas.pop();
frutas.push("Melão");

console.log(frutas);
