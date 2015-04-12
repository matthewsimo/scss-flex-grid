/*global module, require*/
module.exports = function ( grunt ) {

	// Take care of all Grunt plugins in a single line
	require('load-grunt-tasks')(grunt);

	// This is the configuration object Grunt uses to give each plugin its instructions.
	grunt.initConfig({
		// We read in our `package.json` file so we can access the package name and version. It's already there, so we don't repeat ourselves here.

		pkg: grunt.file.readJSON("package.json"),

		// Setup paths
		paths: {
			src: 'src/',
			dist: 'dist/',
			demo: 'demo/'
		},

		banner:
		'/** \n' +
		' * @author <%= pkg.author %> \n' +
		' * @version <%= pkg.version %> \n' +
		' * @description <%= pkg.description %> \n' +
		' * @license <%= pkg.license %> \n' +
		' */ ',

		version: {
			project: {
				src: ['package.json']
			},

			scss: {
				options: {
					// @version X.X.X
					prefix: '@version\\s*'
				},
				src: ['<%= paths.src %>*.scss']
			}
		},

		// Copy the distribution files to some other directory
		/*
		copy: {
			main: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['<%= paths.dist %>*.css'],
						dest: './'
					}
				]
			}
		},
		*/

		sass: {
			// compile different stylesheets to be loaded async
			compile: {
				files: {
					'<%= paths.dist %><%= pkg.name %>-<%= pkg.version %>.css': '<%= paths.src %>main.scss'
				},
				options: {
					style: 'expanded', // expanded for dev, compressed for production
					sourcemap: 'file'
				}
			},

			dist: {
				files: {
					'<%= paths.dist %><%= pkg.name %>-<%= pkg.version %>.css': '<%= paths.src %>main.scss'
				},
				options: {
					style: 'compressed', // expanded for dev, compressed for production
					sourcemap: 'none'
				}
			},

			demo: {
				files: {
					'<%= paths.demo %>demo.css': '<%= paths.demo %>demo.scss'	
				}
			},
			
			options: {
				precision: 3
			}
		},

		// watch: rebuild parts of site on file change
		watch: {
			sass: {
				files: ['<%= paths.src %>**/*.scss'],
				tasks: ['sass:compile', 'copy']
			}
		}
	});

	grunt.registerTask(
		'compile',
		'Compile without minification', 
		['sass:compile']
	);

	grunt.registerTask(
		'default',
		'Default task - compile the files',
		['compile']
	);

	grunt.registerTask(
		'dist',
		'Compile files ready for production',
		['version', 'sass:dist']
	);

	grunt.registerTask(
		'dev',
		'Serve the site and auto-regenerate on file change',
		['compile', 'watch']
	);
	
	grunt.registerTask(
		'demo',
		'Run the tasks to build/compile the demo',
		['sass:demo']
	);

};
