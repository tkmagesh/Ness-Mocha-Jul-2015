var Greeter = require("./greeter.js");
var expect = require("./expect.js");




describe("Greeter", function(){
    it("Should greet with 'Good Morning' if time < 12", function(){
        //Arrange
        var greeter = new Greeter();
        var name = 'Magesh';
        var expectedResult = 'Hi Magesh, Good Morning!';
        var original_getHours = Date.prototype.getHours;
        
        Date.prototype.getHours = function(){
            return 10;
        };
        //Act
        greeter.name = name;
        greeter.greet();
        
        //Assert
        expect(greeter.greetMsg).to.be(expectedResult);
        Date.prototype.getHours = original_getHours;
    });
    it("Should greet with 'Good Evening' if time >= 12", function(){
        //Arrange
        var greeter = new Greeter();
        var name = 'Magesh';
        var expectedResult = 'Hi Magesh, Good Evening!';
        var original_getHours = Date.prototype.getHours;
        
        Date.prototype.getHours = function(){
            return 14;
        };
        //Act
        greeter.name = name;
        greeter.greet();
        
        //Assert
        expect(greeter.greetMsg).to.be(expectedResult);
        Date.prototype.getHours = original_getHours;
    });
});