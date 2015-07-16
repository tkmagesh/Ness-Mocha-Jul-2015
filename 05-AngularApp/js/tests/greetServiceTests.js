describe("greetService", function(){
    beforeEach(module("greetingApp"));

    it("Should return the message when greeted", inject(function(greetService){
        var name = "Magesh";

        var expectedResult = "Hi Magesh, Have a nice day!";

        var result = greetService.greet(name);

        expect(result).to.be(expectedResult);
    }))
});
