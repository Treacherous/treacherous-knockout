import * as ko from "knockout";
import {ReactiveValidationGroup} from "treacherous";

ko.bindingHandlers["enabled-with"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var validationGroup = <ReactiveValidationGroup>valueAccessor();

        validationGroup.modelStateChangedEvent.subscribe(eventArgs => {
            element.disabled = !eventArgs.isValid;
        });
    }
};

export var enabledWithBinding: void;