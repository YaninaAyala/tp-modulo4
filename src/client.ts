import net from "net";
const client = net.createConnection({ port: 3000 });

client.on("connect", () => {
  const msg = { path: "dollars" };
  //const msg = {path: "dollars/casa", casa: "bolsa"}; //--->NO FUNCIONÓ
  //const msg = {path: "dollars/venta", venta: 1445}//--->NO FUNCIONÓ

  const message = JSON.stringify(msg);
  client.write(message);
});

client.on("data", (serverMessage: string) => {
  const msg = serverMessage.toString();
  const msgJs = JSON.parse(msg);
  console.log(msgJs);
});

// const fs = require("fs");
// function createFile(data) {
//     const dataTransformada = JSON.stringify(data)
//     fs.writeFileSync("./database/db.json", dataTransformada)
// }
// createFile({})
