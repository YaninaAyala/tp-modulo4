import net from "net";
import { PORT } from "./constants";
import { dollars } from "./models/dolares"

const server = net.createServer();
server.on("connection", (socket) => {
  socket.on("data", (message) => {
    const clientMessage = message.toString();
    const objectJs = JSON.parse(clientMessage);
    // if(message.path == "dollars"){
    // }
    console.log(objectJs);
  });
  socket.write("Hola")
});

server.listen(PORT, () =>
  console.log("servidor escuchando en el puerto " + PORT)
);
