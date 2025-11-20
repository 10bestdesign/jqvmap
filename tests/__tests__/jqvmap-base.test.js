test('Constructor Only', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  $container.append(testMap);

  var map = $('#vmap').vectorMap();

  expect(map instanceof JQVMap).toBeTruthy();

  $container.html('');
});

test('Accepts Config Options', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    backgroundColor: '#ffffff',
    color: '#0D3349',
    hoverOpacity: 0.7,
    selectedColor: '#2B81AF',
    enableZoom: true,
    showTooltip: true
  });

  expect(map instanceof JQVMap).toBeTruthy();

  $container.html('');
});

test('Test Config Options', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#000000',
    colors: {
      us: '#ff0000'
    },
    enableZoom: false,
    hoverColor: '#0000FF',
    hoverColors: {
      us: '#ff0000'
    },
    hoverOpacity: 0.7,
    normalizeFunction: 'polynomial',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#333333',
    selectedRegions: ['us', 'mx'],
    multiSelectRegion: false,
    showTooltip: false,
    showLabels: true,
    onLabelShow: function(){ return 'Label Showing'; },
    onRegionOver: function(){ return 'Region Over'; },
    onRegionOut: function(){ return 'Region Out'; },
    onRegionClick: function(){ return 'Region Clicked'; },
    pins: {
      us: 'America'
    },
    pinMode: 'content'
  });

  expect(map.canvas.params.map).toBe('world_en');
  expect(map.canvas.params.backgroundColor).toBe('#ffffff');
  expect(map.canvas.params.borderColor).toBe('#ffffff');
  expect(map.canvas.params.borderOpacity).toBe(0.25);
  expect(map.canvas.params.borderWidth).toBe(1);
  expect(map.canvas.params.color).toBe('#000000');
  expect(map.canvas.params.colors['us']).toBe('#ff0000');
  expect(map.canvas.params.enableZoom).toBe(false);
  expect(map.canvas.params.hoverColor).toBe('#0000FF');
  expect(map.canvas.params.hoverColors['us']).toBe('#ff0000');
  expect(map.canvas.params.hoverOpacity).toBe(0.7);
  expect(map.canvas.params.normalizeFunction).toBe('polynomial');
  expect(map.canvas.params.scaleColors[0][0]).toBe(182);
  expect(map.canvas.params.scaleColors[0][1]).toBe(214);
  expect(map.canvas.params.scaleColors[0][2]).toBe(255);
  expect(map.canvas.params.scaleColors[1][0]).toBe(0);
  expect(map.canvas.params.scaleColors[1][1]).toBe(90);
  expect(map.canvas.params.scaleColors[1][2]).toBe(206);
  expect(map.canvas.params.selectedColor).toBe('#333333');
  expect(map.canvas.params.selectedRegions[0]).toBe('us');
  expect(map.canvas.params.selectedRegions[1]).toBe('mx');
  expect(map.canvas.params.multiSelectRegion).toBe(false);
  expect(map.canvas.params.showTooltip).toBe(false);
  expect(map.canvas.params.showLabels).toBe(true);
  expect(map.canvas.params.onLabelShow()).toBe('Label Showing');
  expect(map.canvas.params.onRegionOver()).toBe('Region Over');
  expect(map.canvas.params.onRegionOut()).toBe('Region Out');
  expect(map.canvas.params.onRegionClick()).toBe('Region Clicked');
  expect(map.canvas.params.pins['us']).toBe('America');
  expect(map.canvas.params.pinMode).toBe('content');

  $container.html('');
});

test('Test selectedRegions actually set in canvas', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    selectedRegions: ['us', 'mx'],
    selectedColor: '#333333'
  });

  expect(map.countries['us'].getFill()).toBe('#333333');
  expect(map.countries['mx'].getFill()).toBe('#333333');

  $container.html('');
});

test('Test colors actually set in canvas', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    colors: {
      us: '#0000FF',
      mx: '#00FF00'
    }
  });

  expect(map.countries['us'].getFill()).toBe('#0000FF');
  expect(map.countries['mx'].getFill()).toBe('#00FF00');

  $container.html('');
});

test('Test labels show up', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    showLabels: true
  });

  var labelsExist = (jQuery('.jqvmap-pin').length > 0);

  expect(labelsExist).toBeTruthy();

  jQuery('.jqvmap-pin').remove();
  $container.html('');
});
