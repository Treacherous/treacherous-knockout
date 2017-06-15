import * as ko from "knockout";
import {IReactiveValidationGroup, IValidationGroup, PropertyStateChangedEvent} from "treacherous";
import {ViewSummary, IViewOptions} from "treacherous-view";
import {BindingHelper} from "../helpers/binding-helper";

var viewSummary = new ViewSummary();
ko.bindingHandlers["validation-summary"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var validationGroupOrGroups = valueAccessor();
        if(!validationGroupOrGroups)
        { validationGroupOrGroups = BindingHelper.getValidationGroup(bindingContext);}

        var validationOptions = <IViewOptions>BindingHelper.getViewOptions(bindingContext);

        var isArray = Array.isArray(validationGroupOrGroups);
        var isReactive = !!validationGroupOrGroups.propertyStateChangedEvent;

        var getDisplayName = (propertyRoute) => {
            if(!isArray)
            { return (<IValidationGroup>validationGroupOrGroups).getPropertyDisplayName(propertyRoute); }

            let finalName = propertyRoute;
            validationGroupOrGroups.forEach((validationGroup) => {
               let returnedName = validationGroup.getPropertyDisplayName(propertyRoute);
               if(returnedName != propertyRoute)
               { finalName = returnedName; }
            });

            return finalName;
        };

        if(!isReactive) {
            console.log("summary-for binding requires a reactive validation group", element);
            return;
        }

        viewSummary.setupContainer(element);

        var handleStateChange = (eventArgs: PropertyStateChangedEvent) => {
            var displayName = getDisplayName(eventArgs.property);
            if(eventArgs.isValid)
            { viewSummary.propertyBecomeValid(element, displayName); }
            else
            { viewSummary.propertyBecomeInvalid(element, eventArgs.error, displayName); }
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