'use strict';

var retrieveCtrl = require('./lib/retrieve-ctrl');
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

module.exports.retrieveAll = retrieveAll;