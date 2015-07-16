describe("greetController", function(){
    //before(module("greetingApp"));
    //var expect = chai.expect;

    beforeEach(module("greetingApp"));

    it("Should initialize the name with empty string", inject(function($controller){

        var mockScope = {};
        $controller('greetController', {$scope : mockScope});

        expect(mockScope.name).to.be('');
    }));
    it("Should initialize the greetMsg with empty string", inject(function($controller){

        var mockScope = {};
        $controller('greetController', {$scope : mockScope});

        expect(mockScope.greetMsg).to.be('');
    }));
    it("Should populate greetMsg when greeted", inject(function($controller){

        var mockGreetService = {};
        mockGreetService.greet = function(){
            return "Hi there";
        };
        var mockScope = {};
        $controller('greetController', {$scope : mockScope, greetService : mockGreetService});

        mockScope.name = 'Magesh';
        var expectedResult = "Hi there";
        mockScope.greet();
        expect(mockScope.greetMsg).to.be(expectedResult);
    }));

});




