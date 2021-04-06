// - - - - Botones - - - -
const btnCctv = document.getElementById("btnCctv");
const btnCtrlAcceso = document.getElementById("btnCtrlAcceso");
const btnCtrlFlota = document.getElementById("btnCtrlFlota");
const btnLogica = document.getElementById("btnLogica");

// - - - - D I V ' S - - - -

const divCctv = document.getElementById("cctv");
const divCtrlAcceso = document.getElementById("ctrlAcceso");
const divCtrlFlota = document.getElementById("ctrlFlota");
const divSeguridadLogica = document.getElementById("seguridadLogica");


btnCctv.onclick = function(){
    divCctv.style.display = "block";
    divCtrlAcceso.style.display = "none";
    divCtrlFlota.style.display = "none";
    divSeguridadLogica.style.display = "none";
    divSeguridadFisica.style.display = "none";
}

btnCtrlAcceso.onclick = function(){
    divCctv.style.display = "none";
    divCtrlAcceso.style.display = "block";
    divCtrlFlota.style.display = "none";
    divSeguridadLogica.style.display = "none";
    divSeguridadFisica.style.display = "none";
}

btnCtrlFlota.onclick = function(){
    divCctv.style.display = "none";
    divCtrlAcceso.style.display = "none";
    divCtrlFlota.style.display = "block";
    divSeguridadLogica.style.display = "none";
    divSeguridadFisica.style.display = "none";
}

btnLogica.onclick = function(){
    divCctv.style.display = "none";
    divCtrlAcceso.style.display = "none";
    divCtrlFlota.style.display = "none";
    divSeguridadLogica.style.display = "block";
    divSeguridadFisica.style.display = "none";
}

