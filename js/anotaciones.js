// // 1) Muestre un mensaje en consola que diga lo siguiente: “¡MIRÁ MAMÁAA, ESTOY PROGRAMANDO!”

// console.log(`¡MIRÁ MAMÁAA, ESTOY PROGRAMANDO!`);


// // 2) Hacer una variable que almacene un número par mayor a 10.

// let numPar = 12;


// // 3) Hacer una variable que almacene un numero impar menor a 100.

// let numImpar = 11;


// // 4) Visualizar en consola la suma de las dos variables numéricas que hicimos.

// console.log(numPar + numImpar);


// // 5) Con un cuadro de diálogo, pregúntele el nombre al usuario que ingresa a la web y guarde su valor en una variable.

// let nombreUsuario = prompt(`Ingrese su nombre`);


// // 6) Visualizar en consola, junto al nombre del usuario, el siguiente mensaje: “Bienvenide a nuestra primera web -usuario-”

// console.log(`Bienvenide a nuestra primera web ${nombreUsuario}`);


// // 7) Genere una nueva variable que almacene el número 5 y que se multiplique con el número impar.

// let num5 = 5;
// let multiplicacion5 = num5 * numImpar;


// // 8) Visualice en consola cada uno de los nombres de las participantes del grupo.

// console.log(nombreUsuario);


// // 9) Reste 100 a la variable que multiplica por 5 al número primo.

// let restaMulti = 100 - multiplicacion5;


// // 10) Cotejar el tipo de dato del punto 3 y 5.

// console.log(typeof numImpar + ` ` + typeof nombreUsuario);



// // 1) Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.

// let numero = prompt(`Ingrese un número`);

// if (numero > 1000) {
//     console.log(`Su número es mayor a 1000`)
// }
// else if (numero < 1000) {
//     console.log(`Su número es menor a 1000`)
// }
// else if (numero == 1000) {
//     console.log(`Su número es 1000`)
// }
// else {
//     alert(`Usted no ingresó ningún número`)
// };


// // 2) Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

// let texto = prompt(`Ingrese un texto`)

// if (texto == `Hola`) {
//     console.log(`Tu texto es "Hola"`)
// };


// // 3) Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

// let segundoNumero = prompt(`Ingrese otro número`);

// if (segundoNumero > 10 && segundoNumero < 50) {
//     console.log(`Su número está entre 10 y 50`)
// }
// else {
//     alert(`Su número no está entre 10 y 50`)
// };


 

// // 1) Crear una estructura condicional que compare el valor de una variable con un color del semáforo (rojo, verde o amarillo) y devuelva un mensaje en consola en true si puede avanzar o false si no. Si no se ingresa un color válido, se debe devolver un mensaje en consola que diga: Error: color de semáforo inválido.

// let colorSemaforo = prompt("Ingrese color de semáforo").toLowerCase();

// if ( colorSemaforo === "verde") {
//     console.log("Podés pasar")
// } else if ( colorSemaforo === "amarillo" || colorSemaforo === "rojo") {
//     console.log("No podés pasar")
// } else {
//     console.log("Color de semáforo inválido")
// };


// // 2) Crear una estructura condicional que compare el valor de una variable con las vocales y devuelva un mensaje en consola "Es una vocal" si letra es una vocal o "No es una vocal" si no lo es.

// let vocal = prompt("Ingrese una vocal").toLowerCase();
// let expresionRegularVocal = /[aeiou]/;

// if ( vocal.match(expresionRegularVocal) ) {
//     console.log("Es una vocal")
// } else {
//     console.log("No es una vocal")
// }


// // 3) Crear una estructura condicional que compare el valor de una variable con las consonantes y devuelva true si letra es una consonante o false si no lo es

// let consonante = prompt("Ingrese una consonante").toLowerCase();
// let expresionRegularConsonante = /[bcdfghjklmnñpqrstvwxyz]/;

// if ( consonante.match(expresionRegularConsonante) ) {
//     console.log("Es una consonante")
// } else {
//     console.log("No es una consonante")
// }



// // 4) Crear una estructura condicional que compare tres valores booleanos: pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva un mensaje en consola que sea true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos.


