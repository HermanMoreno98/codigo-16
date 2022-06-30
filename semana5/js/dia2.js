const products = [
  {
    name: "Laptop HP",
    price: 1300,
    brand: "HP",
  },
  {
    name: "Laptop Gamer",
    price: 2100,
    brand: "Lenovo",
  },
  {
    name: "Laptop Super Poderosa",
    price: 5300,
    brand: "Alien Ware",
  },
  {
    name: "Laptop/Tablet",
    price: 2400,
    brand: "ASUS",
  },
];

// *For each

const productsIterForEach = products.forEach((product) => {
  // console.log(product.name);
});

// *Map
// queremos agregar un nuevo campo al array de objetos. Ese campo se llamará descuento, que será el precio menos 100 soles

// En este caso estamos el campo 'discount' y lo estamos guardando en 'productsIterMap'

// Los valores que está capturando MAP, los está guardando en la variable 'productsIerMap'
const productsIterMap = products.map((product) => {
  return product.price - 100;
});

// *El map siempre retorna un array de elementos

console.log("For Each", productsIterForEach);
console.log("Map", productsIterMap);

// Cuando decimos que foreach no retorna nada, quiere dcir que no se puede guardar dentro de una variable

const edades = [23, 21, 34, 48, 28, 20];

//* Arrow function inline: No es necesario el 'return'. se usa sólo cuando  se tiene una linea de codigo para ejecutar
const edadesAlCuadrado = edades.map((edad) => Math.pow(edad, 2));
const prueba = edades.map((edad) => {
  return Math.pow(edad, 2);
});

console.log(edadesAlCuadrado);
console.log(prueba);

// Reto: crear array de edades, y usando for o foreaxh
const nuevas_edades = [];

edades.forEach((edad) => {
  nuevas_edades.push(Math.pow(edad, 2));
});

console.log(nuevas_edades);


// *FILTER: retorna un array de elementos
const clothes = [
  {
    brand: "Mango",
    type: "Shirt",
    price: 200,
    store: "Falabella",
    rating: 4.3,
    features: {
      color: "green",
      size: "small",
    },
  },
  {
    brand: "Zara",
    type: "Pants",
    price: 300,
    store: "Zara",
    rating: 3.9,
    features: {
      color: "black",
      size: 32,
    },
  },
  {
    brand: "Tommy",
    type: "T-shirt",
    price: 120,
    store: "Tommy",
    rating: 4.3,
    features: {
      color: "blue",
      size: "M",
    },
  },
];

// Queremos solo los productos que tengan como precio mas de 150
// Si el elemento es > 100 entonces lo guarda en la variale 'filtro'
const filtro = clothes.filter(clothe => clothe.price > 150);
console.log(filtro);

// Filtro de 2 condiciones: pedimos que el precio sea mayior a 150 y el rating, mayor a 4 

const filtro2 = clothes.filter(clothe => clothe.price > 150 && clothe.rating > 4);
console.log(filtro2);

const filtroShirt = clothes.filter((clothe) => 
    clothe.type.toLocaleLowerCase().includes("shirt")
);

console.log(filtroShirt);

//* Find: Solo retorna un elemento
const numbers = [10,20,30,40,50];
const numerosMayores = numbers.filter((number) => number > 30);
console.log(numerosMayores);

const numerosMayoresFind = numbers.find((number) => number > 30);
console.log(numerosMayoresFind);


//* FindIndex: Retorna la poscion del primer elemento encontrado

const cars = [
    {
      brand: "NISAAN",
      price: 10000,
    },
    {
      brand: "Mercedez",
      price: 20000,
    },
    {
      brand: "BMW",
      price: 30000,
    },
  ];

const filtroIndice = cars.findIndex((car) => car.brand === "Mercedez");
console.log(filtroIndice);

