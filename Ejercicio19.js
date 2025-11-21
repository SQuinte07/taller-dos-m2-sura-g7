let feed = ["Noticia 1", "Noticia 2", "Noticia 3"];

console.log("Feed original:", feed);

let nuevoFeed = ["Noticia Urgente", ...feed];

console.log("Nuevo feed:", nuevoFeed);
console.log("Feed original sigue igual:", feed);
