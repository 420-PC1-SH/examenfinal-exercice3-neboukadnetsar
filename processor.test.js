const processor = require('./processor.js');

describe("transmission processor", function () {

    test("takes a string and returns an object", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("returns -1 if '::' not found", function () {
        let result = processor("9701<489584872710>");
        expect(result).toEqual(-1);
    });

    test("returns id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    test("converts id to a number", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).toEqual(9701);
    });

    test("returns rawData in object", function () {
        let result = processor("9701::<487297403495720912>");
        expect(result.rawData).not.toEqual(undefined);
    });

    test("returns -1 for rawData if missing < at position 0", function () {
        let result = processor("9701::487297403495720912>");
        expect(result).toEqual(-1);
    });

    test("returns -1 if missing > at position the end", function () {
        let result = processor("9701::<487297403495720912");
        expect(result).toEqual(-1);
    });

    test("returns -1 if missing > at position the end < and >", function () {
        let result = processor("9701::487297403495720912");
        expect(result).toEqual(-1);
    });

    test("returns -1 if missing > at position the end < and >", function () {
        let result = processor("9701::487297403495720912");
        expect(result).toEqual(-1);
    });

    test("returns -1 if id cannot be converted to Number", function () {
        let result = processor("abc::<487297403495720912>");
        expect(result).toEqual(-1);
    });

    test("returns -1 if rawData contains anything than Number between <>", function() {
        let result = processor("9701::<48958abc4872710>");
        expect(result).toEqual(-1);
    });
});