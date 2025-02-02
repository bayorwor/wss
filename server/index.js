const ws = require("ws");

const server = new ws.Server({ port: 3000 });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    const buffer = Buffer.from(message);

    console.log("====================================");
    console.log(buffer.toString());
    console.log("====================================");
    socket.send(`${message}`);
  });
});
