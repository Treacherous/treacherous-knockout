(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("treacherous"), require("knockout"), require("property-resolver"));
	else if(typeof define === 'function' && define.amd)
		define(["treacherous", "knockout", "property-resolver"], factory);
	else if(typeof exports === 'object')
		exports["Treacherous"] = factory(require("treacherous"), require("knockout"), require("property-resolver"));
	else
		root["Treacherous"] = factory(root["treacherous"], root["knockout"], root["property-resolver"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__) {
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
	__export(__webpack_require__(22));
	__export(__webpack_require__(23));
	__export(__webpack_require__(26));
	__export(__webpack_require__(24));
	__export(__webpack_require__(27));
	__export(__webpack_require__(16));
	__export(__webpack_require__(17));
	__export(__webpack_require__(14));
	__export(__webpack_require__(25));
	__export(__webpack_require__(28));
	__export(__webpack_require__(29));
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(2));
	__export(__webpack_require__(3));
	var treacherous_2 = __webpack_require__(2);
	var knockout_property_resolver_1 = __webpack_require__(14);
	var knockout_model_watcher_factory_1 = __webpack_require__(16);
	var knockoutPropertyResolver = new knockout_property_resolver_1.KnockoutPropertyResolver();
	var knockoutModelWatcherFactory = new knockout_model_watcher_factory_1.KnockoutModelWatcherFactory(knockoutPropertyResolver);
	var modelResolverFactory = new treacherous_2.ModelResolverFactory(knockoutPropertyResolver);
	function createGroup() {
	    return treacherous_2.createGroup()
	        .andValidateOnStart()
	        .asReactiveGroup()
	        .withModelResolverFactory(modelResolverFactory)
	        .withModelWatcherFactory(knockoutModelWatcherFactory);
	}
	exports.createGroup = createGroup;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(4));
	__export(__webpack_require__(7));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));
	__export(__webpack_require__(5));
	__export(__webpack_require__(11));
	__export(__webpack_require__(8));
	__export(__webpack_require__(6));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var view_strategy_registry_1 = __webpack_require__(5);
	var inline_strategy_1 = __webpack_require__(6);
	exports.viewStrategyRegistry = new view_strategy_registry_1.ViewStrategyRegistry();
	exports.viewStrategyRegistry.registerStrategy(new inline_strategy_1.InlineStrategy());


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var ViewStrategyRegistry = (function () {
	    function ViewStrategyRegistry() {
	        var _this = this;
	        this.strategies = {};
	        this.registerStrategy = function (viewStrategy) { _this.strategies[viewStrategy.strategyName] = viewStrategy; };
	        this.unregisterStrategy = function (viewStrategy) { delete _this.strategies[viewStrategy.strategyName]; };
	        this.getStrategyNamed = function (strategyName) { return _this.strategies[strategyName] || null; };
	        this.hasStrategyNamed = function (strategyName) { return _this.getStrategyNamed(strategyName) != null; };
	    }
	    return ViewStrategyRegistry;
	}());
	exports.ViewStrategyRegistry = ViewStrategyRegistry;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var class_helper_1 = __webpack_require__(7);
	var inline_handler_1 = __webpack_require__(8);
	var InlineStrategy = (function () {
	    function InlineStrategy(inlineHandler) {
	        if (inlineHandler === void 0) { inlineHandler = new inline_handler_1.InlineHandler(); }
	        this.inlineHandler = inlineHandler;
	        this.strategyName = "inline";
	    }
	    InlineStrategy.prototype.propertyBecomeValid = function (element) {
	        class_helper_1.ClassHelper.removeClass(element, "invalid");
	        class_helper_1.ClassHelper.addClass(element, "valid");
	        this.inlineHandler.removeErrorElement(element);
	    };
	    InlineStrategy.prototype.propertyBecomeInvalid = function (element, error) {
	        class_helper_1.ClassHelper.removeClass(element, "valid");
	        class_helper_1.ClassHelper.addClass(element, "invalid");
	        this.inlineHandler.addElementError(error, element);
	    };
	    return InlineStrategy;
	}());
	exports.InlineStrategy = InlineStrategy;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var ClassHelper = (function () {
	    function ClassHelper() {
	    }
	    ClassHelper.hasClass = function (element, className) {
	        if (element.classList) {
	            return element.classList.contains(className);
	        }
	        return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
	    };
	    ClassHelper.addClass = function (element, className) {
	        if (element.classList) {
	            element.classList.add(className);
	        }
	        else if (!ClassHelper.hasClass(element, className)) {
	            element.errorClassName += " " + className;
	        }
	    };
	    ClassHelper.removeClass = function (element, className) {
	        if (element.classList) {
	            element.classList.remove(className);
	        }
	        else if (ClassHelper.hasClass(element, className)) {
	            var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
	            element.errorClassName = element.className.replace(reg, ' ');
	        }
	    };
	    return ClassHelper;
	}());
	exports.ClassHelper = ClassHelper;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	var InlineHandler = (function () {
	    function InlineHandler() {
	        var _this = this;
	        this.getElementValidatorId = function (element) {
	            if (!element.getAttribute("id")) {
	                element.setAttribute("id", "unique-" + InlineHandler.currentCount++);
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
	                errorElement.parentElement.removeChild(errorElement);
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
	    }
	    InlineHandler.currentCount = 1;
	    return InlineHandler;
	}());
	exports.InlineHandler = InlineHandler;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var js_literal_helper_1 = __webpack_require__(10);
	var ElementHelper = (function () {
	    function ElementHelper() {
	    }
	    ElementHelper.getPropertyRouteFrom = function (element) {
	        return element.getAttribute("validate-property");
	    };
	    ElementHelper.getStrategyFrom = function (element) {
	        return element.getAttribute("view-strategy");
	    };
	    ElementHelper.getOptionsFrom = function (element) {
	        var optionsLiteral = element.getAttribute("view-options");
	        if (!optionsLiteral) {
	            return;
	        }
	        return js_literal_helper_1.JsLiteralHelper.literalToJson(optionsLiteral);
	    };
	    return ElementHelper;
	}());
	exports.ElementHelper = ElementHelper;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	var JsLiteralHelper = (function () {
	    function JsLiteralHelper() {
	    }
	    JsLiteralHelper.literalToJson = function (literal) {
	        var jsLiteralString = "{ " + literal + " }";
	        var jsonString = jsLiteralString.replace(JsLiteralHelper.jsLiteralRegex, "$1\"$2\":");
	        var jsonObject;
	        try {
	            jsonObject = JSON.parse(jsonString);
	        }
	        catch (error) {
	            console.warn("unable to process literal: " + literal, error);
	        }
	        return jsonObject || {};
	    };
	    JsLiteralHelper.jsLiteralRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$\.][A-Za-z0-9_ \-\.$]*)(?:')?(?:\s*):/g;
	    return JsLiteralHelper;
	}());
	exports.JsLiteralHelper = JsLiteralHelper;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	(function (ValidationState) {
	    ValidationState[ValidationState["unknown"] = 0] = "unknown";
	    ValidationState[ValidationState["valid"] = 1] = "valid";
	    ValidationState[ValidationState["invalid"] = 2] = "invalid";
	})(exports.ValidationState || (exports.ValidationState = {}));
	var ValidationState = exports.ValidationState;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var class_helper_1 = __webpack_require__(7);
	var SummaryHandler = (function () {
	    function SummaryHandler() {
	        var _this = this;
	        this.applyContainerClass = function (summaryContainerElement) {
	            class_helper_1.ClassHelper.addClass(summaryContainerElement, SummaryHandler.containerClassName);
	        };
	        this.getPropertyElementName = function (propertyRoute) {
	            var sanitisedPropertyRoute = propertyRoute.replace(/[\[\].]/g, "-");
	            return "" + SummaryHandler.elementIdFormat + sanitisedPropertyRoute;
	        };
	        this.getPropertyErrorElement = function (summaryContainerElement, propertyRoute) {
	            var elementName = _this.getPropertyElementName(propertyRoute);
	            return summaryContainerElement.querySelector("#" + elementName);
	        };
	        this.createPropertyErrorElement = function (message, summaryContainerElement, propertyRoute) {
	            var elementName = _this.getPropertyElementName(propertyRoute);
	            var errorContainer = document.createElement("div");
	            errorContainer.id = elementName;
	            errorContainer.className = SummaryHandler.errorClassName;
	            errorContainer.textContent = message;
	            errorContainer.setAttribute("property-route", propertyRoute);
	            summaryContainerElement.appendChild(errorContainer);
	        };
	        this.removePropertyErrorElement = function (summaryContainerElement, propertyRoute) {
	            var errorElement = _this.getPropertyErrorElement(summaryContainerElement, propertyRoute);
	            if (errorElement) {
	                summaryContainerElement.removeChild(errorElement);
	            }
	        };
	    }
	    SummaryHandler.elementIdFormat = "summary-error-for-";
	    SummaryHandler.errorClassName = "summary-error";
	    SummaryHandler.containerClassName = "validation-summary-container";
	    return SummaryHandler;
	}());
	exports.SummaryHandler = SummaryHandler;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var summary_handler_1 = __webpack_require__(12);
	var ViewSummary = (function () {
	    function ViewSummary(summaryHandler) {
	        if (summaryHandler === void 0) { summaryHandler = new summary_handler_1.SummaryHandler(); }
	        this.summaryHandler = summaryHandler;
	    }
	    ViewSummary.prototype.setupContainer = function (summaryContainerElement) {
	        this.summaryHandler.applyContainerClass(summaryContainerElement);
	    };
	    ViewSummary.prototype.propertyBecomeValid = function (summaryContainerElement, propertyRoute) {
	        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
	    };
	    ViewSummary.prototype.propertyBecomeInvalid = function (summaryContainerElement, error, propertyRoute) {
	        var message = propertyRoute + " - " + error;
	        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
	        this.summaryHandler.createPropertyErrorElement(message, summaryContainerElement, propertyRoute);
	    };
	    return ViewSummary;
	}());
	exports.ViewSummary = ViewSummary;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(15);
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
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var knockout_model_watcher_1 = __webpack_require__(17);
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var treacherous_1 = __webpack_require__(2);
	var property_resolver_1 = __webpack_require__(18);
	var event_js_1 = __webpack_require__(19);
	var ko = __webpack_require__(15);
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
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* This is an auto-generated file by gulp-es6-exporter */
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(20));
	__export(__webpack_require__(21));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var event_listener_1 = __webpack_require__(21);
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(15);
	var pollModelErrors = function (validationGroup, callback) {
	    return setTimeout(function () {
	        validationGroup.getModelErrors()
	            .then(function (errors) {
	            var hasErrors = (Object.keys(errors).length > 0);
	            if (hasErrors) {
	                callback(hasErrors);
	            }
	        });
	    }, 500);
	};
	ko.bindingHandlers["enabled-with"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var validationGroupOrGroups = valueAccessor();
	        var isArray = typeof (validationGroupOrGroups) == "array";
	        var isReactive = !!validationGroupOrGroups.modelStateChangedEvent;
	        if (!isReactive) {
	            console.warn("enabled-with binding requires a reactive validation group");
	            return;
	        }
	        element.disabled = true;
	        var handleStateChange = function (eventArgs) { element.disabled = !eventArgs.isValid; };
	        if (isArray) {
	            validationGroupOrGroups.forEach(function (validationGroup) {
	                validationGroup.modelStateChangedEvent.subscribe(handleStateChange);
	            });
	        }
	        else {
	            validationGroupOrGroups.modelStateChangedEvent.subscribe(handleStateChange);
	        }
	        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
	            if (isArray) {
	                validationGroupOrGroups.forEach(function (validationGroup) {
	                    validationGroup.modelStateChangedEvent.unsubscribe(handleStateChange);
	                });
	            }
	            else {
	                validationGroupOrGroups.modelStateChangedEvent.unsubscribe(handleStateChange);
	            }
	        });
	    }
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(15);
	var validation_handler_1 = __webpack_require__(24);
	ko.bindingHandlers["show-error"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var propertyPath = valueAccessor();
	        validation_handler_1.ValidationHandler.handleValidation(element, propertyPath, valueAccessor(), bindingContext);
	    }
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var binding_helper_1 = __webpack_require__(25);
	var treacherous_view_1 = __webpack_require__(3);
	var ValidationHandler = (function () {
	    function ValidationHandler() {
	    }
	    ValidationHandler.handleValidation = function (element, propertyPath, propertyObservable, bindingContext) {
	        var validationGroup = binding_helper_1.BindingHelper.getValidationGroup(bindingContext);
	        var viewOptions = binding_helper_1.BindingHelper.getViewOptions(bindingContext);
	        var validationState = treacherous_view_1.ValidationState.unknown;
	        bindingContext[binding_helper_1.BindingHelper.validationPropertyPathBindingName] = propertyPath;
	        var strategy = treacherous_view_1.ElementHelper.getStrategyFrom(element) || binding_helper_1.BindingHelper.getViewStrategy(bindingContext);
	        var propertyPathOverride = treacherous_view_1.ElementHelper.getPropertyRouteFrom(element);
	        if (!validationGroup || strategy == "none") {
	            return;
	        }
	        if (propertyPathOverride) {
	            propertyPath = propertyPathOverride;
	        }
	        var viewStrategy = treacherous_view_1.viewStrategyRegistry.getStrategyNamed(strategy);
	        var getPropertyError = function () {
	            validationGroup.getPropertyError(propertyPath, true)
	                .then(function (error) {
	                if (!error) {
	                    viewStrategy.propertyBecomeValid(element, propertyPath, validationState, viewOptions);
	                    validationState = treacherous_view_1.ValidationState.valid;
	                }
	                else {
	                    viewStrategy.propertyBecomeInvalid(element, error, propertyPath, validationState, viewOptions);
	                    validationState = treacherous_view_1.ValidationState.invalid;
	                }
	            });
	        };
	        propertyObservable.subscribe(getPropertyError);
	        if (viewOptions.immediateErrors) {
	            getPropertyError();
	        }
	    };
	    ;
	    return ValidationHandler;
	})();
	exports.ValidationHandler = ValidationHandler;


