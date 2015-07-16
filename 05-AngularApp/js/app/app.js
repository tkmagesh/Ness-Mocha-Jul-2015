 var greetingApp = angular.module("greetingApp", []);
        greetingApp.controller("greetController", function($scope){
           $scope.name = '';
            $scope.greetMsg = '';
            $scope.greet = function(){
                $scope.greetMsg = "Hi " + $scope.name + ", Have a nice day!"
            }
        });
