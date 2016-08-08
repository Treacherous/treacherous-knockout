import * as ko from "knockout";

import {
    ruleRegistry, FieldErrorProcessor, RuleResolver, RulesetBuilder, Ruleset,
    ValidationGroup, ValidationGroupBuilder, ReactiveValidationGroupBuilder,
    ModelResolverFactory
} from "treacherous";

import {KnockoutPropertyResolver} from "./model-watcher/knockout-property-resolver";
import {InlineValidatior} from "./validators/inline-validator";
import {SimpleValidationSummary} from "./validators/simple-validation-summary";
import {KnockoutModelWatcherFactory} from "./model-watcher/knockout-model-watcher-factory";
export {
    ruleRegistry, FieldErrorProcessor, RuleResolver,
    RulesetBuilder, Ruleset, ValidationGroup
} from "treacherous";

var fieldErrorProcessor = new FieldErrorProcessor(ruleRegistry);
var knockoutPropertyResolver = new KnockoutPropertyResolver();
var knockoutModelWatcherFactory = new KnockoutModelWatcherFactory(knockoutPropertyResolver);
var modelResolverFactory = new ModelResolverFactory(knockoutPropertyResolver);

var fieldErrorProcessor = new FieldErrorProcessor(ruleRegistry);
var ruleResolver = new RuleResolver();

export function createRuleset(withRuleVerification = false): RulesetBuilder
{
    var rulesetBuilder = withRuleVerification ? new RulesetBuilder(ruleRegistry) : new RulesetBuilder();
    return rulesetBuilder.create();
}

export function createGroup(): ReactiveValidationGroupBuilder
{
    return new ValidationGroupBuilder(fieldErrorProcessor, ruleResolver)
        .create()
        .asReactiveGroup()
        .withModelWatcherFactory(knockoutModelWatcherFactory)
        .withModelResolverFactory(modelResolverFactory);
}

ko["validation"] = {
    validator: new InlineValidatior(),
    validationSummary: new SimpleValidationSummary()
};