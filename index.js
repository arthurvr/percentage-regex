'use strict';
module.exports = function (opts) {
	opts = opts || {};

	return /^(\d+(\.\d+)?|\.\d+) ?%$/;
};
