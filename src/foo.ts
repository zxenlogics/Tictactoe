/// <reference path="../node_modules/@types/node/index.d.ts" />

import { Board } from './board';
import * as readline from 'readline';

let pos: string;
let player: string;
let board = new Board();

board.initialize();

var r = readline.createInterface(process.stdin, process.stdout);
//var r1 = readline.createInterface(process.stdin, process.stdout);

console.log('Enter position and player e.g. for Tile B3 and Player 2 enter: B3 2');


r.setPrompt('Enter your play >> ')
r.prompt();
r.on('line', line => {
    let p = line.trim().split(' ');
    let pos = p[0];
    let player : number = <number> p[1];

    if(p[0] == 'end'.toLowerCase())
    {
        r.close();
    }
    else {
        console.log(`Tile: ${pos},  Player: ${player}`);
        board.update(pos, player);
        r.prompt();
    }

}).on('close', _ => {
    process.exit(0);
});