import * as ko from "knockout";
import {BindingHelper} from "../helpers/binding-helper";

ko.bindingHandlers["validateProperty"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var validationGroup = BindingHelper.getValidationGroup(bindingContext);
        var propertyPath = valueAccessor();

        if(validationGroup)
        {
            BindingHelper.setupValidationListener(validationGroup, propertyPath, element);
            validationGroup.getPropertyError(propertyPath)
                .then(function(error){
                    BindingHelper.handleElementError(element, !error, error);
                });
        }
    }
};