// Write function that translates a text to Pig Latin and back. 

const engText = 'The quick brown fox';
const pigLatinText = 'heTay uickqay rownbay oxfay';

(function translateToPigLatin (text) {
  const wordsArray = text.split(' ');
  const arrInPigLatin = wordsArray.map( word => addAy(moveFirstToEnd(word)) );
  const textInPigLatin = arrInPigLatin.join(' ');
  console.log(textInPigLatin);
})(engText);

(function translateToEng (text) {
  const wordsArray = text.split(' ');
  const arrInEng = wordsArray.map( word => moveLastToFront(removeAy(word)) );
  const textInEng = arrInEng.join(' ');
  console.log(textInEng);
})(pigLatinText);

function moveFirstToEnd (word) {
  const newWord = word.substr(1);
  return newWord + word[0];
}

function moveLastToFront (word) {
  const newWord = word.slice(0, word.length-1);
  return word[word.length-1] + newWord;
}

function addAy (word) {
  return word + 'ay';
}

function removeAy (word) {
  return word.slice(0, word.length-2);
}