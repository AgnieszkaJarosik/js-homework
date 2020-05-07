const { getRandonBoard } = require("./board");
const { PositionsFactory } = require("./Position");
const { equal } = require("./utils");
const PlayersFactory = require("./Player");

const playersFactory = new PlayersFactory();
const posFactory = new PositionsFactory();

class Game {
  constructor(){
    this.board = getRandonBoard();
    this.allowedPos = posFactory.setPositions(this.board);
    this.players = playersFactory.getPlayers(Math.floor(Math.random() * 4 + 2));
  }

  play(){
    while(this.allowedPos.length > 0){
      this.players.map( player => {
        if(this.allowedPos.length<1) return;
    
        const pos1 = player.firstTry(this.allowedPos);
        const card1 = this.board[pos1.x][pos1.y];
        player.reverseCard(card1);
  
        const pos2 = player.secondTry(this.allowedPos);
        const card2 = this.board[pos2.x][pos2.y];
        player.reverseCard(card2);
  
        if(card1===card2){
          player.givePoint(card1,pos1, card2,pos2);
          this.allowedPos = this.allowedPos.filter( pos => !equal(pos, pos1) && !equal(pos, pos2));
        }   
      })
    }
    this.showResult();
  }

  showResult(){
    console.log(this.board);
    this.players.forEach( player => player.showScore());
  }
}

module.exports = Game;