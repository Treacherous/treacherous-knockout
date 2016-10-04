import * as ko from "knockout";
import {BindingHelper} from "../helpers/binding-helper";

ko.bindingHandlers["validateProperty"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var validationGroup = BindingHelper.getValidationGroup(bindingContext);
        var propertyPath = valueAccessor();

        var currentError;
        var hasInputStarted = false;
        var onElementChanged = () => {
            hasInputStarted = true;
            element.removeEventListener("focus", onElementChanged);
            console.log("NOW RESPONDING");
            BindingHelper.handleElementError(element, !currentError, currentError);
        };

        element.addEventListener('focus', onElementChanged);

        if(validationGroup)
        {
            BindingHelper.setupValidationListener(validationGroup, propertyPath, element);
            validationGroup.getPropertyError(propertyPath)
                .then(function(error){
                    currentError = error;
                    if(hasInputStarted){
                        console.log("HANDLING");
                        BindingHelper.handleElementError(element, !currentError, currentError);
                    }
                });
        }
    }
};

export var validatePropertyBinding: void;