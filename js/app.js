"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("./board");
//var brd = require('./js/board.js');
//var b = brd();
//var http = require("http");
//var server = http.createServer();
//server.listen(3000);
// Listen via Express
//app.listen(3000);
//console.log('Listening on port 3000 via Express. Access via http://localhost:3000');
var b = new board_1.Board();
b.init();
b.click('A1', '1');
