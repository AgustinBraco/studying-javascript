function color ( product ) {

    const contenedor = document.querySelector(".container")

    let colorFilter = prompt("Filtrar por color: \n WHITE \n BLACK \n BLUE \n GREEN \n RED \n BEIGE \n ORANGE \n PINK").toUpperCase();

    for ( let i = 0; i < product.length; i++) {

        if ( product[i].color === colorFilter ) {
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

color(product);