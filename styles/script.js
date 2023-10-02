var encabezado = document.querySelector('.encabezado');
var lastScrollTop = 0;


function animarFondoDegradado() {
    var elemento = document.body;
    var colores = ['#FFDFF6','#FFD2E3','#ECE1EC','FFD6DF']; // Lista de colores degradados
    var indice = 0;

    // Función para cambiar el color de fondo con transición
    function cambiarFondo() {
        elemento.style.transition = "background 1s ease"; // Añadir una transición de 1 segundo
        elemento.style.background = colores[indice]; // Cambiar el color de fondo
        indice = (indice + 1) % colores.length; // Cambiar al siguiente color en la lista
    }

    // Llamar a la función de cambio de fondo cada cierto intervalo
    setInterval(cambiarFondo, 2300); // Cambia cada 3 segundos (3000 milisegundos)
}


// Llamar a la función cuando se cargue la página
window.onload = animarFondoDegradado;

document.addEventListener("DOMContentLoaded", function () {
    var hamburguesa = document.querySelector('.hamburguesa');
    var menuLateral = document.querySelector('.menu-lateral');
    var contenido = document.querySelector('.contenido');
    var encabezado = document.querySelector('.encabezado');

    hamburguesa.addEventListener('click', function () {
        menuLateral.classList.toggle('activo');
        contenido.classList.toggle('activo');
        encabezado.classList.toggle('oculto');
    });
    

    var enlacesMenu = document.querySelectorAll('.menu-lista a');

    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener('click', function (event) {
            event.preventDefault(); // Evita la acción predeterminada del enlace

            var pagina = this.getAttribute('href');
            cargarPagina(pagina);
        });
    });

    // Cargar inicio.html por defecto
    cargarPagina('suburls/inicio.html');

    function cargarPagina(pagina) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', pagina, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                contenido.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }
});

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Desplazándose hacia abajo
        encabezado.classList.add('oculto');
    } else {
        // Desplazándose hacia arriba
        encabezado.classList.remove('oculto');
    }

    lastScrollTop = scrollTop;
});