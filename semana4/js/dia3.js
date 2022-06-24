document.write("<h1>Arrays</h1>");

// document.write("<hr>");
// document.write("<h3>Angulo</h3>");
// // let angulo = 9;
// let clasificacion;
//
// if(angulo == 0){
//     clasificacion = "Nulo";
// } else if (angulo > 0 && angulo < 90){
//     clasificacion = "Agudo";
// } else if (angulo == 90){
//     clasificacion = "Recto";
// } else if (angulo > 90 && angulo < 180){
//     clasificacion = "Obtuso";
// } else if (angulo == 180){
//     clasificacion = "Llano";
// } else if (angulo > 180 && angulo <360){
//     clasificacion = "Cóncavo";
// } else if (angulo == 360){
//     clasificacion = "Completo"
// } else {
//     clasificacion = "Angulo inexistente"
// }

// if(clasificacion != "Angulo inexistente"){
//     document.write("<p>El angulo es "+angulo+"° y es de tipo "+clasificacion+"</p>");
// } else {
//     document.write("<p class='red'>El angulo que ingresó es incorrecto, vuelva a intentarlo</p>");
// }

// Utilizando switch
// switch(angulo){
//     case 0:
//     case 10:
//         clasificacion = "Nulo";
//         break;
//     case 90:
//         clasificacion = "Recto"
//         break;
//     case 180:
//         clasificacion = "Llano";
//         break;
//     case 360:
//         clasificacion = "Completo"
//         break;
// }

// if(clasificacion != "Angulo inexistente"){
//     document.write("<p>El angulo es "+angulo+"° y es de tipo "+clasificacion+"</p>");
// } else {
//     document.write("<p class='red'>El angulo que ingresó es incorrecto, vuelva a intentarlo</p>");
// }

let nombres = ["Pepe", "Juan", "Maria", "Luisa", "Carlos", "Lucas"];
// *Push: sirve para agregar elemento al array (en la ultima posicion)
nombres.push("Paul");
nombres.push(["Melanie", "Karla"]); //Agregando un array
// *Pop: eliminando elemento (de la ultima posicion)
nombres.pop();
nombres.pop();
// ! En este caso, eliminó los elementos "Paul" y ["Melanie","Karla"].
// *Unshift: Agrega un elemento a un array pero en la primera posicion
nombres.unshift("Daniel");
nombres.unshift("Carlos");
// *Shit: Elimina el primer elemento de un array
nombres.shift();

let text = [];
for (let i = 0; i < nombres.length; i++) {
  if (Array.isArray(nombres[i]) == false) {
    console.log(nombres[i]);
    text += "<li>" + nombres[i] + "</li>";
  }
  if (Array.isArray(nombres[i]) == true) {
    for (let j = 0; j < nombres[i].length; j++) {
      console.log(nombres[i][j]);
      text += "<li>" + nombres[i][j] + "</li>";
    }
  }
}

document.write("<ul>" + text + "</ul");

// *IndexOf: Retorna la posicion en base a un dato
// !Si hay elementos repetidos, encontrará al más cercano
// !Si se coloca un valor que no existe, retorna -1
// *Se puede usar esto para ver si un elemento existe en un array
console.log(nombres.indexOf("Pep"));

const busqueda = prompt("Ingrese un nombre");

if (nombres.indexOf(busqueda) !== -1) {
  console.log("El nombre si existe y es " + nombres[nombres.indexOf(busqueda)]);
} else {
  alert("El nombre ingresado no existe");
}
