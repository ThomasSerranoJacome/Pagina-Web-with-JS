const numeroEl = document.getElementById('numero');
const btnIncrementar = document.getElementById('incrementar');
const btnDecrementar = document.getElementById('decrementar');
const btnResetear = document.getElementById('resetear');

let contador = 0;

btnIncrementar.addEventListener('click', function() {
    contador = contador + 1;
    numeroEl.textContent = contador;
});

btnDecrementar.addEventListener('click', function() {
    contador = contador - 1;
    numeroEl.textContent = contador;
});

btnResetear.addEventListener('click', function() {
    contador = 0;
    numeroEl.textContent = contador;
});