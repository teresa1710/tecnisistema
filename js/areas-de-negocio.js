// - - - - Botones - - - -
const btnComputacion = document.getElementById("btnComputacion");
const btnRedes = document.getElementById("btnRedes");
const btnSeguridad = document.getElementById("btnSeguridad");
const btnEnergia = document.getElementById("btnEnergia");
const btnDesarrollo = document.getElementById("btnDesarrollo");

// - - - - D I V ' S - - - -

const divComputacion = document.getElementById("computacion");
const divRedes = document.getElementById("redes");
const divSeguridad = document.getElementById("seguridad");
const divEnergia = document.getElementById("energia");
const divDesarrollo = document.getElementById("desarrollo");

btnRedes.onclick = function(){
    divRedes.style.display = "block";

    divComputacion.style.display = "none";
    divSeguridad.style .display = "none";
    divEnergia.style.display = "none";
    divDesarrollo.style.display = "none";

    btnRedes.style.borderBottom = "2px solid #c8c8c8";
    btnComputacion.style.borderBottom = "none";
    btnSeguridad.style.borderBottom = "none";
    btnEnergia.style.borderBottom = "none";
    btnDesarrollo.style.borderBottom = "none";
}

btnSeguridad.onclick = function(){
    divSeguridad.style .display = "block";
    
    divRedes.style.display = "none";
    divComputacion.style.display = "none";    
    divEnergia.style.display = "none";
    divDesarrollo.style.display = "none";

    btnRedes.style.borderBottom = "none";
    btnComputacion.style.borderBottom = "none";
    btnSeguridad.style.borderBottom = "2px solid #c8c8c8";
    btnEnergia.style.borderBottom = "none";
    btnDesarrollo.style.borderBottom = "none";
}

btnEnergia.onclick = function(){
    divEnergia.style.display = "block";

    divRedes.style.display = "none";
    divComputacion.style.display = "none";
    divSeguridad.style .display = "none";
    divDesarrollo.style.display = "none";

    btnRedes.style.borderBottom = "none";
    btnComputacion.style.borderBottom = "none";
    btnSeguridad.style.borderBottom = "none";
    btnEnergia.style.borderBottom = "2px solid #c8c8c8";
    btnDesarrollo.style.borderBottom = "none";
}

btnDesarrollo.onclick = function(){
    divDesarrollo.style.display = "block";

    divRedes.style.display = "none";
    divComputacion.style.display = "none";
    divSeguridad.style .display = "none";
    divEnergia.style.display = "none";
    
    btnRedes.style.borderBottom = "none";
    btnComputacion.style.borderBottom = "none";
    btnSeguridad.style.borderBottom = "none";
    btnEnergia.style.borderBottom = "none";
    btnDesarrollo.style.borderBottom = "2px solid #c8c8c8";
    
}

btnComputacion.onclick = function(){
    divComputacion.style.display = "block";

    divRedes.style.display = "none";
    divSeguridad.style .display = "none";
    divEnergia.style.display = "none";
    divDesarrollo.style.display = "none";

    btnRedes.style.borderBottom = "none";
    btnComputacion.style.borderBottom = "2px solid #c8c8c8";
    btnSeguridad.style.borderBottom = "none";
    btnEnergia.style.borderBottom = "none";
    btnDesarrollo.style.borderBottom = "none";
}