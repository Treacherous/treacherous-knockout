import * as ko from "knockout";
import {ReactiveValidationGroup} from "treacherous";

ko.bindingHandlers["enabled-with"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var validationGroupOrGroups = valueAccessor();
        element.disabled = true;

        var handleStateChange = (eventArgs) => {
            element.disabled = !eventArgs.isValid;
        };

        if(typeof(validationGroupOrGroups) == "array")
        {
            validationGroupOrGroups.forEach((validationGroup: ReactiveValidationGroup) => {
                validationGroup.modelStateChangedEvent.subscribe(handleStateChange);
            });
        }
        else
        { validationGroupOrGroups.modelStateChangedEvent.subscribe(handleStateChange); }
    }
};

export var enabledWithBinding: void;