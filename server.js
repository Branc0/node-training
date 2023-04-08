const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("My first node app");
});

server.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
