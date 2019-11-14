// 4) Given an array of objects, for each object call operation() function in context of next object. 
// If object is last, got back to start of the array for operation function. In loop;

const objectsArray = [
  {
      x: 1,
      y: 'object one value',
      operation: function () {
        return 'object one prafix ' + this.x + ' ' + this.y;
      } 
  },
  {
      x: 2,
      y: 'object two value',
      operation: function () {
        return 'object two prefix ' + this.x + ' ' + this.y;
      } 
  },
  {
      x: 3,
      y: 'object three value',
      operation: function () {
        return 'object three prefix ' + this.x + ' ' + this.y;
      } 
  },
];

objectsArray.forEach( (object, id, array) => {
  let nextId = (id+1) % array.length;

  console.log(object.operation.call(array[nextId]));
});

