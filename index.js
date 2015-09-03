'use strict';
module.exports = function (input, include) {
	if (!Array.isArray(input)) {
		return [];
	}

	return input.filter(function (x) {
		return include.indexOf(x) !== -1;
	});
};
