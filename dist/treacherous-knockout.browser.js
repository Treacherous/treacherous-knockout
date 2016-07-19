(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ko"));
	else if(typeof define === 'function' && define.amd)
		define(["ko"], factory);
	else if(typeof exports === 'object')
		exports["Treacherous"] = factory(require("ko"));
	else
		root["Treacherous"] = factory(root["ko"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
	__export(__webpack_require__(56));
	__export(__webpack_require__(58));
	__export(__webpack_require__(59));
	__export(__webpack_require__(60));
	__export(__webpack_require__(61));
	__export(__webpack_require__(62));
	__export(__webpack_require__(63));
	__export(__webpack_require__(57));
	__export(__webpack_require__(52));
	__export(__webpack_require__(51));
	__export(__webpack_require__(64));
	__export(__webpack_require__(65));
	__export(__webpack_require__(53));
	__export(__webpack_require__(54));
	__export(__webpack_require__(55));
	__export(__webpack_require__(50));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var treacherous_1 = __webpack_require__(3);
	var knockout_property_resolver_1 = __webpack_require__(50);
	var inline_validator_1 = __webpack_require__(51);
	var simple_validation_summary_1 = __webpack_require__(53);
	var knockout_model_watcher_factory_1 = __webpack_require__(54);
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
	var knockoutModelWatcherFactory = new knockout_model_watcher_factory_1.KnockoutModelWatcherFactory(knockoutPropertyResolver);
	var validationGroupFactory = new treacherous_1.ValidationGroupFactory(fieldErrorProcessor, knockoutModelWatcherFactory, knockoutPropertyResolver, ruleResolver);
	function createRuleset() {
	    return new treacherous_1.RulesetBuilder().create();
	}
	exports.createRuleset = createRuleset;
	function createGroupWithRules(model, rulesCreator) {
	    var ruleset = rulesCreator(new treacherous_1.RulesetBuilder());
	    return validationGroupFactory.createValidationGroup(model, ruleset);
	}
	exports.createGroupWithRules = createGroupWithRules;
	function createGroup(model, ruleset) {
	    return validationGroupFactory.createValidationGroup(model, ruleset);
	}
	exports.createGroup = createGroup;
	ko["validation"] = {
	    validator: new inline_validator_1.InlineValidatior(),
	    validationSummary: new simple_validation_summary_1.SimpleValidationSummary()
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ko;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(4));
	__export(__webpack_require__(41));
	__export(__webpack_require__(6));
	__export(__webpack_require__(12));
	__export(__webpack_require__(40));
	__export(__webpack_require__(11));
	__export(__webpack_require__(22));
	__export(__webpack_require__(14));
	__export(__webpack_require__(42));
	__export(__webpack_require__(43));
	__export(__webpack_require__(37));
	__export(__webpack_require__(5));
	__export(__webpack_require__(15));
	__export(__webpack_require__(16));
	__export(__webpack_require__(44));
	__export(__webpack_require__(45));
	__export(__webpack_require__(36));
	__export(__webpack_require__(46));
	__export(__webpack_require__(35));
	__export(__webpack_require__(13));
	__export(__webpack_require__(33));
	__export(__webpack_require__(34));
	__export(__webpack_require__(47));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));
	__export(__webpack_require__(21));
	__export(__webpack_require__(23));
	__export(__webpack_require__(48));
	__export(__webpack_require__(24));
	__export(__webpack_require__(25));
	__export(__webpack_require__(26));
	__export(__webpack_require__(27));
	__export(__webpack_require__(28));
	__export(__webpack_require__(29));
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));
	__export(__webpack_require__(17));
	__export(__webpack_require__(32));
	__export(__webpack_require__(49));
	__export(__webpack_require__(38));
	__export(__webpack_require__(39));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var validation_group_factory_1 = __webpack_require__(5);
	var field_error_processor_1 = __webpack_require__(15);
	var rule_registry_1 = __webpack_require__(17);
	var date_validation_rule_1 = __webpack_require__(18);
	var decimal_validation_rule_1 = __webpack_require__(19);
	var email_validation_rule_1 = __webpack_require__(20);
	var equal_validation_rule_1 = __webpack_require__(21);
	var iso_date_validation_rule_1 = __webpack_require__(23);
	var max_length_validation_rule_1 = __webpack_require__(24);
	var max_value_validation_rule_1 = __webpack_require__(25);
	var min_length_validation_rule_1 = __webpack_require__(26);
	var min_value_validation_rule_1 = __webpack_require__(27);
	var not_equal_validation_rule_1 = __webpack_require__(28);
	var number_validation_rule_1 = __webpack_require__(29);
	var regex_validation_rule_1 = __webpack_require__(30);
	var required_validation_rule_1 = __webpack_require__(31);
	var step_validation_rule_1 = __webpack_require__(32);
	var ruleset_builder_1 = __webpack_require__(33);
	var model_watcher_factory_1 = __webpack_require__(37);
	var property_resolver_1 = __webpack_require__(7);
	var rule_resolver_1 = __webpack_require__(13);
	exports.ruleRegistry = new rule_registry_1.RuleRegistry();
	exports.ruleRegistry.registerRule(new date_validation_rule_1.DateValidationRule());
	exports.ruleRegistry.registerRule(new decimal_validation_rule_1.DecimalValidationRule());
	exports.ruleRegistry.registerRule(new email_validation_rule_1.EmailValidationRule());
	exports.ruleRegistry.registerRule(new equal_validation_rule_1.EqualValidationRule());
	exports.ruleRegistry.registerRule(new iso_date_validation_rule_1.ISODateValidationRule());
	exports.ruleRegistry.registerRule(new max_length_validation_rule_1.MaxLengthValidationRule());
	exports.ruleRegistry.registerRule(new max_value_validation_rule_1.MaxValueValidationRule());
	exports.ruleRegistry.registerRule(new min_length_validation_rule_1.MinLengthValidationRule());
	exports.ruleRegistry.registerRule(new min_value_validation_rule_1.MinValueValidationRule());
	exports.ruleRegistry.registerRule(new not_equal_validation_rule_1.NotEqualValidationRule());
	exports.ruleRegistry.registerRule(new number_validation_rule_1.NumberValidationRule());
	exports.ruleRegistry.registerRule(new regex_validation_rule_1.RegexValidationRule());
	exports.ruleRegistry.registerRule(new required_validation_rule_1.RequiredValidationRule());
	exports.ruleRegistry.registerRule(new step_validation_rule_1.StepValidationRule());
	var fieldErrorProcessor = new field_error_processor_1.FieldErrorProcessor(exports.ruleRegistry);
	var propertyResolver = new property_resolver_1.PropertyResolver();
	var ruleResolver = new rule_resolver_1.RuleResolver();
	var modelWatcherFactory = new model_watcher_factory_1.ModelWatcherFactory(propertyResolver);
	var validationGroupFactory = new validation_group_factory_1.ValidationGroupFactory(fieldErrorProcessor, modelWatcherFactory, propertyResolver, ruleResolver);
	function createRuleset() {
	    return new ruleset_builder_1.RulesetBuilder().create();
	}
	exports.createRuleset = createRuleset;
	function createGroupWithRules(model, rulesCreator) {
	    var ruleset = rulesCreator(new ruleset_builder_1.RulesetBuilder());
	    return validationGroupFactory.createValidationGroup(model, ruleset);
	}
	exports.createGroupWithRules = createGroupWithRules;
	function createGroup(model, ruleset) {
	    return validationGroupFactory.createValidationGroup(model, ruleset);
	}
	exports.createGroup = createGroup;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var validation_group_1 = __webpack_require__(6);
	var ValidationGroupFactory = (function () {
	    function ValidationGroupFactory(fieldErrorProcessor, modelWatcherFactory, propertyResolver, ruleResolver) {
	        var _this = this;
	        this.fieldErrorProcessor = fieldErrorProcessor;
	        this.modelWatcherFactory = modelWatcherFactory;
	        this.propertyResolver = propertyResolver;
	        this.ruleResolver = ruleResolver;
	        this.createValidationGroup = function (model, ruleset) {
	            var modelWatcher = _this.modelWatcherFactory.createModelWatcher();
	            return new validation_group_1.ValidationGroup(_this.fieldErrorProcessor, modelWatcher, _this.propertyResolver, _this.ruleResolver, ruleset, model);
	        };
	    }
	    return ValidationGroupFactory;
	})();
	exports.ValidationGroupFactory = ValidationGroupFactory;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var property_resolver_1 = __webpack_require__(7);
	var event_js_1 = __webpack_require__(8);
	var property_state_changed_event_1 = __webpack_require__(11);
	var model_state_changed_event_1 = __webpack_require__(12);
	var rule_resolver_1 = __webpack_require__(13);
	var type_helper_1 = __webpack_require__(14);
	// TODO: This class is WAY to long, needs refactoring
	var ValidationGroup = (function () {
	    function ValidationGroup(fieldErrorProcessor, modelWatcher, propertyResolver, ruleResolver, ruleset, model, refreshRate) {
	        var _this = this;
	        if (propertyResolver === void 0) { propertyResolver = new property_resolver_1.PropertyResolver(); }
	        if (ruleResolver === void 0) { ruleResolver = new rule_resolver_1.RuleResolver(); }
	        if (refreshRate === void 0) { refreshRate = 500; }
	        this.fieldErrorProcessor = fieldErrorProcessor;
	        this.modelWatcher = modelWatcher;
	        this.propertyResolver = propertyResolver;
	        this.ruleResolver = ruleResolver;
	        this.ruleset = ruleset;
	        this.model = model;
	        this.refreshRate = refreshRate;
	        this.propertyErrors = {};
	        this.countedPromise = function (wrappedPromise) {
	            if (!wrappedPromise) {
	                return Promise.resolve();
	            }
	            _this.activeValidationCount++;
	            return wrappedPromise.then(function (r) { _this.activeValidationCount--; return r; }, function (e) { _this.activeValidationCount--; throw (e); });
	        };
	        this.onModelChanged = function (eventArgs) {
	            _this.validateProperty(eventArgs.propertyPath);
	        };
	        this.validatePropertyWithRuleLinks = function (propertyName, propertyRules) {
	            var handlePossibleError = function (possibleError) {
	                var hadErrors = _this.hasErrors();
	                if (!possibleError) {
	                    if (_this.propertyErrors[propertyName]) {
	                        delete _this.propertyErrors[propertyName];
	                        var eventArgs = new property_state_changed_event_1.PropertyStateChangedEvent(propertyName, true);
	                        _this.propertyStateChangedEvent.publish(eventArgs);
	                        if (hadErrors) {
	                            _this.modelStateChangedEvent.publish(new model_state_changed_event_1.ModelStateChangedEvent(true));
	                        }
	                    }
	                    return;
	                }
	                var previousError = _this.propertyErrors[propertyName];
	                _this.propertyErrors[propertyName] = possibleError;
	                if (possibleError != previousError) {
	                    var eventArgs = new property_state_changed_event_1.PropertyStateChangedEvent(propertyName, false, possibleError);
	                    _this.propertyStateChangedEvent.publish(eventArgs);
	                    if (!hadErrors) {
	                        _this.modelStateChangedEvent.publish(new model_state_changed_event_1.ModelStateChangedEvent(false));
	                    }
	                }
	            };
	            if (_this.activePromiseChain) {
	                _this.activePromiseChain = Promise.resolve(_this.activePromiseChain)
	                    .then(function () {
	                    var fieldValue = _this.propertyResolver.resolveProperty(_this.model, propertyName);
	                    var promise = _this.fieldErrorProcessor
	                        .checkFieldForErrors(fieldValue, propertyRules)
	                        .then(handlePossibleError);
	                    return _this.countedPromise(promise);
	                });
	            }
	            else {
	                var fieldValue = _this.propertyResolver.resolveProperty(_this.model, propertyName);
	                _this.activePromiseChain = _this.countedPromise(_this.fieldErrorProcessor
	                    .checkFieldForErrors(fieldValue, propertyRules)
	                    .then(handlePossibleError));
	                return _this.countedPromise(_this.activePromiseChain);
	            }
	        };
	        this.validatePropertyWithRuleSet = function (propertyName, ruleset) {
	            var promiseList = [];
	            var transformedPropertyName;
	            for (var childPropertyName in ruleset.rules) {
	                transformedPropertyName = propertyName + "." + childPropertyName;
	                var countedPromise = _this.validatePropertyWithRules(transformedPropertyName, ruleset.getRulesForProperty(childPropertyName));
	                promiseList.push(countedPromise);
	            }
	            return Promise.all(promiseList);
	        };
	        this.validatePropertyWithRules = function (propertyName, rules) {
	            var ruleLinks = [];
	            var ruleSets = [];
	            var validationPromises = [];
	            var currentValue;
	            try {
	                currentValue = _this.propertyResolver.resolveProperty(_this.model, propertyName);
	            }
	            catch (ex) {
	                return Promise.resolve();
	            }
	            var routeEachRule = function (ruleLinkOrSet) {
	                if (_this.isForEach(ruleLinkOrSet)) {
	                    var isCurrentlyAnArray = type_helper_1.TypeHelper.isArrayType(currentValue);
	                    if (isCurrentlyAnArray) {
	                        currentValue.forEach(function (element, index) {
	                            var childPropertyName = propertyName + "[" + index + "]";
	                            var promise = _this.validatePropertyWithRules(childPropertyName, [ruleLinkOrSet.internalRule]);
	                            var countedPromise = _this.countedPromise(promise);
	                            validationPromises.push(countedPromise);
	                        });
	                    }
	                    else {
	                        if (_this.isRuleset(ruleLinkOrSet.internalRule)) {
	                            ruleSets.push(ruleLinkOrSet.internalRule);
	                        }
	                        else {
	                            ruleLinks.push(ruleLinkOrSet.internalRule);
	                        }
	                    }
	                }
	                else if (_this.isRuleset(ruleLinkOrSet)) {
	                    ruleSets.push(ruleLinkOrSet);
	                }
	                else {
	                    ruleLinks.push(ruleLinkOrSet);
	                }
	            };
	            rules.forEach(routeEachRule);
	            var countedPromise = _this.countedPromise(_this.validatePropertyWithRuleLinks(propertyName, ruleLinks));
	            validationPromises.push(countedPromise);
	            ruleSets.forEach(function (ruleSet) {
	                var eachCountedPromise = _this.countedPromise(_this.validatePropertyWithRuleSet(propertyName, ruleSet));
	                validationPromises.push(eachCountedPromise);
	            });
	            return Promise.all(validationPromises);
	        };
	        this.validateProperty = function (propertyName) {
	            var rulesForProperty = _this.ruleResolver.resolvePropertyRules(propertyName, _this.ruleset);
	            if (!rulesForProperty) {
	                return;
	            }
	            return _this.validatePropertyWithRules(propertyName, rulesForProperty);
	        };
	        this.validateModel = function () {
	            for (var parameterName in _this.ruleset.rules) {
	                _this.validateProperty(parameterName);
	            }
	        };
	        this.hasErrors = function () {
	            return Object.keys(_this.propertyErrors).length > 0;
	        };
	        this.changeValidationTarget = function (model) {
	            _this.model = model;
	            _this.modelWatcher.changeWatcherTarget(_this.model);
	        };
	        this.isValid = function () {
	            return _this.waitForValidatorsToFinish()
	                .then(function () { return !_this.hasErrors(); });
	        };
	        this.getModelErrors = function () {
	            return _this.waitForValidatorsToFinish()
	                .then(function () { return _this.propertyErrors; });
	        };
	        this.getPropertyError = function (propertyRoute) {
	            return _this.waitForValidatorsToFinish()
	                .then(function () { return _this.propertyErrors[propertyRoute]; });
	        };
	        this.release = function () {
	            _this.modelWatcher.stopWatching();
	        };
	        this.waitForValidatorsToFinish = function () {
	            return new Promise(function (resolve, reject) {
	                var interval = setInterval(function () {
	                    if (_this.activeValidationCount == 0) {
	                        clearInterval(interval);
	                        resolve();
	                    }
	                }, _this.modelWatcher.scanInterval);
	            });
	        };
	        this.activeValidationCount = 0;
	        this.propertyStateChangedEvent = new event_js_1.EventHandler(this);
	        this.modelStateChangedEvent = new event_js_1.EventHandler(this);
	        this.modelWatcher.setupWatcher(model, ruleset, refreshRate);
	        this.modelWatcher.onPropertyChanged.subscribe(this.onModelChanged);
	        this.validateModel();
	    }
	    ValidationGroup.prototype.isRuleset = function (possibleRuleset) {
	        return (typeof (possibleRuleset.addRule) == "function");
	    };
	    ValidationGroup.prototype.isForEach = function (possibleForEach) {
	        return possibleForEach.isForEach;
	    };
	    return ValidationGroup;
	})();
	exports.ValidationGroup = ValidationGroup;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else {
			var a = factory();
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(this, function() {
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
	/***/ function(module, exports) {

		var PropertyResolver = (function () {
		    function PropertyResolver() {
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
		                            if (arrayIndex < check[key].length) {
		                                chain.push(check = check[key][arrayIndex]);
		                                lastkey = key[arrayIndex];
		                            }
		                            else {
		                                throw new TypeError('cannot find index "' + arrayIndex + '" in ' + lastkey);
		                            }
		                        }
		                        else {
		                            if (key in check) {
		                                chain.push(check = check[key]);
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
		                            chain.push(check = model[arrayIndex]);
		                            lastkey = arrayIndex;
		                        }
		                        else {
		                            chain.push(check = model[key][arrayIndex]);
		                            lastkey = key[arrayIndex];
		                        }
		                    }
		                    else {
		                        lastkey = key;
		                        chain.push(check = model[key]);
		                    }
		                }
		            };
		            var propertyRouteSections = propertyChain.split(_this.splitRegex);
		            propertyRouteSections.forEach(processChain);
		            return chain[chain.length - 1];
		        };
		    }
		    PropertyResolver.prototype.decomposePropertyRoute = function (propertyRoute) {
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
		    PropertyResolver.prototype.getPropertyRouteSection = function (propertyRoute, sectionIndex) {
		        if (sectionIndex === void 0) { sectionIndex = 0; }
		        var routeComponents = this.decomposePropertyRoute(propertyRoute);
		        return routeComponents[sectionIndex];
		    };
		    PropertyResolver.prototype.buildPropertyRoute = function (propertySections) {
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
		    return PropertyResolver;
		})();
		exports.PropertyResolver = PropertyResolver;


	/***/ }
	/******/ ])
	});
	;

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
/***/ function(module, exports) {

	var PropertyStateChangedEvent = (function () {
	    function PropertyStateChangedEvent(property, isValid, error) {
	        this.property = property;
	        this.isValid = isValid;
	        this.error = error;
	    }
	    return PropertyStateChangedEvent;
	})();
	exports.PropertyStateChangedEvent = PropertyStateChangedEvent;


/***/ },
/* 12 */
/***/ function(module, exports) {

	var ModelStateChangedEvent = (function () {
	    function ModelStateChangedEvent(isValid) {
	        this.isValid = isValid;
	    }
	    return ModelStateChangedEvent;
	})();
	exports.ModelStateChangedEvent = ModelStateChangedEvent;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var property_resolver_1 = __webpack_require__(7);
	var RuleResolver = (function () {
	    function RuleResolver(propertyResolver) {
	        var _this = this;
	        if (propertyResolver === void 0) { propertyResolver = new property_resolver_1.PropertyResolver(); }
	        this.propertyResolver = propertyResolver;
	        this.isPropertyRoute = function (possiblePropertyRoute) {
	            return possiblePropertyRoute.indexOf(".") >= 0;
	        };
	        this.isIndexRoute = function (possibleIndexRoute) {
	            return possibleIndexRoute.indexOf("[") >= 0;
	        };
	        this.resolvePropertyRules = function (propertyRoute, ruleset) {
	            var propertyRouteSections = _this.propertyResolver.decomposePropertyRoute(propertyRoute);
	            var finalProperty = propertyRouteSections[propertyRouteSections.length - 1];
	            var matchingRules = _this.traverseRulesForRoutes(propertyRouteSections, ruleset);
	            if (!matchingRules) {
	                return null;
	            }
	            if (matchingRules.getRulesForProperty) {
	                var outputRules = matchingRules.getRulesForProperty(finalProperty);
	                return outputRules;
	            }
	            return matchingRules;
	        };
	        this.getMatchingRuleForProperty = function (property, rules) {
	            var currentRule;
	            for (var i = 0; i < rules.length; i++) {
	                currentRule = rules[i];
	                if (currentRule.isForEach) {
	                    currentRule = currentRule.internalRule;
	                }
	                if (!currentRule.getRulesForProperty) {
	                    continue;
	                }
	                if (currentRule.rules[property]) {
	                    return currentRule;
	                }
	            }
	        };
	        this.traverseRulesForRoutes = function (propertyRouteSections, ruleset) {
	            var currentProperty = propertyRouteSections.shift();
	            var childRules = ruleset;
	            if (ruleset.rules) {
	                childRules = childRules.rules[currentProperty];
	            }
	            if (!childRules) {
	                return null;
	            }
	            if (propertyRouteSections.length == 0) {
	                return childRules;
	            }
	            var nextProperty = propertyRouteSections[0];
	            if (!nextProperty) {
	                return ruleset;
	            }
	            if (_this.isIndexRoute(nextProperty)) {
	                propertyRouteSections.shift();
	                var applicableRules = [];
	                childRules.forEach(function (internalRules) {
	                    if (internalRules.isForEach) {
	                        applicableRules.push(internalRules.internalRule);
	                    }
	                });
	                if (propertyRouteSections.length > 0) {
	                    var totalRules = [];
	                    applicableRules.forEach(function (applicableRule) {
	                        var currentRouteSection = propertyRouteSections.slice();
	                        var outputRules = _this.traverseRulesForRoutes(currentRouteSection, applicableRule);
	                        outputRules.forEach(function (outputRule) {
	                            totalRules.push(outputRule);
	                        });
	                    });
	                    return totalRules;
	                }
	                return applicableRules;
	            }
	            if (propertyRouteSections.length == 0) {
	                return childRules;
	            }
	            var nextChildRule = _this.getMatchingRuleForProperty(nextProperty, childRules);
	            if (propertyRouteSections.length > 0) {
	                return _this.traverseRulesForRoutes(propertyRouteSections, nextChildRule);
	            }
	            return nextChildRule;
	        };
	    }
	    return RuleResolver;
	})();
	exports.RuleResolver = RuleResolver;


/***/ },
/* 14 */
/***/ function(module, exports) {

	var TypeHelper = (function () {
	    function TypeHelper() {
	    }
	    TypeHelper.isDateType = function (value) {
	        return (typeof value.getMonth === 'function');
	    };
	    TypeHelper.isSimpleType = function (value) {
	        return (typeof value == "string" || typeof value == "number");
	    };
	    TypeHelper.isArrayType = function (value) {
	        return Object.prototype.toString.call(value) === '[object Array]';
	    };
	    return TypeHelper;
	})();
	exports.TypeHelper = TypeHelper;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var field_has_error_1 = __webpack_require__(16);
	var FieldErrorProcessor = (function () {
	    function FieldErrorProcessor(ruleRegistry) {
	        this.ruleRegistry = ruleRegistry;
	    }
	    FieldErrorProcessor.prototype.processRuleLink = function (fieldValue, ruleLink) {
	        var validator = this.ruleRegistry.getRuleNamed(ruleLink.ruleName);
	        var checkIfValid = function (isValid) {
	            if (!isValid) {
	                var error;
	                if (ruleLink.messageOverride) {
	                    if (typeof (ruleLink.messageOverride) === "function") {
	                        error = (ruleLink.messageOverride)(fieldValue, ruleLink.ruleOptions);
	                    }
	                    else {
	                        error = ruleLink.messageOverride;
	                    }
	                }
	                else {
	                    error = validator.getMessage(fieldValue, ruleLink.ruleOptions);
	                }
	                throw new field_has_error_1.FieldHasError(error);
	            }
	            return Promise.resolve();
	        };
	        return validator
	            .validate(fieldValue, ruleLink.ruleOptions)
	            .then(checkIfValid);
	    };
	    FieldErrorProcessor.prototype.checkFieldForErrors = function (fieldValue, rules) {
	        var _this = this;
	        var ruleCheck = function (ruleLinkOrSet) {
	            return _this.processRuleLink(fieldValue, ruleLinkOrSet);
	        };
	        var checkEachRule = function (rules) {
	            var promises = [];
	            rules.forEach(function (rule) {
	                promises.push(ruleCheck(rule));
	            });
	            return Promise.all(promises);
	        };
	        return Promise.resolve(rules)
	            .then(checkEachRule)
	            .then(function () { return null; })
	            .catch(function (validationError) {
	            return validationError.message;
	        });
	    };
	    return FieldErrorProcessor;
	})();
	exports.FieldErrorProcessor = FieldErrorProcessor;


/***/ },
/* 16 */
/***/ function(module, exports) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FieldHasError = (function (_super) {
	    __extends(FieldHasError, _super);
	    function FieldHasError(message) {
	        _super.call(this, message);
	        this.message = message;
	    }
	    return FieldHasError;
	})(Error);
	exports.FieldHasError = FieldHasError;


