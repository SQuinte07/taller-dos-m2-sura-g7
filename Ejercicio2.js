let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];

console.log("Arreglo original de usuarios:", usuarios);

let nombres = usuarios.map(usuario => usuario.nombre);

console.log("Nuevo arreglo con solo nombres:", nombres);
console.log("Arreglo original sigue igual:", usuarios);
