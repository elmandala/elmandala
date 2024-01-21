function buscarEnPagina() {
    var textoBusqueda = document.getElementById('search-field').value.toLowerCase();
    var articulos = document.getElementsByClassName('articulo');

    for (var i = 0; i < articulos.length; i++) {
        var contenidoArticulo = articulos[i].innerText.toLowerCase();
        if (contenidoArticulo.includes(textoBusqueda)) {
            articulos[i].style.display = 'block';
        } else {
            articulos[i].style.display = 'none';
        }
    }
}