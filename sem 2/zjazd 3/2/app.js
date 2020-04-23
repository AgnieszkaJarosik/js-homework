'use strict';
const Chessboard = require("./Chessboard");

class Gameplay {
  constructor(board){
    this.board = board;
    this.capture = [];
  }

  playGame(){
    do {
      const newFigure = this.board.addFigure();
      console.log(newFigure);
      this.capture = board.checkForCapture();
    } while(this.capture.length===0)
    this.board.showArr();
    return this.capture;
  }
}

const figures = ['king', 'queen', 'rook', 'bishop', 'knight'];
const board = new Chessboard(figures);
const gameplay = new Gameplay(board);
const game = gameplay.playGame();
console.log(game);