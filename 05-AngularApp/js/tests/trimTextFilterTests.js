describe("trimText Filter", function(){
    beforeEach(module("greetingApp"));

    it("Should display the given string if it is shorter", inject(function($filter){
        var trimTextFilter = $filter("trimText");

        var input = "short string";

        var expectedResult = input;

        var result = trimTextFilter(input);

        expect(result).to.be(expectedResult);
    }));
    it("Should trim the given string if it is longer than 20", inject(function($filter){
        var trimTextFilter = $filter("trimText");

        var input = "this is a very very long string for testing purpose";

        var expectedResult = "this is a very very ...";

        var result = trimTextFilter(input);

        expect(result).to.be(expectedResult);
    }));
});
