// LLAMADO DE CLASES & ID
const formLogin = document.querySelector("#form-login");
const inputUser = document.querySelector("#input-user");
const inputPassword = document.querySelector("#input-password");
const formContainer = document.querySelector(".formContainer");
const logoutButton = document.querySelector("#logout");
const textLoged = document.querySelector(".textLoged");
const textLogin = document.querySelector(".textLogin");
const container = document.querySelector(".container");
const filterContainer = document.querySelector(".filterContainer");
const cardContainer = document.querySelector(".cardContainer");
const buttonRestore = document.querySelector(".buttonRestore");
const buttonAll = document.querySelector(".buttonAll");
const buttonSort = document.querySelector(".buttonSort");
const buttonSortLow = document.querySelector(".buttonSortLow");
const buttonSortHigh = document.querySelector(".buttonSortHigh");
const buttonBrand = document.querySelector(".buttonBrand");
const buttonModel = document.querySelector(".buttonModel");
const buttonSale = document.querySelector(".buttonSale");
const buttonBrandAdidas = document.querySelector(".buttonBrandAdidas");
const buttonBrandNike = document.querySelector(".buttonBrandNike");
const buttonBrandPuma = document.querySelector(".buttonBrandPuma");
const buttonModelSneakers = document.querySelector(".buttonModelSneakers");
const buttonModelSport = document.querySelector(".buttonModelSport");
const buttonModelRunning = document.querySelector(".buttonModelRunning");
const h3 = document.querySelector("h3");


// CREACIÓN DEL USUARIO
const userInfo = {
    user: "user1",
    password: "pass1"
};


// FUNCIONES

// Subir al local y session
const pushToJSON = (key, value) => {
    localStorage.setItem (key, JSON.stringify(value))
};

const pushToSessionJSON = (key, value) => {
    sessionStorage.setItem (key, JSON.stringify(value))
};


// Traer del local y session
const getFromJSON = (key) => {
    return JSON.parse(localStorage.getItem(key))
};

const getFromSessionJSON = (key) => {
    return JSON.parse(sessionStorage.getItem(key))
};


// Creción de cards
function allCards ( product ) {
    product.forEach( ( product ) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
                <div>
                    <img src=${product.img} alt=${product.brand} class="image">
                </div>

                <div class="textContainer">
                    <p class="textBrand">${product.brand}</p>
                    <p class="textModel">${product.model}</p>
                    <p class="textColor">${product.color}</p>
                    <p class="textPrice">$ ${product.price}</p>
                </div>
        `
        cardContainer.appendChild(card)
    })
};


// Cards filtradas por marca
function brandCards ( brand ) {
    for ( let i = 0; i < product.length; i++) {
        if ( product[i].brand === brand ) {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
                <div>
                    <img src=${product[i].img} alt=${product[i].brand} class="image">
                </div>

                <div class="textContainer">
                    <p class="textBrand">${product[i].brand}</p>
                    <p class="textModel">${product[i].model}</p>
                    <p class="textColor">${product[i].color}</p>
                    <p class="textPrice">$ ${product[i].price}</p>
                </div>
        `
        cardContainer.appendChild(card)
        }
    }
};


// Cards filtradas por modelo
function modelCards ( model ) {
    for ( let i = 0; i < product.length; i++) {
        if ( product[i].model === model ) {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
                <div>
                    <img src=${product[i].img} alt=${product[i].brand} class="image">
                </div>

                <div class="textContainer">
                    <p class="textBrand">${product[i].brand}</p>
                    <p class="textModel">${product[i].model}</p>
                    <p class="textColor">${product[i].color}</p>
                    <p class="textPrice">$ ${product[i].price}</p>
                </div>
        `
        cardContainer.appendChild(card)
        }
    }
};


// Cards filtradas por oferta
function sale ( product ) {
    for ( let i = 0; i < product.length; i++) {
        if ( product[i].sale === true ) {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
                <div>
                    <img src=${product[i].img} alt=${product[i].brand} class="image">
                    <p class="sale">SALE</p>
                </div>

                <div class="textContainer">
                    <p class="textBrand">${product[i].brand}</p>
                    <p class="textModel">${product[i].model}</p>
                    <p class="textColor">${product[i].color}</p>
                    <p class="textPrice">$ ${product[i].price}</p>
                </div>
        `
        cardContainer.appendChild(card)
        }
    }
};


// Validación de login
function checkLogin (key) {
    if (key === true) {
        h3.style.display = "none"
        formContainer.style.display = "none"
        textLogin.style.display = "none"
        textLoged.style.display = "flex"
        logoutButton.style.display = "flex"
        container.style.display = "flex"
        filterContainer.style.display = "flex"
    } else {
        h3.style.display = "block"
        formContainer.style.display = "flex"
        textLogin.style.display = "flex"
        textLoged.style.display = "none"
        logoutButton.style.display = "none"
        container.style.display = "none"
        filterContainer.style.display = "none"
    }
};

