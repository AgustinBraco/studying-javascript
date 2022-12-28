// Llamado de ID y clases
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

const buttonBack = document.querySelector(".buttonBack");

const buttonAll = document.querySelector(".buttonAll");

const buttonSort = document.querySelector(".buttonSort");

const buttonBrand = document.querySelector(".buttonBrand");

const buttonModel = document.querySelector(".buttonModel");

const buttonSale = document.querySelector(".buttonSale");



// Creación de usuario
const userInfo = {
    user: "user1",
    password: "pass1"
};



// Funciones para subir al local y session
const pushToJSON = (key, value) => {
    localStorage.setItem (key, JSON.stringify(value))
};

const pushToSessionJSON = (key, value) => {
    sessionStorage.setItem (key, JSON.stringify(value))
};

// Funciones para traer del local y session
const getFromJSON = (key) => {
    return JSON.parse(localStorage.getItem(key))
};

const getFromSessionJSON = (key) => {
    return JSON.parse(sessionStorage.getItem(key))
};


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



// Función de creacion de cards
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

// Función para filtrar por marca
function brandCards ( product ) {
    let brandFilter = prompt("Elegir marca: \n ADIDAS \n NIKE \n PUMA").toUpperCase();

    for ( let i = 0; i < product.length; i++) {

        if ( product[i].brand === brandFilter) {
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


// Función para filtrar por modelo
function modelCards ( product ) {
    let modelFilter = prompt("Elegir modelo: \n SNEAKERS \n SPORT \n RUNNING").toUpperCase();

    for ( let i = 0; i < product.length; i++) {

        if ( product[i].model === modelFilter ) {
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


// Función para filtrar solo ofertas
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


// Función para validar el login
function checkLogin (key) {
    if (key === true) {
        formContainer.style.display = "none"
        textLogin.style.display = "none"
        textLoged.style.display = "flex"
        logoutButton.style.display = "flex"
        container.style.display = "flex"
        filterContainer.style.display = "flex"
    } else {
        formContainer.style.display = "flex"
        textLogin.style.display = "flex"
        textLoged.style.display = "none"
        logoutButton.style.display = "none"
        container.style.display = "none"
        filterContainer.style.display = "none"
    }
};



// Validación de login
checkLogin(getFromJSON("login"));



// Eventos
// Cerrar sesión
logoutButton.onclick = () => {
    localStorage.removeItem("login")
    checkLogin(getFromJSON("login"))
};

// Volver a los filtros
buttonBack.onclick = () => {
    location.reload()
};

// Ver todos los productos
buttonAll.onclick = () => {
    allCards(product)
    buttonBack.style.display = "flex"
    buttonAll.style.display = "none"
    buttonSort.style.display = "none"
    buttonBrand.style.display = "none"
    buttonModel.style.display = "none"
    buttonSale.style.display = "none"
};

// Ordenar por precio
buttonSort.onclick = () => {
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
    buttonBack.style.display = "flex"
    buttonAll.style.display = "none"
    buttonSort.style.display = "none"
    buttonBrand.style.display = "none"
    buttonModel.style.display = "none"
    buttonSale.style.display = "none"
};

// Filtrar por marca
buttonBrand.onclick = () => {
    brandCards(product)
    buttonBack.style.display = "flex"
    buttonAll.style.display = "none"
    buttonSort.style.display = "none"
    buttonBrand.style.display = "none"
    buttonModel.style.display = "none"
    buttonSale.style.display = "none"
};

// Filtrar por modelo
buttonModel.onclick = () => {
    modelCards(product)
    buttonBack.style.display = "flex"
    buttonAll.style.display = "none"
    buttonSort.style.display = "none"
    buttonBrand.style.display = "none"
    buttonModel.style.display = "none"
    buttonSale.style.display = "none"
};

// Ver solo ofertas
buttonSale.onclick = () => {
    sale(product)
    buttonBack.style.display = "flex"
    buttonAll.style.display = "none"
    buttonSort.style.display = "none"
    buttonBrand.style.display = "none"
    buttonModel.style.display = "none"
    buttonSale.style.display = "none"
};