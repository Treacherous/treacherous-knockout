# Treacherous-Knockout

<img src="https://user-images.githubusercontent.com/927201/29661471-03b5ee16-88bc-11e7-880d-d8c027b264c8.png"/> <img src="https://user-images.githubusercontent.com/927201/29812570-f4437a8e-8c9e-11e7-9f24-b9100603bcc2.png"/> 


[![Join the chat at https://gitter.im/grofit/treacherous](https://badges.gitter.im/grofit/treacherous.svg)](https://gitter.im/grofit/treacherous?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Treacherous plugin for knockout which allows treacherous validation to hook into the view.

(See more about Treacherous [HERE](https://github.com/grofit/treacherous))

[HERE IS AN EXAMPLE/DEMO OF IT IN ACTION](https://rawgithub.com/grofit/treacherous-knockout/master/example/index.html)

## Installing

### Via NPM

Just do an `npm install treacherous-knockout`

### In browser

There are 3 flavours in the dist dir:

* `treacherous-knockout.js`         - Contains only treacherous-knockout and no dependencies for use with module loaders
* `treacherous-knockout.testable.js`- This is purely output for karma to test
* `treacherous-knockout.browser.js` - Contains treacherous-knockout which works without modules for browser usage, still requires knockout included on page.

The reason there are 3 flavours is because some people will use this in a non-module aware
browser scenario, and `treacherous.testable.js` is mainly for testing.

`treacherous-knockout.js` is purely just the treacherous-knockout library without any dependencies, 
this is the most modular version of the package and what the `package.json` defaults to. So all dependencies
will need to be resolved via the module loader.

`treacherous-knockout.browser.js` is same as `treacherous-knockout.minimal.js` but it does not know of modules, so it 
requires you to include all dependencies as scripts, much like shown in the example page.

## How do I use it

In the browser it will self register and append to the `Treacherous` global, however in node or module aware
environments its up to you how you include it, but it will expose the same object for you.

## Available Bindings

This adds a few bindings for you to consume to allow your `validationGroup` instances to be used within the view.

### `validate-with` Binding

This binding is very much like a `with` binding, where it provides the validation group to the child bindingContext
scopes, this allows any `value` or `textInput` calls to automatically pick up the validation group and self 
register themselves for notifications if available.

#### Basic Usage
```html
<section data-bind="validate-with: someValidationGroup">...</section>
```

#### Advanced Usage
```html
<section data-bind="validate-with: someValidationGroup" view-options="immediateErrors: true">...</section>
```

As treacherous is made to be cross platform/framework it generally uses attributes for configuration
based hinting, so the above example hints that we should immediately show errors when the VM loads.

Here are a list of the available configuration attributes available:

- **view-strategy** : Defauls to "inline" but you can specify "none" to turn off inline, or use a custom strategy
- **view-options** : An object containing any custom options for use within the view strategy
    - **immediateErrors** : If true errors will be displayed the moment the page loads, rather than waiting for model changes

### `show-error` Binding

This binding is for explicitly showing property errors, you can put this anywhere and it will automatically populate
the errors for that property into the element you are using. Normally the value/inputText bindings will be proxied
and automatically handle validation, but if that fails or you wish to override it you can use this.

This is also useful for things which would not automatically be picked up in the UI, such as arrays with max/min length
rules which would not automatically be picked up, so you could explicitly show them wherever you please.

This is also handy for convoluted scenarios where you have some complex custom descendant bindings which are not picking
up the right bindings, so in those cases you at least have a manual way to infer what should be validated.

#### Basic Usage
```html
<div data-bind="show-error" validate-property="someProperty"></div>
```

#### Advanced Usage
```html
<div data-bind="show-error, attr: { 'validate-property': 'someArray[' + index() + '].foo'}"></div>
```

Remember you want to pass the string literal for the property, this allows you to be able to use the 
knockout context variables in the view if you are within an iteration etc. You also need to make sure
that this call is within a `validate-with` container.

### `validation-summary` Binding

This binding populates the element with a validation summary showing all current errors for the model.

#### Usage
```html
<div data-bind="validation-summary"></div>
```

#### Advanced Usage
```html
<div data-bind="validation-summary: [ validationGroupOne, validationGroupTwo ]"></div>
```

You can use this binding within the scope of a `validate-with` binding, or explicitly pass it one or many
validation groups, this way if you have multiple validators on the page you can have them all be output 
in one place.

## Styling

By default there is no styling, as its up to you really how you want to style your view errors, 
there are some classes which are appended by the default view strategies which you should target in your css:

- **.valid** : When a the property associated is valid (you would probably do `input.valid` in most cases) 
- **.invalid** : When the property associated is invalid (you would probably do `input.invalid` in most cases)
- **.validation-error-container** : The element containing an inline error for a property
- **.validation-summary-container** : The element containing the validation summary elements
- **.summary-error** : The element containing each validation summary error

These classes are defined within the `treacherous-view` so if you make your own instances of `IViewStrategy` 
or your own `ViewSummary` type you can change it to output whatever you want.

## Extending

### Binding Magic

So by default there is some magic which proxies the default `value` and `textInput` bindings to allow inline 
validation for free, there are also some proxies around `with` and `foreach` which basically allow the scope
of the properties. So if you have any custom bindings which you want to auto-magically support inline validation 
or pass descendant property scopes down to, look at the examples in the `binding/overrides` folder.

### Custom View Strategies

Out the box there is one view strategy `inline` and a default summary binding `ValidationSummary`, which primarily 
come from `treacherous-view`, as these are all pre-made it would be best ot look at the `treacherous-view` repo 
for more information, as these are just wrapped up in bindings, but you can easily make your own view strategies 
and register them for use.

A good example of this would be if you wanted to use qtip2 (other tooltip libraries are available) as your
inline validation system, which would make tooltips to show validation errors rather than the default inline
ones.

## Developing

If you want to add to the development clone and do the normal `npm install` and `gulp` then if you want to 
run tests do `gulp run-tests` which will run all the built in tests, there are no acceptance tests to date
so you will need to manually run the example and confirm it exists, may add some cucumber tests at a later date.

## Credits

"Mountains" Icon courtesy of [The Noun Project](https://thenounproject.com/), by Aleksandr Vector, under [CC 3.0](http://creativecommons.org/licenses/by/3.0/us/)

"Knockout" Icon courtesy of [knockout.js](http://knockoutjs.com/) project