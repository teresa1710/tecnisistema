const btnWifi = document.getElementById("btnWifi");
const btnLanWan = document.getElementById("btnLanWan");
const btnFibra = document.getElementById("btnFibra");
const btnCable = document.getElementById("btnCableado");
const btnRadios = document.getElementById("btnRadios");


const divWifi = document.getElementById("wifi");
const divLanWan = document.getElementById("lan-wan");
const divFibra = document.getElementById("fibra-optica");
const divCableado = document.getElementById("cableado");
const divRadios = document.getElementById("radios");

btnWifi.onclick = function(){
    divWifi.style.display = "block";
    divLanWan.style.display = "none";
    divFibra.style.display = "none";
    divCableado.style.display = "none";
    divRadios.style.display = "none"
}

btnLanWan.onclick = function(){
    divWifi.style.display = "none";
    divLanWan.style.display = "block";
    divFibra.style.display = "none";
    divCableado.style.display = "none";
    divRadios.style.display = "none";
}

btnFibra.onclick = function (){
    divWifi.style.display = "none";
    divLanWan.style.display = "none";
    divFibra.style.display = "block";
    divCableado.style.display = "none";
    divRadios.style.display = "none";
}

btnCable.onclick = function(){
    divWifi.style.display = "none";
    divLanWan.style.display = "none";
    divFibra.style.display = "none";
    divCableado.style.display = "block";
    divRadios.style.display = "none";
}

btnRadios.onclick = function(){
    divWifi.style.display = "none";
    divLanWan.style.display = "none";
    divFibra.style.display = "none";
    divCableado.style.display = "none";
    divRadios.style.display = "block";
}
