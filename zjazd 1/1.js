//1) From years in array check for leap years [1974, 1900, 1985, 2000]

let yearsArray = [1974, 1900, 1985, 2000];

console.log("Leap years: ");

for (let i=0; i<yearsArray.length; i++) {
  if(yearsArray[i]%4 === 0 && yearsArray[i]%100 !== 0 || yearsArray[i]%400 === 0) {
    console.log(yearsArray[i]);
  }
}