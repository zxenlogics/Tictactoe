"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = (function () {
    function Board() {
        var _this = this;
        this.numberOfPlayer = 2;
        this.winner = -1;
        this.positions = ['-1', '-1', '-1',
            '-1', '-1', '-1',
            '-1', '-1', '-1',];
        this.reset = function () { return console.log('Reset Board'); };
        this.click = function (pos, player) {
            if (!_this.mapping.has(pos)) {
                console.log("Illegal Play position " + pos);
                return;
            }
            if (player !== '1' && player !== '2') {
                console.log("Invalid Player " + player);
                return;
            }
            var idx = _this.mapping.get(pos);
            _this.positions[idx] = player;
            if (_this.isGameOver(pos, player)) {
                _this.endGame();
            }
        };
    }
    // mapping: Map<string, number> =  new Map<string, number>();
    /**
    {
        "A1": 0, "A2": 1, "A3": 2,
        "A4": 3, "A5": 4, "A6": 5,
        "A17": 6, "A8": 7, "A9": 8,
    }
     */
    Board.prototype.init = function () {
        this.resetBoard();
        //for(var i = 0; i < 9; i++) {
        //  this.mapping.set(`A{i++}`, i);
        //}
    };
    Board.prototype.isGameOver = function (pos, player) {
        return true;
    };
    Board.prototype.getWinner = function () {
        return this.winner;
    };
    Board.prototype.endGame = function () {
        console.log("Game Over! Player  ");
    };
    Board.prototype.drawBoard = function () {
        var a1 = this.mapping.get("A1");
        console.log('                     A   B   C');
        console.log('\n');
        console.log("                1    " + a1 + " | x | x");
        console.log('                     ---------');
        console.log('                2    0 | x | 0');
        console.log('                     ---------');
        console.log('                3    x | x | x');
        console.log('\n');
    };
    Board.prototype.resetBoard = function () {
        console.log('                     A   B   C');
        console.log('\n');
        console.log("                1      |   |  ");
        console.log('                     ---------');
        console.log('                2      |   |  ');
        console.log('                     ---------');
        console.log('                3      |   |  ');
        console.log('\n');
    };
    return Board;
}());
exports.Board = Board;
