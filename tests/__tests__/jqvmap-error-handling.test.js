test('Invalid Map Name', function() {
  document.body.innerHTML = '<div id="test-map"></div>';
  var $container = $('#test-map');
  var testMap = $('<div id="vmap" style="width: 600px; height: 400px;"></div>');

  $container.append(testMap);

  expect(function(){ $('#vmap').vectorMap({ map: 'made_up_map' }); }).toThrow('Invalid "made_up_map" map parameter. Please make sure you have loaded this map file in your HTML.');

  $container.html('');
});
