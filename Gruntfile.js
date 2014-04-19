module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      gruntfile: {
        //options: {jshintrc: '.jshintrc'},
        src: 'Gruntfile.js'
      },
      src: {
        //options: {jshintrc: 'src/.jshintrc'},
        src: ['src/**/*.js']
      },
      test: {
        //options: {jshintrc: 'test/.jshintrc'},
        src: ['test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: ['src/**/*.js'],
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: ['test/**/*.html', 'test/**/*.js'],
        tasks: ['jshint:test', 'qunit']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['qunit']);
  grunt.registerTask('default', ['test']);
};
