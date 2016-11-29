JQVMap.prototype.setSelectedRegions = function (regions) {
  for (var key in this.selectedRegions) {
    this.deselect(this.selectedRegions[key], undefined);
  }
  if (regions instanceof Array) {
    for(var k in regions) {
      this.select(regions[k].toLowerCase());
    }
  } else {
    this.select(regions.toLowerCase());
  }
};