checkLogin(getFromJSON("login"));


// EVENTOS

// Envío de formulario
formLogin.onsubmit = (event) => {
    event.preventDefault()
    if (inputUser.value === userInfo.user && inputPassword.value === userInfo.password) {
        pushToJSON("login", true)
        alert("Sesión iniciada")
        formContainer.style.display = "none"
        textLogin.style.display = "none"
        logoutButton.style.display = "flex"
        textLoged.style.display = "flex"
        location.reload()
    } else {
        alert("Datos incorrectos")
    }
};


// Cerrar sesión
logoutButton.onclick = () => {
    localStorage.removeItem("login")
    checkLogin(getFromJSON("login"))
};


// Volver a los filtros
buttonRestore.onclick = () => {
    location.reload()
};


// Ver todos los productos
buttonAll.onclick = () => {
    allCards(product)
    buttonRestore.style.display = "flex"
    buttonAll.style.display = "none"
    buttonSort.style.display = "none"
    buttonBrand.style.display = "none"
    buttonModel.style.display = "none"
    buttonSale.style.display = "none"
};


// Orden por precio
buttonSort.onclick = () => {
    buttonRestore.style.display = "flex"
    buttonSortLow.style.display = "flex"
    buttonSortHigh.style.display = "flex"
    buttonAll.style.display = "none"
    buttonSort.style.display = "none"
    buttonBrand.style.display = "none"
    buttonModel.style.display = "none"
    buttonSale.style.display = "none"
};

// Menor a mayor
buttonSortLow.onclick = () => {
    product.sort( (a, b) => {
        if (a.price > b.price) {
            return 1
        } else if ( a.price < b.price) {
            return -1
        } else {
            return 0
        }
    })
    allCards(product)

    buttonSortLow.style.display = "none"
    buttonSortHigh.style.display = "none"
};

// Mayor a menor
buttonSortHigh.onclick = () => {
    product.sort( (a, b) => {
        if (b.price > a.price) {
            return 1
        } else if ( b.price < a.price) {
            return -1
        } else {
            return 0
        }
    })
    allCards(product)

    buttonSortLow.style.display = "none"
    buttonSortHigh.style.display = "none"
};


// Filtrar por marca
buttonBrand.onclick = () => {
    buttonRestore.style.display = "flex"
    buttonBrandAdidas.style.display = "flex"
    buttonBrandNike.style.display = "flex"
    buttonBrandPuma.style.display = "flex"
    buttonAll.style.display = "none"
    buttonSort.style.display = "none"
    buttonBrand.style.display = "none"
    buttonModel.style.display = "none"
    buttonSale.style.display = "none"
};

// Adidas
buttonBrandAdidas.onclick = () => {
    brandCards("ADIDAS")
    buttonBrandAdidas.style.display = "none"
    buttonBrandNike.style.display = "none"
    buttonBrandPuma.style.display = "none"
};

// Nike
buttonBrandNike.onclick = () => {
    brandCards("NIKE")
    buttonBrandAdidas.style.display = "none"
    buttonBrandNike.style.display = "none"
    buttonBrandPuma.style.display = "none"
};

// Puma
buttonBrandPuma.onclick = () => {
    brandCards("PUMA")
    buttonBrandAdidas.style.display = "none"
    buttonBrandNike.style.display = "none"
    buttonBrandPuma.style.display = "none"
};


// Filtrar por modelo
buttonModel.onclick = () => {
    buttonRestore.style.display = "flex"
    buttonModelSneakers.style.display = "flex"
    buttonModelSport.style.display = "flex"
    buttonModelRunning.style.display = "flex"
    buttonAll.style.display = "none"
    buttonSort.style.display = "none"
    buttonBrand.style.display = "none"
    buttonModel.style.display = "none"
    buttonSale.style.display = "none"
};

// Sneakers
buttonModelSneakers.onclick = () => {
    modelCards("SNEAKERS")
    buttonModelSneakers.style.display = "none"
    buttonModelSport.style.display = "none"
    buttonModelRunning.style.display = "none"
};

// Sport
buttonModelSport.onclick = () => {
    modelCards("SPORT")
    buttonModelSneakers.style.display = "none"
    buttonModelSport.style.display = "none"
    buttonModelRunning.style.display = "none"
};

// Running
buttonModelRunning.onclick = () => {
    modelCards("RUNNING")
    buttonModelSneakers.style.display = "none"
    buttonModelSport.style.display = "none"
    buttonModelRunning.style.display = "none"
};


// Solo ofertas
buttonSale.onclick = () => {
    sale(product)
    buttonRestore.style.display = "flex"
    buttonAll.style.display = "none"
    buttonSort.style.display = "none"
    buttonBrand.style.display = "none"
    buttonModel.style.display = "none"
    buttonSale.style.display = "none"
};