// Create a function that takes a number and return factorial of that number.

function calculateFactorial (i) {
  if(i==1) {
    return 1;
  } else {
    return i * calculateFactorial (i-1);
  }
}
console.log(calculateFactorial(7));