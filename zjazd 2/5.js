//Create a function that based on given array returns new array in pattern 
//[a,b,c,d,e,f] -> [a+b, c+d, e+f]   [1,3,4,1,0,3] => [4,5,3] function(array)=>array

const array = [1,6,23,8,4,8,3,7];

function reduceArray (arr) {
  let reducedArr = [];

  for(let i=0; i<=arr.length-2; i+=2) {
    reducedArr.push( arr[i]+arr[i+1] );
  }

  if(arr.length%2 !== 0) {
    reducedArr.push( arr[arr.length-1] );
  }

  return reducedArr;
}

console.log( reduceArray(array) );