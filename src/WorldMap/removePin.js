WorldMap.prototype.removePin = function(cc) {
  jQuery('#' + this.getPinId(cc)).remove();
};
