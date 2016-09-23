import * as ko from "knockout";
import {BindingHelper} from "../helpers/binding-helper";

ko.bindingHandlers.with.preprocess = function(value, name, addBinding) {
    addBinding(BindingHelper.validationPropertyBindingName, "'" + value + "'");
    return value;
}

var originalWithBindingInit = ko.bindingHandlers.with.init;
ko.bindingHandlers.with.init = function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var propertyName = allBindings.get(BindingHelper.validationPropertyBindingName);
    var propertyPath = BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
    bindingContext[BindingHelper.validationPropertyPathBindingName] = propertyPath;

    return originalWithBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
};

export var withBinding: void;