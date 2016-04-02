export interface IValidator
{
    handleValidElement: (element: HTMLElement) => void;
    handleErrorElement: (element: HTMLElement, error: string) => void;
}