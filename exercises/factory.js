


class Factory {
  constructor(willyObject) {
    if(willyObject === undefined) {
      this.name = 'Boring Factory'
    } else if (willyObject.name === 'Willy Wonka') {
      this.name = 'Chocolate Factory';
      this.oompaLoompas = 20 + willyObject.oompaLoompas;
      this.kidsOnTour = [];
    } else {
      this.name = 'Boring Factory';
    }
  }
  addToTour(kid) {
    if(kid.goldenTicket === true && this.kidsOnTour.length < 5) {
      this.kidsOnTour.push(kid);
    } else {
      return `Sorry ${kid}!!`
    }
  }


}


module.exports = Factory;
