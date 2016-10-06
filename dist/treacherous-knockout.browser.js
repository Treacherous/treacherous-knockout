(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ko"));
	else if(typeof define === 'function' && define.amd)
		define(["ko"], factory);
	else if(typeof exports === 'object')
		exports["Treacherous"] = factory(require("ko"));
	else
		root["Treacherous"] = factory(root["ko"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_62__) {
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
	__export(__webpack_require__(65));
	__export(__webpack_require__(66));
	__export(__webpack_require__(69));
	__export(__webpack_require__(67));
	__export(__webpack_require__(70));
	__export(__webpack_require__(68));
	__export(__webpack_require__(63));
	__export(__webpack_require__(64));
	__export(__webpack_require__(61));
	__export(__webpack_require__(71));
	__export(__webpack_require__(72));
	__export(__webpack_require__(73));
	__export(__webpack_require__(74));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(2));
	__export(__webpack_require__(50));
	var treacherous_2 = __webpack_require__(2);
	var knockout_property_resolver_1 = __webpack_require__(61);
	var knockout_model_watcher_factory_1 = __webpack_require__(63);
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(3));
	__export(__webpack_require__(26));
	__export(__webpack_require__(13));
	__export(__webpack_require__(44));
	__export(__webpack_require__(9));
	__export(__webpack_require__(19));
	__export(__webpack_require__(23));
	__export(__webpack_require__(18));
	__export(__webpack_require__(24));
	__export(__webpack_require__(20));
	__export(__webpack_require__(4));
	__export(__webpack_require__(5));
	__export(__webpack_require__(48));
	__export(__webpack_require__(32));
	__export(__webpack_require__(11));
	__export(__webpack_require__(25));
	__export(__webpack_require__(12));
	__export(__webpack_require__(49));
	__export(__webpack_require__(28));
	__export(__webpack_require__(29));
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));
	__export(__webpack_require__(33));
	__export(__webpack_require__(43));
	__export(__webpack_require__(34));
	__export(__webpack_require__(35));
	__export(__webpack_require__(36));
	__export(__webpack_require__(37));
	__export(__webpack_require__(38));
	__export(__webpack_require__(39));
	__export(__webpack_require__(40));
	__export(__webpack_require__(41));
	__export(__webpack_require__(27));
	__export(__webpack_require__(42));
	__export(__webpack_require__(14));
	__export(__webpack_require__(10));
	__export(__webpack_require__(47));
	__export(__webpack_require__(46));
	__export(__webpack_require__(6));
	__export(__webpack_require__(45));
	__export(__webpack_require__(21));
	__export(__webpack_require__(22));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var field_error_processor_1 = __webpack_require__(4);
	var rule_resolver_1 = __webpack_require__(6);
	var validation_group_builder_1 = __webpack_require__(9);
	var rule_registry_setup_1 = __webpack_require__(26);
	var ruleset_builder_1 = __webpack_require__(44);
	var fieldErrorProcessor = new field_error_processor_1.FieldErrorProcessor(rule_registry_setup_1.ruleRegistry);
	var ruleResolver = new rule_resolver_1.RuleResolver();
	function createRuleset(withRuleVerification) {
	    if (withRuleVerification === void 0) { withRuleVerification = false; }
	    var rulesetBuilder = withRuleVerification ? new ruleset_builder_1.RulesetBuilder(rule_registry_setup_1.ruleRegistry) : new ruleset_builder_1.RulesetBuilder();
	    return rulesetBuilder.create();
	}
	exports.createRuleset = createRuleset;
	function createGroup() {
	    return new validation_group_builder_1.ValidationGroupBuilder(fieldErrorProcessor, ruleResolver).create();
	}
	exports.createGroup = createGroup;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var field_has_error_1 = __webpack_require__(5);
	var FieldErrorProcessor = (function () {
	    function FieldErrorProcessor(ruleRegistry) {
	        this.ruleRegistry = ruleRegistry;
	    }
	    // Validates a single property against a model
	    FieldErrorProcessor.prototype.processRuleLink = function (modelResolver, propertyName, ruleLink) {
	        var shouldRuleApply = ruleLink.appliesIf === true
	            || ((typeof (ruleLink.appliesIf) === "function")
	                ? (ruleLink.appliesIf)(modelResolver, propertyName, ruleLink.ruleOptions)
	                : false);
	        if (!shouldRuleApply) {
	            return Promise.resolve();
	        }
	        var validator = this.ruleRegistry.getRuleNamed(ruleLink.ruleName);
	        var options = (typeof ruleLink.ruleOptions == "function") ? ruleLink.ruleOptions() : ruleLink.ruleOptions;
	        return validator
	            .validate(modelResolver, propertyName, options)
	            .then(function (isValid) {
	            if (!isValid) {
	                var error;
	                if (ruleLink.messageOverride) {
	                    if (typeof (ruleLink.messageOverride) === "function") {
	                        error = (ruleLink.messageOverride)(modelResolver, propertyName, ruleLink.ruleOptions);
	                    }
	                    else {
	                        error = ruleLink.messageOverride;
	                    }
	                }
	                else {
	                    error = validator.getMessage(modelResolver, propertyName, ruleLink.ruleOptions);
	                }
	                throw new field_has_error_1.FieldHasError(error);
	            }
	            return Promise.resolve();
	        });
	    };
	    // Loops through each rule on a property, adds it to a chain, then calls Promise.all
	    // Probably not correct, as they won't fire sequentially? Promises need to be chained
	    FieldErrorProcessor.prototype.checkFieldForErrors = function (modelResolver, propertyName, rules) {
	        var _this = this;
	        var ruleCheck = function (ruleLinkOrSet) {
	            return _this.processRuleLink(modelResolver, propertyName, ruleLinkOrSet);
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
	}());
	exports.FieldErrorProcessor = FieldErrorProcessor;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
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
	}(Error));
	exports.FieldHasError = FieldHasError;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
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
	}());
	exports.RuleResolver = RuleResolver;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var property_resolver_1 = __webpack_require__(8);
	exports.PropertyResolver = property_resolver_1.PropertyResolver;


