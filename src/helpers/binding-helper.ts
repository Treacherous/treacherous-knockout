import {PropertyStateChangedEvent, IReactiveValidationGroup} from "treacherous";

export class BindingHelper
{
    public static validationPropertyBindingName = "validationProperty";
    public static validationPropertyPathBindingName = "validationPropertyPath";
    public static validationGroup = "validationGroup";
    public static viewOptions = "viewOptions";
    public static viewStrategy = "viewStrategy";

    public static getValidationGroup(bindingContext): IReactiveValidationGroup {
        return bindingContext[BindingHelper.validationGroup];
    }

    public static getViewOptions(bindingContext): any {
        return bindingContext[BindingHelper.viewOptions];
    }

    public static getViewStrategy(bindingContext): any {
        return bindingContext[BindingHelper.viewStrategy] || "inline";
    }

    public static getCurrentPropertyPath(propertyName: string, bindingContext): string {
        var propertyPath = "";

        if(bindingContext.$index)
        {
            var suffixPropertyName = ((propertyName == "$data" || propertyName == "$rawData") ? "" : propertyName);
            if(bindingContext.$parentContext && bindingContext.$parentContext[BindingHelper.validationPropertyPathBindingName]) {
                propertyPath = bindingContext.$parentContext[BindingHelper.validationPropertyPathBindingName] + "[" + bindingContext.$index() + "]" + suffixPropertyName;
            }
            else {
                propertyPath = "[" + bindingContext.$index() + "]" + suffixPropertyName;
            }
        }
        else {
            propertyPath = propertyName;
        }

        return propertyPath;
    }
}