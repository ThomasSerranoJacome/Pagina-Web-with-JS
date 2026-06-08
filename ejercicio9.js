const input = document.getElementById('segundos-input');
const btnIniciar = document.getElementById('btn-iniciar');
const display = document.getElementById('display-tiempo');
const panel = document.getElementById('panel-cronometro');

let intervalo = null;

btnIniciar.addEventListener('click', function() {
    clearInterval(intervalo);
    panel.classList.remove('tiempo-cumplido');

    let segundos = parseInt(input.value);

    if (isNaN(segundos) || segundos <= 0) {
        display.textContent = 'Ingresa un número válido';
        return;
    }

    display.textContent = segundos;

    intervalo = setInterval(function() {
        segundos = segundos - 1;
        display.textContent = segundos;

        if (segundos === 0) {
            clearInterval(intervalo);
            display.textContent = '¡Tiempo cumplido!';
            panel.classList.add('tiempo-cumplido');
        }
    }, 1000);
});