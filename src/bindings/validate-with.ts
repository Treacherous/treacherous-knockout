import * as ko from "knockout";
import {BindingHelper} from "../helpers/binding-helper";
import {ElementHelper} from "treacherous-view";


ko.bindingHandlers["validate-with"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var bindingOptions = valueAccessor();
        var strategy = ElementHelper.getStrategyFrom(element) || "inline";
        var options = ElementHelper.getOptionsFrom(element) || {};
        bindingContext[BindingHelper.validationGroup] = bindingOptions;
        bindingContext[BindingHelper.validationOptions] = options;
        bindingContext[BindingHelper.viewStrategy] = strategy;
    }
}

export var validateWithBinding: void;