'use strict';

var Table = require('cli-table');
var utils = require('./utils');

var printAllIssues = function(issues) {

	var table = new Table({
		head: ['#id', 'Title', 'Type', 'Priority', 'Status', 'Assignee', 'Created', 'Updated']
	});

	issues.forEach(function(issue) {
		var createdOn = new Date(issue.utc_created_on);
		var updatedOn = new Date(issue.utc_last_updated);
		var assignedTo = issue.responsible || null;
		
		if (assignedTo) {
			assignedTo = assignedTo.display_name;
		}

		table.push([
			issue.local_id, 
			issue.title, 
			issue.metadata.kind,
			issue.priority,
			issue.status,
			assignedTo || '',
			utils.formatDate(createdOn),
			utils.formatDate(updatedOn),
		]);
	});

	console.log(table.toString());
};

var printOneIssue = function(issue) {
	var table = new Table();

	var createdOn = new Date(issue.utc_created_on);
	var updatedOn = new Date(issue.utc_last_updated);
	var assignee = issue.responsible;

	if (assignee) {
		assignee = assignee.display_name;
	}

	table.push({'#id': issue.local_id});
	table.push({'Title': issue.title});
	table.push({'Status': issue.status});
	table.push({'Reported by': issue.reported_by.display_name});
	table.push({'Assignee': assignee || ''});
	table.push({'Type': issue.metadata.kind});
	table.push({'Priority': issue.priority});
	table.push({'# Followers': issue.follower_count});
	table.push({'# Comments': issue.comment_count});
	table.push({'Created': utils.formatDate(createdOn)});
	table.push({'Updated': utils.formatDate(updatedOn)});
	table.push({'Version': issue.metadata.version || ''});
	table.push({'Component': issue.metadata.component || ''});
	table.push({'Milestone': issue.metadata.milestone || ''});
	table.push({'Is spam': issue.is_spam});
	
	console.log(table.toString());

	console.log('Description\n\n', issue.content);

};

module.exports.printAllIssues = printAllIssues;
module.exports.printOneIssue = printOneIssue;