// let pasoTest = prompt("¿Pasó el test?").toLowerCase();
// let tieneMultas = prompt("¿Tiene multas?").toLowerCase();
// let pagoImpuestos = prompt("¿Pagó impuestos?").toLowerCase();

// if ( pasoTest === "si" && tieneMultas === "no" && pagoImpuestos === "si") {
//     console.log("Podés renovar tu carnet")
// } else {
//     console.log("No podés renovar tu carnet")
// };


// // 5) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es par" si el numero es par, o "Es impar" si el numero es impar. (AVERIGUAR SOBRE OPERADOR RESTO EN JAVASCRIPT, googlear es parte de nuestro trabajo)

// let numeroCinco = prompt("Ingrese un número").toLowerCase();
// let expresionRegularLetra = /[abcdefghijklmnñopqrstuvwxyz]/;

// if ( numeroCinco % 2 === 0) {
//     console.log("Es par")
// } else if ( numeroCinco.match(expresionRegularLetra) ) {
//     console.log("No es un número")
// } else {
//     console.log("Es impar")
// };




// // 6) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es positivo" si el número es positivo o "Es negativo" si el número es negativo

// let numeroSeis = prompt(`Ingrese un número`);

// if ( numeroSeis > 0 ) {
//     console.log(`Es positivo`)
// } else if ( numeroSeis < 0 ) {
//     console.log(`Es negativo`)
// } else if ( numeroSeis == 0 ) {
//     console.log(`Es cero`)
// } else {
//     console.log(`No ingresaste ningún número`)
// };




// 1) Realice un bucle que tenga como valor inicial 0 y que itere hasta 10 veces. Envíe un mensaje en consola por cada iteración, con la siguiente frase: "¡¡Oh no, entré en un bucleeee!!"

// for ( let i = 0; i < 10; i++) {
//     console.log(`¡¡Oh no, entré en un bucleeee!!`)
// };



// 2) Realice un bucle que tenga como valor inicial 20 y que itere hasta 50 veces. Visualice en consola cada incremento de la variable inicial.

// for ( let i = 20; i < 70; i++) {
//     console.log(i)
// };


// 3) Realice un bucle que muestre todas las vocales y consonantes de una palabra. La palabra tiene que estar dentro de una variable.

// let palabraTres = prompt(`Ingrese una palabra`);
// for ( let i = 0; i < palabraTres.length; i++ ) {
//     if (palabraTres[i] != ` `){
//         console.log(`letra: ${palabraTres[i]}`)
//     }
// };


// 4) Realice un bucle que tenga como valor incial 10 y que itere hasta 100 veces, de manera incluyente. Este bucle deberá tener una variable acumuladora para obtener la suma de todos los números que se encuentren dentro de dicho rango.

// let accCuatro = 0;

// for ( let i = 10; i < 20; i++) {
//     accCuatro = accCuatro + i
//     console.log(acc);
// };



// 5) Realice un bucle que tenga como valor inicial 0 y que itere hasta 10 veces. Haciendo uso de una variable acumuladora, sume solamente los números impares en las iteraciones.

// let accCinco = 0

// for ( let i = 0; i < 20; i++) {
//     if ( i % 2 != 0) {
//         accCinco = accCinco + i
//         console.log(accCinco);
//     }
// };



// 6) Realice un bucle que coteje cuántas vocales tiene el nombre de un usuario. Para valerse de un valor, genere una variable con su nombre. Precisarán de una variable acumuladora que cuente la cantidad de vocales.

// let nombreSeis = prompt(`Ingrese su nombre`).toLocaleLowerCase();
// let accSeis = 0;

// for ( let i = 0; i < nombreSeis.length; i++) {
//     if ( nombreSeis[i].match(expresionRegularVocal) ) {
//         accSeis = accSeis + 1
//     }
// };

// console.log(`Su nombre tiene ${accSeis} vocales`);



// 1) Crear 4 funciones que reciban 2 parámetros numéricos de cualquier tipo, distinto a 0:
// a) la función debe retornar la suma de los dos operandos

// const suma = (a, b) => a + b


// b) la función debe retornar la resta de los dos opernados

// const resta = (a, b) => a - b

// c) la función debe retornar la multiplicación de los dos operandos

// const multiplicacion = (a, b) => a * b

