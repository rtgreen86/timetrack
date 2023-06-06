const http = require('node:http');

require('./lib/TestData');

const index = require('./controllers/index');
const notFound = require('./controllers/404');

const server = http.createServer((req, res) => {
  if (req.url === '/') index.handle(req, res);
  else notFound.handle(req, res);
});

server.listen(3000, () => {
  console.log(`Server starts at http://localhost:${server.address().port}/`);
});