/***/ },
/* 8 */
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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var validation_group_1 = __webpack_require__(10);
	var reactive_validation_group_builder_1 = __webpack_require__(13);
	var model_resolver_factory_1 = __webpack_require__(24);
	var ValidationGroupBuilder = (function () {
	    function ValidationGroupBuilder(fieldErrorProcessor, ruleResolver) {
	        var _this = this;
	        this.fieldErrorProcessor = fieldErrorProcessor;
	        this.ruleResolver = ruleResolver;
	        this.create = function () {
	            _this.modelResolverFactory = new model_resolver_factory_1.ModelResolverFactory();
	            _this.validateOnStart = false;
	            return _this;
	        };
	        this.asReactiveGroup = function () {
	            var reactiveBuilder = new reactive_validation_group_builder_1.ReactiveValidationGroupBuilder(_this.fieldErrorProcessor, _this.ruleResolver)
	                .create()
	                .withModelResolverFactory(_this.modelResolverFactory);
	            return reactiveBuilder;
	        };
	        this.withModelResolverFactory = function (modelResolverFactory) {
	            _this.modelResolverFactory = modelResolverFactory;
	            return _this;
	        };
	        this.andValidateOnStart = function () {
	            _this.validateOnStart = true;
	            return _this;
	        };
	        this.build = function (model, ruleset) {
	            var validationGroup = new validation_group_1.ValidationGroup(_this.fieldErrorProcessor, _this.ruleResolver, _this.modelResolverFactory, model, ruleset);
	            if (_this.validateOnStart) {
	                validationGroup.validate();
	            }
	            return validationGroup;
	        };
	    }
	    return ValidationGroupBuilder;
	}());
	exports.ValidationGroupBuilder = ValidationGroupBuilder;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var rule_resolver_1 = __webpack_require__(6);
	var type_helper_1 = __webpack_require__(11);
	var promise_counter_1 = __webpack_require__(12);
	// TODO: This class is WAY to long, needs refactoring
	var ValidationGroup = (function () {
	    function ValidationGroup(fieldErrorProcessor, ruleResolver, modelResolverFactory, model, ruleset) {
	        var _this = this;
	        if (ruleResolver === void 0) { ruleResolver = new rule_resolver_1.RuleResolver(); }
	        this.fieldErrorProcessor = fieldErrorProcessor;
	        this.ruleResolver = ruleResolver;
	        this.modelResolverFactory = modelResolverFactory;
	        this.ruleset = ruleset;
	        this.propertyErrors = {};
	        this.validatePropertyWithRuleLinks = function (propertyRoute, propertyRules) {
	            return _this.promiseCounter.countPromise(_this.fieldErrorProcessor.checkFieldForErrors(_this.modelResolver, propertyRoute, propertyRules)
	                .then(function (possibleErrors) {
	                if (!possibleErrors) {
	                    if (_this.propertyErrors[propertyRoute]) {
	                        delete _this.propertyErrors[propertyRoute];
	                    }
	                    return;
	                }
	                _this.propertyErrors[propertyRoute] = possibleErrors;
	            }))
	                .then(_this.promiseCounter.waitForCompletion);
	        };
	        this.validatePropertyWithRuleSet = function (propertyRoute, ruleset) {
	            var transformedPropertyName;
	            for (var childPropertyName in ruleset.rules) {
	                transformedPropertyName = propertyRoute + "." + childPropertyName;
	                _this.validatePropertyWithRules(transformedPropertyName, ruleset.getRulesForProperty(childPropertyName));
	            }
	        };
	        this.validatePropertyWithRules = function (propertyRoute, rules) {
	            var ruleLinks = [];
	            var ruleSets = [];
	            var currentValue;
	            try {
	                currentValue = _this.modelResolver.resolve(propertyRoute);
	            }
	            catch (ex) {
	                console.warn("Failed to resolve property " + propertyRoute + " during validation. Does it exist in your model?");
	                throw (ex);
	            }
	            var routeEachRule = function (ruleLinkOrSet) {
	                if (_this.isForEach(ruleLinkOrSet)) {
	                    var isCurrentlyAnArray = type_helper_1.TypeHelper.isArrayType(currentValue);
	                    if (isCurrentlyAnArray) {
	                        currentValue.forEach(function (element, index) {
	                            var childPropertyName = propertyRoute + "[" + index + "]";
	                            _this.validatePropertyWithRules(childPropertyName, [ruleLinkOrSet.internalRule]);
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
	            _this.validatePropertyWithRuleLinks(propertyRoute, ruleLinks);
	            ruleSets.forEach(function (ruleSet) {
	                _this.validatePropertyWithRuleSet(propertyRoute, ruleSet);
	            });
	            return _this;
	        };
	        this.startValidateProperty = function (propertyRoute) {
	            var rulesForProperty = _this.ruleResolver.resolvePropertyRules(propertyRoute, _this.ruleset);
	            if (!rulesForProperty) {
	                return _this;
	            }
	            return _this.validatePropertyWithRules(propertyRoute, rulesForProperty);
	        };
	        this.startValidateModel = function () {
	            for (var parameterName in _this.ruleset.rules) {
	                _this.startValidateProperty(parameterName);
	            }
	            return _this;
	        };
	        this.changeValidationTarget = function (model) {
	            _this.modelResolver = _this.modelResolverFactory.createModelResolver(model);
	        };
	        this.validateProperty = function (propertyRoute) {
	            return _this.startValidateProperty(propertyRoute)
	                .promiseCounter.waitForCompletion()
	                .then(function () { return !_this.propertyErrors[propertyRoute]; });
	        };
	        this.validate = function () {
	            return _this.startValidateModel()
	                .promiseCounter.waitForCompletion()
	                .then(function () { return !_this.hasErrors(); });
	        };
	        this.getModelErrors = function (revalidate) {
	            if (revalidate === void 0) { revalidate = false; }
	            var promise = revalidate ?
	                _this.startValidateModel().promiseCounter.waitForCompletion() :
	                _this.promiseCounter.waitForCompletion();
	            return promise.then(function () { return _this.propertyErrors; });
	        };
	        this.getPropertyError = function (propertyRoute, revalidate) {
	            if (revalidate === void 0) { revalidate = false; }
	            var promise = revalidate ?
	                _this.startValidateProperty(propertyRoute).promiseCounter.waitForCompletion() :
	                _this.promiseCounter.waitForCompletion();
	            return promise.then(function () { return _this.propertyErrors[propertyRoute]; });
	        };
	        this.release = function () { };
	        this.promiseCounter = new promise_counter_1.PromiseCounter();
	        this.modelResolver = this.modelResolverFactory.createModelResolver(model);
	    }
	    ValidationGroup.prototype.isRuleset = function (possibleRuleset) {
	        return (typeof (possibleRuleset.addRule) == "function");
	    };
	    ValidationGroup.prototype.isForEach = function (possibleForEach) {
	        return possibleForEach.isForEach;
	    };
	    ValidationGroup.prototype.hasErrors = function () {
	        return (Object.keys(this.propertyErrors).length > 0);
	    };
	    return ValidationGroup;
	}());
	exports.ValidationGroup = ValidationGroup;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var TypeHelper = (function () {
	    function TypeHelper() {
	    }
	    TypeHelper.isDateType = function (value) {
	        return (typeof value.getMonth === 'function');
	    };
	    TypeHelper.isFunctionType = function (value) {
	        return (typeof value === 'function');
	    };
	    TypeHelper.isSimpleType = function (value) {
	        return (typeof value == "string" || typeof value == "number");
	    };
	    TypeHelper.isArrayType = function (value) {
	        return Object.prototype.toString.call(value) === '[object Array]';
	    };
	    return TypeHelper;
	}());
	exports.TypeHelper = TypeHelper;


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	var PromiseCounter = (function () {
	    function PromiseCounter() {
	        var _this = this;
	        this.activePromises = [];
	        this.validationCounter = 0;
	        this.waitForCompletion = function () {
	            var resolver = function (resolve) {
	                _this.validationCounter ? _this.activePromises.push(function () { return resolve(); }) : resolve();
	            };
	            return new Promise(resolver);
	        };
	        this.countPromise = function (promise) {
	            if (!promise) {
	                return Promise.resolve(undefined);
	            }
	            if (!promise.then) {
	                throw new Error("Non-Promise pass in: " + promise);
	            }
	            _this.incrementCounter();
	            var resolver = function (resolve) {
	                _this.decrementCounter();
	                return resolve;
	            };
	            var rejecter = function (reject) {
	                _this.decrementCounter();
	                throw reject;
	            };
	            return promise.then(resolver, rejecter);
	        };
	        this.decrementCounter = function () {
	            _this.validationCounter--;
	            if (!_this.validationCounter) {
	                while (_this.activePromises.length) {
	                    _this.activePromises.shift()();
	                }
	            }
	        };
	        this.incrementCounter = function () { _this.validationCounter++; };
	    }
	    return PromiseCounter;
	}());
	exports.PromiseCounter = PromiseCounter;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var reactive_validation_group_1 = __webpack_require__(14);
	var model_watcher_factory_1 = __webpack_require__(20);
	var model_resolver_factory_1 = __webpack_require__(24);
	var ReactiveValidationGroupBuilder = (function () {
	    function ReactiveValidationGroupBuilder(fieldErrorProcessor, ruleResolver) {
	        var _this = this;
	        this.fieldErrorProcessor = fieldErrorProcessor;
	        this.ruleResolver = ruleResolver;
	        this.create = function () {
	            _this.refreshRate = 500;
	            _this.validateOnStart = false;
	            _this.modelWatcherFactory = new model_watcher_factory_1.ModelWatcherFactory();
	            _this.modelResolverFactory = new model_resolver_factory_1.ModelResolverFactory();
	            return _this;
	        };
	        this.withRefreshRate = function (refreshRate) {
	            _this.refreshRate = refreshRate;
	            return _this;
	        };
	        this.withModelResolverFactory = function (modelResolverFactory) {
	            _this.modelResolverFactory = modelResolverFactory;
	            return _this;
	        };
	        this.withModelWatcherFactory = function (modelWatcherFactory) {
	            _this.modelWatcherFactory = modelWatcherFactory;
	            return _this;
	        };
	        this.andValidateOnStart = function () {
	            _this.validateOnStart = true;
	            return _this;
	        };
	        this.build = function (model, ruleset) {
	            var validationGroup = new reactive_validation_group_1.ReactiveValidationGroup(_this.fieldErrorProcessor, _this.ruleResolver, _this.modelResolverFactory, _this.modelWatcherFactory, model, ruleset, _this.refreshRate);
	            if (_this.validateOnStart) {
	                validationGroup.validate();
	            }
	            return validationGroup;
	        };
	    }
	    return ReactiveValidationGroupBuilder;
	}());
	exports.ReactiveValidationGroupBuilder = ReactiveValidationGroupBuilder;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var event_js_1 = __webpack_require__(15);
	var property_state_changed_event_1 = __webpack_require__(18);
	var model_state_changed_event_1 = __webpack_require__(19);
	var rule_resolver_1 = __webpack_require__(6);
	var validation_group_1 = __webpack_require__(10);
	var ReactiveValidationGroup = (function (_super) {
	    __extends(ReactiveValidationGroup, _super);
	    function ReactiveValidationGroup(fieldErrorProcessor, ruleResolver, modelResolverFactory, modelWatcherFactory, model, ruleset, refreshRate) {
	        var _this = this;
	        if (ruleResolver === void 0) { ruleResolver = new rule_resolver_1.RuleResolver(); }
	        if (refreshRate === void 0) { refreshRate = 500; }
	        _super.call(this, fieldErrorProcessor, ruleResolver, modelResolverFactory, model, ruleset);
	        this.modelWatcherFactory = modelWatcherFactory;
	        this.refreshRate = refreshRate;
	        this.onModelChanged = function (eventArgs) {
	            _this.startValidateProperty(eventArgs.propertyPath);
	        };
	        this.validatePropertyWithRuleLinks = function (propertyName, propertyRules) {
	            return _this.promiseCounter.countPromise(_this.fieldErrorProcessor.checkFieldForErrors(_this.modelResolver, propertyName, propertyRules))
	                .then(function (possibleErrors) {
	                var hadErrors = _this.hasErrors();
	                if (!possibleErrors) {
	                    if (_this.propertyErrors[propertyName]) {
	                        delete _this.propertyErrors[propertyName];
	                        var eventArgs = new property_state_changed_event_1.PropertyStateChangedEvent(propertyName, true);
	                        _this.propertyStateChangedEvent.publish(eventArgs);
	                        var stillHasErrors = hadErrors && _this.hasErrors();
	                        if (!stillHasErrors) {
	                            _this.modelStateChangedEvent.publish(new model_state_changed_event_1.ModelStateChangedEvent(true));
	                        }
	                    }
	                    return;
	                }
	                var previousError = _this.propertyErrors[propertyName];
	                _this.propertyErrors[propertyName] = possibleErrors;
	                if (possibleErrors != previousError) {
	                    var eventArgs = new property_state_changed_event_1.PropertyStateChangedEvent(propertyName, false, possibleErrors);
	                    _this.propertyStateChangedEvent.publish(eventArgs);
	                    if (!hadErrors) {
	                        _this.modelStateChangedEvent.publish(new model_state_changed_event_1.ModelStateChangedEvent(false));
	                    }
	                }
	            })
	                .then(_this.promiseCounter.waitForCompletion);
	        };
	        this.release = function () {
	            if (_this.modelWatcher)
	                _this.modelWatcher.stopWatching();
	        };
	        this.propertyStateChangedEvent = new event_js_1.EventHandler(this);
	        this.modelStateChangedEvent = new event_js_1.EventHandler(this);
	        this.modelWatcher = this.modelWatcherFactory.createModelWatcher();
	        this.modelWatcher.setupWatcher(model, ruleset, refreshRate);
	        this.modelWatcher.onPropertyChanged.subscribe(this.onModelChanged);
	    }
	    return ReactiveValidationGroup;
	}(validation_group_1.ValidationGroup));
	exports.ReactiveValidationGroup = ReactiveValidationGroup;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* This is an auto-generated file by gulp-es6-exporter */
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(16));
	__export(__webpack_require__(17));


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var event_listener_1 = __webpack_require__(17);
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
/* 17 */
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
/* 18 */
/***/ function(module, exports) {

	"use strict";
	var PropertyStateChangedEvent = (function () {
	    function PropertyStateChangedEvent(property, isValid, error) {
	        this.property = property;
	        this.isValid = isValid;
	        this.error = error;
	    }
	    return PropertyStateChangedEvent;
	}());
	exports.PropertyStateChangedEvent = PropertyStateChangedEvent;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	var ModelStateChangedEvent = (function () {
	    function ModelStateChangedEvent(isValid) {
	        this.isValid = isValid;
	    }
	    return ModelStateChangedEvent;
	}());
	exports.ModelStateChangedEvent = ModelStateChangedEvent;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var model_watcher_1 = __webpack_require__(21);
	var ModelWatcherFactory = (function () {
	    function ModelWatcherFactory() {
	        this.createModelWatcher = function () {
	            return new model_watcher_1.ModelWatcher();
	        };
	    }
	    return ModelWatcherFactory;
	}());
	exports.ModelWatcherFactory = ModelWatcherFactory;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var property_resolver_1 = __webpack_require__(7);
	var event_js_1 = __webpack_require__(15);
	var type_helper_1 = __webpack_require__(11);
	var property_watcher_1 = __webpack_require__(22);
	var property_changed_event_1 = __webpack_require__(23);
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
	}());
	exports.ModelWatcher = ModelWatcher;


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	var PropertyWatcher = (function () {
	    function PropertyWatcher(propertyPath, previousValue) {
	        this.propertyPath = propertyPath;
	        this.previousValue = previousValue;
	    }
	    return PropertyWatcher;
	}());
	exports.PropertyWatcher = PropertyWatcher;


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	var PropertyChangedEvent = (function () {
	    function PropertyChangedEvent(propertyPath, newValue, oldValue) {
	        this.propertyPath = propertyPath;
	        this.newValue = newValue;
	        this.oldValue = oldValue;
	    }
	    return PropertyChangedEvent;
	}());
	exports.PropertyChangedEvent = PropertyChangedEvent;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var model_resolver_1 = __webpack_require__(25);
	var property_resolver_1 = __webpack_require__(7);
	var ModelResolverFactory = (function () {
	    function ModelResolverFactory(propertyResolver) {
	        var _this = this;
	        if (propertyResolver === void 0) { propertyResolver = new property_resolver_1.PropertyResolver(); }
	        this.propertyResolver = propertyResolver;
	        this.createModelResolver = function (model) {
	            return new model_resolver_1.ModelResolver(_this.propertyResolver, model);
	        };
	    }
	    return ModelResolverFactory;
	}());
	exports.ModelResolverFactory = ModelResolverFactory;


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	var ModelResolver = (function () {
	    function ModelResolver(propertyResolver, model) {
	        this.propertyResolver = propertyResolver;
	        this.model = model;
	    }
	    ModelResolver.prototype.resolve = function (propertyName) {
	        return this.propertyResolver.resolveProperty(this.model, propertyName);
	    };
	    ;
	    return ModelResolver;
	}());
	exports.ModelResolver = ModelResolver;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var rule_registry_1 = __webpack_require__(27);
	var date_validation_rule_1 = __webpack_require__(28);
	var decimal_validation_rule_1 = __webpack_require__(29);
	var email_validation_rule_1 = __webpack_require__(30);
	var equal_validation_rule_1 = __webpack_require__(31);
	var iso_date_validation_rule_1 = __webpack_require__(33);
	var max_length_validation_rule_1 = __webpack_require__(34);
	var max_value_validation_rule_1 = __webpack_require__(35);
	var min_length_validation_rule_1 = __webpack_require__(36);
	var min_value_validation_rule_1 = __webpack_require__(37);
	var not_equal_validation_rule_1 = __webpack_require__(38);
	var number_validation_rule_1 = __webpack_require__(39);
	var regex_validation_rule_1 = __webpack_require__(40);
	var required_validation_rule_1 = __webpack_require__(41);
	var step_validation_rule_1 = __webpack_require__(42);
	var matches_validation_rule_1 = __webpack_require__(43);
	if (!exports.ruleRegistry) {
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
	    exports.ruleRegistry.registerRule(new matches_validation_rule_1.MatchesValidationRule());
	}


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
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
	}());
	exports.RuleRegistry = RuleRegistry;


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	var DateValidationRule = (function () {
	    function DateValidationRule() {
	        this.ruleName = "date";
	        this.invalidObjectRegex = /Invalid|NaN/;
	    }
	    DateValidationRule.prototype.validate = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var matchesRegex = !this.invalidObjectRegex.test(new Date(value));
	        return Promise.resolve(matchesRegex);
	    };
	    DateValidationRule.prototype.getMessage = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field contains \"" + value + "\" which is not a valid date";
	    };
	    return DateValidationRule;
	}());
	exports.DateValidationRule = DateValidationRule;


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	var DecimalValidationRule = (function () {
	    function DecimalValidationRule() {
	        this.ruleName = "decimal";
	        this.decimalRegex = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
	    }
	    DecimalValidationRule.prototype.validate = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var matchesRegex = this.decimalRegex.test(value);
	        return Promise.resolve(matchesRegex);
	    };
	    DecimalValidationRule.prototype.getMessage = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field contains " + value + " which is not a decimal value";
	    };
	    return DecimalValidationRule;
	}());
	exports.DecimalValidationRule = DecimalValidationRule;


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	var EmailValidationRule = (function () {
	    function EmailValidationRule() {
	        this.ruleName = "email";
	        this.emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/;
	    }
	    EmailValidationRule.prototype.validate = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var matchesRegex = this.emailRegex.test(value);
	        return Promise.resolve(matchesRegex);
	    };
	    EmailValidationRule.prototype.getMessage = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field contains \"" + value + "\" which is not a valid email address";
	    };
	    return EmailValidationRule;
	}());
	exports.EmailValidationRule = EmailValidationRule;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var type_helper_1 = __webpack_require__(11);
	var comparer_helper_1 = __webpack_require__(32);
	var EqualValidationRule = (function () {
	    function EqualValidationRule() {
	        this.ruleName = "equal";
	    }
	    EqualValidationRule.prototype.validate = function (modelResolver, propertyName, optionsOrValue) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var result;
	        var comparison = optionsOrValue.value || optionsOrValue;
	        var weakEquality = optionsOrValue.weakEquality || false;
	        if (type_helper_1.TypeHelper.isFunctionType(comparison)) {
	            comparison = comparison();
	        }
	        if (type_helper_1.TypeHelper.isDateType(comparison)) {
	            result = comparer_helper_1.ComparerHelper.dateTimeCompararer(value, comparison);
	        }
	        else {
	            result = comparer_helper_1.ComparerHelper.simpleTypeComparer(value, comparison, weakEquality);
	        }
	        return Promise.resolve(result);
	    };
	    EqualValidationRule.prototype.getMessage = function (modelResolver, propertyName, optionsOrValue) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field is " + value + " but should be equal to " + (optionsOrValue.value || optionsOrValue);
	    };
	    return EqualValidationRule;
	}());
	exports.EqualValidationRule = EqualValidationRule;


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
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
	}());
	exports.ComparerHelper = ComparerHelper;


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	var ISODateValidationRule = (function () {
	    function ISODateValidationRule() {
	        this.ruleName = "isoDate";
	        this.isoDateRegex = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
	    }
	    ISODateValidationRule.prototype.validate = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var matchesRegex = this.isoDateRegex.test(value);
	        return Promise.resolve(matchesRegex);
	    };
	    ISODateValidationRule.prototype.getMessage = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field contains \"" + value + "\" which is not a valid ISO date";
	    };
	    return ISODateValidationRule;
	}());
	exports.ISODateValidationRule = ISODateValidationRule;


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	var MaxLengthValidationRule = (function () {
	    function MaxLengthValidationRule() {
	        this.ruleName = "maxLength";
	    }
	    MaxLengthValidationRule.prototype.validate = function (modelResolver, propertyName, maxLength) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        if (value.length <= maxLength) {
	            return Promise.resolve(true);
	        }
	        return Promise.resolve(false);
	    };
	    MaxLengthValidationRule.prototype.getMessage = function (modelResolver, propertyName, maxLength) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field has a length of " + value.length + " but should contain no more than " + maxLength;
	    };
	    return MaxLengthValidationRule;
	}());
	exports.MaxLengthValidationRule = MaxLengthValidationRule;


