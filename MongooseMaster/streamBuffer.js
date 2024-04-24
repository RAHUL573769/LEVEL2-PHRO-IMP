const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Hello From Raw Js");
});
server.listen(5000, () => {
  console.log("Server Listening on Port");
});
