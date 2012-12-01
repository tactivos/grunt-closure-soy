module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    closureSoys: {
      all: {
        src: '../murally/static/js/template/**/*.soy',
        soyToJsJarPath: '../murally/static/js/lib/closure-library/template/SoyToJsSrcCompiler.jar',
        options: {
        	shouldGenerateJsdoc: true,
        	shouldProvideRequireSoyNamespaces: true
        }
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['closureSoys']);
};
