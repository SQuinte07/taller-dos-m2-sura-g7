let usuarios = [{id: 101, nombre: "Ana"}, {id: 102, nombre: "Luis"}, {id: 103, nombre: "Carlos"}];

console.log("Lista de usuarios:", usuarios);

let usuarioLuis = usuarios.find(usuario => usuario.id === 102);

console.log("Usuario con id 102:", usuarioLuis);
console.log("Lista original sigue igual:", usuarios);
