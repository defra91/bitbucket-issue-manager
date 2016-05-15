'use strict';

var utils = require('./utils');
var request = require('request');

var retrieveAll = function(cb) {
	var url = utils.getBaseUrl() + '/issues';

	var options = {
		url: url,
		method: 'GET'
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

var getOneById = function(opts, cb) {
	if (!opts.id) {
		return cb(Error('No issue id specified'));
	}
	var url = utils.getBaseUrl() + '/issues/' + opts.id;

	var options = {
		url: url,
		method: 'GET'
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

var getComponents = function(cb) {

	var url = utils.getBaseUrl() + '/issues/components';

	var options = {
		url: url,
		method: 'GET'
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

var getMilestones = function(cb) {
	var url = utils.getBaseUrl() + '/issues/milestones';

	var options = {
		url: url,
		method: 'GET'
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

var getVersions = function(cb) {
	var url = utils.getBaseUrl() + '/issues/versions';

	var options = {
		url: url,
		method: 'GET'
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

module.exports.retrieveAll   = retrieveAll;
module.exports.getOneById    = getOneById;
module.exports.getComponents = getComponents;
module.exports.getMilestones = getMilestones;
module.exports.getVersions   = getVersions;