"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = (function () {
    function Board() {
        var _this = this;
        this.numberOfPlayer = 2;
        this.winner = -1;
        this.positionsFilled = 0;
        this.positions = ['-1', '-1', '-1',
            '-1', '-1', '-1',
            '-1', '-1', '-1',];
        this.mapping = {
            'A1': 0, 'A2': 1, 'A3': 2,
            'B1': 3, 'B2': 4, 'B3': 5,
            'C1': 6, 'C2': 7, 'C3': 8,
        };
        this.playerBadge = { 1: 'X', 2: 'O' };
        this.reset = function () {
            console.log('Resetting Board..');
            for (var i = 0; i < 9; i++) {
                _this.positions[i] = '';
            }
        };
        this.updateBoard = function (pos, player) {
            if (!_this.isValidInput(pos, player)) {
                return;
            }
            var idx = _this.mapping[pos];
            _this.positions[idx] = _this.playerBadge[player];
            _this.positionsFilled++;
            if (_this.isGameOver()) {
                _this.endGame();
            }
            _this.drawBoard();
        };
    }
    Board.prototype.init = function () {
        this.resetBoard();
        this.reset();
    };
    Board.prototype.isValidInput = function (pos, player) {
        var isValid = false;
        if (!this.mapping[pos] == null) {
            console.log("Illegal Play position " + pos);
            isValid = false;
        }
        if (player < 1 && player > 2) {
            console.log("Invalid Player " + player + ". Please enter 1 or 1");
            isValid = false;
        }
        return isValid;
    };
    Board.prototype.isGameOver = function () {
        return this.positionsFilled == 9;
    };
    Board.prototype.getWinner = function () {
        return this.winner;
    };
    Board.prototype.endGame = function () {
        console.log("Game Over! Player  ");
    };
    Board.prototype.drawBoard = function () {
        var p = this.positions;
        console.log('                     A   B   C');
        console.log('\n');
        console.log("                1    " + p[0] + " | " + p[1] + "  | " + p[2] + " ");
        console.log('                     ---------');
        console.log("                2    " + p[3] + " | " + p[4] + "  | " + p[5] + " ");
        console.log('                     ---------');
        console.log("                2    " + p[6] + " | " + p[7] + "  | " + p[8] + " ");
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
