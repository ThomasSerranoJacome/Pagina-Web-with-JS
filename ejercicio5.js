const imagenPrincipal = document.getElementById('imagen-principal');
const contenedorMiniaturas = document.getElementById('miniaturas');

contenedorMiniaturas.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        imagenPrincipal.src = event.target.dataset.src;
    }
});