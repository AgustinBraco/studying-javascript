// SEGUNDA ENTREGA - ECOMMERCE

// * TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES

// * LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY

// * EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

// 1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:

// - id

// - producto

// - precio

// - fechaVencimiento (en el caso de que tenga una)

// - descripción

// - categoría (si tiene una)

// - oferta (booleano)

// Quiero que algunos de los elementos tengan un true en oferta.

// 2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).

// 3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).

// Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos:

// - […array] —> spread operator

// - array.slice() —> copia segura en otra variable

// - [].concat(array) —> copia segura en otra variable

// 4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

// 5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().




// 1)

function cardAHtml ( array ) {

    const contenedor = document.querySelector(".container")

    for ( let i = 0; i < array.length; i++) {

        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div>
                <img src=${array[i].img} alt=${array[i].name} class="imgPokemon">
            </div>
            <h2 class="textPokemon">
                ${array[i].name}
            <h2>
        `
        contenedor.appendChild(card)    
    }
};

cardAHtml(pokemon);

// 2) forEach

// function cardsHtml ( array ) {

//     const contenedor = document.querySelector(".container")

//     array.forEach( ( perrito ) => {
//         const card = document.createElement("div")
//         card.className = "card"
//         card.innerHTML = `
//             <div class="container-img">
//                 <img src=${perrito.img} alt=${pokemon.name}>
//             </div>
//             <h2>
//                 ${perrito.name}
//             </h2>
//             <button>
//                 ♥
//             </button>
//         `
//         contenedor.appendChild(card)
//     })

// }

// cardsHtml(pokemon)

// 3) innerHTML con reduce

// const cardAHtml = (array) => {
//     const contenedor = document.querySelector(".container")
//     const cardsReduce = array.reduce((acc, element) => {
//         return acc + `
//             <div class="card">
//                 <div class="container-img">
//                     <img src=${element.img} alt=${element.name}>
//                 </div>
//                 <h2>
//                     ${element.name}
//                 </h2>
//                 <button>
//                     ♥
//                 </button>
//         </div>
//         `
//     }, "")
    
//     contenedor.innerHTML = cardsReduce
// }

// cardAHtml(pokemon)

// 4) innerhtml con for y variable acumuladora

// function cardsHtml ( array ) {
//     let acc = ""
//     const contenedor = document.querySelector(".container")
//     for ( let i = 0; i < array.length; i++ ) {
//         acc += `
//             <div class="card">
//                 <div class="container-img">
//                     <img src=${array[i].img} alt=${array[i].name}>
//                 </div>
//                 <h2>
//                     ${array[i].name}
//                 </h2>
//                 <button>
//                     ♥
//                 </button>
//             </div>
//         `
//     }
//     contenedor.innerHTML = acc
// }

// cardsHtml(pokemon)

// 5) map con createElement, innerHTML y appendChild

// function cardsHtml ( array ) {

//     const contenedor = document.querySelector(".container")
    
//     array.map( ( perrito ) => {
//         const card = document.createElement("div")
//         card.className = "card"
//         card.innerHTML = `
//             <div class="container-img">
//                 <img src=${perrito.img} alt=${pokemon.name}>
//             </div>
//             <h2>
//                 ${perrito.name}
//             </h2>
//             <button>
//                 ♥
//             </button>
//         `
//         contenedor.appendChild(card)
//     })    
// }

// cardsHtml(pokemon)


// confirm("quiere ver ofertas?")