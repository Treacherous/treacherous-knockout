import * as ko from "knockout";
import {BindingHelper} from "../helpers/binding-helper";
import {ElementHelper} from "@treacherous/view";


ko.bindingHandlers["validate-with"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var bindingOptions = valueAccessor();
        var strategy = ElementHelper.getViewStrategyFrom(element) || "inline";
        var options = ElementHelper.getViewOptionsFrom(element) || {};
        bindingContext[BindingHelper.validationGroup] = bindingOptions;
        bindingContext[BindingHelper.viewOptions] = options;
        bindingContext[BindingHelper.viewStrategy] = strategy;
    }
}

export var validateWithBinding: void;