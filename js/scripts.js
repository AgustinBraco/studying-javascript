const loginContainer = document.querySelector(".loginContainer");
const formLogin = document.querySelector(".formLogin");
const inputUser = document.querySelector(".inputUser");
const inputPassword = document.querySelector(".inputPassword");
const header = document.querySelector("header");
const container = document.querySelector(".container");
const a = document.querySelector("a");
const buttonFilter = document.querySelectorAll(".buttonFilter");
const buttonClose = document.querySelector(".buttonClose");

// LOGIN
const user = {
    user: "user123",
    password: "pass123"
};

const getJSON = (key) => {
    return JSON.parse(localStorage.getItem(key))
};

const pushJSON = (key, value) => {
    localStorage.setItem (key, JSON.stringify(value))
};

function checkLogin (key) {
    if (key === true) {
        loginContainer.style.display = "none"
        header.style.display = "flex"
        container.style.display = "flex"
        a.style.display = "flex"
    } else {
        loginContainer.style.display = "flex"
        header.style.display = "none"
        container.style.display = "none"
        a.style.display = "none"
        swal({
            title: "¡Hola!",
            text: "Usuario: user123 \n Contraseña: pass123",
            timer: 5000
          });
    };
};

checkLogin(getJSON("login"));

formLogin.onsubmit = (event) => {
    event.preventDefault()
    if (inputUser.value.toLowerCase() === user.user && inputPassword.value.toLowerCase() === user.password) {
        pushJSON("login", true)
        swal({
            icon: "success",
            text: "Sesión iniciada",
            timer: 1500,
          });
        loginContainer.style.display = "none"
        header.style.display = "flex"
        container.style.display = "flex"
        a.style.display = "flex"
    } else {
        swal({
            icon: "error",
            text: "Datos incorrectos",
            timer: 1500
          });
    }
};

buttonClose.onclick = () => {
    localStorage.removeItem("login")
    checkLogin(getJSON("login"))
};

// POKEDEX
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
    .then(response => response.json())
    .then(data => createCard(data))
};

function createCard(data) {
    let types = data.types.map(type =>
        `<p class="card-type">${type.type.name}</p>
    `)
    types = types.join('')

    const div = document.createElement("div")
    div.classList.add("card")
    div.innerHTML = `
        <div class="card">
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}" class="card-image">
            <p class="card-id">#${data.id}</p>
            <p class="card-name">${data.name}</p>
            ${types}
            <p class="card-weight">${data.weight} kg</p>
        </div>
    `
    container.appendChild(div)
};

buttonFilter.forEach(button => button.addEventListener("click", (event) => {
    const buttonId = event.currentTarget.id
    container.innerHTML = ""

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
        .then(response => response.json())
        .then(data => {
            if (buttonId === "all") {
                createCard(data)
            } else {
                const types = data.types.map(type => type.type.name)
                if (types.some(type => type.includes(buttonId))) {
                    createCard(data)
                };
            };
        });
    };
}));