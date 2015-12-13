# grunt-piedmont

> Generate a Living Styleguide based on a Frontend Prototype

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-piedmont --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-piedmont');
```

## The "piedmont" task

### Overview
In your project's Gruntfile, add a section named `piedmont` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  piedmont: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.dest
Type: `String`
Default value: `'./styling-guidelines'`

Destination path of the generated living styleguide.

#### options.src
Type: `String`
Default value: `'./dist'`

Path of the built frontend prototype.

#### options.styles
Type: `String`
Default value: `'./src/sass'`

Path to the annotated stylesheet files. Currently only Sass files are supported, so you have to specify the path only. 
Piedmont uses a [glob pattern](https://www.npmjs.com/package/glob) to get the files: `./src/sass/**/*.scss`. 

#### options.tmp
Type: `String`
Default value: `'.tmp/styleguide'`

Temporary files directory.

## Styleguide

The styleguide section is based on ann 

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Tilman Justen. Licensed under the MIT license.
