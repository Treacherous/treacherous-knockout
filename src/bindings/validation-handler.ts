import {BindingHelper} from "../helpers/binding-helper";
import {viewStrategyRegistry, ElementHelper, ValidationState} from "treacherous-view";
import {PropertyStateChangedEvent} from "treacherous";

export class ValidationHandler
{
    public static handleValidation(element, propertyPath, propertyObservable, bindingContext) {
        var validationGroup = BindingHelper.getValidationGroup(bindingContext);
        var viewOptions = BindingHelper.getViewOptions(bindingContext);
        var validationState = ValidationState.unknown;
        bindingContext[BindingHelper.validationPropertyPathBindingName] = propertyPath;

        var strategy = ElementHelper.getStrategyFrom(element) || BindingHelper.getViewStrategy(bindingContext);
        var propertyPathOverride = ElementHelper.getPropertyRouteFrom(element);

        if(!validationGroup || strategy == "none")
        { return; }

        if(propertyPathOverride)
        { propertyPath = propertyPathOverride; }

        var viewStrategy = viewStrategyRegistry.getStrategyNamed(strategy);


        var handlePossibleError = (error) => {
            if(!error)
            {
                viewStrategy.propertyBecomeValid(element, propertyPath, validationState, viewOptions);
                validationState = ValidationState.valid;
            }
            else
            {
                viewStrategy.propertyBecomeInvalid(element, error, propertyPath, validationState, viewOptions);
                validationState = ValidationState.invalid;
            }
        };

        var getPropertyError = () => {
            validationGroup.getPropertyError(propertyPath, true)
                .then(handlePossibleError);
        };

        // TODO: need to clean up afterwards on subs
        if(propertyObservable) {
            propertyObservable.subscribe(getPropertyError);
        }
        else if(validationGroup.propertyStateChangedEvent){
            validationGroup.propertyStateChangedEvent.subscribe((args: PropertyStateChangedEvent) => {
                handlePossibleError(args.error);
            });
        }
        else
        { console.log("unable to subscribe to changes, no valid observable or reactive validation group", element); }

        if(viewOptions.immediateErrors)
        { getPropertyError(); }
    };
}