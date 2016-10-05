import * as ko from "knockout";
import {BindingHelper} from "../../helpers/binding-helper";
import {ValidationHandler} from "../validation-handler";

ko.bindingHandlers.textInput.preprocess = function(value, name, addBinding) {
    addBinding(BindingHelper.validationPropertyBindingName, "'" + value + "'");
    return value;
}

var originalTextInputBindingInit = ko.bindingHandlers.textInput.init;
ko.bindingHandlers.textInput.init = function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var propertyName = allBindings.get(BindingHelper.validationPropertyBindingName);
    var propertyPath = BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
    ValidationHandler.handleValidation(element, propertyPath, valueAccessor(), bindingContext);
    return originalTextInputBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
};

export var textBinding: void;