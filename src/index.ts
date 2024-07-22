import net from "net";
import { PORT } from "./constants";
import { Messages } from "./utils/messages";
import {
  allDollars,
  casaDollar,
  ventaDollar,
} from "./controllers/index-controller";

const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", async (message) => {
    const clientMessage = message.toString();
    const objectJs = JSON.parse(clientMessage);

    if (objectJs.path == "dollars") {
      const dataAllDollars = await allDollars();
      const dollarsJson = JSON.stringify(dataAllDollars);
      socket.write(dollarsJson);
    } else if (objectJs.path == "dollars/casa") {
      //--->NO FUNCIONÓ
      const dataDollarCasa = await casaDollar(objectJs.casa);
      const dollarsJson = JSON.stringify(dataDollarCasa);
      socket.write(dollarsJson);
    } else if (objectJs.path == "dollars/venta") {
      //--->NO FUNCIONÓ
      const dataAllDollars = await ventaDollar(objectJs.venta);
      const dollarsJson = JSON.stringify(dataAllDollars);
      socket.write(dollarsJson);
    } else {
      const message = JSON.stringify(Messages.NOT_FOUND);
      return message;
    }
    const fs = require("fs");
    function createFile(objectJs) {
      const dataTransformada = JSON.stringify(objectJs);
      fs.writeFileSync("./database/db.json", dataTransformada);
    }
    createFile({objectJs}); //-----> NO FUNCIONA, GRABA EL PATH Y DEBERÍA GRABAR EL RESULTADO DE TRAER ESE PATH
  });
});

server.listen(PORT, () =>
  console.log("servidor escuchando en el puerto " + PORT)
);