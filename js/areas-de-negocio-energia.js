// - - - - Botones - - - -
const btnPaneles = document.getElementById("btnPaneles");
const btnPlantas = document.getElementById("btnPlantas");
const btnUps = document.getElementById("btnUps");

// - - - - D I V ' S - - - -

const divPaneles = document.getElementById("paneles");
const divPlantas = document.getElementById("plantas");
const divUps = document.getElementById("ups");

btnPaneles.onclick = function(){
    divPaneles.style.display = "block";
    divPlantas.style.display = "none";
    divUps.style.display = "none";
}

btnPlantas.onclick = function(){
    divPaneles.style.display = "none";
    divPlantas.style.display = "block";
    divUps.style.display = "none";
}

btnUps.onclick = function(){
    divPaneles.style.display = "none";
    divPlantas.style.display = "none";
    divUps.style.display = "block";
}
