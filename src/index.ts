import net from "net";
import { PORT } from "./constants";
import { allDollars, casaDollar, ventaDollar } from "./controllers/index-controller";

const server = net.createServer();
server.on("connection", (socket) => {
  socket.on("data", async (message) => {
    const clientMessage = message.toString();
    const objectJs = JSON.parse(clientMessage);

    if (objectJs.path == "dollars") {
      const dataDollars = await allDollars();
      const dollarsJson = JSON.stringify(dataDollars);
      socket.write(dollarsJson);
    }
    //console.log(objectJs);
  });
});

server.listen(PORT, () =>
  console.log("servidor escuchando en el puerto " + PORT)
);
