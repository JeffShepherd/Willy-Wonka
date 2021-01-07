
class Willy {
  constructor(lastName, oompas) {
    this.name = `Willy ${lastName}`;
    this.oompaLoompas = oompas || 0;
  }
  punishKid(factoryTourKids, name) {
    var newArr = factoryTourKids;
    for(var i = 0; i < newArr.length; i++) {
      if (newArr[i].name === name) {
        newArr.splice(i,1);
        return newArr;
      }
    }
    return "Onward!!"
  }
blastOff(kidArr) {
  var arr = kidArr;
  if(arr.length < 2 && arr[0].name === 'Charlie') {
    return "Go ahead Charlie, press the button"
  } else if(arr.length > 1 ){
    return "I can't give my factory to more than one person!"
  }
}


}


module.exports = Willy;
