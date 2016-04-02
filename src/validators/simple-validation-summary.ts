import {IValidationSummary} from "./ivalidation-summary";

export class SimpleValidationSummary implements IValidationSummary {

    public buildSummary(errors: any) {
        var newContent = "";
        for(var errorParam in errors)
        { newContent += `<p class="validation-summary-entry">${errorParam} - ${errors[errorParam]}</p>`; }
        return newContent;
    }
}