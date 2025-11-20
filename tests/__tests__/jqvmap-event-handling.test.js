test('onLoad() event handler', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = { event: null, map: null };

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    onLoad: function(event, m){
      testHandler.event = typeof event;
      testHandler.map = m;
    }
  });

  expect(testHandler.event).toBe('object');
  expect(testHandler.map.canvas.params.map).toBe('world_en');

  $container.html('');
});

test('onLabelShow() event handler', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = { event: null, code: null, label: null };

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    onLabelShow: function(event, label, code){
      testHandler.event = typeof event;
      testHandler.code = code;
      testHandler.label = label;
    }
  });

  jQuery('#vmap').trigger('labelShow.jqvmap', ['United States', 'us']);

  expect(testHandler.event).toBe('object');
  expect(testHandler.code).toBe('us');
  expect(testHandler.label).toBe('United States');

  $container.html('');
});

test('onRegionOver() event handler', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = { event: null, code: null, region: null };

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    onRegionOver: function(event, code, region){
      testHandler.event = typeof event;
      testHandler.code = code;
      testHandler.region = region;
    }
  });

  jQuery('#vmap').trigger('regionMouseOver.jqvmap', ['us', 'United States']);

  expect(testHandler.event).toBe('object');
  expect(testHandler.code).toBe('us');
  expect(testHandler.region).toBe('United States');

  $container.html('');
});

test('onRegionOut() event handler', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = { event: null, code: null, region: null };

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    onRegionOut: function(event, code, region){
      testHandler.event = typeof event;
      testHandler.code = code;
      testHandler.region = region;
    }
  });

  jQuery('#vmap').trigger('regionMouseOut.jqvmap', ['us', 'United States']);

  expect(testHandler.event).toBe('object');
  expect(testHandler.code).toBe('us');
  expect(testHandler.region).toBe('United States');

  $container.html('');
});

test('onRegionClick() event handler', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = { event: null, code: null, region: null };

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    onRegionClick: function(event, code, region){
      testHandler.event = typeof event;
      testHandler.code = code;
      testHandler.region = region;
    }
  });

  jQuery('#vmap').trigger('regionClick.jqvmap', ['us', 'United States']);

  expect(testHandler.event).toBe('object');
  expect(testHandler.code).toBe('us');
  expect(testHandler.region).toBe('United States');

  $container.html('');
});

test('onRegionSelect() event handler', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = { event: null, code: null, region: null };

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    onRegionSelect: function(event, code, region){
      testHandler.event = typeof event;
      testHandler.code = code;
      testHandler.region = region;
    }
  });

  jQuery('#vmap').trigger('regionSelect.jqvmap', ['us', 'United States']);

  expect(testHandler.event).toBe('object');
  expect(testHandler.code).toBe('us');
  expect(testHandler.region).toBe('United States');

  $container.html('');
});

test('onRegionDeselect() event handler', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = { event: null, code: null, region: null };

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    onRegionDeselect: function(event, code, region){
      testHandler.event = typeof event;
      testHandler.code = code;
      testHandler.region = region;
    }
  });

  jQuery('#vmap').trigger('regionDeselect.jqvmap', ['us', 'United States']);

  expect(testHandler.event).toBe('object');
  expect(testHandler.code).toBe('us');
  expect(testHandler.region).toBe('United States');

  $container.html('');
});
