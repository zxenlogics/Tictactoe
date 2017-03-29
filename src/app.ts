/// <reference path="../node_modules/@types/node/index.d.ts" />

//import { Board } from './board';
import { GameController } from './gameController';
import * as readline from 'readline';

//let pos: string;
//let player: string;
//let board = new Board();
let gameController = new GameController();

//board.initialize();
gameController.initialize();

var r = readline.createInterface(process.stdin, process.stdout);
//var r1 = readline.createInterface(process.stdin, process.stdout);

console.log('Enter position and player e.g. for Tile B3 and Player 2 enter: B3 2');


r.setPrompt('Enter your play >> ')
r.prompt();
r.on('line', line => {
    let p = line.trim().split(' ');
    //console.log(`line = ${line}, p = ${p}`);
    let pos = p[0];
    let player : number = <number> p[1];
    //console.log(`p = ${p}, pos = ${pos}, player = ${player}`);

    if(p[0] === 'quit'.toLowerCase())
    {
        r.close();
    }
    else {
        //console.log(`Tile: ${pos},  Player: ${player}`);
        gameController.updateBoard(pos, player);
        r.prompt();
    }

}).on('close', _ => {
    process.exit(0);
});