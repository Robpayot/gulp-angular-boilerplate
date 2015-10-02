# Initiate your app
angular
	.module('myApp', ['ngSanitize','ui.router'])
    .config ($stateProvider, $urlRouterProvider) ->
      
      #For any unmatched url, redirect to /
      $urlRouterProvider.otherwise("/")

      #Now set up the states
      $stateProvider
        .state 'home',
          url: "/"
          templateUrl: "views/home.html"
          controller: 'HomeCtrl'

        .state 'example',
          url: "/example"
          templateUrl: "views/example.html"
          controller: 'ExampleCtrl'