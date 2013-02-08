/*global module:false*/
module.exports = function(grunt) {
	
  grunt.loadNpmTasks('grunt-encase');
	
  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1',
      banner: '/*Easy URL Params - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* https://github.com/samsel/easy-url-params \n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Samuel Selvanathan; Licensed MIT */'
    },
	encase: {                   
	        develop: {                      
	          separator: '\n',           
	          enviroment: 'browser',  
	          exports: [],
	          src: 'extension/src/*.js',            
	          dest: 'extension/application.js'  }     
	},
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:lib/FILE_NAME.js>'],
        dest: 'dist/FILE_NAME.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', 'extension/application.js'],
        dest: 'extension/application.min.js'
      }
    },
    watch: {
      files: 'extension/src/*.js',
      tasks: 'encase min'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  // Default task.
  //grunt.registerTask('default', 'lint qunit concat min');
  grunt.registerTask('default', 'encase min');

};