// d) la función debe retornar la división de los dos operandos

// const division = (a, b) => a / b


// Para cada uno de los llamados de las funciones, pasar los dos argumentos numéricos y visualizar el retorno en consola.

// console.log(suma(10, 5));
// console.log(resta(10, 5));
// console.log(multiplicacion(10, 5));
// console.log(division(10, 5));


// 2) Crear una función que reciba los siguientes parámetros: nombre, apellido, edad, direccion y telefono.
// Retornar como cadena de caracteres, la información del usuario. Podés usar \n para generar saltos de línea.
// Luego al llamar a la función, pase los 5 argumentos y visualice en consola el dato retornado.
// Ejemplo de la visualización: 
// Los datos del cliente son: 
//  Nombre: Carolina,
//  Apellido: Lerner,
//  Edad: 28,
//  Dirección: Calle falsa 123,
//  Teléfono: 11221122.

// const datosUsuario = (nombre, apellido, edad, direccion, telefono) => `Nombre: ${nombre} \nApellido: ${apellido} \nEdad: ${edad} \nDireccion: ${direccion} \nTelefono: ${telefono}`

// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");
// let edad = prompt("Ingrese su edad");
// let direccion = prompt("Ingrese su direccion");
// let telefono = prompt("Ingrese su telefono");

// console.log(datosUsuario(nombre, apellido, edad, direccion, telefono));


// 3) Crear una función que nos permita sacar un porcentaje de un número. Debe recibir dos parámetros: un número que sea al cual se le aplicará el porcentaje y otro número que sea el porcentaje (puede variar desde 0 a 100).

// Con esta información, la función deberá retornar el resultado del porcentaje mediante el siguiente mensaje: `El porcentaje ${porcentaje} del número ${numero} es: ${ ACA VA EL RESULTADO}`

// Si el porcentaje enviado es menor a 0 o mayor a 100, entonces retornar un mensaje con la siguiente frase: `El número ${porcentaje} es un porcentaje inválido` 

// Si el número al cual se le aplicará el porcentaje es 0, entonces retornar un mensaje con la siguiente frase: `Cualquier porcentaje aplicado sobre cero, siempre será cero`.

// Al llamar a la función, pase los 2 argumentos numéricos y visualice en consola el valor retornado.

// const porcentaje = (a, b) => a * b / 100;

// let a = prompt("Ingrese un número");
// let b = prompt("Ingrese un porcentaje para ese número");

// if ( porcentaje(a, b) < 0 || porcentaje(a, b) > 100) {
//     console.log(`El porcentaje ${porcentaje(a, b)}% es inválido`)
// } else if ( a == 0) {
//     console.log(`Cualquier porcentaje aplicado sobre cero, siempre será cero`)
// } else {
//     console.log(`El ${b}% de ${a} es: ${porcentaje(a, b)}`)
// };



// 4) Crear una función que reciba como parámetro un string y que coteje cuántas vocales tiene el argumento pasado en la ejecución de la función. Para ello deberán iterar sobre el string y precisarán de una variable acumuladora que cuente la cantidad de vocales. Retornar el valor de la acumuladora.
// Al llamar a la función, pasarle como argumento un string y visualizar el retorno en consola.

// let palabra = prompt("Ingrese una palabra").toLowerCase();
// let acc = 0;

// for (let i = 0; i < palabra.length; i++) {
//     if ( palabra[i].match(/[aeiou]/) ) {
//         acc = acc + 1
//     }
// }

// console.log(acc)



// 1) QUIERO QUE INSTANCIEN OBJETOS, ELIJAN LA MANERA, QUE LA INSTANCIA SE REFIERA A UN CLIENTE Y QUE CUENTE CON LAS SIGUIENTES PROPIEDADES:
// nombre, apellido, edad, numeroDeCuenta, direccion, email, tarjetaDeCredito, deuda
// - Instancien 5 objetos
// Que usen console.table para visualizar a cada uno de ellos.
// Método: Si tiene deuda (true), entonces que retorne, que lo llame el callcenter

