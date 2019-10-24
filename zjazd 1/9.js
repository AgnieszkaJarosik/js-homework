//9) With a given start value of 0. Iterate the array and add even items and subtract odd ones. 
//[1,6,23,8,4,98,3,7,3,98,4,98]

let array = [1,6,23,8,4,98,3,7,3,98,4,98];
let sum = 0;

for(let i=0; i<array.length; i++){
  array[i] % 2 === 0 ? sum += array[i] : sum -= array[i];
}

console.log(sum);