
const PORT = 5000;
const WebSocket = require("ws");

const wsServer = new WebSocket.Server({
    port: PORT
})

wsServer.on("connection",function(socket)
{
    console.log("Connected");
    wsServer.clients.forEach(function(client){
        client.send("Connection Established");
    })

    socket.on("message",function(msg)
    {
        console.log("Recived message is: "+msg);
        wsServer.clients.forEach(function(person){
            person.send("THe Message is: "+msg);
        })
    })
})

//console.debug("This should be working");