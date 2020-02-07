class Soldier {
  constructor (nr) {
    this.nr = nr;
  }
  
  showMessage (soldierNr) {
    // console.log(`${soldierNr} Kills ${this.nr}`);
    console.log(`${this.nr} Kills ${soldierNr}`);
  }
}

exports.Soldier = Soldier;