//Llamar por id es con numeral, en el caso de la llamar por clases es con el .
//Declarar constantes por id
const navegacion = document.querySelector('#menu');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

//Evento de escucha 
//Se despliega el menu
abrir.addEventListener("click", () =>{
    //Agregar la clase visible por la no-visible
    navegacion.classList.add("visible")
})

//Se contrae el menu
cerrar.addEventListener("click", ()=>{
    //Remover la clase visible por la no-visible
    navegacion.classList.remove("visible")
})