(function(angular){
  'use strict';

  // TODO
  angular
    .module('weed.corner-notifications', ['weed.core'])
    .directive('weCornerNotification', cornerNotificationDirective);

  cornerNotificationDirective.$inject = ['WeedApi', '$timeout'];

  function cornerNotificationDirective(WeedApi, $timeout){

    // Injection
    cornerNotificationsController.$inject = ['$scope'];

    return {
      restrict: 'A',
      replace: true,
      templateUrl: 'components/notifications/cornerNotifications.html',
      scope: {
        color: '@',
        icon: '@',
        text: '@',
        timeout: '@'
      },
      controller: cornerNotificationsController,
      controllerAs: 'ctrl',
      link: function($scope, elem, attrs, controllers, $transclude){
        $scope.open = false;
        $scope.timeout = $scope.timeout ? parseFloat($scope.timeout) : 1000;

        WeedApi.subscribe(attrs.id, function(id, message){
          switch(message){
            case 'show':
            case 'open':
              $scope.open = true;

              // Close after a timeout
              $timeout(function(){
                $scope.open = false;
              }, $scope.timeout);
              break;

            case 'close':
            case 'hide':
              $scope.open = false;
              break;

            case 'toggle':
              if($scope.open){
                $scope.open = false;
              }
              else{
                $scope.open = true;

                // Close after a timeout
                $timeout(function(){
                  $scope.open = false;
                }, $scope.timeout);
              }
              break;

            default:
              controllers.text = message.text;
              controllers.color = message.color;
              controllers.icon = message.icon;
              $scope.timeout = message.timeout;
              $scope.open = true;

              // Close after a timeout
              $timeout(function(){
                $scope.open = false;
              }, $scope.timeout);
          }
        });
      }
    };

    function cornerNotificationsController($scope){
      var vm = this;
      vm.icon = $scope.icon;
      vm.color = $scope.color;
      vm.text = $scope.text;
    }
  }


})(angular);