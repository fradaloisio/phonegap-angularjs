myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      }).
      when('/login', {
        templateUrl: 'views/login.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);