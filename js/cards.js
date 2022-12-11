

// Mostrar esos resultados en la web y pedir por prompt si quiere ver lo mas caro o barato
// ordenar por precio según lo que eliga
// pedir por prompt si quiere ver prodcutos en ofeta
// mostrar los productos que están en oferta, sino no mostrar nada

// Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos:

// - […array] —> spread operator




// Función creacion de cards
function createCard ( array ) {

    const contenedor = document.querySelector(".container")

    for ( let i = 0; i < array.length; i++) {

        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div>
                <img src=${array[i].img} alt=${array[i].brand} class="image">
            </div>

            <div class="textContainer">
                <h2 class="textBrand">
                    ${array[i].brand}
                <h2>

                <h3 class="textPrice">
                    $ ${array[i].price}
                <h3>
            </div>
        `
        contenedor.appendChild(card)    
    }
};



// Ejecución de función cards
createCard(product);





// pedir a través de prompts los datos y filtrar con esos datos ingresados



// preguntar marca y color, mostrar todo como opcion

