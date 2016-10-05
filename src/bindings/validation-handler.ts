import {BindingHelper} from "../helpers/binding-helper";
import {viewStrategyRegistry, ElementHelper} from "treacherous-view";

export class ValidationHandler
{
    public static handleValidation(element, propertyPath, propertyObservable, bindingContext) {
        var validationGroup = BindingHelper.getValidationGroup(bindingContext);
        var validationOptions = BindingHelper.getValidationOptions(bindingContext);
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
                    if(!error){ viewStrategy.propertyBecomeValid(element, propertyPath, null); }
                    else { viewStrategy.propertyBecomeInvalid(element, error, propertyPath, null); }
                });
        }

        propertyObservable.subscribe(getPropertyError);

        if(validationOptions.immediateErrors)
        { getPropertyError(); }
    };
}