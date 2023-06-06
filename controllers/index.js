const { Buffer } = require('node:buffer');
const Storage = require('../lib/Storage');

exports.handle = function handle(req, res) {
  const data = Storage.getAll();
  const content = JSON.stringify(data, null, '  ');
  const contentLength = Buffer.byteLength(content);
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', contentLength);
  res.write(content);
  res.end();
}
