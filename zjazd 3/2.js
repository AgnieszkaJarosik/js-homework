// 2) Create four function definitions. One for every basic math operations and taking two input parameters.
// Create one more function. This function is to return calculation object. This object is to have parameters object field that holds two operation parameters inside(x and y).
// Function field that points to a function with math operation (defined at the beginning). A function setOperation() that sets the field from previous sentence and a Calculate function that makes calculation and returns its value.

const calcObject = (() => {
  let x, y;
  let mathOperation = null;

  const setOperation = (paramX, paramY, operationFn) => {
    if (typeof paramX === "number" && typeof paramY === "number") {
      x = paramX;
      y = paramY;
    } else {
      x = null;
      y = null;
    }

    if (typeof operationFn === "function") {
      mathOperation = operationFn;
    } else {
      mathOperation = null;
    }
  };

  const calculate = () => {
    if (x && y && mathOperation) {
      return mathOperation(x, y);
    } else {
      return "Set parameters first";
    }
  };

  return {
    setOperation,
    calculate
  };
})();

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const multi = (x, y) => x * y;
const div = (x, y) => x / y;

calcObject.setOperation();
console.log(calcObject.calculate());

calcObject.setOperation("", "", div);
console.log(calcObject.calculate());

calcObject.setOperation(4, 4, (x, y) => x + y);
console.log(calcObject.calculate());

calcObject.setOperation(4, 3, multi);
console.log(calcObject.calculate());
