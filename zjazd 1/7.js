// 7) Calculate average value from the given array 
//     for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

let array = [1,6,23,8,4,98,3,7,3,98,4,98];
let evenSum = 0;
let evenCounter = 0;

for(let i=0; i<array.length; i++) {
  if(array[i] % 2 === 0) {
    evenCounter++;
    evenSum += array[i];
  }
}

console.log( evenSum/evenCounter );