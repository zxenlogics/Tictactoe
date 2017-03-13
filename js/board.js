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
        this.mapping = {
            'A1': 0, 'A2': 1, 'A3': 2,
            'B1': 3, 'B2': 4, 'B3': 5,
            'C1': 6, 'C2': 7, 'C3': 8,
        };
        this.reset = function () {
            console.log('Reset Board');
            for (var i = 0; i < 9; i++) {
                _this.positions[i] = '';
            }
        };
        this.click = function (pos, player) {
            if (!_this.mapping[pos] == null) {
                console.log("Illegal Play position " + pos);
                return;
            }
            if (player !== '1' && player !== '2') {
                console.log("Invalid Player " + player);
                return;
            }
            var idx = _this.mapping[pos];
            _this.positions[idx] = player;
            if (_this.isGameOver(pos, player)) {
                _this.endGame();
            }
            _this.drawBoard();
        };
    }
    Board.prototype.init = function () {
        this.resetBoard();
        this.reset();
    };
    Board.prototype.isGameOver = function (pos, player) {
        return false;
    };
    Board.prototype.getWinner = function () {
        return this.winner;
    };
    Board.prototype.endGame = function () {
        console.log("Game Over! Player  ");
    };
    Board.prototype.drawBoard = function () {
        var a1 = 'X';
        console.log('                     A   B   C');
        console.log('\n');
        console.log("                1    " + a1 + " |   |  ");
        console.log('                     ---------');
        console.log('                2      |   |  ');
        console.log('                     ---------');
        console.log('                3      |   |  ');
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
