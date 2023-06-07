const path = require('node:path');
const fs = require('node:fs/promises');
const Handlebars = require('handlebars');

let template;

exports.getTemplate = async function getTemplate() {
  if (!template) {
    const templatePath = path.join(__dirname, 'index.html');
    const templateContent = await fs.readFile(templatePath, 'utf8');
    template = Handlebars.compile(templateContent);
  }
  return template;
}
