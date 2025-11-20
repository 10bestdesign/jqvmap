/**
 * --------------------------------------------------------------------------------
 * Test Basic Constructor
 * --------------------------------------------------------------------------------
 */

module("jqvmap-base");

test("Constructor Only", function () {

  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');

  $container.append(testMap);

  var map = $('#vmap').vectorMap();

  ok(map instanceof JQVMap, 'vectorMap() is instance of JQVMap');

  $container.html('');
});

test("Accepts Config Options", function () {

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

  ok(map instanceof JQVMap, 'vectorMap() is instance of JQVMap');

  $container.html('');
});

/**
 * --------------------------------------------------------------------------------
 * Test for Successful Configuration
 * --------------------------------------------------------------------------------
 */

module("jqvmap-config-validation");

test("Test Config Options", function () {

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

  equal(map.canvas.params.map, 'world_en', 'vectorMap({ map: "world_en" }) set correctly');
  equal(map.canvas.params.backgroundColor, '#ffffff', 'vectorMap({ backgroundColor: "#ffffff" }) set correctly');
  equal(map.canvas.params.borderColor, '#ffffff', 'vectorMap({ borderColor: "#ffffff" }) set correctly');
  equal(map.canvas.params.borderOpacity, 0.25, 'vectorMap({ borderOpacity: 0.25 }) set correctly');
  equal(map.canvas.params.borderWidth, 1, 'vectorMap({ borderWidth: 1 }) set correctly');
  equal(map.canvas.params.color, '#000000', 'vectorMap({ color: "#000000" }) set correctly');
  equal(map.canvas.params.colors['us'], '#ff0000', 'vectorMap({ colors: { us: "#ff0000" } }) set correctly');
  equal(map.canvas.params.enableZoom, false, 'vectorMap({ enableZoom: false }) set correctly');
  equal(map.canvas.params.hoverColor, '#0000FF', 'vectorMap({ hoverColor: "#0000FF" }) set correctly');
  equal(map.canvas.params.hoverColors['us'], '#ff0000', 'vectorMap({ hoverColors: { us: "#ff0000" } }) set correctly');
  equal(map.canvas.params.hoverOpacity, 0.7, 'vectorMap({ hoverOpacity: 0.7 }) set correctly');
  equal(map.canvas.params.normalizeFunction, 'polynomial', 'vectorMap({ normalizeFunction: "polynomial" }) set correctly');
  equal(map.canvas.params.scaleColors[0][0], 182, 'vectorMap({ scaleColors: ["#b6d6ff", "#005ace"] }) first color red set correctly');
  equal(map.canvas.params.scaleColors[0][1], 214, 'vectorMap({ scaleColors: ["#b6d6ff", "#005ace"] }) first color green set correctly');
  equal(map.canvas.params.scaleColors[0][2], 255, 'vectorMap({ scaleColors: ["#b6d6ff", "#005ace"] }) first color blue set correctly');
  equal(map.canvas.params.scaleColors[1][0], 0, 'vectorMap({ scaleColors: ["#b6d6ff", "#005ace"] }) second color red set correctly');
  equal(map.canvas.params.scaleColors[1][1], 90, 'vectorMap({ scaleColors: ["#b6d6ff", "#005ace"] }) second color green set correctly');
  equal(map.canvas.params.scaleColors[1][2], 206, 'vectorMap({ scaleColors: ["#b6d6ff", "#005ace"] }) second color blue set correctly');
  equal(map.canvas.params.selectedColor, '#333333', 'vectorMap({ selectedColor: "#333333" }) US set correctly');
  equal(map.canvas.params.selectedRegions[0], 'us', 'vectorMap({ selectedRegions: ["us", "mx"] }) US set correctly');
  equal(map.canvas.params.selectedRegions[1], 'mx', 'vectorMap({ selectedRegions: ["us", "mx"] }) MX set correctly');
  equal(map.canvas.params.multiSelectRegion, false, 'vectorMap({ multiSelectRegion: false }) set correctly');
  equal(map.canvas.params.showTooltip, false, 'vectorMap({ showTooltip: false }) set correctly');
  equal(map.canvas.params.showLabels, true, 'vectorMap({ showLabels: true }) set correctly');
  equal(map.canvas.params.onLabelShow(), 'Label Showing', 'vectorMap({ onLabelShow: function(){} }) set correctly');
  equal(map.canvas.params.onRegionOver(), 'Region Over', 'vectorMap({ onRegionOver: function(){} }) set correctly');
  equal(map.canvas.params.onRegionOut(), 'Region Out', 'vectorMap({ onRegionOut: function(){} }) set correctly');
  equal(map.canvas.params.onRegionClick(), 'Region Clicked', 'vectorMap({ onRegionClick: function(){} }) set correctly');
  equal(map.canvas.params.pins['us'], 'America', 'vectorMap({ pins: { us: "America" } }) set correctly');
  equal(map.canvas.params.pinMode, 'content', 'vectorMap({ pinMode: "content" }) set correctly');

  $container.html('');
});

test("Test selectedRegions actually set in canvas", function () {

  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    selectedRegions: ['us', 'mx'],
    selectedColor: '#333333'
  });

  equal(map.countries['us'].getFill(), '#333333', 'vectorMap({ selectedColor: "#333333" }) set correctly for US');
  equal(map.countries['mx'].getFill(), '#333333', 'vectorMap({ selectedColor: "#333333" }) set correctly for MX');

  $container.html('');
});