// function Character (nombre, apellido, edad, numeroDeCuenta, direccion, email, tarjetaDeCredito, deuda) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.numeroDeCuenta = numeroDeCuenta;
//     this.direccion = direccion;
//     this.email = email;
//     this.tarjetaDeCredito = tarjetaDeCredito;
//     this.deuda = deuda;
//     this.tieneDeuda = () => {
//         if ( this.deuda === true ) {
//             return "Llamen al deudor"
//         } else {
//             return "Dejenlo tranquilo"
//         }
//     }
// };

// const cliente1 = new Character ("N", "AP", 18, 12, "Calle falsa 1", "mail1@gmail.com", true, true);
// const cliente2 = new Character ("o", "EL", 19, 34, "Calle falsa 2", "mail2@gmail.com", true, false);
// const cliente3 = new Character ("m", "LI", 20, 56, "Calle falsa 3", "mail3@gmail.com", true, true);
// const cliente4 = new Character ("br", "D", 21, 78, "Calle falsa 4", "mail4@gmail.com", true, true);
// const cliente5 = new Character ("e", "O", 22, 9, "Calle falsa 5", "mail5@gmail.com", true, false);

// console.table(cliente1);
// console.table(cliente1.tieneDeuda());

// console.table(cliente2);
// console.table(cliente2.tieneDeuda());

// console.table(cliente3);
// console.table(cliente3.tieneDeuda());

// console.table(cliente4);
// console.table(cliente4.tieneDeuda());

// console.table(cliente5);
// console.table(cliente5.tieneDeuda());




// ejemplo de break

// for ( let i = 0; i < 10; i++ ) {
//     console.log(`Estamos en la iteración ${i}`)
        

//     if ( i === 5) {        
//         break;        
//     }
// }




// PRE ENTREGA 1

// // Función de caracteres
// const comprobarCaracteres = ( comentario ) => {
//     if ( comentario.length > 30 ) {
//         alert(`Tu comentario supera los 30 caracteres`)
//     } else {
//         alert(`Nombre: ${nombre} \n Comentario: ${comentario}`)
//     }
// };

// alert(`¡Bienvenido/a! \n A continuación podrás dejar tu nombre y un comentario`);

// // SOLICITUD DE DATOS
// let nombre = prompt(`Ingrese su nombre`);
// let comentario = prompt(`Ingrese un comentario de hasta 30 caracteres`);

// // Llamado a la función
// comprobarCaracteres(comentario);

// // Declaración de usuarios
// const usuarioUno = "Agustin"
// const usuarioDos = "Fátima"
// const usuarioTres = "Carlos"

// // Bucle de 3 solicitudes
// for (let i = 0; i < 3; i++) {
//     if ( i === 0 ) {
//         confirm(`El usuario ${usuarioUno} te envío una solicitud de amistad`)
//     } else if ( i === 1 ) {
//         confirm(`El usuario ${usuarioDos} te envío una solicitud de amistad`)   
//     } else if ( i === 2 ) {
//         confirm(`El usuario ${usuarioTres} te envío una solicitud de amistad`)
//     }
// };



// PRE ENTREGA 2

// const register = (registerEmail, registerPassword) => {
//     for (let i = 0; i >= 0; i++) {
//         if ( registerEmail.match(/[@]/) && registerEmail.match(/[.com]/)) { 
//             alert(`Mail registrado`)
//             break
//         } else {
//             alert(`Formato de mail incorrecto, debe contenter "@" y ".com"`)
//             registerEmail = prompt(`Ingrese su mail nuevamente`);
//         }
//     };

//     for (let i = 0; i >= 0; i++) {
//         if (registerPassword.match(/[0123456789]/) && registerPassword.length > 8) {
//             alert(`Contraseña registrada`)
//             break
//         } else {
//             alert(`Su contraseña debe tener más de 8 caracteres y contener un número`)
//             registerPassword = prompt(`Ingrese su contraseña nuevamente`);
//         }
//     };
// };

// const logIn = (logEmail, logPassword) => {
//     for (let i = 0; i >= 0; i++) {
//         if ( logEmail == registerEmail && logPassword == registerPassword ) { 
//             alert(`Bienvenido ${registerName}`)
//             break
//         } else if (logEmail != registerEmail){
//             alert(`Su email es incorrecto`)
//             logEmail = prompt(`Ingrese su mail nuevamente`);
//         } else if (logPassword != registerPassword) {
//             alert(`Su contraseña es incorrecta`)
//             logPassword = prompt(`Ingrese su contraseña nuevamente`);
//         }
//     };
// };

