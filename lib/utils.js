'use strict';

var config = require('./config');
var _ = require('lodash');

var monthNames = [
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December'
];

var getBaseUrl = function() {
	console.log(JSON.stringify(config, null, 4));
	return _.template('<%=SCHEMA%>://<%=HOST%>/<%=ACCOUNT_NAME%>/<%=REPO_SLUG%>')(config);
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