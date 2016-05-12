(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"), require("treacherous"), require("property-resolver"));
	else if(typeof define === 'function' && define.amd)
		define(["knockout", "treacherous", "property-resolver"], factory);
	else if(typeof exports === 'object')
		exports["Treacherous"] = factory(require("knockout"), require("treacherous"), require("property-resolver"));
	else
		root["Treacherous"] = factory(root["knockout"], root["treacherous"], root["property-resolver"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
	__export(__webpack_require__(13));
	__export(__webpack_require__(15));
	__export(__webpack_require__(16));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));
	__export(__webpack_require__(14));
	__export(__webpack_require__(11));
	__export(__webpack_require__(4));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));
	__export(__webpack_require__(21));
	__export(__webpack_require__(22));
	__export(__webpack_require__(12));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var treacherous_1 = __webpack_require__(3);
	var knockout_model_watcher_1 = __webpack_require__(4);
	var knockout_property_resolver_1 = __webpack_require__(9);
	var inline_validator_1 = __webpack_require__(10);
	var simple_validation_summary_1 = __webpack_require__(12);
	var treacherous_2 = __webpack_require__(3);
	exports.ruleRegistry = treacherous_2.ruleRegistry;
	exports.FieldErrorProcessor = treacherous_2.FieldErrorProcessor;
	exports.RuleResolver = treacherous_2.RuleResolver;
	exports.ValidationGroupFactory = treacherous_2.ValidationGroupFactory;
	exports.RulesetBuilder = treacherous_2.RulesetBuilder;
	exports.Ruleset = treacherous_2.Ruleset;
	exports.ValidationGroup = treacherous_2.ValidationGroup;
	var fieldErrorProcessor = new treacherous_1.FieldErrorProcessor(treacherous_1.ruleRegistry);
	var knockoutPropertyResolver = new knockout_property_resolver_1.KnockoutPropertyResolver();
	var ruleResolver = new treacherous_1.RuleResolver();
	var knockoutModelWatcher = new knockout_model_watcher_1.KnockoutModelWatcher(new knockout_property_resolver_1.KnockoutPropertyResolver());
	var validationGroupFactory = new treacherous_1.ValidationGroupFactory(fieldErrorProcessor, knockoutModelWatcher, knockoutPropertyResolver, ruleResolver);
	function createRuleset() {
	    return new treacherous_1.RulesetBuilder().create();
	}
	exports.createRuleset = createRuleset;
	function createWithRules(model, rulesCreator) {
	    var ruleset = rulesCreator(new treacherous_1.RulesetBuilder());
	    return validationGroupFactory.createValidationGroup(model, ruleset);
	}
	exports.createWithRules = createWithRules;
	function create(model, ruleset) {
	    return validationGroupFactory.createValidationGroup(model, ruleset);
	}
	exports.create = create;
	ko["validation"] = {
	    validator: new inline_validator_1.InlineValidatior(),
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

	var treacherous_1 = __webpack_require__(3);
	var property_resolver_1 = __webpack_require__(5);
	var event_js_1 = __webpack_require__(6);
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
	            _this.watchCache = [];
	            _this.watchCacheKeys = [];
	            _this.cacheWatchTargets("", _this.ruleset);
	            _this.watchCacheKeys.forEach(function (key, index) {
	                if (previousKeyCache.indexOf(key) == -1) {
	                    var previousValue = _this.watchCache[index].previousValue;
	                    var propertyChangedArgs = new treacherous_1.PropertyChangedEvent(key, previousValue, null);
	                    setTimeout(function () { _this.onPropertyChanged.publish(propertyChangedArgs); }, 1);
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
	            for (var param in ruleset.rules) {
	                paramRoute = propertyStack ? propertyStack + "." + param : param;
	                parameterRules = ruleset.rules[param];
	                parameterRules.forEach(function (rule) {
	                    var possibleValue = _this.propertyResolver.resolveProperty(_this.model, paramRoute);
	                    var currentValue = ko.unwrap(possibleValue);
	                    var isArray = treacherous_1.TypeHelper.isArrayType(ko.unwrap(currentValue));
	                    if (isArray) {
	                        var cachedArrayInfo = { length: ko.unwrap(currentValue).length, isArray: true };
	                        _this.watchProperty(paramRoute, cachedArrayInfo);
	                    }
	                    if (rule.isForEach) {
	                        // ruleset
	                        if (rule.internalRule.getRulesForProperty) {
	                            ko.unwrap(_this.model[param]).forEach(function (element, index) {
	                                _this.cacheWatchTargets(paramRoute + "[" + index + "]", rule.internalRule);
	                            });
	                        }
	                        else {
	                            ko.unwrap(_this.model[param]).forEach(function (element, index) {
	                                _this.watchProperty(paramRoute + "[" + index + "]", ko.unwrap(_this.model[param])[index]);
	                            });
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
	                var possibleValue = _this.propertyResolver.resolveProperty(_this.model, propertyWatcher.propertyPath);
	                var currentValue = ko.unwrap(possibleValue);
	                if (currentValue && propertyWatcher.previousValue.isArray) {
	                    if (currentValue.length != propertyWatcher.previousValue.length) {
	                        refreshOnNextCycle = true;
	                    }
	                }
	                else if (currentValue !== propertyWatcher.previousValue) {
	                    var propertyChangedArgs = new treacherous_1.PropertyChangedEvent(propertyWatcher.propertyPath, currentValue, propertyWatcher.previousValue);
	                    setTimeout(function () { _this.onPropertyChanged.publish(propertyChangedArgs); }, 1);
	                    propertyWatcher.previousValue = currentValue;
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
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* This is an auto-generated file by gulp-es6-exporter */
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var event_listener_1 = __webpack_require__(8);
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var class_helper_1 = __webpack_require__(11);
	var InlineValidatior = (function () {
	    function InlineValidatior() {
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
	    return InlineValidatior;
	})();
	exports.InlineValidatior = InlineValidatior;


/***/ },
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(14);
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(14);
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(14);
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(14);
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(14);
	ko.bindingHandlers["validateProperty"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var validationGroup = binding_helper_1.BindingHelper.getValidationGroup(bindingContext);
	        var propertyPath = valueAccessor();
	        if (validationGroup) {
	            binding_helper_1.BindingHelper.setupValidationListener(validationGroup, propertyPath, element);
	            validationGroup.getPropertyError(propertyPath)
	                .then(function (error) {
	                binding_helper_1.BindingHelper.handleElementError(element, !error, error);
	            });
	        }
	    }
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(14);
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var class_helper_1 = __webpack_require__(11);
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
/* 21 */
/***/ function(module, exports) {

	


/***/ },
/* 22 */
/***/ function(module, exports) {

	


/***/ }
/******/ ])
});
;