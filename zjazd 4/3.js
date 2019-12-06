const transactionInfo = (function(){
  let transactionsArray = [];

  const setObjects = (filename) => {
      const dataObjects = require(filename);
      
      function DetailsOfPayent(type, comp, payDate) {
        this.type = type;
        this.company = comp;
        let [day, month, year] = payDate.split("-");
        this.date = new Date(year, month-1, day);
      }
      
      function Transaction(i, id, cost, type, comp, payDate) {
        this.index = i;
        this._id = id;
        this.cost = Number(cost);
        this.detailsOfPayent = new DetailsOfPayent(type, comp, payDate);
      }
      
      transactionsArray = dataObjects.map(dataObject => {
        let {index, _id, cost, detailsOfPayent: {Type, company, date}} = dataObject;
        return new Transaction(index, _id, cost, Type, company, date);
      })
  };

  function reduceArray(arr, data, callback) {
    return arr.reduce( (acc, curr) => { 
      let value;
      callback ? value = callback.call(curr.detailsOfPayent[data]) 
               : value = curr.detailsOfPayent[data];
      if (value in acc) {
        acc[value] += curr.cost;
      }
      else {
        acc[value] = curr.cost;
      }
      return acc;
    }, {});
  }

  function roundPropInObject(obj) {
    for (let property in obj) {
      obj[property] = Number(obj[property].toFixed(2));
    }
    return obj;
  }

  function showTransactionsData () {
    return {
      companiesGains: roundPropInObject(reduceArray(transactionsArray, "company")),
      spendingByTransaction: roundPropInObject(reduceArray(transactionsArray, "type")),
      spendingByYear: roundPropInObject(reduceArray(transactionsArray, "date", Date.prototype.getFullYear)),
      spendingByMonth: roundPropInObject(reduceArray(transactionsArray, "date", Date.prototype.getMonth)),
      spendingByDay: roundPropInObject(reduceArray(transactionsArray, "date", Date.prototype.getDay)),
    }
  }

  return {
    setObjects,
    showTransactionsData 
  }
})();

transactionInfo.setObjects("./Data.json");
console.log(transactionInfo.showTransactionsData());