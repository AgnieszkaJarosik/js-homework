// Given two strings, write a program that efficiently finds the longest common subsequence.

'use strict';

const first = 'karol';
const second = 'rolki';

const utils = (() => {
  function findSameChar(fn) {
    return function second( word1, word2 ){
      return word1.split('').map( (ch, idx) => {
        const index = word2.indexOf(ch);
        if (index !== -1 && index !== idx) {
          return fn(word1.substring(idx), word2.substring(index));
        } else {
          return 'No subsequence';
        }
      })
    };
  }

  function findSubstr (word1, word2) {
    if (word1 === word2) {
      return word1;
    } else {
      return word1.split('').reduce( (acc, curr, idx) => {
        if (curr === word2[idx]) { acc += curr }
        return acc;
      }, '');
    }
  }

  function findLongestWord (arr) {
    const sortedArr =  arr.sort( (a,b) => b.length - a.length);
    return sortedArr[0];
  }

  return {
    findSameChar,
    findSubstr,
    findLongestWord
  }
})();

class Subsequence {
  constructor(findSubstr, findChar, findLongestWord){
    this.findSubstr = findSubstr;
    this.findChar = findChar;
    this.findLongestWord = findLongestWord;
  }

  findSubstring(word1, word2) {
    const firstFunc = this.findChar(this.findSubstr);
    const substrArr = firstFunc(word1, word2);
    return  this.findLongestWord(substrArr);
  }
}

const finder = new Subsequence( utils.findSubstr, utils.findSameChar, utils.findLongestWord );

console.log(finder.findSubstring(first, second));