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

    public static handleElementError(element: HTMLElement, isValid: boolean, error: string) {
        if(isValid)
        { ko["validation"]["validator"].handleValidElement(element); }
        else
        { ko["validation"]["validator"].handleErrorElement(element, error); }
    }

    public static setupValidationListener(validationGroup: IReactiveValidationGroup, propertyPath: string, element: HTMLElement, customHandler = null) {
        var predicate = (x: PropertyStateChangedEvent) => { return x.property == propertyPath; };
        var handler;

        if(!customHandler) {
            handler = (args: PropertyStateChangedEvent) => {
                this.handleElementError(element, args.isValid, args.error);
            };
        }
        else
        { handler = customHandler; }

        var subscription = validationGroup.propertyStateChangedEvent.subscribe(handler, predicate);
        ko.utils.domNodeDisposal.addDisposeCallback(element, subscription);
    }
}