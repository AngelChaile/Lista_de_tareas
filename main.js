// Obtener referencia al botón de agregar por su id
let addButton = document.getElementById("addButton");

// Agregar un evento de clic al botón de agregar
addButton.addEventListener("click", agregarTarea);

function agregarTarea() {
  let input = document.getElementById("taskInput");
  let tarea = input.value;

  if (tarea !== "") {
    let lista = document.getElementById("taskList");
    let elementoLista = document.createElement("li");
    elementoLista.innerText = tarea;
    lista.appendChild(elementoLista);

    input.value = "";
  }
}