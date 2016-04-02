import {PropertyValidationChangedEvent, IValidationGroup} from "treacherous";

export class BindingHelper
{
    public static validationPropertyBindingName = "validationProperty";
    public static validationPropertyPathBindingName = "validationPropertyPath";
    public static validationGroup = "validationGroup";
    public static validationOptions = "validationOptions";

    public static getValidationGroup(bindingContext): IValidationGroup {
        return bindingContext[BindingHelper.validationGroup];
    }

    public static getValidationOptions(bindingContext): any {
        return bindingContext[BindingHelper.validationOptions];
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

    public static handleElementError(element: HTMLElement, isValid: boolean, error: string) {
        if(isValid)
        { ko["validation"]["validator"].handleValidElement(element); }
        else
        { ko["validation"]["validator"].handleErrorElement(element, error); }
    }

    public static setupValidationListener(validationGroup: IValidationGroup, propertyPath: string, element: HTMLElement, customHandler = null) {
        var predicate = (x: PropertyValidationChangedEvent) => { return x.property == propertyPath; };
        var handler;

        if(!customHandler) {
            handler = (args: PropertyValidationChangedEvent) => {
                this.handleElementError(element, args.isValid, args.error);
            };
        }
        else
        { handler = customHandler; }

        var subscription = validationGroup.propertyStateChangedEvent.subscribe(handler, predicate);
        ko.utils.domNodeDisposal.addDisposeCallback(element, subscription);
    }
}