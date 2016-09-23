import * as ko from "knockout";
import {ClassHelper} from "../helpers/class-helper";
import {IReactiveValidationGroup} from "treacherous/index";

ko.bindingHandlers["validationSummary"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var validationGroup: IReactiveValidationGroup = valueAccessor();

        var refreshErrorSummary = function() {
            validationGroup.getModelErrors()
                .then(ko["validation"]["validationSummary"].buildSummary)
                .then(function(errorSummary){
                    element.innerHTML = errorSummary;
                });
        };
        
        ClassHelper.addClass(element, "validation-summary-container");

        var unsubscriber = validationGroup.propertyStateChangedEvent.subscribe(refreshErrorSummary);
        ko.utils.domNodeDisposal.addDisposeCallback(element, unsubscriber);
        refreshErrorSummary();
    }
}

export var validationSummaryBinding: void;