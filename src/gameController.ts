/* ----------------------------------------------------------------------------
    GameController.ts
    Handles game logic and uses the Board to render the game interface.

-------------------------------------------------------------------------------*/

import { Board } from "./board";

export class GameController {
    board: Board;
    numberOfPlayers: number = 2;
    winner: number = 1;
    positionsFilled: number = 0;
    playerBadge: object = { 1: 'X', 2: 'O' };

    // tiles: string[] = ['-1', '-1', '-1',
    //                    '-1', '-1', '-1',
    //                    '-1', '-1', '-1',];
    // mapping: object =         
    //         {
    //             'A1': 0, 'A2': 1, 'A3': 2,
    //             'B1': 3, 'B2': 4, 'B3': 5,
    //             'C1': 6, 'C2': 7, 'C3': 8,
    //         };    

    constructor() {

    }

    initialize() : void {
        this.board = new Board();
        this.board.initialize();
    }

    updateBoard(tile: string, player: number) : void {
        if(this.isValidInput(tile.toUpperCase(), player))
        {
            this.board.update(tile.toUpperCase(), player);
        }

        if(this.isGameOver())
        {
            this.endGame();
        }        
    }

    private isValidInput(pos: string, player: number) : boolean {
        let isValid = true;

        if(pos === undefined && pos.length < 1)
        {
            console.log('Tile position is reqired');
            isValid = false;
        }

        if(this.board.mapping[pos] == null || this.board.mapping[pos] !== ' ') {            
            console.log(`Illegal Play position ${pos}`);
            isValid = false;
        }

        if(player < 1 && player > 2) {
            console.log(`Invalid Player ${player}. Please enter 1 or 1`);
            isValid = false;
        }

        return isValid;
    }

    private isGameOver() : boolean {

        return this.board.positionsFilled == 9;
    }

    private getWinner() : number {

        return this.winner;
    }

    private endGame() : void {

        console.log(`Game Over! Player  `)
    }    

}