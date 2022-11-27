// Función para el registro
const register = (registerEmail, registerPassword) => {
    for (let i = 0; i >= 0; i++) {
        if ( registerEmail.match(/[@]/) && registerEmail.match(/[.com]/)) { 
            alert(`Mail registrado`)
            break;
        } else {
            alert(`Formato de mail incorrecto, debe contenter "@" y ".com"`)
            registerEmail = prompt(`Ingrese su mail nuevamente`);
        }
    };

    for (let i = 0; i >= 0; i++) {
    
        if (registerPassword.match(/[0123456789]/) && registerPassword.length > 8) {
            alert(`Contraseña registrada`)
            break;
        } else {
            alert(`Su contraseña debe tener más de 8 caracteres y contener un número`)
            registerPassword = prompt(`Ingrese su contraseña nuevamente`);
        }
    };
};

// Función para el log in
const logIn = (logEmail, logPassword) => {
    for (let i = 0; i >= 0; i++) {
        if ( logEmail === registerEmail && logPassword === registerPassword ) { 
            alert(`Bienvenido ${registerName}`)
            break;
        } else if (logEmail !== registerEmail){
            alert(`Su email es incorrecto`)
            logEmail = prompt(`Ingrese su mail nuevamente`);
        } else if (logPassword !== registerPassword) {
            alert(`Su contraseña es incorrecta`)
            logPassword = prompt(`Ingrese su contraseña nuevamente`);
        }
    };
};

alert(`¡Bievenido/a! \n A continuación te pediremos los datos para registrarte`);

// Solicitud de datos para el registro
const registerName = prompt(`Ingrese su nombre`);
const registerEmail = prompt(`Ingrese su mail`);
const registerPassword = prompt(`Ingrese su contraseña`);

// Ejecución de función de registro
register(registerEmail, registerPassword);

alert(`Gracias por registrarte. A continuación podrás iniciar sesión`);

// Solicitud de datos para el login
const logEmail = prompt(`Ingrese su email`);
const logPassword = prompt(`Ingrese su contraseña`);

// Ejecución de función de login
logIn(logEmail, logPassword);