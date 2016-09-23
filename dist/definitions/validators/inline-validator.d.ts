import { IValidator } from "./ivalidator";
export declare class InlineValidator implements IValidator {
    private currentCount;
    private getElementValidatorId;
    private createErrorElement;
    private removeErrorElement;
    private addElementError;
    handleValidElement: (element: HTMLElement) => void;
    handleErrorElement: (element: HTMLElement, error: string) => void;
}
