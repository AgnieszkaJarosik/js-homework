// 5) Choose longest string from the array. 
// [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]

let stringArray = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];
let strLenght = 0;
let longest = '';

for(let i=0; i<stringArray.length; i++){
  if(stringArray[i].length > strLenght) {
    strLenght = stringArray[i].length;
    longest = stringArray[i];
  }
}

console.log(longest);