
module.exports = function(grunt)
{
	var gtx = require('gruntfile-gtx').wrap(grunt);
		gtx.loadAuto();

	var path = require('path');
	var rootGruntConfig = require(path.join(__dirname, '..', '..', 'grunt'));
	var localGruntConfig = {};

	// If this package provides its own grunt configs under ./grunt, load them
	try {
		// Try to load a local grunt index (if present)
		localGruntConfig = require(path.join(__dirname, 'grunt'));
	} catch (e) {
		// If there's no index for ./grunt, try specific common configs
		try {
			localGruntConfig = require(path.join(__dirname, 'grunt', 'qunit')) || {};
		} catch (e2) {
			localGruntConfig = {};
		}
	}

	// Merge local config into root. Place local grunt task configs under their
	// task name so gtx.config will find them (e.g., gruntConfig.qunit = {...})
	var gruntConfig = Object.assign({}, rootGruntConfig);
	if (localGruntConfig && Object.keys(localGruntConfig).length) {
		gruntConfig.qunit = localGruntConfig;
	}

	gruntConfig.package = require(path.join(__dirname, 'package.json'));

	gtx.config(gruntConfig);

	// Keep only test-related alias in this legacy package
	gtx.alias('test', ['qunit:dist']);

	gtx.finalise();
};
