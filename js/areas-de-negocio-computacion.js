// - - - - Botones - - - -
const btnServidores = document.getElementById("btnServidores");
const btnComputadoras = document.getElementById("btnComputadoras");
const btnImpresoras = document.getElementById("btnImpresoras");
const btnComponentes = document.getElementById("btnComponentes");
const btnTelefonos = document.getElementById("btnTelefonos");
const btnPantallas = document.getElementById("btnPantallas");
const btnTablets = document.getElementById("btnTablets");
const btnJuegos = document.getElementById("btnJuegos");

// - - - - D I V ' S - - - -

const divServidores = document.getElementById("servidores");
const divComputadoras = document.getElementById("computadoras");
const divImpresoras = document.getElementById("impresoras");
const divComponentes = document.getElementById("componentes");
const divTelefonos = document.getElementById("telefonos");
const divPantallas = document.getElementById("pantallas");
const divTablets = document.getElementById("tablets");
const divJuegos = document.getElementById("juegos");

btnServidores.onclick = function(){
    divServidores.style.display = "block";
    divComputadoras.style.display = "none";
    divImpresoras.style.display = "none";
    divComponentes.style.display = "none";
    divTelefonos.style.display = "none";
    divPantallas.style.display = "none";
    divTablets.style.display = "none";
    divJuegos.style.display = "none";
}

btnComputadoras.onclick = function(){
    divServidores.style.display = "none";
    divComputadoras.style.display = "block";
    divImpresoras.style.display = "none";
    divComponentes.style.display = "none";
    divTelefonos.style.display = "none";
    divPantallas.style.display = "none";    
    divTablets.style.display = "none";
    divJuegos.style.display = "none";
}

btnTablets.onclick = function (){
    divServidores.style.display = "none";
    divComputadoras.style.display = "none";
    divImpresoras.style.display = "none";
    divComponentes.style.display = "none";
    divTelefonos.style.display = "none";
    divPantallas.style.display = "none";
    divTablets.style.display = "block";
    divJuegos.style.display = "none";
}


btnImpresoras.onclick = function(){
    divServidores.style.display = "none";
    divComputadoras.style.display = "none";
    divImpresoras.style.display = "block";
    divComponentes.style.display = "none";
    divTelefonos.style.display = "none";
    divPantallas.style.display = "none";
    divTablets.style.display = "none";
    divJuegos.style.display = "none";
}

btnComponentes.onclick = function(){
    divServidores.style.display = "none";
    divComputadoras.style.display = "none";
    divImpresoras.style.display = "none";
    divComponentes.style.display = "block";
    divTelefonos.style.display = "none";
    divPantallas.style.display = "none";
    divTablets.style.display = "none";
    divJuegos.style.display = "none";
}

btnTelefonos.onclick = function(){
    divServidores.style.display = "none";
    divComputadoras.style.display = "none";
    divImpresoras.style.display = "none";
    divComponentes.style.display = "none";
    divTelefonos.style.display = "block";
    divPantallas.style.display = "none";
    divTablets.style.display = "none";
    divJuegos.style.display = "none";
}

btnPantallas.onclick = function(){
    divServidores.style.display = "none";
    divComputadoras.style.display = "none";
    divImpresoras.style.display = "none";
    divComponentes.style.display = "none";
    divTelefonos.style.display = "none";
    divPantallas.style.display = "block";
    divTablets.style.display = "none";
    divJuegos.style.display = "none";
}

btnJuegos.onclick = function(){
    divServidores.style.display = "none";
    divComputadoras.style.display = "none";
    divImpresoras.style.display = "none";
    divComponentes.style.display = "none";
    divTelefonos.style.display = "none";
    divPantallas.style.display = "none";
    divTablets.style.display = "none";
    divJuegos.style.display = "block";

}