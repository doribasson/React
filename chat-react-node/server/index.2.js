const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

io.on("connection", socket => {
  console.log(socket.conn.server.clientsCount + "user connected");
  //   console.log(socket.server.engine.clientsCount + "user connected");
  //   console.log(io.engine.clientsCount + "user connected");
  let userCount = socket.conn.server.clientsCount;
  let userLeft = socket.conn.server.clientsCount - 1;
  //   socket.emit("your id", socket.id);

  io.emit("userCount", userCount);

  socket.on("send message", body => {
    io.emit(message, body);
  });

  socket.on("disconnect", () => {
    console.log("user desconnected", userLeft);
    io.emit("update", userLeft);
  });
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`server started on porn ${PORT}`));
