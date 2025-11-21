let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];

console.log("Grupos originales:", grupos);

let listaPlana = grupos.reduce((acumulador, grupo) => acumulador.concat(grupo), []);

console.log("Lista plana:", listaPlana);
console.log("Grupos originales siguen igual:", grupos);