// alert(`¡Bievenido/a! \n A continuación te pediremos los datos para registrarte`);

// let registerName = prompt(`Ingrese su nombre`);
// let registerEmail = prompt(`Ingrese su mail`);
// let registerPassword = prompt(`Ingrese su contraseña`);

// register(registerEmail, registerPassword);

// alert(`Gracias por registrarte. A continuación podrás iniciar sesión`);

// let logEmail = prompt(`Ingrese su email`);
// let logPassword = prompt(`Ingrese su contraseña`);

// logIn(logEmail, logPassword);



// ARRAYS Y METODOS

// 1) Necesito que instancien objetos con class constructor o con funcion. Este objeto tiene que tener los siguientes propiedades: nombre, apellido, edad, direccion, nDeCuenta, clientePreferencial, gastosDeTarjeta.
// 2) Crear una variable que contenga un array vacío ej: = []
// 3) quiero que instancien 5 nuevos objetos a partir de esto y que pusheen esos nuevos objetos a un array vacío. El array tiene que estar creado antes de hacer el push.
// 4) Quiero que visualicen en consola, con console.table, el array con los objetos que pushearon.
// 5) con un for, vamos a iterar sobre todos esos valores. Vamos a visualizar en consola cada uno de los nombres de los clientes.
// 6) Si el cliente es preferencial, entonces tiene un 5% de descuento en sus gastos de tarjeta. DENTRO DE FOR

// function Banco (nombre, apellido, edad, direccion, nDeCuenta, clientePreferencial, gastosDeTarjeta) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.direccion = direccion;
//     this.nDeCuenta = nDeCuenta;
//     this.clientePreferencial = clientePreferencial;
//     this.gastosDeTarjeta = gastosDeTarjeta;
// };

// const clienteUno = new Banco ("Agustin", "Braco", 23, "Calle falsa 12", 123, false, 1000);
// const clienteDos = new Banco ("Carlos", "Baute", 55, "Calle nueva 34", 456, true, 1000);
// const clienteTres = new Banco ("Fátima", "Celeste", 35, "Calle vieja 56", 789, false, 100);
// const clienteCuatro = new Banco ("Federico", "Perez", 12, "Calle izquierda 78", 987, true, 100);
// const clienteCinco = new Banco ("Paula", "Valdez", 40, "Calle derecha 90", 654, false, 40000);

// const arr = [];

// arr.push(clienteUno);
// arr.push(clienteDos);
// arr.push(clienteTres);
// arr.push(clienteCuatro);
// arr.push(clienteCinco);

// console.table(arr);

// for ( let i = 0; i <= 4; i++ ) {
//     console.log(`Cliente: ${arr[i].nombre}`)

//     if ( arr[i].clientePreferencial === true ) {
//         cuentaPreferencial = arr[i].gastosDeTarjeta * 5 / 100
//         gastosDeTarjetaConDescuento = arr[i].gastosDeTarjeta - cuentaPreferencial
//         console.log(`Deuda: ${gastosDeTarjetaConDescuento}`)
//     } else {
//         console.log(`Deuda: ${arr[i].gastosDeTarjeta}`)
//     }
// };







// 1) Crea una función que reciba los siguientes parámetros: calle, numero, departamento, codigo postal, ciudad y pais.
// Con está información el algoritmo deberá mostrar el siguiente mensaje: La dirección que ha ingresado es: {calle} {numero} {departamento}, {codigoPostal}, {ciudad}, {pais}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.





// 2) Crea una función que reciba los siguientes parámetros: nombrePlaylist, cancion1, primeraCancion, segundaCancion, terceraCancion.
// Con está información el algoritmo deberá retornar el siguiente mensaje: Se ha creado la playlist ${playlist} con las canciones ${cancion1}, ${cancion2} y ${cancion3}.
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.




// 3) Crea una función que reciba el parámetro: minutos.
// Con esta información, el algoritmo deberá retornar el resultado de la conversión en segundos mediante el mensaje: El resultado de la conversión de ${minutos} minutos a segundos es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.




