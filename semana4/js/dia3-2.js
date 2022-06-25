let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador += 1;
}
console.log("Terminó la iteración");

let ar = [];
let n = 5;
let potencia = 9;
let suma = 0;
for (let i = 0; i < n; i++) {
  ar.push(Math.pow(10, potencia) + i + 1);
}
for (let j = 0; j < ar.length; j++) {
  suma += ar[j];
}
console.log(suma);
