
class Board {
    numberOfPlayer: number = 2;
    winner: number = -1;
    positions: string[] = ['-1', '-1', '-1',
                           '-1', '-1', '-1',
                           '-1', '-1', '-1',];
   // mapping: Map<string, number> =  new Map<string, number>();
    
    
    /**
    {
        "A1": 0, "A2": 1, "A3": 2,
        "A4": 3, "A5": 4, "A6": 5,
        "A17": 6, "A8": 7, "A9": 8,
    }
     */
    
    init() : void  {        
        this.resetBoard();

        //for(var i = 0; i < 9; i++) {
          //  this.mapping.set(`A{i++}`, i);
        //}
    }

    reset = () => console.log('Reset Board');

    click = (pos: string, player: string) => {

            if(!this.mapping.has(pos)) {            
                console.log(`Illegal Play position ${pos}`);
                return;
            }

            if(player !== '1' && player !== '2') {
                console.log(`Invalid Player ${player}`);
                return;
            }

            let idx = <number>this.mapping.get(pos);
            this.positions[idx] = player;

            if(this.isGameOver(pos, player))
            {
                this.endGame();
            }
    }

    private isGameOver(pos: string, player: string) : boolean {

        return true;
    }

    private getWinner() : number {

        return this.winner;
    }

    private endGame() : void {

        console.log(`Game Over! Player  `)
    }

    private drawBoard() {
        let a1 = this.mapping.get("A1");

        console.log('                     A   B   C');
        console.log('\n');
        console.log(`                1    ${a1} | x | x`);
        console.log('                     ---------');
        console.log('                2    0 | x | 0');
        console.log('                     ---------');
        console.log('                3    x | x | x');
        console.log('\n');
    }

    private resetBoard() {       
        console.log('                     A   B   C');
        console.log('\n');
        console.log(`                1      |   |  `);
        console.log('                     ---------');
        console.log('                2      |   |  ');
        console.log('                     ---------');
        console.log('                3      |   |  ');
        console.log('\n');
    }    
    
}

export { Board }