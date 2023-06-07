const { Buffer } = require('node:buffer');
const { send500 } = require('./send500');
const Storage = require('../lib/Storage');
const { getTemplate } = require('../views/index');

exports.handle = async function handle(req, res) {
  try {
    const list = Storage.getAll();
    const template = await getTemplate();


    console.log(JSON.stringify({ list }));


    const content = template({ list });
    const contentLength = Buffer.byteLength(content);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', contentLength);
    res.write(content);
    res.end();
  } catch (error) {
    send500(error, res);
  }
}
