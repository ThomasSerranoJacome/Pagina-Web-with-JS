const buscador = document.getElementById('filtro');
const items = document.querySelectorAll('#lista li');

buscador.addEventListener('input', function() {

    const textoBuscado = buscador.value.toLowerCase();

    items.forEach(function(item) {
        const textoItem = item.textContent.toLowerCase();

        if (textoItem.includes(textoBuscado)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

});