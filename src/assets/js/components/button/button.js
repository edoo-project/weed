/**
 * @ngdoc function
 * @name weed.directive: weNavbar
 * @description
 * # navbarDirective
 * Directive of the app
 * TODO: to-load, button-groups
 */

(function(angular){
  'use strict';

  angular.module('weed.button', ['weed.core'])
    .directive('weButton', function() {
      return {
        restrict: 'A',
        transclude: true,
        replace: true,
        scope: {
            icon: '@',
            type: '@',
            toload: '@',
            size: '@',
            state: '@'
        },
        templateUrl: 'components/button/button.html',
        link: function(scope, elem, attrs, controllers, $transclude) {
          $transclude(function(clone){
            scope.hasText = clone.length > 0;
          });
        }
      };
    });

})(angular);