/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	var MaxValueValidationRule = (function () {
	    function MaxValueValidationRule() {
	        this.ruleName = "maxValue";
	    }
	    MaxValueValidationRule.prototype.validate = function (modelResolver, propertyName, maxValue) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        if (value <= maxValue) {
	            return Promise.resolve(true);
	        }
	        return Promise.resolve(false);
	    };
	    MaxValueValidationRule.prototype.getMessage = function (modelResolver, propertyName, maxValue) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field has a value of " + value + " but should be less than or equal to " + maxValue;
	    };
	    return MaxValueValidationRule;
	}());
	exports.MaxValueValidationRule = MaxValueValidationRule;


/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	var MinLengthValidationRule = (function () {
	    function MinLengthValidationRule() {
	        this.ruleName = "minLength";
	    }
	    MinLengthValidationRule.prototype.validate = function (modelResolver, propertyName, minLength) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        if (value.length >= minLength) {
	            return Promise.resolve(true);
	        }
	        return Promise.resolve(false);
	    };
	    MinLengthValidationRule.prototype.getMessage = function (modelResolver, propertyName, minLength) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field has a length of " + value.length + " but should more than " + minLength;
	    };
	    return MinLengthValidationRule;
	}());
	exports.MinLengthValidationRule = MinLengthValidationRule;


