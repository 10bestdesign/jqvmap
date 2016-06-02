JQVMap.prototype.positionPins = function(){
  var map = this;
  var pins = this.container.find('.jqvmap-pin');
  jQuery.each(pins, function(index, pinObj){
    pinObj = jQuery(pinObj);
    var countryId = map.getCountryId(pinObj.attr('for').toLowerCase());
    var countryObj = jQuery('#' + countryId);
    var bbox = countryObj[0].getBBox();

    var scale = map.scale;
    var rootCoords = map.canvas.rootGroup.getBoundingClientRect();
    var mapCoords = map.container[0].getBoundingClientRect();

    var middleX = (bbox.x * scale) + ((bbox.width * scale) / 2);
    var middleY = (bbox.y * scale) + ((bbox.height * scale) / 2);

    pinObj.css({
      left: (rootCoords.left - mapCoords.left) + middleX - (pinObj.width() / 2),
      top: (rootCoords.top - mapCoords.top) + middleY - (pinObj.height() / 2)
    });
  });
};
