import * as ko from "knockout";
export * from "treacherous";

import {createGroup, ReactiveValidationGroupBuilder, ModelResolverFactory} from "treacherous";

import {KnockoutPropertyResolver} from "./model-watcher/knockout-property-resolver";
import {KnockoutModelWatcherFactory} from "./model-watcher/knockout-model-watcher-factory";
import {InlineValidatior} from "./validators/inline-validator";
import {SimpleValidationSummary} from "./validators/simple-validation-summary";

var knockoutPropertyResolver = new KnockoutPropertyResolver();
var knockoutModelWatcherFactory = new KnockoutModelWatcherFactory(knockoutPropertyResolver);
var modelResolverFactory = new ModelResolverFactory(knockoutPropertyResolver);

export function createGroup(): ReactiveValidationGroupBuilder
{
    return createGroup()
        .andValidateOnStart()
        .asReactiveGroup()
        .withModelWatcherFactory(knockoutModelWatcherFactory)
        .withModelResolverFactory(modelResolverFactory);
}

ko["validation"] = {
    validator: new InlineValidatior(),
    validationSummary: new SimpleValidationSummary()
};