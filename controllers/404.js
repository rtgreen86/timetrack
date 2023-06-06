exports.handle = function handle(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('Not found.');
  res.end();
}