// 4) Crea una función que reciba como parámetro: dias.
// El algoritmo deberá retornar el resultado de la conversión de los días a segundos mediante el mensaje: El resultado de la conversión de ${dias} días a segundos es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.





// 5) Crea una función que reciba como parámetro: kilometros.
// Con esta información, el algoritmo deberá retornar el resultado de la conversión de kilómetros a millas mediante el siguiente mensaje: El resultado de la conversión de ${kilometros} kilometros a millas es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.




// 6) Crea una función que reciba los siguientes parámetros: base y altura.
// Con esta información, el algoritmo deberá retornar el resultado del área del triángulo mediante el siguiente mensaje: El resultado del área del triángulo con base ${base} y altura ${altura} es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.





// 7) Crea una función que reciba los siguientes parámetros: base y altura.
// Con esta información, el algoritmo deberá retornar el resultado del perímetro del rectángulo mediante el siguiente mensaje: El resultado del perímetro del rectángulo con base ${base} y altura ${altura} es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.




// 8) Crea una función que reciba como parámetro: recorrido.
// Con esta información, el algoritmo deberá calcular cuánto tiempo tardaría en completarse el recorrido en distintos medios de transporte y luego retornarlo mediante el siguiente mensaje: Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s

// Las velocidades de los medio de transporte son:
// a pie : 5 km/ hs
// bicicleta : 10 km/ hs
// auto : 50 km/hs
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.





// 9) Crea una función que reciba dos parámetros: numeroDePartida y cantidad.
// Con esta información, el algoritmo deberá incrementar el número cinco veces la cantidad y mostrar cinco mensajes seguidos que muestren en consola el número del mensaje y el total incrementado hasta el momento. Por ejemplo si ingresamos el 6 como número y el 1 como cantidad, debería mostrar lo siguiente:

// 'Incremento 1: 7'
// 'Incremento 2: 8'
// 'Incremento 3: 9'
// 'Incremento 4: 10'
// 'Incremento 5: 11'

// Van a precisar una variable acumuladora.
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos visualizados coincidan con lo requerido por la consigna.




// 10) Crea una función que reciba como parámetro: gradosCelsius.
// Con esta información, el algoritmo deberá mostrar la conversión de grados Celsius a grados Fahrenheit con el mensaje: La conversión de ${grados} grados Celsius a Fahrenheit es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos visualizados coincidan con lo requerido por la consigna.








// 2) GENERE 6 VARIABLES PARA DOS CHARACTERS DIFERENTES: tipoDeHeroe, danioBase y vidaBase (para el héroe). Para el enemigo: tipoDeMonstruo, danioMostruoBase y vidaMonstruoBase. tipoDeHeroe y tipoDeMonstruo tiene un string vacío como valor, danioMonstruoBase, danioBase, vidaMonstruoBase y vidaBase valen cero como valor. Use variables que puedan ser reasignadas.

///////////////////////////////// para interactuar con el usuario

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS. UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.

// a) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un mago, guerrero o tanque?". En el caso de que elija mago, la vida que se le asignará a vidaBase será de 225, en el caso de que elija guerrero 300 y tanque 450. Para danioBase: mago --> 150, guerrero ---> 80 y tank ---> 50.
// b) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un gobling, orco o demonio?". Para la variable de vidaMonstruoBase: en el caso de que elija gobling: 180, en el caso de que elija orco 350 y demonio: 450. Para danioMonstruoBase: gobling --> 70, orco ---> 130 y demonio ---> 110.
// c) Con un bucle, genere 3 encuentros entre los contrincantes. Usando las estadísticas de los personajes, se deberán registrar los movimientos mediante cada iteración: `El ${heroe} ha atacado al ${monstruo}, por ${x} de daño. El monstruo ha perdido ${x} puntos de vida`. También en el caso del monstruo: `El ${monstruo} ha atacado al ${heroe}, por ${x} de daño. El heroe ha perdido ${x} puntos de vida`.
// d) mediante una estructura condicional, valide la vida del héroe y del monstruo. Si alguno de ellos llega a 0 o menos de vida, entonces detenga la iteración del ciclo. Eso se puede con el uso de break dentro del bucle. Antes de detener la iteración, envíe un mensaje en consola: `El ${x} ha caído. El ganador del encuentro es: ${y}`
// e) EN EL CASO DE QUE NO MUERA NINGUNO, VERIFICAR QUIÉN ES EL QUE TIENE MÁS VIDA. ENVIAR UN MENSAJE EN CONSOLA QUE AVISE QUIÉN FUE EL GANADOR DEL ENCUENTRO
// F) SI TIENEN LA MISMA VIDA, ENVIAR UN MENSAJE EN CONSOLA QUE MUESTREN QUE EMPATARON.







