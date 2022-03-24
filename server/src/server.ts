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

server.listen(1337, "104.16.243.78", () => {
  console.log("Listening on port 1337", server.address());
});
