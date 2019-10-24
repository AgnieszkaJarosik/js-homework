// 4) Choose highest and lowest values from the given array.
//    [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

let array = [1,6,23,8,4,98,3,7,3,98,4,98];
let min = array[0];
let max = array[0];

for(let i=0; i<array.length; i++) {
  if (array[i] < min) { min = array[i] };
  if (array[i] > max) { max = array[i] };
}

console.log('Lowest value: ' + min + '\nHighest value: ' + max);