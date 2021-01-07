class Kid {
  constructor(name) {
    this.name = (function(x){
      return x.charAt(0).toUpperCase() + x.slice(1)
    }(name))
    this.goldenTicket = false;
  }
  findTicket() {
    this.goldenTicket = true;
  }


}


module.exports = Kid;
