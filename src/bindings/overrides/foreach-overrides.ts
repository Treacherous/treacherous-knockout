import * as ko from "knockout";
import {BindingHelper} from "../../helpers/binding-helper";

ko.bindingHandlers.foreach.preprocess = function(value, name, addBinding) {
    addBinding(BindingHelper.validationPropertyBindingName, "'" + value + "'");
    return value;
}

var originalForEachBindingInit = ko.bindingHandlers.foreach.init;
ko.bindingHandlers.foreach.init = function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var propertyName = allBindings.get(BindingHelper.validationPropertyBindingName);
    var propertyPath = BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
    bindingContext[BindingHelper.validationPropertyPathBindingName] = propertyPath;

    return originalForEachBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
};

export var foreachBinding: void;