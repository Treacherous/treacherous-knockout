import * as ko from "knockout";
import {BindingHelper} from "../helpers/binding-helper";

ko.bindingHandlers.value.preprocess = function(value, name, addBinding) {
    addBinding(BindingHelper.validationPropertyBindingName, "'" + value + "'");
    return value;
}

var originalValueBindingInit = ko.bindingHandlers.value.init;
ko.bindingHandlers.value.init = function(element, valueAccessor, allBindings, viewModel, bindingContext) {

    var validationGroup = BindingHelper.getValidationGroup(bindingContext);
    var propertyName = allBindings.get(BindingHelper.validationPropertyBindingName);
    var propertyPath = BindingHelper.getCurrentPropertyPath(propertyName, bindingContext);
    bindingContext[BindingHelper.validationPropertyPathBindingName] = propertyPath;

    var validationOptions = BindingHelper.getValidationOptions(bindingContext);
    var hasManualPropertyValidation = allBindings.get("validate-property");

    if(validationGroup && !hasManualPropertyValidation) {
        valueAccessor().subscribe(() => {
            validationGroup.getPropertyError(propertyPath, true)
                .then(function(error){
                    BindingHelper.handleElementError(element, !error, error);
                });
        });
    }

    return originalValueBindingInit(element, valueAccessor, allBindings, viewModel, bindingContext);
};

export var valueBinding: void;