const alumnos = ["Pepe", "Juan", "Maria", "Luisa", "Lex", "Lucas"];
const paises = ["Peru", "Bolivia", "Ecuador", "Colombia", "Venezuela"];

function nombreDeLaFuncion(arr) {
  for (let x of arr) {
    console.log(x);
  }
}

// Ejecutando la función
nombreDeLaFuncion(paises);

// Ahora haremos una funcion que retorne un valor

function suma(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return -1;
  return num1 + num2;
}

console.log(suma(9, 3));

function promedioNotas(nota1, nota2, nota3, nota4) {
  return (nota1 + nota2 + nota3 + nota4) / 4;
}

console.log(promedioNotas(20, 10, 10, 10));

//Calcular factorial

function calcularFactorial(numero) {
  const number = Number(numero);
  let resultado = 1;

  // Validando
  if (isNaN(number)) {
    return "Esto no se puede hacer porque no es número";
  }

  // Calculando
  for (let i = 1; i <= number; i++) {
    resultado *= i;
  }
  return resultado;
}

function imprimirFactorial() {
  const inputValor = document.getElementById("input_number").value;
  const outputValor = calcularFactorial(inputValor);
  // Estamos buscando en el HTML al elemento o elementos que tenga la clase "container". Cuando lo encuentre, lo guarda en la variable 'container'. Luego podemos usar la propiedad INNERHTML para poder agregar HTML a este container.

  // !QuerySelector es una funcion js que permite buscar elementos de una forma sencilla
  // *Cuando es una clase -> document.querySelector(".container")
  // *Cuando es un ID -> document.querySelector("#container")
  // *Cuando es un elmento(ejm: ul, p, h4, etc) -> document.querySelector("h4")
  const container = document.querySelector(".container");
  container.innerHTML += "<p>Factorial de " + inputValor + ": " + outputValor + "</p>";
}

function generarTablaMultiplicar(){
  const inputNumber = document.querySelector("#input_number_2");
  let container = document.querySelector(".resultado");

  //Limpiando el container
  container.innerHTML = "";

  const numero = Number(inputNumber.value);
  // Para limpiar el input
  inputNumber.value = "";

  if(isNaN(numero)){
    alert("Ingrese un número válido");
    // El return aparte de retornar un valor, tambien termina la ejecución de la función. En este caso, no retornamos, pero si tenemos un alert. Permitirá terminar la ejecución, si ingresa un número inválido.
    return;
  }

  for (let i = 1; i <= 12; i++){
    container.innerHTML += "<p> - " + numero + " x " + i + " = " + (numero * i) + "</p>";
  }
}
