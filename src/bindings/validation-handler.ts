import {BindingHelper} from "../helpers/binding-helper";
import {viewStrategyRegistry, ElementHelper, ValidationState} from "treacherous-view";

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
        var getPropertyError = () => {
            validationGroup.getPropertyError(propertyPath, true)
                .then(function(error){
                    if(!error)
                    {
                        viewStrategy.propertyBecomeValid(element, propertyPath, validationState);
                        validationState = ValidationState.valid;
                    }
                    else
                    {
                        viewStrategy.propertyBecomeInvalid(element, error, propertyPath, validationState);
                        validationState = ValidationState.invalid;
                    }
                });
        }

        propertyObservable.subscribe(getPropertyError);

        if(viewOptions.immediateErrors)
        { getPropertyError(); }
    };
}