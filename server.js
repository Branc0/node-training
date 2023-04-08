const http = require("http");
const port = 3000;

const rotas = {
  "/": "Node Course",
  "/books": "Books section",
  "/authors": "Authors section",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
