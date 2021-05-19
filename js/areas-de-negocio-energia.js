// - - - - Botones - - - -
const btnPaneles = document.getElementById("btnPaneles");
const btnPlantas = document.getElementById("btnPlantas");
const btnUps = document.getElementById("btnUps");
const btnInversores = document.getElementById("btnInversores");
const btnBaterias = document.getElementById("btnBaterias");

// - - - - D I V ' S - - - -

const divPaneles = document.getElementById("paneles");
const divPlantas = document.getElementById("plantas");
const divUps = document.getElementById("ups");
const divInversores = document.getElementById("inversores");
const divBaterias = document.getElementById("baterias");

btnPaneles.onclick = function(){
    divPaneles.style.display = "block";
    divPlantas.style.display = "none";
    divUps.style.display = "none";
    divInversores.style.display = "none";
    divBaterias.style.display = "none";
}

btnPlantas.onclick = function(){
    divPaneles.style.display = "none";
    divPlantas.style.display = "block";
    divUps.style.display = "none";    
    divInversores.style.display = "none";    
    divBaterias.style.display = "none";
}

btnUps.onclick = function(){
    divPaneles.style.display = "none";
    divPlantas.style.display = "none";
    divUps.style.display = "block";    
    divInversores.style.display = "none";    
    divBaterias.style.display = "none";
}

btnInversores.onclick = function(){
    divPaneles.style.display = "none";
    divPlantas.style.display = "none";
    divUps.style.display = "none";    
    divInversores.style.display = "block";    
    divBaterias.style.display = "none";
}

btnBaterias.onclick = function(){
    divPaneles.style.display = "none";
    divPlantas.style.display = "none";
    divUps.style.display = "none";    
    divInversores.style.display = "none";    
    divBaterias.style.display = "block";
}