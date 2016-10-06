import * as ko from "knockout";
import {IValidationGroup, IReactiveValidationGroup} from "treacherous";

var pollModelErrors = (validationGroup: IValidationGroup, callback) => {
    return setTimeout(() => {
        validationGroup.getModelErrors()
            .then((errors) => {
                var hasErrors = (Object.keys(errors).length > 0);
                if(hasErrors){ callback(hasErrors); }
            });
    }, 500)
};

ko.bindingHandlers["enabled-with"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var validationGroupOrGroups = valueAccessor();
        var isArray = typeof(validationGroupOrGroups) == "array";
        var isReactive = !!validationGroupOrGroups.modelStateChangedEvent;

        if(!isReactive) {
            console.warn("enabled-with binding requires a reactive validation group");
            return;
        }

        element.disabled = true;

        var handleStateChange = (eventArgs) => { element.disabled = !eventArgs.isValid; };

        if(isArray)
        {
            validationGroupOrGroups.forEach((validationGroup: IReactiveValidationGroup) => {
                validationGroup.modelStateChangedEvent.subscribe(handleStateChange);
            });
        }
        else
        { validationGroupOrGroups.modelStateChangedEvent.subscribe(handleStateChange); }

        ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
            if(isArray)
            {
                validationGroupOrGroups.forEach((validationGroup: IReactiveValidationGroup) => {
                    validationGroup.modelStateChangedEvent.unsubscribe(handleStateChange);
                });
            }
            else
            { validationGroupOrGroups.modelStateChangedEvent.unsubscribe(handleStateChange); }
        });
    }
};

export var enabledWithBinding: void;