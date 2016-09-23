import * as ko from "knockout";
import {BindingHelper} from "../helpers/binding-helper";

var defaultOptions = {
    inlineValidation: true
}

ko.bindingHandlers["validateWith"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var bindingOptions = valueAccessor();
        
        if(bindingOptions.getModelErrors)
        {
            bindingContext[BindingHelper.validationGroup] = bindingOptions;
            bindingContext[BindingHelper.validationOptions] = defaultOptions;
        }
        else
        {
            if(bindingOptions.group)
            { bindingContext[BindingHelper.validationGroup] = bindingOptions.group; }

            if(bindingOptions.options)
            { bindingContext[BindingHelper.validationOptions] = bindingOptions.options; }
            else
            { bindingContext[BindingHelper.validationOptions] = defaultOptions; }
        }
    }
}

export var validateWithBinding: void;