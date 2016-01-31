(function() {
	'use strict';

	angular
		.module('app')
		.controller('appController', appController);

		appController.$inject = ['environmentChecker'];

		function appController(environmentChecker) {
			var vm = this;

			// Check the environment
			environmentChecker.check();

			// Show environment in view
			vm.environment = environmentChecker.get();

			// Log is king
			console.log('Currently on: ', environmentChecker.get());
			console.log('Using api:', environmentChecker.getUrl('api'));
			console.log('Using Credentials:', environmentChecker.getUrl('auth', true));
		}
})();