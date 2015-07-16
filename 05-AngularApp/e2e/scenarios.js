describe("greeting application", function(){
    beforeEach(function(){
        browser.get("index.html");
    });

    it("Should greet the user", function(){
        var txtName = element(by.model("name"));
        txtName.sendKeys("Magesh");

        var btnGreet = element(by.buttonText("Greet"));
        btnGreet.click();

        var div = element(by.binding("greetMsg"));
        expect(div.getText()).toBe("Hi Magesh, Have a nice day!");
    });
});
