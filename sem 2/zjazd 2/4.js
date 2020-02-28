// Write a code that multiplies two matrices together. Dimension validation required.

'use strict';
const first = [ [2, 1, 3],
                [-1, 4, 0]];
const second = [ [1, 3, 2],
                 [-2, 0, 1],
                 [5, -3, 2]];

// const first = [ [1, 0, 2],
//                 [-1, 3, 1] ];
// const second = [ [3, 1],
//                  [2, 1],
//                  [1, 0] ];

const utils = (() => {
  function validateMatrices (first, second) {     //pierwsza macierz ma mieć tyle kolumn co druga wierszy
    if (first[0].length === second.length) { return true }
    else { return false };
  }

  function calcItem(arr2) {
    return function reducer (sum, item, idx){
      return sum += item * arr2[idx];
    }
  }

  function iterateColumn (arr, columnNr) {  
    return arr.map( row => row[columnNr] );
  }

  return {
    validateMatrices,
    calcItem,
    iterateColumn
  }
})();

class MultiRowByColumn {
  constructor(iterateColumn, calcItem){
    this.iterateColumn = iterateColumn;
    this.calcItem = calcItem;
  }

  multiplyItem(row, arr2, colNr){
    const column = this.iterateColumn(arr2, colNr);  
    return row.reduce( this.calcItem(column), 0);
  }
}

class MultiplyMatrices {
  constructor(multiItem, validateMatrices){
    this.multiItem = multiItem;
    this.validateMatrices = validateMatrices;
  }

  multiply(first, second) {
    if ( this.validateMatrices(first, second) ){
      const resultMatrice = [[],[]];
      first.forEach( (row, idx) => {  
        for (let i=0; i<second[0].length; i++){   
          resultMatrice[idx].push(this.multiItem(row, second, i));
        }
      });
      return resultMatrice;
    } else {
      return 'Matrices cannot be multiplied';
    }
  }
}

const multiRowByColumn = new MultiRowByColumn(utils.iterateColumn, utils.calcItem);

const multiplyMatries = new MultiplyMatrices(
  multiRowByColumn.multiplyItem.bind(multiRowByColumn),
  utils.validateMatrices
)
const res = multiplyMatries.multiply(first, second);

res.forEach( row => {
  console.log(row);
})