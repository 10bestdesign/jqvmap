WorldMap.prototype.setValues = function (values) {
  var max = 0,
    min = Number.MAX_VALUE,
    val;

  for (var cc in values) {
    val = parseFloat(values[cc]);
    if (isNaN(val)) {
      continue;
    }
    if (val > max) {
      max = values[cc];
    }
    if (val < min) {
      min = val;
    }
  }

  if (min === max) {
    max++;
  }

  this.colorScale.setMin(min);
  this.colorScale.setMax(max);

  var colors = {};
  for (cc in values) {
    val = parseFloat(values[cc]);
    colors[cc] = isNaN(val) ? this.colorScale.getColor(val) : this.color;
  }
  this.setColors(colors);
  this.values = values;
};
