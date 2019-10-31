// 3) Create an array (by hand) of objects and call sum() function in context of each one of them.
//  Sum function is to come from this object  
// BaseObject = { X,y, sum: function (){ return this.X+this.y}} 

const objectsArray = [
  {
    x: 1,
    y: 6
  },
  {
    x: 8,
    y: 2
  },
  {
    x: 77,
    y: 9
  },
  {
    x: 13,
    y: 8
  },
  {
    x: 0,
    y: 33
  }
];

const baseObject = { 
  x: 0,
  y: 0,

  sum: function (){ 
    return this.x + this.y;
  }};

  objectsArray.forEach( object => console.log(baseObject.sum.call(object)) );