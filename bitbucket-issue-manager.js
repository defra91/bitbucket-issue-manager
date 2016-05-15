'use strict';

var retrieveCtrl = require('./lib/retrieve-ctrl');
var createCtrl = require('./lib/create-ctrl');
var printer = require('./lib/printer');

var retrieveAll = function(cb) {

	retrieveCtrl.retrieveAll(function(err, response) {
		if (err) {
			cb(err);
		} else {
			printer.printAllIssues(response.issues);
			cb(null, response);
		}
	});
};

var getOneById = function(opts, cb) {

	retrieveCtrl.getOneById({
		id: opts.id
	}, function(err, response) {
		if (err) {
			cb(err);
		} else {
			printer.printOneIssue(response);
			cb(null, response);
		}
	});

};

var createIssueFromPrompt = function() {
	return createCtrl.createIssueFromPrompt().then(function(issue) {
		printer.printOneIssue(issue);
		return issue;
	});
};

module.exports.retrieveAll = retrieveAll;
module.exports.getOneById = getOneById;
module.exports.createIssueFromPrompt = createIssueFromPrompt;