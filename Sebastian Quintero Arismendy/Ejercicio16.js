let fila = ["Ana", "Luis", "Carlos", "Maria"];

console.log("Fila original:", fila);

let nuevaFilaConJorge = [...fila.slice(0, 1), "Jorge", ...fila.slice(1)];

console.log("Nueva fila con Jorge:", nuevaFilaConJorge);
console.log("Fila original sigue igual:", fila);
