const paises = [
    "Colombia", "Argentina", "México", "Chile", "Perú",
    "Brasil", "Venezuela", "Ecuador", "Bolivia", "Paraguay",
    "Uruguay", "España", "Francia", "Alemania", "Italia"
];

const inputBusqueda = document.getElementById('input-busqueda');
const listaSugerencias = document.getElementById('sugerencias');

inputBusqueda.addEventListener('input', function() {
    const texto = inputBusqueda.value.toLowerCase();
    listaSugerencias.innerHTML = '';

    if (texto === '') return;

    const coincidencias = paises.filter(function(pais) {
        return pais.toLowerCase().includes(texto);
    });

    coincidencias.forEach(function(pais) {
        const li = document.createElement('li');
        li.textContent = pais;

        li.addEventListener('click', function() {
            inputBusqueda.value = pais;
            listaSugerencias.innerHTML = '';
        });

        listaSugerencias.appendChild(li);
    });
});