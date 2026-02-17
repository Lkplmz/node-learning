const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request recived");
  res.end("hola mundo");
});

server.listen(0, () => {
  console.log(`Server abierto en http://localhost:${server.address().port}`);
});