test("Test colors actually set in canvas", function () {

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

  equal(map.countries['us'].getFill(), '#0000FF', 'vectorMap({ colors: { us: "#0000FF", mx: "#00FF00" } }) set correctly for US');
  equal(map.countries['mx'].getFill(), '#00FF00', 'vectorMap({ colors: { us: "#0000FF", mx: "#00FF00" } }) set correctly for MX');

  $container.html('');
});

test("Test labels show up", function () {

  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    showLabels: true
  });

  var labelsExist = (jQuery('.jqvmap-pin').length > 0);

  equal(labelsExist, 1, 'vectorMap({ showLabels: true }) set correctly and label showing');

  jQuery('.jqvmap-pin').remove();
  $container.html('');
});

/**
 * --------------------------------------------------------------------------------
 * Test Event Handlers
 * --------------------------------------------------------------------------------
 */

module("jqvmap-event-handling");

test("onLoad() event handler", function () {

  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = {
    event: null,
    map: null
  };

  $container.append(testMap);

  var map = $('#vmap').vectorMap({
    map: 'world_en',
    onLoad: function(event, map){
      testHandler.event = typeof event;
      testHandler.map = map;

      console.log(testHandler);
    }
  });

  equal(testHandler.event, 'object', 'vectorMap({ onLoad: function(event, map }) fires correctly and returns an event');
  equal(testHandler.map.canvas.params.map, 'world_en', 'vectorMap({ onLoad: function(event, map }) fires correctly and returns map');

  $container.html('');
});

test("onLabelShow() event handler", function () {

  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = {
    event: null,
    code: null,
    label: null
  };

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

  equal(testHandler.event, 'object', 'vectorMap({ onLabelShow: function(event, label, code){ ... } }) fires correctly and returns an event');
  equal(testHandler.code, 'us', 'vectorMap({ onLabelShow: function(event, label, code){ ... } }) fires correctly and returns code');
  equal(testHandler.label, 'United States', 'vectorMap({ onLabelShow: function(event, label, code){ ... } }) fires correctly and returns label');

  $container.html('');
});

test("onRegionOver() event handler", function () {

  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = {
    event: null,
    code: null,
    region: null
  };

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

  equal(testHandler.event, 'object', 'vectorMap({ onRegionOver: function(event, code, region){ ... } }) fires correctly and returns an event');
  equal(testHandler.code, 'us', 'vectorMap({ onRegionOver: function(event, code, region){ ... } }) fires correctly and returns code');
  equal(testHandler.region, 'United States', 'vectorMap({ onRegionOver: function(event, code, region){ ... } }) fires correctly and returns region');

  $container.html('');
});

test("onRegionOut() event handler", function () {

  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = {
    event: null,
    code: null,
    region: null
  };

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

  equal(testHandler.event, 'object', 'vectorMap({ onRegionOut: function(event, code, region){ ... } }) fires correctly and returns an event');
  equal(testHandler.code, 'us', 'vectorMap({ onRegionOut: function(event, code, region){ ... } }) fires correctly and returns code');
  equal(testHandler.region, 'United States', 'vectorMap({ onRegionOut: function(event, code, region){ ... } }) fires correctly and returns region');

  $container.html('');
});

test("onRegionClick() event handler", function () {

  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = {
    event: null,
    code: null,
    region: null
  };

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

  equal(testHandler.event, 'object', 'vectorMap({ onRegionClick: function(event, code, region){ ... } }) fires correctly and returns an event');
  equal(testHandler.code, 'us', 'vectorMap({ onRegionClick: function(event, code, region){ ... } }) fires correctly and returns code');
  equal(testHandler.region, 'United States', 'vectorMap({ onRegionClick: function(event, code, region){ ... } }) fires correctly and returns region');

  $container.html('');
});

test("onRegionSelect() event handler", function () {

  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = {
    event: null,
    code: null,
    region: null
  };

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

  equal(testHandler.event, 'object', 'vectorMap({ onRegionSelect: function(event, code, region){ ... } }) fires correctly and returns an event');
  equal(testHandler.code, 'us', 'vectorMap({ onRegionSelect: function(event, code, region){ ... } }) fires correctly and returns code');
  equal(testHandler.region, 'United States', 'vectorMap({ onRegionSelect: function(event, code, region){ ... } }) fires correctly and returns region');

  $container.html('');
});

test("onRegionDeselect() event handler", function () {

  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');
  var testHandler = {
    event: null,
    code: null,
    region: null
  };

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

  equal(testHandler.event, 'object', 'vectorMap({ onRegionDeselect: function(event, code, region){ ... } }) fires correctly and returns an event');
  equal(testHandler.code, 'us', 'vectorMap({ onRegionDeselect: function(event, code, region){ ... } }) fires correctly and returns code');
  equal(testHandler.region, 'United States', 'vectorMap({ onRegionDeselect: function(event, code, region){ ... } }) fires correctly and returns region');

  $container.html('');
});

/**
 * --------------------------------------------------------------------------------
 * Test for Known Errors
 * --------------------------------------------------------------------------------
 */

module("jqvmap-error-handling");

test("Invalid Map Name", function () {

  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');

  $container.append(testMap);

  throws(function(){ $('#vmap').vectorMap({ map: 'made_up_map' }); }, function( err ) {
    return err.toString() === 'Error: Invalid "made_up_map" map parameter. Please make sure you have loaded this map file in your HTML.';
  }, 'Correctly threw invalid map error');

  $container.html('');
});
