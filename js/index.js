// Función de caracteres
const comprobarCaracteres = ( comentario ) => {
    if ( comentario.length > 30 ) {
        alert(`Tu comentario supera los 30 caracteres`)
    } else {
        alert(`Nombre: ${nombre} \n Comentario: ${comentario}`)
    }
};

alert(`¡Bienvenido/a! \n A continuación podrás dejar tu nombre y un comentario`);

// SOLICITUD DE DATOS
let nombre = prompt(`Ingrese su nombre`);
let comentario = prompt(`Ingrese un comentario de hasta 30 caracteres`);

// Llamado a la función
comprobarCaracteres(comentario);

// Declaración de usuarios
const usuarioUno = "Agustin"
const usuarioDos = "Fátima"
const usuarioTres = "Carlos"

// Bucle de 3 solicitudes
for (let i = 0; i < 3; i++) {
    if ( i === 0 ) {
        confirm(`El usuario ${usuarioUno} te envío una solicitud de amistad`)
    } else if ( i === 1 ) {
        confirm(`El usuario ${usuarioDos} te envío una solicitud de amistad`)   
    } else if ( i === 2 ) {
        confirm(`El usuario ${usuarioTres} te envío una solicitud de amistad`)
    }
};