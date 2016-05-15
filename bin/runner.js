#! /usr/bin/env node

'use strict';

var program = require('commander');
var bitbucketIssueManager = require('../bitbucket-issue-manager');
var setup = require('../lib/setup');

program
	.version('0.0.0');

program
	.command('setup')
	.description('Configure the access to bitbucket repository')
	.action(function() {
		setup().then(function() {
			console.log('Module successfully configured!');
		}).catch(function(err) {
			console.log('Error while configuring module:');
			console.log(err);
		});
	});

program
	.command('list')
	.description('Display the list of issues from the configured bitbucket repository')
	.option('-s, --status <status>', 'Query issues on status')
	.action(function() {
		bitbucketIssueManager.retrieveAll(function(err) {
			if (err) {
				console.log('Error while retrieving issues');
				console.log(err);
			}
		});
	});

program
	.command('get [id]')
	.description('Display the issue with the specified id')
	.action(function(id) {
		bitbucketIssueManager.getOneById({
			id: id
		}, function(err) {
			if (err) {
				console.log('Error while retrieving issue');
				console.log(err);
			}
		});
	});

program
	.command('create')
	.description('Create a new issue')
	.action(function() {
		bitbucketIssueManager.createIssueFromPrompt(function(err) {
			if (err) {
				console.log('Error while creating issue');
				console.log(err);
			}
		});
	});

program.parse(process.argv);
