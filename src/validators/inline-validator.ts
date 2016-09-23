import {ClassHelper} from "../helpers/class-helper";
import {IValidator} from "./ivalidator";

export class InlineValidator implements IValidator
{
    private currentCount = 1;

    private getElementValidatorId = (element: HTMLElement) =>
    {
        if(!element.getAttribute("id"))
        { element.setAttribute("id", "unique-" + this.currentCount++); }

        return element.getAttribute('id') + "-error-container";
    };

    private createErrorElement = (message: string, element: HTMLElement) =>
    {
        var errorContainerName = this.getElementValidatorId(element);
        var errorContainer = document.createElement("div");
        errorContainer.id = errorContainerName;
        errorContainer.className = "validation-error-container";
        errorContainer.textContent = message;
        element.parentElement.appendChild(errorContainer);
    };

    private removeErrorElement = function(element)
    {
        var errorContainerName = this.getElementValidatorId(element);
        var errorElement = document.getElementById(errorContainerName);

        if(errorElement) { errorElement.remove(); }
    };

    private addElementError = function(message, element)
    {
        var errorContainerName = this.getElementValidatorId(element);
        var errorContainer = document.getElementById(errorContainerName);
        if(!errorContainer)
        { this.createErrorElement(message, element); }
        else
        {
            this.removeErrorElement(element);
            this.createErrorElement(message, element);
        }
    };

    public handleValidElement = (element: HTMLElement) => {
        ClassHelper.removeClass(element, "invalid");
        ClassHelper.addClass(element, "valid");
        this.removeErrorElement(element);
    };

    public handleErrorElement = (element: HTMLElement, error: string) => {
        ClassHelper.removeClass(element, "valid");
        ClassHelper.addClass(element, "invalid");
        this.addElementError(error, element);
    };
}