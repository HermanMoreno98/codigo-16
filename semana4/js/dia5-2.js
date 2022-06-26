// // En las funciones existen parametris cin valores predefinidos
// function restar(numero1, numero2) {
//   return numero1 - numero2;
// }
// // Cuando llamamos a la función restar, es obligatorio pasarle los 2 parametros

// // Existe una forma en la cual podermos decir que un parametro tiene un valor por defecto

// function sumar(num1, num2 = 5) {
//   return num1 + num2;
// }

// console.log(sumar(4));

// Funciones anónimas: sin nombre
// A nivel de JS, 'multiplicar' no es el nombre de la funcion. Es conderada una variable que guarda una función.
// Una variable puede almacenar una función

// !El funcionamiento es igual. Con funciones anonimas no tenemos acceso a 'this'
// !this es una forma en la cual podems acceder a una variable usando clases
const multiplicar = function (n1, n2) {
  return n1 * n2;
};

console.log(multiplicar(3, 4));

// *Lo que se utiliza actualmente son los arrow functions
// *En el caso de las funciones flecha, no hace falta escribir la palabra 'function'
// *Un arrow function es considerado una función anónima, por ende, tampoco tiene acceso a 'this'
const dividir = (n1, n2) => {
    // Operadores terniarios
    // ! '?' -> entonces
    // ! ':' -> caso contrario
  return validadSiEsNumero(n1) || validadSiEsNumero(n2) ? "Error numero no valido" : n1/n2;
};

// *Pero, podemos combinar funciones
function validadSiEsNumero(numero){
    return isNaN(numero);
}

console.log(dividir(2,4));

// de forma global vamos a crear un Array de alumnos
const alumnos = [];

const imprimirAlumnos = () => {
    const inputNombre = document.querySelector("#input_name");
    const nombre = inputNombre.value;
    // Agregando alumnos al array
    alumnos.push(nombre);
    // Indicando que el value del input es igual a vacio. Significa que estamos limpiando el contenido del input
    inputNombre.value = "";
    const resultado = document.querySelector(".resultado");
    // Siempre debemos limpiar el espaacio del resultado antes del 'for'
    resultado.innerHTML = "";

    for (let alumno of alumnos){
        resultado.innerHTML += "<p>" + alumno + "</p>";
    }
}

const calcularPromedio = (n1,n2,n3,n4) => {
    return validadSiEsNumero(n1) || validadSiEsNumero(n2) || validadSiEsNumero(n3) || validadSiEsNumero(n4) || n1>20 || n2>20 || n3>20 || n4>20
    ? alert("Debe ingresar un número y que sea mayor a 20")
    : (n1+n2+n3+n4)/4;
}

const imprimirPromedioNotas = () => {
    const input1 = document.querySelector("#input_1");
    const input2 = document.querySelector("#input_2");
    const input3 = document.querySelector("#input_3");
    const input4 = document.querySelector("#input_4");
    const input5 = document.querySelector("#input_5");

    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    const num3 = Number(input3.value);
    const num4 = Number(input4.value);

    let resultado = calcularPromedio(num1, num2, num3, num4);
    return validadSiEsNumero(resultado) ? limpiarDatos() : input5.value = resultado;
}

const limpiarDatos = () => {
    const input1 = document.querySelector("#input_1");
    const input2 = document.querySelector("#input_2");
    const input3 = document.querySelector("#input_3");
    const input4 = document.querySelector("#input_4");
    const input5 = document.querySelector("#input_5");

    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    input5.value = "";
}