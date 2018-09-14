import {describe, it} from "mocha";
import {use, expect, assert, spy} from "chai";
import {createRuleset, KnockoutModelWatcher} from "../../src/index";
import * as spies from "chai-spies";
use(spies);

describe('Knockout Model Watcher', function () {

    it('should correctly watch model changes', function (done) {
        var dummyModel = {
            foo: 10,
            bar: [ 10, 20, 30, 40 ],
            woo: {
                poo: 10
            }
        };

        var ruleset = createRuleset()
            .forProperty("foo")
                .addRule("required", true)
            .forProperty("bar")
                .addRule("minLength", 1)
                .addRuleForEach("maxValue", 20)
            .build();

        var modelWatcher = new KnockoutModelWatcher();
        modelWatcher.setupWatcher(dummyModel, ruleset, 50);
        var spySubscription = spy(function(eventArgs){});

        modelWatcher.onPropertyChanged.subscribe(spySubscription);

        dummyModel.foo = null;
        dummyModel.bar[2] = 10;

        setTimeout(function(){
            // once for foo, once for bar, once for bar[2]
            expect(spySubscription).to.have.been.called.three;
            modelWatcher.stopWatching();
            done();
        }, 250);
    });

    it('should correctly watch model with nested rules', function (done) {
        var dummyModel = {
            bar: [
                { val: 10 },
                { val: 20 },
                { val: 30 },
                { val: 40 }
            ]
        };

        var nestedRuleset = createRuleset()
            .forProperty("val")
            .addRule("maxValue", 30)
            .build();

        var ruleset = createRuleset()
            .forProperty("bar")
            .addRulesetForEach(nestedRuleset)
            .build();

        var modelWatcher = new KnockoutModelWatcher();
        modelWatcher.setupWatcher(dummyModel, ruleset, 50);
        var spySubscription = spy(function(eventArgs){});

        modelWatcher.onPropertyChanged.subscribe(spySubscription);

        dummyModel.bar[2].val = 10;

        setTimeout(function(){
            expect(spySubscription).to.have.been.called.once;
            modelWatcher.stopWatching();
            done();
        }, 250);
    });

    it('should correctly notice array size changes', function (done) {
        var dummyModel = {
            foo: 10,
            bar: [ 10, 20 ]
        };

        var ruleset = createRuleset()
            .forProperty("foo")
            .addRule("required", true)
            .forProperty("bar")
            .addRule("minLength", 1)
            .addRuleForEach("maxValue", 20)
            .build();

        var modelWatcher = new KnockoutModelWatcher();
        modelWatcher.setupWatcher(dummyModel, ruleset, 50);
        var spySubscription = spy(function(eventArgs){ console.log("event", eventArgs); });

        modelWatcher.onPropertyChanged.subscribe(spySubscription);

        console.log("watcher before", modelWatcher["watchCache"]);

        dummyModel.bar.push(30);

        console.log("watcher after", modelWatcher["watchCache"]);

        setTimeout(function(){
            expect(spySubscription).to.have.been.called.exactly(2);
            modelWatcher.stopWatching();
            done();
        }, 250);
    });

    it('should only watch properties with rules', function () {
        var dummyModel = {
            foo: 0,
            bar: [
                { val: 10 },
                { val: 20 }
            ],
            blah: {
                test: { woop: 20 }
            }
        };

        var woopRuleset = createRuleset()
            .forProperty("woop")
            .addRule("maxValue", 10)
            .build();

        var testRuleset = createRuleset()
            .forProperty("test")
            .addRuleset(woopRuleset)
            .build();

        var ruleset = createRuleset()
            .forProperty("blah")
            .addRuleset(testRuleset)
            .build();

        var modelWatcher = new KnockoutModelWatcher();
        modelWatcher.setupWatcher(dummyModel, ruleset, 50);

        expect(modelWatcher["watchCache"].length).to.equal(1);
        expect(modelWatcher["watchCache"][0].propertyPath).to.equal("blah.test.woop");
        expect(modelWatcher["watchCache"][0].previousValue).to.equal(20);
        modelWatcher.stopWatching();
    });

});