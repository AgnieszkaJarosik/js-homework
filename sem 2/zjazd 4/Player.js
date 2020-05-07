const { equal } = require("./utils");

class Player {
  constructor(){
    this.memory = {};
    this.actual = {
      card: null,
      pos: null
    }
    this.score = 0;
    this.cards = [];      // zebrane pary kart
  }

  firstTry(allowedPos){
    if(this.actual.card){
      if(!this.memory[this.actual.card]){
        this.addToMemory(this.actual.card, this.actual.pos);
      }
    }
    return this.getRandomPos(allowedPos);
  }

  secondTry(allowedPos){
    const myPos = allowedPos.filter( pos => !equal(pos,this.actual.pos));   

    if(this.memory[this.actual.card] && !equal(this.memory[this.actual.card], this.actual.pos)){
        return this.memory[this.actual.card];
    } else {
        this.addToMemory(this.actual.card, this.actual.pos);
        return this.getRandomPos(myPos);
    }
  }

  getRandomPos(allowedPos){
    const idx = Math.floor(Math.random() * allowedPos.length);
    const newPos = allowedPos[idx];
    this.actual.pos = newPos;
    return newPos;
  }

  reverseCard(card){
    this.actual.card = card;
  }

  addToMemory(card, pos){
    this.memory[card] = pos;
  }

  givePoint(card1, pos1, card2, pos2){
    this.score++;
    this.cards.push({card:card1, pos:pos1});
    this.cards.push({card:card2, pos:pos2});
  }

  showScore(){
    console.log(`Score: ${this.score}`);
    console.log(this.cards);
  }
}

class PlayersFactory {
  getPlayers(num){
    const players = [];
    for(let i=0; i<num; i++){
      players.push(new Player());
    }
    return players;
  }
}

module.exports = PlayersFactory;