const containerMovies = document.querySelector("#container-movies");

function renderCards(movies) {
  containerMovies.innerHTML = "";

  movies.forEach((movie) => {
    //console.log(movie.images["Poster Art"].url)
    //console.log(movie);
    const {title, programType, images, description} = movie;
    const image_url = images["Poster Art"].url;
    containerMovies.innerHTML += `
        <div class="col">
                <div class="card my-3">
                    <div class="into-photo">
                        <span class="badge text-bg-${
                            programType === "series" ? "success" : "warning"
                                }">${programType}</span>
                        <img 
                            src="${images["Poster Art"].url}" 
                            class="card-img-top" 
                            onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg'";
                            alt=""
                        >
                    </div>
                    <div class="card-body">
                        <div class="card-title">${title}</div>
                        <p>${description}</p>
                    </div>
                </div>
        </div>
        `;
  });
}

let currentMovies_Title = [];

function sortMovies(movies){
    movies = movies.sort(() => 0.5 - Math.random()).slice(0,10);
    currentMovies_Title = currentMovies_Title.concat(
        movies.map((movie) => movie.title)
    );
    return movies;
}

const url =
  "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

// fetch(url)
//   .then((response) => response.json()) // espero que el responde se convierta a una coleccion
//   .then((movies) => sortMovies(movies.entries))
//   .then((movies_random) => renderCards(movies_random));


async function getJson(){
    const response = await fetch(url);
    const movies = await response.json();
    const movies_random = sortMovies(movies.entries);
    renderCards(movies_random); 
}

getJson();

// recordemos que fetch retorna una promesa, esta tiene 2 escenarios
// *resolve -> esto ocurre cuando la peticion esta OK
// !reject -> es cuando algo falla

// *.then() es un callback. Es una funcion que se ejecuta cuando algo termina
