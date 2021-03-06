
export class Board {

    numberOfPlayers: number = 2;
    //winner: number = 1;
    positionsFilled: number = 0;
    playerBadge: object = { 1: 'X', 2: 'O' };

    tiles: string[] = ['-', '-', '-',
                       '-', '-', '-',
                       '-', '-', '-',];
    mapping: {[id: string] : number} =         
            {
                'A1': 0, 'A2': 1, 'A3': 2,
                'B1': 3, 'B2': 4, 'B3': 5,
                'C1': 6, 'C2': 7, 'C3': 8,
            };

    get Mapping() : {[id: string] : number} {
        return this.mapping;
    }
         
    initialize() : void  {        
        this.resetBoard();
        this.reset();
    }

    reset = () => 
    {
        //console.log('Resetting Board..');

        for(var i = 0; i < 9; i++) {
           this.tiles[i] = ' ';
        }
    }

    update = (pos: string, player: number) => {

        // if(!this.isValidInput(pos.toLocaleUpperCase(), player))
        // {
        //     return;
        // }

        let idx = this.mapping[pos.toUpperCase()];
        this.tiles[idx] = this.playerBadge[player];
        this.positionsFilled++;        
        this.drawBoard();
    }

    isValidTile(pos: string) : boolean {
        return (pos in this.Mapping);
    }
    
    // private isValidInput(pos: string, player: number) : boolean {
    //     let isValid = true;

    //     if(this.mapping[pos] == null || this.mapping[pos] !== ' ') {            
    //         console.log(`Illegal Play position ${pos}`);
    //         isValid = false;
    //     }

    //     if(player < 1 && player > 2) {
    //         console.log(`Invalid Player ${player}. Please enter 1 or 1`);
    //         isValid = false;
    //     }

    //     return isValid;
    // }

    // isGameOver() : boolean {

    //     return this.positionsFilled == 9;
    // }

    // private getWinner() : number {

    //     return this.winner;
    // }

    // private endGame() : void {

    //     console.log(`Game Over! Player  `)
    // }

    private drawBoard() {
        let p = this.tiles;
        
        console.log('                     1   2   3');
        console.log('\n');
        console.log(`                A    ${p[0]} | ${p[1]} | ${p[2]} `);
        console.log('                     ------------');
        console.log(`                B    ${p[3]} | ${p[4]} | ${p[5]} `);
        console.log('                     ------------');
        console.log(`                C    ${p[6]} | ${p[7]} | ${p[8]} `);
        console.log('\n');
        console.log(this.mapping);
    }

    private resetBoard() {       
        console.log('                     1   2   3');
        console.log('\n');
        console.log(`                A      |   |  `);
        console.log('                     ---------');
        console.log('                B      |   |  ');
        console.log('                     ---------');
        console.log('                C      |   |  ');
        console.log('\n');
    }    
    
}