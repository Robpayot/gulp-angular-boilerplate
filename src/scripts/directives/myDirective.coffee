'use strict'

angular.module 'myApp'
.directive 'myDirective', () ->
	restrict: 'EA'
	template: '<h2> Angular app ready! </h2>'
	scope: true
	link: (scope, element, attrs) ->