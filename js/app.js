"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("./board");
var prompt = require('prompt');
var pos;
var player;
var b = new board_1.Board();
function getAnother() {
    prompt.get(['position', 'player'], function (err, result) {
        if (err) {
            done();
        }
        else {
            console.log("You entered " + result.position + " for player " + result.player);
            b.click(result.position, result.player);
        }
    });
}
function done() {
    console.log('Done');
}
//server.listen(3000);
// Listen via Express
//app.listen(3000);
//console.log('Listening on port 3000 via Express. Access via http://localhost:3000');
b.init();
prompt.start();
getAnother();
