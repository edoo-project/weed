(function(angular){
  'use strict';

  angular.module(
    'weed', [
      'weed.core',
      'weed.auth.jwt',
      'weed.common',
      'weed.button',
      'weed.icon',
      'weed.forms',
      'weed.navbar',
      'weed.popup',
      'weed.tabs',
      'weed.sidebar',
      'weed.toload',
      'weed.corner-notifications',
      'ui.bootstrap',
      'ui.bootstrap.typeahead'
    ])
    .constant('weed.config', {});
})(angular);
