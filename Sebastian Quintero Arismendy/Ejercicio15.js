let fila = ["Ana", "Luis", "Carlos", "Maria"];

console.log("Fila original:", fila);

let nuevaFila = fila.filter(nombre => nombre !== "Luis");

console.log("Nueva fila sin Luis:", nuevaFila);
console.log("Fila original sigue igual:", fila);
