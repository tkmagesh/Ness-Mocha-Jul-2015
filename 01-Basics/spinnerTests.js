describe("A Spinner", function(){
    it("Up should increment the value", function(){
        //arrange
        var spinner = getSpinner();
        var currentValue = spinner.getValue();
        var expectedResult = currentValue + 1;
        
        //act
        spinner.up();
        
        //assert
        var result = spinner.getValue();
        expect(result).to.be(expectedResult);
    });
});