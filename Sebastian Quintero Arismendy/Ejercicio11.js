let roles = ["USER", "EDITOR"];

console.log("Roles del usuario:", roles);

let tieneAdmin = roles.includes("ADMIN");
console.log("¿Tiene rol ADMIN?", tieneAdmin);

let tieneEditor = roles.includes("EDITOR");
console.log("¿Tiene rol EDITOR?", tieneEditor);