/***/ },
/* 25 */
/***/ function(module, exports) {

	var BindingHelper = (function () {
	    function BindingHelper() {
	    }
	    BindingHelper.getValidationGroup = function (bindingContext) {
	        return bindingContext[BindingHelper.validationGroup];
	    };
	    BindingHelper.getViewOptions = function (bindingContext) {
	        return bindingContext[BindingHelper.viewOptions];
	    };
	    BindingHelper.getViewStrategy = function (bindingContext) {
	        return bindingContext[BindingHelper.viewStrategy] || "inline";
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
	    BindingHelper.validationPropertyBindingName = "validationProperty";
	    BindingHelper.validationPropertyPathBindingName = "validationPropertyPath";
	    BindingHelper.validationGroup = "validationGroup";
	    BindingHelper.viewOptions = "viewOptions";
	    BindingHelper.viewStrategy = "viewStrategy";
	    return BindingHelper;
	})();
	exports.BindingHelper = BindingHelper;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(15);
	var binding_helper_1 = __webpack_require__(25);
	var treacherous_view_1 = __webpack_require__(3);
	ko.bindingHandlers["validate-with"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var bindingOptions = valueAccessor();
	        var strategy = treacherous_view_1.ElementHelper.getStrategyFrom(element) || "inline";
	        var options = treacherous_view_1.ElementHelper.getOptionsFrom(element) || {};
	        bindingContext[binding_helper_1.BindingHelper.validationGroup] = bindingOptions;
	        bindingContext[binding_helper_1.BindingHelper.viewOptions] = options;
	        bindingContext[binding_helper_1.BindingHelper.viewStrategy] = strategy;
	    }
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(15);
	var treacherous_1 = __webpack_require__(2);
	var treacherous_view_1 = __webpack_require__(3);
	var binding_helper_1 = __webpack_require__(25);
	var viewSummary = new treacherous_view_1.ViewSummary();
	ko.bindingHandlers["validation-summary"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var validationGroupOrGroups = valueAccessor();
	        if (!validationGroupOrGroups) {
	            validationGroupOrGroups = binding_helper_1.BindingHelper.getValidationGroup(bindingContext);
	        }
	        var validationOptions = binding_helper_1.BindingHelper.getViewOptions(bindingContext);
	        var isArray = typeof (validationGroupOrGroups) == "array";
	        var isReactive = !!validationGroupOrGroups.propertyStateChangedEvent;
	        if (!isReactive) {
	            console.warn("summary-for binding requires a reactive validation group");
	            return;
	        }
	        viewSummary.setupContainer(element);
	        var handleStateChange = function (eventArgs) {
	            if (eventArgs.isValid) {
	                viewSummary.propertyBecomeValid(element, eventArgs.property);
	            }
	            else {
	                viewSummary.propertyBecomeInvalid(element, eventArgs.error, eventArgs.property);
	            }
	        };
	        var runImmediateValidation = function (validationGroup) {
	            validationGroup.getModelErrors()
	                .then(function (errors) {
	                Object.keys(errors).forEach(function (key) {
	                    var eventArgs = new treacherous_1.PropertyStateChangedEvent(key, false, errors[key]);
	                    handleStateChange(eventArgs);
	                });
	            });
	        };
	        if (isArray) {
	            validationGroupOrGroups.forEach(function (validationGroup) {
	                validationGroup.propertyStateChangedEvent.subscribe(handleStateChange);
	                if (validationOptions.immediateErrors) {
	                    runImmediateValidation(validationGroup);
	                }
	            });
	        }
	        else {
	            validationGroupOrGroups.propertyStateChangedEvent.subscribe(handleStateChange);
	            if (validationOptions.immediateErrors) {
	                runImmediateValidation(validationGroupOrGroups);
	            }
	        }
	        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
	            if (isArray) {
	                validationGroupOrGroups.forEach(function (validationGroup) {
	                    validationGroup.propertyStateChangedEvent.unsubscribe(handleStateChange);
	                });
	            }
	            else {
	                validationGroupOrGroups.propertyStateChangedEvent.unsubscribe(handleStateChange);
	            }
	        });
	    }
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(15);
	var binding_helper_1 = __webpack_require__(25);
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(15);
	var binding_helper_1 = __webpack_require__(25);
	var validation_handler_1 = __webpack_require__(24);
	ko.bindingHandlers.textInput.preprocess = function (value, name, addBinding) {
	    addBinding(binding_helper_1.BindingHelper.validationPropertyBindingName, "'" + value + "'");
	    return value;
	};
	var originalTextInputBindingInit = ko.bindingHandlers.textInput.init;
	ko.bindingHandlers.textInput.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	    var propertyName = allBindings.get(binding_helper_1.BindingHelper.validationPropertyBindingName);
	    var propertyPath = binding_helper_1.BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
	    validation_handler_1.ValidationHandler.handleValidation(element, propertyPath, valueAccessor(), bindingContext);
	    return originalTextInputBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(15);
	var binding_helper_1 = __webpack_require__(25);
	var validation_handler_1 = __webpack_require__(24);
	ko.bindingHandlers.value.preprocess = function (value, name, addBinding) {
	    addBinding(binding_helper_1.BindingHelper.validationPropertyBindingName, "'" + value + "'");
	    return value;
	};
	var originalValueBindingInit = ko.bindingHandlers.value.init;
	ko.bindingHandlers.value.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	    var propertyName = allBindings.get(binding_helper_1.BindingHelper.validationPropertyBindingName);
	    var propertyPath = binding_helper_1.BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
	    validation_handler_1.ValidationHandler.handleValidation(element, propertyPath, valueAccessor(), bindingContext);
	    return originalValueBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(15);
	var binding_helper_1 = __webpack_require__(25);
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


/***/ }
/******/ ])
});
;