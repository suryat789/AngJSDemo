'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {
      $scope.dataLoading = true;
      /*console.warn("Print: " + $scope.username + ":" + $scope.password)*/
      if ($scope.username == 'admin' && $scope.password == 'admin123'){
        $location.path('/dashboard');
      }
      else {
        alert ("Invalid Username/Password")
        $scope.dataLoading = false;
      }
      return false;
    }

  });
