// 8) Calculate average value of items at even indexes. 
// Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

let array = [1,6,23,8,4,98,3,7,3,98,4,98];
let evenIndexSum = 0;
let indexesSum = 0;

for(let i=1; i<array.length; i++) {
  if( i % 2 === 0 ) {
    indexesSum ++;
    evenIndexSum += array[i];
  }
} 

console.log( evenIndexSum/indexesSum );