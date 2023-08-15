const http = require("http");
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.url}`);
  if (req.url == "/about") {
    fs.readFile("./about.html", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("Server Error");
        return;
      }
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    });
  } else if (req.url == "/contact-me") {
    fs.readFile("./contact-me.html", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("Server Error");
        return;
      }
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    });
  } else if (req.url == "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("Server Error");
        return;
      }
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("./404.html", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("Server Error");
        return;
      }
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    });
  }

});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
