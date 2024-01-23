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

// Función para mostrar/ocultar el menú de hamburguesa en dispositivos móviles
function toggleMenu() {
    var menu = document.getElementById("menu-lista");
    var header = document.querySelector(".header-container");
    var nav = document.querySelector("nav");
    var closeButton = document.createElement("div");

    closeButton.classList.add("close-button");
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function () {
        document.body.removeChild(this.parentNode);
    };

    var expandedHeader = document.createElement("div");
    expandedHeader.classList.add("expanded-header");
    expandedHeader.appendChild(header.cloneNode(true));
    expandedHeader.appendChild(nav.cloneNode(true));
    expandedHeader.appendChild(closeButton);

    if (menu.style.display === "block") {
        document.body.removeChild(expandedHeader);
    } else {
        document.body.appendChild(expandedHeader);
    }
}
