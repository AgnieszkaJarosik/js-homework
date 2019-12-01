// Extend Number type with the reverse() function.
//The function is to reverse the value of the Number on which it was called.

Number.prototype.reverse = function() {
  return this * -1;
};

console.log((-55).reverse());
