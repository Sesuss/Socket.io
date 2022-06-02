const socket = require("socket.io")(4000, {
    cors: {
      origin: "http://127.0.0.1:5500",
      methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
    }
  });

socket.on("connection", (datos) => {
    console.log(":)")
    datos.on("disconnect",()=>{
        console.log(":(")
    })

    datos.on("newmes",(datos,extra2)=>{
        socket.emit("mensaje",datos,extra2)
    })
})