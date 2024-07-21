import net from "net";
const client = net.createConnection({ port: 3000 });

client.on("connect", ()=>{
    const msg = {path: "dollars"}
    //const msg = {path: "dollars/casa", casa: "bolsa"}
    //const msg = {path: "dollars/venta", venta: 1445}

    const message = JSON.stringify(msg)
    client.write(message);
});

client.on("data", (serverMessage: string) => {
    const msg = serverMessage.toString();
    const msgJs = JSON.parse(msg)
    console.log(msgJs);    
})