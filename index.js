'use strict';
module.exports = function (opts) {
	opts = opts || {};

	var reg = '(\\d+(\\.\\d+)?|\\.\\d+) ?%';

	return opts.exact ? new RegExp('^' + reg + '$', 'i') : new RegExp(reg, 'ig');
};
