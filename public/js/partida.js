var socket = io.connect("192.168.12.104:8080", {"forceNew":true});


function guardar(){
	var nombre = document.getElementById("username").value;
	var clase = document.getElementById("clase").value;

	window.location.replace("/index");
	socket.emit("datos", nombre, clase);
	

	return false;
}

socket.on("DataUser", function(info){
	$("#h4user").html(info.usuario);
	alert(info.usuario);
});