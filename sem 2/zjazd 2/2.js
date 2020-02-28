// Write a program that finds the longest palindromic substring of a given string.

'use strict';

const wordsArray = [ 'karakis', 'baerren', 'kajak', 'inni'];

const utils = (() => {
  function findPalindroms (char, index, arr) {
    const endIndex = arr.lastIndexOf(char);
    if ( index !== endIndex ){
      let word = arr.slice(index, endIndex+1);
      let palindrom = word.reverse();
      if (word === palindrom) {
        return word.join('');
      }
    }
  }
  
  function findLongestWord (arr) {
    const sortedArr =  arr.sort( (a,b) => b.length - a.length);
    return sortedArr[0];
  }

  return {
    findPalindroms,
    findLongestWord
  }
})();

class CheckPalindromes {
  constructor( findPalindroms, findLongestWord ){
    this.findPalindroms = findPalindroms;
    this.findLongestWord = findLongestWord;
  }

  checkTheWord (text) {
    const palindromsArr = text.toLowerCase().split("").map(this.findPalindroms);
    return this.findLongestWord(palindromsArr);
  }
}

const checkPalindromes = new CheckPalindromes(utils.findPalindroms, utils.findLongestWord);

const palindroms = wordsArray.map( word => checkPalindromes.checkTheWord(word));
console.log(palindroms);