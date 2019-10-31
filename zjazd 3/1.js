// 1) Create an iffe that returns an object with fields: 
// function setValue(), 
// function showValue() 
// and function reverseValue(). 
// Calling functions either logs the value or reverse it in an object. 
// If value was not provided yet or is empty showValue function is to return information
// about that. Value can be type string or number. 
// reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern. 

const iifeObject = (() => {
  let value;

  const showValue = () => {
    if(value) {
      return value;
    } else {
      return 'value not set';
    }
  }

  const setValue = (val) => {
    if (typeof(val)==='string' || typeof(val)==='number') {
      value = val;
    }
  }

  const reverseValue = () => {
    if (typeof(value)==='string') {
      let newVal = value.split('');
      newVal.reverse();
      value = newVal.join('');
    } else if (typeof(value)==='number') {
      value *= (-1);
    } else {
      console.log('Value not set');
    }
  }

  return {
    showValue: showValue,
    setValue: setValue,
    reverseValue: reverseValue
  }
})();

console.log(iifeObject.showValue());
iifeObject.setValue(77)
console.log(iifeObject.showValue());
iifeObject.reverseValue();
console.log(iifeObject.showValue());
iifeObject.value = 1;
console.log(iifeObject.showValue());
iifeObject.setValue('kukułka');
iifeObject.reverseValue();
console.log(iifeObject.showValue());