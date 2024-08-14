// Array de productos con nombre, precio y stock disponible
let productos = [
  { nombre: "Leche", precio: 1500, stock: 6 },
  { nombre: "Queso", precio: 1700, stock: 5 },
  { nombre: "Verduras", precio: 1200, stock: 10 },
  { nombre: "Carnes", precio: 1900, stock: 15 },
  { nombre: "Pastas", precio: 1000, stock: 9 },
  { nombre: "Arroz", precio: 1150, stock: 10 },
  { nombre: "Azúcar", precio: 1400, stock: 8 },
  { nombre: "Harina", precio: 1250, stock: 6 },
  { nombre: "Sal", precio: 500, stock: 12 },
  { nombre: "Aceite", precio: 1180, stock: 5 }
];

// Array para almacenar las cantidades compradas de cada producto
let cantidadComprada = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Obtiene una referencia al elemento donde se mostrarán los productos
const listaProductos = document.getElementById('listaProductos');

// Itera sobre el array de productos para crear y agregar elementos al DOM
for (let i = 0; i < productos.length; i++) {
  let producto = productos[i]; // Obtiene el producto actual en la iteración

  // Crea un nuevo elemento div para representar un producto
  let item = document.createElement('div');
  item.classList.add('producto'); // Añade la clase 'producto' al div

  // Crea un elemento p para mostrar la información del producto
  let nombre = document.createElement('p');
  nombre.classList.add('texto'); // Añade la clase 'texto' al p
  // Establece el texto del p con el nombre, precio y stock del producto
  nombre.innerText = `${producto.nombre}: El precio por unidad es de $${producto.precio}, Stock actual: ${producto.stock}`;

  // Crea un elemento input para permitir al usuario ingresar la cantidad comprada
  let input = document.createElement('input');
  input.classList.add('caja'); // Añade la clase 'caja' al input
  input.type = 'number'; // Establece el tipo del input a 'number'
  input.id = producto.nombre; // Asigna un ID al input basado en el nombre del producto
  input.min = '0'; // Establece el valor mínimo del input a 0
  input.max = producto.stock.toString(); // Establece el valor máximo del input al stock del producto
  input.value = '0'; // Establece el valor inicial del input a 0
  // Añade un evento de cambio para actualizar la cantidad comprada
  input.addEventListener('change', () => {
    cantidadComprada[i] = input.value; // Actualiza la cantidad comprada del producto en el array
  });

  // Agrega el elemento p y el input al div del producto
  item.appendChild(nombre);
  item.appendChild(input);
  // Agrega el div del producto al contenedor de productos en el DOM
  listaProductos.appendChild(item);
}

// Función para calcular el total de la compra
function calcularTotal() {
  let total = 0; // Inicializa el total a 0
  // Itera sobre el array de cantidades compradas
  for (let i = 0; i < cantidadComprada.length; i++) {
    let cantidad = cantidadComprada[i]; // Obtiene la cantidad comprada para el producto actual
    // Verifica si la cantidad es válida y está dentro del stock disponible
    if (cantidad > 0 && cantidad <= productos[i].stock) {
      total += cantidad * productos[i].precio; // Calcula el total acumulado
    }
  }
  // Muestra el total en el elemento con ID 'total'
  document.getElementById('total').innerText = total;
}

// Evento para el botón de calcular total
document.getElementById('calcularTotal').addEventListener('click', calcularTotal);

// Evento para el botón de comprar
document.getElementById('comprar').addEventListener('click', () => {
  calcularTotal(); // Calcula el total de la compra
  let total = document.getElementById('total').innerText; // Obtiene el total calculado
  // Verifica si el total es mayor que 0
  if (total > 0) {
    // Muestra un mensaje de confirmación y agrega la clase 'confirma'
    let check = document.getElementById('check');
    check.classList.add('confirma');
    check.innerText = `¡Compra realizada con éxito! El total de tu compra es de: $${total}`;
      
    // Recarga la página después de 2 segundos
    setTimeout(() => {
      location.reload(); // Recarga la página
    }, 2000);
  } else {
    // Muestra un mensaje de error y agrega la clase 'rechaza'
    let check = document.getElementById('check');
    check.classList.add('rechaza');
    check.innerText = "No hay productos seleccionados o la cantidad es cero.";
  }
});

/* Desglose de Funcionalidades
Array productos: Define una lista de productos con nombre, precio y stock disponible.
Array cantidadComprada: Mantiene las cantidades compradas para cada producto. Inicialmente todas están a 0.
Creación de productos en el DOM: Itera sobre el array de productos para crear elementos HTML que muestran información del producto y permiten al usuario ingresar una cantidad.
Función calcularTotal: Calcula el total de la compra multiplicando la cantidad comprada por el precio de cada producto y suma los resultados.
Eventos:
Botón "Calcular Total": Llama a calcularTotal para mostrar el total de la compra.
Botón "Comprar": Calcula el total, muestra un mensaje de éxito si hay productos comprados, o un mensaje de error si no se ha seleccionado nada. Recarga la página después de 2 segundos si la compra es exitos*/