const usuarios = [
    { nombre: "Ana García", rol: "Desarrolladora", biografia: "Apasionada por el frontend y el diseño web." },
    { nombre: "Carlos López", rol: "Backend Developer", biografia: "Experto en Node.js y bases de datos." },
    { nombre: "María Martínez", rol: "UX Designer", biografia: "Diseña experiencias centradas en el usuario." },
    { nombre: "Juan Pérez", rol: "DevOps", biografia: "Automatiza procesos y gestiona servidores." },
    { nombre: "Laura Torres", rol: "Data Scientist", biografia: "Analiza datos para tomar mejores decisiones." }
];

const contenedor = document.getElementById('contenedor-tarjetas');

usuarios.forEach(function(usuario) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    tarjeta.innerHTML = `
        <h2>${usuario.nombre}</h2>
        <p class="rol">${usuario.rol}</p>
        <p>${usuario.biografia}</p>
    `;

    contenedor.appendChild(tarjeta);
});