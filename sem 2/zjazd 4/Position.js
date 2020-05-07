class Position {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}

class PositionsFactory {
  setPositions(arr=[]){
    const pos = [];
    let index = 0;
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr[i].length; j++, index++){
        pos[index] = new Position(i,j);
      }
    }
    return pos;
  }
}

module.exports = {
  PositionsFactory
}