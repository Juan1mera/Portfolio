// Obtener la columna derecha
var rightColumn = document.getElementById('right-column');

// Escuchar el evento de scroll en la ventana
window.addEventListener('scroll', function() {
    // Si el usuario ha desplazado más allá de la mitad de la ventana
    if (window.scrollY > (window.innerHeight / 2)) {
        // Agregar la clase .expanded a la columna derecha
        rightColumn.classList.add('expanded');
    } else {
        // Si no, quitar la clase .expanded
        rightColumn.classList.remove('expanded');
    }
});
