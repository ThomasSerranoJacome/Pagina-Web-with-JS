const input = document.getElementById('password');
const mensaje = document.getElementById('mensaje');

input.addEventListener('input', function() {

    if (input.value.length >= 8) {
        input.style.borderColor = 'green';
        mensaje.textContent = '✓ Contraseña válida';
        mensaje.style.color = 'green';
    } else {
        input.style.borderColor = 'red';
        mensaje.textContent = '✗ Mínimo 8 caracteres';
        mensaje.style.color = 'red';
    }

});