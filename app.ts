import { Board } from "./board";

//var brd = require('./js/board.js');

//var b = brd();

//var http = require("http");

//var server = http.createServer();





//server.listen(3000);

// Listen via Express
//app.listen(3000);
//console.log('Listening on port 3000 via Express. Access via http://localhost:3000');
let b = new Board();

b.init();
b.click('A1', '1');
