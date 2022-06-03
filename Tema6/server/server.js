import express from "express";
import { createServer } from "http";
import { disconnect } from "process";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

server.listen(3000, () => {
  console.log(`Server started on port ${3000}`);
});

const serverMatrix = [["", "", ""], ["", "", ""], ["", "", ""]];

io.on("connection", (socket) => {
  console.log(`[SOCKET CONNECTED] ${socket.id}`);
  socket.emit("data", serverMatrix);

  socket.on("feedback", ({ value, selected }) => {
    serverMatrix[selected[0]][selected[1]] = value;
    io.emit("data", serverMatrix);
  });

  socket.on("disconnect", () => {
    console.log(`[SOCKET DISCONNECTED] ${socket.id}`);
    socket.removeAllListeners(); // Optional
  });
});

