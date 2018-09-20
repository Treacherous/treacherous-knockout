import * as ko from "knockout";
import {IValidationGroup} from "@treacherous/core";

ko.bindingHandlers["enabled-with"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var validationGroupOrGroups = valueAccessor();
        var isArray = Array.isArray(validationGroupOrGroups);

        element.disabled = true;

        var handleStateChange = (eventArgs) => { element.disabled = !eventArgs.isValid; };

        if(isArray)
        {
            validationGroupOrGroups.forEach((validationGroup: IValidationGroup) => {
                validationGroup.modelStateChangedEvent.subscribe(handleStateChange);
            });
        }
        else
        { validationGroupOrGroups.modelStateChangedEvent.subscribe(handleStateChange); }

        ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
            if(isArray)
            {
                validationGroupOrGroups.forEach((validationGroup: IValidationGroup) => {
                    validationGroup.modelStateChangedEvent.unsubscribe(handleStateChange);
                });
            }
            else
            { validationGroupOrGroups.modelStateChangedEvent.unsubscribe(handleStateChange); }
        });
    }
};

export var enabledWithBinding: void;