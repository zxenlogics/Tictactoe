/// <reference path="../node_modules/@types/node/index.d.ts" />

import * as readline from 'readline';
import { Board } from "./board";
import * as prompt from 'prompt';

//const prompt = require('prompt');


let pos: string;
let player: string;
let board = new Board();

let promptProperties = [
    {
        name: 'position',
        //validator: /^[a-zA-Z\s\-]+$/,
        //warning: 'Invalid play position input'
    },
    {
        name: 'player',
        validator: /^[1,2]$/,
        warning: 'Invalid user. Specify 1 or 2'
    }
];

function getAnother() {
    prompt.get(promptProperties, (err, result) => {
       

        if(err) {
            return onErr(err);
        }
        else {
            //console.log(`You entered ${result.position} for player ${result.player}`);
             board.update(result.position, result.player);
        }
    });    
}

function onErr(err) {
    console.log(`An error occured ${err}`);
    return 1;
}



board.initialize();
//while(!b.isGameOver()){}

// Need to be ale to keep the app running to accept input. To be figured out
    prompt.start();
    getAnother();




