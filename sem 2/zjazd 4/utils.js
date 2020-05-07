module.exports = utils = (() => {
  function equal(obj1, obj2){
    let same = true;
    Object.keys(obj1).map( key => {
      if(!(obj1[key] === obj2[key])){
        same=false;
      } 
    })
    return same;
  }

  return {
    equal
  }
})();