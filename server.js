const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Version 2.0 - Green deployment successful\n');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
