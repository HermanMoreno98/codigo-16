let numero1 = 10;
let numero2 = 20;

console.log(numero1+numero2);
console.log(numero1-numero2);
console.log(numero1*numero2);
console.log(numero1/numero2);

let numero3 = "22";
console.log(Number(numero3)+numero1);

let numero4 = "33.5";
console.log("Forma1",Number(numero4));
console.log("Forma2",parseInt(numero4));
console.log("Forma3",parseFloat(numero4));
console.log("Forma4",+numero4);

console.log("2"+"2"-"2");


console.log(Math.sqrt(4));
console.log(Math.pow(numero1,2));

const catetoA = Number(prompt("Ingrese el valor del cateto A"));
const catetoB = Number(prompt("Ingrese el valor del cateto B"));

const catetoC = Math.sqrt(Math.pow(catetoA,2)+Math.pow(catetoB,2));
console.log("La hipotenusa es",catetoC)

// Problema
// Hacer un algirtmo que halle el area de rectangulo

const base = Number(prompt("Ingrese la base del rectangulo"));
const altura = Number(prompt("Ingrese la altura del rectangulo"));
const areaRectangulo = base * altura;
console.log("El area del rectangulo es",areaRectangulo);

// Hallar el area de un circulo
const radio = Number(prompt("Ingresar el radio del circulo"));
const areaCirculo = Math.PI * Math.pow(radio,2);
console.log("El area del circulo es",areaCirculo);