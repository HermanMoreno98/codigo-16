// Array de objetos

const users = [
  {
    name: "Linder",
    lastName: "Hassinger",
    phoneNumber: "999999999",
    adress: "Calle falsa 123",
    isDeveloper: true,
    age: 22,
  },
  {
    name: "Juan",
    lastName: "Zapata",
    phoneNumber: "999999999",
    adress: "Calle falsa 123",
    isDeveloper: false,
    age: 21,
  },
];

// Imprime los índices
for (let user in users){
    console.log(user)
}

// Imprime los objetos
for (let user of users){
    console.log(user)
}

// DOM
// document nos brinda las funciones la cual nos permite acceder al DOM, el cual está en el HTML
const variableH1 = document.querySelector("h1");

// innerHTML = Se usa para escribir etiquetas
// innerText = Para poder escribir dentro de las etiquetas

variableH1.innerText = "Cambiando el valor del H1 desde JS"
console.log(variableH1);
// Cambiando el title desde JS
document.title = "Lo hicimos en JS";


// También se puede modificar el CSS
// !No se recomienda usar CSS dentro de JS
document.body.style.backgroundColor = "#c3c3c3";
document.body.style.fontFamily = "Helvetica";

variableH1.style.color = "blue";

// !NOTA: EN JS, TODO ES UN OBJETO

