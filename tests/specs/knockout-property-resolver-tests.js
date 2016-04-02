var assert = chai.assert;
var expect = chai.expect;

describe('Knockout Property Resolver', function () {

    it('should correctly resolve objects within chain', function () {
        var someObject = {
            somethingElse: {
                somethingMore: {
                    value: 10
                }
            }
        };

        var propertyChainProcessor = new Treacherous.KnockoutPropertyResolver();

        var valuePropertyChain = "somethingElse.somethingMore.value";
        var valueProperty = propertyChainProcessor.resolveProperty(someObject, valuePropertyChain);
        expect(valueProperty).equals(10);

        var objectPropertyChain = "somethingElse.somethingMore";
        var objectProperty = propertyChainProcessor.resolveProperty(someObject, objectPropertyChain);
        expect(objectProperty).eql(someObject.somethingElse.somethingMore);
    });

    it('should correctly resolve objects within arrays', function () {
        var someObject = {
            someArray: [
                { someObject: { value: 1 } }
            ]
        };

        var propertyChainProcessor = new Treacherous.KnockoutPropertyResolver();

        var valuePropertyChain = "someArray[0].someObject.value";
        var valueProperty = propertyChainProcessor.resolveProperty(someObject, valuePropertyChain);
        expect(valueProperty).equals(1);
    });

    it('should correctly resolve when starting in an array', function () {
        var someObject = [
            { someObject: { value: 1 } }
        ];

        var propertyChainProcessor = new Treacherous.KnockoutPropertyResolver();

        var valuePropertyChain = "[0].someObject.value";
        var valueProperty = propertyChainProcessor.resolveProperty(someObject, valuePropertyChain);
        expect(valueProperty).equals(1);
    });

    it('should correctly resolve when ending in an array', function () {
        var someObject = [
            { someObject: { someArray: [ 10, 20 ] } }
        ];

        var propertyChainProcessor = new Treacherous.KnockoutPropertyResolver();

        var valuePropertyChain = "[0].someObject.someArray[1]";
        var valueProperty = propertyChainProcessor.resolveProperty(someObject, valuePropertyChain);
        expect(valueProperty).equals(20);
    });

    it('should correctly resolve objects within arrays within arrays', function () {
        var someObject = {
            someArray: [
                { someObject: [
                        { value: 1 }
                    ]}
            ]
        };

        var propertyChainProcessor = new Treacherous.KnockoutPropertyResolver();

        var valuePropertyChain = "someArray[0].someObject[0].value";
        var valueProperty = propertyChainProcessor.resolveProperty(someObject, valuePropertyChain);
        expect(valueProperty).equals(1);
    });


    it('should build a property route', function () {
        var expectedPropertyRoute = "foo.bar[0].moo";
        var somePropertyRoute = [
            "foo",
            "bar",
            "[0]",
            "moo"
        ];

        var propertyChainProcessor = new Treacherous.KnockoutPropertyResolver();

        var actualPropertyRoute = propertyChainProcessor.buildPropertyRoute(somePropertyRoute);
        expect(actualPropertyRoute).equals(expectedPropertyRoute);
    });

    it('should decompose a property route', function () {
        var expectedPropertyRoute = [
            "foo",
            "bar",
            "[0]",
            "moo"
        ];
        var somePropertyRoute = "foo.bar[0].moo";

        var propertyChainProcessor = new Treacherous.KnockoutPropertyResolver();

        var actualPropertyRoute = propertyChainProcessor.decomposePropertyRoute(somePropertyRoute);
        expect(actualPropertyRoute).eql(expectedPropertyRoute);
    });

    it('should get section of a property route', function () {
        var somePropertyRoute = "foo.bar[0].moo";

        var propertyChainProcessor = new Treacherous.KnockoutPropertyResolver();

        var section0 = propertyChainProcessor.getPropertyRouteSection(somePropertyRoute);
        var section1 = propertyChainProcessor.getPropertyRouteSection(somePropertyRoute, 1);
        var section2 = propertyChainProcessor.getPropertyRouteSection(somePropertyRoute, 2);
        var section3 = propertyChainProcessor.getPropertyRouteSection(somePropertyRoute, 3);

        expect(section0).equals("foo");
        expect(section1).equals("bar");
        expect(section2).equals("[0]");
        expect(section3).equals("moo");
    });

});