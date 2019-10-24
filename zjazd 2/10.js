// Create a function that on given array will perform operation of adding or subtracting 
// elements. Operation is to be chosen at random.
// And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)

//  const array = [1,6,23,8,4,8,3,7];

// function addOrSubtrItems (arr) {
//   let sum = arr[0];
  
//   for (let i=1; i<arr.length; i++) {
//     if (Math.random() > 0.5) {
//       sum += arr[i];
//     } else {
//       sum -= arr[i];
//     }
//   }
//   return sum;
// }

// console.log( addOrSubtrItems(array) );

//with reduce

const array = [1,6,23,8,4,8,3,7];

function addOrSubItems (arr) {
  let sum = arr.reduce (function (accumulator, current) {
    if (Math.random() > 0.5) {
      return accumulator + current;
    } else {
      return accumulator - current;
    }
  })
  return sum;
}

console.log(addOrSubItems (array));

