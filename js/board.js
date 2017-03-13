"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = (function () {
    function Board() {
        var _this = this;
        this.numberOfPlayers = 2;
        this.winner = 1;
        this.positionsFilled = 0;
        this.playerBadge = { 1: 'X', 2: 'O' };
        this.positions = ['-1', '-1', '-1',
            '-1', '-1', '-1',
            '-1', '-1', '-1',];
        this.mapping = {
            'A1': 0, 'A2': 1, 'A3': 2,
            'B1': 3, 'B2': 4, 'B3': 5,
            'C1': 6, 'C2': 7, 'C3': 8,
        };
        this.reset = function () {
            console.log('Resetting Board..');
            for (var i = 0; i < 9; i++) {
                _this.positions[i] = ' ';
            }
        };
        this.update = function (pos, player) {
            if (!_this.isValidInput(pos.toLocaleUpperCase(), player)) {
                return;
            }
            var idx = _this.mapping[pos.toUpperCase()];
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
        var isValid = true;
        if (this.mapping[pos] == null) {
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
        console.log('                     1   2   3');
        console.log('\n');
        console.log("                A    " + p[0] + " | " + p[1] + " | " + p[2] + " ");
        console.log('                     ------------');
        console.log("                B    " + p[3] + " | " + p[4] + " | " + p[5] + " ");
        console.log('                     ------------');
        console.log("                C    " + p[6] + " | " + p[7] + " | " + p[8] + " ");
        console.log('\n');
    };
    Board.prototype.resetBoard = function () {
        console.log('                     1   2   3');
        console.log('\n');
        console.log("                A      |   |  ");
        console.log('                     ---------');
        console.log('                B      |   |  ');
        console.log('                     ---------');
        console.log('                C      |   |  ');
        console.log('\n');
    };
    return Board;
}());
exports.Board = Board;
