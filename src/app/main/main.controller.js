'use strict';

angular.module('workspace')
  .controller('MainCtrl',function(){})
  .directive('signIn', function(){
    return {
      // template: '<strong>Yo!<strong>',
      templateUrl: 'app/main/simpleform.html',
      transclude: true,
      restrict: 'E',
      replace: true
    };
  });
