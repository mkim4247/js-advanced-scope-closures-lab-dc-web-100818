//this function returns another function that will use the range argument within a conditional statement
//the return function will have a start and end arguments
//if end - start < range, return range - (end - start) 
//else end - start > range, return (end - start) - range
function produceDrivingRange (blockRange) {
  return function (first, last) {
    const start = parseInt(first, 10);
    const end = parseInt(last, 10);
    if (end - start < blockRange) {
      return `within range by ${blockRange - (end - start)}`;
    } else {
      return `${(end - start) - blockRange} blocks out of range`;
    }
  };
}

//create a function that takes a floating point argument that returns a function. The arguement will determine the tip percent
//returned function takes the final price as an argument
//create const tip
//return tip = finalPrice * tipPercent
function produceTipCalculator(tipPercent) {
  return function (finalPrice) {
    return finalPrice * tipPercent;
  };
}

function createDriver() {
 
  return class Driver {
    
    constructor(name) {
    this.name = name;
    
      
    }
  };
}