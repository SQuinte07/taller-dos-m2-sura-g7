let original = ["A", "B", "C"];

console.log("Arreglo original:", original);

let clon = original.slice();

clon.push("D");

console.log("Clon modificado:", clon);
console.log("Arreglo original sigue intacto:", original);
