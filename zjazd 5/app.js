const process = require('process');
const { Soldier } = require('./soldier');

const { argv: [ , ,nrOfSoldiers] } = process;

const initializeArray = (nr = 7) => {
  const arr = [];
  for (let i=1; i<=nr; i++) {
    arr.push(new Soldier(i));
  }
  return arr;
}

const soldiersArray = initializeArray(nrOfSoldiers);

while (soldiersArray.length > 1) {
  soldiersArray.forEach((soldier, index, array) => {
    let nextIndex = (index + 1) % array.length;
    // soldier.showMessage.call(array[nextIndex], soldier.nr);
    soldier.showMessage(array[nextIndex].nr);
    array.splice(nextIndex,1);
  });
}

console.log(`${soldiersArray[0].nr} Remains alive`);