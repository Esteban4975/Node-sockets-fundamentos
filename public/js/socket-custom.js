var socket = io();
socket.on('connect',function(){
    console.log('Conectado al servidor');
});
// Escuchar
socket.on('disconnect',function(){
    console.log('Perdimos conexión con el servidor');
});
// Enviar información
socket.emit('enviarMensaje',{
    usuario: 'Esteban',
    mensaje: 'Hola Mundo'
},function(resp){
    console.log('Respuesta server: ',resp);
});
// Escuchar información
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ',mensaje);
});