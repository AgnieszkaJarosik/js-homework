//3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
    
// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// let oddSum = 0;

// for (let i=0; i<array.length; i++) {
//   if( array[i] % 2 !== 0) {
//     oddSum += array[i]; 
//   }
// }

// console.log(oddSum);

//Iloczyn logiczny zwraca expr1 jeśli wartość ta może być przekonwertowana na false, 
//w przeciwnym razie zwraca expr2.
//Short-circuit.
//If the first operand is false JS will short-circuit and not
//even look at second operand

let array = [1,6,23,8,4,98,3,7,3,98,4,98];
let oddSum = 0;

for (let i=0; i<array.length; i++) {
  array[i] % 2 !== 0  && (oddSum += array[i]); 
}

console.log(oddSum);