// container
const div_container = document.querySelector("#container");

class User {

    static cantidad; //NO se llama con this, sino con statis

    constructor(_first_name, _last_name){
        User.cantidad++;
        this.id = User.cantidad;
        this.first_name = _first_name;
        this.last_name = _last_name;
    }

    // Propiedad calculada: fullName

    get fullName(){
        return this.first_name + " " + this.last_name;
    }

    set fullName(_fullname){
        this.first_name = _fullname.split(" ")[0];
        this.last_name = _fullname.split(" ")[1];
    }

    static getCantidad(){
        return User.cantidad;
    }
}

const u1 = new User("Bruno","Diaz");
const u2 = new User("Lindes","Hass");
const u3 = new User("Jaime","Farfan");
const u4 = new User("Paul","Moreno");
const u5 = new User("Juan","Perez");
const u6 = new User(); // Creando un objeto vacío

// Seteando
u6.fullName = "Carlos Anderzon";

div_container.innerHTML += "<p>" + u1.fullName + "<p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + u2.fullName + "<p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + u6.fullName + "<p>";
div_container.innerHTML += "<hr>";

console.log(User.getCantidad()); // No funciona porque es static
console.log(u2.fullName);