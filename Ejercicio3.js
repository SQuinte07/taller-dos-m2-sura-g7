let notas = [8, 5, 10, 3, 7];

console.log("Notas originales:", notas);

let aprobadas = notas.filter(nota => nota >= 6);

console.log("Notas aprobadas:", aprobadas);
console.log("Notas originales siguen igual:", notas);
