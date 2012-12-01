[Grunt][grunt] plugin for converting SOY templates into Javascript, using [closure-templates][closure-templates].

## Getting Started

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-closure-soy`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-closure-soy');
```

Then specify what files to compress in your config:

```javascript
  grunt.initConfig({
    closureSoys: {
      all: {
        /** @required  - string including grunt glob variables*/
        src: './static/template/**/*.soy',
        /** @required  - string including grunt glob variables*/
        soyToJsJarPath: '../murally/static/js/lib/closure-library/template/SoyToJsSrcCompiler.jar',
        /** @optional  - defaults to '{INPUT_DIRECTORY}/{INPUT_FILE_NAME}.js' */
        outputPathFormat: '{INPUT_DIRECTORY}/{INPUT_FILE_NAME}.js'
        /** any other parameter included on the options will be added to call */
        options: {
          shouldGenerateJsdoc: true,
        	shouldProvideRequireSoyNamespaces: true
        }
      }
    }
  });
```

[grunt]: https://github.com/cowboy/grunt
[closure-templates]: https://developers.google.com/closure/templates/docs/helloworld_js

## Release History
* 0.1.0 Initial Release