'use strict';

angular.module('program-studiow')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('program-studiow', {
				url:'/program-studiow',
				templateUrl: 'app/modules/program-studiow/program-studiow.html',
				controller: 'ProgramStudiowCtrl',
				controllerAs: 'vm'
			});
	}]);