/***/ },
/* 17 */
/***/ function(module, exports) {

	var RuleRegistry = (function () {
	    function RuleRegistry() {
	        var _this = this;
	        this.rules = {};
	        this.registerRule = function (validationRule) {
	            _this.rules[validationRule.ruleName] = validationRule;
	        };
	        this.unregisterRule = function (validationRule) {
	            delete _this.rules[validationRule.ruleName];
	        };
	        this.getRuleNamed = function (ruleName) {
	            return _this.rules[ruleName] || null;
	        };
	        this.hasRuleNamed = function (ruleName) {
	            return _this.getRuleNamed(ruleName) != null;
	        };
	    }
	    return RuleRegistry;
	})();
	exports.RuleRegistry = RuleRegistry;


/***/ },
/* 18 */
/***/ function(module, exports) {

	var DateValidationRule = (function () {
	    function DateValidationRule() {
	        this.ruleName = "date";
	        this.invalidObjectRegex = /Invalid|NaN/;
	    }
	    DateValidationRule.prototype.validate = function (value) {
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var matchesRegex = !this.invalidObjectRegex.test(new Date(value));
	        return Promise.resolve(matchesRegex);
	    };
	    DateValidationRule.prototype.getMessage = function (value) {
	        return "This field contains \"" + value + "\" which is not a valid date";
	    };
	    return DateValidationRule;
	})();
	exports.DateValidationRule = DateValidationRule;


/***/ },
/* 19 */
/***/ function(module, exports) {

	;
	var DecimalValidationRule = (function () {
	    function DecimalValidationRule() {
	        this.ruleName = "decimal";
	        this.decimalRegex = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
	    }
	    DecimalValidationRule.prototype.validate = function (value) {
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var matchesRegex = this.decimalRegex.test(value);
	        return Promise.resolve(matchesRegex);
	    };
	    DecimalValidationRule.prototype.getMessage = function (value) {
	        return "This field contains " + value + " which is not a decimal value";
	    };
	    return DecimalValidationRule;
	})();
	exports.DecimalValidationRule = DecimalValidationRule;


/***/ },
/* 20 */
/***/ function(module, exports) {

	;
	var EmailValidationRule = (function () {
	    function EmailValidationRule() {
	        this.ruleName = "email";
	        this.emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/;
	    }
	    EmailValidationRule.prototype.validate = function (value) {
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var matchesRegex = this.emailRegex.test(value);
	        return Promise.resolve(matchesRegex);
	    };
	    EmailValidationRule.prototype.getMessage = function (value) {
	        return "This field contains \"" + value + "\" which is not a valid email address";
	    };
	    return EmailValidationRule;
	})();
	exports.EmailValidationRule = EmailValidationRule;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	;
	var type_helper_1 = __webpack_require__(14);
	var comparer_helper_1 = __webpack_require__(22);
	var EqualValidationRule = (function () {
	    function EqualValidationRule() {
	        this.ruleName = "equal";
	    }
	    EqualValidationRule.prototype.validate = function (value, optionsOrValue) {
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var result;
	        var comparison = optionsOrValue.value || optionsOrValue;
	        var weakEquality = optionsOrValue.weakEquality || false;
	        if (type_helper_1.TypeHelper.isDateType(comparison)) {
	            result = comparer_helper_1.ComparerHelper.dateTimeCompararer(value, comparison);
	        }
	        else {
	            result = comparer_helper_1.ComparerHelper.simpleTypeComparer(value, comparison, weakEquality);
	        }
	        return Promise.resolve(result);
	    };
	    EqualValidationRule.prototype.getMessage = function (value, optionsOrValue) {
	        return "This field is " + value + " but should be equal to " + (optionsOrValue.value || optionsOrValue);
	    };
	    return EqualValidationRule;
	})();
	exports.EqualValidationRule = EqualValidationRule;


/***/ },
/* 22 */
/***/ function(module, exports) {

	var ComparerHelper = (function () {
	    function ComparerHelper() {
	    }
	    ComparerHelper.simpleTypeComparer = function (value1, value2, isWeak) {
	        if (isWeak) {
	            return (value1 == value2);
	        }
	        return (value1 === value2);
	    };
	    ComparerHelper.dateTimeCompararer = function (value1, value2) { return (value1.getTime() == value2.getTime()); };
	    return ComparerHelper;
	})();
	exports.ComparerHelper = ComparerHelper;


/***/ },
/* 23 */
/***/ function(module, exports) {

	;
	var ISODateValidationRule = (function () {
	    function ISODateValidationRule() {
	        this.ruleName = "isoDate";
	        this.isoDateRegex = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
	    }
	    ISODateValidationRule.prototype.validate = function (value) {
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var matchesRegex = this.isoDateRegex.test(value);
	        return Promise.resolve(matchesRegex);
	    };
	    ISODateValidationRule.prototype.getMessage = function (value) {
	        return "This field contains \"" + value + "\" which is not a valid ISO date";
	    };
	    return ISODateValidationRule;
	})();
	exports.ISODateValidationRule = ISODateValidationRule;


/***/ },
/* 24 */
/***/ function(module, exports) {

	var MaxLengthValidationRule = (function () {
	    function MaxLengthValidationRule() {
	        this.ruleName = "maxLength";
	    }
	    MaxLengthValidationRule.prototype.validate = function (value, maxLength) {
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        if (value.length <= maxLength) {
	            return Promise.resolve(true);
	        }
	        return Promise.resolve(false);
	    };
	    MaxLengthValidationRule.prototype.getMessage = function (value, maxLength) {
	        return "This field has a length of " + value.length + " but should contain no more than " + maxLength;
	    };
	    return MaxLengthValidationRule;
	})();
	exports.MaxLengthValidationRule = MaxLengthValidationRule;


/***/ },
/* 25 */
/***/ function(module, exports) {

	var MaxValueValidationRule = (function () {
	    function MaxValueValidationRule() {
	        this.ruleName = "maxValue";
	    }
	    MaxValueValidationRule.prototype.validate = function (value, maxValue) {
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        if (value <= maxValue) {
	            return Promise.resolve(true);
	        }
	        return Promise.resolve(false);
	    };
	    MaxValueValidationRule.prototype.getMessage = function (value, maxValue) {
	        return "This field has a value of " + value + " but should be less than or equal to " + maxValue;
	    };
	    return MaxValueValidationRule;
	})();
	exports.MaxValueValidationRule = MaxValueValidationRule;


/***/ },
/* 26 */
/***/ function(module, exports) {

	var MinLengthValidationRule = (function () {
	    function MinLengthValidationRule() {
	        this.ruleName = "minLength";
	    }
	    MinLengthValidationRule.prototype.validate = function (value, minLength) {
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        if (value.length >= minLength) {
	            return Promise.resolve(true);
	        }
	        return Promise.resolve(false);
	    };
	    MinLengthValidationRule.prototype.getMessage = function (value, minLength) {
	        return "This field has a length of " + value.length + " but should more than " + minLength;
	    };
	    return MinLengthValidationRule;
	})();
	exports.MinLengthValidationRule = MinLengthValidationRule;


/***/ },
/* 27 */
/***/ function(module, exports) {

	var MinValueValidationRule = (function () {
	    function MinValueValidationRule() {
	        this.ruleName = "minValue";
	    }
	    MinValueValidationRule.prototype.validate = function (value, minValue) {
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        if (value >= minValue) {
	            return Promise.resolve(true);
	        }
	        return Promise.resolve(false);
	    };
	    MinValueValidationRule.prototype.getMessage = function (value, minValue) {
	        return "This field has a value of " + value + " but should be greater than or equal to " + minValue;
	    };
	    return MinValueValidationRule;
	})();
	exports.MinValueValidationRule = MinValueValidationRule;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var type_helper_1 = __webpack_require__(14);
	var comparer_helper_1 = __webpack_require__(22);
	var NotEqualValidationRule = (function () {
	    function NotEqualValidationRule() {
	        this.ruleName = "notEqual";
	    }
	    NotEqualValidationRule.prototype.validate = function (value, optionsOrValue) {
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var result;
	        var comparison = optionsOrValue.value || optionsOrValue;
	        var weakEquality = optionsOrValue.weakEquality || false;
	        if (type_helper_1.TypeHelper.isDateType(comparison)) {
	            result = !comparer_helper_1.ComparerHelper.dateTimeCompararer(value, comparison);
	        }
	        else {
	            result = !comparer_helper_1.ComparerHelper.simpleTypeComparer(value, comparison, weakEquality);
	        }
	        return Promise.resolve(result);
	    };
	    NotEqualValidationRule.prototype.getMessage = function (value, optionsOrValue) {
	        return "This field is " + value + " but should not be equal to " + (optionsOrValue.value || optionsOrValue);
	    };
	    return NotEqualValidationRule;
	})();
	exports.NotEqualValidationRule = NotEqualValidationRule;


/***/ },
/* 29 */
/***/ function(module, exports) {

	var NumberValidationRule = (function () {
	    function NumberValidationRule() {
	        this.ruleName = "number";
	        this.numberRegex = /^\d+$/;
	    }
	    NumberValidationRule.prototype.validate = function (value) {
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var matchesRegex = this.numberRegex.test(value);
	        return Promise.resolve(matchesRegex);
	    };
	    NumberValidationRule.prototype.getMessage = function (value) {
	        return "This field contains " + value + " which is not a numeric value";
	    };
	    return NumberValidationRule;
	})();
	exports.NumberValidationRule = NumberValidationRule;


/***/ },
/* 30 */
/***/ function(module, exports) {

	var RegexValidationRule = (function () {
	    function RegexValidationRule() {
	        this.ruleName = "regex";
	    }
	    RegexValidationRule.prototype.validate = function (value, regexPattern) {
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        var matchesPattern = value.toString().match(regexPattern) !== null;
	        return Promise.resolve(matchesPattern);
	    };
	    RegexValidationRule.prototype.getMessage = function (value, regexPattern) {
	        return "This field does not match the expected format";
	    };
	    return RegexValidationRule;
	})();
	exports.RegexValidationRule = RegexValidationRule;


/***/ },
/* 31 */
/***/ function(module, exports) {

	var RequiredValidationRule = (function () {
	    function RequiredValidationRule() {
	        this.ruleName = "required";
	    }
	    RequiredValidationRule.prototype.validate = function (value, isRequired) {
	        if (isRequired === void 0) { isRequired = true; }
	        if (value === undefined || value === null) {
	            return Promise.resolve(!isRequired);
	        }
	        var testValue = value;
	        if (typeof (testValue) === 'string') {
	            if (String.prototype.trim) {
	                testValue = value.trim();
	            }
	            else {
	                testValue = value.replace(/^\s+|\s+$/g, '');
	            }
	        }
	        if (!isRequired) {
	            return Promise.resolve(true);
	        }
	        return Promise.resolve((testValue + '').length > 0);
	    };
	    RequiredValidationRule.prototype.getMessage = function (value, isRequired) {
	        return "This field is required";
	    };
	    return RequiredValidationRule;
	})();
	exports.RequiredValidationRule = RequiredValidationRule;


/***/ },
/* 32 */
/***/ function(module, exports) {

	var StepValidationRule = (function () {
	    function StepValidationRule() {
	        this.ruleName = "step";
	    }
	    StepValidationRule.prototype.validate = function (value, step) {
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var dif = (value * 100) % (step * 100);
	        var matchesStep = Math.abs(dif) < 0.00001 || Math.abs(1 - dif) < 0.00001;
	        return Promise.resolve(matchesStep);
	    };
	    StepValidationRule.prototype.getMessage = function (value, step) {
	        return "This field has a value of " + value + " and should be an increment of " + step;
	    };
	    return StepValidationRule;
	})();
	exports.StepValidationRule = StepValidationRule;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var ruleset_1 = __webpack_require__(34);
	var rule_link_1 = __webpack_require__(35);
	var for_each_rule_1 = __webpack_require__(36);
	var RulesetBuilder = (function () {
	    function RulesetBuilder(ruleRegistry) {
	        var _this = this;
	        this.ruleRegistry = ruleRegistry;
	        this.create = function () {
	            _this.internalRuleset = new ruleset_1.Ruleset();
	            _this.currentProperty = null;
	            return _this;
	        };
	        this.forProperty = function (propertyName) {
	            _this.currentProperty = propertyName;
	            _this.currentRule = null;
	            return _this;
	        };
	        this.addRule = function (rule, ruleOptions) {
	            if (rule == null || typeof (rule) == "undefined" || rule.length == 0) {
	                throw new Error("A rule name is required");
	            }
	            if (_this.ruleRegistry && !_this.ruleRegistry.hasRuleNamed(rule)) {
	                throw new Error("The rule [" + rule + "] has not been registered");
	            }
	            if (!_this.currentProperty) {
	                throw new Error("A property must precede any rule calls in the chain");
	            }
	            _this.internalRuleset.addRule(_this.currentProperty, _this.currentRule = new rule_link_1.RuleLink(rule, ruleOptions));
	            return _this;
	        };
	        this.withMessage = function (messageOverride) {
	            if (!_this.currentRule) {
	                throw new Error("A message override must precede an addRule call in the chain");
	            }
	            _this.currentRule.messageOverride = messageOverride;
	            return _this;
	        };
	        this.addRuleForEach = function (rule, ruleOptions) {
	            if (rule == null || typeof (rule) == "undefined" || rule.length == 0) {
	                throw new Error("A rule name is required");
	            }
	            if (_this.ruleRegistry && !_this.ruleRegistry.hasRuleNamed(rule)) {
	                throw new Error("The rule [" + rule + "] has not been registered");
	            }
	            if (!_this.currentProperty) {
	                throw new Error("A property must precede any rule calls in the chain");
	            }
	            var ruleLink = new rule_link_1.RuleLink(rule, ruleOptions);
	            _this.currentRule = ruleLink;
	            _this.internalRuleset.addRule(_this.currentProperty, new for_each_rule_1.ForEachRule(ruleLink));
	            return _this;
	        };
	        this.addRuleset = function (ruleset) {
	            if (!_this.currentProperty) {
	                throw new Error("A property must precede any rule calls in the chain");
	            }
	            _this.internalRuleset.addRuleset(_this.currentProperty, ruleset);
	            return _this;
	        };
	        this.addRulesetForEach = function (ruleset) {
	            if (!_this.currentProperty) {
	                throw new Error("A property must precede any rule calls in the chain");
	            }
	            _this.internalRuleset.addRuleset(_this.currentProperty, new for_each_rule_1.ForEachRule(ruleset));
	            return _this;
	        };
	        this.build = function () {
	            return _this.internalRuleset;
	        };
	    }
	    return RulesetBuilder;
	})();
	exports.RulesetBuilder = RulesetBuilder;


/***/ },
/* 34 */
/***/ function(module, exports) {

	var Ruleset = (function () {
	    function Ruleset() {
	        var _this = this;
	        this.rules = {};
	        this.createPropertyEntryIfNeeded = function (property) {
	            if (!_this.rules[property]) {
	                _this.rules[property] = [];
	            }
	        };
	        this.addRule = function (property, ruleLink) {
	            _this.createPropertyEntryIfNeeded(property);
	            _this.rules[property].push(ruleLink);
	        };
	        this.addRuleset = function (property, ruleset) {
	            _this.createPropertyEntryIfNeeded(property);
	            _this.rules[property].push(ruleset);
	        };
	        this.getRulesForProperty = function (property) { return _this.rules[property]; };
	    }
	    return Ruleset;
	})();
	exports.Ruleset = Ruleset;


/***/ },
/* 35 */
/***/ function(module, exports) {

	var RuleLink = (function () {
	    function RuleLink(ruleName, ruleOptions) {
	        this.ruleName = ruleName;
	        this.ruleOptions = ruleOptions;
	    }
	    return RuleLink;
	})();
	exports.RuleLink = RuleLink;


/***/ },
/* 36 */
/***/ function(module, exports) {

	var ForEachRule = (function () {
	    function ForEachRule(internalRule) {
	        this.internalRule = internalRule;
	        this.isForEach = true;
	    }
	    return ForEachRule;
	})();
	exports.ForEachRule = ForEachRule;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var model_watcher_1 = __webpack_require__(38);
	var ModelWatcherFactory = (function () {
	    function ModelWatcherFactory(propertyResolver) {
	        this.propertyResolver = propertyResolver;
	    }
	    ModelWatcherFactory.prototype.createModelWatcher = function () {
	        return new model_watcher_1.ModelWatcher(this.propertyResolver);
	    };
	    return ModelWatcherFactory;
	})();
	exports.ModelWatcherFactory = ModelWatcherFactory;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var property_resolver_1 = __webpack_require__(7);
	var event_js_1 = __webpack_require__(8);
	var type_helper_1 = __webpack_require__(14);
	var property_watcher_1 = __webpack_require__(39);
	var property_changed_event_1 = __webpack_require__(40);
	var ModelWatcher = (function () {
	    function ModelWatcher(propertyResolver) {
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
	                    var propertyChangedArgs = new property_changed_event_1.PropertyChangedEvent(key, previousValue, null);
	                    setTimeout(function () { _this.onPropertyChanged.publish(propertyChangedArgs); }, 1);
	                }
	                else if (previousWatchCache[index].previousValue && previousWatchCache[index].previousValue.isArray) {
	                    if (previousWatchCache[index].previousValue.length != _this.watchCache[index].previousValue.length) {
	                        var newValue = _this.watchCache[index].previousValue;
	                        var previousValue = previousWatchCache[index].previousValue;
	                        var propertyChangedArgs = new property_changed_event_1.PropertyChangedEvent(key, newValue, previousValue);
	                        setTimeout(function () { _this.onPropertyChanged.publish(propertyChangedArgs); }, 1);
	                    }
	                }
	            });
	        };
	        this.watchProperty = function (watchRoute, previousData) {
	            if (_this.watchCacheKeys.indexOf(watchRoute) == -1) {
	                var propertyWatcher = new property_watcher_1.PropertyWatcher(watchRoute, previousData);
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
	                    currentValue = _this.propertyResolver.resolveProperty(_this.model, paramRoute);
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
	                    var isArray = type_helper_1.TypeHelper.isArrayType(currentValue);
	                    if (isArray) {
	                        var cachedArrayInfo = { length: currentValue.length, isArray: true };
	                        _this.watchProperty(paramRoute, cachedArrayInfo);
	                    }
	                    if (rule.isForEach && hasValue) {
	                        // ruleset
	                        if (rule.internalRule.getRulesForProperty) {
	                            if (_this.model[param]) {
	                                _this.model[param].forEach(function (element, index) {
	                                    _this.cacheWatchTargets(paramRoute + "[" + index + "]", rule.internalRule);
	                                });
	                            }
	                        }
	                        else {
	                            if (_this.model[param]) {
	                                _this.model[param].forEach(function (element, index) {
	                                    _this.watchProperty(paramRoute + "[" + index + "]", _this.model[param][index]);
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
	                    currentValue = _this.propertyResolver.resolveProperty(_this.model, propertyWatcher.propertyPath);
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
	                    var propertyChangedArgs = new property_changed_event_1.PropertyChangedEvent(propertyWatcher.propertyPath, currentValue, propertyWatcher.previousValue);
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
	    return ModelWatcher;
	})();
	exports.ModelWatcher = ModelWatcher;


/***/ },
/* 39 */
/***/ function(module, exports) {

	var PropertyWatcher = (function () {
	    function PropertyWatcher(propertyPath, previousValue) {
	        this.propertyPath = propertyPath;
	        this.previousValue = previousValue;
	    }
	    return PropertyWatcher;
	})();
	exports.PropertyWatcher = PropertyWatcher;


/***/ },
/* 40 */
/***/ function(module, exports) {

	var PropertyChangedEvent = (function () {
	    function PropertyChangedEvent(propertyPath, newValue, oldValue) {
	        this.propertyPath = propertyPath;
	        this.newValue = newValue;
	        this.oldValue = oldValue;
	    }
	    return PropertyChangedEvent;
	})();
	exports.PropertyChangedEvent = PropertyChangedEvent;


/***/ },
/* 41 */
/***/ function(module, exports) {

	


/***/ },
/* 42 */
/***/ function(module, exports) {

	


/***/ },
/* 43 */
/***/ function(module, exports) {

	


/***/ },
/* 44 */
/***/ function(module, exports) {

	;


/***/ },
/* 45 */
/***/ function(module, exports) {

	var ValidationError = (function () {
	    function ValidationError(propertyName, message) {
	        this.propertyName = propertyName;
	        this.message = message;
	    }
	    return ValidationError;
	})();
	exports.ValidationError = ValidationError;


/***/ },
/* 46 */
/***/ function(module, exports) {

	


/***/ },
/* 47 */
/***/ function(module, exports) {

	var AdvancedRegexValidationRule = (function () {
	    function AdvancedRegexValidationRule(ruleName, expression, message) {
	        if (!ruleName || ruleName.length == 0) {
	            throw new Error("ruleName is required, an empty rule name is invalid");
	        }
	        if (!expression || expression.length == 0) {
	            throw new Error("expression is required, an empty regex expression is invalid");
	        }
	        this.ruleName = ruleName;
	        this.expression = expression;
	        this.message = (typeof message === "function") ? message : function () { return message; };
	    }
	    AdvancedRegexValidationRule.prototype.validate = function (value, regexPattern) {
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        var matchesPattern = value.toString().match(this.expression) !== null;
	        return Promise.resolve(matchesPattern);
	    };
	    AdvancedRegexValidationRule.prototype.getMessage = function (value, regexPattern) {
	        return this.message(value);
	    };
	    return AdvancedRegexValidationRule;
	})();
	exports.AdvancedRegexValidationRule = AdvancedRegexValidationRule;


/***/ },
/* 48 */
/***/ function(module, exports) {

	


/***/ },
/* 49 */
/***/ function(module, exports) {

	


/***/ },
/* 50 */
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var class_helper_1 = __webpack_require__(52);
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
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var knockout_model_watcher_1 = __webpack_require__(55);
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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(57);
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
/* 57 */
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(57);
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(57);
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(57);
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(57);
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var binding_helper_1 = __webpack_require__(57);
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(2);
	var class_helper_1 = __webpack_require__(52);
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
/* 64 */
/***/ function(module, exports) {

	


/***/ },
/* 65 */
/***/ function(module, exports) {

	


/***/ }
/******/ ])
});
;