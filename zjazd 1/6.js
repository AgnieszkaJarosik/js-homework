//6) Choose all the indexes on the highest value from the given array. 
//[1,6,23,8,4,98,3,7,3,98,4,98]. 

let array = [1,6,23,8,4,98,3,7,3,98,4,98];
let maxValue = Number.MIN_SAFE_INTEGER;
let maxValuesIndexes = [];

for(let i=0; i<array.length; i++) {
  if (array[i] > maxValue) { 
    maxValue = array[i];
    maxValuesIndexes = [];
    maxValuesIndexes.push(i);
  } else if (array[i] === maxValue) {
    maxValuesIndexes.push(i);
  }
}

console.log(maxValuesIndexes);