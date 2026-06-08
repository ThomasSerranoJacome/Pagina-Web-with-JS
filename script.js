const boton1 = document.getElementById('ejercicio1');

boton1.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}); 