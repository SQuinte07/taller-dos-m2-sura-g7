let ventas = [150, 300, 100, 50];

console.log("Ventas del día:", ventas);

let totalVentas = ventas.reduce((acumulador, valor) => acumulador + valor, 0);

console.log("Total de ventas:", totalVentas);
console.log("Ventas originales siguen igual:", ventas);
