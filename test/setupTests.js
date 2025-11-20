// Expose jQuery globally for tests
const $ = require('jquery');
global.jQuery = global.$ = $;

// jsdom doesn't implement document.createStyleSheet (used for VML in IE)
if (typeof document.createStyleSheet !== 'function') {
	document.createStyleSheet = function() {
		return { addRule: function() {} };
	};
}

// Force SVG mode detection in VectorCanvas (jsdom doesn't implement SVGAngle)
global.SVGAngle = function() {};

// Load the library and a default map so tests can instantiate maps.
// Use require() so the dist files load into the current Node/jsdom context.
try {
	// Load the dist file and capture its top-level symbols by executing inside a Function
	const fs = require('fs');
	const root = require('path').join(__dirname, '..');
	const libCode = fs.readFileSync(root + '/dist/jquery.vmap.js', 'utf8');
	// Execute the library code inside a Function and return its main constructors
	var libExports = new Function('jQuery', libCode + '\n; return { JQVMap: (typeof JQVMap !== "undefined") ? JQVMap : undefined, VectorCanvas: (typeof VectorCanvas !== "undefined") ? VectorCanvas : undefined, ColorScale: (typeof ColorScale !== "undefined") ? ColorScale : undefined };')(global.jQuery);
	if (libExports) {
		if (libExports.JQVMap) global.JQVMap = libExports.JQVMap;
		if (libExports.VectorCanvas) global.VectorCanvas = libExports.VectorCanvas;
		if (libExports.ColorScale) global.ColorScale = libExports.ColorScale;
	}
} catch (e) {
	// ignore if not present
}
try {
	const fs = require('fs');
	const root = require('path').join(__dirname, '..');
	const mapCode = fs.readFileSync(root + '/dist/maps/jquery.vmap.world.js', 'utf8');
	// Execute map file with jQuery and attach its maps to global.JQVMap.maps
	var maps = new Function('jQuery', mapCode + '\n; return (typeof JQVMap !== "undefined" && JQVMap.maps) ? JQVMap.maps : undefined;')(global.jQuery);
	if (maps) {
		global.JQVMap = global.JQVMap || {};
		global.JQVMap.maps = maps;
	}
} catch (e) {
	// ignore if not present
}

	// jsdom does not implement SVGElement.getBBox(); provide a simple stub so
	// code that positions pins based on SVG bbox works in tests.
	try {
		if (typeof global.SVGElement !== 'undefined' && !global.SVGElement.prototype.getBBox) {
			global.SVGElement.prototype.getBBox = function() {
				return { x: 0, y: 0, width: 100, height: 100 };
			};
		} else if (typeof global.SVGElement === 'undefined') {
			// create a minimal SVGElement constructor with getBBox
			global.SVGElement = function() {};
			global.SVGElement.prototype.getBBox = function() {
				return { x: 0, y: 0, width: 100, height: 100 };
			};
		}
	} catch (err) {
		// ignore
	}
