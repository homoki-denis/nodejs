const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my page!");
  } else if (req.url === "/about") {
    res.end("Welcome to my about page");
  } else {
    res.end(`
        <h1>Opps</h1>
        <p>Error, go back to <a href="/">homepage</a></p>
        `);
  }
});

server.listen(5000);
