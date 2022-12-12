function createCard ( product ) {

    const contenedor = document.querySelector(".container")

    for ( let i = 0; i < product.length; i++) {

        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div>
                <img src=${product[i].img} alt=${product[i].brand} class="image">
            </div>

            <div class="textContainer">
                <h2 class="textBrand">
                    ${product[i].brand} <br>
                    ${product[i].model}
                <h2>

                <h3 class="textPrice">
                    $ ${product[i].price}
                <h3>
            </div>
        `
        contenedor.appendChild(card)    
    }
};

const sort = (a, b) => {
    let sortFilter = prompt("Ordenar por: \n MAYOR \n MENOR").toUpperCase();

    if ( sortFilter === "MAYOR") {
        product.sort( (a, b) => {
            if (b.price > a.price) {
                return 1
            } else if ( b.price < a.price) {
                return -1
            } else {
                return 0
            }
        })
    } else if ( sortFilter === "MENOR" ) {
        product.sort( (a, b) => {
            if (a.price > b.price) {
                return 1
            } else if ( a.price < b.price) {
                return -1
            } else {
                return 0
            }
        })
    } else {
        alert("Valor incorrecto, se muestra orden por defecto")
    }
};

sort(product);
createCard(product);