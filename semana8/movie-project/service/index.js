// Los metodos para poder
/*
    * Obtener => GET
    * Crear => POST
    * Actualizar => PUT
    * Eliminar => DELETE
*/

import { urlMovies, mockAPIUrl } from "./config.js";

// Crear una función que retorne 100 peliculas
const getMovies = async () => {
    try {
        const response = await fetch(urlMovies);
        // Aplicando destructuracion
        const {entries} = await response.json();
        return entries;
    } catch (error) {
        return error;
    }
}