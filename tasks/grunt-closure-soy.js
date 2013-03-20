/*
 * grunt-closure-soy
 * https://github.com/tactivos/grunt-closure-soy
 *
 * Copyright (c) 2012 Johnny G. Halife & Mural.ly Dev Team
 */
module.exports = function (grunt) {

	var defaults = {
		outputPathFormat: '{INPUT_DIRECTORY}/{INPUT_FILE_NAME}.js'
	};

	grunt.registerMultiTask('closureSoys', "SOYs (Google Closure) template generator", function () {
		var _ = grunt.util._;
		var done = this.async();
		var async = grunt.util.async;
		var files = this.filesSrc;

		var config = _.extend({}, defaults, this.data);
		var args = [];

		// path to jar is always the first parameter
		args.push(['-jar', config.soyToJsJarPath]);
		// output format which is required
		args.push(['--outputPathFormat', config.outputPathFormat]);

		// now let's add all the other flags
		for(option in config.options) {
			args.push('--' + option); // turn value into flag
			// if flag has another type of value and it's not
			// yet another marker let's add the value to it.
			var value = config.options[option];
			if(value === true) continue;
			args.push(value);
		};

		// all the files
		args.push(files);

		grunt.util.spawn({
			cmd: 'java',
			args: _.flatten(args)
		}, function (err, output, code) {
			if(err) {
				grunt.log.error();
				grunt.verbose.error(err);
				grunt.fail.warn('SoyToJsSrcCompiler failed to compress process templates.');
			} else {
				grunt.log.writeln('Successfully generated ' + files.length + ' templates.');
			}
			done();
		});
	});
};
