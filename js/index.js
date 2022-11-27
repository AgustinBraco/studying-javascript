// MENSAJE DE BIENVENIDA
alert(`¡Bienvenido/a! \n A continuación podrás dejar tu nombre y un comentario`);


// SOLICITUD DE DATOS
let nombre = prompt(`Ingrese su nombre`);
let comentario = prompt(`Ingrese un comentario de hasta 30 caracteres`);

// COMPROBACIÓN DE CARACTERES
const comprobarCaracteres = ( comentario ) => {
    if ( comentario.length > 30 ) {
        alert(`Tu comentario supera los 30 caracteres`)
    } else {
        alert(`Nombre: ${nombre} \n Comentario: ${comentario}`)
    }
};

comprobarCaracteres(comentario);

// DECLARACIÓN DE USUARIOS
const usuarioUno = "Agustin"
const usuarioDos = "Fátima"
const usuarioTres = "Carlos"

// BUCLE DE 3 SOLICITUDES
for (let i = 0; i < 3; i++) {
    if ( i === 0 ) {
        confirm(`El usuario ${usuarioUno} te envío una solicitud de amistad`)
    } else if ( i === 1 ) {
        confirm(`El usuario ${usuarioDos} te envío una solicitud de amistad`)   
    } else if ( i === 2 ) {
        confirm(`El usuario ${usuarioTres} te envío una solicitud de amistad`)
    }
};