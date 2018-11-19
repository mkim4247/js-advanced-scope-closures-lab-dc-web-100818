function produceDrivingRange(range) {
  return function(start, end) {
    let blocks = Math.abs(parseInt(start) - parseInt(end))
    if (blocks > range) {
      return `${blocks - range} blocks out of range`
    }
    else if (blocks < range) {
      return `within range by ${range - blocks}`
    }
  }
}

function produceTipCalculator(percent){
  return function(value) {
    return value * percent
  }
}


function createDriver(){
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId
    }
  }
}
