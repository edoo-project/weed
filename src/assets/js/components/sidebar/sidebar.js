/**
 * @ngdoc function
 * @name weed.directive: weNavbar
 * @description
 * # navbarDirective
 * Directive of the app
 * Depends upon weInput
 */

(function(angular){
  'use strict';

  angular.module('weed.sidebar', ['weed.core'])
    .directive('weSidebar', ['WeedApi', function(weedApi) {
      var body = angular.element(document.querySelector('body'));

      function openSidebar($scope){
        body.addClass('open-sidebar');
        $scope.open = true;
      }

      function closeSidebar($scope){
        body.removeClass('open-sidebar');
        $scope.open = false;
      }

      return {
        restrict: 'A',
        transclude: true,
        replace: true,
        templateUrl: 'components/sidebar/sidebar.html',
        link: function($scope, elem, attrs, controllers, $transclude){
          weedApi.subscribe(attrs.id, function(id, message){

            switch(message){
              case 'show':
              case 'open':
                openSidebar($scope);
                break;
              case 'close':
              case 'hide':
                closeSidebar($scope);
                break;
              case 'toggle':
                if($scope.open){
                  closeSidebar($scope);
                }
                else{
                  openSidebar($scope);
                }
            }
          });
        }
      };
    }]);
})(angular);

(function(angular){
  'use strict';

  angular.module('weed.sidebar')
    .directive('weSidebarLink', function() {
      return {
        restrict: 'A',
        transclude: true,
        replace: true,
        scope: {
          title: '@',
          icon: '@',
          position: '@'
        },
        templateUrl: 'components/sidebar/sidebarLink.html',
        link: function($scope, elem, attrs, controllers, $transclude){
          $transclude(function(clone){
            if(clone.length > 0){
              $scope.title = clone[0].textContent;
            }
          });
        }
      };
    });
})(angular);

(function(angular){
  'use strict';

  angular.module('weed.sidebar')
    .directive('weSidebarHeader', function() {
      return {
        restrict: 'A',
        transclude: true,
        scope: {
          isotype: '@',
          logotype: '@'
        },
        templateUrl: 'components/sidebar/sidebarHeader.html'
      };
    });
})(angular);