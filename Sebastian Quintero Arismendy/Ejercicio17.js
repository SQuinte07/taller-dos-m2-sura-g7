let tablero = ["X", "O", "X"];

console.log("Tablero original:", tablero);

let nuevoTablero = tablero.map((valor, indice) => indice === 1 ? "X" : valor);

console.log("Nuevo tablero:", nuevoTablero);
console.log("Tablero original sigue igual:", tablero);
