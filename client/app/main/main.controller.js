'use strict';

angular.module('comingSoonApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.users = [];
    $scope.newUser = {};
    $scope.step = 1;
    $scope.submitted = false;

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });

    $scope.addUser = function() {
      if($scope.newUser === '') {
        return;
      }
      $http.post('/api/users', { user: $scope.newUser }).success(function() {
        $scope.newUser = '';
        $scope.submitted = true;
      });
    };

    $scope.onUserChange = function(newValue, oldValue, scope) {
      if(newValue != oldValue) {
        switch($scope.step) {
          case 2:
            if($scope.newUser.hairdresser === "true") {
              $scope.step++;
            } else {
              $scope.step = 5;
            }
            break;
          case 3:
            if($scope.newUser.pro === "true") {
              $scope.step++;
            } else {
              $scope.step = 5;
            }
            break;
          case 5:
            break;
          default:
            $scope.step++;
        }
      }
    };

    $scope.$watch('newUser', $scope.onUserChange, true);
  });