/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	var MinValueValidationRule = (function () {
	    function MinValueValidationRule() {
	        this.ruleName = "minValue";
	    }
	    MinValueValidationRule.prototype.validate = function (modelResolver, propertyName, minValue) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        if (value >= minValue) {
	            return Promise.resolve(true);
	        }
	        return Promise.resolve(false);
	    };
	    MinValueValidationRule.prototype.getMessage = function (modelResolver, propertyName, minValue) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field has a value of " + value + " but should be greater than or equal to " + minValue;
	    };
	    return MinValueValidationRule;
	}());
	exports.MinValueValidationRule = MinValueValidationRule;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var type_helper_1 = __webpack_require__(11);
	var comparer_helper_1 = __webpack_require__(32);
	var NotEqualValidationRule = (function () {
	    function NotEqualValidationRule() {
	        this.ruleName = "notEqual";
	    }
	    NotEqualValidationRule.prototype.validate = function (modelResolver, propertyName, optionsOrValue) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var result;
	        var comparison = optionsOrValue.value || optionsOrValue;
	        var weakEquality = optionsOrValue.weakEquality || false;
	        if (type_helper_1.TypeHelper.isFunctionType(comparison)) {
	            comparison = comparison();
	        }
	        if (type_helper_1.TypeHelper.isDateType(comparison)) {
	            result = !comparer_helper_1.ComparerHelper.dateTimeCompararer(value, comparison);
	        }
	        else {
	            result = !comparer_helper_1.ComparerHelper.simpleTypeComparer(value, comparison, weakEquality);
	        }
	        return Promise.resolve(result);
	    };
	    NotEqualValidationRule.prototype.getMessage = function (modelResolver, propertyName, optionsOrValue) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field is " + value + " but should not be equal to " + (optionsOrValue.value || optionsOrValue);
	    };
	    return NotEqualValidationRule;
	}());
	exports.NotEqualValidationRule = NotEqualValidationRule;


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	var NumberValidationRule = (function () {
	    function NumberValidationRule() {
	        this.ruleName = "number";
	        this.numberRegex = /^\d+$/;
	    }
	    NumberValidationRule.prototype.validate = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var matchesRegex = this.numberRegex.test(value);
	        return Promise.resolve(matchesRegex);
	    };
	    NumberValidationRule.prototype.getMessage = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field contains " + value + " which is not a numeric value";
	    };
	    return NumberValidationRule;
	}());
	exports.NumberValidationRule = NumberValidationRule;


