// Generar un número aleatorio entre 1 y 50
let numeroAzar = Math.floor(Math.random() * 50) + 1;

// Obtener los elementos del DOM
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');

// Función para comprobar el número ingresado por el usuario
function chequearResultado() {
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 50) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 50.';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El número es mayor. Intenta de nuevo.';
        mensaje.style.color = 'white';
    } else {
        mensaje.textContent = 'El número es menor. Intenta de nuevo.';
        mensaje.style.color = 'white';
    }
}
