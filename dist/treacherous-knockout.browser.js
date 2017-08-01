(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ko"));
	else if(typeof define === 'function' && define.amd)
		define(["ko"], factory);
	else if(typeof exports === 'object')
		exports["Treacherous"] = factory(require("ko"));
	else
		root["Treacherous"] = factory(root["ko"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_64__) {
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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(1));
	__export(__webpack_require__(67));
	__export(__webpack_require__(68));
	__export(__webpack_require__(71));
	__export(__webpack_require__(69));
	__export(__webpack_require__(72));
	__export(__webpack_require__(70));
	__export(__webpack_require__(65));
	__export(__webpack_require__(66));
	__export(__webpack_require__(63));
	__export(__webpack_require__(73));
	__export(__webpack_require__(74));
	__export(__webpack_require__(75));
	__export(__webpack_require__(76));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(2));
	__export(__webpack_require__(52));
	var treacherous_1 = __webpack_require__(2);
	var knockout_property_resolver_1 = __webpack_require__(63);
	var knockout_model_watcher_factory_1 = __webpack_require__(65);
	var knockoutPropertyResolver = new knockout_property_resolver_1.KnockoutPropertyResolver();
	var knockoutModelWatcherFactory = new knockout_model_watcher_factory_1.KnockoutModelWatcherFactory(knockoutPropertyResolver);
	var modelResolverFactory = new treacherous_1.ModelResolverFactory(knockoutPropertyResolver);
	function createGroup() {
	    return treacherous_1.createGroup()
	        .andValidateOnStart()
	        .asReactiveGroup()
	        .withModelResolverFactory(modelResolverFactory)
	        .withModelWatcherFactory(knockoutModelWatcherFactory);
	}
	exports.createGroup = createGroup;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(3));
	__export(__webpack_require__(27));
	__export(__webpack_require__(19));
	__export(__webpack_require__(45));
	__export(__webpack_require__(10));
	__export(__webpack_require__(15));
	__export(__webpack_require__(24));
	__export(__webpack_require__(14));
	__export(__webpack_require__(25));
	__export(__webpack_require__(21));
	__export(__webpack_require__(33));
	__export(__webpack_require__(12));
	__export(__webpack_require__(4));
	__export(__webpack_require__(6));
	__export(__webpack_require__(50));
	__export(__webpack_require__(13));
	__export(__webpack_require__(26));
	__export(__webpack_require__(51));
	__export(__webpack_require__(29));
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));
	__export(__webpack_require__(32));
	__export(__webpack_require__(34));
	__export(__webpack_require__(44));
	__export(__webpack_require__(35));
	__export(__webpack_require__(36));
	__export(__webpack_require__(37));
	__export(__webpack_require__(38));
	__export(__webpack_require__(39));
	__export(__webpack_require__(40));
	__export(__webpack_require__(41));
	__export(__webpack_require__(42));
	__export(__webpack_require__(28));
	__export(__webpack_require__(43));
	__export(__webpack_require__(48));
	__export(__webpack_require__(47));
	__export(__webpack_require__(7));
	__export(__webpack_require__(46));
	__export(__webpack_require__(20));
	__export(__webpack_require__(11));
	__export(__webpack_require__(22));
	__export(__webpack_require__(23));
	__export(__webpack_require__(49));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var field_error_processor_1 = __webpack_require__(4);
	var rule_resolver_1 = __webpack_require__(7);
	var validation_group_builder_1 = __webpack_require__(10);
	var rule_registry_setup_1 = __webpack_require__(27);
	var ruleset_builder_1 = __webpack_require__(45);
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var field_has_error_1 = __webpack_require__(6);
	var FieldErrorProcessor = (function () {
	    function FieldErrorProcessor(ruleRegistry) {
	        this.ruleRegistry = ruleRegistry;
	    }
	    // Validates a single property against a model
	    FieldErrorProcessor.prototype.processRuleLink = function (modelResolver, propertyName, ruleLink) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var shouldRuleApply, validator, options, isValid, error;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        shouldRuleApply = ruleLink.appliesIf === true
	                            || ((typeof (ruleLink.appliesIf) === "function")
	                                ? (ruleLink.appliesIf)(modelResolver, propertyName, ruleLink.ruleOptions)
	                                : false);
	                        if (!shouldRuleApply) {
	                            return [2 /*return*/];
	                        }
	                        validator = this.ruleRegistry.getRuleNamed(ruleLink.ruleName);
	                        options = (typeof ruleLink.ruleOptions == "function") ? ruleLink.ruleOptions() : ruleLink.ruleOptions;
	                        return [4 /*yield*/, validator.validate(modelResolver, propertyName, options)];
	                    case 1:
	                        isValid = _a.sent();
	                        if (isValid) {
	                            return [2 /*return*/];
	                        }
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
	            });
	        });
	    };
	    // Loops through each rule on a property, adds it to a chain, then calls Promise.all
	    // Probably not correct, as they won't fire sequentially? Promises need to be chained
	    FieldErrorProcessor.prototype.checkFieldForErrors = function (modelResolver, propertyName, rules) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            var ruleCheck, checkEachRule;
	            return tslib_1.__generator(this, function (_a) {
	                ruleCheck = function (ruleLinkOrSet) {
	                    return _this.processRuleLink(modelResolver, propertyName, ruleLinkOrSet);
	                };
	                checkEachRule = function (rules) {
	                    var promises = [];
	                    rules.forEach(function (rule) {
	                        promises.push(ruleCheck(rule));
	                    });
	                    return Promise.all(promises);
	                };
	                return [2 /*return*/, Promise.resolve(rules)
	                        .then(checkEachRule)
	                        .then(function () { return null; })
	                        .catch(function (validationError) {
	                        return validationError.message;
	                    })];
	            });
	        });
	    };
	    return FieldErrorProcessor;
	}());
	exports.FieldErrorProcessor = FieldErrorProcessor;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global global, define, System, Reflect, Promise */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __metadata;
	var __awaiter;
	var __generator;
	var __exportStar;
	var __values;
	var __read;
	var __spread;
	var __await;
	var __asyncGenerator;
	var __asyncDelegator;
	var __asyncValues;
	(function (factory) {
	    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) { factory(createExporter(root, createExporter(exports))); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === "object" && typeof module.exports === "object") {
	        factory(createExporter(root, createExporter(module.exports)));
	    }
	    else {
	        factory(createExporter(root));
	    }
	    function createExporter(exports, previous) {
	        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
	    }
	})
	(function (exporter) {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

	    __extends = function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };

	    __assign = Object.assign || function (t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };

	    __rest = function (s, e) {
	        var t = {};
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	        if (s != null && typeof Object.getOwnPropertySymbols === "function")
	            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	                t[p[i]] = s[p[i]];
	        return t;
	    };

	    __decorate = function (decorators, target, key, desc) {
	        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };

	    __param = function (paramIndex, decorator) {
	        return function (target, key) { decorator(target, key, paramIndex); }
	    };

	    __metadata = function (metadataKey, metadataValue) {
	        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	    };

	    __awaiter = function (thisArg, _arguments, P, generator) {
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    };

	    __generator = function (thisArg, body) {
	        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	        function verb(n) { return function (v) { return step([n, v]); }; }
	        function step(op) {
	            if (f) throw new TypeError("Generator is already executing.");
	            while (_) try {
	                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	                if (y = 0, t) op = [0, t.value];
	                switch (op[0]) {
	                    case 0: case 1: t = op; break;
	                    case 4: _.label++; return { value: op[1], done: false };
	                    case 5: _.label++; y = op[1]; op = [0]; continue;
	                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                        if (t[2]) _.ops.pop();
	                        _.trys.pop(); continue;
	                }
	                op = body.call(thisArg, _);
	            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	        }
	    };

	    __exportStar = function (m, exports) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    };

	    __values = function (o) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	        if (m) return m.call(o);
	        return {
	            next: function () {
	                if (o && i >= o.length) o = void 0;
	                return { value: o && o[i++], done: !o };
	            }
	        };
	    };

	    __read = function (o, n) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator];
	        if (!m) return o;
	        var i = m.call(o), r, ar = [], e;
	        try {
	            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	        }
	        catch (error) { e = { error: error }; }
	        finally {
	            try {
	                if (r && !r.done && (m = i["return"])) m.call(i);
	            }
	            finally { if (e) throw e.error; }
	        }
	        return ar;
	    };

	    __spread = function () {
	        for (var ar = [], i = 0; i < arguments.length; i++)
	            ar = ar.concat(__read(arguments[i]));
	        return ar;
	    };

	    __await = function (v) {
	        return this instanceof __await ? (this.v = v, this) : new __await(v);
	    };

	    __asyncGenerator = function (thisArg, _arguments, generator) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var g = generator.apply(thisArg, _arguments || []), i, q = [];
	        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
	        function fulfill(value) { resume("next", value); }
	        function reject(value) { resume("throw", value); }
	        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	    };

	    __asyncDelegator = function (o) {
	        var i, p;
	        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	        function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
	    };

	    __asyncValues = function (o) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var m = o[Symbol.asyncIterator];
	        return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
	    };

	    exporter("__extends", __extends);
	    exporter("__assign", __assign);
	    exporter("__rest", __rest);
	    exporter("__decorate", __decorate);
	    exporter("__param", __param);
	    exporter("__metadata", __metadata);
	    exporter("__awaiter", __awaiter);
	    exporter("__generator", __generator);
	    exporter("__exportStar", __exportStar);
	    exporter("__values", __values);
	    exporter("__read", __read);
	    exporter("__spread", __spread);
	    exporter("__await", __await);
	    exporter("__asyncGenerator", __asyncGenerator);
	    exporter("__asyncDelegator", __asyncDelegator);
	    exporter("__asyncValues", __asyncValues);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var FieldHasError = (function (_super) {
	    tslib_1.__extends(FieldHasError, _super);
	    function FieldHasError(message) {
	        var _this = _super.call(this, message) || this;
	        _this.message = message;
	        return _this;
	    }
	    return FieldHasError;
	}(Error));
	exports.FieldHasError = FieldHasError;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var property_resolver_1 = __webpack_require__(8);
	var RuleResolver = (function () {
	    function RuleResolver(propertyResolver) {
	        if (propertyResolver === void 0) { propertyResolver = new property_resolver_1.PropertyResolver(); }
	        var _this = this;
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
	                return matchingRules.getRulesForProperty(finalProperty);
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
	                var applicableRules_1 = [];
	                childRules.forEach(function (internalRules) {
	                    if (internalRules.isForEach) {
	                        applicableRules_1.push(internalRules.internalRule);
	                    }
	                });
	                if (propertyRouteSections.length > 0) {
	                    var totalRules_1 = [];
	                    applicableRules_1.forEach(function (applicableRule) {
	                        var currentRouteSection = propertyRouteSections.slice();
	                        var outputRules = _this.traverseRulesForRoutes(currentRouteSection, applicableRule);
	                        outputRules.forEach(function (outputRule) {
	                            totalRules_1.push(outputRule);
	                        });
	                    });
	                    return totalRules_1;
	                }
	                return applicableRules_1;
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


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var property_resolver_1 = __webpack_require__(9);
	exports.PropertyResolver = property_resolver_1.PropertyResolver;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

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


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var validation_group_1 = __webpack_require__(11);
	var reactive_validation_group_builder_1 = __webpack_require__(19);
	var model_resolver_factory_1 = __webpack_require__(25);
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


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var rule_resolver_1 = __webpack_require__(7);
	var type_helper_1 = __webpack_require__(12);
	var promise_counter_1 = __webpack_require__(13);
	var property_state_changed_event_1 = __webpack_require__(14);
	var model_state_changed_event_1 = __webpack_require__(15);
	var event_js_1 = __webpack_require__(16);
	// TODO: This class could be simplified
	var ValidationGroup = (function () {
	    function ValidationGroup(fieldErrorProcessor, ruleResolver, modelResolverFactory, model, ruleset) {
	        if (ruleResolver === void 0) { ruleResolver = new rule_resolver_1.RuleResolver(); }
	        var _this = this;
	        this.fieldErrorProcessor = fieldErrorProcessor;
	        this.ruleResolver = ruleResolver;
	        this.modelResolverFactory = modelResolverFactory;
	        this.ruleset = ruleset;
	        this.propertyErrors = {};
	        this.validatePropertyWithRuleLinks = function (propertyName, propertyRules) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var activePromise, possibleErrors, hadErrors, eventArgs, stillHasErrors, previousError, eventArgs;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        activePromise = this.fieldErrorProcessor.checkFieldForErrors(this.modelResolver, propertyName, propertyRules);
	                        return [4 /*yield*/, this.promiseCounter.countPromise(activePromise)];
	                    case 1:
	                        possibleErrors = _a.sent();
	                        hadErrors = this.hasErrors();
	                        if (!possibleErrors) {
	                            if (this.propertyErrors[propertyName]) {
	                                delete this.propertyErrors[propertyName];
	                                eventArgs = new property_state_changed_event_1.PropertyStateChangedEvent(propertyName, true);
	                                this.propertyStateChangedEvent.publish(eventArgs);
	                                stillHasErrors = hadErrors && this.hasErrors();
	                                if (!stillHasErrors) {
	                                    this.modelStateChangedEvent.publish(new model_state_changed_event_1.ModelStateChangedEvent(true));
	                                }
	                            }
	                            return [2 /*return*/, this.promiseCounter.waitForCompletion()];
	                        }
	                        previousError = this.propertyErrors[propertyName];
	                        this.propertyErrors[propertyName] = possibleErrors;
	                        if (possibleErrors != previousError) {
	                            eventArgs = new property_state_changed_event_1.PropertyStateChangedEvent(propertyName, false, possibleErrors);
	                            this.propertyStateChangedEvent.publish(eventArgs);
	                            if (!hadErrors) {
	                                this.modelStateChangedEvent.publish(new model_state_changed_event_1.ModelStateChangedEvent(false));
	                            }
	                        }
	                        return [2 /*return*/, this.promiseCounter.waitForCompletion()];
	                }
	            });
	        }); };
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
	                if (ValidationGroup.isForEach(ruleLinkOrSet)) {
	                    var isCurrentlyAnArray = type_helper_1.TypeHelper.isArrayType(currentValue);
	                    if (isCurrentlyAnArray) {
	                        currentValue.forEach(function (element, index) {
	                            var childPropertyName = propertyRoute + "[" + index + "]";
	                            _this.validatePropertyWithRules(childPropertyName, [ruleLinkOrSet.internalRule]);
	                        });
	                    }
	                    else {
	                        if (ValidationGroup.isRuleset(ruleLinkOrSet.internalRule)) {
	                            ruleSets.push(ruleLinkOrSet.internalRule);
	                        }
	                        else {
	                            ruleLinks.push(ruleLinkOrSet.internalRule);
	                        }
	                    }
	                }
	                else if (ValidationGroup.isRuleset(ruleLinkOrSet)) {
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
	        };
	        this.startValidateProperty = function (propertyRoute) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var rulesForProperty;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!(this.ruleset.compositeRules !== {})) return [3 /*break*/, 2];
	                        return [4 /*yield*/, this.validateCompositeRules()];
	                    case 1:
	                        _a.sent();
	                        _a.label = 2;
	                    case 2:
	                        if (this.ruleset.compositeRules[propertyRoute] !== undefined) {
	                            return [2 /*return*/];
	                        }
	                        rulesForProperty = this.ruleResolver.resolvePropertyRules(propertyRoute, this.ruleset);
	                        if (!rulesForProperty) {
	                            return [2 /*return*/];
	                        }
	                        return [2 /*return*/, this.validatePropertyWithRules(propertyRoute, rulesForProperty)];
	                }
	            });
	        }); };
	        this.validateCompositeRule = function (compositeRule) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var hadErrors, isValid, eventArgs, stillHasErrors, previousError, currentError, eventArgs;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        hadErrors = this.hasErrors();
	                        return [4 /*yield*/, compositeRule.validate(this.modelResolver)];
	                    case 1:
	                        isValid = _a.sent();
	                        if (isValid) {
	                            if (this.propertyErrors[compositeRule.virtualPropertyName]) {
	                                delete this.propertyErrors[compositeRule.virtualPropertyName];
	                                eventArgs = new property_state_changed_event_1.PropertyStateChangedEvent(compositeRule.virtualPropertyName, true);
	                                this.propertyStateChangedEvent.publish(eventArgs);
	                            }
	                            stillHasErrors = hadErrors && this.hasErrors();
	                            if (!stillHasErrors) {
	                                this.modelStateChangedEvent.publish(new model_state_changed_event_1.ModelStateChangedEvent(true));
	                            }
	                            return [2 /*return*/];
	                        }
	                        previousError = this.propertyErrors[compositeRule.virtualPropertyName];
	                        currentError = compositeRule.getMessage(this.modelResolver);
	                        this.propertyErrors[compositeRule.virtualPropertyName] = currentError;
	                        if (currentError != previousError) {
	                            eventArgs = new property_state_changed_event_1.PropertyStateChangedEvent(compositeRule.virtualPropertyName, false, currentError);
	                            this.propertyStateChangedEvent.publish(eventArgs);
	                            if (!hadErrors) {
	                                this.modelStateChangedEvent.publish(new model_state_changed_event_1.ModelStateChangedEvent(false));
	                            }
	                        }
	                        return [2 /*return*/, this.propertyErrors[compositeRule.virtualPropertyName]];
	                }
	            });
	        }); };
	        this.validateCompositeRules = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var propertyName, compositeRule;
	            return tslib_1.__generator(this, function (_a) {
	                for (propertyName in this.ruleset.compositeRules) {
	                    compositeRule = this.ruleset.compositeRules[propertyName];
	                    this.validateCompositeRule(compositeRule);
	                }
	                return [2 /*return*/];
	            });
	        }); };
	        this.startValidateModel = function () {
	            for (var parameterName in _this.ruleset.rules) {
	                _this.startValidateProperty(parameterName);
	            }
	        };
	        this.changeValidationTarget = function (model) {
	            _this.modelResolver = _this.modelResolverFactory.createModelResolver(model);
	        };
	        this.validateProperty = function (propertyRoute) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.startValidateProperty(propertyRoute)];
	                    case 1:
	                        _a.sent();
	                        return [4 /*yield*/, this.promiseCounter.waitForCompletion()];
	                    case 2:
	                        _a.sent();
	                        return [2 /*return*/, !this.propertyErrors[propertyRoute]];
	                }
	            });
	        }); };
	        this.validate = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.startValidateModel()];
	                    case 1:
	                        _a.sent();
	                        return [4 /*yield*/, this.promiseCounter.waitForCompletion()];
	                    case 2:
	                        _a.sent();
	                        return [2 /*return*/, !this.hasErrors()];
	                }
	            });
	        }); };
	        this.getModelErrors = function (revalidate) {
	            if (revalidate === void 0) { revalidate = false; }
	            return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0:
	                            if (!revalidate) return [3 /*break*/, 2];
	                            return [4 /*yield*/, this.startValidateModel()];
	                        case 1:
	                            _a.sent();
	                            _a.label = 2;
	                        case 2: return [4 /*yield*/, this.promiseCounter.waitForCompletion()];
	                        case 3:
	                            _a.sent();
	                            return [2 /*return*/, this.propertyErrors];
	                    }
	                });
	            });
	        };
	        this.getPropertyError = function (propertyRoute, revalidate) {
	            if (revalidate === void 0) { revalidate = false; }
	            return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0:
	                            if (revalidate) {
	                                this.startValidateProperty(propertyRoute);
	                            }
	                            return [4 /*yield*/, this.promiseCounter.waitForCompletion()];
	                        case 1:
	                            _a.sent();
	                            return [2 /*return*/, this.propertyErrors[propertyRoute]];
	                    }
	                });
	            });
	        };
	        this.getPropertyDisplayName = function (propertyRoute) {
	            return _this.ruleset.getPropertyDisplayName(propertyRoute);
	        };
	        this.release = function () { };
	        this.propertyStateChangedEvent = new event_js_1.EventHandler(this);
	        this.modelStateChangedEvent = new event_js_1.EventHandler(this);
	        this.promiseCounter = new promise_counter_1.PromiseCounter();
	        this.modelResolver = this.modelResolverFactory.createModelResolver(model);
	    }
	    ValidationGroup.isRuleset = function (possibleRuleset) {
	        return (typeof (possibleRuleset.addRule) == "function");
	    };
	    ValidationGroup.isForEach = function (possibleForEach) {
	        return possibleForEach.isForEach;
	    };
	    ValidationGroup.prototype.hasErrors = function () {
	        return (Object.keys(this.propertyErrors).length > 0);
	    };
	    return ValidationGroup;
	}());
	exports.ValidationGroup = ValidationGroup;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var PromiseCounter = (function () {
	    function PromiseCounter() {
	        var _this = this;
	        this.promiseCallbacks = [];
	        this.validationCounter = 0;
	        this.waitForCompletion = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var _this = this;
	            var resolver;
	            return tslib_1.__generator(this, function (_a) {
	                if (!this.validationCounter) {
	                    return [2 /*return*/];
	                }
	                resolver = function (resolve) {
	                    _this.promiseCallbacks.push(function () { return resolve(); });
	                };
	                return [2 /*return*/, new Promise(resolver)];
	            });
	        }); };
	        this.countPromise = function (promise) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var result;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!promise) {
	                            return [2 /*return*/];
	                        }
	                        if (!promise.then) {
	                            throw new Error("Non-Promise pass in: " + promise);
	                        }
	                        this.incrementCounter();
	                        return [4 /*yield*/, promise];
	                    case 1:
	                        result = _a.sent();
	                        this.decrementCounter();
	                        return [2 /*return*/, result];
	                }
	            });
	        }); };
	        this.decrementCounter = function () {
	            _this.validationCounter--;
	            if (_this.validationCounter) {
	                return;
	            }
	            while (_this.promiseCallbacks.length) {
	                _this.promiseCallbacks.shift()();
	            }
	        };
	        this.incrementCounter = function () { _this.validationCounter++; };
	    }
	    return PromiseCounter;
	}());
	exports.PromiseCounter = PromiseCounter;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PropertyStateChangedEvent = (function () {
	    function PropertyStateChangedEvent(property, isValid, error) {
	        this.property = property;
	        this.isValid = isValid;
	        this.error = error;
	    }
	    return PropertyStateChangedEvent;
	}());
	exports.PropertyStateChangedEvent = PropertyStateChangedEvent;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ModelStateChangedEvent = (function () {
	    function ModelStateChangedEvent(isValid) {
	        this.isValid = isValid;
	    }
	    return ModelStateChangedEvent;
	}());
	exports.ModelStateChangedEvent = ModelStateChangedEvent;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/* This is an auto-generated file by gulp-es6-exporter */
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var event_listener_1 = __webpack_require__(18);
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


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	var EventListener = (function () {
	    function EventListener(callback, predicate) {
	        this.callback = callback;
	        this.predicate = predicate;
	    }
	    return EventListener;
	})();
	exports.EventListener = EventListener;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var reactive_validation_group_1 = __webpack_require__(20);
	var model_watcher_factory_1 = __webpack_require__(21);
	var model_resolver_factory_1 = __webpack_require__(25);
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


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var rule_resolver_1 = __webpack_require__(7);
	var validation_group_1 = __webpack_require__(11);
	var ReactiveValidationGroup = (function (_super) {
	    tslib_1.__extends(ReactiveValidationGroup, _super);
	    function ReactiveValidationGroup(fieldErrorProcessor, ruleResolver, modelResolverFactory, modelWatcherFactory, model, ruleset, refreshRate) {
	        if (ruleResolver === void 0) { ruleResolver = new rule_resolver_1.RuleResolver(); }
	        if (refreshRate === void 0) { refreshRate = 500; }
	        var _this = _super.call(this, fieldErrorProcessor, ruleResolver, modelResolverFactory, model, ruleset) || this;
	        _this.modelWatcherFactory = modelWatcherFactory;
	        _this.refreshRate = refreshRate;
	        _this.onModelChanged = function (eventArgs) {
	            _this.startValidateProperty(eventArgs.propertyPath);
	        };
	        _this.release = function () {
	            if (_this.modelWatcher)
	                _this.modelWatcher.stopWatching();
	        };
	        _this.modelWatcher = _this.modelWatcherFactory.createModelWatcher();
	        _this.modelWatcher.setupWatcher(model, ruleset, refreshRate);
	        _this.modelWatcher.onPropertyChanged.subscribe(_this.onModelChanged);
	        return _this;
	    }
	    return ReactiveValidationGroup;
	}(validation_group_1.ValidationGroup));
	exports.ReactiveValidationGroup = ReactiveValidationGroup;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var model_watcher_1 = __webpack_require__(22);
	var ModelWatcherFactory = (function () {
	    function ModelWatcherFactory() {
	        this.createModelWatcher = function () {
	            return new model_watcher_1.ModelWatcher();
	        };
	    }
	    return ModelWatcherFactory;
	}());
	exports.ModelWatcherFactory = ModelWatcherFactory;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var property_resolver_1 = __webpack_require__(8);
	var event_js_1 = __webpack_require__(16);
	var type_helper_1 = __webpack_require__(12);
	var property_watcher_1 = __webpack_require__(23);
	var property_changed_event_1 = __webpack_require__(24);
	var ModelWatcher = (function () {
	    function ModelWatcher(propertyResolver) {
	        if (propertyResolver === void 0) { propertyResolver = new property_resolver_1.PropertyResolver(); }
	        var _this = this;
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
	                var previousValue;
	                if (previousKeyCache.indexOf(key) == -1) {
	                    previousValue = _this.watchCache[index].previousValue;
	                    var propertyChangedArgs_1 = new property_changed_event_1.PropertyChangedEvent(key, previousValue, null);
	                    setTimeout(function () { _this.onPropertyChanged.publish(propertyChangedArgs_1); }, 1);
	                }
	                else if (previousWatchCache[index].previousValue && previousWatchCache[index].previousValue.isArray) {
	                    if (previousWatchCache[index].previousValue.length != _this.watchCache[index].previousValue.length) {
	                        var newValue = _this.watchCache[index].previousValue;
	                        previousValue = previousWatchCache[index].previousValue;
	                        var propertyChangedArgs_2 = new property_changed_event_1.PropertyChangedEvent(key, newValue, previousValue);
	                        setTimeout(function () { _this.onPropertyChanged.publish(propertyChangedArgs_2); }, 1);
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
	            var _loop_1 = function (param) {
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
	            };
	            for (var param in ruleset.rules) {
	                _loop_1(param);
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
	                    var propertyChangedArgs_3 = new property_changed_event_1.PropertyChangedEvent(propertyWatcher.propertyPath, currentValue, propertyWatcher.previousValue);
	                    setTimeout(function () { _this.onPropertyChanged.publish(propertyChangedArgs_3); }, 1);
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


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PropertyWatcher = (function () {
	    function PropertyWatcher(propertyPath, previousValue) {
	        this.propertyPath = propertyPath;
	        this.previousValue = previousValue;
	    }
	    return PropertyWatcher;
	}());
	exports.PropertyWatcher = PropertyWatcher;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PropertyChangedEvent = (function () {
	    function PropertyChangedEvent(propertyPath, newValue, oldValue) {
	        this.propertyPath = propertyPath;
	        this.newValue = newValue;
	        this.oldValue = oldValue;
	    }
	    return PropertyChangedEvent;
	}());
	exports.PropertyChangedEvent = PropertyChangedEvent;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var model_resolver_1 = __webpack_require__(26);
	var property_resolver_1 = __webpack_require__(8);
	var ModelResolverFactory = (function () {
	    function ModelResolverFactory(propertyResolver) {
	        if (propertyResolver === void 0) { propertyResolver = new property_resolver_1.PropertyResolver(); }
	        var _this = this;
	        this.propertyResolver = propertyResolver;
	        this.createModelResolver = function (model) {
	            return new model_resolver_1.ModelResolver(_this.propertyResolver, model);
	        };
	    }
	    return ModelResolverFactory;
	}());
	exports.ModelResolverFactory = ModelResolverFactory;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var rule_registry_1 = __webpack_require__(28);
	var date_validation_rule_1 = __webpack_require__(29);
	var decimal_validation_rule_1 = __webpack_require__(30);
	var email_validation_rule_1 = __webpack_require__(31);
	var equal_validation_rule_1 = __webpack_require__(32);
	var iso_date_validation_rule_1 = __webpack_require__(34);
	var max_length_validation_rule_1 = __webpack_require__(35);
	var max_value_validation_rule_1 = __webpack_require__(36);
	var min_length_validation_rule_1 = __webpack_require__(37);
	var min_value_validation_rule_1 = __webpack_require__(38);
	var not_equal_validation_rule_1 = __webpack_require__(39);
	var number_validation_rule_1 = __webpack_require__(40);
	var regex_validation_rule_1 = __webpack_require__(41);
	var required_validation_rule_1 = __webpack_require__(42);
	var step_validation_rule_1 = __webpack_require__(43);
	var matches_validation_rule_1 = __webpack_require__(44);
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


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var DateValidationRule = (function () {
	    function DateValidationRule() {
	        this.ruleName = "date";
	        this.invalidObjectRegex = /Invalid|NaN/;
	    }
	    DateValidationRule.prototype.validate = function (modelResolver, propertyName) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null) {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, !this.invalidObjectRegex.test(new Date(value))];
	            });
	        });
	    };
	    DateValidationRule.prototype.getMessage = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field contains \"" + value + "\" which is not a valid date";
	    };
	    return DateValidationRule;
	}());
	exports.DateValidationRule = DateValidationRule;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var DecimalValidationRule = (function () {
	    function DecimalValidationRule() {
	        this.ruleName = "decimal";
	        this.decimalRegex = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
	    }
	    DecimalValidationRule.prototype.validate = function (modelResolver, propertyName) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null) {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, this.decimalRegex.test(value)];
	            });
	        });
	    };
	    DecimalValidationRule.prototype.getMessage = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field contains " + value + " which is not a decimal value";
	    };
	    return DecimalValidationRule;
	}());
	exports.DecimalValidationRule = DecimalValidationRule;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var EmailValidationRule = (function () {
	    function EmailValidationRule() {
	        this.ruleName = "email";
	        this.emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/;
	    }
	    EmailValidationRule.prototype.validate = function (modelResolver, propertyName) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null || value === "") {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, this.emailRegex.test(value)];
	            });
	        });
	    };
	    EmailValidationRule.prototype.getMessage = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field contains \"" + value + "\" which is not a valid email address";
	    };
	    return EmailValidationRule;
	}());
	exports.EmailValidationRule = EmailValidationRule;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var type_helper_1 = __webpack_require__(12);
	var comparer_helper_1 = __webpack_require__(33);
	var EqualValidationRule = (function () {
	    function EqualValidationRule() {
	        this.ruleName = "equal";
	    }
	    EqualValidationRule.prototype.validate = function (modelResolver, propertyName, optionsOrValue) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value, comparison, weakEquality;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null) {
	                    return [2 /*return*/, true];
	                }
	                comparison = optionsOrValue.value || optionsOrValue;
	                weakEquality = optionsOrValue.weakEquality || false;
	                if (type_helper_1.TypeHelper.isFunctionType(comparison)) {
	                    comparison = comparison();
	                }
	                if (type_helper_1.TypeHelper.isDateType(comparison)) {
	                    return [2 /*return*/, comparer_helper_1.ComparerHelper.dateTimeCompararer(value, comparison)];
	                }
	                else {
	                    return [2 /*return*/, comparer_helper_1.ComparerHelper.simpleTypeComparer(value, comparison, weakEquality)];
	                }
	                return [2 /*return*/];
	            });
	        });
	    };
	    EqualValidationRule.prototype.getMessage = function (modelResolver, propertyName, optionsOrValue) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field is " + value + " but should be equal to " + (optionsOrValue.value || optionsOrValue);
	    };
	    return EqualValidationRule;
	}());
	exports.EqualValidationRule = EqualValidationRule;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var ISODateValidationRule = (function () {
	    function ISODateValidationRule() {
	        this.ruleName = "isoDate";
	        this.isoDateRegex = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
	    }
	    ISODateValidationRule.prototype.validate = function (modelResolver, propertyName) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null) {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, this.isoDateRegex.test(value)];
	            });
	        });
	    };
	    ISODateValidationRule.prototype.getMessage = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field contains \"" + value + "\" which is not a valid ISO date";
	    };
	    return ISODateValidationRule;
	}());
	exports.ISODateValidationRule = ISODateValidationRule;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var MaxLengthValidationRule = (function () {
	    function MaxLengthValidationRule() {
	        this.ruleName = "maxLength";
	    }
	    MaxLengthValidationRule.prototype.validate = function (modelResolver, propertyName, maxLength) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null || value.length == 0) {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, value.length <= maxLength];
	            });
	        });
	    };
	    MaxLengthValidationRule.prototype.getMessage = function (modelResolver, propertyName, maxLength) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field has a length of " + value.length + " but should contain no more than " + maxLength;
	    };
	    return MaxLengthValidationRule;
	}());
	exports.MaxLengthValidationRule = MaxLengthValidationRule;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var MaxValueValidationRule = (function () {
	    function MaxValueValidationRule() {
	        this.ruleName = "maxValue";
	    }
	    MaxValueValidationRule.prototype.validate = function (modelResolver, propertyName, maxValue) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null || value.length == 0) {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, value <= maxValue];
	            });
	        });
	    };
	    MaxValueValidationRule.prototype.getMessage = function (modelResolver, propertyName, maxValue) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field has a value of " + value + " but should be less than or equal to " + maxValue;
	    };
	    return MaxValueValidationRule;
	}());
	exports.MaxValueValidationRule = MaxValueValidationRule;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var MinLengthValidationRule = (function () {
	    function MinLengthValidationRule() {
	        this.ruleName = "minLength";
	    }
	    MinLengthValidationRule.prototype.validate = function (modelResolver, propertyName, minLength) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null || value.length == 0) {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, value.length >= minLength];
	            });
	        });
	    };
	    MinLengthValidationRule.prototype.getMessage = function (modelResolver, propertyName, minLength) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field has a length of " + value.length + " but should more than " + minLength;
	    };
	    return MinLengthValidationRule;
	}());
	exports.MinLengthValidationRule = MinLengthValidationRule;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var MinValueValidationRule = (function () {
	    function MinValueValidationRule() {
	        this.ruleName = "minValue";
	    }
	    MinValueValidationRule.prototype.validate = function (modelResolver, propertyName, minValue) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null || value.length == 0) {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, value >= minValue];
	            });
	        });
	    };
	    MinValueValidationRule.prototype.getMessage = function (modelResolver, propertyName, minValue) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field has a value of " + value + " but should be greater than or equal to " + minValue;
	    };
	    return MinValueValidationRule;
	}());
	exports.MinValueValidationRule = MinValueValidationRule;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var type_helper_1 = __webpack_require__(12);
	var comparer_helper_1 = __webpack_require__(33);
	var NotEqualValidationRule = (function () {
	    function NotEqualValidationRule() {
	        this.ruleName = "notEqual";
	    }
	    NotEqualValidationRule.prototype.validate = function (modelResolver, propertyName, optionsOrValue) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value, comparison, weakEquality;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null) {
	                    return [2 /*return*/, true];
	                }
	                comparison = optionsOrValue.value || optionsOrValue;
	                weakEquality = optionsOrValue.weakEquality || false;
	                if (type_helper_1.TypeHelper.isFunctionType(comparison)) {
	                    comparison = comparison();
	                }
	                if (type_helper_1.TypeHelper.isDateType(comparison)) {
	                    return [2 /*return*/, !comparer_helper_1.ComparerHelper.dateTimeCompararer(value, comparison)];
	                }
	                else {
	                    return [2 /*return*/, !comparer_helper_1.ComparerHelper.simpleTypeComparer(value, comparison, weakEquality)];
	                }
	                return [2 /*return*/];
	            });
	        });
	    };
	    NotEqualValidationRule.prototype.getMessage = function (modelResolver, propertyName, optionsOrValue) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field is " + value + " but should not be equal to " + (optionsOrValue.value || optionsOrValue);
	    };
	    return NotEqualValidationRule;
	}());
	exports.NotEqualValidationRule = NotEqualValidationRule;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var NumberValidationRule = (function () {
	    function NumberValidationRule() {
	        this.ruleName = "number";
	        this.numberRegex = /^\d+$/;
	    }
	    NumberValidationRule.prototype.validate = function (modelResolver, propertyName) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null) {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, this.numberRegex.test(value)];
	            });
	        });
	    };
	    NumberValidationRule.prototype.getMessage = function (modelResolver, propertyName) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field contains " + value + " which is not a numeric value";
	    };
	    return NumberValidationRule;
	}());
	exports.NumberValidationRule = NumberValidationRule;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var RegexValidationRule = (function () {
	    function RegexValidationRule() {
	        this.ruleName = "regex";
	    }
	    RegexValidationRule.prototype.validate = function (modelResolver, propertyName, regexPattern) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null || value.length == 0) {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, value.toString().match(regexPattern) !== null];
	            });
	        });
	    };
	    RegexValidationRule.prototype.getMessage = function (modelResolver, propertyName, regexPattern) {
	        return "This field does not match the expected format";
	    };
	    return RegexValidationRule;
	}());
	exports.RegexValidationRule = RegexValidationRule;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var RequiredValidationRule = (function () {
	    function RequiredValidationRule() {
	        this.ruleName = "required";
	    }
	    RequiredValidationRule.prototype.validate = function (modelResolver, propertyName, isRequired) {
	        if (isRequired === void 0) { isRequired = true; }
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value, testValue;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null) {
	                    return [2 /*return*/, !isRequired];
	                }
	                testValue = value;
	                if (typeof (testValue) === 'string') {
	                    if (String.prototype.trim) {
	                        testValue = value.trim();
	                    }
	                    else {
	                        testValue = value.replace(/^\s+|\s+$/g, '');
	                    }
	                }
	                if (!isRequired) {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, (testValue + '').length > 0];
	            });
	        });
	    };
	    RequiredValidationRule.prototype.getMessage = function (modelResolver, propertyName, isRequired) {
	        return "This field is required";
	    };
	    return RequiredValidationRule;
	}());
	exports.RequiredValidationRule = RequiredValidationRule;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var StepValidationRule = (function () {
	    function StepValidationRule() {
	        this.ruleName = "step";
	    }
	    StepValidationRule.prototype.validate = function (modelResolver, propertyName, step) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value, dif;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null) {
	                    return [2 /*return*/, Promise.resolve(true)];
	                }
	                dif = (value * 100) % (step * 100);
	                return [2 /*return*/, Math.abs(dif) < 0.00001 || Math.abs(1 - dif) < 0.00001];
	            });
	        });
	    };
	    StepValidationRule.prototype.getMessage = function (modelResolver, propertyName, step) {
	        var value = modelResolver.resolve(propertyName);
	        return "This field has a value of " + value + " and should be an increment of " + step;
	    };
	    return StepValidationRule;
	}());
	exports.StepValidationRule = StepValidationRule;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var type_helper_1 = __webpack_require__(12);
	var comparer_helper_1 = __webpack_require__(33);
	var MatchesValidationRule = (function () {
	    function MatchesValidationRule() {
	        this.ruleName = "matches";
	    }
	    MatchesValidationRule.prototype.validate = function (modelResolver, propertyName, optionsOrProperty) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var fieldToMatch, weakEquality, value, matchingFieldValue;
	            return tslib_1.__generator(this, function (_a) {
	                fieldToMatch = optionsOrProperty.property || optionsOrProperty;
	                weakEquality = optionsOrProperty.weakEquality || false;
	                value = modelResolver.resolve(propertyName);
	                matchingFieldValue = modelResolver.resolve(fieldToMatch);
	                if (value === undefined || value === null) {
	                    return [2 /*return*/, (matchingFieldValue === undefined || matchingFieldValue === null)];
	                }
	                else if (type_helper_1.TypeHelper.isDateType(value)) {
	                    return [2 /*return*/, comparer_helper_1.ComparerHelper.dateTimeCompararer(value, matchingFieldValue)];
	                }
	                else {
	                    return [2 /*return*/, comparer_helper_1.ComparerHelper.simpleTypeComparer(value, matchingFieldValue, weakEquality)];
	                }
	                return [2 /*return*/];
	            });
	        });
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


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ruleset_1 = __webpack_require__(46);
	var rule_link_1 = __webpack_require__(47);
	var for_each_rule_1 = __webpack_require__(48);
	var type_helper_1 = __webpack_require__(12);
	var dynamic_composite_validation_rule_1 = __webpack_require__(49);
	var RulesetBuilder = (function () {
	    function RulesetBuilder(ruleRegistry) {
	        var _this = this;
	        this.ruleRegistry = ruleRegistry;
	        this.verifyExistingProperty = function () {
	            if (!_this.currentProperty) {
	                throw new Error("A property must precede any rule calls in the chain");
	            }
	        };
	        this.verifyRuleNameIsValid = function (rule) {
	            if (rule == null || typeof (rule) == "undefined" || rule.length == 0) {
	                throw new Error("A rule name is required");
	            }
	            if (_this.ruleRegistry && !_this.ruleRegistry.hasRuleNamed(rule)) {
	                throw new Error("The rule [" + rule + "] has not been registered");
	            }
	        };
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
	            _this.verifyRuleNameIsValid(rule);
	            _this.verifyExistingProperty();
	            _this.internalRuleset.addRule(_this.currentProperty, _this.currentRule = new rule_link_1.RuleLink(rule, ruleOptions));
	            return _this;
	        };
	        this.addCompositeRule = function (compositeRule) {
	            _this.internalRuleset.compositeRules[compositeRule.virtualPropertyName] = compositeRule;
	            return _this;
	        };
	        this.withDisplayName = function (displayName) {
	            _this.verifyExistingProperty();
	            _this.internalRuleset.propertyDisplayNames[_this.currentProperty] = displayName;
	            return _this;
	        };
	        this.addDynamicRule = function (virtualPropertyName, validate, getMessage) {
	            var compositeRule = new dynamic_composite_validation_rule_1.DynamicCompositeValidationRule(virtualPropertyName, validate, getMessage);
	            _this.internalRuleset.compositeRules[virtualPropertyName] = compositeRule;
	            return _this;
	        };
	        this.withMessage = function (messageOverride) {
	            _this.verifyExistingProperty();
	            _this.currentRule.messageOverride = messageOverride;
	            return _this;
	        };
	        this.appliesIf = function (appliesFunction) {
	            _this.verifyExistingProperty();
	            _this.currentRule.appliesIf = appliesFunction;
	            return _this;
	        };
	        this.addRuleForEach = function (rule, ruleOptions) {
	            _this.verifyRuleNameIsValid(rule);
	            _this.verifyExistingProperty();
	            var ruleLink = new rule_link_1.RuleLink(rule, ruleOptions);
	            _this.currentRule = ruleLink;
	            _this.internalRuleset.addRule(_this.currentProperty, new for_each_rule_1.ForEachRule(ruleLink));
	            return _this;
	        };
	        this.addRuleset = function (ruleset) {
	            _this.verifyExistingProperty();
	            _this.internalRuleset.addRuleset(_this.currentProperty, ruleset);
	            return _this;
	        };
	        this.addRulesetForEach = function (ruleset) {
	            _this.verifyExistingProperty();
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


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Ruleset = (function () {
	    function Ruleset() {
	        var _this = this;
	        this.rules = {};
	        this.compositeRules = {};
	        this.propertyDisplayNames = {};
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
	        this.addCompositeRule = function (compositeRule) { _this.compositeRules[compositeRule.virtualPropertyName] = compositeRule; };
	        this.addPropertyDisplayName = function (propertyName, displayName) { return _this.propertyDisplayNames[propertyName] = displayName; };
	        this.getRulesForProperty = function (property) { return _this.rules[property]; };
	        this.getCompositeRulesRulesForProperty = function (propertyName) { return _this.compositeRules[propertyName]; };
	        this.getPropertyDisplayName = function (propertyName) { return _this.propertyDisplayNames[propertyName] || propertyName; };
	    }
	    return Ruleset;
	}());
	exports.Ruleset = Ruleset;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var RuleLink = (function () {
	    function RuleLink(ruleName, ruleOptions) {
	        this.ruleName = ruleName;
	        this.ruleOptions = ruleOptions;
	        this.appliesIf = true;
	    }
	    return RuleLink;
	}());
	exports.RuleLink = RuleLink;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ForEachRule = (function () {
	    function ForEachRule(internalRule) {
	        this.internalRule = internalRule;
	        this.isForEach = true;
	    }
	    return ForEachRule;
	}());
	exports.ForEachRule = ForEachRule;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var DynamicCompositeValidationRule = (function () {
	    function DynamicCompositeValidationRule(virtualPropertyName, validate, message) {
	        this.virtualPropertyName = virtualPropertyName;
	        this.validate = validate;
	        this.message = message;
	    }
	    DynamicCompositeValidationRule.prototype.getMessage = function (modelResolver) {
	        if (typeof (this.message) === "function") {
	            return this.message(modelResolver);
	        }
	        else {
	            return this.message;
	        }
	    };
	    return DynamicCompositeValidationRule;
	}());
	exports.DynamicCompositeValidationRule = DynamicCompositeValidationRule;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ValidationError = (function () {
	    function ValidationError(propertyName, message) {
	        this.propertyName = propertyName;
	        this.message = message;
	    }
	    return ValidationError;
	}());
	exports.ValidationError = ValidationError;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
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
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var value;
	            return tslib_1.__generator(this, function (_a) {
	                value = modelResolver.resolve(propertyName);
	                if (value === undefined || value === null || value.length == 0) {
	                    return [2 /*return*/, true];
	                }
	                return [2 /*return*/, value.toString().match(this.expression) !== null];
	            });
	        });
	    };
	    AdvancedRegexValidationRule.prototype.getMessage = function (modelResolver, propertyName, regexPattern) {
	        var value = modelResolver.resolve(propertyName);
	        return this.message(value);
	    };
	    return AdvancedRegexValidationRule;
	}());
	exports.AdvancedRegexValidationRule = AdvancedRegexValidationRule;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(53));
	__export(__webpack_require__(56));
	__export(__webpack_require__(58));
	__export(__webpack_require__(59));
	__export(__webpack_require__(54));
	__export(__webpack_require__(57));
	__export(__webpack_require__(55));
	__export(__webpack_require__(60));
	__export(__webpack_require__(61));
	__export(__webpack_require__(62));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var view_strategy_registry_1 = __webpack_require__(54);
	var inline_strategy_1 = __webpack_require__(55);
	exports.viewStrategyRegistry = new view_strategy_registry_1.ViewStrategyRegistry();
	exports.viewStrategyRegistry.registerStrategy(new inline_strategy_1.InlineStrategy());


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var class_helper_1 = __webpack_require__(56);
	var inline_handler_1 = __webpack_require__(57);
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


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ClassHelper = (function () {
	    function ClassHelper() {
	    }
	    return ClassHelper;
	}());
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
	exports.ClassHelper = ClassHelper;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    return InlineHandler;
	}());
	InlineHandler.currentCount = 1;
	exports.InlineHandler = InlineHandler;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var js_literal_helper_1 = __webpack_require__(59);
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


