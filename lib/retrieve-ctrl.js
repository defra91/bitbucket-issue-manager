  'use strict';

var utils       = require('./utils');
var httpRequest = require('./http-request');

var retrieveAll = function(cb) {
	httpRequest.request({
		url: utils.getBaseUrl() + '/issues',
		method: 'GET'
	}, cb);
};

var getOneById = function(opts, cb) {
	httpRequest.request({
		url: utils.getBaseUrl() + '/issues/' + opts.id,
		method: 'GET'
	}, cb);
};

var getComponents = function(cb) {
	httpRequest.request({
		url: utils.getBaseUrl() + '/issues/components',
		method: 'GET'
	}, cb);
};

var getMilestones = function(cb) {
	httpRequest.request({
		url: utils.getBaseUrl() + '/issues/milestones',
		method: 'GET'
	}, cb);
};

var getVersions = function(cb) {
	httpRequest.request({
		url: utils.getBaseUrl() + '/issues/versions',
		method: 'GET'
 	}, cb);
};

module.exports.retrieveAll   = retrieveAll;
module.exports.getOneById    = getOneById;
module.exports.getComponents = getComponents;
module.exports.getMilestones = getMilestones;
module.exports.getVersions   = getVersions;