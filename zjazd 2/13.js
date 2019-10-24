// Create a function that take two numbers and return the object with 4 fields. 
// Result on 4 basic arithmetic operations. 

function calculateNumbers (x,y) {
  return {
    suma: x+y,
    różnica: x-y,
    iloraz: x*y,
    iloczyn: x/y
  }
}

console.log(calculateNumbers(1,5));