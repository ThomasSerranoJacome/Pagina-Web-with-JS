const botonModo = document.getElementById('toggle-modo');
const textoModo = document.getElementById('texto-modo');

if (localStorage.getItem('modo') === 'oscuro') {
    document.body.classList.add('dark-mode');
    botonModo.textContent = '☀️ Modo Claro';
    textoModo.textContent = 'Estás en modo oscuro';
}

botonModo.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('modo', 'oscuro');
        botonModo.textContent = '☀️ Modo Claro';
        textoModo.textContent = 'Estás en modo oscuro';
    } else {
        localStorage.setItem('modo', 'claro');
        botonModo.textContent = '🌙 Modo Oscuro';
        textoModo.textContent = 'Estás en modo claro';
    }
});