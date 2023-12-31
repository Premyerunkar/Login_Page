
        var app = angular.module('formApp', []);
        app.controller('formController', function ($scope) {
            $scope.user = {};
            $scope.submitted = false;
            $scope.submitForm = function () {
                if ($scope.myForm.$valid) {
                    $scope.submitted = true;
                }
            }
        });
   