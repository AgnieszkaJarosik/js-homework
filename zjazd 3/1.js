// 1) Create an iffe that returns an object with fields:
// function setValue(),
// function showValue()
// and function reverseValue().
// Calling functions either logs the value or reverse it in an object.
// If value was not provided yet or is empty showValue function is to return information
// about that. Value can be type string or number.
// reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.

const iifeObject = (() => {
  let value = null;

  const showValue = () => {
    if (value) {
      console.log(value);
    } else {
      console.log("Set value first");
    }
  };

  const setValue = val => {
    if (typeof val === "string" || typeof val === "number") {
      value = val;
    } else {
      value = null;
    }
  };

  const reverseValue = () => {
    if (typeof value === "string") {
      let newVal = value.split("");
      newVal.reverse();
      value = newVal.join("");
    } else if (typeof value === "number") {
      value *= -1;
    }
  };

  return {
    showValue,
    setValue,
    reverseValue
  };
})();

iifeObject.showValue();

iifeObject.setValue(11);
iifeObject.reverseValue();
iifeObject.showValue();

iifeObject.setValue("kot");
iifeObject.reverseValue();
iifeObject.showValue();

iifeObject.setValue([1, 2, 3]);
iifeObject.showValue();

iifeObject.value = 1;
iifeObject.showValue();
