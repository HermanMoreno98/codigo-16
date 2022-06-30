// Every y some
// Son funciones que nos permiten iterar sobre una coleecion de elementos
// No retornan arrays, sino booleans
// Sirve para poder validar una condicion y que aplique a cada uno de los elementos iterados

// *Every == &&
const edades = [10, 20, 30, 40];

// Analizará todo el array y tiene que verificar que cada elemento cumpla la condicion
const analizandoEdades = edades.every((edad) => edad > 20);
console.log(analizandoEdades);
// !Para que 'every' retorne true, cada elemento debe cumplir la condicion

const analizando2 = edades.every((edad) => edad !== "");
console.log(analizando2); // La variable es TRUE, porque cada elemento cumple la condición

const alumnos = [
  {
    name: "Pepe",
    age: 21,
  },
  {
    name: "Luis",
    age: 18,
  },
  {
    name: "Maria",
    age: 19,
  },
];

// Queremos sabee si los alumnos son mayores de edad
const mayoresEdad = alumnos.every((alumno) => alumno.age >= 18);
console.log(mayoresEdad); // el valor es true, porque todos cumplen la condicion


// *Some == ||
// evalua los elementos y si alguno de ellos cumple la condicion, es true
const precios = [120,314,121,873];

// Evaluando si alguno de ellos es par

const precioPar = precios.some((precio) => precio % 2 === 0);
console.log(precioPar); // el resultado es true porque alguno de ellos cumplen la condicion