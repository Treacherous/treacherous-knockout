import * as ko from "knockout";
import {ValidationHandler} from "./validation-handler";

ko.bindingHandlers["show-error"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var propertyPath = valueAccessor();
        ValidationHandler.handleValidation(element, propertyPath, valueAccessor(), bindingContext);
    }
};

export var validatePropertyBinding: void;