export class ClassHelper
{
    public static hasClass = (element: HTMLElement, className: string) => {
        if (element.classList)
        { return element.classList.contains(className); }

        return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }

    public static addClass = (element: HTMLElement, className: string) => {
        if (element.classList)
        { element.classList.add(className); }
        else if (!ClassHelper.hasClass(element, className))
        { element.className += " " + className; }
    };

    public static removeClass = (element: HTMLElement, className: string) => {
        if (element.classList)
        { element.classList.remove(className); }
        else if (ClassHelper.hasClass(element, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
            element.className=element.className.replace(reg, ' ')
        }
    };
}