// Función de caracteres
const comprobarCaracteres = ( comentario ) => {
    if ( comentario.length > 30 ) {
        alert(`Tu comentario supera los 30 caracteres`)
    } else {
        alert(`Nombre: ${nombre} \n Comentario: ${comentario}`)
    }
};

alert(`¡Bienvenido/a! \n A continuación podrás dejar tu nombre y un comentario`);

// Solicitud de datos
let nombre = prompt(`Ingrese su nombre`);
let comentario = prompt(`Ingrese un comentario de hasta 30 caracteres`);

// Ejecución de la función
comprobarCaracteres(comentario);

// Bucle con solicitudes de amistad
for (let i = 0; i < 3; i++) {
    confirm(`El usuario ${i} te envío una solicitud de amistad`)
};