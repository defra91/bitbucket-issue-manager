'use strict';

var request = require('request');
var utils = require('./utils');

module.exports.request = function(opts, cb) {

	var options = {
		url: opts.url,
		method: opts.method,
		form: opts.form
	};

	var config = utils.getConfig();

	if (config.AUTH_TOKEN) {
		options.headers = {};
		options.headers['Authorization'] = config.AUTH_TOKEN;
	} 

	request(options, function(err, response, body) {
		if (err) {
			cb(err);
		} else if (response.statusCode !== 200) {
			cb(body);
		} else {
			cb(null, JSON.parse(body));
		}
	});
};