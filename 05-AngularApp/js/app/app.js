var greetingApp = angular.module("greetingApp", []);

greetingApp.service("greetService", function(){
    this.greet = function(name){
        return "Hi " + name + ", Have a nice day!";
    }
});

greetingApp.controller("greetController", function($scope, greetService){
   $scope.name = '';
    $scope.greetMsg = '';
    $scope.greet = function(){
        $scope.greetMsg = greetService.greet($scope.name);
    }
});

greetingApp.filter("trimText", function(){
    return function(data){
        return data.length > 20 ? data.substr(0,20) + "..." : data;
    };
});
