// 2) Create four function definitions. One for every basic math operations 
// and taking two input parameters. 
// Create one more function. This function is to return calculation object. 
// This object is to have parameters object field that holds two operation parameters 
// inside(x and y).
// Function field that points to a function with math operation (defined at the beginning).
//  A function setOperation() that sets the field from previous sentence 
//  and a Calculate function that makes calculation and returns its value. 

const add = (x, y) => x+y;
const sub = (x, y) => x-y;
const multi = (x, y) => x*y;
const div = (x, y) => x/y;

const calcObject = (() => {
  let x, y;
  let mathOperation = function(){}; 

  const setOperation = (paramX, operation,  paramY) => {
    if (typeof(paramX)==='number' && typeof(paramY)==='number'){
      x = paramX;
      y = paramY;
    } else {
      return 'podaj liczby';
    }

    if (typeof(operation)==='string'){
      switch(operation) {
        case '+':
          mathOperation = add;
          break;
        case '-':
          mathOperation = sub;
          break;
        case '*':
          mathOperation = multi;
          break;
        case '/': 
          mathOperation = div;
          break;
        default:
          console.log('Ustaw działanie');
          break;
      }
    }
  }
  
  const calculate = () => {
    if(x && y && mathOperation) {
      return mathOperation(x, y);
    } else {
      return 'Ustaw parametry działania';
    }
    
  }

  return {
    setOperation: setOperation,
    calculate: calculate
  }
})();

calcObject.setOperation();
console.log(calcObject.calculate());

calcObject.setOperation(4,2,4);
console.log(calcObject.calculate());

calcObject.setOperation(4,'*',3);
console.log(calcObject.calculate());