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

var getOneById = function(id, cb) {

	retrieveCtrl.getOneById(id, function(err, response) {
		if (err) {
			cb(err);
		} else {
			printer.printOneIssue(response);
			cb(null, response);
		}
	});

};

module.exports.retrieveAll = retrieveAll;
module.exports.getOneById = getOneById;