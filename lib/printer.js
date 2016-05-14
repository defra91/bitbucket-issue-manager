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
		
		console.log(JSON.stringify(issue.metadata));

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

module.exports.printAllIssues = printAllIssues;