'use strict';

var utils = require('./utils');
var request = require('request');

var retrieveAll = function(cb) {
	var url = utils.getBaseUrl();

	request({
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

var getOneById = function(opts, cb) {
	if (!opts.id) {
		return cb(Error('No issue id specified'));
	}
	var url = utils.getBaseUrl() + '/issues/' + opts.id;

	request({
		url: url,
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
module.exports.getOneById = getOneById;