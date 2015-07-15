function Greeter(){
    this.name = '';
    this.greetMsg = '';
}
Greeter.prototype.greet = function(){
    var hour = new Date().getHours();
    if (hour < 12){
        this.greetMsg = 'Hi ' + this.name + ', Good Morning!';
    } else {
        this.greetMsg = 'Hi ' + this.name + ', Good Evening!';
    }
}

module.exports = Greeter;