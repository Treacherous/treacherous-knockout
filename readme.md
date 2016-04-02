# Treacherous-Knockout

Treacherous plugin for knockout which allows treacherous validation to hook into the view.

(See more about Treacherous [HERE](https://github.com/grofit/treacherous))

## Installing

### Via NPM

Just do an `npm install treacherous-knockout`

### In browser

There are 3 flavours in the dist dir:

* `treacherous-knockout.all.js`     - Contains treacherous + treacherous-knockout and all dependencies (including bluebird, knockout, etc)
* `treacherous-knockout.browser.js` - Contains treacherous-knockout which works without modules for browser usage
* `treacherous-knockout.minimal.js` - Contains only treacherous-knockout and no dependencies for use with module loaders

The reason there are 3 flavours is because some people will use this in a non-module aware
browser scenario, and `treacherous.all.js` will contain everything for it to just work, it is also
used by the unit tests in the project.

`treacherous-knockout.minimal.js` is purely just the treacherous-knockout library without any dependencies, 
this is the most modular version of the package and what the `package.json` defaults to. So all dependencies
will need to be resolved via the module loader.

`treacherous-knockout.browser.js` is same as `treacherous-knockout.minimal.js` but it does not know of modules, so it 
requires you to include all dependencies as scripts, much like shown in the example page.

## How do I use it

In the browser it will self register and append to the `Treacherous` global, however in node or module aware
environments its up to you how you include it, but it will expose the same object for you.

Here is an example of what it does and how to use it.
[View Example](https://rawgithub.com/grofit/treacherous-knockout/master/example/index.html)

## Available Bindings

This adds a few bindings for you to consume to allow your `validationGroup` instances to be used within the view.

### `validateWith` Binding

This binding is very much like a `with` binding, where it provides the validation group to the child bindingContext
scopes, this allows any `value` or `textInput` calls to automatically pick up the validation group and self 
register themselves for notifications if available.

#### Basic Usage
```html
<section data-bind="validateWith: someValidationGroup">...</section>
```

#### Advanced Usage
```html
<section data-bind="validateWith: { group: someValidationGroup, options: { inlineValidation: false} }">...</section>
```

The advanced usage supports:

- **group** : The validation group to use within children of this element
- **options** : An object containing any custom options for use in child bindings
    - **inlineValidation** : If value/textInput bindings in children should automatically show inline validation


### `validateProperty` Binding

This binding is for manually showing property errors, you can put this anywhere and it will automatically populate
the errors for that property into the element you are using.

This is useful for things which would not automatically be picked up in the UI, such as arrays with max/min length
rules which would not automatically be picked up, so you could explicitly show them wherever you please.

This is also handy for convoluted scenarios where you have some complex custom descendant bindings which are not picking
up the right bindings, so in those cases you at least have a manual way to infer what should be validated.

#### Basic Usage
```html
<div data-bind="validateProperty: 'someArray'"></div>
```

#### Advanced Usage
```html
<div data-bind="validateProperty: 'someArray[' + index() + '].bar'"></div>
```

Remember you want to pass the string literal for the property, this allows you to be able to use the 
knockout context variables in the view if you are within an iteration etc.

### `validationSummary` Binding

This binding populates the element with a validation summary showing all current errors for the model.

#### Usage
```html
<div data-bind="validationSummary: someValidationGroup"></div>
```

You can use this binding anywhere on the page regardless of if it is within the scope of a `validateWith` binding, 
this way if you have multiple validators on the page you can have them all be output in one place.

## Styling

By default there is no styling, as its up to you really how you want to style your inline/summary errors, 
there are some classes which are appended by default which should target in your css:

- **.valid** : When a the property associated is valid (you would probably do `input.valid` in most cases) 
- **.invalid** : When the property associated is invalid (you would probably do `input.invalid` in most cases)
- **.validation-error-container** : The element containing an inline error for a property
- **.validation-summary-container** : The element containing the validation summary elements

These classes are defined within the default `InlineValidator` as well, `SimpleValidationSummary`, so if 
you use your own implementations here you can define any classes you want.

## Extending

### Binding Magic

So by default there is some magic which proxies the default `value` and `textInput` bindings to allow inline 
validation for free, there are also some proxies around `with` and `foreach` which basically allow the scope
of the properties. So if you have any custom bindings which you want to auto-magically support inline validation 
or pass descendant property scopes down to, look at the examples in the `binding-overrides` folder.

### Custom Validators

Out the box there are 2 default validators, `InlineValidator` and `SimpleValidationSummary`, which can be found
within the `validators` folder. These both have interfaces (it's a typescript thing) which show the required 
properties and methods for the classes to be used by the system.

By default these 2 classes are instantiated on setup and passed into `ko.validation.validator` and 
`ko.validation.validationSummary`. So if you want to write your own, then you would set the relevant
entry with your instance.

A good example of this would be if you wanted to use qtip2 (other tooltip libraries are available) as your
inline validation system, which would make tooltips to show validation errors rather than the default inline
ones.