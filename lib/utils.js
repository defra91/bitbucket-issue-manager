'use strict';

var fs = require('fs');
var _ = require('lodash');

var monthNames = [
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December'
];

var getBaseUrl = function() {
	var config = fs.readFileSync(__dirname + '/../config.json', 'utf-8');
	config = JSON.parse(config);
	return _.template('<%=HOST%>/<%=ACCOUNT_NAME%>/<%=REPO_SLUG%>')(config);
};	

var getConfig = function() {
	return JSON.parse(fs.readFileSync(__dirname + '/../config.json', 'utf-8'));
};

var formatDate = function(date) {
	return _.template('<%=DAY%> <%=MONTH%> <%=YEAR%>')({
		DAY: date.getDate(),
		MONTH: monthNames[date.getMonth()],
		YEAR: date.getFullYear()
	});
};

module.exports.getBaseUrl = getBaseUrl;
module.exports.formatDate = formatDate;
module.exports.getConfig = getConfig;