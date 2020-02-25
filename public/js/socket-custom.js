var socket = io();

//on: escuchar información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//emit: Enviar Información al servidor de forma privada
socket.emit('enviarMensaje', {
    usuario: 'Adrian',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

//Escuchar informacion 
socket.on('enviarMensaje', function(mensaje) {
    console.log('Info del server: ', mensaje);
});