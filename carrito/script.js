let carrito = JSON.parse(localStorage.getItem('carrito')) || {};

function agregarAlCarrito(producto, imagen, precio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || {};

    if (carrito[producto]) {
        carrito[producto].cantidad++;
    } else {
        carrito[producto] = {
            cantidad: 1,
            imagen: imagen,
            precio: precio
        };
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function actualizarCarritoUI() {
    // Lógica para actualizar la interfaz de usuario con el contenido del carrito
    console.log(carrito);
}