// ¡Hola! ACÁ HAY UN MIXING DE BUCLES Y FUNCIONES DE ORDEN SUPERIOR CON MÉTODOS DE ARRAYS DE TODO TIPO
// Vamos a tener que evaluar qué es mejor aplicar para cada caso. (hay más de métodos de arrays que for)
// Espero se diviertan.



//1) Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

// function crearCuentaRegresiva(numero) {
//     let array = []
//     for (let i = numero; i >= 0; i--) {
//         array.push(i)
//     }
//     return array
// };







// 2) Crear una función invertir que tome como argumento un array array y que devuelva un array con los mismos valores pero en orden invertido.


// let array = [1, 2, 3, 4, 5];
// let arrayInvertido = [...array];
// console.log(arrayInvertido.reverse());




// 3) Crear una función removerDuplicados que tome como argumento un array y que devuelva un array con los mismos valores de array pero sin los valores duplicados.
// Pista: googleen cómo hacer esto!


// let nuevoArray = new Set (duplicados);
// let resultado = [...newArray];
// console.log(resultado);







// 4) Creá la función montoTotal, que tome como parámetro un array de objetos. La función debe retornar un solo valor, con el monto total de todos los clientes, retornado con la siguiente frase: `Todos los clientes adeudan un total de: ${total}`.

// let clientes = [
//     {
//         nombre: "Luciano",
//         deuda: 10000,
//         clientePreferencial: true
//     },
//     {
//         nombre: "Andrea",
//         deuda: 5000,
//         clientePreferencial: false
//     },
//     {
//         nombre: "Germán",
//         deuda: 8000,
//         clientePreferencial: false
//     },
//     {
//         nombre: "Agustina",
//         deuda: 12000,
//         clientePreferencial: true
//     }
// ];

// function montoTotalReduce() {
//     let total = clientes.reduce((a, b) => a + b.deuda, 0)
//     console.log(`Todos los clientes adeudan un total de: ${total}`)
// };

// montoTotalReduce();





// 5) Cree la función descuento, que otorgue un 5% de descuento a los usuarios que sean clientes preferenciales.
// Retorne el array con todos los clientes, sean preferenciales o no, para poder apreciar el descuento de aquellos que si lo deben recibir.

// Ejemplo de llamada de función:
// descuento(clientes)
// Ejemplo del retorno de la función: 
// [
//     {
//         nombre: "Luciano",
//         deuda: 9500, // ----> valor modificado ;)
//         clientePreferencial: true
//     },
//     {
//         nombre: "Andrea",
//         deuda: 5000,
//         clientePreferencial: false
//     },
//     {
//         nombre: "Germán",
//         deuda: 8000,
//         clientePreferencial: false
//     },
//     {
//         nombre: "Agustina",
//         deuda: 11400,  // ----> valor modificado ;)
//         clientePreferencial: true
//     }
// ]






// 6) Crear una función buscarCliente que tome como parámetros un array y el nombre del cliente. La función debe retornar la información completa de ese cliente.

// Ejemplo de llamada de función:
// buscarCliente("Andrea")
// ejemplo de retorno de la función:
// { nombre: Andrea, deuda: 5000, clientePreferencial: false}





// SEGUNDA ENTREGA - ECOMMERCE

// * TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES

// * LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY

// * EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

// 1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:

// - id

// - producto

// - precio

// - fechaVencimiento (en el caso de que tenga una)

// - descripción

// - categoría (si tiene una)

// - oferta (booleano)

// Quiero que algunos de los elementos tengan un true en oferta.

// 2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).

// 3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).

// Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos:

// - […array] —> spread operator

// - array.slice() —> copia segura en otra variable

// - [].concat(array) —> copia segura en otra variable

// 4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

// 5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().