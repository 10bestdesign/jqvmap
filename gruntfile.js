module.exports = function(grunt)
{
	var gtx = require('gruntfile-gtx').wrap(grunt);
		gtx.loadAuto();

	var gruntConfig = require('./grunt');
		gruntConfig.package = require('./package.json');

	gtx.config(gruntConfig);

	gtx.alias('build', ['clean:dist', 'copy:jquery', 'concat:dist', 'uglify:dist', 'test']);

	gtx.alias('release', ['build', 'bump-commit']);
	gtx.alias('release-major', ['bump-only:major', 'release']);
	gtx.alias('release-minor', ['bump-only:minor', 'release']);
	gtx.alias('release-patch', ['bump-only:patch', 'release']);


	// Register test alias conditionally: if grunt-contrib-qunit is not available
	// the test alias will only run lint to avoid hard failures when legacy test
	// deps were moved to an isolated package (`tests/legacy`).
	var path = require('path');

	// Always run the modern test flow (lint + Jest) when invoking `grunt test`.
	// Legacy QUnit/PhantomJS tests are intentionally isolated and must be
	// invoked explicitly with `grunt test:legacy`.
	gtx.alias('test', ['shell:lint', 'shell:jest']);
	if (grunt && grunt.log && grunt.log.ok) {
		grunt.log.ok('Default `grunt test` runs Jest. To run legacy QUnit/PhantomJS tests (isolated), use from the project root:\n  npm --prefix ./tests/legacy run test\nor:\n  cd tests/legacy && npm test');
	}


	// Legacy test flow has been moved to `tests/legacy/Gruntfile.js` and is run
	// independently. The root `grunt test` runs the modern Jest-based tests.

	gtx.finalise();
};
