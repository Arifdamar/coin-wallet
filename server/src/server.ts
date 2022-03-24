import { Api } from "./app";
import { config } from "./config";
import net from "net";

Api.RunApp().then(async (app) => {
  app.listen(config.PORT, () => {
    console.log(`Server is running at ${config.PORT}`);
  });
});

var server = net.createServer();

server.on("connection", (socket) => {
  const remoteAddress = socket.remoteAddress + ":" + socket.remotePort;
  console.log("New client connection", remoteAddress);

  socket.on("data", (data) => {
    console.log("Received " + data.toString() + " from client");
    socket.write(data);
  });
});

server.listen(9000, () => {
  console.log("Listening on port 9000", server.address());
});
