"use strict"

var user = document.getElementById("user").toString();
document.getElementById("forma");
document.getElementById("ingresa");
forma["ingresa"].addEventListener("click",procesa, false);

function procesa(){
	if (user == "Admin") {
	window.location = "admin.html";
} else if (user == "Reparte"){
	window.location = "repartidor.html";
} else {
	window.alert("Ingrese un usuario correcto");
}
}


