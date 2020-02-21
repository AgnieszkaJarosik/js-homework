// 4. Write a class that prints the list of the first n Fibonacci numbers. 

class FibonacciSequence {
  _fibonacciSeries;

  get fibonacciSeries () {
    return this._fibonacciSeries;
  }

  set fibonacciSeries (num) { 
    this._fibonacciSeries = [1];
    for (let i=1; i<num; i++) {
      const nextFibonacciNum = sum(...giveLastTwoNum(this._fibonacciSeries));
      this._fibonacciSeries.push(nextFibonacciNum);
    }
  }
}

const fibonacci = new FibonacciSequence();
fibonacci.fibonacciSeries = 10;
console.log(fibonacci.fibonacciSeries);

function sum (a, b=0) {
  return a+b;
}

function giveLastTwoNum (arr) {
  return [arr[arr.length-1], arr[arr.length-2]];
}