var socket = io()
var label = $("#lblNuevoTicket")
socket.on("connect", function(){

})
socket.on("disconnect", function(){
    
})
socket.on("estadoActual", function(resp){
    label.text(resp.actual)
})
$('button').on('click', function(){
    socket.emit("siguienteTicket", null, function(siguienteTicket){
        label.text(siguienteTicket)
    })
})