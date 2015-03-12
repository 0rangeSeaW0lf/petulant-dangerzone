'use strict';

angular.module('workspace')
  .controller('MainCtrl',function(){})
  .directive('yoYo', function(){
    return {
      // template: '<strong>Yo!<strong>',
      template: '<div class="yo-yo">Yo <span ng-transclude></span>!</div>',
      transclude: true,
      restrict: 'E',
      replace: true
    };
  });
