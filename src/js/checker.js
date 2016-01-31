(function() {
	'use strict';

	angular
		.module('app')
		.service('environmentChecker', environmentChecker);

		environmentChecker.$inject = ['config'];

		/**
		 * @ngdoc service
		 * @requires config
		 * @description This services checks your current environment
		 */
		function environmentChecker(config) {

			var _environment = 'development',
			_data = config.environments;

			/**
			 * @ngdoc method
			 * @name app.environmentChecker#_check
			 * @methodOf app.environmentChecker
			 * Checks environments against domains given in the config 
			 */
			function _check() {
				var	location = window.location.href;

				angular.forEach(_data.domains, function(v, k) {
					_.each(v, function(v) {
						if (location.match(v)) {
							_set(k);
						}
					});
				});
			}

			/**
			 * @ngdoc method
			 * @name app.environmentChecker#_get
			 * @methodOf app.environmentChecker
			 * Return current _environment
			 */
			function _get() {
				return _environment;
			}

			 
			/**
			 * @ngdoc method
			 * @name app.environmentChecker#_gset
			 * @methodOf app.environmentChecker
			 * Set current environment
			 */
			function _set(value) {
				_environment = value;
			}

			/**
			 * @ngdoc method
			 * @name app.environmentChecker#_gset
			 * @methodOf app.environmentChecker
			 * @param {string} type
			 * @param {bool} addPrefix
			 * Returns url based on given type, adds a prefix if wanted.
			 */
			function _getUrl(type, addPrefix) {
				var url;

				if ( type ) {
					url = _data.vars[_environment][type];
				}

				if ( addPrefix ) {
					url = 'http://' + url;
				}

				return url ? url : '';
			}


			return {
				check: _check,
				get: _get,
				getUrl: _getUrl
			}
		}
})();