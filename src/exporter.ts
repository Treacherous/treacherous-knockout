import * as ko from "knockout";
export * from "treacherous";
export * from "treacherous-view";

import {createGroup, ModelResolverFactory, ValidationGroupBuilder, ReactiveValidationGroupBuilder} from "treacherous";

import {KnockoutPropertyResolver} from "./model-watcher/knockout-property-resolver";
import {KnockoutModelWatcherFactory} from "./model-watcher/knockout-model-watcher-factory";

var knockoutPropertyResolver = new KnockoutPropertyResolver();
var knockoutModelWatcherFactory = new KnockoutModelWatcherFactory(knockoutPropertyResolver);
var modelResolverFactory = new ModelResolverFactory(knockoutPropertyResolver);

export function createGroup(): ReactiveValidationGroupBuilder
{
    return createGroup()
        .andValidateOnStart()
        .asReactiveGroup()
        .withModelResolverFactory(modelResolverFactory)
        .withModelWatcherFactory(knockoutModelWatcherFactory);
}