import net from "net";
const client = net.createConnection({ port: 3000 });

client.on("connect", ()=>{
    //const mensaje = {path: "dollars"}
    //const mensaje = {path: "dollars", casa: "bolsa"}
    //const mensaje = {path: "dollars", venta: 1445}

    const msg = {
        path: "dollars"
    }
    const message = JSON.stringify(msg)
    client.write(message);
});

client.on("data", (serverMessage: string) => {
    const msg = serverMessage.toString();
    console.log(msg);
    
})