// DECLARACIÓN DE FUNCIONES
// Filtro por marca
const findBrand = (element) => {
    const brandFiltered = product.filter(function(product) {
        return product.brand === brandFilter;
    });

    console.table(brandFiltered);
};

// Filtro por modelo
const findModel = (element) => {
    const modelFiltered = product.filter(function(product) {
        return product.model === modelFilter;
    });

    console.table(modelFiltered);
};

// Orden por precio
const priceSort = [...product].sort((a,b) => {
    return a.price - b.price
});

// Orden por color
const colorSort = [...product].sort((a,b) => {
    if (a.color < b.color) {
        return -1
    } else if (a.color > b.color) {
        return 1
    } else {
        return 0
    }
});

// Solo en oferta
const sale = [...product].filter((product) => {
    return product.sale === true
});



// EJECUCIÓN Y CONSOLES
// Bienvenida
alert("¡Bienvenide! \n Es una web de zapatillas, vas a poder: \n Filtrar por marca y modelo \n Ver orden por precio y color \n Ver solo ofertas.")

// Tabla de productos
console.log("PRODUCTOS POR DEFECTO")
console.table(product);

// Solicitud de marca
let brandFilter = prompt(`Ingrese marca \n ADIDAS \n NIKE \n PUMA`).toUpperCase();

// Ejecución de marca
console.log("FILTRADO POR MARCA")
findBrand(brandFilter);

// Solicitud de modelo
let modelFilter = prompt(`Ingrese modelo \n RUNNING \n SPORT \n SNEAKERS`).toUpperCase();

// Ejecución de modelo
console.log("FILTRADO POR MODELO")
findModel(modelFilter);

// Orden por precios
console.log("ORDENADO POR PRECIO")
console.table(priceSort);

// Orden por color
console.log("ORDENADO POR COLOR")
console.table(colorSort);

// Solo ofertas
console.log("SOLO OFERTAS")
console.table(sale);