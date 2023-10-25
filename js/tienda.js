document.addEventListener('DOMContentLoaded', function () {
    const productos = document.querySelectorAll('.producto');
    const carritoLista = document.getElementById('carrito-lista');
    const totalElement = document.getElementById('total');
    let total = 0;


    function agregarProducto(producto) {
        const nombre = producto.querySelector('h2').innerText;
        const precio = parseFloat(producto.querySelector('p').getAttribute('precio'));
        total += precio;

   
        const nuevoProducto = document.createElement('li');
        nuevoProducto.innerText = `${nombre} - $${precio.toFixed(2)}`;
        carritoLista.appendChild(nuevoProducto);

   
        totalElement.innerText = total.toFixed(2);
    }

  
    productos.forEach(producto => {
        const botonAgregar = producto.querySelector('.agregar');
        botonAgregar.addEventListener('click', () => {
            agregarProducto(producto);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    
    const botonFinalizarCompra = document.getElementById('finalizarCompra');
    botonFinalizarCompra.addEventListener('click', () => {
        alert('¡Gracias por tu compra!');
    });
});