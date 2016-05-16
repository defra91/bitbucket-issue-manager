'use strict';

var inquirer     = require('inquirer');
var httpRequest  = require('./http-request');
var utils        = require('./utils');
var async        = require('async');
var q            = require('q');
var retrieveCtrl = require('./retrieve-ctrl'); 

var postIssue = function(issue, cb) {
	httpRequest.request({
		url: utils.getBaseUrl() + '/issues',
		method: 'POST',
		form: issue
	}, cb);
};

var createIssueFromPrompt = function() {

	var components, milestones, versions;

	var deferred = q.defer();

	async.parallel([
		retrieveCtrl.getComponents,
		retrieveCtrl.getMilestones,
		retrieveCtrl.getVersions
	], function(err, results) {
		if (err) {
			deferred.reject(err);
			return;
		} 
		components = results[0];
		milestones = results[1];
		versions   = results[2];

		var questions = [
			{
				type: 'input',
				name: 'title',
				message: 'Title'
			},
			{
				type: 'input',
				name: 'content',
				message: 'Description'
			},
			{
				type: 'input',
				name: 'responsible',
				message: 'Assignee'
			},
			{
				type: 'list',
				name: 'kind',
				message: 'Kind',
				choices: ['bug', 'enhancement', 'proposal', 'task']
			},
			{
				type: 'list',
				name: 'priority',
				message: 'Priority',
				choices: ['trivial', 'minor', 'major', 'critical', 'blocker']
			}
		];

		if (components.length) {
			questions.push({
				type: 'list',
				name: 'component',
				message: 'Component',
				choices: function() {
					var choices = ['(no component)'];
					choices = choices.concat(components.map(function(component) {
						return component.name;
					}));	
					return choices;
				}
			});
		}

		if (milestones.length) {
			questions.push({
				type: 'list',
				name: 'milestone',
				message: 'Milestone',
				choices: function() {
					var choices = ['(no milestone)'];
					choices = choices.concat(milestones.map(function(milestone) {
						return milestone.name;
					}));
					return choices;
				}
			});
		}

		if (versions.length) {
			questions.push({
				type: 'list',
				name: 'version',
				message: 'Version',
				choices: function() {
					var choices = ['(no version)'];
					choices = choices.concat(versions.map(function(milestone) {
						return milestone.name;
					}));
					return choices;
				}
			});
		}

		inquirer.prompt(questions).then(function(issue) {

			Object.keys(issue).forEach(function(key) {
				if (/.*\(.*\).*/g.test(issue[key])) {
					delete issue[key];
				}
				if (!issue[key] || !issue[key].length) {
					delete issue[key];
				}
			});

			postIssue(issue, function(err, newIssue) {
				if (err) {
					deferred.reject(err);
				} else {
					deferred.resolve(newIssue);
				}
			});
		});
	});

	return deferred.promise;

};	

module.exports.createIssueFromPrompt = createIssueFromPrompt;