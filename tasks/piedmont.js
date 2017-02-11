'use strict';

var piedmont = require('piedmont');
var process = require('process');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('piedmont', 'Generate a Living Styleguide based on a Frontend Prototype', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        dest: './styling-guidelines',
        docs: './docs',
        src: './dist',
        styles: './src/sass',
        tmp: '.tmp/styleguide'
      });
    var done = this.async();

    piedmont({
      cwd: process.cwd(),
      dest: options.dest,
      docs: options.docs,
      src: options.src,
      styles: options.styles,
      tmp: options.tmp
    }, done);

    grunt.log.writeln('Waiting for the files to be written...');
  });
};
