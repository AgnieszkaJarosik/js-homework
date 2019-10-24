//Create a function that returns the sum of all elements passed in array as parameter. 
//Function (array)=>number  ARRAY: [1,6,23,8,4,8,3,7]

// const array = [1,6,23,8,4,8,3,7];

// function calculateSum (arr) {
//   let sum = 0;

//   for (let i=0; i<arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log( calculateSum(array) );


//z reduce
const array = [1,6,23,8,4,8,3,7];

function sumArray (arr) {
  let sum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  })
  return sum;
}

console.log( sumArray(array) );