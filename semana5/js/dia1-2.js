// *EVENTOS

// Es una acción que el usuario o el navegador puede activar

// *  - onclick => se activa cuando el usuario usa el mouse y clickea un elemento
// * Para activar los eventos podemos hacerlos desde JS o desde el HTML

// * - onchange
// * - onkeyup
// * - onkeydown
// * - onsubmit
// * - onmousehover
// * - onfocus

const btnTest = document.querySelector("#btn-test");

btnTest.onclick = () => {
  console.log("Es un click");
};

const variableH1 = document.querySelector("#h1-test");
variableH1.onclick = () => {
  console.log("Click desde el h1");
  variableH1.innerText = "Cambiando el texto";
};

// *Capturando los datos del formulario, y guardarlo en un array de objetos
const users = [];

const form = document.querySelector("#form-store-user");

// *Aregando el evento 'onsubmit'
// !El evento 'onsubmit' tiene una propiedad espeecial, la cual nos da un parámetro implícito. Este parámetro contiene la información del evento y se suele llamar event o e

form.onsubmit = (e) => {
  // * Un formulario, al tener el evento submit, va a recargar la página
  // ? Para evitar que el evento onsubmit recargue la página, podemos usar el event.preventDefault()
  e.preventDefault();
  // console.log(e.target);

  //* Existe la clase FormData (nativa de JS): esto para extraer la información del target
  const formData = new FormData(e.target); // !en Target se encuentra toda la información de los inputs

  // Vamos a crear un objeto user vacío
  const user = {};

  for (let [key, value] of formData.entries()) {
    //! entries en la función de la clase formData donde contiene los [key,value]. Returns an array of key, value pairs for every entry in the list.
    // ['name','Paul']
    // ['last_name','Moreno']
    console.log(key, value);
    user[key] = value; // Agregando los key, value al objeto USER.
  }

  users.push(user);
  console.log(users);
};

// * Otra manera de crear objetos
const laptop = new Object();
laptop.marca = "Apple MacBook Pro 13";
laptop.memoria = "16bg";
laptop.discoDuro = "1TB";

console.log(laptop);
