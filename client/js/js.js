window.onload = function() {
	var socket = io();
	socket.emit("dio");
};