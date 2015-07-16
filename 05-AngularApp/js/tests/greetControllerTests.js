describe("greetController", function(){
    //before(module("greetingApp"));
    //var expect = chai.expect;

    beforeEach(module("greetingApp"));

    it("Should initialize the name with empty string", inject(function($controller){

        var mockScope = {};
        $controller('greetController', {$scope : mockScope});

        expect(mockScope.name).to.be('');
    }));
});
