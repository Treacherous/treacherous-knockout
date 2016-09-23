import { IReactiveValidationGroup } from "treacherous";
export declare class BindingHelper {
    static validationPropertyBindingName: string;
    static validationPropertyPathBindingName: string;
    static validationGroup: string;
    static validationOptions: string;
    static getValidationGroup(bindingContext: any): IReactiveValidationGroup;
    static getValidationOptions(bindingContext: any): any;
    static getCurrentPropertyPath(propertyName: string, bindingContext: any): string;
    static handleElementError(element: HTMLElement, isValid: boolean, error: string): void;
    static setupValidationListener(validationGroup: IReactiveValidationGroup, propertyPath: string, element: HTMLElement, customHandler?: any): void;
}
