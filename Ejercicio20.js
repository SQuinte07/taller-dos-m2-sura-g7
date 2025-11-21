let puntuaciones = [50, 85, -10, 100, 0, 30];

console.log("Puntuaciones originales:", puntuaciones);

let totalPuntos = puntuaciones
  .filter(p => p >= 0)
  .map(p => p + 10)
  .reduce((acum, p) => acum + p, 0);

console.log("Total de puntos:", totalPuntos);
console.log("Puntuaciones originales siguen igual:", puntuaciones);

