const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

io.on("connection", socket => {
  console.log(socket.client.conn.server.clienCount + "user connected");
  //   socket.emit("your id", socket.id);

  socket.on("send message", body => {
    io.emit("message,body");
  });
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`server started on porn ${PORT}`));
