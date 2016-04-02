(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
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