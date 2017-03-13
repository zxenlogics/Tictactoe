"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("./board");
var prompt = require('prompt');
var pos;
var player;
var board = new board_1.Board();
var promptProperties = [
    {
        name: 'position',
    },
    {
        name: 'player',
        validator: /^[1,2]$/,
        warning: 'Invalid user. Specify 1 or 2'
    }
];
function getAnother() {
    prompt.get(promptProperties, function (err, result) {
        if (err) {
            return onErr(err);
        }
        else {
            //console.log(`You entered ${result.position} for player ${result.player}`);
            board.update(result.position, result.player);
        }
    });
}
function onErr(err) {
    console.log("An error occured " + err);
    return 1;
}
//server.listen(3000);
// Listen via Express
//app.listen(3000);
//console.log('Listening on port 3000 via Express. Access via http://localhost:3000');
board.init();
//while(!b.isGameOver()){}
prompt.start();
getAnother();
