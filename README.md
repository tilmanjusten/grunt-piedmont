# grunt-piedmont

> Generate a Living Styleguide based on a Frontend Prototype.

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

#### `options.dest`
Type: `String`
Default value: `'./styling-guidelines'`

Destination path of the generated living styleguide.

#### `options.src`
Type: `String`
Default value: `'./dist'`

Path of the built frontend prototype.

#### `options.styles`
Type: `String`
Default value: `'./src/sass'`

Path to the annotated stylesheet files. Currently only Sass files are supported, so you have to specify the path only. 
Piedmont uses a [glob pattern](https://www.npmjs.com/package/glob) to get the files: `./src/sass/**/*.scss`. 

#### `options.tmp`
Type: `String`
Default value: `'.tmp/styleguide'`

Temporary files directory.

## Component Inventory

The component inventory (or interface inventory) is built on top of extracted partials. Partials are representations of 
components as markup.  
Partials need to be wrapped in specific HTML comments. Where `<!-- extract:Name of the partial -->` intrduces a partial,
 `<!-- endextract -->` defines the end.
 
```html
<!-- extract:Figure -->
<figure>
  <img src="http://placehold.it/640/480" alt="Unknown image content" width="640" height="480">
  <figcaption>
    <p>Random picture</p>
  </figcaption>  
</figure>
<!-- endextract -->
```

### Properties (Options)

Properties are part of the introducing comments. Property name and value are separeated by colons: 
`property:value`. While colons are protected characters, property values must not contain them.  
Most properties are single value properties, some properties have multiple values. Multiple values are separated by 
colons too: `property:value A:value B`.

#### `category`

Single value property. Sets the partial category. 
 
```html
<!-- extract:News teaser category:Teaser -->
...
<!-- endetract -->

<!-- extract:Event teaser category:Teaser -->
...
<!-- endetract -->
```

#### `name`

Single value property. Sets the partial name explicitly. Overrides the value of the `extract` property.

```html
<!-- extract:A common partial name:A special partial -->
...
<!-- endetract -->
```

The partial name will be *A special partial*.

#### `wrap`

Multiple value property. For rendering purposes in the interface inventory you might wrap the partial code in 
additional markup. While components should be independent of their context, it is necessary to show how they 
behave in several contexts, e.g. content sections in grid layout.

```html
<!-- extract:Teaser wrap:<div class="row"><div class="col-8-of-12">:</div></div> -->
<article class="teaser">
  <h3 class="teaser__title">Arthurs Towel</h3>
  ...
</article>
<!-- endextract -->

<!-- extract:Teaser in Sidebar wrap:<div class="row"><div class="col-4-of-12">:</div></div> -->
<article class="teaser">
  <h3 class="teaser__title">Arthurs Towel</h3>
  ...
</article>
<!-- endextract -->
```

In both cases the partial code is the same. The markup that is used to render the component in the interface 
inventory differs.

**Teaser**
```html
<div class="row">
  <div class="col-6-of-9">
    <article class="teaser">
      <h3 class="teaser__title">Arthurs Towel</h3>
      ...
    </article>
  </div>
</div>
```

**Teaser in Sidebar**
```html
<div class="row">
  <div class="col-3-of-9">
    <article class="teaser">
      <h3 class="teaser__title">Arthurs Towel</h3>
      ...
    </article>
  </div>
</div>
```


## Styleguide

The styleguide section is based on annotated stylesheets.

### General annotations

#### `@value`

Override the value that is extracted by the parser. This should be an option 
if the value is an expression or the value is not a digestable CSS property 
value. 

```scss
// @color Overlay background  
// @value rgba(0, 0, 0, 0.6)  
$transparent-dark: transparentize($dark, 0.4);  
```

### Specific annotations

#### `@boxShadow`

```scss
// @boxShadow Dropshadow  
$dropshadow: 1px 2px 9px rgba(30, 30, 30, 0.3);   
```

#### `@color`

Color value. Use the optional `@group` to group colors. Groups might be Main, 
Decoration, Notice, Buttons, Transparencies, etc.

```scss
// @color Primary
// @group Main
$color-primary: rebeccapurple;   
```

#### `@font`

Single font name. Use `@fontWeight` to specify the available font weights.

```scss
// @font FFDin
// @fontWeight 300
// @fontWeight 400
// @fontWeight 700
$font-ffdin: FFDin;   
```

#### `@fontFamily`

Font family cascade.

```scss
// @fontFamily Headline
$font-family: Times, "Times New Roman", serif;   
```

#### `@fontSize`

Font size value.

```scss
// @fontSize Small
$font-size-meta: 1.4rem;
```

#### `@gradient`

Gradient type is specified in `@type`. Valid values are `linear` and `radial`.

```scss
// @gradient Purple fade
$gradient-purple: linear-gradient(to bottom, rgba(102,51,153,1) 12%,rgba(102,51,153,0.5) 54%,rgba(222,71,172,0) 100%);
```

#### `@lineHeight`

Line height value.

```scss
// @lineHeight Base
$base-line-height: 1.5;
```

### `@spacing`

Spacing value. Use the optional `@group` to group spacings. Groups might be 
Layout, Component, Form, etc.

```scss
// @spacing Base
// @group Layout
$spacing-layout: 2rem;   
```

#### `@timing`

Duration of animations and transitions.

```scss
// @timing Sluggish
$duration-sluggish: 1.4s;
```

#### `@transition`

Transition value.

```scss
// @transition Fade
// @value opacity 0.6s 0s ease
$transition-fade: opacity $duration-slow 0s ease;
```

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Tilman Justen. Licensed under the MIT license.
