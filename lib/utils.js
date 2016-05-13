'use strict';

var config = require('./config');
var _ = require('lodash');

var buildUrl = function() {
	return _.template('<%=SCHEMA%>://<%=HOST%>/<%=ACCOUNT_NAME%><%=REPO_SLUG%>')(config);
};	

module.exports.buildUrl = buildUrl;