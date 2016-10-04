import * as ko from "knockout";
import {BindingHelper} from "../helpers/binding-helper";

ko.bindingHandlers.textInput.preprocess = function(value, name, addBinding) {
    addBinding(BindingHelper.validationPropertyBindingName, "'" + value + "'");
    return value;
}

var originalTextInputBindingInit = ko.bindingHandlers.textInput.init;
ko.bindingHandlers.textInput.init = function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var propertyName = allBindings.get(BindingHelper.validationPropertyBindingName);
    var propertyPath = BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
    var validationGroup = BindingHelper.getValidationGroup(bindingContext);
    var validationOptions = BindingHelper.getValidationOptions(bindingContext);
    bindingContext[BindingHelper.validationPropertyPathBindingName] = propertyPath;

    var hasManualPropertyValidation = allBindings.get("validate-property");

    if(validationGroup && !hasManualPropertyValidation) {
        valueAccessor().subscribe(() => {
            validationGroup.getPropertyError(propertyPath, true)
                .then(function(error){
                    BindingHelper.handleElementError(element, !error, error);
                });
        });
    }

    return originalTextInputBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
};

export var textBinding: void;