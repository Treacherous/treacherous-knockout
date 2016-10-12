import * as ko from "knockout";
import {ValidationHandler} from "./validation-handler";
import {ElementHelper} from "treacherous-view";

ko.bindingHandlers["show-error"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var propertyPath = valueAccessor();
        if(!propertyPath) { propertyPath = ElementHelper.getPropertyRouteFrom(element); }

        if(!propertyPath) {
            console.log("no valid property path in scope on element", element);
            return;
        }

        ValidationHandler.handleValidation(element, propertyPath, valueAccessor(), bindingContext);
    }
};

export var showErrorBinding: void;