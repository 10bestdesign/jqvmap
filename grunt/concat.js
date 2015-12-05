module.exports = {
	options: {
		banner: '/*!\n' +
		' * <%= package.author.name %>: <%= package.description %>\n' +
		' * @author <%= package.author.name %>\n' +
		' * @version <%= package.version %>\n' +
		' * @link <%= package.author.url %>\n' +
		' * @license https://raw.githubusercontent.com/manifestinteractive/jqvmap/master/LICENSE\n' +
		' * @builddate <%= grunt.template.today("yyyy/mm/dd") %>\n' +
		' */\n\n'
	},
	dist: {
		files: {
			'dist/jquery.vmap.js': [
				"src/VectorCanvas.js",
				"src/ColorScale.js",
				"src/JQVMap.js",
				"src/Base.js",
				"src/**/*.js"
			]
		}
	}
};
