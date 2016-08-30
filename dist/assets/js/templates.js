angular.module("weed").run(["$templateCache",function(n){n.put("components/button/button_a.html","<a ng-class=\"{\n    'button': true,\n    'button-primary': color === 'primary',\n    'button-success': color === 'success',\n    'button-warning': color === 'warning',\n    'button-danger': color === 'danger',\n    'button-info': color === 'info',\n    'button-gray': color === 'gray',\n    'button-inverse': color === 'inverse',\n\n    'disabled': state === 'disabled',\n    'selected': state === 'selected',\n    'active': state === 'active',\n    'hover': state === 'hover',\n\n    'button-small': size === 'small',\n    'button-large': size === 'large',\n    'button-tiny': size === 'tiny',\n\n    'only-icon': !hasText,\n    'loading': loading\n  }\">\n\n  <!-- If icon has been given -->\n"+'  <we-icon ng-if="icon" icon="{{ icon }}"></we-icon>\n\n  <!-- Text -->\n  <span class="text" ng-if="hasText">\n    <ng-transclude></ng-transclude>\n  </span>\n\n  <!-- If it\'s loading -->\n  <div ng-if="loading" class="loader">...</div>\n</a>')}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/button/button_button.html","<button ng-class=\"{\n    'button': true,\n    'button-primary': color === 'primary',\n    'button-success': color === 'success',\n    'button-warning': color === 'warning',\n    'button-danger': color === 'danger',\n    'button-info': color === 'info',\n    'button-gray': color === 'gray',\n    'button-inverse': color === 'inverse',\n\n    'disabled': state === 'disabled',\n    'selected': state === 'selected',\n    'active': state === 'active',\n    'hover': state === 'hover',\n\n    'button-small': size === 'small',\n    'button-large': size === 'large',\n    'button-tiny': size === 'tiny',\n\n    'only-icon': !hasText,\n    'loading': loading\n  }\">\n\n  <!-- If icon has been given -->\n"+'  <we-icon ng-show="icon" icon="{{ icon }}"></we-icon>\n\n  <!-- Text -->\n  <span class="text" ng-if="hasText">\n    <ng-transclude></ng-transclude>\n  </span>\n\n  <!-- If it\'s loading -->\n  <div ng-if="loading" class="loader">...</div>\n</button>')}]);
angular.module("weed").run(["$templateCache",function(e){e.put("components/calendar/calendar-popover.html",'<div class="popover-sections calendar-popover-day">\n  <div class="popover-header popover-header-titled calendar-popover-day-title">\n    <p class="popover-header-title">{{selectedobject.date.format("DD MMMM, YYYY")}}</p>\n  </div>\n  <div class="popover-inner-section calendar-popover-day-content">\n    <div class="calendar-popover-day-activity" ng-repeat="act in selectedobject.activities">\n      <p class="calendar-meeting-inside-place ellipsis">{{act.place}}</p>\n      <p class="calendar-meeting-inside-hour">{{act.formatDate}}</p>\n    </div>\n  </div>\n  </div>\n</div>\n')}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/calendar/calendar.html",'<div class="header">\n    <a\n      we-button\n      size="small"\n      ng-click="previous()"\n      icon="chevron-left"\n      class="calendar-navigation navigation-left left-end"></a>\n      <a\n        we-button\n        size="small"\n        ng-click="today()"\n        class="calendar-navigation navigation-today"\n        color="primary">Hoy</a>\n\n    <span class="calendar-header-month">{{month.format("MMMM [del] YYYY")}}</span>\n\n    <a\n      we-button\n      size="small"\n      icon="chevron-right"\n      ng-click="next()"\n      class="calendar-navigation navigation-right right-end"></a>\n</div>\n<div class="week names">\n    <span class="day-names" ng-repeat="d in weekArray">{{d}}</span>\n</div>\n<div class="week" ng-repeat="week in weeks">\n  <div class="day-cell-number"\n        ng-class="{ \'center-number\': numberposition === \'center\',\'left-upper-number\': numberposition === \'upper-left\', today: day.isToday, \'different-month\': !day.isCurrentMonth, \'selected\': day.date.isSame(selected) }"\n        ng-click="select(day)"\n        ng-repeat="day in week.days"\n        id="{{day.dateId}}">\n  <span class="calendar-number-day">{{day.number}}</span>\n  <div\n    class="calendar-meeting-inside"\n    ng-repeat="act in day.activities | limitTo:limit"\n    ng-click="functionopenselect(act)">\n    <p class="calendar-meeting-inside-place ellipsis">{{act.place}}</p>\n    <p class="calendar-meeting-inside-hour">{{act.formatDate}}</p>\n  </div>\n  <a\n    ng-if="day.activities.length > limit"\n    we-button\n    color="success"\n    size="tiny"\n    class="calendar-meeting-inside-button-more"\n    uib-popover-template="\'components/calendar/calendar-popover.html\'"\n    ng-click="manageClickMore"\n    popover-trigger="outsideClick"\n    popover-placement="right">{{day.activities.length - limit}} MÁS</a>\n  </div>\n</div>\n')}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/forms/inputWrapper.html","<div class=\"input-wrapper\" ng-class=\"\n    {\n      'focus': focused,\n      'input-small': size=='small',\n      'input-large': size=='large',\n      'input-tiny': size=='tiny',\n\n      'loffset-50': leftIcon !== undefined,\n      'roffset-50': rightIcon !== undefined,\n\n      'component-position-left': componentPosition === 'left',\n      'component-position-right': componentPosition === 'right'\n    }\n  \" ng-transclude>\n</div>")}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/icons/icon.html",'<i class="fa fa-{{ icon }}"></i>\n')}]);
angular.module("weed").run(["$templateCache",function(i){i.put("components/notifications/cornerNotifications.html",'<div class="corner-notification {{ ctrl.color }}" ng-show="open" we-closable>\n  <div class="background-mask">\n    <div class="background"></div>\n\n    <div class="grid frame text">\n      <div class="row middle-xs">\n        <div class="col shrink">\n          {{ ctrl.text }}\n        </div>\n      </div>\n    </div>\n\n    <a class="close" we-close>\n      <i class="ic ic-times"></i>\n    </a>\n  </div>\n\n  <div class="notification-tag {{ tag_class }}" style="background-image: url({{ image }})">\n    <i class="ic ic-{{ ctrl.icon }}"></i>\n  </div>\n</div>')}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/list/list-item.html","<li\n        ng-class=\"\n            {\n                'list-item' : true,\n                'active': active,\n                'list-item-success' : color=='success',\n                'list-item-info' : color=='info',\n                'list-item-primary' : color=='primary',\n                'list-item-warning' : color=='warning',\n                'list-item-danger' : color=='danger'\n            }\"\n        ng-transclude>\n</li>")}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/list/list.html","<ul ng-class=\"\n    {\n        'list' : true,\n        'selectable': list.selectable !== undefined,\n        'clickable': list.clickable !== undefined,\n        'list-normal': list.size === undefined,\n        'list-small': list.size=='small',\n        'list-large': list.size=='large',\n        'list-tiny': list.size=='tiny',\n\n        'loffset-50': list.leftIcon !== undefined,\n        'roffset-50': list.rightIcon !== undefined,\n\n        'component-position-right' : list.componentPosition === 'right',\n        'component-position-left' : list.componentPosition === 'left'\n    }\"\n    ng-transclude>\n</ul>")}]);
angular.module("weed").run(["$templateCache",function(a){a.put("components/navbar/navbar.html",'<div class="navbar" ng-transclude></div>\n')}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/navbar/navbarElement.html","<div class=\"navbar-element\"\n  ng-class=\"{\n    'pull-left': position === 'left',\n    'pull-right': position === 'right'\n  }\" ng-transclude>\n</div>\n")}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/navbar/navbarElementLink.html","<a class=\"navbar-element navbar-link\" \n  ng-class=\"\n    {\n      'pull-left': position === 'left',\n      'pull-right': position === 'right',\n      'with-counter': counter !== undefined\n    }\">\n\n  <span class =\"navbar-element-floater\">\n"+'    <we-icon ng-if="icon !== undefined" icon="{{ icon }}"></we-icon>\n    <span ng-transclude></span>\n  </span>\n\n  <span class="navbar-bubble">{{ counter }}</span>\n</a>\n')}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/navbar/navbarElementLogo.html",'<a class="navbar-element logo"\n  ng-class="{\n    \'pull-left\': position === \'left\',\n    \'pull-right\': position === \'right\'\n  }">\n\n  <span class="navbar-element-floater navbar-isotype"\n    style="background-image: url({{ isotype }})"></span>\n\n  <span class="navbar-element-floater navbar-logotype"\n    style="background-image: url({{ logotype }})"></span>\n</a>\n')}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/navbar/navbarElementMainAction.html",'<a class="navbar-main-action">\n  <i class="icon icon-{{ icon }}"></i>\n</a>\n')}]);
angular.module("weed").run(["$templateCache",function(a){a.put("components/navbar/navbarElementSeparator.html","<div class=\"navbar-separator\" ng-class=\"{ 'pull-left': position==='left', 'pull-right': position==='right'  }\">\n\n</div>\n")}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/navbar/navbarElementUser.html","<a class=\"navbar-element navbar-user user\" \n  ng-class=\"\n    {\n      'pull-left': position === 'left',\n      'pull-right': position === 'right',\n      'no-picture': !userPicture\n    }\">\n\n  <span class=\"navbar-element-floater\">\n"+'    <img ng-attr-src="{{ userPicture }}" ng-if="userPicture" class="picture">\n\n    <span class="data" ng-if="hasText">\n      <span class="name"><ng-transclude></ng-transclude></span>\n      <span class="role">{{ userRole }}</span>\n    </span>\n\n  </span>\n</a>')}]);
angular.module("weed").run(["$templateCache",function(i){i.put("components/popup/popup.html",'<div\n  class="grid frame popup-grid-wrapper"\n  ng-class="{\'is-active\': popup.active}"\n  ng-show="popup.active"\n  we-closable>\n\n  <div ng-if="!avoidCloseOutside" class="popup-veil" we-close></div>\n  <div ng-if="avoidCloseOutside" class="popup-veil"></div>\n\n  <div class="row middle-s">\n    <div class="col shrink">\n      <div class="popup" ng-transclude></div>\n    </div>\n  </div>\n</div>')}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/popup/popupTitle.html",'<div class="popup-title-bar">\n  <ng-transclude></ng-transclude>\n\n  <button we-close class="popup-close"></button>\n</div>')}]);
angular.module("weed").run(["$templateCache",function(e){e.put("components/sidebar/sidebar.html",'<div class="sidebar" ng-transclude></div>')}]);
angular.module("weed").run(["$templateCache",function(a){a.put("components/sidebar/sidebarHeader.html",'<a class="header">\n  <span class="sidebar-isotype"\n    style="background-image: url({{ isotype }})"></span>\n\n  <span class="sidebar-logotype"\n    style="background-image: url({{ logotype }})"></span>\n</a>')}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/sidebar/sidebarLink.html",'<a ng-class="{\n    \'sidebar-bottom-action\': position === \'bottom\'\n  }"\n  we-title="{{ title }}">\n\n  <span class="icon-container">\n    <we-icon icon="{{ icon }}"></we-icon>\n  </span>\n  <span class="center">&nbsp;</span>\n  <span class="text">\n    <ng-transclude></ng-transclude>\n  </span>\n</a>\n')}]);
angular.module("weed").run(["$templateCache",function(t){t.put("components/tabs/tab.html",'<div class="tab-content" ng-show="active" ng-transclude></div>')}]);
angular.module("weed").run(["$templateCache",function(n){n.put("components/tabs/tabset.html",'<div class="tabset" ng-class="{\'vertical-icon\': tabset.iconPosition === \'above\'}">\n  <ul class="tabs">\n    <li\n      class="tab"\n      ng-repeat="tab in tabset.tabs"\n      ng-class="{\n        \'active\': tab.active,\n        \'only-icon\': !tab.heading\n      }">\n\n      <a ng-click="tabset.select(tab)">\n        <we-icon icon="{{ tab.icon }}" ng-show="{{ tab.icon !== undefined }}"></we-icon>\n        <span ng-show="tab.heading !== undefined" class="text">{{ tab.heading }}</span>\n      </a>\n    </li>\n  </ul>\n\n  <ng-transclude>\n  </ng-transclude>\n</div>')}]);