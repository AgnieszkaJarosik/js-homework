// For time of this example remove last element from the given array. Create a function 
// that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

const array = [1,6,23,8,4,8,3];

function reduceArray (arr) {
  let reducedArr = [];

  for(let i=0; i<=arr.length-2; i+=2) {
    reducedArr.push( arr[i]+arr[i+1] );
  }

  if(arr.length%2 !== 0) {
    reducedArr.push( arr[arr.length-1] *= 2 );
  }

  return reducedArr;
}

console.log( reduceArray(array) );