/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	var RegexValidationRule = (function () {
	    function RegexValidationRule() {
	        this.ruleName = "regex";
	    }
	    RegexValidationRule.prototype.validate = function (modelResolver, propertyName, regexPattern) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        var matchesPattern = value.toString().match(regexPattern) !== null;
	        return Promise.resolve(matchesPattern);
	    };
	    RegexValidationRule.prototype.getMessage = function (modelResolver, propertyName, regexPattern) {
	        return "This field does not match the expected format";
	    };
	    return RegexValidationRule;
	}());
	exports.RegexValidationRule = RegexValidationRule;


/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	var RequiredValidationRule = (function () {
	    function RequiredValidationRule() {
	        this.ruleName = "required";
	    }
	    RequiredValidationRule.prototype.validate = function (modelResolver, propertyName, isRequired) {
	        if (isRequired === void 0) { isRequired = true; }
	        var value = modelResolver.resolve(propertyName);
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
	    RequiredValidationRule.prototype.getMessage = function (modelResolver, propertyName, isRequired) {
	        return "This field is required";
	    };
	    return RequiredValidationRule;
	}());
	exports.RequiredValidationRule = RequiredValidationRule;


/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	var StepValidationRule = (function () {
	    function StepValidationRule() {
	        this.ruleName = "step";
	    }
	    StepValidationRule.prototype.validate = function (modelResolver, propertyName, step) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null) {
	            return Promise.resolve(true);
	        }
	        var dif = (value * 100) % (step * 100);
	        var matchesStep = Math.abs(dif) < 0.00001 || Math.abs(1 - dif) < 0.00001;
	        return Promise.resolve(matchesStep);
	    };
	    StepValidationRule.prototype.getMessage = function (modelResolver, propertyName, step) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field has a value of " + value + " and should be an increment of " + step;
	    };
	    return StepValidationRule;
	}());
	exports.StepValidationRule = StepValidationRule;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var type_helper_1 = __webpack_require__(11);
	var comparer_helper_1 = __webpack_require__(32);
	var MatchesValidationRule = (function () {
	    function MatchesValidationRule() {
	        this.ruleName = "matches";
	    }
	    MatchesValidationRule.prototype.validate = function (modelResolver, propertyName, optionsOrProperty) {
	        var fieldToMatch = optionsOrProperty.property || optionsOrProperty;
	        var weakEquality = optionsOrProperty.weakEquality || false;
	        var value = modelResolver.resolve(propertyName);
	        var matchingFieldValue = modelResolver.resolve(fieldToMatch);
	        var result;
	        if (value === undefined || value === null) {
	            result = (matchingFieldValue === undefined || matchingFieldValue === null);
	        }
	        else if (type_helper_1.TypeHelper.isDateType(value)) {
	            result = comparer_helper_1.ComparerHelper.dateTimeCompararer(value, matchingFieldValue);
	        }
	        else {
	            result = comparer_helper_1.ComparerHelper.simpleTypeComparer(value, matchingFieldValue, weakEquality);
	        }
	        return Promise.resolve(result);
	    };
	    MatchesValidationRule.prototype.getMessage = function (modelResolver, propertyName, optionsOrProperty) {
	        var value = modelResolver.resolve(propertyName);
	        var fieldToMatch = optionsOrProperty.property || optionsOrProperty;
	        var matchingFieldValue = modelResolver.resolve(fieldToMatch);
	        return "This field is " + value + " but should match " + matchingFieldValue;
	    };
	    return MatchesValidationRule;
	}());
	exports.MatchesValidationRule = MatchesValidationRule;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ruleset_1 = __webpack_require__(45);
	var rule_link_1 = __webpack_require__(46);
	var for_each_rule_1 = __webpack_require__(47);
	var type_helper_1 = __webpack_require__(11);
	var RulesetBuilder = (function () {
	    function RulesetBuilder(ruleRegistry) {
	        var _this = this;
	        this.ruleRegistry = ruleRegistry;
	        this.create = function () {
	            _this.internalRuleset = new ruleset_1.Ruleset();
	            _this.currentProperty = null;
	            return _this;
	        };
	        this.forProperty = function (propertyNameOrPredicate) {
	            var endProperty = propertyNameOrPredicate;
	            if (type_helper_1.TypeHelper.isFunctionType(endProperty)) {
	                endProperty = _this.extractPropertyName(propertyNameOrPredicate);
	                if (!endProperty) {
	                    throw new Error("cannot resolve property from: " + propertyNameOrPredicate);
	                }
	            }
	            _this.currentProperty = endProperty;
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
	        this.appliesIf = function (appliesFunction) {
	            if (!_this.currentRule) {
	                throw new Error("An appliesIf function must precede an addRule call in the chain");
	            }
	            _this.currentRule.appliesIf = appliesFunction;
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
	    RulesetBuilder.prototype.extractPropertyName = function (predicate) {
	        var regex = /.*\.([\w]*);/;
	        var predicateString = predicate.toString();
	        return regex.exec(predicateString)[1];
	    };
	    return RulesetBuilder;
	}());
	exports.RulesetBuilder = RulesetBuilder;


/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
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
	}());
	exports.Ruleset = Ruleset;


/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	var RuleLink = (function () {
	    function RuleLink(ruleName, ruleOptions) {
	        this.ruleName = ruleName;
	        this.ruleOptions = ruleOptions;
	        this.appliesIf = true;
	    }
	    return RuleLink;
	}());
	exports.RuleLink = RuleLink;


/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	var ForEachRule = (function () {
	    function ForEachRule(internalRule) {
	        this.internalRule = internalRule;
	        this.isForEach = true;
	    }
	    return ForEachRule;
	}());
	exports.ForEachRule = ForEachRule;


/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	var ValidationError = (function () {
	    function ValidationError(propertyName, message) {
	        this.propertyName = propertyName;
	        this.message = message;
	    }
	    return ValidationError;
	}());
	exports.ValidationError = ValidationError;


/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
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
	    AdvancedRegexValidationRule.prototype.validate = function (modelResolver, propertyName, regexPattern) {
	        var value = modelResolver.resolve(propertyName);
	        if (value === undefined || value === null || value.length == 0) {
	            return Promise.resolve(true);
	        }
	        var matchesPattern = value.toString().match(this.expression) !== null;
	        return Promise.resolve(matchesPattern);
	    };
	    AdvancedRegexValidationRule.prototype.getMessage = function (modelResolver, propertyName, regexPattern) {
	        var value = modelResolver.resolve(propertyName);
	        return this.message(value);
	    };
	    return AdvancedRegexValidationRule;
	}());
	exports.AdvancedRegexValidationRule = AdvancedRegexValidationRule;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(51));
	__export(__webpack_require__(54));
	__export(__webpack_require__(56));
	__export(__webpack_require__(57));
	__export(__webpack_require__(52));
	__export(__webpack_require__(55));
	__export(__webpack_require__(53));
	__export(__webpack_require__(58));
	__export(__webpack_require__(59));
	__export(__webpack_require__(60));


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var view_strategy_registry_1 = __webpack_require__(52);
	var inline_strategy_1 = __webpack_require__(53);
	exports.viewStrategyRegistry = new view_strategy_registry_1.ViewStrategyRegistry();
	exports.viewStrategyRegistry.registerStrategy(new inline_strategy_1.InlineStrategy());


