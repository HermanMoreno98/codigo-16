// variale que pueda cambiar de tipo
let numero = 10;
// Immprime en la consola del navegador
console.log("Primer tipo",numero);

numero = "Pepe";
console.log("Segundo tipo", numero);

const igv = 0.18;
console.log("Primer igv",igv);
// !Error
// igv = 0.20;
// console.log("Segundo igv",igv);
//alert(igv);

const nombre = "Paul";
const apellido = "Alvarado";
let edad = 24;
let dias = 20;
let estaVivo = true;

console.log(nombre+" "+apellido+edad);
console.log(edad+dias);
console.log(edad,dias);
console.log(String(edad)+String(dias));
console.log("Bool", estaVivo);
console.log("String", String(estaVivo));