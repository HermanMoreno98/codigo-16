// container
const div_container = document.querySelector("#container");
let carros = [];
const numCarros = 10;


class Carro {

    // Sirve para darle valor a los atributos del objeto carro (que aún no se crea)
    constructor(_color, _velocidad){
        this.color = _color;
        this.velocidad = _velocidad;
    }

    // Setter
    setColor(_nuevo_color){
        this.color = String(_nuevo_color).toLowerCase();
    }

    // Getter
    getColor(){
        return this.color;
    }

    getVelicidad(){
        return this.velocidad + " km/h";
    }

    presentacion(){
        const texto = "Hola, soy un carro de color " + this.color + " y tengo una velicidad de " + this.velocidad + " Km/h";
        return texto;
    }

}

let crearCarros = () => {
    const colorDefined = 'NEGRO'
    for (let i = 1; i <= numCarros; i++){
        carros.push(new Carro(colorDefined, Math.round(Math.random()*100)));
    }
}


// div_container.innerHTML += "<p>" + carro_1.presentacion() + "</p>";
// div_container.innerHTML += "<hr>";
// div_container.innerHTML += "<p>" + carro_verde.presentacion() + "</p>";

let imprimir = () => {
    crearCarros()
    for (let car of carros){
        car.setColor('ROJO');
        div_container.innerHTML += "<p>" + car.presentacion() + "</p>";
        div_container.innerHTML += "<hr>"
        console.log(car.getVelicidad());
    }
}

let reset = () => {
    carros = [];
    div_container.innerHTML = "";
}

class Cuadrado {

    constructor (_lado){
        this.lado = _lado;
    }

    set setLado(_nuevo_lado){
        this.lado = _nuevo_lado;
    }

    get getLado(){
        return this.lado;
    }

    get calcularArea(){
        return Math.pow(this.lado,2) + " m2."
    }
}

const c1 = new Cuadrado(4);
c1.setLado = 7;
console.log(c1.calcularArea);
console.log(c1.getLado);

