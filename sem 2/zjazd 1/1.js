// 1. Write a program that prints all prime numbers in given range. Take sub from 1-100.

(function iterateRange () {
  const start = 1;
  const end = 100;
  const primeNumbers = [];

  for (let i=start; i<=end; i++) {
    if (checkIsPrime (i)) {
      primeNumbers.push(i);
    }
  }
  printNumbers (primeNumbers);
})();

function checkIsPrime (num) {
  for (let i=2; i<num; i++) {
    if (num % i === 0) { return false }
  }
  return true;
}

function printNumbers ( numArr = [] ) {
  console.log(numArr.join(' '));
}