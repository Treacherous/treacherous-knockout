import * as ko from "knockout";
import {IReactiveValidationGroup, PropertyStateChangedEvent} from "treacherous";
import {ViewSummary, IViewOptions} from "treacherous-view";
import {BindingHelper} from "../helpers/binding-helper";

var viewSummary = new ViewSummary();
ko.bindingHandlers["validation-summary"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var validationGroupOrGroups = valueAccessor();
        if(!validationGroupOrGroups)
        { validationGroupOrGroups = BindingHelper.getValidationGroup(bindingContext);}

        var validationOptions = <IViewOptions>BindingHelper.getViewOptions(bindingContext);

        var isArray = typeof(validationGroupOrGroups) == "array";
        var isReactive = !!validationGroupOrGroups.propertyStateChangedEvent;

        if(!isReactive) {
            console.warn("summary-for binding requires a reactive validation group");
            return;
        }

        viewSummary.setupContainer(element);

        var handleStateChange = (eventArgs: PropertyStateChangedEvent) => {
            if(eventArgs.isValid)
            { viewSummary.propertyBecomeValid(element, eventArgs.property); }
            else
            { viewSummary.propertyBecomeInvalid(element, eventArgs.error, eventArgs.property); }
        };

        var runImmediateValidation = (validationGroup) => {
            validationGroup.getModelErrors()
                .then((errors) => {
                    Object.keys(errors).forEach((key) => {
                        var eventArgs = new PropertyStateChangedEvent(key, false, errors[key]);
                        handleStateChange(eventArgs);
                    })
                });
        }

        if(isArray)
        {
            validationGroupOrGroups.forEach((validationGroup: IReactiveValidationGroup) => {
                validationGroup.propertyStateChangedEvent.subscribe(handleStateChange);

                if(validationOptions.immediateErrors) {
                    runImmediateValidation(validationGroup);
                }
            });
        }
        else
        {
            validationGroupOrGroups.propertyStateChangedEvent.subscribe(handleStateChange);
            if(validationOptions.immediateErrors) {
                runImmediateValidation(validationGroupOrGroups);
            }
        }

        ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
            if(isArray)
            {
                validationGroupOrGroups.forEach((validationGroup: IReactiveValidationGroup) => {
                    validationGroup.propertyStateChangedEvent.unsubscribe(handleStateChange);
                });
            }
            else
            { validationGroupOrGroups.propertyStateChangedEvent.unsubscribe(handleStateChange); }
        });
    }
}

export var validationSummaryBinding: void;