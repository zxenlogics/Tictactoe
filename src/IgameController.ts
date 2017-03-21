interface GameController
{

    initialize(): void;
    updateBoard(title: string, player: number) : void;
    isValidInput(pos: string, player: number) : boolean
}