WorldMap.prototype.selectIndex = function (cc) {
  for (var i = 0; i < this.selectedRegions.length; i++) {
    if (cc === this.selectedRegions[i]) {
      return i;
    }
  }
  return -1;
};
