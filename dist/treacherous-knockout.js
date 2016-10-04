(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"), require("treacherous"), require("property-resolver"));
	else if(typeof define === 'function' && define.amd)
		define(["knockout", "treacherous", "property-resolver"], factory);
	else if(typeof exports === 'object')
		exports["Treacherous"] = factory(require("knockout"), require("treacherous"), require("property-resolver"));
	else
		root["Treacherous"] = factory(root["knockout"], root["treacherous"], root["property-resolver"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(14));
	__export(__webpack_require__(16));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));
	__export(__webpack_require__(21));
	__export(__webpack_require__(22));
	__export(__webpack_require__(15));
	__export(__webpack_require__(12));
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));
	__export(__webpack_require__(4));
	__export(__webpack_require__(11));
	__export(__webpack_require__(23));
	__export(__webpack_require__(24));
	__export(__webpack_require__(13));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var ko = __webpack_require__(2);
	__export(__webpack_require__(3));
	var treacherous_2 = __webpack_require__(3);
	var knockout_property_resolver_1 = __webpack_require__(4);
	var knockout_model_watcher_factory_1 = __webpack_require__(5);
	var inline_validator_1 = __webpack_require__(11);
	var simple_validation_summary_1 = __webpack_require__(13);
	var knockoutPropertyResolver = new knockout_property_resolver_1.KnockoutPropertyResolver();
	var knockoutModelWatcherFactory = new knockout_model_watcher_factory_1.KnockoutModelWatcherFactory(knockoutPropertyResolver);
	var modelResolverFactory = new treacherous_2.ModelResolverFactory(knockoutPropertyResolver);
	function createGroup() {
	    return treacherous_2.createGroup()
	        .andValidateOnStart()
	        .asReactiveGroup()
	        .withModelWatcherFactory(knockoutModelWatcherFactory)
	        .withModelResolverFactory(modelResolverFactory);
	}
	exports.createGroup = createGroup;
	ko["validation"] = {
	    validator: new inline_validator_1.InlineValidator(),
	    validationSummary: new simple_validation_summary_1.SimpleValidationSummary()
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var KnockoutPropertyResolver = (function () {
	    function KnockoutPropertyResolver() {
	        var _this = this;
	        this.indexRegex = /\[(\d)]/;
	        this.splitRegex = /\./;
	        this.resolveProperty = function (model, propertyChain) {
	            var check = null, chain = [], lastkey = '';
	            if (typeof propertyChain !== 'string') {
	                throw new TypeError("propertyChain is not a string");
	            }
	            var processChain = function (key) {
	                var arrayIndex = -1;
	                if (_this.indexRegex.test(key)) {
	                    arrayIndex = _this.indexRegex.exec(key)[1];
	                    key = key.replace(_this.indexRegex, "");
	                }
	                if (check) {
	                    if (typeof check === 'object') {
	                        if (arrayIndex >= 0) {
	                            if (arrayIndex < ko.unwrap(check[key]).length) {
	                                chain.push(check = ko.unwrap(check[key])[arrayIndex]);
	                                lastkey = key[arrayIndex];
	                            }
	                            else {
	                                throw new TypeError('cannot find index "' + arrayIndex + '" in ' + lastkey);
	                            }
	                        }
	                        else {
	                            if (key in check) {
	                                chain.push(check = ko.unwrap(check[key]));
	                                lastkey = key;
	                            }
	                            else {
	                                throw new TypeError('cannot resolve "' + key + '" in ' + lastkey);
	                            }
	                        }
	                    }
	                    else {
	                        throw new TypeError('"' + check + '" ' + ' does not seem to be an object');
	                    }
	                }
	                else {
	                    if (arrayIndex >= 0) {
	                        if (key.length == 0) {
	                            chain.push(check = ko.unwrap(model)[arrayIndex]);
	                            lastkey = arrayIndex;
	                        }
	                        else {
	                            chain.push(check = ko.unwrap(model[key])[arrayIndex]);
	                            lastkey = key[arrayIndex];
	                        }
	                    }
	                    else {
	                        lastkey = key;
	                        chain.push(check = ko.unwrap(model[key]));
	                    }
	                }
	            };
	            var propertyRouteSections = propertyChain.split(_this.splitRegex);
	            propertyRouteSections.forEach(processChain);
	            return ko.unwrap(chain[chain.length - 1]);
	        };
	    }
	    KnockoutPropertyResolver.prototype.decomposePropertyRoute = function (propertyRoute) {
	        var routeComponents = [];
	        var arrayIndex;
	        var splitRoutes = propertyRoute.split(this.splitRegex);
	        for (var i = 0; i < splitRoutes.length; i++) {
	            if (this.indexRegex.test(splitRoutes[i])) {
	                arrayIndex = this.indexRegex.exec(splitRoutes[i])[1];
	                routeComponents.push(splitRoutes[i].replace(this.indexRegex, ""));
	                routeComponents.push("[" + arrayIndex + "]");
	            }
	            else {
	                routeComponents.push(splitRoutes[i]);
	            }
	        }
	        return routeComponents;
	    };
	    KnockoutPropertyResolver.prototype.getPropertyRouteSection = function (propertyRoute, sectionIndex) {
	        if (sectionIndex === void 0) { sectionIndex = 0; }
	        var routeComponents = this.decomposePropertyRoute(propertyRoute);
	        return routeComponents[sectionIndex];
	    };
	    KnockoutPropertyResolver.prototype.buildPropertyRoute = function (propertySections) {
	        var propertyRoute = "";
	        for (var i = 0; i < propertySections.length; i++) {
	            if (propertyRoute.length == 0) {
	                propertyRoute += propertySections[i];
	                continue;
	            }
	            if (propertySections[i].indexOf("[") >= 0) {
	                propertyRoute += "" + propertySections[i];
	                continue;
	            }
	            propertyRoute += "." + propertySections[i];
	        }
	        return propertyRoute;
	    };
	    return KnockoutPropertyResolver;
	})();
	exports.KnockoutPropertyResolver = KnockoutPropertyResolver;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var knockout_model_watcher_1 = __webpack_require__(6);
	var KnockoutModelWatcherFactory = (function () {
	    function KnockoutModelWatcherFactory(propertyResolver) {
	        this.propertyResolver = propertyResolver;
	    }
	    KnockoutModelWatcherFactory.prototype.createModelWatcher = function () {
	        return new knockout_model_watcher_1.KnockoutModelWatcher(this.propertyResolver);
	    };
	    return KnockoutModelWatcherFactory;
	})();
	exports.KnockoutModelWatcherFactory = KnockoutModelWatcherFactory;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var treacherous_1 = __webpack_require__(3);
	var property_resolver_1 = __webpack_require__(7);
	var event_js_1 = __webpack_require__(8);
	var ko = __webpack_require__(2);
	var KnockoutModelWatcher = (function () {
	    function KnockoutModelWatcher(propertyResolver) {
	        var _this = this;
	        if (propertyResolver === void 0) { propertyResolver = new property_resolver_1.PropertyResolver(); }
	        this.propertyResolver = propertyResolver;
	        this.watchCache = [];
	        this.watchCacheKeys = [];
	        this.watcherInterval = null;
	        this.setupWatcher = function (model, ruleset, scanInterval) {
	            if (scanInterval === void 0) { scanInterval = 500; }
	            _this.model = model;
	            _this.ruleset = ruleset;
	            _this.scanInterval = scanInterval;
	            _this.watchCache = [];
	            _this.watchCacheKeys = [];
	            _this.cacheWatchTargets("", _this.ruleset);
	            _this.scanProperties();
	            _this.startWatching();
	        };
	        this.changeWatcherTarget = function (model) {
	            _this.model = model;
	            _this.scanProperties();
	        };
	        this.startWatching = function () {
	            _this.stopWatching();
	            _this.watcherInterval = setInterval(_this.scanProperties, _this.scanInterval);
	        };
	        this.stopWatching = function () {
	            if (_this.watcherInterval) {
	                clearInterval(_this.watcherInterval);
	            }
	        };
	        this.updateAndNotifyDifferences = function () {
	            var previousKeyCache = _this.watchCacheKeys;
	            var previousWatchCache = _this.watchCache;
	            _this.watchCache = [];
	            _this.watchCacheKeys = [];
	            _this.cacheWatchTargets("", _this.ruleset);
	            _this.watchCacheKeys.forEach(function (key, index) {
	                if (previousKeyCache.indexOf(key) == -1) {
	                    var previousValue = _this.watchCache[index].previousValue;
	                    var propertyChangedArgs = new treacherous_1.PropertyChangedEvent(key, previousValue, null);
	                    setTimeout(function () { _this.onPropertyChanged.publish(propertyChangedArgs); }, 1);
	                }
	                else if (previousWatchCache[index].previousValue && previousWatchCache[index].previousValue.isArray) {
	                    if (previousWatchCache[index].previousValue.length != _this.watchCache[index].previousValue.length) {
	                        var newValue = _this.watchCache[index].previousValue;
	                        var previousValue = previousWatchCache[index].previousValue;
	                        var propertyChangedArgs = new treacherous_1.PropertyChangedEvent(key, newValue, previousValue);
	                        setTimeout(function () { _this.onPropertyChanged.publish(propertyChangedArgs); }, 1);
	                    }
	                }
	            });
	        };
	        this.watchProperty = function (watchRoute, previousData) {
	            if (_this.watchCacheKeys.indexOf(watchRoute) == -1) {
	                var propertyWatcher = new treacherous_1.PropertyWatcher(watchRoute, previousData);
	                _this.watchCache.push(propertyWatcher);
	                _this.watchCacheKeys.push(watchRoute);
	            }
	        };
	        this.cacheWatchTargets = function (propertyStack, ruleset) {
	            var paramRoute, parameterRules;
	            var anyRulesAreForEach, anyRulesAreSets;
	            var hasValue, currentValue;
	            for (var param in ruleset.rules) {
	                paramRoute = propertyStack ? propertyStack + "." + param : param;
	                parameterRules = ruleset.rules[param];
	                anyRulesAreForEach = false;
	                anyRulesAreSets = false;
	                parameterRules.forEach(function (rule) {
	                    if (rule.isForEach) {
	                        anyRulesAreForEach = true;
	                    }
	                    if (rule.getRulesForProperty) {
	                        anyRulesAreSets = true;
	                    }
	                });
	                hasValue = false;
	                try {
	                    var possibleValue = _this.propertyResolver.resolveProperty(_this.model, paramRoute);
	                    currentValue = ko.unwrap(possibleValue);
	                    hasValue = true;
	                }
	                catch (ex) { }
	                if (currentValue == null && (anyRulesAreForEach || anyRulesAreSets)) {
	                    if (anyRulesAreForEach) {
	                        currentValue = [];
	                    }
	                    else if (anyRulesAreSets) {
	                        currentValue = {};
	                    }
	                    else {
	                        currentValue = null;
	                    }
	                }
	                parameterRules.forEach(function (rule) {
	                    var isArray = treacherous_1.TypeHelper.isArrayType(currentValue);
	                    if (isArray) {
	                        var cachedArrayInfo = { length: currentValue.length, isArray: true };
	                        _this.watchProperty(paramRoute, cachedArrayInfo);
	                    }
	                    if (rule.isForEach && hasValue) {
	                        // ruleset
	                        if (rule.internalRule.getRulesForProperty) {
	                            if (_this.model[param]) {
	                                ko.unwrap(_this.model[param]).forEach(function (element, index) {
	                                    _this.cacheWatchTargets(paramRoute + "[" + index + "]", rule.internalRule);
	                                });
	                            }
	                        }
	                        else {
	                            if (_this.model[param]) {
	                                ko.unwrap(_this.model[param]).forEach(function (element, index) {
	                                    _this.watchProperty(paramRoute + "[" + index + "]", ko.unwrap(_this.model[param])[index]);
	                                });
	                            }
	                        }
	                    }
	                    else {
	                        // ruleset
	                        if (rule.getRulesForProperty) {
	                            _this.cacheWatchTargets(paramRoute, rule);
	                        }
	                        else {
	                            if (!isArray) {
	                                _this.watchProperty(paramRoute, currentValue);
	                            }
	                        }
	                    }
	                });
	            }
	        };
	        this.scanProperties = function () {
	            if (_this.onPropertyChanged.getSubscriptionCount() == 0) {
	                return;
	            }
	            if (_this.watchCache.length == 0) {
	                return;
	            }
	            var refreshOnNextCycle = false;
	            _this.watchCache.forEach(function (propertyWatcher) {
	                var currentValue;
	                var hasChanged = false;
	                try {
	                    var possibleValue = _this.propertyResolver.resolveProperty(_this.model, propertyWatcher.propertyPath);
	                    currentValue = ko.unwrap(possibleValue);
	                }
	                catch (ex) { }
	                if (typeof (currentValue) == "undefined") {
	                    currentValue = propertyWatcher.previousValue;
	                }
	                if (propertyWatcher.previousValue && propertyWatcher.previousValue.isArray) {
	                    var currentLength = currentValue.length || 0;
	                    if (currentLength != propertyWatcher.previousValue.length) {
	                        hasChanged = true;
	                    }
	                }
	                else if (currentValue !== propertyWatcher.previousValue) {
	                    var propertyChangedArgs = new treacherous_1.PropertyChangedEvent(propertyWatcher.propertyPath, currentValue, propertyWatcher.previousValue);
	                    setTimeout(function () { _this.onPropertyChanged.publish(propertyChangedArgs); }, 1);
	                    propertyWatcher.previousValue = currentValue;
	                }
	                if (hasChanged) {
	                    refreshOnNextCycle = true;
	                }
	            });
	            if (refreshOnNextCycle) {
	                setTimeout(_this.updateAndNotifyDifferences, 1);
	            }
	        };
	        this.onPropertyChanged = new event_js_1.EventHandler(this);
	    }
	    return KnockoutModelWatcher;
	})();
	exports.KnockoutModelWatcher = KnockoutModelWatcher;


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* This is an auto-generated file by gulp-es6-exporter */
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var event_listener_1 = __webpack_require__(10);
	var EventHandler = (function () {
	    function EventHandler(sender) {
	        var _this = this;
	        this.sender = sender;
	        this.listeners = [];
	        this.subscribe = function (callback, predicate) {
	            _this.listeners.push(new event_listener_1.EventListener(callback, predicate));
	            return function () { _this.unsubscribe(callback); };
	        };
	        this.unsubscribe = function (callback) {
	            for (var i = 0; i < _this.listeners.length; i++) {
	                if (_this.listeners[i].callback == callback) {
	                    _this.listeners.splice(i, 1);
	                    return;
	                }
	            }
	        };
	        this.unsubscribeAll = function () {
	            _this.listeners = [];
	        };
	        this.publish = function (args) {
	            _this.listeners.forEach(function (eventListener) {
	                if (eventListener.predicate) {
	                    if (eventListener.predicate(args)) {
	                        setTimeout(function () { eventListener.callback(args, _this.sender); }, 1);
	                    }
	                }
	                else {
	                    setTimeout(function () { eventListener.callback(args, _this.sender); }, 1);
	                }
	            });
	        };
	        this.publishSync = function (args) {
	            _this.listeners.forEach(function (eventListener) {
	                if (eventListener.predicate) {
	                    if (eventListener.predicate(args)) {
	                        eventListener.callback(args, _this.sender);
	                    }
	                }
	                else {
	                    eventListener.callback(args, _this.sender);
	                }
	            });
	        };
	        this.getSubscriptionCount = function () {
	            return _this.listeners.length;
	        };
	    }
	    return EventHandler;
	})();
	exports.EventHandler = EventHandler;


/***/ },
/* 10 */
/***/ function(module, exports) {

	var EventListener = (function () {
	    function EventListener(callback, predicate) {
	        this.callback = callback;
	        this.predicate = predicate;
	    }
	    return EventListener;
	})();
	exports.EventListener = EventListener;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var class_helper_1 = __webpack_require__(12);
	var InlineValidator = (function () {
	    function InlineValidator() {
	        var _this = this;
	        this.currentCount = 1;
	        this.getElementValidatorId = function (element) {
	            if (!element.getAttribute("id")) {
	                element.setAttribute("id", "unique-" + _this.currentCount++);
	            }
	            return element.getAttribute('id') + "-error-container";
	        };
	        this.createErrorElement = function (message, element) {
	            var errorContainerName = _this.getElementValidatorId(element);
	            var errorContainer = document.createElement("div");
	            errorContainer.id = errorContainerName;
	            errorContainer.className = "validation-error-container";
	            errorContainer.textContent = message;
	            element.parentElement.appendChild(errorContainer);
	        };
	        this.removeErrorElement = function (element) {
	            var errorContainerName = this.getElementValidatorId(element);
	            var errorElement = document.getElementById(errorContainerName);
	            if (errorElement) {
	                errorElement.remove();
	            }
	        };
	        this.addElementError = function (message, element) {
	            var errorContainerName = this.getElementValidatorId(element);
	            var errorContainer = document.getElementById(errorContainerName);
	            if (!errorContainer) {
	                this.createErrorElement(message, element);
	            }
	            else {
	                this.removeErrorElement(element);
	                this.createErrorElement(message, element);
	            }
	        };
	        this.handleValidElement = function (element) {
	            class_helper_1.ClassHelper.removeClass(element, "invalid");
	            class_helper_1.ClassHelper.addClass(element, "valid");
	            _this.removeErrorElement(element);
	        };
	        this.handleErrorElement = function (element, error) {
	            class_helper_1.ClassHelper.removeClass(element, "valid");
	            class_helper_1.ClassHelper.addClass(element, "invalid");
	            _this.addElementError(error, element);
	        };
	    }
	    return InlineValidator;
	})();
	exports.InlineValidator = InlineValidator;


/***/ },
/* 12 */
/***/ function(module, exports) {

	var ClassHelper = (function () {
	    function ClassHelper() {
	    }
	    ClassHelper.hasClass = function (element, className) {
	        if (element.classList) {
	            return element.classList.contains(className);
	        }
	        return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	    };
	    ClassHelper.addClass = function (element, className) {
	        if (element.classList) {
	            element.classList.add(className);
	        }
	        else if (!ClassHelper.hasClass(element, className)) {
	            element.className += " " + className;
	        }
	    };
	    ClassHelper.removeClass = function (element, className) {
	        if (element.classList) {
	            element.classList.remove(className);
	        }
	        else if (ClassHelper.hasClass(element, className)) {
	            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	            element.className = element.className.replace(reg, ' ');
	        }
	    };
	    return ClassHelper;
	})();
	exports.ClassHelper = ClassHelper;


/***/ },
/* 13 */
/***/ function(module, exports) {

	var SimpleValidationSummary = (function () {
	    function SimpleValidationSummary() {
	    }
	    SimpleValidationSummary.prototype.buildSummary = function (errors) {
	        var newContent = "";
	        for (var errorParam in errors) {
	            newContent += "<p class=\"validation-summary-entry\">" + errorParam + " - " + errors[errorParam] + "</p>";
	        }
	        return newContent;
	    };
	    return SimpleValidationSummary;
	})();
	exports.SimpleValidationSummary = SimpleValidationSummary;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(15);
	ko.bindingHandlers.foreach.preprocess = function (value, name, addBinding) {
	    addBinding(binding_helper_1.BindingHelper.validationPropertyBindingName, "'" + value + "'");
	    return value;
	};
	var originalForEachBindingInit = ko.bindingHandlers.foreach.init;
	ko.bindingHandlers.foreach.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	    var propertyName = allBindings.get(binding_helper_1.BindingHelper.validationPropertyBindingName);
	    var propertyPath = binding_helper_1.BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
	    bindingContext[binding_helper_1.BindingHelper.validationPropertyPathBindingName] = propertyPath;
	    return originalForEachBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	var BindingHelper = (function () {
	    function BindingHelper() {
	    }
	    BindingHelper.getValidationGroup = function (bindingContext) {
	        return bindingContext[BindingHelper.validationGroup];
	    };
	    BindingHelper.getValidationOptions = function (bindingContext) {
	        return bindingContext[BindingHelper.validationOptions];
	    };
	    BindingHelper.getCurrentPropertyPath = function (propertyName, bindingContext) {
	        var propertyPath = "";
	        if (bindingContext.$index) {
	            var suffixPropertyName = ((propertyName == "$data" || propertyName == "$rawData") ? "" : propertyName);
	            if (bindingContext.$parentContext && bindingContext.$parentContext[BindingHelper.validationPropertyPathBindingName]) {
	                propertyPath = bindingContext.$parentContext[BindingHelper.validationPropertyPathBindingName] + "[" + bindingContext.$index() + "]" + suffixPropertyName;
	            }
	            else {
	                propertyPath = "[" + bindingContext.$index() + "]" + suffixPropertyName;
	            }
	        }
	        else {
	            propertyPath = propertyName;
	        }
	        return propertyPath;
	    };
	    BindingHelper.handleElementError = function (element, isValid, error) {
	        if (isValid) {
	            ko["validation"]["validator"].handleValidElement(element);
	        }
	        else {
	            ko["validation"]["validator"].handleErrorElement(element, error);
	        }
	    };
	    BindingHelper.setupValidationListener = function (validationGroup, propertyPath, element, customHandler) {
	        var _this = this;
	        if (customHandler === void 0) { customHandler = null; }
	        var predicate = function (x) { return x.property == propertyPath; };
	        var handler;
	        if (!customHandler) {
	            handler = function (args) {
	                _this.handleElementError(element, args.isValid, args.error);
	            };
	        }
	        else {
	            handler = customHandler;
	        }
	        var subscription = validationGroup.propertyStateChangedEvent.subscribe(handler, predicate);
	        ko.utils.domNodeDisposal.addDisposeCallback(element, subscription);
	    };
	    BindingHelper.validationPropertyBindingName = "validationProperty";
	    BindingHelper.validationPropertyPathBindingName = "validationPropertyPath";
	    BindingHelper.validationGroup = "validationGroup";
	    BindingHelper.validationOptions = "validationOptions";
	    return BindingHelper;
	})();
	exports.BindingHelper = BindingHelper;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(15);
	ko.bindingHandlers.textInput.preprocess = function (value, name, addBinding) {
	    addBinding(binding_helper_1.BindingHelper.validationPropertyBindingName, "'" + value + "'");
	    return value;
	};
	var originalTextInputBindingInit = ko.bindingHandlers.textInput.init;
	ko.bindingHandlers.textInput.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	    var propertyName = allBindings.get(binding_helper_1.BindingHelper.validationPropertyBindingName);
	    var propertyPath = binding_helper_1.BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
	    var validationGroup = binding_helper_1.BindingHelper.getValidationGroup(bindingContext);
	    var validationOptions = binding_helper_1.BindingHelper.getValidationOptions(bindingContext);
	    bindingContext[binding_helper_1.BindingHelper.validationPropertyPathBindingName] = propertyPath;
	    if (validationGroup && validationOptions.inlineValidation) {
	        binding_helper_1.BindingHelper.setupValidationListener(validationGroup, propertyPath, element);
	        validationGroup.getPropertyError(propertyPath)
	            .then(function (error) {
	            binding_helper_1.BindingHelper.handleElementError(element, !error, error);
	        });
	    }
	    return originalTextInputBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(15);
	ko.bindingHandlers.value.preprocess = function (value, name, addBinding) {
	    addBinding(binding_helper_1.BindingHelper.validationPropertyBindingName, "'" + value + "'");
	    return value;
	};
	var originalValueBindingInit = ko.bindingHandlers.value.init;
	ko.bindingHandlers.value.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	    var propertyName = allBindings.get(binding_helper_1.BindingHelper.validationPropertyBindingName);
	    var propertyPath = binding_helper_1.BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
	    var validationGroup = binding_helper_1.BindingHelper.getValidationGroup(bindingContext);
	    var validationOptions = binding_helper_1.BindingHelper.getValidationOptions(bindingContext);
	    bindingContext[binding_helper_1.BindingHelper.validationPropertyPathBindingName] = propertyPath;
	    if (validationGroup && validationOptions.inlineValidation) {
	        binding_helper_1.BindingHelper.setupValidationListener(validationGroup, propertyPath, element);
	        validationGroup.getPropertyError(propertyPath)
	            .then(function (error) {
	            binding_helper_1.BindingHelper.handleElementError(element, !error, error);
	        });
	    }
	    return originalValueBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(15);
	ko.bindingHandlers.with.preprocess = function (value, name, addBinding) {
	    addBinding(binding_helper_1.BindingHelper.validationPropertyBindingName, "'" + value + "'");
	    return value;
	};
	var originalWithBindingInit = ko.bindingHandlers.with.init;
	ko.bindingHandlers.with.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	    var propertyName = allBindings.get(binding_helper_1.BindingHelper.validationPropertyBindingName);
	    var propertyPath = binding_helper_1.BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
	    bindingContext[binding_helper_1.BindingHelper.validationPropertyPathBindingName] = propertyPath;
	    return originalWithBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	ko.bindingHandlers["enabled-with"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var validationGroup = valueAccessor();
	        element.disabled = true;
	        validationGroup.modelStateChangedEvent.subscribe(function (eventArgs) {
	            element.disabled = !eventArgs.isValid;
	        });
	    }
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(15);
	ko.bindingHandlers["validateProperty"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var validationGroup = binding_helper_1.BindingHelper.getValidationGroup(bindingContext);
	        var propertyPath = valueAccessor();
	        var currentError;
	        var hasInputStarted = false;
	        var onElementChanged = function () {
	            hasInputStarted = true;
	            element.removeEventListener("focus", onElementChanged);
	            console.log("NOW RESPONDING");
	            binding_helper_1.BindingHelper.handleElementError(element, !currentError, currentError);
	        };
	        element.addEventListener('focus', onElementChanged);
	        if (validationGroup) {
	            binding_helper_1.BindingHelper.setupValidationListener(validationGroup, propertyPath, element);
	            validationGroup.getPropertyError(propertyPath)
	                .then(function (error) {
	                currentError = error;
	                if (hasInputStarted) {
	                    console.log("HANDLING");
	                    binding_helper_1.BindingHelper.handleElementError(element, !currentError, currentError);
	                }
	            });
	        }
	    }
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(15);
	var defaultOptions = {
	    inlineValidation: true
	};
	ko.bindingHandlers["validateWith"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var bindingOptions = valueAccessor();
	        if (bindingOptions.getModelErrors) {
	            bindingContext[binding_helper_1.BindingHelper.validationGroup] = bindingOptions;
	            bindingContext[binding_helper_1.BindingHelper.validationOptions] = defaultOptions;
	        }
	        else {
	            if (bindingOptions.group) {
	                bindingContext[binding_helper_1.BindingHelper.validationGroup] = bindingOptions.group;
	            }
	            if (bindingOptions.options) {
	                bindingContext[binding_helper_1.BindingHelper.validationOptions] = bindingOptions.options;
	            }
	            else {
	                bindingContext[binding_helper_1.BindingHelper.validationOptions] = defaultOptions;
	            }
	        }
	    }
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var class_helper_1 = __webpack_require__(12);
	ko.bindingHandlers["validationSummary"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var validationGroup = valueAccessor();
	        var refreshErrorSummary = function () {
	            validationGroup.getModelErrors()
	                .then(ko["validation"]["validationSummary"].buildSummary)
	                .then(function (errorSummary) {
	                element.innerHTML = errorSummary;
	            });
	        };
	        class_helper_1.ClassHelper.addClass(element, "validation-summary-container");
	        var unsubscriber = validationGroup.propertyStateChangedEvent.subscribe(refreshErrorSummary);
	        ko.utils.domNodeDisposal.addDisposeCallback(element, unsubscriber);
	        refreshErrorSummary();
	    }
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	


/***/ },
/* 24 */
/***/ function(module, exports) {

	


/***/ }
/******/ ])
});
;