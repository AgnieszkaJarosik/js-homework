// Create a function that returns given array in reverse order. // no build in functions 

const array = [1,6,23,8,4,8,3,7];

function reverseArr (arr) {
  for (let i=0; i<(arr.length/2); i++) {
    let lastIndex = arr.length-1-i;

    let helper = arr[i];
    arr[i] = arr[lastIndex];
    arr[lastIndex] = helper;
  }
  return arr;
}

console.log(reverseArr(array));