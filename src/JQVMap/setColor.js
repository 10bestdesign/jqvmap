JQVMap.prototype.setColor = function (color) {
  for (var code in this.countries) {
    this.countries[code].setFill(color);
    this.countries[code].setAttribute('original', color);
  }
};
