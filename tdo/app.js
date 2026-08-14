// Espera a que el documento se cargue por completo
document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos los elementos del HTML por su ID
    const boton = document.getElementById('btn-saludo');
    const mensaje = document.getElementById('mensaje-saludo');

    // Escuchamos el clic en el botón
    boton.addEventListener('click', () => {
        mensaje.textContent = '¡Hola! Gracias por visitar mi portafolio 👋';
    });

});