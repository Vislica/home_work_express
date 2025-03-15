var fs = require('fs').promises;
var path = require('path');

/**
 *
 * @param {string} title
 * @param {number} counter
 * @param {Array<string>} links
 * @returns
 */
function createPage(title, counter, links) {
  return `
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <h1>${title}</h1>
        <p>Просмотров: ${counter}</p>
        ${links.map(link => `<a href="${link}">Ccылка на страницу ${link}</a>`).join(' ')}
      </body>
    </html>
  `
}

/**
 * read json file
 * @param {string} file
 * @returns {Promise<Object>}
 */
function readJson(file) {
  return fs.readFile(path.join(process.cwd(), `${file}.json`), 'utf-8')
    .then(data => JSON.parse(data))
    .catch(() => ({}));
}

/**
 * write json file
 * @param {string} file
 * @param {Object} data
 */

function writeJson(file, data) {
  fs.writeFile(path.join(process.cwd(), `${file}.json`), JSON.stringify(data));
}

module.exports = {createPage, readJson, writeJson};
