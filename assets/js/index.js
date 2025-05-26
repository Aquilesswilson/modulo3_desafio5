

const TareaInput = document.getElementById("nuevoTarea");
const agregarBtn = document.getElementById("agregarTarea");
let html = "";
const cantidadTareas = document.getElementById("total");
const cantidadRealizadas = document.getElementById("realizadas");

const Tareas = [
  { id: 1, nombre: 'Tarea uno', realizado: false }, { id: 2, nombre: 'Tarea dos', realizado: false }, { id: 3, nombre: 'Tarea tres', realizado: false }
]
let contador = 3;
let contRealizados = 0;

document.addEventListener("DOMContentLoaded", () => {
  listaTablaTareas();


})

function listaTablaTareas() {
  const listTareas = document.getElementById("Tareas");
  let html = "";

  listTareas.innerHTML = "";
  if (!Tareas.length == 0) {
    for (let i = 0; i < Tareas.length; i++) {
      html += ` <tr><td> ${Tareas[i].id} </td>
      <td>${Tareas[i].nombre}</td> 
      <td><input type="checkbox" id="checkbox${Tareas[i].id}" onclick="tareasRealizadas(${Tareas[i].id})" value="${Tareas[i].realizado}" ${Tareas[i].realizado ? "checked" : ""}> </td> 
      <td> <button i class="fa-solid fa-x" onclick="borrar(${Tareas[i].id})"> </button></td> </tr> `;
      cantidadTareas.textContent = i + 1;
      if (Tareas[i].realizado) {
        contRealizados++;
        cantidadRealizadas.textContent = contRealizados;
      }
    }
  }else{
    cantidadTareas.textContent = 0;
    cantidadRealizadas.textContent = 0;
  }
  console.log(Tareas);
  listTareas.innerHTML = html;
}

// const realizada = document.createElement('input');
// realizada.type = 'checkbox';


agregarBtn.addEventListener("click", function () {
  const nuevoTarea = TareaInput.value.trim();
  Tareas.push({ id: generarIdCorrelativo(), nombre: nuevoTarea, realizado: false });
  listaTablaTareas();
  TareaInput.value = "";
  // const ultimaTarea = Tareas[Tareas.length - 1]
  //   nuevaFila += ` <tr>
  //   <td>${ultimaTarea.id}</td>
  //   <td>${ultimaTarea.nombre}</td>
  //   <td><input type="checkbox" id="checkbox${ultimaTarea.id}" onclick="tareasRealizadas(${ultimaTarea.id})"></td>
  //   <td><button class="fa-solid fa-x" onclick="borrar(${ultimaTarea.id})"></button></td>
  // </tr>`;

  // realizada.appendChild(checkbox);
  // realizada=true;
  // realizada.checked;

  // Tareas.push({id: Date.now(), nombre: nuevoTarea});
  // Tareas.push({id: generarIdCorrelativo(), nombre: nuevoTarea});
  // // Tareas.push({id: generarIdCorrelativo(),nombre: nuevoTarea, realizada: realizada.value});
  //   Tareas.push({id: Date.now(),nombre: nuevoTarea, realizada: realizada.value});
  // TareaInput.value = "";

  // let html = "ID Tarea";

  // for (let i = 0; i < Tareas.length; i++) {
  //   //   //   html += `<li> ${Tareas[i].id}   ${Tareas[i].nombre}  <button onclick="borrar(${Tareas[i].id})">Eliminar</button></li>    ` ;
  //   //   // html += ` <li> ${Tareas[i].id}   ${Tareas[i].nombre} ${Tareas[i].realizada} <button onclick="borrar(${Tareas[i].id})">Eliminar</button></li>   ` ;

  //   html += ` <tr><td> ${Tareas[i].id} </td>
  //    <td>${Tareas[i].nombre}</td> 
  //    <td><input type="checkbox" id="checkbox${Tareas[i].id}" onclick="tareasRealizadas(${Tareas[i].id})"> </td> 
  //    <td> <button i class="fa-solid fa-x" onclick="borrar(${Tareas[i].id})"> </button></td> </tr> `;


  // }

  // listTareas.innerHTML += nuevaFila;
});



//   <td><input type="checkbox" onchange="tareaRealizada(${arreglo[i].id})"></input></td>
 
function tareasRealizadas(idCheckbox) {
  const checkbox = document.getElementById('checkbox' + idCheckbox);
  
  const tarea = Tareas.findIndex(Tarea => Tarea.id === idCheckbox);
  if (checkbox.checked == true) {
    valorRealizadas = parseInt(cantidadRealizadas.textContent);
    valorRealizadas++;
    console.log(checkbox.checked);
    tarea.realizado = checkbox.checked;
    console.log(Tareas);
    cantidadRealizadas.textContent = valorRealizadas;

  } else {
    valorRealizadas = parseInt(cantidadRealizadas.textContent);
    valorRealizadas--;
    tarea.realizado = checkbox.checked;
    cantidadRealizadas.textContent = valorRealizadas;


  }
}

function borrar(id) {
  const index = Tareas.findIndex(Tarea => Tarea.id === id);
  if (index !== -1) {
    Tareas.splice(index, 1);
  }

  if(parseInt(cantidadRealizadas.textContent)> 0) {
    valueRealizadas = parseInt(cantidadRealizadas.textContent) -1;
    cantidadRealizadas.textContent = valueRealizadas;
  }

  if (parseInt(cantidadTareas.textContent) > 0) {
    valueTareas = parseInt(cantidadTareas.textContent) - 1;
    cantidadTareas.textContent = valueTareas;
  }
  listaTablaTareas();


}

function generarIdCorrelativo() {
  contador++;
  return contador;
}

