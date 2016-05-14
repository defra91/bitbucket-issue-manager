'use strict';

var utils = require('./utils');
var request = require('request');

var retrieveAll = function(cb) {
	var url = utils.getBaseUrl();

	request.get({
		url: url + '/issues',
		method: 'GET'
	}, function(err, response, body) {
		if (err) {
			cb(err);
		} else {
			cb(null, JSON.parse(body));
		}
	});
};

module.exports.retrieveAll = retrieveAll;