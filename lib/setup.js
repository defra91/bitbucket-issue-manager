'use strict';

var inquirer = require('inquirer');
var q        = require('q');
var fs       = require('fs');

var configFileName = __dirname + '/../config.json';

var config = fs.readFileSync(configFileName, 'utf-8');
config = JSON.parse(config);

var questions = [
	{
		type: 'input',
		name: 'repositoryOwner',
		message: 'Repository owner'
	},
	{
		type: 'input',
		name: 'repositoryName',
		message: 'Repository name'
	},
	{
		type: 'input',
		name: 'username',
		message: 'Username'
	},
	{
		type: 'password',
		name: 'password',
		message: 'Password'
	}
];

module.exports = function() {

	var deferred = q.defer();

	inquirer.prompt(questions).then(function(answers) {

		var authToken;

		if (answers.username && answers.username.length && answers.password && answers.password.length) {
			authToken = 'Basic ' + new Buffer(answers.username + ':' + answers.password).toString('base64');
		}

		config.ACCOUNT_NAME = answers.repositoryOwner;
		config.REPO_SLUG    = answers.repositoryName;
		config.AUTH_TOKEN   = authToken || null;

		fs.writeFile(configFileName, JSON.stringify(config, null, 4), function(err) {
			if (err) {
				deferred.reject(err);
			} else {
				deferred.resolve(config);
			}
		});
	});

	return deferred.promise;
};