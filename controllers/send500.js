exports.send500 = function send500(error, res) {
  console.error(error);
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.write('Internal Server Error.');
  res.end();
}
