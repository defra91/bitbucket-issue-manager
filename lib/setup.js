'use strict';

var prompt = require('prompt');
var fs = require('fs');

var configFileName = __dirname + '/../config.json';

var config = fs.readFileSync(configFileName, 'utf-8');
config = JSON.parse(config);

var schema = {
	properties: {
		'repositoryOwner': {
			required: true
		},
		'repositoryName': {
			required: true,
		},
		'username': {
			required: false
		},
		'password': {
			required: false,
			hidden: true
		}
	}
};

module.exports = function(cb) {

	prompt.start();

	prompt.get(schema, function(err, result) {
		if (err) {
			return cb(err);
		}
		var authToken = 'Basic ' + new Buffer(result.username + ':' + result.password).toString('base64');
		config.ACCOUNT_NAME = result.repositoryOwner;
		config.REPO_SLUG = result.repositoryName;
		config.AUTH_TOKEN = authToken;
		fs.writeFile(configFileName, JSON.stringify(config, null, 4), function(err) {
		console.log(JSON.stringify(config, null, 4));
			if (err) {
				return cb(err);
			} else {
				cb(null, err);
			}
		});
	});
};