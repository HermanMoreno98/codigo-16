// FOREACH

// Utilizado para iterar elementos, sin retornar nada

const alumnos = ["Juan", "Pepe", "Maria", "Carla", "Ale"];

// La forma en la cual usamos forEach es la siguiente
// value: valor que extramoes en cada iteración
// index: la posicion del elemento
alumnos.forEach((value, index) => {
  console.log("index =>", index);
  console.log("value =>", value);
});

const carros = [
  {
    modelo: "NISAAN GTR",
    price: 10000,
  },
  {
    modelo: "Mercedez GLA 2000",
    price: 20000,
  },
  {
    modelo: "BMW x6",
    price: 30000,
  },
];

carros.forEach((carro,index) => {
    console.log(carro);
    console.log(index);
})
