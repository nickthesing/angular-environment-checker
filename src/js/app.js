(function() {
	'use scrict';

	angular.module('app', [])

		/*
		* Application config
		*/
		.constant('config', {

			version: '0.0.1',

			environments: {

				// Application possible domains
				domains: {
					local: ['local'],
					test: ['webtest'],
					development: ['webdev']
				},

				// Vars based on domains 
				vars: {
					local: {
						api: 'localhost:3005/api/v1',
						auth: 'localhost:3006/auth/'
					},
					development: {
						api: '/api/v1',
						auth: 'dev.domain.com/auth/'
					},
					test: {
						api: '/api/v1',
						auth: 'test.domain.com/auth/'
					}
				}
			}
		});

})();