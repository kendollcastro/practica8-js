
// Creamo el titulo de la lista//


// Lista de las tares en array//
const listaTareas = ['Estudiar HTML', 'Ir a la feria', 'Jugar play', 'Reunion virtual con mis amigos', 'Hacer ejercicio '];
const tareas = ['tarea-1', 'tarea-2','tarea-3', 'tarea-4', 'tarea-5'];

//Llamamos al div//
const listaDeTareas = document.getElementById('lista-tareas');

//Para crear nuevos elementos en el archivo html// 
const listaUl = document.createElement('ul');

//Para que el documento exista//
listaDeTareas.appendChild(listaUl);

for ( let i = 0; i < listaTareas.length; i++){
    const li = document.createElement('li');
    listaUl.appendChild(li);
    const input = document.createElement('input');
    li.appendChild(input);
    input.setAttribute('type','checkbox');
    input.setAttribute('id',tareas[i]);
    const label = document.createElement('label');
    li.appendChild(label);
    label.setAttribute('for',tareas[i]);
    label.innerHTML = listaTareas[i];

}