/***/ },
/* 52 */
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var class_helper_1 = __webpack_require__(54);
	var inline_handler_1 = __webpack_require__(55);
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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var js_literal_helper_1 = __webpack_require__(57);
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
/* 57 */
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
/* 58 */
/***/ function(module, exports) {

	"use strict";
	(function (ValidationState) {
	    ValidationState[ValidationState["unknown"] = 0] = "unknown";
	    ValidationState[ValidationState["valid"] = 1] = "valid";
	    ValidationState[ValidationState["invalid"] = 2] = "invalid";
	})(exports.ValidationState || (exports.ValidationState = {}));
	var ValidationState = exports.ValidationState;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var class_helper_1 = __webpack_require__(54);
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var summary_handler_1 = __webpack_require__(59);
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
	        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
	        this.summaryHandler.createPropertyErrorElement(error, summaryContainerElement, propertyRoute);
	    };
	    return ViewSummary;
	}());
	exports.ViewSummary = ViewSummary;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(62);
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
/* 62 */
/***/ function(module, exports) {

	module.exports = ko;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var knockout_model_watcher_1 = __webpack_require__(64);
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var treacherous_1 = __webpack_require__(2);
	var property_resolver_1 = __webpack_require__(7);
	var event_js_1 = __webpack_require__(15);
	var ko = __webpack_require__(62);
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(62);
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(62);
	var validation_handler_1 = __webpack_require__(67);
	ko.bindingHandlers["show-error"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var propertyPath = valueAccessor();
	        validation_handler_1.ValidationHandler.handleValidation(element, propertyPath, valueAccessor(), bindingContext);
	    }
	};


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var binding_helper_1 = __webpack_require__(68);
	var treacherous_view_1 = __webpack_require__(50);
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
	                    viewStrategy.propertyBecomeValid(element, propertyPath, validationState);
	                    validationState = treacherous_view_1.ValidationState.valid;
	                }
	                else {
	                    viewStrategy.propertyBecomeInvalid(element, error, propertyPath, validationState);
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
/* 68 */
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(62);
	var binding_helper_1 = __webpack_require__(68);
	var treacherous_view_1 = __webpack_require__(50);
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(62);
	var treacherous_1 = __webpack_require__(2);
	var treacherous_view_1 = __webpack_require__(50);
	var binding_helper_1 = __webpack_require__(68);
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(62);
	var binding_helper_1 = __webpack_require__(68);
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(62);
	var binding_helper_1 = __webpack_require__(68);
	var validation_handler_1 = __webpack_require__(67);
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(62);
	var binding_helper_1 = __webpack_require__(68);
	var validation_handler_1 = __webpack_require__(67);
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var ko = __webpack_require__(62);
	var binding_helper_1 = __webpack_require__(68);
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