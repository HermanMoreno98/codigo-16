...
# Semana 8 / Dia 3

## Arrow function

```js
const arrowFunction = async() => {}
```

## Destucturacion

```js
const data = {
    total: 100,
    entries: [],
};

const {total, entries} = data;
```

## Async / Await

```js
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
```