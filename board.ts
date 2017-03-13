
class Board {
    numberOfPlayer: number = 2;
    winner: number = -1;
    positions: string[] = ['-1', '-1', '-1',
                           '-1', '-1', '-1',
                           '-1', '-1', '-1',];
    mapping: object =         
            {
                'A1': 0, 'A2': 1, 'A3': 2,
                'B1': 3, 'B2': 4, 'B3': 5,
                'C1': 6, 'C2': 7, 'C3': 8,
            };
     
    
    init() : void  {        
        this.resetBoard();
        this.reset();
    }

    reset = () => 
    {
        console.log('Reset Board');

        for(var i = 0; i < 9; i++) {
           this.positions[i] = '';
        }
    }

    click = (pos: string, player: string) => {

            if(!this.mapping[pos] == null) {            
                console.log(`Illegal Play position ${pos}`);
                return;
            }

            if(player !== '1' && player !== '2') {
                console.log(`Invalid Player ${player}`);
                return;
            }

            let idx = this.mapping[pos];
            this.positions[idx] = player;

            if(this.isGameOver(pos, player))
            {
                this.endGame();
            }
            this.drawBoard();
    }

    private isGameOver(pos: string, player: string) : boolean {

        return false;
    }

    private getWinner() : number {

        return this.winner;
    }

    private endGame() : void {

        console.log(`Game Over! Player  `)
    }

    private drawBoard() {
        let p = this.positions;
        

        console.log('                     A   B   C');
        console.log('\n');
        console.log(`                1    ${p[0]} | ${p[1]}  | ${p[2]} `);
        console.log('                     ---------');
        console.log(`                2    ${p[3]} | ${p[4]}  | ${p[5]} `);
        console.log('                     ---------');
        console.log(`                2    ${p[6]} | ${p[7]}  | ${p[8]} `);
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