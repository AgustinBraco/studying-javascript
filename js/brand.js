function brand ( product ) {

    const contenedor = document.querySelector(".container")

    let brandFilter = prompt("Filtrar por marca: \n ADIDAS \n NIKE \n PUMA").toUpperCase();

    for ( let i = 0; i < product.length; i++) {

        if ( product[i].brand === brandFilter ) {
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
    }
};

brand(product);