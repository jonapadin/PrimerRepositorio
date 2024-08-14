// Obtiene una referencia a los elementos del formulario por su ID
let nombre = document.getElementById("nombre"); // Elemento de entrada para el nombre
let apellido = document.getElementById("apellido"); // Elemento de entrada para el apellido
let email = document.getElementById("email"); // Elemento de entrada para el email
let telefono = document.getElementById("telefono"); // Elemento de entrada para el teléfono
let mensaje = document.getElementById("mensaje"); // Elemento de entrada para el mensaje
let btnEnviar = document.getElementById("enviar"); // Botón para enviar el formulario

// Array para almacenar la información del formulario
let informacion = [];

// Añade un evento de clic al botón de enviar
btnEnviar.addEventListener("click", (e) => {
  e.preventDefault(); // Previene la acción predeterminada del formulario (que es actualizar la página)

  // Llena el array 'informacion' con los valores de los campos del formulario
  informacion[0] = nombre.value; // Almacena el valor del campo nombre en la primera posición del array
  informacion[1] = apellido.value; // Almacena el valor del campo apellido en la segunda posición del array
  informacion[2] = email.value; // Almacena el valor del campo email en la tercera posición del array
  informacion[3] = telefono.value; // Almacena el valor del campo teléfono en la cuarta posición del array
  informacion[4] = mensaje.value; // Almacena el valor del campo mensaje en la quinta posición del array

  // Crea un Blob con la información del formulario y el tipo de archivo 'text/plain'
  let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });

  // Usa la función saveAs (de FileSaver.js) para guardar el Blob como un archivo .txt
  saveAs(blob, "contacto.txt");

  // Obtiene una referencia al elemento con ID 'check'
  let check = document.getElementById("check");

  // Añade la clase 'confirma' al elemento para aplicar estilos de confirmación
  check.classList.add("confirma");

  // Cambia el texto del elemento para indicar que el mensaje fue enviado con éxito
  check.innerText = `¡Mensaje enviado con exito!`;
});

/*Desglose de Funcionalidades
Obtención de elementos: Las primeras líneas obtienen referencias a los elementos HTML usando document.getElementById(). Estos elementos son los campos del formulario y el botón de envío.
Array informacion: Un array vacío que se usará para almacenar los valores de los campos del formulario.
Evento de clic: Se añade un eventListener al botón de enviar para manejar el evento de clic. Dentro de este evento:
e.preventDefault(): Previene que el formulario se envíe de manera tradicional, que recargaría la página.
Recopilación de datos: Se recopilan los valores de los campos del formulario y se almacenan en el array informacion.
Creación y descarga del archivo: Se crea un Blob con los datos del formulario y se usa la función saveAs (de la librería FileSaver.js) para descargar el archivo con el nombre contacto.txt.
Confirmación visual: Se actualiza el elemento con ID check para mostrar un mensaje de confirmación estilizado con la clase confirma. */
