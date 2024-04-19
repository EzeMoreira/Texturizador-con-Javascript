"use strict";

//Creamos una funcion para poder arrastrar las texturas y colocarlas en la zona y que la misma renderice

const zona = document.querySelector(".zona");
zona.addEventListener("dragOver", (e)=>{
    e.preventDefault();
    
//Ahora creamos un evento para cuando soltemos la textura dentro de la zona    
})
zona.addEventListener("drop", (e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("textura${n}.png")`;
})

//Con preventDefault prevenimos el comportamiento por default que no nos deja soltar el elemento
//Añadimos un evento para poder arrastrar las texturas 

for (let i = 1; i < document.querySelector(".texturas").children.length + 1; i++) {
    document.querySelector(`.textura${i}`).addEventListener("dragStart",(e)=>transferirTextura(i,e))
}

const transferirTextura = (n,e) => {
    e.dataTransfer.setData("textura", n)
}

