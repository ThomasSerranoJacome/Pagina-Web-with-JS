const productos = document.querySelectorAll('#lista-productos li');
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

function aplicarFavoritos() {
    productos.forEach(function(item) {
        if (favoritos.includes(item.dataset.id)) {
            item.classList.add('favorito-activo');
        }
    });
}

aplicarFavoritos();

productos.forEach(function(item) {
    item.querySelector('.btn-favorito').addEventListener('click', function() {
        const id = item.dataset.id;

        if (favoritos.includes(id)) {
            favoritos = favoritos.filter(function(f) { return f !== id; });
            item.classList.remove('favorito-activo');
        } else {
            favoritos.push(id);
            item.classList.add('favorito-activo');
        }

        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    });
});