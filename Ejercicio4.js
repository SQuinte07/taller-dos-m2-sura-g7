let productos = [
  {nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];

console.log("Inventario original:", productos);

let enStock = productos.filter(producto => producto.stock > 0);

console.log("Productos en stock:", enStock);
console.log("Inventario original sigue igual:", productos);
