const container = document.querySelector(".container");
// Obteniendon el input y el boton
const inputSearch = document.querySelector("#input-search");
const btnSearch = document.querySelector("#btn-search");
const btnClean = document.querySelector("#btn-clean");

function createCards(arrayDeDatos) {

  container.innerHTML = "";
  inputSearch.value = "";

  if(arrayDeDatos.length === 0){
    container.innerHTML = "<h2>No se encontró resultados</h2>";
    return;
  }
  // quiero agregar elemenos al container
  arrayDeDatos.map((laptop) => {
    // ahora en esta seccion vamos a crear los card
    // Esto es JS se llama template string => ``
    // Sirve para poder tener texto y variable juntos
    // return `La laptop se llama ${laptop.nombre} y el precio es ${laptop.precioOferta}`;
    container.innerHTML += `
    <div class="card">
        <h4 class="title">${laptop.nombre}</h4>
          <div class="container-photo">
          <img
              src=${laptop.imagen}
              alt=""
              width="300"
          />
          </div>
          <div class="container-price">
            <p class="price">Precio: S/ ${laptop.precioNormal}</p>
            <p class="sale-price">Oferta: S/ ${laptop.precioOferta}</p>
          </div>
          <button class="btn-buy">Comprar</button>
    </div>
    `;
  });
}

createCards(laptops);

btnSearch.onclick = function () {
  const textSearch = inputSearch.value;
  if (textSearch === "") {
    alert("Debe escribir un texto para inicia la busqueda");
    createCards(laptops);
    return;
  }

  const filtro = laptops.filter((laptop) =>
    laptop.nombre.toLowerCase().includes(textSearch.toLowerCase()) ||
    laptop.marca.toLowerCase().includes(textSearch.toLowerCase()) ||
    laptop.vendedor.toLowerCase().includes(textSearch.toLowerCase())
  );

  createCards(filtro);
};

btnClean.onclick = () => createCards(laptops);
