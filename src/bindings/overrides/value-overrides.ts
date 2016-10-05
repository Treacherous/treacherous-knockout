import * as ko from "knockout";
import {BindingHelper} from "../../helpers/binding-helper";
import {ValidationHandler} from "../validation-handler";

ko.bindingHandlers.value.preprocess = function(value, name, addBinding) {
    addBinding(BindingHelper.validationPropertyBindingName, "'" + value + "'");
    return value;
}

var originalValueBindingInit = ko.bindingHandlers.value.init;
ko.bindingHandlers.value.init = function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var propertyName = allBindings.get(BindingHelper.validationPropertyBindingName);
    var propertyPath = BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
    ValidationHandler.handleValidation(element, propertyPath, valueAccessor(), bindingContext);
    return originalValueBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
};

export var valueBinding: void;