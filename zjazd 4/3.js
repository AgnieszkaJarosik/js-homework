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
  showSpendingsByYear (objects) {
    const spendings = objects.reduce( (acc, curr) => { 
      let year = curr.detailsOfPayent.date.getFullYear();
      if (year in acc) {
        acc[year] += curr.cost;
      }
      else {
        acc[year] = curr.cost;
      }
      return acc;
    }, {});

    return roundPropInObject(spendings);
  },
  showCompanyGain(objects){
    const companiesGains = objects.reduce( (acc, curr) => { 
      if (curr.detailsOfPayent.company in acc) {
        acc[curr.detailsOfPayent.company] += curr.cost;
      }
      else {
        acc[curr.detailsOfPayent.company] = curr.cost;
      }
      return acc;
    }, {});

    return roundPropInObject(companiesGains);
  },
  showSpendingsByTransaction(objects){
    const spendings = objects.reduce( (acc, curr) => { 
      if (curr.detailsOfPayent.type in acc) {
        acc[curr.detailsOfPayent.type] += curr.cost;
      }
      else {
        acc[curr.detailsOfPayent.type] = curr.cost;
      }
      return acc;
    }, {});
  
    return roundPropInObject(spendings);
  },
  showSpendingsByMonth(objects){
    const spendings = objects.reduce( (acc, curr) => { 
      let month = curr.detailsOfPayent.date.getMonth();
      if (month in acc) {
        acc[month] += curr.cost;
      }
      else {
        acc[month] = curr.cost;
      }
      return acc;
    }, {});
    
    return roundPropInObject(spendings);
  },
  showSpendingsByDay(objects){
    const spendings = objects.reduce( (acc, curr) => { 
      let day = curr.detailsOfPayent.date.getDay();
      if (day in acc) {
        acc[day] += curr.cost;
      }
      else {
        acc[day] = curr.cost;
      }
      return acc;
    }, {});

    return roundPropInObject(spendings);
  }
}

function roundPropInObject(obj) {
  for (let company in obj) {
    obj[company] = Number(obj[company].toFixed(2));
  }
  return obj;
}


console.log(giveData.showSpendingsByYear(mainObjects));
console.log(giveData.showCompanyGain(mainObjects));
console.log(giveData.showSpendingsByTransaction(mainObjects));
console.log(giveData.showSpendingsByMonth(mainObjects));
console.log(giveData.showSpendingsByDay(mainObjects));