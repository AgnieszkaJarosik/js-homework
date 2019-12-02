const dataObjects = require("./Data.json");

function DetailsOfPayent(type, comp, payDate) {
  this.type = type;
  this.company = comp;
  let [day, month, year] = payDate.split("-");
  this.date = new Date(year, month-1, day);
}

function MainEntry(i, id, cost, type, comp, payDate) {
  this.index = i;
  this._id = id;
  this.cost = Number(cost);
  this.detailsOfPayent = new DetailsOfPayent(type, comp, payDate);
}

const mainObjects = dataObjects.map(dataObject => {
  let {index, _id, cost, detailsOfPayent: {Type, company, date}} = dataObject;
  return new MainEntry(index, _id, cost, Type, company, date);
})

const giveData = {
  showCompanyGain(objects){
    const companiesGains = reduceArray(objects, "company");
    return roundPropInObject(companiesGains);
  },
  showSpendingsByTransaction(objects){
    const spendings = reduceArray(objects, "type");
    return roundPropInObject(spendings);
  },
  showSpendingsByYear(objects){
    const spendings = reduceArray(objects, "date", Date.prototype.getFullYear);
    return roundPropInObject(spendings);
  },
  showSpendingsByMonth(objects){
    const spendings = reduceArray(objects, "date", Date.prototype.getMonth);
    return roundPropInObject(spendings);
  },
  showSpendingsByDay(objects){
    const spendings = reduceArray(objects, "date", Date.prototype.getDay);
    return roundPropInObject(spendings);
  }
}

function roundPropInObject(obj) {
  for (let company in obj) {
    obj[company] = Number(obj[company].toFixed(2));
  }
  return obj;
}

function reduceArray(arr, data, callback) {
  return arr.reduce( (acc, curr) => { 
    let value;
    callback ? value = callback.call(curr.detailsOfPayent[data]) : value = curr.detailsOfPayent[data];
    if (value in acc) {
      acc[value] += curr.cost;
    }
    else {
      acc[value] = curr.cost;
    }
    return acc;
  }, {});
}

console.log(giveData.showSpendingsByYear(mainObjects));
console.log(giveData.showCompanyGain(mainObjects));
console.log(giveData.showSpendingsByTransaction(mainObjects));
console.log(giveData.showSpendingsByMonth(mainObjects));
console.log(giveData.showSpendingsByDay(mainObjects));