/***/ }),
/* 59 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    return JsLiteralHelper;
	}());
	JsLiteralHelper.jsLiteralRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$\.][A-Za-z0-9_ \-\.$]*)(?:')?(?:\s*):/g;
	exports.JsLiteralHelper = JsLiteralHelper;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ValidationState;
	(function (ValidationState) {
	    ValidationState[ValidationState["unknown"] = 0] = "unknown";
	    ValidationState[ValidationState["valid"] = 1] = "valid";
	    ValidationState[ValidationState["invalid"] = 2] = "invalid";
	})(ValidationState = exports.ValidationState || (exports.ValidationState = {}));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var class_helper_1 = __webpack_require__(56);
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
	    return SummaryHandler;
	}());
	SummaryHandler.elementIdFormat = "summary-error-for-";
	SummaryHandler.errorClassName = "summary-error";
	SummaryHandler.containerClassName = "validation-summary-container";
	exports.SummaryHandler = SummaryHandler;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var summary_handler_1 = __webpack_require__(61);
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


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ko = __webpack_require__(64);
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
	}());
	exports.KnockoutPropertyResolver = KnockoutPropertyResolver;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = ko;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var knockout_model_watcher_1 = __webpack_require__(66);
	var KnockoutModelWatcherFactory = (function () {
	    function KnockoutModelWatcherFactory(propertyResolver) {
	        this.propertyResolver = propertyResolver;
	    }
	    KnockoutModelWatcherFactory.prototype.createModelWatcher = function () {
	        return new knockout_model_watcher_1.KnockoutModelWatcher(this.propertyResolver);
	    };
	    return KnockoutModelWatcherFactory;
	}());
	exports.KnockoutModelWatcherFactory = KnockoutModelWatcherFactory;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var treacherous_1 = __webpack_require__(2);
	var property_resolver_1 = __webpack_require__(8);
	var event_js_1 = __webpack_require__(16);
	var ko = __webpack_require__(64);
	var KnockoutModelWatcher = (function () {
	    function KnockoutModelWatcher(propertyResolver) {
	        if (propertyResolver === void 0) { propertyResolver = new property_resolver_1.PropertyResolver(); }
	        var _this = this;
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
	}());
	exports.KnockoutModelWatcher = KnockoutModelWatcher;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ko = __webpack_require__(64);
	ko.bindingHandlers["enabled-with"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var validationGroupOrGroups = valueAccessor();
	        var isArray = Array.isArray(validationGroupOrGroups);
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


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ko = __webpack_require__(64);
	var validation_handler_1 = __webpack_require__(69);
	var treacherous_view_1 = __webpack_require__(52);
	ko.bindingHandlers["show-error"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var propertyPath = valueAccessor();
	        if (!propertyPath) {
	            propertyPath = treacherous_view_1.ElementHelper.getPropertyRouteFrom(element);
	        }
	        if (!propertyPath) {
	            console.log("no valid property path in scope on element", element);
	            return;
	        }
	        validation_handler_1.ValidationHandler.handleValidation(element, propertyPath, valueAccessor(), bindingContext);
	    }
	};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var binding_helper_1 = __webpack_require__(70);
	var treacherous_view_1 = __webpack_require__(52);
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
	        var handlePossibleError = function (error) {
	            if (!error) {
	                viewStrategy.propertyBecomeValid(element, propertyPath, validationState, viewOptions);
	                validationState = treacherous_view_1.ValidationState.valid;
	            }
	            else {
	                viewStrategy.propertyBecomeInvalid(element, error, propertyPath, validationState, viewOptions);
	                validationState = treacherous_view_1.ValidationState.invalid;
	            }
	        };
	        var getPropertyError = function () {
	            validationGroup.getPropertyError(propertyPath, true);
	        };
	        var handlePropertyStateChange = function (args) {
	            handlePossibleError(args.error);
	        };
	        var propertyStateChangePredicate = function (args) {
	            return args.property == propertyPath;
	        };
	        validationGroup.propertyStateChangedEvent.subscribe(handlePropertyStateChange, propertyStateChangePredicate);
	        // TODO: need to clean up afterwards on subs
	        if (propertyObservable) {
	            propertyObservable.subscribe(getPropertyError);
	        }
	        if (viewOptions.immediateErrors) {
	            getPropertyError();
	        }
	    };
	    ;
	    return ValidationHandler;
	}());
	exports.ValidationHandler = ValidationHandler;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	}());
	exports.BindingHelper = BindingHelper;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ko = __webpack_require__(64);
	var binding_helper_1 = __webpack_require__(70);
	var treacherous_view_1 = __webpack_require__(52);
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


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ko = __webpack_require__(64);
	var treacherous_1 = __webpack_require__(2);
	var treacherous_view_1 = __webpack_require__(52);
	var binding_helper_1 = __webpack_require__(70);
	var viewSummary = new treacherous_view_1.ViewSummary();
	ko.bindingHandlers["validation-summary"] = {
	    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
	        var validationGroupOrGroups = valueAccessor();
	        if (!validationGroupOrGroups) {
	            validationGroupOrGroups = binding_helper_1.BindingHelper.getValidationGroup(bindingContext);
	        }
	        var validationOptions = binding_helper_1.BindingHelper.getViewOptions(bindingContext);
	        var isArray = Array.isArray(validationGroupOrGroups);
	        var isReactive = !!validationGroupOrGroups.propertyStateChangedEvent;
	        var getDisplayName = function (propertyRoute) {
	            if (!isArray) {
	                return validationGroupOrGroups.getPropertyDisplayName(propertyRoute);
	            }
	            var finalName = propertyRoute;
	            validationGroupOrGroups.forEach(function (validationGroup) {
	                var returnedName = validationGroup.getPropertyDisplayName(propertyRoute);
	                if (returnedName != propertyRoute) {
	                    finalName = returnedName;
	                }
	            });
	            return finalName;
	        };
	        if (!isReactive) {
	            console.log("summary-for binding requires a reactive validation group", element);
	            return;
	        }
	        viewSummary.setupContainer(element);
	        var handleStateChange = function (eventArgs) {
	            var displayName = getDisplayName(eventArgs.property);
	            if (eventArgs.isValid) {
	                viewSummary.propertyBecomeValid(element, displayName);
	            }
	            else {
	                viewSummary.propertyBecomeInvalid(element, eventArgs.error, displayName);
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


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ko = __webpack_require__(64);
	var binding_helper_1 = __webpack_require__(70);
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


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ko = __webpack_require__(64);
	var binding_helper_1 = __webpack_require__(70);
	var validation_handler_1 = __webpack_require__(69);
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


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ko = __webpack_require__(64);
	var binding_helper_1 = __webpack_require__(70);
	var validation_handler_1 = __webpack_require__(69);
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


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ko = __webpack_require__(64);
	var binding_helper_1 = __webpack_require__(70);
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


/***/ })
/******/ ])
});
;