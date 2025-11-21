let productos = [{nombre: "Papas", precio: 2}, {nombre: "Carne", precio: 15}, {nombre: "Leche", precio: 3}];

console.log("Productos originales:", productos);

let productosCaros = productos
  .filter(producto => producto.precio > 4)
  .map(producto => producto.nombre);

console.log("Productos caros (precio > 4):", productosCaros);
console.log("Productos originales siguen igual:", productos);
