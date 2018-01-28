var http = require('http');
var colors = require('colors');

var handlers = require('./handlers'); //wywołanie obsługi handlera

function start() {
  function onRequest(request, response) {
    console.log("Odebrano zapytanie.".green);
    console.log("Zapytanie " + request.url + " odebrane.");

    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    switch (request.url) { //switch rozróżniający zapytania
      case '/':
      case '/start':      //ta sama funkcja dla / i /start
        handlers.welcome(request, response);
        break;
      case '/upload':
        handlers.upload(request, response);
        break;
      case '/show':
        handlers.show(request, response);
        break;
      default:
        handlers.error(request, response);
    }
  }
    //response.end();

  http.createServer(onRequest).listen(8000);

  console.log("Uruchomiono serwer!".green);
}

exports.start = start;