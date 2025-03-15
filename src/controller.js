var { readJson, writeJson, createPage, checkUndefined } = require("./utils");

var readCounter = () => readJson('counter');
var writeCounter = (counter) => writeJson('counter', counter);

class Controller {
  getHome(req, res) {
    readCounter().then((counter) => {
      counter['/'] = typeof counter['/'] != 'undefined' ? counter['/'] + 1 : 1;
      res.send(
        createPage('Корневая страница', counter['/'], ['/about'])
      );
      return counter
    }).then((counter) => {
      writeCounter(counter);
    });
  }

  getAbout(req, res) {
    readCounter().then((counter) => {
      counter['/about'] = typeof counter['/about'] != 'undefined' ? counter['/about'] + 1 : 1;
      res.send(
        createPage('Страница about', counter['/about'], ['/'])
      );
      return counter
    }).then((counter) => {
      writeCounter(counter);
    });
  }

  get404(req, res) {
    readCounter().then((counter) => {
      counter['/404'] = typeof counter['/404'] != 'undefined' ? counter['/404'] + 1 : 1;
      res.send('404');
      return counter
    }).then((counter) => {
      writeCounter(counter);
    });
  }
}



module.exports = new Controller();
