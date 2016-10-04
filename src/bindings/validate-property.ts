import * as ko from "knockout";
import {BindingHelper} from "../helpers/binding-helper";

ko.bindingHandlers["validateProperty"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var validationGroup = BindingHelper.getValidationGroup(bindingContext);
        var propertyPath = valueAccessor();

        valueAccessor().subscribe(() => {
            validationGroup.getPropertyError(propertyPath, true)
                .then(function(error){
                    BindingHelper.handleElementError(element, !error, error);
                });
        });
    }
};

export var validatePropertyBinding: void;