import * as ko from "knockout";

import {ruleRegistry, FieldErrorProcessor, RuleResolver, ValidationGroupFactory, RulesetBuilder, Ruleset, ValidationGroup} from "treacherous";
import {KnockoutModelWatcher} from "./model-watcher/knockout-model-watcher"
import {KnockoutPropertyResolver} from "./model-watcher/knockout-property-resolver";
import {InlineValidatior} from "./validators/inline-validator";
import {SimpleValidationSummary} from "./validators/simple-validation-summary";
export {
    ruleRegistry, FieldErrorProcessor, RuleResolver, ValidationGroupFactory,
    RulesetBuilder, Ruleset, ValidationGroup
} from "treacherous";


var fieldErrorProcessor = new FieldErrorProcessor(ruleRegistry);
var knockoutPropertyResolver = new KnockoutPropertyResolver();
var ruleResolver = new RuleResolver();
var knockoutModelWatcher = new KnockoutModelWatcher(new KnockoutPropertyResolver());
var validationGroupFactory = new ValidationGroupFactory(fieldErrorProcessor, knockoutModelWatcher, knockoutPropertyResolver, ruleResolver);

export function createRuleset(): RulesetBuilder
{
    return new RulesetBuilder().create();
}

export function createWithRules(model: any, rulesCreator: (rulesetBuilder: RulesetBuilder) => Ruleset): ValidationGroup
{
    var ruleset = rulesCreator(new RulesetBuilder());
    return validationGroupFactory.createValidationGroup(model, ruleset);
}

export function create(model: any, ruleset: Ruleset): ValidationGroup
{
    return validationGroupFactory.createValidationGroup(model, ruleset);
}

ko["validation"] = {
    validator: new InlineValidatior(),
    validationSummary: new SimpleValidationSummary()
};