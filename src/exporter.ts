import * as ko from "knockout";

import {
    ruleRegistry, FieldErrorProcessor, RuleResolver, ValidationGroupFactory, RulesetBuilder, Ruleset,
    ValidationGroup, IValidationGroup
} from "treacherous";

import {KnockoutPropertyResolver} from "./model-watcher/knockout-property-resolver";
import {InlineValidatior} from "./validators/inline-validator";
import {SimpleValidationSummary} from "./validators/simple-validation-summary";
import {KnockoutModelWatcherFactory} from "./model-watcher/knockout-model-watcher-factory";
export {
    ruleRegistry, FieldErrorProcessor, RuleResolver, ValidationGroupFactory,
    RulesetBuilder, Ruleset, ValidationGroup
} from "treacherous";

var fieldErrorProcessor = new FieldErrorProcessor(ruleRegistry);
var knockoutPropertyResolver = new KnockoutPropertyResolver();
var ruleResolver = new RuleResolver();
var knockoutModelWatcherFactory = new KnockoutModelWatcherFactory(knockoutPropertyResolver);
var validationGroupFactory = new ValidationGroupFactory(fieldErrorProcessor, knockoutModelWatcherFactory, knockoutPropertyResolver, ruleResolver);

export function createRuleset(): RulesetBuilder
{
    return new RulesetBuilder().create();
}

export function createGroupWithRules(model: any, rulesCreator: (rulesetBuilder: RulesetBuilder) => Ruleset): IValidationGroup
{
    var ruleset = rulesCreator(new RulesetBuilder());
    return validationGroupFactory.createValidationGroup(model, ruleset);
}

export function createGroup(model: any, ruleset: Ruleset): IValidationGroup
{
    return validationGroupFactory.createValidationGroup(model, ruleset);
}

ko["validation"] = {
    validator: new InlineValidatior(),
    validationSummary: new SimpleValidationSummary()
};