document.addEventListener('DOMContentLoaded', cargarCarrito);

function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    const carritoSection = document.getElementById('carrito');

    // Limpiar el contenido existente antes de cargar nuevamente el carrito
    carritoSection.innerHTML = '';

    if (Object.keys(carrito).length === 0) {
        carritoSection.innerHTML = '<p>Su carrito está vacío.</p>';
    } else {
        Object.keys(carrito).forEach((producto) => {
            const { cantidad, imagen, precio } = carrito[producto];
            const item = document.createElement('div');
            item.classList.add('carrito-item');
            item.innerHTML = `<img src="${imagen}" alt="${producto}" style="width: 50px; height: 50px;">
                              <div>
                                <p>${producto}</p>
                                <p>Precio: ${precio}€</p>
                              </div>
                              <div>
                                <p>Cantidad: ${cantidad}</p>
                                <button onclick="incrementarCantidad('${producto}')" class="boton-cantidad">+</button>
                                <button onclick="decrementarCantidad('${producto}')" class="boton-cantidad">-</button>
                                <button onclick="eliminarProducto('${producto}')">Eliminar</button>
                              </div>`;
            
            // Buscar el nodo existente y reemplazarlo si existe
            const nodoExistente = document.getElementById(`producto-${producto}`);
            if (nodoExistente) {
                carritoSection.replaceChild(item, nodoExistente);
            } else {
                // Si no existe, simplemente agregarlo al final
                item.id = `producto-${producto}`;
                carritoSection.appendChild(item);
            }
        });
    }
    actualizarTotal();
}

function calcularTotal() {
    let total = 0;
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    for (const producto in carrito) {
        const cantidad = carrito[producto].cantidad;
        const precio = carrito[producto].precio; // Usa el precio del producto en lugar de asumir un valor fijo
        total += cantidad * precio;
    }
    return total;
}



function actualizarTotal() {
    const total = calcularTotal();
    document.getElementById('total-carrito').textContent = `Total: ${total.toFixed(2)}€`;
}


function incrementarCantidad(producto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    
    if (carrito[producto]) {
        carrito[producto].cantidad++;
    } else {
        // Si el producto no está en el carrito, puedes agregarlo aquí si lo deseas.
        carrito[producto] = {
            cantidad: 1,
            imagen: "ruta/a/imagenes/" + producto.toLowerCase().replace(/\s/g, '-') + ".jpeg"  // Ajusta la ruta de la imagen según tu estructura de carpetas
        };
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function decrementarCantidad(producto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    if (carrito[producto] && carrito[producto].cantidad > 0) {
        carrito[producto].cantidad--;
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}



function eliminarProducto(producto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    delete carrito[producto];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

document.getElementById('vaciar-carrito').addEventListener('click', function() {
    localStorage.removeItem('carrito');
    cargarCarrito();
});

function volverPagina() {
    window.history.back();
}